import * as THREE from './vendor/three.module.min.js';
import { OrbitControls } from './vendor/OrbitControls.js';
import { RoomEnvironment } from './vendor/RoomEnvironment.js';

const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const state = { mode:'cutaway', step:'overview', started:false, playing:false, follow:!reduceMotion, speed:1, time:0, phase:0, rendered:false, stage:'idle' };
let scene,camera,renderer,controls,root,rotor,magnet,pmrem,environment,fireLight,sparks,loadLight,loadLens,loadHalo,loadPool,streetPole,boilerBubbles,drumLiquid,generatorCoils;
const flowMaterials=[],covers=[],boilerWalls=[],flowSystems=[],flames=[],pickables=[],parts={},fieldMaterials=[];
const electricalCircuits=[],heaterMaterials=[];
const DURATION=38, LAMP_ON=26.2;
const evCells=[],evHeadlamps=[],evLightPools=[];
let evBody,evPort,evScreen,evGlow,evFeedArrival=0,evArrival=0,evCharge=0;
const heatUniforms={uHeat:{value:0}};
let loadArrival=0;
const stages = [
 {at:0,name:'condenser'}, {at:1,name:'feedwater'}, {at:5.8,name:'boiler'},
 {at:9.6,name:'superheater'}, {at:11.6,name:'steam'}, {at:12.7,name:'turbine'},
 {at:17,name:'generator'}, {at:20,name:'distribution'}, {at:24,name:'load'}, {at:26.2,name:'light'}, {at:28,name:'charging'}, {at:31,name:'electric-car'}, {at:38,name:'complete'}
];
const timings = {
 water:{start:1,velocity:1.65},boiler:{start:5.8,velocity:1.1},
 superheater:{start:9.6,velocity:6.5},steam:{start:11.6,velocity:10.5},
 internal:{start:12.25,velocity:9},'steam-out':{start:13,velocity:3.5},
 condensation:{start:14.8,velocity:.8},'heat-transfer':{start:14.8,velocity:.6},
 electric:{start:13.4,velocity:4.4},'load-electric':{start:24.1,velocity:5.4},
 'ev-feed':{start:27.5,velocity:4.2},'ev-charge':{start:29.3,velocity:2.6},
 'heat-in':{start:6,velocity:1.4},downcomer:{start:5.4,velocity:.8},
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
 const fast=['steam','internal','superheater','heat-in'].includes(type);
 if(fast&&type!=='heat-in')count=type==='steam'?13:type==='internal'?18:20;
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
function buildBoilerWater(parent){
 const tubeShader=new THREE.ShaderMaterial({
  uniforms:heatUniforms,transparent:true,depthWrite:false,side:THREE.DoubleSide,
  vertexShader:`varying float h;void main(){h=uv.y;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
  fragmentShader:`uniform float uHeat;varying float h;
   void main(){float warm=smoothstep(.02,.7,uHeat-h*.24);
   vec3 color=mix(vec3(.12,.48,.86),vec3(1.,.52,.12),warm);
   float vapour=smoothstep(.58,1.,h)*smoothstep(.55,1.,uHeat);
   gl_FragColor=vec4(mix(color,vec3(1.,.88,.54),vapour),.75-vapour*.42);
   #include <colorspace_fragment>
   }`
 });
 for(let j=0;j<6;j++){
  const x=-7.28+j*.43;
  const jacket=water.clone();jacket.transparent=true;jacket.opacity=.19;jacket.depthWrite=false;
  cylinder(.145,.145,4.15,[x,3.175,-1.5],jacket,parent,'y',20);heaterMaterials.push(jacket);
  cylinder(.117,.117,4.12,[x,3.175,-1.5],tubeShader,parent,'y',20);
  // Fluid markers rise through the tube; radiative heat markers stop outside its wall.
  flow(new THREE.LineCurve3(v([x,1.1,-1.5]),v([x,5.25,-1.5])),0xcdefff,13,.1,'boiler',.048);
  for(let y of [1.6,2.3,3.0]){
   flow(new THREE.CatmullRomCurve3([[x,y-.18,-.56],[x,y,-.94],[x,y+.05,-1.32]].map(v)),0xffaa36,4,.1,'heat-in',.047);
  }
 }
 flowPipe([[-5.05,1.1,-1.5],[-6.3,1.1,-1.5],[-7.4,1.1,-1.5]],.17,water,0x9ad7ff,.11,'downcomer');
 flowPipe([[-7.36,5.33,-1.4],[-7.52,5.1,-1.73],[-7.52,1.38,-1.73],[-7.35,1.1,-1.5]],.12,water,0x9ad7ff,.11,'downcomer');
 const drumGlass=new THREE.MeshStandardMaterial({color:0x9fb8be,transparent:true,opacity:.16,metalness:.18,roughness:.22,side:THREE.DoubleSide,depthWrite:false});
 cylinder(.48,.48,3.15,[-6.05,5.45,-1.4],drumGlass,parent);
 for(const xx of [-7.65,-4.45]){torus(.48,.043,[xx,5.45,-1.4],steel,parent);bolts(xx,.42,5.45,-1.4,parent);}
 drumLiquid=new THREE.MeshStandardMaterial({color:0x3994e5,transparent:true,opacity:.73,roughness:.3,side:THREE.DoubleSide});
 const lowerWater=mesh(new THREE.CylinderGeometry(.415,.415,3.06,40,1,false,0,Math.PI),drumLiquid,[-6.05,5.45,-1.4],parent);lowerWater.rotation.z=-Math.PI/2;
 const surface=mesh(new THREE.PlaneGeometry(3.06,.83),drumLiquid,[-6.05,5.45,-1.4],parent);surface.rotation.x=-Math.PI/2;
 const drumCover=new THREE.Group();parent.add(drumCover);cylinder(.485,.485,3.17,[-6.05,5.45,-1.4],dark,drumCover);covers.push({obj:drumCover,part:'boiler'});
 boilerBubbles=new THREE.InstancedMesh(new THREE.SphereGeometry(.046,8,6),new THREE.MeshStandardMaterial({color:0xffefbd,emissive:0xffb32c,emissiveIntensity:.38,transparent:true,opacity:.84,roughness:.15}),90);boilerBubbles.frustumCulled=false;parent.add(boilerBubbles);
}
function updateBoilerWater(t){
 const heat=state.started?ramp(t,6.2,9.6):0;heatUniforms.uHeat.value=heat;
 for(const mat of heaterMaterials)mat.color.copy(coldColor).lerp(steamColor,heat);
 drumLiquid.color.copy(coldColor).lerp(steamColor,heat*.85);
 boilerBubbles.visible=state.mode==='cutaway'&&heat>.16;
 if(!boilerBubbles.visible)return;
 for(let i=0;i<boilerBubbles.count;i++){
  const tube=i%6,life=(Math.max(0,t-6.6)*(.24+(i%4)*.015)+i*.137)%1;
  if(i<72)dummy.position.set(-7.28+tube*.43+Math.sin(i*3.5+t)*.027,1.18+life*4.1,-1.5+Math.cos(i*1.7+t)*.03);
  else dummy.position.set(-7.4+(i-72)*.157,5.17+life*.60,-1.4+Math.sin(i)*.13);
  dummy.quaternion.identity();dummy.scale.setScalar(heat*(.38+life*1.58));dummy.updateMatrix();boilerBubbles.setMatrixAt(i,dummy.matrix);
 }
 boilerBubbles.instanceMatrix.needsUpdate=true;
}

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
 // A drum boiler: water descends outside the furnace, rises and boils in heated water-wall tubes.
 buildBoilerWater(g);
 const coils=[[-7.35,4.55,.62],[-4.95,4.55,.62],[-4.8,4.8,.4],[-7.35,4.8,.4],[-7.45,5.03,.1],[-4.7,5.03,.1],[-4.6,5.4,-.1]];
 flowPipe(coils,.083,hot,0xffddb1,.12,'superheater');
 flowPipe([[-7.3,5.82,-1.4],[-7.4,5.3,-.8],[-7.35,4.55,.62]],.09,hot,0xffddb1,.12,'superheater');
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
 covers.push({obj:cover,part:'turbine'});
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
 const cover=new THREE.Group();g.add(cover);shellHalf(x,y,0,.95,.95,2.65,mat,cover,true);covers.push({obj:cover,part:'generator'});
 for(let a of [-1,1]){torus(.94,.075,[x+a*1.36,y,0],cream,g);bolts(x+a*1.43,.82,y,0,g);}
 // Closed stator-coil loops: two axial sides joined by curved end windings.
 // Six closed, stationary coils are simplified spatially.
 generatorCoils=copper.clone();generatorCoils.emissive.set(0xffa323);
 for(let i=0;i<6;i++)for(let strand=0;strand<2;strand++){
 const a=i/6*Math.PI*2+.03*strand,b=a+Math.PI*.78,r=.73+strand*.043,pts=[];
 const at=(xx,ang,rr=r)=>[xx,y+Math.cos(ang)*rr,Math.sin(ang)*rr];
 pts.push(at(x-1.13,a),at(x,a),at(x+1.13,a));
 for(let j=0;j<=10;j++){const f=j/10;pts.push(at(x+1.22+Math.sin(f*Math.PI)*.16,a+(b-a)*f,r+.025*Math.sin(f*Math.PI)));}
 pts.push(at(x+1.13,b),at(x,b),at(x-1.13,b));
 for(let j=0;j<=10;j++){const f=j/10;pts.push(at(x-1.22-Math.sin(f*Math.PI)*.16,b+(a-b)*f,r+.025*Math.sin(f*Math.PI)));}
 pts.push(at(x-1.13,a));pipe(pts,.032,generatorCoils,g);
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
 box([1.8,.45,.52],[4.7,2.55,1.07],cream,g);
 for(let phase=0;phase<3;phase++){
  const xx=4.1+phase*.6;
  cylinder(.09,.09,.35,[xx,2.55,1.42],dark,g,'z');
  torus(.095,.025,[xx,2.55,1.57],phaseSleeves[phase],g,'z');
 }
}
function buildCondenser(){
 const g=group('condenser'),x=-.25,y=.97,z=.65;
 const glass=new THREE.MeshStandardMaterial({color:0x80b4b0,transparent:true,opacity:.2,roughness:.22,metalness:.15,depthWrite:false,side:THREE.DoubleSide});
 const outside=new THREE.Group();g.add(outside);box([4.2,1.48,2.0],[x,y,z],cream,outside);covers.push({obj:outside,part:'condenser'});
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
 buildElectricalGrid();
}
// Three distinct conductors connect the generator to one compact distribution transformer.
const phaseSleeves=[0xb46350,0xc8a842,0x588ca2].map(color=>new THREE.MeshStandardMaterial({color,roughness:.5}));
const conductor=new THREE.MeshStandardMaterial({color:0x3d4947,metalness:.55,roughness:.45});
const porcelain=new THREE.MeshStandardMaterial({color:0xdadcc6,roughness:.24,metalness:.12});
function insulator(x,y,z,height,parent=root){
 cylinder(.065,.065,height,[x,y+height/2,z],copper,parent,'y',12);
 const discs=Math.max(3,Math.round(height/.105));
 for(let i=0;i<discs;i++)cylinder(.115,.14,.045,[x,y+.05+i*(height-.09)/discs,z],porcelain,parent,'y',16);
 return [x,y+height,z];
}
function electricalPath(points,type,phase,parent,radius=.033,markerRadius=.07){
 const cable=pipe(points,radius,conductor,parent);
 const inst=flow(cable.curve,0xffdb54,15,.13,type,markerRadius);
 const system=flowSystems.at(-1);system.phase=phase;
 electricalCircuits.push({type,phase,points});
 return inst;
}
function buildElectricalGrid(){
 const g=group('grid');
 // Switching and protection are enclosed. Long-distance transmission is omitted.
 box([1.9,.16,2.05],[8.15,.39,-1.05],pale,g);
 box([1.5,1.18,1.7],[8.15,1.06,-1.05],support,g);
 box([1.65,.12,1.86],[8.15,1.7,-1.05],cream,g);
 for(let side of [-1,1])for(let i=0;i<6;i++)box([.13,.81,.055],[8.15+side*.8,1.06,-1.7+i*.26],dark,g);
 // Front access panel, handle and two separate low-voltage terminals.
 box([1.14,.87,.035],[8.15,1.07,-.18],cream,g);
 box([.055,.18,.045],[8.52,1.08,-.15],dark,g);
 for(let phase=0;phase<3;phase++){
  const z=-1.65+phase*.58,terminal=insulator(7.7,1.77,z,.35,g);
  cylinder(.083,.083,.07,[7.7,2.05,z],phaseSleeves[phase],g,'y',12);
  electricalPath([[4.1+phase*.6,2.55,1.59],[4.1+phase*.6,1.15,1.82+phase*.22],[5.9+phase*.2,.5,1.82+phase*.22],[6.67+phase*.19,.6,z],[7.07,1.62,z],terminal],'electric',phase,g);
 }
 for(let x of [8.02,8.4]){
  cylinder(.06,.06,.14,[x,.85,-.07],porcelain,g,'z',12);
  torus(.067,.018,[x,.85,.01],dark,g,'z');
 }
}

function buildBase(){
 box([26.6,.42,9.7],[2.5,.02,0],new THREE.MeshStandardMaterial({color:0xd1d9c8,roughness:.9}));
 box([26.3,.04,9.4],[2.5,.255,0],new THREE.MeshStandardMaterial({color:0xe1e4d6,roughness:.9}));
 const grid=new THREE.GridHelper(26,52,0xbecab8,0xd1d9c9);grid.position.set(2.5,.287,0);root.add(grid);
 // Grid is clipped visually by its modest opacity; platform edge gives the model a physical scale.
 grid.material.transparent=true;grid.material.opacity=.25;grid.scale.z=.35;
 for(let x=-9;x<15;x+=1.0)box([.4,.015,.1],[x,.29,4.23],pale);
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
function radialTexture(){
 const c=document.createElement('canvas');c.width=c.height=128;const ctx=c.getContext('2d');
 const gradient=ctx.createRadialGradient(64,64,0,64,64,64);
 gradient.addColorStop(0,'rgba(255,246,188,.75)');gradient.addColorStop(.22,'rgba(255,208,83,.42)');gradient.addColorStop(.55,'rgba(255,163,40,.13)');gradient.addColorStop(1,'rgba(255,157,30,0)');
 ctx.fillStyle=gradient;ctx.fillRect(0,0,128,128);return new THREE.CanvasTexture(c);
}
function buildLoad(){
 const g=group('load'),x=12.2,z=-.97;
 // A short everyday street replaces the demonstration bulb.
 const asphalt=new THREE.MeshStandardMaterial({color:0x3b4446,roughness:1});
 const curb=new THREE.MeshStandardMaterial({color:0xc4cbc0,roughness:.9});
 const paint=new THREE.MeshStandardMaterial({color:0xe3e5d9,roughness:.85});
 box([5.7,.065,3.2],[12.35,.315,1.2],asphalt,g);
 box([5.7,.17,1.1],[12.35,.367,-.96],curb,g);
 for(let i=0;i<11;i++)box([.49,.15,.13],[9.75+i*.52,.39,-.37],pale,g);
 for(let zz of [.18,2.22])box([4.45,.006,.04],[11.9,.351,zz],paint,g);
 box([.04,.006,2.04],[9.68,.351,1.2],paint,g);
 for(let zz of [-.25,2.64])box([5.5,.006,.045],[12.35,.351,zz],paint,g);
 for(let zz=-.08;zz<2.55;zz+=.43)box([.67,.007,.22],[14.72,.352,zz],paint,g);
 // Tapered pole, curved arm and a flat LED luminaire.
 box([.45,.12,.45],[x,.51,z],dark,g);
 for(let dx of [-.15,.15])for(let dz of [-.15,.15])cylinder(.024,.024,.055,[x+dx,.59,z+dz],steel,g,'y',6);
 streetPole=steel.clone();streetPole.transparent=true;streetPole.opacity=.45;streetPole.depthWrite=false;
 cylinder(.075,.13,4.08,[x,2.61,z],streetPole,g,'y',24);
 cylinder(.145,.155,.32,[x,.73,z],dark,g,'y',24);
 pipe([[x,4.6,z],[x,4.89,-.72],[x,5.05,-.15],[x,5.05,.64]],.073,streetPole,g);
 const housing=mesh(new THREE.SphereGeometry(1,24,12),dark,[x,5.035,.96],g);housing.scale.set(.36,.12,.72);
 loadLens=box([.54,.065,1.10],[x,4.935,.96],new THREE.MeshStandardMaterial({color:0x657575,emissive:0xffdea0,emissiveIntensity:0,roughness:.25}),g);loadLens.castShadow=false;
 for(let i=0;i<5;i++)box([.52,.025,.025],[x,5.14,.63+i*.15],steel,g);
 const glowTexture=radialTexture();
 loadHalo=new THREE.Sprite(new THREE.SpriteMaterial({map:glowTexture,transparent:true,opacity:0,depthWrite:false,blending:THREE.AdditiveBlending,toneMapped:false}));loadHalo.position.set(x,4.925,.96);loadHalo.scale.set(1.5,1.0,1);g.add(loadHalo);
 loadPool=mesh(new THREE.PlaneGeometry(4.15,3.0),new THREE.MeshBasicMaterial({map:glowTexture,transparent:true,opacity:0,depthWrite:false,blending:THREE.AdditiveBlending,toneMapped:false}),[x,.359,1.19],g);loadPool.rotation.x=-Math.PI/2;loadPool.castShadow=false;
 loadLight=new THREE.SpotLight(0xffdf9b,0,9,.48,.67,2);loadLight.position.set(x,4.88,.96);loadLight.target.position.set(x,.35,1.2);g.add(loadLight,loadLight.target);
 // The two conductors run along the sidewalk and inside the pole to the fixture.
 electricalPath([[8.02,.85,.01],[8.75,.58,-.57],[9.3,.55,-1.04],[9.8,.55,-1.04],[11.4,.55,-1.04],[11.8,.55,-1.04],[x-.035,.84,z],[x-.035,4.59,z],[x-.035,4.86,-.69],[x-.035,5.00,-.14],[x-.035,4.94,.45]],'load-electric',0,g,.013,.044);
 const supply=flowSystems.at(-1);loadArrival=supply.start+supply.length/supply.velocity;
 electricalPath([[x+.035,4.94,.45],[x+.035,5.00,-.14],[x+.035,4.86,-.69],[x+.035,4.59,z],[x+.035,.84,z],[11.8,.55,-.85],[11.4,.55,-.85],[9.8,.55,-.85],[9.34,.55,-.85],[8.95,.58,-.39],[8.4,.85,.01]],'load-electric',1,g,.013,.044);
 flowSystems.at(-1).returnConductor=true;
}

function carSection(points,depth,material,pos,parent,bevel=.06){
 const shape=new THREE.Shape();shape.moveTo(...points[0]);for(const p of points.slice(1))shape.lineTo(...p);shape.closePath();
 const geo=new THREE.ExtrudeGeometry(shape,{depth,bevelEnabled:true,bevelSegments:3,steps:1,bevelSize:bevel,bevelThickness:bevel,curveSegments:8});geo.translate(0,0,-depth/2);
 return mesh(geo,material,pos,parent);
}
function buildEV(){
 const g=group('ev'),cx=11.9,cz=1.2;
 const paint=new THREE.MeshStandardMaterial({color:0x71aaba,metalness:.48,roughness:.28});
 const trim=new THREE.MeshStandardMaterial({color:0x28373d,metalness:.4,roughness:.45});
 const rubber=new THREE.MeshStandardMaterial({color:0x242b2c,roughness:.9});
 const glass=new THREE.MeshStandardMaterial({color:0x233e50,metalness:.42,roughness:.18});
 evBody=paint.clone();evBody.transparent=true;evBody.opacity=.46;evBody.depthWrite=false;
 carSection([[-1.91,.41],[-1.95,.59],[-1.75,.81],[-1.13,.92],[.97,.94],[1.73,.78],[1.95,.58],[1.90,.39]],1.45,evBody,[cx,.35,cz],g,.08);
 // A solid roof, glazing, bumpers and wheels retain a recognizable car in cutaway view.
 carSection([[-1.05,.94],[-.58,1.50],[.56,1.50],[1.16,.94]],1.25,glass,[cx,.35,cz],g,.035);
 const roof=mesh(new THREE.SphereGeometry(1,24,12),paint,[cx-.01,1.895,cz],g);roof.scale.set(.70,.055,.67);
 box([.085,.55,1.33],[cx,1.58,cz],paint,g);
 for(const side of [-1,1]){
  lineBetween([cx-1.10,1.29,cz+side*.66],[cx-.6,1.86,cz+side*.66],.035,paint,g);
  lineBetween([cx+1.18,1.29,cz+side*.66],[cx+.58,1.86,cz+side*.66],.035,paint,g);
  for(const xx of [-.61,.64])box([.21,.035,.036],[cx+xx,1.19,cz+side*.805],trim,g);
  box([.18,.10,.17],[cx+.85,1.44,cz+side*.87],paint,g);
  for(const xx of [-1.22,1.22]){
   cylinder(.33,.33,.18,[cx+xx,.70,cz+side*.77],rubber,g,'z',32);
   cylinder(.21,.21,.195,[cx+xx,.70,cz+side*.78],steel,g,'z',24);
   cylinder(.07,.07,.206,[cx+xx,.70,cz+side*.78],trim,g,'z',16);
   for(let j=0;j<5;j++){const a=j*Math.PI*2/5;lineBetween([cx+xx,.70,cz+side*.89],[cx+xx+Math.cos(a)*.18,.70+Math.sin(a)*.18,cz+side*.89],.016,trim,g);}
  }
 }
 box([.11,.22,1.28],[cx+1.94,.85,cz],paint,g);box([.11,.20,1.27],[cx-1.94,.83,cz],paint,g);
 box([.02,.08,.78],[cx+2.005,.77,cz],trim,g);
 for(let side of [-1,1]){
  const lamp=box([.055,.13,.36],[cx+1.99,1.01,cz+side*.52],new THREE.MeshStandardMaterial({color:0x738786,emissive:0xe7faff,emissiveIntensity:0,roughness:.22}),g);lamp.castShadow=false;evHeadlamps.push(lamp);
  box([.055,.11,.31],[cx-1.99,1.01,cz+side*.52],new THREE.MeshStandardMaterial({color:0x812e32,roughness:.3}),g);
  const pool=mesh(new THREE.PlaneGeometry(1.4,.95),new THREE.MeshBasicMaterial({map:radialTexture(),transparent:true,opacity:0,depthWrite:false,blending:THREE.AdditiveBlending,toneMapped:false}),[14.55,.361,cz+side*.52],g);pool.rotation.x=-Math.PI/2;pool.castShadow=false;evLightPools.push(pool);
 }
 // Underfloor battery modules accumulate energy after the charging connector is reached.
 box([2.84,.10,1.12],[cx,.78,cz],trim,g);
 for(let i=0;i<6;i++){
  const material=new THREE.MeshStandardMaterial({color:0x345862,emissive:0x3dffc1,emissiveIntensity:0,roughness:.35,metalness:.25});
  evCells.push(box([.39,.19,.99],[cx-1.08+i*.43,.93,cz],material,g));
 }
 evPort=torus(.095,.025,[cx-1.13,1.18,cz+.83],new THREE.MeshStandardMaterial({color:0x34564b,emissive:0x48ffb8,emissiveIntensity:0}),g,'z');
 // A compact charger beside the parking bay; the plug cable contains supply and return conductors.
 box([.94,.14,.80],[10.35,.39,3.22],pale,g);
 box([.61,1.34,.40],[10.35,1.13,3.22],cream,g);
 box([.48,.78,.045],[10.35,1.30,3.45],trim,g);
 evScreen=new THREE.MeshStandardMaterial({color:0x24534c,emissive:0x47ffc0,emissiveIntensity:0});
 // Physical battery pictogram: a frame with three bars, no extra text in the model.
 for(const dx of [-.145,.145])box([.018,.22,.015],[10.35+dx,1.47,3.48],evScreen,g);
 for(const yy of [1.36,1.58])box([.3,.018,.015],[10.35,yy,3.48],evScreen,g);
 box([.07,.035,.015],[10.35,1.605,3.48],evScreen,g);
 for(let i=0;i<3;i++)box([.07,.14,.018],[10.25+i*.10,1.47,3.485],evScreen,g);
 electricalPath([[8.02,.85,.01],[8.9,.55,.04],[9.16,.55,.45],[9.16,.55,2.6],[9.3,.55,3.18],[10.21,.55,3.18],[10.25,1.15,3.24]],'ev-feed',0,g,.018,.05);
 const feed=flowSystems.at(-1);evFeedArrival=feed.start+feed.length/feed.velocity;
 electricalPath([[10.43,1.15,3.24],[10.45,.55,3.36],[9.25,.55,3.36],[8.98,.55,2.6],[8.98,.55,.4],[8.4,.85,.01]],'ev-feed',1,g,.018,.05);flowSystems.at(-1).returnConductor=true;
 const chargePoints=[[10.60,1.25,3.23],[10.92,.81,3.0],[11.02,.71,2.55],[10.83,.99,2.17],[cx-1.13,1.18,cz+.93]];
 const cable=pipe(chargePoints,.041,conductor,g);flow(cable.curve,0x6bffd0,12,.12,'ev-charge',.053);
 const chargeFlow=flowSystems.at(-1);chargeFlow.start=Math.max(chargeFlow.start,evFeedArrival+.15);evArrival=chargeFlow.start+chargeFlow.length/chargeFlow.velocity;
 electricalCircuits.push({type:'ev-charge',phase:0,points:chargePoints});
 cylinder(.064,.064,.22,[cx-1.13,1.18,cz+.98],trim,g,'z',16);
 evGlow=mesh(new THREE.PlaneGeometry(4.1,2.3),new THREE.MeshBasicMaterial({map:radialTexture(),color:0x58ffc5,transparent:true,opacity:0,depthWrite:false,blending:THREE.AdditiveBlending,toneMapped:false}),[cx,.363,cz],g);evGlow.rotation.x=-Math.PI/2;evGlow.castShadow=false;
}
function updateEV(t){
 const arrivedAt=Math.max(31,evArrival),active=state.started;
 evCharge=active?ramp(t,arrivedAt,arrivedAt+.6):0;
 evBody.opacity=state.mode==='outside'?1:.46;evBody.depthWrite=state.mode==='outside';
 const charger=active?ramp(t,evFeedArrival,evFeedArrival+.35):0;
 evScreen.emissiveIntensity=charger*2.5;evPort.material.emissiveIntensity=evCharge*3.2;
 for(let i=0;i<evCells.length;i++){
  const fill=active?ramp(t,arrivedAt+i*.7,arrivedAt+i*.7+.6):0;
  evCells[i].material.emissiveIntensity=fill*2.7;evCells[i].material.color.set(fill>.01?0x68e8bd:0x345862);
 }
 for(const lamp of evHeadlamps){lamp.material.emissiveIntensity=evCharge*7;lamp.material.color.set(evCharge>.01?0xeaffff:0x738786);}
 for(const pool of evLightPools)pool.material.opacity=evCharge*.85;
 evGlow.material.opacity=evCharge*.62;
}

const viewpoints={
 overview:{target:[2.4,2.55,0],offset:[18.4,15,26],wide:true},
 boiler:{target:[-6.1,3.5,-.65],offset:[4,2.2,9.6]},
 turbine:{target:[-.5,3.2,0],offset:[5.7,4.25,8.4]},
 generator:{target:[4.65,3.3,0],offset:[5.0,3.0,6.5]},
 condenser:{target:[-.7,1.15,1.4],offset:[6.0,3.8,8.7]},
 grid:{target:[8.15,1.65,-.05],offset:[5.2,4.0,8.0]},
 load:{target:[11.8,2.5,.5],offset:[4.6,1.8,9.6]},
 ev:{target:[11.7,1.15,1.65],offset:[4.9,3.3,7.1],wide:true}
};
const tourNodes=[
 {t:0,...viewpoints.overview},{t:1.8,...viewpoints.condenser},
 {t:4.8,target:[-3.7,1.2,1.2],offset:[7,4.4,9]},
 {t:7.3,...viewpoints.boiler},{t:9.3,...viewpoints.boiler},{t:10.8,target:[-5.9,4.7,-.7],offset:[4.3,2.4,7.6]},
 {t:13.4,...viewpoints.turbine},{t:15.8,...viewpoints.turbine},
 {t:18.5,...viewpoints.generator},{t:21.5,...viewpoints.grid},{t:22.8,...viewpoints.grid},
 {t:24.5,...viewpoints.load},{t:27.3,...viewpoints.load},{t:29.1,...viewpoints.ev},{t:31,...viewpoints.ev},{t:38,...viewpoints.ev}
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
 root=new THREE.Group();scene.add(root);buildBase();buildBoiler();buildTurbine();buildGenerator();buildCondenser();buildPipesAndGrid();buildLoad();buildEV();
 for(const [name,g] of Object.entries(parts))g.traverse(o=>{if(o.isMesh&&!(o.material instanceof THREE.ShaderMaterial)){o.userData.part=name;pickables.push(o);}});
 controls=new OrbitControls(camera,renderer.domElement);controls.enableDamping=true;controls.dampingFactor=.085;controls.minDistance=4;controls.maxDistance=110;controls.maxPolarAngle=Math.PI*.48;controls.minPolarAngle=.10;controls.enablePan=true;
 setCamera('overview',true);
 let oldWidth=wrap.clientWidth,oldHeight=wrap.clientHeight;
 new ResizeObserver(()=>{camera.aspect=wrap.clientWidth/wrap.clientHeight;camera.updateProjectionMatrix();renderer.setSize(wrap.clientWidth,wrap.clientHeight,false);if(Math.abs(oldWidth-wrap.clientWidth)>40||Math.abs(oldHeight-wrap.clientHeight)>80){oldWidth=wrap.clientWidth;oldHeight=wrap.clientHeight;if(state.follow&&state.started)updateTourCamera();else setCamera(state.step,true);}}).observe(wrap);
 controls.addEventListener('start',()=>setFollow(false));
 const ray=new THREE.Raycaster();let down=null;
 $('#scene').addEventListener('pointerdown',e=>{down={x:e.clientX,y:e.clientY};});
 $('#scene').addEventListener('pointerup',e=>{if(!down||Math.hypot(e.clientX-down.x,e.clientY-down.y)>5)return;const rect=renderer.domElement.getBoundingClientRect();ray.setFromCamera(new THREE.Vector2((e.clientX-rect.left)/rect.width*2-1,-(e.clientY-rect.top)/rect.height*2+1),camera);const hit=ray.intersectObjects(pickables,false).find(h=>isHierarchyVisible(h.object));if(hit){state.step=hit.object.userData.part;setCamera(state.step);}});
 $('#scene').addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','+','-','='].includes(e.key)){e.preventDefault();setFollow(false);const sph=new THREE.Spherical().setFromVector3(camera.position.clone().sub(controls.target));if(e.key==='ArrowLeft')sph.theta-=.12;if(e.key==='ArrowRight')sph.theta+=.12;if(e.key==='ArrowUp')sph.phi=Math.max(.2,sph.phi-.12);if(e.key==='ArrowDown')sph.phi=Math.min(1.48,sph.phi+.12);if(e.key==='+'||e.key==='=')sph.radius*=.88;if(e.key==='-')sph.radius*=1.12;camera.position.copy(controls.target).add(new THREE.Vector3().setFromSpherical(sph));controls.update();}});
 $('#loading').hidden=true;updateButtons();updateVisuals(0);requestAnimationFrame(animate);
}
function isHierarchyVisible(o){while(o){if(!o.visible)return false;o=o.parent;}return true;}
function setCamera(key,instant=false){
 if(!camera||!controls)return;const view=viewpoints[key],target=v(view.target),offset=fitOffset(v(view.offset),!!view.wide);const position=target.clone().add(offset);
 if(instant||reduceMotion){controls.target.copy(target);camera.position.copy(position);controls.update();cameraTween=null;}
 else cameraTween={from:camera.position.clone(),to:position,fromTarget:controls.target.clone(),target,elapsed:0};
}
function setFollow(value){state.follow=value;cameraTween=null;$('#follow').classList.toggle('active',value);$('#follow').setAttribute('aria-pressed',String(value));}
function updateTourCamera(){
 const t=Math.min(state.time,DURATION);let i=0;while(i<tourNodes.length-2&&t>tourNodes[i+1].t)i++;
 const a=tourNodes[i],b=tourNodes[i+1],f=ramp(t,a.t,b.t);
 travelTarget.lerpVectors(v(a.target),v(b.target),f);
 const offsetA=fitOffset(v(a.offset),!!a.wide),offsetB=fitOffset(v(b.offset),!!b.wide);
 travelOffset.lerpVectors(offsetA,offsetB,f);
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
 for(const c of covers)c.obj.visible=state.mode==='outside';
 for(const walls of boilerWalls)walls.visible=state.mode==='outside';
 const burn=state.started?ramp(t,5.8,7.3):0;fireUniforms.uTime.value=t;fireUniforms.uBurn.value=burn;
 for(const flame of flames){flame.visible=burn>.001;flame.rotation.y=Math.atan2(camera.position.x-flame.position.x,camera.position.z-flame.position.z);flame.scale.y=.6+.4*burn;}
 fireLight.intensity=burn*48*(.91+.09*Math.sin(t*16)*Math.sin(t*7.3));sparks.visible=burn>.001;
 for(let i=0;i<sparks.count&&burn>.001;i++){const life=(t*(.21+(i%5)*.015)+i*.137)%1;dummy.position.set(-7.12+(i%7)*.34+Math.sin(t*2+i)*.1*life,1.14+life*2.9,-1.12+(i%4)*.44+Math.sin(i+t)*.08);dummy.quaternion.identity();dummy.scale.setScalar((1-life)*burn);dummy.updateMatrix();sparks.setMatrixAt(i,dummy.matrix);}sparks.instanceMatrix.needsUpdate=true;
 for(const s of flowSystems){
 const elapsed=state.started?t-s.start:-1;s.inst.visible=elapsed>=0&&!s.returnConductor;
 if(['internal','condensation','boiler','superheater','heat-transfer','heat-in'].includes(s.type)&&state.mode==='outside')s.inst.visible=false;
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
 updateBoilerWater(t);
 const power=state.started?ramp(t,13.1,15.0):0;
 generatorCoils.emissiveIntensity=power*.42;
 for(const mat of fieldMaterials)mat.opacity=power*(.22+.42*Math.abs(Math.sin(state.phase)));
 const lightAt=Math.max(LAMP_ON,loadArrival),light=state.started?ramp(t,lightAt,lightAt+.65):0;
 streetPole.opacity=state.mode==='outside'?1:.45;streetPole.depthWrite=state.mode==='outside';
 loadLens.material.emissiveIntensity=light*5;loadLens.material.color.set(light>.01?0xffedbf:0x657575);
 loadHalo.material.opacity=light*.64;loadPool.material.opacity=light*.9;loadLight.intensity=light*165;
 updateEV(t);
 $('#timeline').value=Math.min(DURATION,t);$('#timeline').style.setProperty('--progress',`${Math.min(t/DURATION,1)*100}%`);
}
function animate(now){
 requestAnimationFrame(animate);const dt=Math.min((now-(lastTime||now))/1000,.05);lastTime=now;if(document.hidden)return;
 if(state.playing)state.time+=dt*state.speed;
 if(state.follow&&state.started&&state.time<=DURATION)updateTourCamera();
 else if(cameraTween){cameraTween.elapsed+=dt;const f=ramp(cameraTween.elapsed,0,1.1);camera.position.lerpVectors(cameraTween.from,cameraTween.to,f);controls.target.lerpVectors(cameraTween.fromTarget,cameraTween.target,f);if(f===1)cameraTween=null;}
 updateVisuals(dt);controls.update();renderer.render(scene,camera);state.rendered=true;
}
try{init();}catch(err){console.error(err);$('#loading').hidden=false;$('#loading').className='error';$('#loading').innerHTML='<div>3Dを表示できませんでした。</div><button onclick="location.reload()">再読み込み</button>';$$('button,select,input').forEach(b=>{if(!b.closest('#loading'))b.disabled=true;});}
window.energyLab={snapshot:()=>({...state,rotorAngle:rotor?.rotation.x,magnetAngle:magnet?.rotation.x,flamePower:fireUniforms.uBurn.value,lightPower:loadLight?.intensity,luminairePower:loadLens?.material.emissiveIntensity,roadGlow:loadPool?.material.opacity,loadArrival,loadKind:'streetlight-and-ev',evArrival,evFeedArrival,evCharge,evHeadlights:evHeadlamps[0]?.material.emissiveIntensity,evCellsLit:evCells.filter(m=>m.material.emissiveIntensity>.4).length,distributionUnits:1,waterHeat:heatUniforms.uHeat.value,bubbleCount:boilerBubbles?.visible?boilerBubbles.count:0,circuits:electricalCircuits.map(({type,phase,points})=>({type,phase,start:points[0],end:points.at(-1)})),drawCalls:renderer?.info.render.calls,visibleCovers:covers.filter(c=>c.obj.visible).length,camera:camera?.position.toArray(),target:controls?.target.toArray(),flows:flowSystems.map(s=>({type:s.type,phase:s.phase,velocity:s.velocity,count:s.inst.visible?s.visibleCount:0}))})};
