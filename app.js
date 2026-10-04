import * as THREE from './vendor/three.module.min.js';
import { OrbitControls } from './vendor/OrbitControls.js';
import { RoomEnvironment } from './vendor/RoomEnvironment.js';

const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const state = { mode: 'outside', step: 'overview', playing: !reduceMotion, speed: 1, heat: .7, flows: true, phase: 0, time: 0, cover: 0, rendered: false };
const steps = ['overview','boiler','turbine','generator','condenser'];
const detail = {
 overview: {title:'見えないところで、<br>つながっている。', text:'燃料を燃やした熱で水を蒸気にし、その力でタービンを回します。つながった発電機で、回転のエネルギーが電気へ変わります。', tag:'化学エネルギー → 熱 → 回転 → 電気', note:'エネルギーはゼロから生まれるのではなく、形を変えて受け渡されます。'},
 boiler: {title:'熱を受け取って、<br>水から蒸気へ。', text:'燃料が燃えると熱が出ます。炉の中の管を通る水が熱を受け取り、高温・高圧の蒸気になります。蒸気は上の配管からタービンへ。', tag:'燃料の化学エネルギー → 熱', note:'炎がタービンを直接回すのではありません。燃焼ガスと水・蒸気は、管の壁をはさんだ別の流れです。'},
 turbine: {title:'蒸気が羽根を押す。<br>軸が回り出す。', text:'蒸気は固定羽根で向きを整えられ、回転羽根を押します。羽根と一体の軸が回り、その回転を発電機へ伝えます。蒸気は仕事をして、圧力と温度が下がります。', tag:'蒸気のエネルギー → 回転のエネルギー', note:'銀色の羽根が軸と一緒に回り、外側についた固定羽根は止まったまま。実物は高速回転するため、動きを遅く表示しています。'},
 generator: {title:'回る磁石が、<br>電気を生み出す。', text:'タービンにつながった磁石が、固定されたコイルの内側で回ります。コイルを通る磁界のようすが変化して電圧が生じ、つながった送電回路へ交流の電気エネルギーを送り出します。', tag:'回転のエネルギー → 電気エネルギー', note:'赤・青はN極・S極。実物の磁石は電磁石です。波形は1組のコイルに生じる電圧の模式図。黄色の光は電気エネルギーの伝わる向きで、電子の動きではありません。'},
 condenser: {title:'冷やして戻す。<br>水の旅はつづく。', text:'仕事を終えた蒸気は、冷たい水が通る管に触れて熱を失い、水へ戻ります。給水ポンプがその水をボイラーへ送り、同じ水が繰り返し使われます。', tag:'蒸気 → 水 → ポンプ → ボイラー', note:'青い主系統の水と、緑色の冷却水は混ざりません。蒸気の熱だけが管の壁を通って冷却水へ移ります。ポンプには電力が必要です。'}
};
let scene,camera,renderer,controls,root,rotor,magnet,pmrem,environment;
const flowMaterials=[],covers=[],boilerWalls=[],flowSystems=[],flames=[],labels=[],pickables=[],parts={},hotMaterials=[];
const v=(a)=>new THREE.Vector3(...a);
const steel= new THREE.MeshStandardMaterial({color:0xb2c4be,metalness:.68,roughness:.32});
const cream= new THREE.MeshStandardMaterial({color:0xc7d1ad,metalness:.28,roughness:.43});
const dark= new THREE.MeshStandardMaterial({color:0x4f6865,metalness:.48,roughness:.4});
const copper= new THREE.MeshStandardMaterial({color:0xb77942,metalness:.72,roughness:.3});
const support= new THREE.MeshStandardMaterial({color:0x7d9586,metalness:.4,roughness:.53});
const pale= new THREE.MeshStandardMaterial({color:0xdbdfc9,roughness:.75});
const hot= new THREE.MeshStandardMaterial({color:0xda8851,metalness:.33,roughness:.4});
const water= new THREE.MeshStandardMaterial({color:0x5d9fbe,metalness:.3,roughness:.38});
const cool= new THREE.MeshStandardMaterial({color:0x4ba09b,metalness:.35,roughness:.4});
const gold= new THREE.MeshStandardMaterial({color:0xc6a747,metalness:.48,roughness:.38});
const emissive=(color,intensity=.6)=>new THREE.MeshStandardMaterial({color,emissive:color,emissiveIntensity:intensity,roughness:.5});
function mesh(geo,mat,pos,parent=root){const m=new THREE.Mesh(geo,mat);m.position.copy(v(pos));m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
function box(size,pos,mat=steel,parent=root){return mesh(new THREE.BoxGeometry(...size),mat,pos,parent);}
function cylinder(r1,r2,len,pos,mat=steel,parent=root,axis='x',segments=40){const m=mesh(new THREE.CylinderGeometry(r1,r2,len,segments),mat,pos,parent);if(axis==='x')m.rotation.z=-Math.PI/2;if(axis==='z')m.rotation.x=Math.PI/2;return m;}
function torus(r,t,pos,mat=steel,parent=root,axis='x'){const m=mesh(new THREE.TorusGeometry(r,t,8,48),mat,pos,parent);if(axis==='x')m.rotation.y=Math.PI/2;if(axis==='y')m.rotation.x=Math.PI/2;return m;}
function pipe(points,r,mat,parent=root,rounded=true){const curve=rounded?new THREE.CatmullRomCurve3(points.map(v),false,'centripetal'):new THREE.CurvePath();if(!rounded) for(let i=0;i<points.length-1;i++)curve.add(new THREE.LineCurve3(v(points[i]),v(points[i+1])));const m=mesh(new THREE.TubeGeometry(curve,Math.max(24,points.length*12),r,10,false),mat,[0,0,0],parent);return {mesh:m,curve};}
function lineBetween(a,b,r,mat,parent=root){const delta=v(b).sub(v(a)),m=cylinder(r,r,delta.length(),v(a).add(v(b)).multiplyScalar(.5).toArray(),mat,parent,'y',10);m.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),delta.normalize());return m;}
function flow(curve,color,count=28,speed=.12,type='fluid',radius=.075){const g=new THREE.SphereGeometry(radius,7,5);const mat=['boiler','condensation'].includes(type)?new THREE.MeshBasicMaterial({color:0xffffff}):emissive(color,.7);const inst=new THREE.InstancedMesh(g,mat,count);inst.instanceMatrix.setUsage(THREE.DynamicDrawUsage);root.add(inst);flowSystems.push({curve,inst,count,speed,type});return inst;}
function flowPipe(points,r,mat,color,speed=.13,type='fluid'){const m=mat.clone();m.transparent=true;m.opacity=.57;m.depthWrite=false;flowMaterials.push(m);const p=pipe(points,r,m);flow(p.curve,color,32,speed,type,r*.68);return p;}
function group(name){const g=new THREE.Group();g.userData.part=name;root.add(g);parts[name]=g;return g;}
function addLabel(name,text,index,pos){const el=document.createElement('button');el.className='model-label';el.innerHTML=`<b>${index}</b>${text}`;el.setAttribute('aria-label',`${text}を拡大して観察`);el.addEventListener('click',()=>selectStep(name));$('#model-labels').append(el);labels.push({name,el,pos:v(pos)});}
function bolts(x,r,y,z,parent){for(let i=0;i<12;i++){const a=i/12*Math.PI*2;cylinder(.042,.042,.11,[x,y+Math.cos(a)*r,z+Math.sin(a)*r],steel,parent,'x',6);}}
function bearing(x,y,z,parent){box([.32,.48,.65],[x,y-.6,z],cream,parent);cylinder(.29,.29,.38,[x,y,z],cream,parent);torus(.23,.04,[x+.2,y,z],dark,parent);}
function shellHalf(x,y,z,r1,r2,len,mat,parent,upper){const g=new THREE.CylinderGeometry(r1,r2,len,56,1,true,upper?Math.PI:0,Math.PI);const m=mesh(g,mat,[x,y,z],parent);m.rotation.z=-Math.PI/2;return m;}
function buildBoiler(){
 const g=group('boiler');
 box([3.5,.4,3.7],[-6.1,.43,-.4],pale,g);
 const walls=new THREE.Group();g.add(walls);boilerWalls.push(walls);
 box([3.12,5.2,.16],[-6.1,3.23,-1.92],cream,g);
 box([.16,5.2,3.1],[-7.68,3.23,-.4],cream,g);
 box([3.12,5.2,.16],[-6.1,3.23,1.16],cream,walls);
 box([.16,5.2,3.1],[-4.52,3.23,-.4],cream,walls);
 box([3.3,.18,3.35],[-6.1,5.88,-.4],cream,walls);
 for(let y=1;y<6;y+=1.25){lineBetween([-7.8,y,1.26],[-4.45,y,1.26],.047,support,walls);lineBetween([-4.45,y,-2.0],[-4.45,y,1.26],.047,support,walls);}
 for(const x of [-7.82,-4.39])for(const z of [-2.08,1.35]){box([.13,6.0,.13],[x,3.1,z],support,g);}
 // Parallel water-wall tubes absorb heat from combustion. The steam path continues above.
 for(let j=0;j<6;j++){let x=-7.28+j*.43;flowPipe([[x,1.1,-1.5],[x,3.5,-1.5],[x,5.25,-1.5]],.075,hot,0xffd59a,.11,'boiler');}
 pipe([[-7.4,1.1,-1.5],[-6.3,1.1,-1.5],[-4.7,1.1,-1.5]],.16,water,g);
 cylinder(.3,.3,2.85,[-6.05,5.42,-1.4],dark,g);
 const coils=[[-7.35,4.55,.62],[-4.95,4.55,.62],[-4.8,4.8,.4],[-7.35,4.8,.4],[-7.45,5.03,.1],[-4.7,5.03,.1],[-4.6,5.4,-.1]];
 flowPipe(coils,.083,hot,0xffddb1,.12,'superheater');
 flowPipe([[-7.3,5.42,-1.4],[-7.4,5.1,-.8],[-7.35,4.55,.62]],.09,hot,0xffddb1,.12,'superheater');
 const grate=box([2.7,.14,2.5],[-6.1,.91,-.4],dark,g);
 for(let i=0;i<12;i++)box([.10,.08,2.25],[-7.27+i*.21,1.02,-.4],steel,g);
 const flameMat=emissive(0xf48a27,1.6),innerMat=emissive(0xffda63,1.7);hotMaterials.push(flameMat,innerMat);
 for(let i=0;i<11;i++){const x=-7.13+(i%4)*.62,z=-1.2+Math.floor(i/4)*.73;const f=mesh(new THREE.ConeGeometry(.23,.95,7),flameMat,[x,1.47,z],g);const inner=mesh(new THREE.ConeGeometry(.12,.55,7),innerMat,[x,1.27,z+.03],g);flames.push({f,inner,offset:i*.93});}
 const warm=new THREE.PointLight(0xff8b32,30,6);warm.position.set(-6.1,2,-.3);g.add(warm);
 box([.8,.65,.6],[-6.8,1.2,1.62],dark,walls);
 for(let i=0;i<4;i++)cylinder(.14,.14,.4,[-7+i*.65,1.42,1.47],dark,g,'z');
 // Separate flue-gas duct and stack: combustion gases never enter the steam circuit.
 pipe([[-6.8,5.7,-1.8],[-6.8,6.5,-2.7],[-8.3,6.5,-2.7]],.37,dark,g);
 cylinder(.35,.43,7.35,[-8.3,4,-2.7],cream,g,'y');torus(.36,.065,[-8.3,7.68,-2.7],steel,g,'y');
 for(let y=2;y<7.5;y+=.9)torus(.41-(y-2)*.006,.025,[-8.3,y,-2.7],support,g,'y');
 const exhaust=pipe([[-8.3,7.75,-2.7],[-8.32,8.5,-2.72],[-8.1,9.25,-2.9]],.02,new THREE.MeshBasicMaterial({visible:false}));flow(exhaust.curve,0x8c988c,12,.08,'exhaust',.055);
 // Access ladder, handrails and platform.
 for(let z of [-.7,-.22])lineBetween([-7.91,.7,z],[-7.91,5.85,z],.027,steel,g);
 for(let y=1;y<5.85;y+=.32)lineBetween([-7.95,y,-.7],[-7.95,y,-.22],.025,steel,g);
 addLabel('boiler','ボイラー','01',[-6.1,6.4,1.1]);
}
function buildTurbine(){
 const g=group('turbine'),y=3.35;
 box([5.25,.35,2.95],[-.65,1.9,0],pale,g);
 for(let x of [-2.7,1.3])for(let z of [-1,1])box([.38,1.45,.4],[x,1,z],support,g);
 const casingMat=cream.clone();casingMat.side=THREE.DoubleSide;
 shellHalf(-.6,y,0,1.13,.62,4.15,casingMat,g,false);
 const cover=new THREE.Group();g.add(cover);shellHalf(-.6,y,0,1.13,.62,4.15,casingMat,cover,true);
 covers.push({obj:cover,amount:2.9,part:'turbine'});
 for(let i=0;i<7;i++){const x=-2.58+i*.66,r=.65+i*.082;
 for(let upper of [false,true]){const arc=mesh(new THREE.TorusGeometry(r,.045,7,36,Math.PI),dark,[x,y,0],upper?cover:g);if(!upper)arc.geometry.rotateX(Math.PI);arc.rotation.y=Math.PI/2;}
 }
 for(let z of [-1,1])box([4.6,.1,.2],[-.6,y,z*.81],cream,g);
 rotor=new THREE.Group();rotor.position.set(0,y,0);g.add(rotor);
 cylinder(.17,.17,10.25,[1.15,0,0],steel,rotor);
 // Blade rows grow toward the lower-pressure exhaust end. Alternating rows are stators.
 for(let row=0;row<9;row++){
 const x=-2.36+row*.435,r=.46+row*.063;
 cylinder(r*.37,r*.37,.12,[x,0,0],dark,rotor);
 for(let i=0;i<20;i++){const angle=i/20*Math.PI*2;const blade=box([.095,r*.55,.105],[x,Math.cos(angle)*r*.64,Math.sin(angle)*r*.64],steel,rotor);blade.rotation.x=angle;blade.rotation.y=.30;}
 torus(r*.94,.014,[x,0,0],steel,rotor);
 if(row<8)for(let i=0;i<16;i++){const angle=i/16*Math.PI*2;const vane=box([.06,r*.39,.05],[x+.215,y+Math.cos(angle)*r*.73,Math.sin(angle)*r*.73],support,g);vane.rotation.x=angle;vane.rotation.y=-.3;}
 }
 bearing(-3.04,y,0,g);bearing(1.83,y,0,g);bearing(2.43,y,0,g);
 cylinder(.3,.3,.23,[2.1,0,0],dark,rotor); // coupling animated with the same shaft
 const path=pipe([[-2.7,y+.25,0],[-1.7,y+.38,.08],[-.5,y+.4,.13],[.9,y+.43,.18],[1.15,y-.25,.25]],.045,new THREE.MeshBasicMaterial({visible:false}));flow(path.curve,0xffdc9c,46,.17,'internal',.055);
 addLabel('turbine','タービン','02',[-.8,4.98,.8]);
 // Walkway and rail, placed at the far side so the front cutaway stays visible.
 box([8.8,.10,.65],[.65,2.06,-1.82],dark,g);
 for(let x=-3.5;x<5;x+=.7)lineBetween([x,2.1,-2.12],[x,2.9,-2.12],.018,support,g);
 lineBetween([-3.5,2.85,-2.12],[4.9,2.85,-2.12],.022,support,g);
 lineBetween([-3.5,2.48,-2.12],[4.9,2.48,-2.12],.017,support,g);
}
function buildGenerator(){
 const g=group('generator'),x=4.5,y=3.35;
 box([3.2,.35,2.9],[x,1.95,0],pale,g);for(let a of [-1,1])box([.65,.72,1.3],[x+a*.9,2.5,0],cream,g);
 const mat=cream.clone();mat.side=THREE.DoubleSide;shellHalf(x,y,0,.95,.95,2.65,mat,g,false);
 const cover=new THREE.Group();g.add(cover);shellHalf(x,y,0,.95,.95,2.65,mat,cover,true);covers.push({obj:cover,amount:2.7,part:'generator'});
 for(let a of [-1,1]){torus(.94,.075,[x+a*1.36,y,0],cream,g);bolts(x+a*1.43,.82,y,0,g);}
 // Closed stator-coil loops: two axial sides joined by curved end windings.
 // Six coils are simplified spatially; the waveform follows one fixed coil.
 for(let i=0;i<6;i++)for(let strand=0;strand<2;strand++){
 const a=i/6*Math.PI*2+.03*strand,b=a+Math.PI*.78,r=.73+strand*.043,pts=[];
 const at=(xx,ang,rr=r)=>[xx,y+Math.cos(ang)*rr,Math.sin(ang)*rr];
 pts.push(at(x-1.13,a),at(x,a),at(x+1.13,a));
 for(let j=0;j<=10;j++){const f=j/10;pts.push(at(x+1.22+Math.sin(f*Math.PI)*.16,a+(b-a)*f,r+.025*Math.sin(f*Math.PI)));}
 pts.push(at(x+1.13,b),at(x,b),at(x-1.13,b));
 for(let j=0;j<=10;j++){const f=j/10;pts.push(at(x-1.22-Math.sin(f*Math.PI)*.16,b+(a-b)*f,r+.025*Math.sin(f*Math.PI)));}
 pts.push(at(x-1.13,a));pipe(pts,.032,copper,g);
 }
 magnet=new THREE.Group();magnet.position.set(x,y,0);g.add(magnet);
 cylinder(.41,.41,2.4,[0,0,0],dark,magnet);
 const north= new THREE.MeshStandardMaterial({color:0xc96f53,roughness:.42,metalness:.35});
 const south= new THREE.MeshStandardMaterial({color:0x548ea5,roughness:.42,metalness:.35});
 box([2.15,.27,.52],[0,.37,0],north,magnet);box([2.15,.27,.52],[0,-.37,0],south,magnet);
 // N and S markings rotate with the field poles, attached to their visible end faces.
 for(const [letter,color,pos] of [['N','#ffe8dd',[1.23,.3,0]],['S','#e1f3ff',[1.23,-.3,0]]]){
 const c=document.createElement('canvas');c.width=64;c.height=64;const ctx=c.getContext('2d');ctx.fillStyle=color;ctx.font='bold 46px Arial';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(letter,32,34);const t=new THREE.CanvasTexture(c);const m=mesh(new THREE.PlaneGeometry(.26,.26),new THREE.MeshBasicMaterial({map:t,transparent:true,side:THREE.DoubleSide}),pos,magnet);m.rotation.y=Math.PI/2;
 }
 // Field guides rotate with the magnetic rotor. Their shape is schematic.
 const fieldMat=new THREE.MeshBasicMaterial({color:0xbab073,transparent:true,opacity:.48});
 for(let x0 of [-.65,0,.65])for(let side of [-1,1])pipe([[x0,.42,0],[x0,.48,side*.47],[x0,0,side*.59],[x0,-.48,side*.47],[x0,-.42,0]],.012,fieldMat,magnet);
 bearing(6.2,y,0,g);cylinder(.48,.48,.62,[6.55,y,0],cream,g);torus(.42,.028,[6.88,y,0],dark,g);
 const junction=box([.7,.6,.7],[4.7,2.55,1.0],cream,g);
 addLabel('generator','発電機','03',[4.65,4.93,.5]);
}
function buildCondenser(){
 const g=group('condenser'),x=-.25,y=.97,z=.65;
 const glass=new THREE.MeshStandardMaterial({color:0x80b4b0,transparent:true,opacity:.2,roughness:.22,metalness:.15,depthWrite:false,side:THREE.DoubleSide});
 const outside=new THREE.Group();g.add(outside);box([4.2,1.48,2.0],[x,y,z],cream,outside);covers.push({obj:outside,amount:2.1,part:'condenser',hideExploded:true});
 box([4.18,1.47,2.02],[x,y,z],glass,g);
 const liquid=new THREE.MeshStandardMaterial({color:0x4187ad,transparent:true,opacity:.7,roughness:.2});box([4.04,.27,1.86],[x,.43,z],liquid,g);
 // Two manifolds connect many cooling tubes. Main steam condenses outside these sealed tubes.
 for(let j=0;j<3;j++)for(let k=0;k<3;k++)cylinder(.075,.075,3.75,[x,.72+j*.23,z-.52+k*.52],cool,g);
 for(let a of [-1,1])box([.17,.96,1.62],[x+a*1.96,1.0,z],cool,g);
 for(let i=0;i<9;i++){const xx=-1.65+(i%3)*1.3,zz=.2+Math.floor(i/3)*.45;const droplets=new THREE.CatmullRomCurve3([[xx,1.6,zz],[xx+.1,1.12,zz],[xx,.51,zz]].map(v));flow(droplets,0x90d5eb,7,.16,'condensation',.045);}
 // Heat crosses the cooling-tube wall; the two water streams remain separate.
 for(let i=0;i<4;i++){const xx=-1.4+i*.85;const q=new THREE.LineCurve3(v([xx,1.48,.72]),v([xx,1.13,.65]));flow(q,0xffbb73,5,.18,'heat-transfer',.026);}
 flowPipe([[-2.5,.75,3.8],[-2.6,.9,2.5],[-2.24,1,.65],[0,1,.65],[1.74,1,.65],[2.4,1,1.8],[2.6,.8,3.8]],.15,cool,0xb3ede0,.12,'cooling');
 for(let x0 of [-2.6,2.6]){torus(.18,.045,[x0,.77,3.52],steel,g,'z');}
 // Feedwater pump: powered component returning condensate to the boiler.
 cylinder(.25,.25,.6,[-3.65,.64,2.15],dark,g);cylinder(.34,.34,.24,[-3.23,.64,2.15],water,g);box([1.15,.12,.65],[-3.65,.35,2.15],pale,g);
 for(let i=0;i<6;i++)torus(.255,.02,[-3.9+i*.09,.64,2.15],support,g);
 addLabel('condenser','復水器・ポンプ','04',[-.3,1.6,2.82]);
}
function buildPipesAndGrid(){
 // Closed working-fluid cycle: boiler -> turbine -> condenser -> pump -> boiler.
 flowPipe([[-4.6,5.4,-.1],[-3.8,5.7,-.1],[-3.25,5.55,-.1],[-3.08,4.05,-.1],[-2.65,3.65,0]],.14,hot,0xffe0a3,.11,'steam');
 for(let p of [[-3.43,5.67,-.1],[-3.08,4.55,-.1]])torus(.19,.044,p,steel,root,p[1]<5?'y':'x');
 flowPipe([[1.15,3.1,.25],[1.48,2.5,.4],[1.0,1.7,.65]],.27,hot,0xffd7a7,.11,'steam');
 flowPipe([[-.8,.46,1.44],[-1.4,.5,2.2],[-3.25,.6,2.15],[-4.2,.65,2.15],[-5.0,.82,2.0],[-5.05,1.1,-1.5]],.12,water,0xb9e3ff,.11,'water');
 // Transformer and outgoing cable represent energy delivered to the external circuit.
 box([1.8,1.25,1.6],[8.0,1.12,.4],support);box([2.1,.23,1.9],[8,.42,.4],pale);
 for(let i=0;i<12;i++)box([.06,1.03,1.88],[7.2+i*.145,1.16,.4],dark);
 for(let x of [7.5,8,8.5]){cylinder(.08,.08,.53,[x,2.0,.4],copper,root,'y');for(let j=0;j<4;j++)cylinder(.125,.125,.065,[x,1.8+j*.11,.4],cream,root,'y');}
 const electric=flowPipe([[4.7,2.5,1.15],[5.1,1.6,1.5],[6.5,.65,2.08],[8.25,.66,2.08],[8.25,1.6,.7]],.056,gold,0xfff0a5,.13,'electric');
 const pylonX=9.3,pylonZ=-2.2;
 for(let side of [-1,1]){lineBetween([pylonX+side*.52,.32,pylonZ],[pylonX+side*.19,4.9,pylonZ],.035,support);}
 for(let i=0;i<6;i++){let y=.4+i*.65;lineBetween([pylonX-.5+i*.04,y,pylonZ],[pylonX+.5-(i+1)*.04,y+.65,pylonZ],.018,support);lineBetween([pylonX+.5-i*.04,y,pylonZ],[pylonX-.5+(i+1)*.04,y+.65,pylonZ],.018,support);}
 for(let y of [3.85,4.5]){lineBetween([8.45,y,pylonZ],[10.15,y,pylonZ],.035,support);for(let xx of [8.5,10.1])cylinder(.07,.07,.25,[xx,y-.18,pylonZ],cream,root,'y');}
 for(let xx of [8.5,9.3,10.1])pipe([[8,2.15,.4],[xx,3.75,pylonZ],[xx+.45,3.6,-3.3],[xx+.5,3.5,-4.5]],.018,dark);
 flow(new THREE.CatmullRomCurve3([[8,2.15,.4],[9.3,3.75,-2.2],[9.8,3.5,-4.5]].map(v)),0xffe895,20,.11,'electric',.046);
}
function buildBase(){
 box([21.8,.42,9.7],[.1,.02,0],new THREE.MeshStandardMaterial({color:0xd1d9c8,roughness:.9}));
 box([21.5,.04,9.4],[.1,.255,0],new THREE.MeshStandardMaterial({color:0xe1e4d6,roughness:.9}));
 const grid=new THREE.GridHelper(21,42,0xbecab8,0xd1d9c9);grid.position.set(.1,.287,0);root.add(grid);
 // Grid is clipped visually by its modest opacity; platform edge gives the model a physical scale.
 grid.material.transparent=true;grid.material.opacity=.25;grid.scale.z=.43;
 for(let x=-9;x<10;x+=1.0)box([.4,.015,.1],[x,.29,4.23],pale);
 for(let x of [-8.7,6.3]){box([1.3,.11,3.1],[x,.32,-.5],dark);for(let y=0;y<5;y++)box([1.3,.13,.25],[x,.39+y*.13,1.0-y*.29],support);}
 // A small person provides scale without pretending the model is a measured engineering drawing.
 const person=new THREE.Group();person.position.set(6.4,.42,2.9);root.add(person);cylinder(.082,.082,.28,[0,.37,0],dark,person,'y',10);mesh(new THREE.SphereGeometry(.075,10,8),cream,[0,.58,0],person);for(let x of [-.046,.046])lineBetween([x,.04,0],[x,.25,0],.025,dark,person);for(let x of [-.11,.11])lineBetween([x,.21,0],[x*.7,.46,0],.022,dark,person);
}
function init(){
 scene=new THREE.Scene();scene.background=new THREE.Color(0xe8eee8);scene.fog=new THREE.Fog(0xe8eee8,48,100);
 const wrap=$('#scene-wrap');camera=new THREE.PerspectiveCamera(35,wrap.clientWidth/wrap.clientHeight,.1,150);
 renderer=new THREE.WebGLRenderer({canvas:$('#scene'),antialias:true,alpha:false,powerPreference:'high-performance'});renderer.setPixelRatio(Math.min(devicePixelRatio,1.7));renderer.setSize(wrap.clientWidth,wrap.clientHeight,false);renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=.92;
 pmrem=new THREE.PMREMGenerator(renderer);environment=new RoomEnvironment();scene.environment=pmrem.fromScene(environment,.04).texture;scene.environmentIntensity=.6;
 scene.add(new THREE.HemisphereLight(0xffffff,0x91a887,1.6));const sun=new THREE.DirectionalLight(0xfff4dc,2.6);sun.position.set(-5,16,10);sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);Object.assign(sun.shadow.camera,{left:-15,right:15,top:13,bottom:-13,near:1,far:55});sun.shadow.normalBias=.035;sun.shadow.bias=-.0002;scene.add(sun);
 const fill=new THREE.DirectionalLight(0xe4f4ff,1.1);fill.position.set(8,6,-7);scene.add(fill);
 const floor=mesh(new THREE.PlaneGeometry(250,250),new THREE.MeshStandardMaterial({color:0xe4ebe2,roughness:1}),[0,-.26,0],scene);floor.rotation.x=-Math.PI/2;floor.castShadow=false;
 root=new THREE.Group();scene.add(root);buildBase();buildBoiler();buildTurbine();buildGenerator();buildCondenser();buildPipesAndGrid();
 for(const [name,g] of Object.entries(parts)){g.traverse(o=>{if(o.isMesh){o.userData.part=name;pickables.push(o);}});}
 controls=new OrbitControls(camera,renderer.domElement);controls.enableDamping=true;controls.dampingFactor=.085;controls.minDistance=4;controls.maxDistance=49;controls.maxPolarAngle=Math.PI*.475;controls.minPolarAngle=.12;controls.enablePan=true;controls.target.set(0,2.3,0);camera.position.set(18,15,23);controls.update();
 setCamera('overview',true);
 new ResizeObserver(()=>{camera.aspect=wrap.clientWidth/wrap.clientHeight;camera.updateProjectionMatrix();renderer.setSize(wrap.clientWidth,wrap.clientHeight,false);}).observe(wrap);
 controls.addEventListener('start',()=>{cameraTween=null;});
 const ray=new THREE.Raycaster();let down=null;$('#scene').addEventListener('pointerdown',e=>{down={x:e.clientX,y:e.clientY};});$('#scene').addEventListener('pointerup',e=>{if(!down||Math.hypot(e.clientX-down.x,e.clientY-down.y)>5)return;const rect=renderer.domElement.getBoundingClientRect();ray.setFromCamera(new THREE.Vector2((e.clientX-rect.left)/rect.width*2-1,-(e.clientY-rect.top)/rect.height*2+1),camera);const hit=ray.intersectObjects(pickables,false).find(h=>h.object.visible&&isHierarchyVisible(h.object));if(hit)selectStep(hit.object.userData.part);});
 $('#scene').addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','+','-','='].includes(e.key)){e.preventDefault();cameraTween=null;const off=camera.position.clone().sub(controls.target);const sph=new THREE.Spherical().setFromVector3(off);if(e.key==='ArrowLeft')sph.theta-=.12;if(e.key==='ArrowRight')sph.theta+=.12;if(e.key==='ArrowUp')sph.phi=Math.max(.2,sph.phi-.12);if(e.key==='ArrowDown')sph.phi=Math.min(1.48,sph.phi+.12);if(e.key==='+'||e.key==='=')sph.radius*=.88;if(e.key==='-')sph.radius*=1.12;camera.position.copy(controls.target).add(new THREE.Vector3().setFromSpherical(sph));controls.update();}});
 $('#loading').hidden=true;updateDetails();updatePlay();updateEnergy();requestAnimationFrame(animate);
}
function isHierarchyVisible(o){while(o){if(!o.visible)return false;o=o.parent;}return true;}
let cameraTween=null;
const viewpoints={overview:{target:[0,2.6,0],offset:[17,13.5,22]},boiler:{target:[-6,3.3,-.25],offset:[7.7,5.0,10.7]},turbine:{target:[-.6,3.15,0],offset:[5.7,4.25,7.2]},generator:{target:[4.65,3.3,0],offset:[4.8,2.9,5.0]},condenser:{target:[-.6,1.0,1.35],offset:[5.2,3.15,7.2]}};
function setCamera(key,instant=false){if(!camera||!controls)return;const view=viewpoints[key];const target=v(view.target);const off=v(view.offset);const aspect=$('#scene-wrap').clientWidth/$('#scene-wrap').clientHeight;if(key==='overview'&&aspect<1.2)off.multiplyScalar(1.43);if(key==='overview'&&state.mode==='exploded')off.multiplyScalar(1.06);const pos=target.clone().add(off);if(instant||reduceMotion){controls.target.copy(target);camera.position.copy(pos);controls.update();cameraTween=null;}else cameraTween={from:camera.position.clone(),to:pos,fromTarget:controls.target.clone(),target,elapsed:0};}
function selectStep(step){state.step=step;updateDetails();setCamera(step);}
function updateDetails(){const d=detail[state.step];$('#detail-content').innerHTML=`<h2>${d.title}</h2><p>${d.text}</p><div class="detail-tag">${d.tag}</div>`;$('#detail-note').textContent=d.note;$('#step-number').textContent=state.step==='overview'?'全体':`0${steps.indexOf(state.step)} / 04`;$('#induction').hidden=state.step!=='generator';$$('[data-step]').forEach(b=>{b.classList.toggle('active',b.dataset.step===state.step);b.setAttribute('aria-pressed',b.dataset.step===state.step);});labels.forEach(l=>l.el.classList.toggle('active',l.name===state.step));$('#look-inside').innerHTML=state.mode==='outside'?'内部をのぞいてみる <span>↗</span>':state.step==='overview'?'ボイラーから観察する <span>→</span>':'全体のつながりへ戻る <span>↗</span>';$('#view-name').textContent=state.step==='overview'?'発電所の全体像':({boiler:'ボイラーの観察',turbine:'タービンの観察',generator:'発電機の観察',condenser:'復水器の観察'}[state.step]);}
function setMode(mode){state.mode=mode;$$('[data-mode]').forEach(b=>{b.classList.toggle('active',b.dataset.mode===mode);b.setAttribute('aria-pressed',b.dataset.mode===mode);});updateDetails();if(mode==='exploded')setCamera(state.step);}
function updatePlay(){$('#play-pause').textContent=state.playing?'Ⅱ':'▶';$('#play-pause').setAttribute('aria-label',state.playing?'アニメーションを一時停止':'アニメーションを再生');$('#play-label').textContent=state.playing?'アニメーション':'一時停止中';$('#scene-state').textContent=state.playing?'運転中':'観察のため一時停止';$('.live-dot').style.background=state.playing?'#5d906c':'#b99c52';}
function updateEnergy(){const input=Math.round(state.heat*100),out=+(input*.4).toFixed(1),loss=+(input*.6).toFixed(1);$('#fuel-value').innerHTML=`${input}<span> %</span>`;$('#energy-in').textContent=input;$('#energy-out').textContent=out;$('#energy-loss').textContent=loss;$('#sankey-electric').style.strokeWidth=state.heat*52*.4;$('#sankey-heat').style.strokeWidth=state.heat*52*.6;}
$$('[data-mode]').forEach(b=>b.addEventListener('click',()=>setMode(b.dataset.mode)));$$('[data-step]').forEach(b=>b.addEventListener('click',()=>selectStep(b.dataset.step)));
$('#look-inside').addEventListener('click',()=>{if(state.mode==='outside')setMode('cutaway');else if(state.step==='overview')selectStep('boiler');else selectStep('overview');});
$('#prev-step').addEventListener('click',()=>selectStep(steps[(steps.indexOf(state.step)+4)%5]));$('#next-step').addEventListener('click',()=>selectStep(steps[(steps.indexOf(state.step)+1)%5]));
$('#play-pause').addEventListener('click',()=>{state.playing=!state.playing;updatePlay();});$('#speed').addEventListener('change',e=>{state.speed=Number(e.target.value);});$('#fuel').addEventListener('input',e=>{state.heat=Number(e.target.value)/100;updateEnergy();});$('#flow-toggle').addEventListener('change',e=>{state.flows=e.target.checked;});$('#reset-camera').addEventListener('click',()=>{selectStep('overview');});
function zoom(factor){if(!camera||!controls)return;cameraTween=null;camera.position.sub(controls.target).multiplyScalar(factor).add(controls.target);controls.update();}$('#zoom-in').addEventListener('click',()=>zoom(.82));$('#zoom-out').addEventListener('click',()=>zoom(1.22));
$('#fullscreen').addEventListener('click',async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else if($('#scene-wrap').requestFullscreen)await $('#scene-wrap').requestFullscreen();else $('#scene-wrap').scrollIntoView({block:'start',behavior:'smooth'});}catch{$('#scene-wrap').scrollIntoView({block:'start'});}});
for(const [open,dialog] of [['about-open','about-dialog'],['reference-open','reference-dialog']]){$('#'+open).addEventListener('click',()=>$('#'+dialog).showModal());$('#'+dialog+' .dialog-close').addEventListener('click',()=>$('#'+dialog).close());$('#'+dialog).addEventListener('click',e=>{if(e.target===$('#'+dialog)){const r=e.target.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)e.target.close();}});}
const dummy=new THREE.Object3D(), flowColor=new THREE.Color(), coldColor=new THREE.Color(0x72b2e0), steamColor=new THREE.Color(0xffa45b);let lastTime=0;
function animate(now){requestAnimationFrame(animate);const dt=Math.min((now-(lastTime||now))/1000,.05);lastTime=now;if(document.hidden)return;
 const moving=state.playing&&!$$('dialog[open]').length;
 if(moving){state.time+=dt*state.speed;state.phase+=dt*state.speed*.92;}
 if(cameraTween){cameraTween.elapsed+=dt;const t=Math.min(1,cameraTween.elapsed/1.05),k=1-Math.pow(1-t,3);camera.position.lerpVectors(cameraTween.from,cameraTween.to,k);controls.target.lerpVectors(cameraTween.fromTarget,cameraTween.target,k);if(t===1)cameraTween=null;}
 const target=state.mode==='outside'?0:state.mode==='cutaway'?1:2;state.cover=reduceMotion?target:THREE.MathUtils.damp(state.cover,target,5,dt);
 for(const c of covers){if(state.mode==='outside'&&state.cover<.015){c.obj.visible=true;c.obj.position.y=0;}else if(state.mode==='exploded'){c.obj.visible=!c.hideExploded;c.obj.position.y=c.amount*Math.max(0,state.cover-1);c.obj.rotation.z=0;}else{c.obj.visible=false;c.obj.position.y=0;}}
 for(const walls of boilerWalls){walls.visible=state.mode!=='cutaway';walls.position.y=state.mode==='exploded'?Math.max(0,state.cover-1)*2.1:0;walls.position.z=state.mode==='exploded'?Math.max(0,state.cover-1)*.8:0;walls.position.x=state.mode==='exploded'?-Math.max(0,state.cover-1)*2.8:0;}
 rotor.rotation.x=state.phase;magnet.rotation.x=state.phase;
 for(const item of flames){const f=.65+.35*Math.sin(state.time*8+item.offset);item.f.scale.y=(.45+state.heat*.65)*(1+f*.2);item.inner.scale.y=item.f.scale.y;item.f.rotation.y=state.time*.4+item.offset;}
 for(const s of flowSystems){s.inst.visible=state.flows;if((s.type==='internal'||s.type==='condensation'||s.type==='boiler'||s.type==='superheater'||s.type==='heat-transfer')&&state.mode==='outside')s.inst.visible=false;if(!s.inst.visible)continue;const density=['cooling','condensation','heat-transfer'].includes(s.type)?1:state.heat;for(let i=0;i<s.count;i++){const f=(i/s.count+state.time*s.speed*(s.type==='cooling'?1:.5+state.heat*.7))%1;dummy.position.copy(s.curve.getPointAt(f));const size=i/s.count<density?1:0;dummy.scale.setScalar(size*(s.type==='condensation'?(.45+.7*f):1));dummy.updateMatrix();s.inst.setMatrixAt(i,dummy.matrix);if(s.type==='boiler'){flowColor.copy(coldColor).lerp(steamColor,f);s.inst.setColorAt(i,flowColor);}if(s.type==='condensation'){flowColor.copy(steamColor).lerp(coldColor,Math.min(1,f*1.9));s.inst.setColorAt(i,flowColor);}}s.inst.instanceMatrix.needsUpdate=true;if(s.inst.instanceColor)s.inst.instanceColor.needsUpdate=true;}
 for(const m of flowMaterials){m.opacity=state.flows?.57:1;m.depthWrite=!state.flows;}
 // Internal magnetic field guides and pole colors are observable after opening the casing.
 controls.update();renderer.render(scene,camera);state.rendered=true;updateLabels();if(state.step==='generator')drawWave();
}
function updateLabels(){const w=$('#scene-wrap').clientWidth,h=$('#scene-wrap').clientHeight;for(const l of labels){const p=l.pos.clone().project(camera);const x=(p.x+1)*w/2,y=(1-p.y)*h/2;const show=p.z<1&&p.z>-1&&x>28&&x<w-28&&y>70&&y<h-76&&(state.step==='overview'||state.step===l.name);l.el.style.opacity=show?1:0;l.el.style.pointerEvents=show?'auto':'none';l.el.tabIndex=show?0:-1;l.el.style.left=`${x}px`;l.el.style.top=`${y}px`;}}
function drawWave(){const c=$('#wave'),ctx=c.getContext('2d'),w=c.width,h=c.height;ctx.clearRect(0,0,w,h);ctx.strokeStyle='#dce3ce';ctx.lineWidth=1;for(let y of [h*.2,h*.5,h*.8]){ctx.beginPath();ctx.moveTo(22,y);ctx.lineTo(w-15,y);ctx.stroke();}ctx.fillStyle='#8c987c';ctx.font='19px Arial';ctx.fillText('+',5,h*.24);ctx.fillText('−',5,h*.83);ctx.strokeStyle='#b89839';ctx.lineWidth=3;ctx.beginPath();for(let x=25;x<w-20;x++){const phase=state.phase-((w-20-x)/(w-45))*Math.PI*4;const y=h*.5-Math.sin(phase)*h*.34;if(x===25)ctx.moveTo(x,y);else ctx.lineTo(x,y);}ctx.stroke();ctx.fillStyle='#ca9b25';ctx.beginPath();ctx.arc(w-20,h*.5-Math.sin(state.phase)*h*.34,6,0,Math.PI*2);ctx.fill();}
try{init();}catch(err){console.error(err);const loading=$('#loading');loading.hidden=false;loading.innerHTML='<strong>3D表示を開始できませんでした</strong><small>WebGL対応のChrome・Edge・Safariで開き直してください。</small><button class="primary-button" onclick="location.reload()">もう一度読み込む</button>';loading.style.padding='30px';}
// A read-only diagnostics snapshot supports repeatable browser checks.
window.energyLab={snapshot:()=>({...state,rotorAngle:rotor?.rotation.x,magnetAngle:magnet?.rotation.x,meshCount:pickables.length,drawCalls:renderer?.info.render.calls,visibleCovers:covers.filter(c=>c.obj.visible).length,camera:camera?.position.toArray()})};
