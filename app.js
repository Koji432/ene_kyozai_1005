import * as THREE from './vendor/three.module.min.js';
import { OrbitControls } from './vendor/OrbitControls.js';
import { RoomEnvironment } from './vendor/RoomEnvironment.js';

const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const state = { mode:'cutaway', step:'overview', started:false, playing:false, follow:!reduceMotion, speed:1, time:0, phase:0, cover:1, rendered:false, stage:'idle' };
let scene,camera,renderer,controls,root,rotor,magnet,pmrem,environment,fireLight,sparks,loadLight,loadBulb;
const flowMaterials=[],covers=[],boilerWalls=[],flowSystems=[],flames=[],pickables=[],parts={},fieldMaterials=[];
const stages = [
 {at:0,name:'condenser'}, {at:1,name:'feedwater'}, {at:5.8,name:'boiler'},
 {at:9.6,name:'superheater'}, {at:11.6,name:'steam'}, {at:12.7,name:'turbine'},
 {at:17,name:'generator'}, {at:22,name:'return'}, {at:27,name:'overview'}, {at:30,name:'complete'}
];
const timings = {
 water:{start:1,velocity:1.65},boiler:{start:5.8,velocity:1.1},
 superheater:{start:9.6,velocity:6.5},steam:{start:11.6,velocity:10.5},
 internal:{start:12.25,velocity:9},'steam-out':{start:13,velocity:3.5},
 condensation:{start:14.8,velocity:.8},'heat-transfer':{start:14.8,velocity:.6},
 electric:{start:13.1,velocity:5.4},'load-electric':{start:15.2,velocity:4.4},
 cooling:{start:.35,velocity:1.1},exhaust:{start:5.8,velocity:1.4}
};
const clamp=THREE.MathUtils.clamp;
function ramp(t,a,b){const f=clamp((t-a)/(b-a),0,1);return f*f*(3-2*f);}
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
function flow(curve,color,count=28,speed=.12,type='fluid',radius=.075){
 const fast=['steam','internal','superheater'].includes(type);
 if(fast)count=type==='steam'?13:type==='internal'?18:20;
 if(type==='steam-out'){count=12;radius*=.55;}
 if(type==='steam')color=0xffc451;
 const g=fast?new THREE.ConeGeometry(radius*.65,radius*3.5,6):new THREE.SphereGeometry(radius,7,5);
 const mat=new THREE.MeshBasicMaterial({color:['boiler','condensation'].includes(type)?0xffffff:color,toneMapped:false});
 const inst=new THREE.InstancedMesh(g,mat,count);inst.instanceMatrix.setUsage(THREE.DynamicDrawUsage);inst.frustumCulled=false;root.add(inst);
 const length=curve.getLength(),timing=timings[type]||{start:0,velocity:1};
 const samples=Array.from({length:601},(_,i)=>curve.getPointAt(i/600));
 const rotations=fast?Array.from({length:601},(_,i)=>new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,1,0),curve.getTangentAt(i/600).normalize())):null;
 flowSystems.push({curve,inst,count,speed,type,length,fast,samples,rotations,...timing,visibleCount:0});return inst;
}
function flowPipe(points,r,mat,color,speed=.13,type='fluid'){const m=mat.clone();m.transparent=true;m.opacity=['steam','superheater'].includes(type)?.30:.52;m.depthWrite=false;flowMaterials.push(m);const p=pipe(points,r,m);flow(p.curve,color,32,speed,type,r*.68);return p;}
function group(name){const g=new THREE.Group();g.userData.part=name;root.add(g);parts[name]=g;return g;}
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
 buildFire(g);
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
 const path=pipe([[-2.7,y+.25,0],[-1.7,y+.38,.08],[-.5,y+.4,.13],[.9,y+.43,.18],[1.15,y-.25,.25]],.045,new THREE.MeshBasicMaterial({visible:false}));flow(path.curve,0xffcc66,46,.17,'internal',.055);
 for(const z of [-.24,.24]){const jet=new THREE.CatmullRomCurve3([[-2.64,y+.28,z],[-2.0,y+.33,z],[-1,y+.40,z],[.9,y+.43,z],[1.15,y-.25,.25]].map(v));flow(jet,0xffdca0,18,.17,'internal',.028);}
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
 // Six closed, stationary coils are simplified spatially.
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
 const fieldMat=new THREE.MeshBasicMaterial({color:0xd2a238,transparent:true,opacity:0,depthWrite:false});fieldMaterials.push(fieldMat);
 for(let x0 of [-.65,0,.65])for(let side of [-1,1])pipe([[x0,.42,0],[x0,.48,side*.47],[x0,0,side*.59],[x0,-.48,side*.47],[x0,-.42,0]],.012,fieldMat,magnet);
 bearing(6.2,y,0,g);cylinder(.48,.48,.62,[6.55,y,0],cream,g);torus(.42,.028,[6.88,y,0],dark,g);
 const junction=box([.7,.6,.7],[4.7,2.55,1.0],cream,g);
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
}
function buildPipesAndGrid(){
 // Closed working-fluid cycle: boiler -> turbine -> condenser -> pump -> boiler.
 flowPipe([[-4.6,5.4,-.1],[-3.8,5.7,-.1],[-3.25,5.55,-.1],[-3.08,4.05,-.1],[-2.65,3.65,0]],.14,hot,0xffe0a3,.11,'steam');
 for(let p of [[-3.43,5.67,-.1],[-3.08,4.55,-.1]])torus(.19,.044,p,steel,root,p[1]<5?'y':'x');
 flowPipe([[1.15,3.1,.25],[1.48,2.5,.4],[1.0,1.7,.65]],.27,hot,0xffd7a7,.11,'steam-out');
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

const fireUniforms={uTime:{value:0},uBurn:{value:0}};
function buildFire(parent){
 const vertex=`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`;
 const fragment=`
 uniform float uTime;uniform float uBurn;uniform float uSeed;varying vec2 vUv;
 float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}
 float fbm(vec2 p){float a=.5,n=0.;for(int i=0;i<4;i++){n+=a*noise(p);p=p*2.03+vec2(7.1,3.3);a*=.5;}return n;}
 void main(){
 float y=vUv.y;float tm=uTime*1.6+uSeed*4.3;float x=(vUv.x-.5)*2.;
 float wind=sin(y*6.5-tm*2.3+uSeed)*.13*y+(fbm(vec2(y*4.,tm*.5))-.5)*.36*y;
 float n=fbm(vec2((x+uSeed)*3.8,y*5.5-tm*2.));
 float width=pow(max(1.-y,0.),.78)*.79;
 float body=width-abs(x+wind)+(n-.5)*(.17+y*.4);
 float alpha=smoothstep(-.035,.11,body)*(1.-smoothstep(.76,1.,y+(n-.5)*.18))*smoothstep(0.,.045,y);
 float core=clamp(body*1.9+(1.-y)*.22,0.,1.);
 vec3 color=mix(vec3(.88,.075,.007),vec3(1.,.37,.015),smoothstep(.04,.35,core));
 color=mix(color,vec3(1.,.83,.10),smoothstep(.30,.76,core));
 color=mix(color,vec3(1.,.97,.71),smoothstep(.77,1.,core));
 gl_FragColor=vec4(color,alpha*uBurn*.91);
 #include <colorspace_fragment>
 }`;
 for(let i=0;i<13;i++){
 const x=-7.15+(i%4)*.63+(i%2)*.045,z=-1.18+Math.floor(i/4)*.58;
 const height=1.95+Math.sin(i*2.1)*.36,width=.96+Math.sin(i)*.13;
 const material=new THREE.ShaderMaterial({vertexShader:vertex,fragmentShader:fragment,uniforms:{...fireUniforms,uSeed:{value:i*1.37}},transparent:true,depthWrite:false,side:THREE.DoubleSide,toneMapped:false});
 const geo=new THREE.PlaneGeometry(width,height);geo.translate(0,height*.5,0);
 const flame=mesh(geo,material,[x,1.025,z],parent);flame.castShadow=false;flame.receiveShadow=false;flame.renderOrder=3;flames.push(flame);
 }
 sparks=new THREE.InstancedMesh(new THREE.SphereGeometry(.021,5,4),new THREE.MeshBasicMaterial({color:0xffb446,toneMapped:false}),38);sparks.frustumCulled=false;parent.add(sparks);
 fireLight=new THREE.PointLight(0xff8123,0,7);fireLight.position.set(-6.1,2.1,-.3);parent.add(fireLight);
}
function buildLoad(){
 pipe([[8.9,.35,3.45],[8.9,2.65,3.45],[8.8,2.83,3.45],[8.3,2.83,3.45]],.045,dark);
 cylinder(.2,.12,.13,[8.3,2.73,3.45],dark,root,'y');
 loadBulb=mesh(new THREE.SphereGeometry(.13,16,12),new THREE.MeshStandardMaterial({color:0xe7e6ce,emissive:0xffba45,emissiveIntensity:0,roughness:.25}),[8.3,2.60,3.45]);
 loadLight=new THREE.PointLight(0xffcf70,0,7);loadLight.position.set(8.3,2.5,3.45);root.add(loadLight);
 flowPipe([[8.0,1.3,1.1],[8.15,.4,1.65],[8.9,.38,2.9],[8.9,.6,3.45],[8.9,2.64,3.45],[8.3,2.65,3.45]],.035,gold,0xffd658,.13,'load-electric');
}

const viewpoints={
 overview:{target:[0,2.7,0],offset:[17,13.5,22]},
 boiler:{target:[-6,3.1,-.2],offset:[7.0,4.2,10.0]},
 turbine:{target:[-.5,3.2,0],offset:[5.7,4.25,8.4]},
 generator:{target:[4.65,3.3,0],offset:[5.0,3.0,6.5]},
 condenser:{target:[-.7,1.15,1.4],offset:[6.0,3.8,8.7]}
};
const tourNodes=[
 {t:0,...viewpoints.overview},{t:1.8,...viewpoints.condenser},
 {t:4.8,target:[-3.7,1.2,1.2],offset:[7,4.4,9]},
 {t:7.6,...viewpoints.boiler},{t:10.6,target:[-5.9,3.8,-.1],offset:[7.7,4.6,10]},
 {t:13.4,...viewpoints.turbine},{t:15.8,...viewpoints.turbine},
 {t:18.5,...viewpoints.generator},{t:21.3,target:[6.3,2.6,1],offset:[8.3,5.0,10]},
 {t:24.7,...viewpoints.condenser},{t:28.5,...viewpoints.overview},{t:30,...viewpoints.overview}
];
let cameraTween=null,lastTime=0;
const dummy=new THREE.Object3D(),flowColor=new THREE.Color(),coldColor=new THREE.Color(0x3994e5),steamColor=new THREE.Color(0xffb65e);
const lerpPoint=new THREE.Vector3(),travelTarget=new THREE.Vector3(),travelOffset=new THREE.Vector3();
function fitOffset(offset,wide=false){
 const aspect=camera.aspect;
 if(aspect<1.1)offset.multiplyScalar(wide?Math.min(2.7,1.15/aspect):Math.min(1.65,.85/aspect));
 return offset;
}
function init(){
 const wrap=$('#scene-wrap');scene=new THREE.Scene();scene.background=new THREE.Color(0xe8eee8);scene.fog=new THREE.Fog(0xe8eee8,65,145);
 camera=new THREE.PerspectiveCamera(35,wrap.clientWidth/wrap.clientHeight,.1,190);
 renderer=new THREE.WebGLRenderer({canvas:$('#scene'),antialias:true,powerPreference:'high-performance'});renderer.setPixelRatio(Math.min(devicePixelRatio,1.7));renderer.setSize(wrap.clientWidth,wrap.clientHeight,false);
 renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=.91;
 pmrem=new THREE.PMREMGenerator(renderer);environment=new RoomEnvironment();scene.environment=pmrem.fromScene(environment,.04).texture;scene.environmentIntensity=.6;
 scene.add(new THREE.HemisphereLight(0xffffff,0x91a887,1.6));const sun=new THREE.DirectionalLight(0xfff4dc,2.6);sun.position.set(-5,16,10);sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);Object.assign(sun.shadow.camera,{left:-15,right:15,top:13,bottom:-13,near:1,far:55});sun.shadow.normalBias=.035;sun.shadow.bias=-.0002;scene.add(sun);
 const fill=new THREE.DirectionalLight(0xe4f4ff,1.1);fill.position.set(8,6,-7);scene.add(fill);
 const floor=mesh(new THREE.PlaneGeometry(300,300),new THREE.MeshStandardMaterial({color:0xe4ebe2,roughness:1}),[0,-.26,0],scene);floor.rotation.x=-Math.PI/2;floor.castShadow=false;
 root=new THREE.Group();scene.add(root);buildBase();buildBoiler();buildTurbine();buildGenerator();buildCondenser();buildPipesAndGrid();buildLoad();
 for(const [name,g] of Object.entries(parts))g.traverse(o=>{if(o.isMesh&&!(o.material instanceof THREE.ShaderMaterial)){o.userData.part=name;pickables.push(o);}});
 controls=new OrbitControls(camera,renderer.domElement);controls.enableDamping=true;controls.dampingFactor=.085;controls.minDistance=4;controls.maxDistance=110;controls.maxPolarAngle=Math.PI*.48;controls.minPolarAngle=.10;controls.enablePan=true;
 setCamera('overview',true);
 let oldWidth=wrap.clientWidth,oldHeight=wrap.clientHeight;
 new ResizeObserver(()=>{camera.aspect=wrap.clientWidth/wrap.clientHeight;camera.updateProjectionMatrix();renderer.setSize(wrap.clientWidth,wrap.clientHeight,false);if(Math.abs(oldWidth-wrap.clientWidth)>40||Math.abs(oldHeight-wrap.clientHeight)>80){oldWidth=wrap.clientWidth;oldHeight=wrap.clientHeight;if(state.follow&&state.started&&state.time<30)updateTourCamera();else setCamera(state.step,true);}}).observe(wrap);
 controls.addEventListener('start',()=>setFollow(false));
 const ray=new THREE.Raycaster();let down=null;
 $('#scene').addEventListener('pointerdown',e=>{down={x:e.clientX,y:e.clientY};});
 $('#scene').addEventListener('pointerup',e=>{if(!down||Math.hypot(e.clientX-down.x,e.clientY-down.y)>5)return;const rect=renderer.domElement.getBoundingClientRect();ray.setFromCamera(new THREE.Vector2((e.clientX-rect.left)/rect.width*2-1,-(e.clientY-rect.top)/rect.height*2+1),camera);const hit=ray.intersectObjects(pickables,false).find(h=>isHierarchyVisible(h.object));if(hit){state.step=hit.object.userData.part;setCamera(state.step);}});
 $('#scene').addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','+','-','='].includes(e.key)){e.preventDefault();setFollow(false);const sph=new THREE.Spherical().setFromVector3(camera.position.clone().sub(controls.target));if(e.key==='ArrowLeft')sph.theta-=.12;if(e.key==='ArrowRight')sph.theta+=.12;if(e.key==='ArrowUp')sph.phi=Math.max(.2,sph.phi-.12);if(e.key==='ArrowDown')sph.phi=Math.min(1.48,sph.phi+.12);if(e.key==='+'||e.key==='=')sph.radius*=.88;if(e.key==='-')sph.radius*=1.12;camera.position.copy(controls.target).add(new THREE.Vector3().setFromSpherical(sph));controls.update();}});
 $('#loading').hidden=true;updateButtons();updateVisuals(0);requestAnimationFrame(animate);
}
function isHierarchyVisible(o){while(o){if(!o.visible)return false;o=o.parent;}return true;}
function setCamera(key,instant=false){
 if(!camera||!controls)return;const view=viewpoints[key],target=v(view.target),offset=fitOffset(v(view.offset),key==='overview');if(state.mode==='exploded')offset.multiplyScalar(1.09);const position=target.clone().add(offset);
 if(instant||reduceMotion){controls.target.copy(target);camera.position.copy(position);controls.update();cameraTween=null;}
 else cameraTween={from:camera.position.clone(),to:position,fromTarget:controls.target.clone(),target,elapsed:0};
}
function setFollow(value){state.follow=value;cameraTween=null;$('#follow').classList.toggle('active',value);$('#follow').setAttribute('aria-pressed',String(value));}
function updateTourCamera(){
 const t=Math.min(state.time,30);let i=0;while(i<tourNodes.length-2&&t>tourNodes[i+1].t)i++;
 const a=tourNodes[i],b=tourNodes[i+1],f=ramp(t,a.t,b.t);
 travelTarget.lerpVectors(v(a.target),v(b.target),f);
 const offsetA=fitOffset(v(a.offset),a.t===0||a.t>=28.5),offsetB=fitOffset(v(b.offset),b.t===0||b.t>=28.5);
 travelOffset.lerpVectors(offsetA,offsetB,f);
 if(state.mode==='exploded')travelOffset.multiplyScalar(1.09);
 controls.target.copy(travelTarget);camera.position.copy(travelTarget).add(travelOffset);
}
function setMode(mode){state.mode=mode;$$('[data-mode]').forEach(b=>{b.classList.toggle('active',b.dataset.mode===mode);b.setAttribute('aria-pressed',String(b.dataset.mode===mode));});if(!state.follow||!state.started)setCamera(state.step);}
function updateButtons(){
 $('#start span').textContent=state.started?'最初から':'スタート';$('#pause').disabled=!state.started;$('#timeline').disabled=!state.started;
 $('#pause').innerHTML=state.playing?'<svg viewBox="0 0 24 24"><path d="M8 5v14M16 5v14"/></svg>':'<svg viewBox="0 0 24 24"><path d="m8 5 11 7-11 7Z"/></svg>';
 $('#pause').setAttribute('aria-label',state.playing?'一時停止':'再開');$('#pause').title=state.playing?'一時停止':'再開';
 $('#follow').classList.toggle('active',state.follow);$('#follow').setAttribute('aria-pressed',String(state.follow));
}
function start(){state.started=true;state.playing=true;state.time=0;state.phase=0;state.step='overview';state.stage='condenser';setFollow(!reduceMotion);setMode('cutaway');setCamera('overview',true);updateButtons();}
function reset(){state.started=false;state.playing=false;state.time=0;state.phase=0;state.stage='idle';state.step='overview';setFollow(!reduceMotion);setCamera('overview',true);updateButtons();updateVisuals(0);}
$('#start').addEventListener('click',start);$('#pause').addEventListener('click',()=>{state.playing=!state.playing;updateButtons();});$('#reset').addEventListener('click',reset);
$('#speed').addEventListener('change',e=>{state.speed=Number(e.target.value);});$('#follow').addEventListener('click',()=>setFollow(!state.follow));
$('#timeline').addEventListener('input',e=>{state.time=Number(e.target.value);updateVisuals(0);if(state.follow)updateTourCamera();});
$$('[data-mode]').forEach(b=>b.addEventListener('click',()=>setMode(b.dataset.mode)));
$('#reset-camera').addEventListener('click',()=>{setFollow(false);state.step='overview';setCamera('overview');});
function zoom(factor){if(!camera)return;setFollow(false);camera.position.sub(controls.target).multiplyScalar(factor).add(controls.target);controls.update();}
$('#zoom-in').addEventListener('click',()=>zoom(.82));$('#zoom-out').addEventListener('click',()=>zoom(1.22));
$('#fullscreen').addEventListener('click',async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else if($('#scene-wrap').requestFullscreen)await $('#scene-wrap').requestFullscreen();}catch{/* The model already fills the viewport on browsers without full-screen support. */}});
function rotorPhase(t){const x=Math.max(0,t-12.7),duration=2.4;return 2.3*(x<duration?x*x*x/(duration*duration)-.5*x*x*x*x/(duration*duration*duration):x-duration*.5);}
function updateVisuals(dt){
 const t=state.started?state.time:0;
 state.stage=state.started?stages.findLast(s=>t>=s.at).name:'idle';state.phase=state.started?rotorPhase(t):0;
 rotor.rotation.x=state.phase;magnet.rotation.x=state.phase;
 const target=state.mode==='outside'?0:state.mode==='cutaway'?1:2;state.cover=reduceMotion?target:THREE.MathUtils.damp(state.cover,target,5,dt);
 for(const c of covers){c.obj.visible=state.mode==='outside'||(state.mode==='exploded'&&!c.hideExploded);c.obj.position.y=state.mode==='exploded'?c.amount*Math.max(0,state.cover-1):0;}
 for(const walls of boilerWalls){walls.visible=state.mode!=='cutaway';const f=state.mode==='exploded'?Math.max(0,state.cover-1):0;walls.position.set(-f*2.8,f*2.1,f*.8);}
 const burn=state.started?ramp(t,5.8,7.3):0;fireUniforms.uTime.value=t;fireUniforms.uBurn.value=burn;
 for(const flame of flames){flame.visible=burn>.001;flame.rotation.y=Math.atan2(camera.position.x-flame.position.x,camera.position.z-flame.position.z);flame.scale.y=.6+.4*burn;}
 fireLight.intensity=burn*48*(.91+.09*Math.sin(t*16)*Math.sin(t*7.3));sparks.visible=burn>.001;
 for(let i=0;i<sparks.count&&burn>.001;i++){const life=(t*(.21+(i%5)*.015)+i*.137)%1;dummy.position.set(-7.12+(i%7)*.34+Math.sin(t*2+i)*.1*life,1.14+life*2.9,-1.12+(i%4)*.44+Math.sin(i+t)*.08);dummy.quaternion.identity();dummy.scale.setScalar((1-life)*burn);dummy.updateMatrix();sparks.setMatrixAt(i,dummy.matrix);}sparks.instanceMatrix.needsUpdate=true;
 for(const s of flowSystems){
 const elapsed=state.started?t-s.start:-1;s.inst.visible=elapsed>=0;
 if(['internal','condensation','boiler','superheater','heat-transfer'].includes(s.type)&&state.mode==='outside')s.inst.visible=false;
 s.visibleCount=0;if(!s.inst.visible)continue;
 for(let i=0;i<s.count;i++){
 const u=elapsed*s.velocity/s.length-(i+Math.sin(i*4.13)*.15)/s.count,f=((u%1)+1)%1,active=u>=0;
 const slot=f*600,low=Math.floor(slot),high=Math.min(low+1,600);lerpPoint.lerpVectors(s.samples[low],s.samples[high],slot-low);dummy.position.copy(lerpPoint);
 if(s.fast)dummy.quaternion.copy(s.rotations[low]);else dummy.quaternion.identity();
 const size=active?1:0;dummy.scale.setScalar(size*(s.type==='condensation'?(.5+.65*f):1));dummy.updateMatrix();s.inst.setMatrixAt(i,dummy.matrix);if(active)s.visibleCount++;
 if(s.type==='boiler'){flowColor.copy(coldColor).lerp(steamColor,ramp(f,.15,.85)*burn);s.inst.setColorAt(i,flowColor);}
 if(s.type==='condensation'){flowColor.copy(steamColor).lerp(coldColor,Math.min(1,f*2.5));s.inst.setColorAt(i,flowColor);}
 }
 s.inst.instanceMatrix.needsUpdate=true;if(s.inst.instanceColor)s.inst.instanceColor.needsUpdate=true;
 }
 const power=state.started?ramp(t,13.1,15.0):0;
 for(const mat of fieldMaterials)mat.opacity=power*(.22+.42*Math.abs(Math.sin(state.phase)));
 const light=state.started?ramp(t,16.4,17.2):0;loadBulb.material.emissiveIntensity=light*4;loadLight.intensity=light*25;
 $('#timeline').value=Math.min(30,t);$('#timeline').style.setProperty('--progress',`${Math.min(t/30,1)*100}%`);
}
function animate(now){
 requestAnimationFrame(animate);const dt=Math.min((now-(lastTime||now))/1000,.05);lastTime=now;if(document.hidden)return;
 if(state.playing)state.time+=dt*state.speed;
 if(state.follow&&state.started&&state.time<=30)updateTourCamera();
 else if(cameraTween){cameraTween.elapsed+=dt;const f=ramp(cameraTween.elapsed,0,1.1);camera.position.lerpVectors(cameraTween.from,cameraTween.to,f);controls.target.lerpVectors(cameraTween.fromTarget,cameraTween.target,f);if(f===1)cameraTween=null;}
 updateVisuals(dt);controls.update();renderer.render(scene,camera);state.rendered=true;
}
try{init();}catch(err){console.error(err);$('#loading').hidden=false;$('#loading').className='error';$('#loading').innerHTML='<div>3Dを表示できませんでした。</div><button onclick="location.reload()">再読み込み</button>';$$('button,select,input').forEach(b=>{if(!b.closest('#loading'))b.disabled=true;});}
window.energyLab={snapshot:()=>({...state,rotorAngle:rotor?.rotation.x,magnetAngle:magnet?.rotation.x,flamePower:fireUniforms.uBurn.value,lightPower:loadLight?.intensity,drawCalls:renderer?.info.render.calls,visibleCovers:covers.filter(c=>c.obj.visible).length,camera:camera?.position.toArray(),target:controls?.target.toArray(),flows:flowSystems.map(s=>({type:s.type,velocity:s.velocity,count:s.inst.visible?s.visibleCount:0}))})};
