(()=>{var _n={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},vn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ou=0,Mc=1,Fu=2;var Sc=1,Uo=2,Di=3,Br=0,Ht=1,gt=2,xn=0,qs=1,yn=2,bc=3,Tc=4,Bu=5,zr=100,zu=101,Hu=102,Gu=103,ku=104,Vu=200,Wu=201,Xu=202,ju=203,qu=204,Yu=205,Zu=206,Ju=207,Ku=208,$u=209,Qu=210,ed=211,td=212,id=213,nd=214,No=0,Oo=1,Fo=2,Ys=3,Bo=4,zo=5,Ho=6,Go=7,rd=0,sd=1,ad=2,Qi=0,od=1,ld=2,cd=3,ko=4,hd=5,ud=6,dd=7;var Ec=300,Hr=301,kn=302,Vo=303,Wo=304,Zs=306,Wa=1e3,br=1001,Xa=1002,Ri=1003,pd=1004;var Js=1005;var Ci=1006,Xo=1007;var Vn=1008;var Ui=1009,wc=1010,Ac=1011,Gr=1012,jo=1013,Wn=1014,_i=1015,kr=1016,qo=1017,Yo=1018,Vr=1020,Rc=35902,Cc=35899,md=1021,fd=1022,vi=1023,Ks=1026,$s=1027,Zo=1028,Jo=1029,gd=1030,Pc=1031;var Ic=1033,Ko=33776,$o=33777,Qo=33778,el=33779,Lc=35840,Dc=35841,Uc=35842,Nc=35843,Oc=36196,Fc=37492,Bc=37496,zc=37808,Hc=37809,Gc=37810,kc=37811,Vc=37812,Wc=37813,Xc=37814,jc=37815,qc=37816,Yc=37817,Zc=37818,Jc=37819,Kc=37820,$c=37821,Qc=36492,eh=36494,th=36495,ih=36283,nh=36284,rh=36285,sh=36286;var ms=2300,ja=2301,Va=2302,cc=2400,hc=2401,uc=2402;var _d=3201;var vd=0,xd=1,Xn="",qt="srgb",Dn="srgb-linear",fs="linear",Ke="srgb";var Ln=7680;var yd=512,Md=513,Sd=514,ah=515,bd=516,Td=517,Ed=518,wd=519,qa=35044,oh=35048;var lh="300 es",Zi=2e3,gs=2001;var Pi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i!==void 0&&i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let n=i[e];if(n!==void 0){let s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,e);e.target=null}}},It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qh=1234567,Mr=Math.PI/180,Un=180/Math.PI;function Ai(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(It[255&r]+It[r>>8&255]+It[r>>16&255]+It[r>>24&255]+"-"+It[255&e]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[63&t|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[255&i]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]).toLowerCase()}function De(r,e,t){return Math.max(e,Math.min(t,r))}function dc(r,e){return(r%e+e)%e}function us(r,e,t){return(1-t)*r+t*e}function pi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Je(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}var Qs={DEG2RAD:Mr,RAD2DEG:Un,generateUUID:Ai,clamp:De,euclideanModulo:dc,mapLinear:function(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)},inverseLerp:function(r,e,t){return r!==e?(t-r)/(e-r):0},lerp:us,damp:function(r,e,t,i){return us(r,e,1-Math.exp(-t*i))},pingpong:function(r,e=1){return e-Math.abs(dc(r,2*e)-e)},smoothstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*(3-2*r)},smootherstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*r*(r*(6*r-15)+10)},randInt:function(r,e){return r+Math.floor(Math.random()*(e-r+1))},randFloat:function(r,e){return r+Math.random()*(e-r)},randFloatSpread:function(r){return r*(.5-Math.random())},seededRandom:function(r){r!==void 0&&(Qh=r);let e=Qh+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(r){return r*Mr},radToDeg:function(r){return r*Un},isPowerOfTwo:function(r){return!(r&r-1)&&r!==0},ceilPowerOfTwo:function(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))},floorPowerOfTwo:function(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))},setQuaternionFromProperEuler:function(r,e,t,i,n){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+i)/2),h=a((e+i)/2),d=s((e-i)/2),u=a((e-i)/2),p=s((i-e)/2),f=a((i-e)/2);switch(n){case"XYX":r.set(o*h,c*d,c*u,o*l);break;case"YZY":r.set(c*u,o*h,c*d,o*l);break;case"ZXZ":r.set(c*d,c*u,o*h,o*l);break;case"XZX":r.set(o*h,c*f,c*p,o*l);break;case"YXY":r.set(c*p,o*h,c*f,o*l);break;case"ZYZ":r.set(c*f,c*p,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}},normalize:Je,denormalize:pi},J=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=De(this.x,e.x,t.x),this.y=De(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=De(this.x,e,t),this.y=De(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(De(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(De(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*n+e.x,this.y=s*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Dt=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,a,o){let c=i[n+0],l=i[n+1],h=i[n+2],d=i[n+3],u=s[a+0],p=s[a+1],f=s[a+2],_=s[a+3];if(o===0)return e[t+0]=c,e[t+1]=l,e[t+2]=h,void(e[t+3]=d);if(o===1)return e[t+0]=u,e[t+1]=p,e[t+2]=f,void(e[t+3]=_);if(d!==_||c!==u||l!==p||h!==f){let m=1-o,g=c*u+l*p+h*f+d*_,v=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){let A=Math.sqrt(x),R=Math.atan2(A,g*v);m=Math.sin(m*R)/A,o=Math.sin(o*R)/A}let M=o*v;if(c=c*m+u*M,l=l*m+p*M,h=h*m+f*M,d=d*m+_*M,m===1-o){let A=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=A,l*=A,h*=A,d*=A}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,n,s,a){let o=i[n],c=i[n+1],l=i[n+2],h=i[n+3],d=s[a],u=s[a+1],p=s[a+2],f=s[a+3];return e[t]=o*f+h*d+c*p-l*u,e[t+1]=c*f+h*u+l*d-o*p,e[t+2]=l*f+h*p+o*u-c*d,e[t+3]=h*f-o*d-c*u-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(n/2),d=o(s/2),u=c(i/2),p=c(n/2),f=c(s/2);switch(a){case"XYZ":this._x=u*h*d+l*p*f,this._y=l*p*d-u*h*f,this._z=l*h*f+u*p*d,this._w=l*h*d-u*p*f;break;case"YXZ":this._x=u*h*d+l*p*f,this._y=l*p*d-u*h*f,this._z=l*h*f-u*p*d,this._w=l*h*d+u*p*f;break;case"ZXY":this._x=u*h*d-l*p*f,this._y=l*p*d+u*h*f,this._z=l*h*f+u*p*d,this._w=l*h*d-u*p*f;break;case"ZYX":this._x=u*h*d-l*p*f,this._y=l*p*d+u*h*f,this._z=l*h*f-u*p*d,this._w=l*h*d+u*p*f;break;case"YZX":this._x=u*h*d+l*p*f,this._y=l*p*d+u*h*f,this._z=l*h*f-u*p*d,this._w=l*h*d-u*p*f;break;case"XZY":this._x=u*h*d-l*p*f,this._y=l*p*d-u*h*f,this._z=l*h*f+u*p*d,this._w=l*h*d+u*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(a-n)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(h-c)/p,this._x=.25*p,this._y=(n+a)/p,this._z=(s+l)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(s-l)/p,this._x=(n+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(a-n)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(De(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+n*l-s*c,this._y=n*h+a*c+s*o-i*l,this._z=s*h+a*l+i*c-n*o,this._w=a*h-i*o-n*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,n=this._y,s=this._z,a=this._w,o=a*e._w+i*e._x+n*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*n+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=a*d+this._w*u,this._x=i*d+this._x*u,this._y=n*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class r{constructor(e=0,t=0,i=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(eu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(eu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*n-o*i),h=2*(o*t-s*n),d=2*(s*i-a*t);return this.x=t+c*l+a*d-o*h,this.y=i+c*h+o*l-s*d,this.z=n+c*d+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=De(this.x,e.x,t.x),this.y=De(this.y,e.y,t.y),this.z=De(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=De(this.x,e,t),this.y=De(this.y,e,t),this.z=De(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(De(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=n*c-s*o,this.y=s*a-i*c,this.z=i*o-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Dl.copy(this).projectOnVector(e),this.sub(Dl)}reflect(e){return this.sub(Dl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(De(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Dl=new T,eu=new Dt,Ie=class r{constructor(e,t,i,n,s,a,o,c,l){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,c,l)}set(e,t,i,n,s,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],d=i[7],u=i[2],p=i[5],f=i[8],_=n[0],m=n[3],g=n[6],v=n[1],x=n[4],M=n[7],A=n[2],R=n[5],U=n[8];return s[0]=a*_+o*v+c*A,s[3]=a*m+o*x+c*R,s[6]=a*g+o*M+c*U,s[1]=l*_+h*v+d*A,s[4]=l*m+h*x+d*R,s[7]=l*g+h*M+d*U,s[2]=u*_+p*v+f*A,s[5]=u*m+p*x+f*R,s[8]=u*g+p*M+f*U,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*s*h+i*o*c+n*s*l-n*a*c}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,u=o*c-h*s,p=l*s-a*c,f=t*d+i*u+n*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/f;return e[0]=d*_,e[1]=(n*l-h*i)*_,e[2]=(o*i-n*a)*_,e[3]=u*_,e[4]=(h*t-n*c)*_,e[5]=(n*s-o*t)*_,e[6]=p*_,e[7]=(i*c-l*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-n*l,n*c,-n*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ul.makeScale(e,t)),this}rotate(e){return this.premultiply(Ul.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ul.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ul=new Ie;function ch(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function _s(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Ad(){let r=_s("canvas");return r.style.display="block",r}var tu={};function Tr(r){r in tu||(tu[r]=!0,console.warn(r))}function Rd(r,e,t){return new Promise(function(i,n){setTimeout(function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}},t)})}var iu=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nu=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gp(){let r={enabled:!0,workingColorSpace:Dn,spaces:{},convert:function(n,s,a){return this.enabled!==!1&&s!==a&&s&&a&&(this.spaces[s].transfer===Ke&&(n.r=Yi(n.r),n.g=Yi(n.g),n.b=Yi(n.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ke&&(n.r=Sr(n.r),n.g=Sr(n.g),n.b=Sr(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===""?fs:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,a){return n.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,s){return Tr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(n,s)},toWorkingColorSpace:function(n,s){return Tr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(n,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[Dn]:{primaries:e,whitePoint:i,transfer:fs,toXYZ:iu,fromXYZ:nu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:e,whitePoint:i,transfer:Ke,toXYZ:iu,fromXYZ:nu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}}),r}var Ve=Gp();function Yi(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function Sr(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}var sr,Ya=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{sr===void 0&&(sr=_s("canvas")),sr.width=e.width,sr.height=e.height;let n=sr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=sr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=_s("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=255*Yi(s[a]/255);return i.putImageData(n,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*Yi(t[i]/255)):t[i]=Yi(t[i]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},kp=0,Er=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=Ai(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(Nl(n[a].image)):s.push(Nl(n[a]))}else s=Nl(n);i.url=s}return t||(e.images[this.uuid]=i),i}};function Nl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ya.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Vp=0,Ol=new T,Ot=class r extends Pi{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,i=1001,n=1001,s=1006,a=1008,o=1023,c=1009,l=r.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=Ai(),this.name="",this.source=new Er(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ol).x}get height(){return this.source.getSize(Ol).y}get depth(){return this.source.getSize(Ol).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let n=this[t];n!==void 0?n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i:console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`)}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ec)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wa:e.x=e.x-Math.floor(e.x);break;case br:e.x=e.x<0?0:1;break;case Xa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Wa:e.y=e.y-Math.floor(e.y);break;case br:e.y=e.y<0?0:1;break;case Xa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ot.DEFAULT_IMAGE=null,Ot.DEFAULT_MAPPING=Ec,Ot.DEFAULT_ANISOTROPY=1;var Ye=class r{constructor(e=0,t=0,i=0,n=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s,c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],p=c[5],f=c[9],_=c[2],m=c[6],g=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(f+m)<.1&&Math.abs(l+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(l+1)/2,M=(p+1)/2,A=(g+1)/2,R=(h+u)/4,U=(d+_)/4,F=(f+m)/4;return x>M&&x>A?x<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(x),n=R/i,s=U/i):M>A?M<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(M),i=R/n,s=F/n):A<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(A),i=U/s,n=F/s),this.set(i,n,s,t),this}let v=Math.sqrt((m-f)*(m-f)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-f)/v,this.y=(d-_)/v,this.z=(u-h)/v,this.w=Math.acos((l+p+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=De(this.x,e.x,t.x),this.y=De(this.y,e.y,t.y),this.z=De(this.z,e.z,t.z),this.w=De(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=De(this.x,e,t),this.y=De(this.y,e,t),this.z=De(this.z,e,t),this.w=De(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(De(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Za=class extends Pi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ye(0,0,e,t),this.scissorTest=!1,this.viewport=new Ye(0,0,e,t);let n={width:e,height:t,depth:i.depth},s=new Ot(n);this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:Ci,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isArrayTexture=this.textures[n].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Er(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ii=class extends Za{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},vs=class extends Ot{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ja=class extends Ot{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ti=class{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,hi):hi.fromBufferAttribute(s,a),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),pa.copy(i.boundingBox)),pa.applyMatrix4(e.matrixWorld),this.union(pa)}let n=e.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qr),ma.subVectors(this.max,Qr),ar.subVectors(e.a,Qr),or.subVectors(e.b,Qr),lr.subVectors(e.c,Qr),sn.subVectors(or,ar),an.subVectors(lr,or),Rn.subVectors(ar,lr);let t=[0,-sn.z,sn.y,0,-an.z,an.y,0,-Rn.z,Rn.y,sn.z,0,-sn.x,an.z,0,-an.x,Rn.z,0,-Rn.x,-sn.y,sn.x,0,-an.y,an.x,0,-Rn.y,Rn.x,0];return!!Fl(t,ar,or,lr,ma)&&(t=[1,0,0,0,1,0,0,0,1],!!Fl(t,ar,or,lr,ma)&&(fa.crossVectors(sn,an),t=[fa.x,fa.y,fa.z],Fl(t,ar,or,lr,ma)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(hi).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Vi=[new T,new T,new T,new T,new T,new T,new T,new T],hi=new T,pa=new ti,ar=new T,or=new T,lr=new T,sn=new T,an=new T,Rn=new T,Qr=new T,ma=new T,fa=new T,Cn=new T;function Fl(r,e,t,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){Cn.fromArray(r,s);let o=n.x*Math.abs(Cn.x)+n.y*Math.abs(Cn.y)+n.z*Math.abs(Cn.z),c=e.dot(Cn),l=t.dot(Cn),h=i.dot(Cn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Wp=new ti,es=new T,Bl=new T,ii=class{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Wp.setFromPoints(e).getCenter(i);let n=0;for(let s=0,a=e.length;s<a;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;es.subVectors(e,this.center);let t=es.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=.5*(i-this.radius);this.center.addScaledVector(es,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(es.copy(e.center).add(Bl)),this.expandByPoint(es.copy(e.center).sub(Bl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Wi=new T,zl=new T,ga=new T,on=new T,Hl=new T,_a=new T,Gl=new T,Li=class{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wi.copy(this.origin).addScaledVector(this.direction,t),Wi.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){zl.copy(e).add(t).multiplyScalar(.5),ga.copy(t).sub(e).normalize(),on.copy(this.origin).sub(zl);let s=.5*e.distanceTo(t),a=-this.direction.dot(ga),o=on.dot(this.direction),c=-on.dot(ga),l=on.lengthSq(),h=Math.abs(1-a*a),d,u,p,f;if(h>0)if(d=a*c-o,u=a*o-c,f=s*h,d>=0)if(u>=-f)if(u<=f){let _=1/h;d*=_,u*=_,p=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u=-s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u<=-f?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+u*(u+2*c)+l):u<=f?(d=0,u=Math.min(Math.max(-s,-c),s),p=u*(u+2*c)+l):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+u*(u+2*c)+l);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(zl).addScaledVector(ga,u),p}intersectSphere(e,t){Wi.subVectors(e.center,this.origin);let i=Wi.dot(this.direction),n=Wi.dot(Wi)-i*i,s=e.radius*e.radius;if(n>s)return null;let a=Math.sqrt(s-n),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return!(e.radius<0)&&this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,n=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,n=(e.min.x-u.x)*l),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||s>n?null:((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),d>=0?(o=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),i>c||o>n?null:((o>i||i!=i)&&(i=o),(c<n||n!=n)&&(n=c),n<0?null:this.at(i>=0?i:n,t)))}intersectsBox(e){return this.intersectBox(e,Wi)!==null}intersectTriangle(e,t,i,n,s){Hl.subVectors(t,e),_a.subVectors(i,e),Gl.crossVectors(Hl,_a);let a,o=this.direction.dot(Gl);if(o>0){if(n)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}on.subVectors(this.origin,e);let c=a*this.direction.dot(_a.crossVectors(on,_a));if(c<0)return null;let l=a*this.direction.dot(Hl.cross(on));if(l<0||c+l>o)return null;let h=-a*on.dot(Gl);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ue=class r{constructor(e,t,i,n,s,a,o,c,l,h,d,u,p,f,_,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,c,l,h,d,u,p,f,_,m)}set(e,t,i,n,s,a,o,c,l,h,d,u,p,f,_,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=n,g[1]=s,g[5]=a,g[9]=o,g[13]=c,g[2]=l,g[6]=h,g[10]=d,g[14]=u,g[3]=p,g[7]=f,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,n=1/cr.setFromMatrixColumn(e,0).length(),s=1/cr.setFromMatrixColumn(e,1).length(),a=1/cr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(n),l=Math.sin(n),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let u=a*h,p=a*d,f=o*h,_=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=p+f*l,t[5]=u-_*l,t[9]=-o*c,t[2]=_-u*l,t[6]=f+p*l,t[10]=a*c}else if(e.order==="YXZ"){let u=c*h,p=c*d,f=l*h,_=l*d;t[0]=u+_*o,t[4]=f*o-p,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-f,t[6]=_+u*o,t[10]=a*c}else if(e.order==="ZXY"){let u=c*h,p=c*d,f=l*h,_=l*d;t[0]=u-_*o,t[4]=-a*d,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*h,t[9]=_-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let u=a*h,p=a*d,f=o*h,_=o*d;t[0]=c*h,t[4]=f*l-p,t[8]=u*l+_,t[1]=c*d,t[5]=_*l+u,t[9]=p*l-f,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let u=a*c,p=a*l,f=o*c,_=o*l;t[0]=c*h,t[4]=_-u*d,t[8]=f*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*d+f,t[10]=u-_*d}else if(e.order==="XZY"){let u=a*c,p=a*l,f=o*c,_=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+_,t[5]=a*h,t[9]=p*d-f,t[2]=f*d-p,t[6]=o*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xp,e,jp)}lookAt(e,t,i){let n=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),ln.crossVectors(i,Xt),ln.lengthSq()===0&&(Math.abs(i.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),ln.crossVectors(i,Xt)),ln.normalize(),va.crossVectors(Xt,ln),n[0]=ln.x,n[4]=va.x,n[8]=Xt.x,n[1]=ln.y,n[5]=va.y,n[9]=Xt.y,n[2]=ln.z,n[6]=va.z,n[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],d=i[5],u=i[9],p=i[13],f=i[2],_=i[6],m=i[10],g=i[14],v=i[3],x=i[7],M=i[11],A=i[15],R=n[0],U=n[4],F=n[8],D=n[12],k=n[1],V=n[5],O=n[9],Y=n[13],H=n[2],q=n[6],Z=n[10],ne=n[14],$=n[3],me=n[7],xe=n[11],ge=n[15];return s[0]=a*R+o*k+c*H+l*$,s[4]=a*U+o*V+c*q+l*me,s[8]=a*F+o*O+c*Z+l*xe,s[12]=a*D+o*Y+c*ne+l*ge,s[1]=h*R+d*k+u*H+p*$,s[5]=h*U+d*V+u*q+p*me,s[9]=h*F+d*O+u*Z+p*xe,s[13]=h*D+d*Y+u*ne+p*ge,s[2]=f*R+_*k+m*H+g*$,s[6]=f*U+_*V+m*q+g*me,s[10]=f*F+_*O+m*Z+g*xe,s[14]=f*D+_*Y+m*ne+g*ge,s[3]=v*R+x*k+M*H+A*$,s[7]=v*U+x*V+M*q+A*me,s[11]=v*F+x*O+M*Z+A*xe,s[15]=v*D+x*Y+M*ne+A*ge,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],p=e[14];return e[3]*(+s*c*d-n*l*d-s*o*u+i*l*u+n*o*p-i*c*p)+e[7]*(+t*c*p-t*l*u+s*a*u-n*a*p+n*l*h-s*c*h)+e[11]*(+t*l*d-t*o*p-s*a*d+i*a*p+s*o*h-i*l*h)+e[15]*(-n*o*h-t*c*d+t*o*u+n*a*d-i*a*u+i*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],p=e[11],f=e[12],_=e[13],m=e[14],g=e[15],v=d*m*l-_*u*l+_*c*p-o*m*p-d*c*g+o*u*g,x=f*u*l-h*m*l-f*c*p+a*m*p+h*c*g-a*u*g,M=h*_*l-f*d*l+f*o*p-a*_*p-h*o*g+a*d*g,A=f*d*c-h*_*c-f*o*u+a*_*u+h*o*m-a*d*m,R=t*v+i*x+n*M+s*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/R;return e[0]=v*U,e[1]=(_*u*s-d*m*s-_*n*p+i*m*p+d*n*g-i*u*g)*U,e[2]=(o*m*s-_*c*s+_*n*l-i*m*l-o*n*g+i*c*g)*U,e[3]=(d*c*s-o*u*s-d*n*l+i*u*l+o*n*p-i*c*p)*U,e[4]=x*U,e[5]=(h*m*s-f*u*s+f*n*p-t*m*p-h*n*g+t*u*g)*U,e[6]=(f*c*s-a*m*s-f*n*l+t*m*l+a*n*g-t*c*g)*U,e[7]=(a*u*s-h*c*s+h*n*l-t*u*l-a*n*p+t*c*p)*U,e[8]=M*U,e[9]=(f*d*s-h*_*s-f*i*p+t*_*p+h*i*g-t*d*g)*U,e[10]=(a*_*s-f*o*s+f*i*l-t*_*l-a*i*g+t*o*g)*U,e[11]=(h*o*s-a*d*s-h*i*l+t*d*l+a*i*p-t*o*p)*U,e[12]=A*U,e[13]=(h*_*n-f*d*n+f*i*u-t*_*u-h*i*m+t*d*m)*U,e[14]=(f*o*n-a*_*n-f*i*c+t*_*c+a*i*m-t*o*m)*U,e[15]=(a*d*n-h*o*n+h*i*c-t*d*c-a*i*u+t*o*u)*U,this}scale(e){let t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+i,l*o-n*c,l*c+n*o,0,l*o+n*c,h*o+i,h*c-n*a,0,l*c-n*o,h*c+n*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,a){return this.set(1,i,s,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,d=o+o,u=s*l,p=s*h,f=s*d,_=a*h,m=a*d,g=o*d,v=c*l,x=c*h,M=c*d,A=i.x,R=i.y,U=i.z;return n[0]=(1-(_+g))*A,n[1]=(p+M)*A,n[2]=(f-x)*A,n[3]=0,n[4]=(p-M)*R,n[5]=(1-(u+g))*R,n[6]=(m+v)*R,n[7]=0,n[8]=(f+x)*U,n[9]=(m-v)*U,n[10]=(1-(u+_))*U,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements,s=cr.set(n[0],n[1],n[2]).length(),a=cr.set(n[4],n[5],n[6]).length(),o=cr.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],ui.copy(this);let c=1/s,l=1/a,h=1/o;return ui.elements[0]*=c,ui.elements[1]*=c,ui.elements[2]*=c,ui.elements[4]*=l,ui.elements[5]*=l,ui.elements[6]*=l,ui.elements[8]*=h,ui.elements[9]*=h,ui.elements[10]*=h,t.setFromRotationMatrix(ui),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,n,s,a,o=2e3,c=!1){let l=this.elements,h=2*s/(t-e),d=2*s/(i-n),u=(t+e)/(t-e),p=(i+n)/(i-n),f,_;if(c)f=s/(a-s),_=a*s/(a-s);else if(o===Zi)f=-(a+s)/(a-s),_=-2*a*s/(a-s);else{if(o!==gs)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);f=-a/(a-s),_=-a*s/(a-s)}return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,s,a,o=2e3,c=!1){let l=this.elements,h=2/(t-e),d=2/(i-n),u=-(t+e)/(t-e),p=-(i+n)/(i-n),f,_;if(c)f=1/(a-s),_=a/(a-s);else if(o===Zi)f=-2/(a-s),_=-(a+s)/(a-s);else{if(o!==gs)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=-1/(a-s),_=-s/(a-s)}return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},cr=new T,ui=new Ue,Xp=new T(0,0,0),jp=new T(1,1,1),ln=new T,va=new T,Xt=new T,ru=new Ue,su=new Dt,ni=class r{constructor(e=0,t=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,s=n[0],a=n[4],o=n[8],c=n[1],l=n[5],h=n[9],d=n[2],u=n[6],p=n[10];switch(t){case"XYZ":this._y=Math.asin(De(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-De(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(De(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-De(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(De(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-De(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ru.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ru,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return su.setFromEuler(this),this.setFromQuaternion(su,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ni.DEFAULT_ORDER="XYZ";var wr=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},qp=0,au=new T,hr=new Dt,Xi=new Ue,xa=new T,ts=new T,Yp=new T,Zp=new Dt,ou=new T(1,0,0),lu=new T(0,1,0),cu=new T(0,0,1),hu={type:"added"},Jp={type:"removed"},ur={type:"childadded",child:null},kl={type:"childremoved",child:null},rt=class r extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new T,t=new ni,i=new Dt,n=new T(1,1,1);t._onChange(function(){i.setFromEuler(t,!1)}),i._onChange(function(){t.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ue},normalMatrix:{value:new Ie}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.multiply(hr),this}rotateOnWorldAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.premultiply(hr),this}rotateX(e){return this.rotateOnAxis(ou,e)}rotateY(e){return this.rotateOnAxis(lu,e)}rotateZ(e){return this.rotateOnAxis(cu,e)}translateOnAxis(e,t){return au.copy(e).applyQuaternion(this.quaternion),this.position.add(au.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ou,e)}translateY(e){return this.translateOnAxis(lu,e)}translateZ(e){return this.translateOnAxis(cu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?xa.copy(e):xa.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(ts,xa,this.up):Xi.lookAt(xa,ts,this.up),this.quaternion.setFromRotationMatrix(Xi),n&&(Xi.extractRotation(n.matrixWorld),hr.setFromRotationMatrix(Xi),this.quaternion.premultiply(hr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hu),ur.child=e,this.dispatchEvent(ur),ur.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jp),kl.child=e,this.dispatchEvent(kl),kl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hu),ur.child=e,this.dispatchEvent(ur),ur.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,e,Yp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,Zp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];n.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),f.length>0&&(i.nodes=f)}return i.object=n,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}};rt.DEFAULT_UP=new T(0,1,0),rt.DEFAULT_MATRIX_AUTO_UPDATE=!0,rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var di=new T,ji=new T,Vl=new T,qi=new T,dr=new T,pr=new T,uu=new T,Wl=new T,Xl=new T,jl=new T,ql=new Ye,Yl=new Ye,Zl=new Ye,Ei=class r{constructor(e=new T,t=new T,i=new T){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),di.subVectors(e,t),n.cross(di);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){di.subVectors(n,t),ji.subVectors(i,t),Vl.subVectors(e,t);let a=di.dot(di),o=di.dot(ji),c=di.dot(Vl),l=ji.dot(ji),h=ji.dot(Vl),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;let u=1/d,p=(l*c-o*h)*u,f=(a*h-o*c)*u;return s.set(1-p-f,f,p)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,qi)!==null&&qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getInterpolation(e,t,i,n,s,a,o,c){return this.getBarycoord(e,t,i,n,qi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,qi.x),c.addScaledVector(a,qi.y),c.addScaledVector(o,qi.z),c)}static getInterpolatedAttribute(e,t,i,n,s,a){return ql.setScalar(0),Yl.setScalar(0),Zl.setScalar(0),ql.fromBufferAttribute(e,t),Yl.fromBufferAttribute(e,i),Zl.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(ql,s.x),a.addScaledVector(Yl,s.y),a.addScaledVector(Zl,s.z),a}static isFrontFacing(e,t,i,n){return di.subVectors(i,t),ji.subVectors(e,t),di.cross(ji).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),.5*di.cross(ji).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return r.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,s=this.c,a,o;dr.subVectors(n,i),pr.subVectors(s,i),Wl.subVectors(e,i);let c=dr.dot(Wl),l=pr.dot(Wl);if(c<=0&&l<=0)return t.copy(i);Xl.subVectors(e,n);let h=dr.dot(Xl),d=pr.dot(Xl);if(h>=0&&d<=h)return t.copy(n);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(dr,a);jl.subVectors(e,s);let p=dr.dot(jl),f=pr.dot(jl);if(f>=0&&p<=f)return t.copy(s);let _=p*l-c*f;if(_<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(i).addScaledVector(pr,o);let m=h*f-p*d;if(m<=0&&d-h>=0&&p-f>=0)return uu.subVectors(s,n),o=(d-h)/(d-h+(p-f)),t.copy(n).addScaledVector(uu,o);let g=1/(m+_+u);return a=_*g,o=u*g,t.copy(i).addScaledVector(dr,a).addScaledVector(pr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Cd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cn={h:0,s:0,l:0},ya={h:0,s:0,l:0};function Jl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}var Se=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,Ve.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=Ve.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ve.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=Ve.workingColorSpace){if(e=dc(e,1),t=De(t,0,1),i=De(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Jl(a,s,e+1/3),this.g=Jl(a,s,e),this.b=Jl(a,s,e-1/3)}return Ve.colorSpaceToWorking(this,n),this}setStyle(e,t=qt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){let i=Cd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}copyLinearToSRGB(e){return this.r=Sr(e.r),this.g=Sr(e.g),this.b=Sr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return Ve.workingToColorSpace(Lt.copy(this),e),65536*Math.round(De(255*Lt.r,0,255))+256*Math.round(De(255*Lt.g,0,255))+Math.round(De(255*Lt.b,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ve.workingColorSpace){Ve.workingToColorSpace(Lt.copy(this),t);let i=Lt.r,n=Lt.g,s=Lt.b,a=Math.max(i,n,s),o=Math.min(i,n,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case i:c=(n-s)/d+(n<s?6:0);break;case n:c=(s-i)/d+2;break;case s:c=(i-n)/d+4}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ve.workingColorSpace){return Ve.workingToColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=qt){Ve.workingToColorSpace(Lt.copy(this),e);let t=Lt.r,i=Lt.g,n=Lt.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*n)})`}offsetHSL(e,t,i){return this.getHSL(cn),this.setHSL(cn.h+e,cn.s+t,cn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(cn),e.getHSL(ya);let i=us(cn.h,ya.h,t),n=us(cn.s,ya.s,t),s=us(cn.l,ya.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Lt=new Se;Se.NAMES=Cd;var Kp=0,mi=class extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=Ai(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ln,this.stencilZFail=Ln,this.stencilZPass=Ln,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];n!==void 0?n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function n(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==204&&(i.blendSrc=this.blendSrc),this.blendDst!==205&&(i.blendDst=this.blendDst),this.blendEquation!==100&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ln&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ln&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ln&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let s=n(e.textures),a=n(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Bt=class extends mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Fg=$p();function $p(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),i=new Uint32Array(512),n=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(i[c]=0,i[256|c]=32768,n[c]=24,n[256|c]=24):l<-14?(i[c]=1024>>-l-14,i[256|c]=1024>>-l-14|32768,n[c]=-l-1,n[256|c]=-l-1):l<=15?(i[c]=l+15<<10,i[256|c]=l+15<<10|32768,n[c]=13,n[256|c]=13):l<128?(i[c]=31744,i[256|c]=64512,n[c]=24,n[256|c]=24):(i[c]=31744,i[256|c]=64512,n[c]=13,n[256|c]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(8388608&l);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,s[c]=l|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:s,exponentTable:a,offsetTable:o}}var mt=new T,Ma=new J,Qp=0,Ft=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=qa,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ma.fromBufferAttribute(this,t),Ma.applyMatrix3(e),this.setXY(t,Ma.x,Ma.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=pi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Je(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array),n=Je(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array),n=Je(n,this.array),s=Je(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qa&&(e.usage=this.usage),e}};var xs=class extends Ft{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ys=class extends Ft{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ye=class extends Ft{constructor(e,t,i){super(new Float32Array(e),t,i)}},em=0,Qt=new Ue,Kl=new rt,mr=new T,jt=new ti,is=new ti,St=new T,et=class r extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ch(e)?ys:xs)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ie().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,i){return Qt.makeTranslation(e,t,i),this.applyMatrix4(Qt),this}scale(e,t,i){return Qt.makeScale(e,t,i),this.applyMatrix4(Qt),this}lookAt(e){return Kl.lookAt(e),Kl.updateMatrix(),this.applyMatrix4(Kl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mr).negate(),this.translate(mr.x,mr.y,mr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,s=e.length;n<s;n++){let a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ye(i,3))}else{let i=Math.min(e.length,t.count);for(let n=0;n<i;n++){let s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let s=t[i];jt.setFromBufferAttribute(s),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new T,1/0);if(e){let i=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];is.setFromBufferAttribute(o),this.morphTargetsRelative?(St.addVectors(jt.min,is.min),jt.expandByPoint(St),St.addVectors(jt.max,is.max),jt.expandByPoint(St)):(jt.expandByPoint(is.min),jt.expandByPoint(is.max))}jt.getCenter(i);let n=0;for(let s=0,a=e.count;s<a;s++)St.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(St));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)St.fromBufferAttribute(o,l),c&&(mr.fromBufferAttribute(e,l),St.add(mr)),n=Math.max(n,i.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=t.position,n=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ft(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let F=0;F<i.count;F++)o[F]=new T,c[F]=new T;let l=new T,h=new T,d=new T,u=new J,p=new J,f=new J,_=new T,m=new T;function g(F,D,k){l.fromBufferAttribute(i,F),h.fromBufferAttribute(i,D),d.fromBufferAttribute(i,k),u.fromBufferAttribute(s,F),p.fromBufferAttribute(s,D),f.fromBufferAttribute(s,k),h.sub(l),d.sub(l),p.sub(u),f.sub(u);let V=1/(p.x*f.y-f.x*p.y);isFinite(V)&&(_.copy(h).multiplyScalar(f.y).addScaledVector(d,-p.y).multiplyScalar(V),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(V),o[F].add(_),o[D].add(_),o[k].add(_),c[F].add(m),c[D].add(m),c[k].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let F=0,D=v.length;F<D;++F){let k=v[F],V=k.start;for(let O=V,Y=V+k.count;O<Y;O+=3)g(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let x=new T,M=new T,A=new T,R=new T;function U(F){A.fromBufferAttribute(n,F),R.copy(A);let D=o[F];x.copy(D),x.sub(A.multiplyScalar(A.dot(D))).normalize(),M.crossVectors(R,D);let k=M.dot(c[F])<0?-1:1;a.setXYZW(F,x.x,x.y,x.z,k)}for(let F=0,D=v.length;F<D;++F){let k=v[F],V=k.start;for(let O=V,Y=V+k.count;O<Y;O+=3)U(e.getX(O+0)),U(e.getX(O+1)),U(e.getX(O+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ft(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);let n=new T,s=new T,a=new T,o=new T,c=new T,l=new T,h=new T,d=new T;if(e)for(let u=0,p=e.count;u<p;u+=3){let f=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);n.fromBufferAttribute(t,f),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,s),d.subVectors(n,s),h.cross(d),o.fromBufferAttribute(i,f),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(f,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,p=t.count;u<p;u+=3)n.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),d.subVectors(n,s),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h),p=0,f=0;for(let _=0,m=c.length;_<m;_++){p=o.isInterleavedBufferAttribute?c[_]*o.data.stride+o.offset:c[_]*h;for(let g=0;g<h;g++)u[f++]=l[p++]}return new Ft(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,i=this.index.array,n=this.attributes;for(let o in n){let c=e(n[o],i);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,d=l.length;h<d;h++){let u=e(l[h],i);c.push(u)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let n={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let p=l[d];h.push(p.toJSON(e.data))}h.length>0&&(n[c]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let n=e.attributes;for(let l in n){let h=n[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],d=s[l];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},du=new Ue,Pn=new Li,Sa=new ii,pu=new T,ba=new T,Ta=new T,Ea=new T,$l=new T,wa=new T,mu=new T,Aa=new T,tt=class extends rt{constructor(e=new et,t=new Bt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(s&&o){wa.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],d=s[c];h!==0&&($l.fromBufferAttribute(d,e),a?wa.addScaledVector($l,h):wa.addScaledVector($l.sub(t),h))}t.add(wa)}return t}raycast(e,t){let i=this.geometry,n=this.material,s=this.matrixWorld;if(n!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),Sa.copy(i.boundingSphere),Sa.applyMatrix4(s),Pn.copy(e.ray).recast(e.near),Sa.containsPoint(Pn.origin)===!1&&(Pn.intersectSphere(Sa,pu)===null||Pn.origin.distanceToSquared(pu)>(e.far-e.near)**2))return;du.copy(s).invert(),Pn.copy(e.ray).applyMatrix4(du),i.boundingBox!==null&&Pn.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,Pn)}}_computeIntersections(e,t,i){let n,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,_=u.length;f<_;f++){let m=u[f],g=a[m.materialIndex];for(let v=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));v<x;v+=3)n=Ra(this,g,e,i,l,h,d,o.getX(v),o.getX(v+1),o.getX(v+2)),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=m.materialIndex,t.push(n))}else for(let f=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);f<_;f+=3)n=Ra(this,a,e,i,l,h,d,o.getX(f),o.getX(f+1),o.getX(f+2)),n&&(n.faceIndex=Math.floor(f/3),t.push(n));else if(c!==void 0)if(Array.isArray(a))for(let f=0,_=u.length;f<_;f++){let m=u[f],g=a[m.materialIndex];for(let v=Math.max(m.start,p.start),x=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));v<x;v+=3)n=Ra(this,g,e,i,l,h,d,v,v+1,v+2),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=m.materialIndex,t.push(n))}else for(let f=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);f<_;f+=3)n=Ra(this,a,e,i,l,h,d,f,f+1,f+2),n&&(n.faceIndex=Math.floor(f/3),t.push(n))}};function Ra(r,e,t,i,n,s,a,o,c,l){r.getVertexPosition(o,ba),r.getVertexPosition(c,Ta),r.getVertexPosition(l,Ea);let h=(function(d,u,p,f,_,m,g,v){let x;if(x=u.side===1?f.intersectTriangle(g,m,_,!0,v):f.intersectTriangle(_,m,g,u.side===0,v),x===null)return null;Aa.copy(v),Aa.applyMatrix4(d.matrixWorld);let M=p.ray.origin.distanceTo(Aa);return M<p.near||M>p.far?null:{distance:M,point:Aa.clone(),object:d}})(r,e,t,i,ba,Ta,Ea,mu);if(h){let d=new T;Ei.getBarycoord(mu,ba,Ta,Ea,d),n&&(h.uv=Ei.getInterpolatedAttribute(n,o,c,l,d,new J)),s&&(h.uv1=Ei.getInterpolatedAttribute(s,o,c,l,d,new J)),a&&(h.normal=Ei.getInterpolatedAttribute(a,o,c,l,d,new T),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new T,materialIndex:0};Ei.getNormal(ba,Ta,Ea,u.normal),h.face=u,h.barycoord=d}return h}var fi=class r extends et{constructor(e=1,t=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],d=[],u=0,p=0;function f(_,m,g,v,x,M,A,R,U,F,D){let k=M/U,V=A/F,O=M/2,Y=A/2,H=R/2,q=U+1,Z=F+1,ne=0,$=0,me=new T;for(let xe=0;xe<Z;xe++){let ge=xe*V-Y;for(let Ee=0;Ee<q;Ee++){let ie=Ee*k-O;me[_]=ie*v,me[m]=ge*x,me[g]=H,l.push(me.x,me.y,me.z),me[_]=0,me[m]=0,me[g]=R>0?1:-1,h.push(me.x,me.y,me.z),d.push(Ee/U),d.push(1-xe/F),ne+=1}}for(let xe=0;xe<F;xe++)for(let ge=0;ge<U;ge++){let Ee=u+ge+q*xe,ie=u+ge+q*(xe+1),se=u+(ge+1)+q*(xe+1),re=u+(ge+1)+q*xe;c.push(Ee,ie,re),c.push(ie,se,re),$+=6}o.addGroup(p,$,D),p+=$,u+=ne}f("z","y","x",-1,-1,i,t,e,a,s,0),f("z","y","x",1,-1,i,t,-e,a,s,1),f("x","z","y",1,1,e,i,t,n,a,2),f("x","z","y",1,-1,e,i,-t,n,a,3),f("x","y","z",1,-1,e,t,i,n,s,4),f("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(c),this.setAttribute("position",new ye(l,3)),this.setAttribute("normal",new ye(h,3)),this.setAttribute("uv",new ye(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function jn(r){let e={};for(let t in r){e[t]={};for(let i in r[t]){let n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Ut(r){let e={};for(let t=0;t<r.length;t++){let i=jn(r[t]);for(let n in i)e[n]=i[n]}return e}function hh(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ve.workingColorSpace}var Pd={clone:jn,merge:Ut},zt=class extends mi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=jn(e.uniforms),this.uniformsGroups=(function(t){let i=[];for(let n=0;n<t.length;n++)i.push(t[n].clone());return i})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let s=this.uniforms[n].value;s&&s.isTexture?t.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[n]={type:"m4",value:s.toArray()}:t.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ar=class extends rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=Zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},hn=new T,fu=new J,gu=new J,bt=class extends Ar{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Un*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Mr*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Un*Math.atan(Math.tan(.5*Mr*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){hn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hn.x,hn.y).multiplyScalar(-e/hn.z),hn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hn.x,hn.y).multiplyScalar(-e/hn.z)}getViewSize(e,t){return this.getViewBounds(e,fu,gu),t.subVectors(gu,fu)}setViewOffset(e,t,i,n,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Mr*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*n/c,t-=a.offsetY*i/l,n*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},fr=-90,Ka=class extends rt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new bt(fr,1,e,t);n.layers=this.layers,this.add(n);let s=new bt(fr,1,e,t);s.layers=this.layers,this.add(s);let a=new bt(fr,1,e,t);a.layers=this.layers,this.add(a);let o=new bt(fr,1,e,t);o.layers=this.layers,this.add(o);let c=new bt(fr,1,e,t);c.layers=this.layers,this.add(c);let l=new bt(fr,1,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===Zi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else{if(e!==gs)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1)}for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,s),e.setRenderTarget(i,1,n),e.render(t,a),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,c),e.setRenderTarget(i,4,n),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},Ms=class extends Ot{constructor(e=[],t=301,i,n,s,a,o,c,l,h){super(e,t,i,n,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},$a=class extends Ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Ms(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new fi(5,5,5),s=new zt({name:"CubemapFromEquirect",uniforms:jn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;let a=new tt(n,s),o=t.minFilter;return t.minFilter===Vn&&(t.minFilter=Ci),new Ka(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(s)}},Tt=class extends rt{constructor(){super(),this.isGroup=!0,this.type="Group"}},tm={type:"move"},Rr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,i),g=this._getHandJoint(l,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,f=.005;l.inputState.pinching&&u>p+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=p-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tm)))}return o!==null&&(o.visible=n!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Tt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var Ss=class r{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Se(e),this.near=t,this.far=i}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Nn=class extends rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Qa=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=qa,this.updateRanges=[],this.version=0,this.uuid=Ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,s=this.stride;n<s;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Nt=new T,bs=class r{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=pi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Je(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=pi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=pi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=pi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=pi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array),n=Je(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array),n=Je(n,this.array),s=Je(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return new Ft(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Cr=class extends mi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},gr,ns=new T,_r=new T,vr=new T,xr=new J,rs=new J,Id=new Ue,Ca=new T,ss=new T,Pa=new T,_u=new J,Ql=new J,vu=new J,Ts=class extends rt{constructor(e=new Cr){if(super(),this.isSprite=!0,this.type="Sprite",gr===void 0){gr=new et;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Qa(t,5);gr.setIndex([0,1,2,0,2,3]),gr.setAttribute("position",new bs(i,3,0,!1)),gr.setAttribute("uv",new bs(i,2,3,!1))}this.geometry=gr,this.material=e,this.center=new J(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_r.setFromMatrixScale(this.matrixWorld),Id.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),vr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_r.multiplyScalar(-vr.z);let i=this.material.rotation,n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));let a=this.center;Ia(Ca.set(-.5,-.5,0),vr,a,_r,n,s),Ia(ss.set(.5,-.5,0),vr,a,_r,n,s),Ia(Pa.set(.5,.5,0),vr,a,_r,n,s),_u.set(0,0),Ql.set(1,0),vu.set(1,1);let o=e.ray.intersectTriangle(Ca,ss,Pa,!1,ns);if(o===null&&(Ia(ss.set(-.5,.5,0),vr,a,_r,n,s),Ql.set(0,1),o=e.ray.intersectTriangle(Ca,Pa,ss,!1,ns),o===null))return;let c=e.ray.origin.distanceTo(ns);c<e.near||c>e.far||t.push({distance:c,point:ns.clone(),uv:Ei.getInterpolation(ns,Ca,ss,Pa,_u,Ql,vu,new J),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ia(r,e,t,i,n,s){xr.subVectors(r,t).addScalar(.5).multiply(i),n!==void 0?(rs.x=s*xr.x-n*xr.y,rs.y=n*xr.x+s*xr.y):rs.copy(xr),r.copy(e),r.x+=rs.x,r.y+=rs.y,r.applyMatrix4(Id)}var Bg=new T,zg=new T;var Hg=new T,Gg=new Ye,kg=new Ye,Vg=new T,Wg=new Ue,Xg=new T,jg=new ii,qg=new Ue,Yg=new Li;var eo=class extends Ot{constructor(e=null,t=1,i=1,n,s,a,o,c,l=1003,h=1003,d,u){super(null,a,o,c,l,h,n,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Zg=new Ue,Jg=new Ue;var Es=class extends Ft{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},yr=new Ue,xu=new Ue,La=[],yu=new ti,im=new Ue,as=new tt,os=new ii,Ji=class extends tt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Es(new Float32Array(16*i),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,im)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ti),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,yr),yu.copy(e.boundingBox).applyMatrix4(yr),this.boundingBox.union(yu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ii),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,yr),os.copy(e.boundingSphere).applyMatrix4(yr),this.boundingSphere.union(os)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}getMorphAt(e,t){let i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,s=e*(i.length+1)+1;for(let a=0;a<i.length;a++)i[a]=n[s+a]}raycast(e,t){let i=this.matrixWorld,n=this.count;if(as.geometry=this.geometry,as.material=this.material,as.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),os.copy(this.boundingSphere),os.applyMatrix4(i),e.ray.intersectsSphere(os)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,yr),xu.multiplyMatrices(i,yr),as.matrixWorld=xu,as.raycast(e,La);for(let a=0,o=La.length;a<o;a++){let c=La[a];c.instanceId=s,c.object=this,t.push(c)}La.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Es(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}setMorphAt(e,t){let i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new eo(new Float32Array(n*this.count),n,this.count,Zo,_i));let s=this.morphTexture.source.data.data,a=0;for(let l=0;l<i.length;l++)a+=i[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=n*e;s[c]=o,s.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ec=new T,nm=new T,rm=new Ie,ei=class{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=ec.subVectors(i,t).cross(nm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(ec),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||rm.getNormalMatrix(e),n=this.coplanarPoint(ec).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},In=new ii,sm=new J(.5,.5),Da=new T,pn=class{constructor(e=new ei,t=new ei,i=new ei,n=new ei,s=new ei,a=new ei){this.planes=[e,t,i,n,s,a]}set(e,t,i,n,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3,i=!1){let n=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],d=s[5],u=s[6],p=s[7],f=s[8],_=s[9],m=s[10],g=s[11],v=s[12],x=s[13],M=s[14],A=s[15];if(n[0].setComponents(l-a,p-h,g-f,A-v).normalize(),n[1].setComponents(l+a,p+h,g+f,A+v).normalize(),n[2].setComponents(l+o,p+d,g+_,A+x).normalize(),n[3].setComponents(l-o,p-d,g-_,A-x).normalize(),i)n[4].setComponents(c,u,m,M).normalize(),n[5].setComponents(l-c,p-u,g-m,A-M).normalize();else if(n[4].setComponents(l-c,p-u,g-m,A-M).normalize(),t===Zi)n[5].setComponents(l+c,p+u,g+m,A+M).normalize();else{if(t!==gs)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(c,u,m,M).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),In.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),In.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(In)}intersectsSprite(e){In.center.set(0,0,0);let t=sm.distanceTo(e.center);return In.radius=.7071067811865476+t,In.applyMatrix4(e.matrixWorld),this.intersectsSphere(In)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(Da.x=n.normal.x>0?e.max.x:e.min.x,Da.y=n.normal.y>0?e.max.y:e.min.y,Da.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Da)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},bi=new Ue,Ti=new pn,to=class r{constructor(){this.coordinateSystem=Zi}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let n=t.cameras[i];if(bi.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),Ti.setFromProjectionMatrix(bi,n.coordinateSystem,n.reversedDepth),Ti.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let n=t.cameras[i];if(bi.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),Ti.setFromProjectionMatrix(bi,n.coordinateSystem,n.reversedDepth),Ti.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let n=t.cameras[i];if(bi.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),Ti.setFromProjectionMatrix(bi,n.coordinateSystem,n.reversedDepth),Ti.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let n=t.cameras[i];if(bi.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),Ti.setFromProjectionMatrix(bi,n.coordinateSystem,n.reversedDepth),Ti.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let n=t.cameras[i];if(bi.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),Ti.setFromProjectionMatrix(bi,n.coordinateSystem,n.reversedDepth),Ti.containsPoint(e))return!0}return!1}clone(){return new r}};var pc=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,n){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=i,o.index=n}reset(){this.list.length=0,this.index=0}},Kg=new Ue,$g=new Se(1,1,1),Qg=new pn,e0=new to,t0=new ti,i0=new ii,n0=new T,r0=new T,s0=new T,a0=new pc,o0=new tt;var ws=class extends mi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},io=new T,no=new T,Mu=new Ue,ls=new Li,Ua=new ii,tc=new T,Su=new T,ro=class extends rt{constructor(e=new et,t=new ws){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)io.fromBufferAttribute(t,n-1),no.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=io.distanceTo(no);e.setAttribute("lineDistance",new ye(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ua.copy(i.boundingSphere),Ua.applyMatrix4(n),Ua.radius+=s,e.ray.intersectsSphere(Ua)===!1)return;Mu.copy(n).invert(),ls.copy(e.ray).applyMatrix4(Mu);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let u=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let f=u,_=p-1;f<_;f+=l){let m=h.getX(f),g=h.getX(f+1),v=Na(this,e,ls,c,m,g,f);v&&t.push(v)}if(this.isLineLoop){let f=h.getX(p-1),_=h.getX(u),m=Na(this,e,ls,c,f,_,p-1);m&&t.push(m)}}else{let u=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let f=u,_=p-1;f<_;f+=l){let m=Na(this,e,ls,c,f,f+1,f);m&&t.push(m)}if(this.isLineLoop){let f=Na(this,e,ls,c,p-1,u,p-1);f&&t.push(f)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}};function Na(r,e,t,i,n,s,a){let o=r.geometry.attributes.position;if(io.fromBufferAttribute(o,n),no.fromBufferAttribute(o,s),t.distanceSqToSegment(io,no,tc,Su)>i)return;tc.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(tc);return c<e.near||c>e.far?void 0:{distance:c,point:Su.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}var bu=new T,Tu=new T,so=class extends ro{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let n=0,s=t.count;n<s;n+=2)bu.fromBufferAttribute(t,n),Tu.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+bu.distanceTo(Tu);e.setAttribute("lineDistance",new ye(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var l0=new Ue,c0=new Li,h0=new ii,u0=new T;var Pr=class extends Ot{constructor(e,t,i,n,s,a,o,c,l){super(e,t,i,n,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},As=class extends Ot{constructor(e,t,i=1014,n,s,a,o=1003,c=1003,l,h=1026,d=1){if(h!==Ks&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:d},n,s,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Er(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Rs=class extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ao=class r extends et{constructor(e=1,t=1,i=4,n=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:n,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),s=Math.max(1,Math.floor(s));let a=[],o=[],c=[],l=[],h=t/2,d=Math.PI/2*e,u=t,p=2*d+u,f=2*i+s,_=n+1,m=new T,g=new T;for(let v=0;v<=f;v++){let x=0,M=0,A=0,R=0;if(v<=i){let D=v/i,k=D*Math.PI/2;M=-h-e*Math.cos(k),A=e*Math.sin(k),R=-e*Math.cos(k),x=D*d}else if(v<=i+s){let D=(v-i)/s;M=D*t-h,A=e,R=0,x=d+D*u}else{let D=(v-i-s)/i,k=D*Math.PI/2;M=h+e*Math.sin(k),A=e*Math.cos(k),R=e*Math.sin(k),x=d+u+D*d}let U=Math.max(0,Math.min(1,x/p)),F=0;v===0?F=.5/n:v===f&&(F=-.5/n);for(let D=0;D<=n;D++){let k=D/n,V=k*Math.PI*2,O=Math.sin(V),Y=Math.cos(V);g.x=-A*Y,g.y=M,g.z=A*O,o.push(g.x,g.y,g.z),m.set(-A*Y,R,A*O),m.normalize(),c.push(m.x,m.y,m.z),l.push(k+F,U)}if(v>0){let D=(v-1)*_;for(let k=0;k<n;k++){let V=D+k,O=D+k+1,Y=v*_+k,H=v*_+k+1;a.push(V,O,Y),a.push(O,H,Y)}}}this.setIndex(a),this.setAttribute("position",new ye(o,3)),this.setAttribute("normal",new ye(c,3)),this.setAttribute("uv",new ye(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},oo=class r extends et{constructor(e=1,t=32,i=0,n=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let s=[],a=[],o=[],c=[],l=new T,h=new J;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let p=i+d/t*n;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new ye(a,3)),this.setAttribute("normal",new ye(o,3)),this.setAttribute("uv",new ye(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ki=class r extends et{constructor(e=1,t=1,i=1,n=32,s=1,a=!1,o=0,c=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;n=Math.floor(n),s=Math.floor(s);let h=[],d=[],u=[],p=[],f=0,_=[],m=i/2,g=0;function v(x){let M=f,A=new J,R=new T,U=0,F=x===!0?e:t,D=x===!0?1:-1;for(let V=1;V<=n;V++)d.push(0,m*D,0),u.push(0,D,0),p.push(.5,.5),f++;let k=f;for(let V=0;V<=n;V++){let O=V/n*c+o,Y=Math.cos(O),H=Math.sin(O);R.x=F*H,R.y=m*D,R.z=F*Y,d.push(R.x,R.y,R.z),u.push(0,D,0),A.x=.5*Y+.5,A.y=.5*H*D+.5,p.push(A.x,A.y),f++}for(let V=0;V<n;V++){let O=M+V,Y=k+V;x===!0?h.push(Y,Y+1,O):h.push(Y+1,Y,O),U+=3}l.addGroup(g,U,x===!0?1:2),g+=U}(function(){let x=new T,M=new T,A=0,R=(t-e)/i;for(let U=0;U<=s;U++){let F=[],D=U/s,k=D*(t-e)+e;for(let V=0;V<=n;V++){let O=V/n,Y=O*c+o,H=Math.sin(Y),q=Math.cos(Y);M.x=k*H,M.y=-D*i+m,M.z=k*q,d.push(M.x,M.y,M.z),x.set(H,R,q).normalize(),u.push(x.x,x.y,x.z),p.push(O,1-D),F.push(f++)}_.push(F)}for(let U=0;U<n;U++)for(let F=0;F<s;F++){let D=_[F][U],k=_[F+1][U],V=_[F+1][U+1],O=_[F][U+1];(e>0||F!==0)&&(h.push(D,k,O),A+=3),(t>0||F!==s-1)&&(h.push(k,V,O),A+=3)}l.addGroup(g,A,0),g+=A})(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ye(d,3)),this.setAttribute("normal",new ye(u,3)),this.setAttribute("uv",new ye(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ir=class r extends Ki{constructor(e=1,t=1,i=32,n=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},mn=class r extends et{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let s=[],a=[];function o(p,f,_,m){let g=m+1,v=[];for(let x=0;x<=g;x++){v[x]=[];let M=p.clone().lerp(_,x/g),A=f.clone().lerp(_,x/g),R=g-x;for(let U=0;U<=R;U++)v[x][U]=U===0&&x===g?M:M.clone().lerp(A,U/R)}for(let x=0;x<g;x++)for(let M=0;M<2*(g-x)-1;M++){let A=Math.floor(M/2);M%2==0?(c(v[x][A+1]),c(v[x+1][A]),c(v[x][A])):(c(v[x][A+1]),c(v[x+1][A+1]),c(v[x+1][A]))}}function c(p){s.push(p.x,p.y,p.z)}function l(p,f){let _=3*p;f.x=e[_+0],f.y=e[_+1],f.z=e[_+2]}function h(p,f,_,m){m<0&&p.x===1&&(a[f]=p.x-1),_.x===0&&_.z===0&&(a[f]=m/2/Math.PI+.5)}function d(p){return Math.atan2(p.z,-p.x)}function u(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}(function(p){let f=new T,_=new T,m=new T;for(let g=0;g<t.length;g+=3)l(t[g+0],f),l(t[g+1],_),l(t[g+2],m),o(f,_,m,p)})(n),(function(p){let f=new T;for(let _=0;_<s.length;_+=3)f.x=s[_+0],f.y=s[_+1],f.z=s[_+2],f.normalize().multiplyScalar(p),s[_+0]=f.x,s[_+1]=f.y,s[_+2]=f.z})(i),(function(){let p=new T;for(let f=0;f<s.length;f+=3){p.x=s[f+0],p.y=s[f+1],p.z=s[f+2];let _=d(p)/2/Math.PI+.5,m=u(p)/Math.PI+.5;a.push(_,1-m)}(function(){let f=new T,_=new T,m=new T,g=new T,v=new J,x=new J,M=new J;for(let A=0,R=0;A<s.length;A+=9,R+=6){f.set(s[A+0],s[A+1],s[A+2]),_.set(s[A+3],s[A+4],s[A+5]),m.set(s[A+6],s[A+7],s[A+8]),v.set(a[R+0],a[R+1]),x.set(a[R+2],a[R+3]),M.set(a[R+4],a[R+5]),g.copy(f).add(_).add(m).divideScalar(3);let U=d(g);h(v,R+0,f,U),h(x,R+2,_,U),h(M,R+4,m,U)}})(),(function(){for(let f=0;f<a.length;f+=6){let _=a[f+0],m=a[f+2],g=a[f+4],v=Math.max(_,m,g),x=Math.min(_,m,g);v>.9&&x<.1&&(_<.2&&(a[f+0]+=1),m<.2&&(a[f+2]+=1),g<.2&&(a[f+4]+=1))}})()})(),this.setAttribute("position",new ye(s,3)),this.setAttribute("normal",new ye(s.slice(),3)),this.setAttribute("uv",new ye(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}},lo=class r extends mn{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Oa=new T,Fa=new T,ic=new T,Ba=new Ei,co=class extends et{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=Math.pow(10,4),s=Math.cos(Mr*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],d=new Array(3),u={},p=[];for(let f=0;f<c;f+=3){a?(l[0]=a.getX(f),l[1]=a.getX(f+1),l[2]=a.getX(f+2)):(l[0]=f,l[1]=f+1,l[2]=f+2);let{a:_,b:m,c:g}=Ba;if(_.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),g.fromBufferAttribute(o,l[2]),Ba.getNormal(ic),d[0]=`${Math.round(_.x*n)},${Math.round(_.y*n)},${Math.round(_.z*n)}`,d[1]=`${Math.round(m.x*n)},${Math.round(m.y*n)},${Math.round(m.z*n)}`,d[2]=`${Math.round(g.x*n)},${Math.round(g.y*n)},${Math.round(g.z*n)}`,d[0]!==d[1]&&d[1]!==d[2]&&d[2]!==d[0])for(let v=0;v<3;v++){let x=(v+1)%3,M=d[v],A=d[x],R=Ba[h[v]],U=Ba[h[x]],F=`${M}_${A}`,D=`${A}_${M}`;D in u&&u[D]?(ic.dot(u[D].normal)<=s&&(p.push(R.x,R.y,R.z),p.push(U.x,U.y,U.z)),u[D]=null):F in u||(u[F]={index0:l[v],index1:l[x],normal:ic.clone()})}}for(let f in u)if(u[f]){let{index0:_,index1:m}=u[f];Oa.fromBufferAttribute(o,_),Fa.fromBufferAttribute(o,m),p.push(Oa.x,Oa.y,Oa.z),p.push(Fa.x,Fa.y,Fa.z)}this.setAttribute("position",new ye(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Zt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(n),t.push(s),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),n=0,s=i.length,a;a=t||e*i[s-1];let o,c=0,l=s-1;for(;c<=l;)if(n=Math.floor(c+(l-c)/2),o=i[n]-a,o<0)c=n+1;else{if(!(o>0)){l=n;break}l=n-1}if(n=l,i[n]===a)return n/(s-1);let h=i[n];return(n+(a-h)/(i[n+1]-h))/(s-1)}getTangent(e,t){let n=e-1e-4,s=e+1e-4;n<0&&(n=0),s>1&&(s=1);let a=this.getPoint(n),o=this.getPoint(s),c=t||(a.isVector2?new J:new T);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new T,n=[],s=[],a=[],o=new T,c=new Ue;for(let p=0;p<=e;p++){let f=p/e;n[p]=this.getTangentAt(f,new T)}s[0]=new T,a[0]=new T;let l=Number.MAX_VALUE,h=Math.abs(n[0].x),d=Math.abs(n[0].y),u=Math.abs(n[0].z);h<=l&&(l=h,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),u<=l&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(n[p-1],n[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(De(n[p-1].dot(n[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(o,f))}a[p].crossVectors(n[p],s[p])}if(t===!0){let p=Math.acos(De(s[0].dot(s[e]),-1,1));p/=e,n[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let f=1;f<=e;f++)s[f].applyMatrix4(c.makeRotationAxis(n[f],p*f)),a[f].crossVectors(n[f],s[f])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Lr=class extends Zt{constructor(e=0,t=0,i=1,n=1,s=0,a=2*Math.PI,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new J){let i=t,n=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(s=a?0:n),this.aClockwise!==!0||a||(s===n?s=-n:s-=n);let o=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,p=l-this.aY;c=u*h-p*d+this.aX,l=u*d+p*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ho=class extends Lr{constructor(e,t,i,n,s,a){super(e,t,i,i,n,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function uh(){let r=0,e=0,t=0,i=0;function n(s,a,o,c){r=s,e=o,t=-3*s+3*a-2*o-c,i=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){n(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,d){let u=(a-s)/l-(o-s)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+d)+(c-o)/d;u*=h,p*=h,n(a,o,u,p)},calc:function(s){let a=s*s;return r+e*s+t*a+i*(a*s)}}}var za=new T,nc=new uh,rc=new uh,sc=new uh,$i=class extends Zt{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new T){let i=t,n=this.points,s=n.length,a=(s-(this.closed?0:1))*e,o,c,l=Math.floor(a),h=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/s)+1)*s:h===0&&l===s-1&&(l=s-2,h=1),this.closed||l>0?o=n[(l-1)%s]:(za.subVectors(n[0],n[1]).add(n[0]),o=za);let d=n[l%s],u=n[(l+1)%s];if(this.closed||l+2<s?c=n[(l+2)%s]:(za.subVectors(n[s-1],n[s-2]).add(n[s-1]),c=za),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(c),p);_<1e-4&&(_=1),f<1e-4&&(f=_),m<1e-4&&(m=_),nc.initNonuniformCatmullRom(o.x,d.x,u.x,c.x,f,_,m),rc.initNonuniformCatmullRom(o.y,d.y,u.y,c.y,f,_,m),sc.initNonuniformCatmullRom(o.z,d.z,u.z,c.z,f,_,m)}else this.curveType==="catmullrom"&&(nc.initCatmullRom(o.x,d.x,u.x,c.x,this.tension),rc.initCatmullRom(o.y,d.y,u.y,c.y,this.tension),sc.initCatmullRom(o.z,d.z,u.z,c.z,this.tension));return i.set(nc.calc(h),rc.calc(h),sc.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new T().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Eu(r,e,t,i,n){let s=.5*(i-e),a=.5*(n-t),o=r*r;return(2*t-2*i+s+a)*(r*o)+(-3*t+3*i-2*s-a)*o+s*r+t}function ds(r,e,t,i){return(function(n,s){let a=1-n;return a*a*s})(r,e)+(function(n,s){return 2*(1-n)*n*s})(r,t)+(function(n,s){return n*n*s})(r,i)}function ps(r,e,t,i,n){return(function(s,a){let o=1-s;return o*o*o*a})(r,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(r,t)+(function(s,a){return 3*(1-s)*s*s*a})(r,i)+(function(s,a){return s*s*s*a})(r,n)}var Cs=class extends Zt{constructor(e=new J,t=new J,i=new J,n=new J){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new J){let i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(ps(e,n.x,s.x,a.x,o.x),ps(e,n.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},uo=class extends Zt{constructor(e=new T,t=new T,i=new T,n=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new T){let i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(ps(e,n.x,s.x,a.x,o.x),ps(e,n.y,s.y,a.y,o.y),ps(e,n.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ps=class extends Zt{constructor(e=new J,t=new J){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new J){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new J){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fn=class extends Zt{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Is=class extends Zt{constructor(e=new J,t=new J,i=new J){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new J){let i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(ds(e,n.x,s.x,a.x),ds(e,n.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ls=class extends Zt{constructor(e=new T,t=new T,i=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new T){let i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(ds(e,n.x,s.x,a.x),ds(e,n.y,s.y,a.y),ds(e,n.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ds=class extends Zt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new J){let i=t,n=this.points,s=(n.length-1)*e,a=Math.floor(s),o=s-a,c=n[a===0?a:a-1],l=n[a],h=n[a>n.length-2?n.length-1:a+1],d=n[a>n.length-3?n.length-1:a+2];return i.set(Eu(o,c.x,l.x,h.x,d.x),Eu(o,c.y,l.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new J().fromArray(n))}return this}},po=Object.freeze({__proto__:null,ArcCurve:ho,CatmullRomCurve3:$i,CubicBezierCurve:Cs,CubicBezierCurve3:uo,EllipseCurve:Lr,LineCurve:Ps,LineCurve3:fn,QuadraticBezierCurve:Is,QuadraticBezierCurve3:Ls,SplineCurve:Ds}),Dr=class extends Zt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new po[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),n=this.getCurveLengths(),s=0;for(;s<n.length;){if(n[s]>=i){let a=n[s]-i,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let n=0,s=this.curves;n<s.length;n++){let a=s[n],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(new po[n.type]().fromJSON(n))}return this}},Us=class extends Dr{constructor(e){super(),this.type="Path",this.currentPoint=new J,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Ps(this.currentPoint.clone(),new J(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){let s=new Is(this.currentPoint.clone(),new J(e,t),new J(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,s,a){let o=new Cs(this.currentPoint.clone(),new J(e,t),new J(i,n),new J(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Ds(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,s,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,i,n,s,a),this}absarc(e,t,i,n,s,a){return this.absellipse(e,t,i,i,n,s,a),this}ellipse(e,t,i,n,s,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,n,s,a,o,c),this}absellipse(e,t,i,n,s,a,o,c){let l=new Lr(e,t,i,n,s,a,o,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},On=class extends Us{constructor(e){super(e),this.uuid=Ai(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(new Us().fromJSON(n))}return this}};function am(r,e,t=2){let i=e&&e.length,n=i?e[0]*t:r.length,s=wu(r,0,n,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,c,l;if(i&&(s=(function(h,d,u,p){let f=[];for(let _=0,m=d.length;_<m;_++){let g=wu(h,d[_]*p,_<m-1?d[_+1]*p:h.length,p,!1);g===g.next&&(g.steiner=!0),f.push(mm(g))}f.sort(um);for(let _=0;_<f.length;_++)u=dm(f[_],u);return u})(r,e,s,t)),r.length>80*t){o=1/0,c=1/0;let h=-1/0,d=-1/0;for(let u=t;u<n;u+=t){let p=r[u],f=r[u+1];p<o&&(o=p),f<c&&(c=f),p>h&&(h=p),f>d&&(d=f)}l=Math.max(h-o,d-c),l=l!==0?32767/l:0}return Ns(s,a,t,o,c,l,0),a}function wu(r,e,t,i,n){let s;if(n===(function(a,o,c,l){let h=0;for(let d=o,u=c-l;d<c;d+=l)h+=(a[u]-a[d])*(a[d+1]+a[u+1]),u=d;return h})(r,e,t,i)>0)for(let a=e;a<t;a+=i)s=Au(a/i|0,r[a],r[a+1],s);else for(let a=t-i;a>=e;a-=i)s=Au(a/i|0,r[a],r[a+1],s);return s&&Ur(s,s.next)&&(Fs(s),s=s.next),s}function Fn(r,e){if(!r)return r;e||(e=r);let t,i=r;do if(t=!1,i.steiner||!Ur(i,i.next)&&lt(i.prev,i,i.next)!==0)i=i.next;else{if(Fs(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function Ns(r,e,t,i,n,s,a){if(!r)return;!a&&s&&(function(c,l,h,d){let u=c;do u.z===0&&(u.z=mc(u.x,u.y,l,h,d)),u.prevZ=u.prev,u.nextZ=u.next,u=u.next;while(u!==c);u.prevZ.nextZ=null,u.prevZ=null,(function(p){let f,_=1;do{let m,g=p;p=null;let v=null;for(f=0;g;){f++;let x=g,M=0;for(let R=0;R<_&&(M++,x=x.nextZ,x);R++);let A=_;for(;M>0||A>0&&x;)M!==0&&(A===0||!x||g.z<=x.z)?(m=g,g=g.nextZ,M--):(m=x,x=x.nextZ,A--),v?v.nextZ=m:p=m,m.prevZ=v,v=m;g=x}v.nextZ=null,_*=2}while(f>1)})(u)})(r,i,n,s);let o=r;for(;r.prev!==r.next;){let c=r.prev,l=r.next;if(s?lm(r,i,n,s):om(r))e.push(c.i,r.i,l.i),Fs(r),r=l.next,o=l.next;else if((r=l)===o){a?a===1?Ns(r=cm(Fn(r),e),e,t,i,n,s,2):a===2&&hm(r,e,t,i,n,s):Ns(Fn(r),e,t,i,n,s,1);break}}}function om(r){let e=r.prev,t=r,i=r.next;if(lt(e,t,i)>=0)return!1;let n=e.x,s=t.x,a=i.x,o=e.y,c=t.y,l=i.y,h=Math.min(n,s,a),d=Math.min(o,c,l),u=Math.max(n,s,a),p=Math.max(o,c,l),f=i.next;for(;f!==e;){if(f.x>=h&&f.x<=u&&f.y>=d&&f.y<=p&&hs(n,o,s,c,a,l,f.x,f.y)&&lt(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function lm(r,e,t,i){let n=r.prev,s=r,a=r.next;if(lt(n,s,a)>=0)return!1;let o=n.x,c=s.x,l=a.x,h=n.y,d=s.y,u=a.y,p=Math.min(o,c,l),f=Math.min(h,d,u),_=Math.max(o,c,l),m=Math.max(h,d,u),g=mc(p,f,e,t,i),v=mc(_,m,e,t,i),x=r.prevZ,M=r.nextZ;for(;x&&x.z>=g&&M&&M.z<=v;){if(x.x>=p&&x.x<=_&&x.y>=f&&x.y<=m&&x!==n&&x!==a&&hs(o,h,c,d,l,u,x.x,x.y)&&lt(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=p&&M.x<=_&&M.y>=f&&M.y<=m&&M!==n&&M!==a&&hs(o,h,c,d,l,u,M.x,M.y)&&lt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=g;){if(x.x>=p&&x.x<=_&&x.y>=f&&x.y<=m&&x!==n&&x!==a&&hs(o,h,c,d,l,u,x.x,x.y)&&lt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=v;){if(M.x>=p&&M.x<=_&&M.y>=f&&M.y<=m&&M!==n&&M!==a&&hs(o,h,c,d,l,u,M.x,M.y)&&lt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function cm(r,e){let t=r;do{let i=t.prev,n=t.next.next;!Ur(i,n)&&Dd(i,t,t.next,n)&&Os(i,n)&&Os(n,i)&&(e.push(i.i,t.i,n.i),Fs(t),Fs(t.next),t=r=n),t=t.next}while(t!==r);return Fn(t)}function hm(r,e,t,i,n,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&fm(a,o)){let c=Ud(a,o);return a=Fn(a,a.next),c=Fn(c,c.next),Ns(a,e,t,i,n,s,0),void Ns(c,e,t,i,n,s,0)}o=o.next}a=a.next}while(a!==r)}function um(r,e){let t=r.x-e.x;return t===0&&(t=r.y-e.y,t===0)&&(t=(r.next.y-r.y)/(r.next.x-r.x)-(e.next.y-e.y)/(e.next.x-e.x)),t}function dm(r,e){let t=(function(n,s){let a=s,o=n.x,c=n.y,l,h=-1/0;if(Ur(n,a))return a;do{if(Ur(n,a.next))return a.next;if(c<=a.y&&c>=a.next.y&&a.next.y!==a.y){let _=a.x+(c-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(_<=o&&_>h&&(h=_,l=a.x<a.next.x?a:a.next,_===o))return l}a=a.next}while(a!==s);if(!l)return null;let d=l,u=l.x,p=l.y,f=1/0;a=l;do{if(o>=a.x&&a.x>=u&&o!==a.x&&Ld(c<p?o:h,c,u,p,c<p?h:o,c,a.x,a.y)){let _=Math.abs(c-a.y)/(o-a.x);Os(a,n)&&(_<f||_===f&&(a.x>l.x||a.x===l.x&&pm(l,a)))&&(l=a,f=_)}a=a.next}while(a!==d);return l})(r,e);if(!t)return e;let i=Ud(t,r);return Fn(i,i.next),Fn(t,t.next)}function pm(r,e){return lt(r.prev,r,e.prev)<0&&lt(e.next,r,r.next)<0}function mc(r,e,t,i,n){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*n|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*n|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function mm(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Ld(r,e,t,i,n,s,a,o){return(n-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(n-a)*(i-o)}function hs(r,e,t,i,n,s,a,o){return!(r===a&&e===o)&&Ld(r,e,t,i,n,s,a,o)}function fm(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!(function(t,i){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==i.i&&n.next.i!==i.i&&Dd(n,n.next,t,i))return!0;n=n.next}while(n!==t);return!1})(r,e)&&(Os(r,e)&&Os(e,r)&&(function(t,i){let n=t,s=!1,a=(t.x+i.x)/2,o=(t.y+i.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&a<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(s=!s),n=n.next;while(n!==t);return s})(r,e)&&(lt(r.prev,r,e.prev)||lt(r,e.prev,e))||Ur(r,e)&&lt(r.prev,r,r.next)>0&&lt(e.prev,e,e.next)>0)}function lt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Ur(r,e){return r.x===e.x&&r.y===e.y}function Dd(r,e,t,i){let n=Ga(lt(r,e,t)),s=Ga(lt(r,e,i)),a=Ga(lt(t,i,r)),o=Ga(lt(t,i,e));return n!==s&&a!==o||!(n!==0||!Ha(r,t,e))||!(s!==0||!Ha(r,i,e))||!(a!==0||!Ha(t,r,i))||!(o!==0||!Ha(t,e,i))}function Ha(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Ga(r){return r>0?1:r<0?-1:0}function Os(r,e){return lt(r.prev,r,r.next)<0?lt(r,e,r.next)>=0&&lt(r,r.prev,e)>=0:lt(r,e,r.prev)<0||lt(r,r.next,e)<0}function Ud(r,e){let t=fc(r.i,r.x,r.y),i=fc(e.i,e.x,e.y),n=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=n,n.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Au(r,e,t,i){let n=fc(r,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Fs(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function fc(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}var gc=class{static triangulate(e,t,i=2){return am(e,t,i)}},wi=class r{static area(e){let t=e.length,i=0;for(let n=t-1,s=0;s<t;n=s++)i+=e[n].x*e[s].y-e[s].x*e[n].y;return .5*i}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let i=[],n=[],s=[];Ru(e),Cu(i,e);let a=e.length;t.forEach(Ru);for(let c=0;c<t.length;c++)n.push(a),a+=t[c].length,Cu(i,t[c]);let o=gc.triangulate(i,n);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}};function Ru(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Cu(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var Nr=class r extends et{constructor(e=new On([new J(.5,.5),new J(-.5,.5),new J(-.5,-.5),new J(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,n=[],s=[];for(let o=0,c=e.length;o<c;o++)a(e[o]);function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:gm,x,M,A,R,U,F=!1;g&&(x=g.getSpacedPoints(h),F=!0,u=!1,M=g.computeFrenetFrames(h,!1),A=new T,R=new T,U=new T),u||(m=0,p=0,f=0,_=0);let D=o.extractPoints(l),k=D.shape,V=D.holes;if(!wi.isClockWise(k)){k=k.reverse();for(let P=0,y=V.length;P<y;P++){let w=V[P];wi.isClockWise(w)&&(V[P]=w.reverse())}}function O(P){let y=10000000000000001e-36,w=P[0];for(let L=1;L<=P.length;L++){let C=L%P.length,X=P[C],B=X.x-w.x,z=X.y-w.y,ee=B*B+z*z,oe=Math.max(Math.abs(X.x),Math.abs(X.y),Math.abs(w.x),Math.abs(w.y));ee<=y*oe*oe?(P.splice(C,1),L--):w=X}}O(k),V.forEach(O);let Y=V.length,H=k;for(let P=0;P<Y;P++){let y=V[P];k=k.concat(y)}function q(P,y,w){return y||console.error("THREE.ExtrudeGeometry: vec does not exist"),P.clone().addScaledVector(y,w)}let Z=k.length;function ne(P,y,w){let L,C,X,B=P.x-y.x,z=P.y-y.y,ee=w.x-P.x,oe=w.y-P.y,te=B*B+z*z,de=B*oe-z*ee;if(Math.abs(de)>Number.EPSILON){let _e=Math.sqrt(te),Me=Math.sqrt(ee*ee+oe*oe),ze=y.x-z/_e,Xe=y.y+B/_e,je=((w.x-oe/Me-ze)*oe-(w.y+ee/Me-Xe)*ee)/(B*oe-z*ee);L=ze+B*je-P.x,C=Xe+z*je-P.y;let ce=L*L+C*C;if(ce<=2)return new J(L,C);X=Math.sqrt(ce/2)}else{let _e=!1;B>Number.EPSILON?ee>Number.EPSILON&&(_e=!0):B<-Number.EPSILON?ee<-Number.EPSILON&&(_e=!0):Math.sign(z)===Math.sign(oe)&&(_e=!0),_e?(L=-z,C=B,X=Math.sqrt(te)):(L=B,C=z,X=Math.sqrt(te/2))}return new J(L/X,C/X)}let $=[];for(let P=0,y=H.length,w=y-1,L=P+1;P<y;P++,w++,L++)w===y&&(w=0),L===y&&(L=0),$[P]=ne(H[P],H[w],H[L]);let me=[],xe,ge,Ee=$.concat();for(let P=0,y=Y;P<y;P++){let w=V[P];xe=[];for(let L=0,C=w.length,X=C-1,B=L+1;L<C;L++,X++,B++)X===C&&(X=0),B===C&&(B=0),xe[L]=ne(w[L],w[X],w[B]);me.push(xe),Ee=Ee.concat(xe)}if(m===0)ge=wi.triangulateShape(H,V);else{let P=[],y=[];for(let w=0;w<m;w++){let L=w/m,C=p*Math.cos(L*Math.PI/2),X=f*Math.sin(L*Math.PI/2)+_;for(let B=0,z=H.length;B<z;B++){let ee=q(H[B],$[B],X);be(ee.x,ee.y,-C),L===0&&P.push(ee)}for(let B=0,z=Y;B<z;B++){let ee=V[B];xe=me[B];let oe=[];for(let te=0,de=ee.length;te<de;te++){let _e=q(ee[te],xe[te],X);be(_e.x,_e.y,-C),L===0&&oe.push(_e)}L===0&&y.push(oe)}}ge=wi.triangulateShape(P,y)}let ie=ge.length,se=f+_;for(let P=0;P<Z;P++){let y=u?q(k[P],Ee[P],se):k[P];F?(R.copy(M.normals[0]).multiplyScalar(y.x),A.copy(M.binormals[0]).multiplyScalar(y.y),U.copy(x[0]).add(R).add(A),be(U.x,U.y,U.z)):be(y.x,y.y,0)}for(let P=1;P<=h;P++)for(let y=0;y<Z;y++){let w=u?q(k[y],Ee[y],se):k[y];F?(R.copy(M.normals[P]).multiplyScalar(w.x),A.copy(M.binormals[P]).multiplyScalar(w.y),U.copy(x[P]).add(R).add(A),be(U.x,U.y,U.z)):be(w.x,w.y,d/h*P)}for(let P=m-1;P>=0;P--){let y=P/m,w=p*Math.cos(y*Math.PI/2),L=f*Math.sin(y*Math.PI/2)+_;for(let C=0,X=H.length;C<X;C++){let B=q(H[C],$[C],L);be(B.x,B.y,d+w)}for(let C=0,X=V.length;C<X;C++){let B=V[C];xe=me[C];for(let z=0,ee=B.length;z<ee;z++){let oe=q(B[z],xe[z],L);F?be(oe.x,oe.y+x[h-1].y,x[h-1].x+w):be(oe.x,oe.y,d+w)}}}function re(P,y){let w=P.length;for(;--w>=0;){let L=w,C=w-1;C<0&&(C=P.length-1);for(let X=0,B=h+2*m;X<B;X++){let z=Z*X,ee=Z*(X+1);b(y+L+z,y+C+z,y+C+ee,y+L+ee)}}}function be(P,y,w){c.push(P),c.push(y),c.push(w)}function Le(P,y,w){S(P),S(y),S(w);let L=n.length/3,C=v.generateTopUV(i,n,L-3,L-2,L-1);N(C[0]),N(C[1]),N(C[2])}function b(P,y,w,L){S(P),S(y),S(L),S(y),S(w),S(L);let C=n.length/3,X=v.generateSideWallUV(i,n,C-6,C-3,C-2,C-1);N(X[0]),N(X[1]),N(X[3]),N(X[1]),N(X[2]),N(X[3])}function S(P){n.push(c[3*P+0]),n.push(c[3*P+1]),n.push(c[3*P+2])}function N(P){s.push(P.x),s.push(P.y)}(function(){let P=n.length/3;if(u){let y=0,w=Z*y;for(let L=0;L<ie;L++){let C=ge[L];Le(C[2]+w,C[1]+w,C[0]+w)}y=h+2*m,w=Z*y;for(let L=0;L<ie;L++){let C=ge[L];Le(C[0]+w,C[1]+w,C[2]+w)}}else{for(let y=0;y<ie;y++){let w=ge[y];Le(w[2],w[1],w[0])}for(let y=0;y<ie;y++){let w=ge[y];Le(w[0]+Z*h,w[1]+Z*h,w[2]+Z*h)}}i.addGroup(P,n.length/3-P,0)})(),(function(){let P=n.length/3,y=0;re(H,y),y+=H.length;for(let w=0,L=V.length;w<L;w++){let C=V[w];re(C,y),y+=C.length}i.addGroup(P,n.length/3-P,1)})()}this.setAttribute("position",new ye(n,3)),this.setAttribute("uv",new ye(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i,n){if(n.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];n.shapes.push(o.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},i),i.extrudePath!==void 0&&(n.options.extrudePath=i.extrudePath.toJSON()),n})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];i.push(o)}let n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new po[n.type]().fromJSON(n)),new r(i,e.options)}},gm={generateTopUV:function(r,e,t,i,n){let s=e[3*t],a=e[3*t+1],o=e[3*i],c=e[3*i+1],l=e[3*n],h=e[3*n+1];return[new J(s,a),new J(o,c),new J(l,h)]},generateSideWallUV:function(r,e,t,i,n,s){let a=e[3*t],o=e[3*t+1],c=e[3*t+2],l=e[3*i],h=e[3*i+1],d=e[3*i+2],u=e[3*n],p=e[3*n+1],f=e[3*n+2],_=e[3*s],m=e[3*s+1],g=e[3*s+2];return Math.abs(o-h)<Math.abs(a-l)?[new J(a,1-c),new J(l,1-d),new J(u,1-f),new J(_,1-g)]:[new J(o,1-c),new J(h,1-d),new J(p,1-f),new J(m,1-g)]}},mo=class r extends mn{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},fo=class r extends et{constructor(e=[new J(0,-.5),new J(.5,0),new J(0,.5)],t=12,i=0,n=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=De(n,0,2*Math.PI);let s=[],a=[],o=[],c=[],l=[],h=1/t,d=new T,u=new J,p=new T,f=new T,_=new T,m=0,g=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,p.x=1*g,p.y=-m,p.z=0*g,_.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:m=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,p.x=1*g,p.y=-m,p.z=0*g,f.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),c.push(p.x,p.y,p.z),_.copy(f)}for(let v=0;v<=t;v++){let x=i+v*h*n,M=Math.sin(x),A=Math.cos(x);for(let R=0;R<=e.length-1;R++){d.x=e[R].x*M,d.y=e[R].y,d.z=e[R].x*A,a.push(d.x,d.y,d.z),u.x=v/t,u.y=R/(e.length-1),o.push(u.x,u.y);let U=c[3*R+0]*M,F=c[3*R+1],D=c[3*R+0]*A;l.push(U,F,D)}}for(let v=0;v<t;v++)for(let x=0;x<e.length-1;x++){let M=x+v*e.length,A=M,R=M+e.length,U=M+e.length+1,F=M+1;s.push(A,R,F),s.push(U,F,R)}this.setIndex(s),this.setAttribute("position",new ye(a,3)),this.setAttribute("uv",new ye(o,2)),this.setAttribute("normal",new ye(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},go=class r extends mn{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},kt=class r extends et{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(n),l=o+1,h=c+1,d=e/o,u=t/c,p=[],f=[],_=[],m=[];for(let g=0;g<h;g++){let v=g*u-a;for(let x=0;x<l;x++){let M=x*d-s;f.push(M,-v,0),_.push(0,0,1),m.push(x/o),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let v=0;v<o;v++){let x=v+l*g,M=v+l*(g+1),A=v+1+l*(g+1),R=v+1+l*g;p.push(x,M,R),p.push(M,A,R)}this.setIndex(p),this.setAttribute("position",new ye(f,3)),this.setAttribute("normal",new ye(_,3)),this.setAttribute("uv",new ye(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},_o=class r extends et{constructor(e=.5,t=1,i=32,n=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:a},i=Math.max(3,i);let o=[],c=[],l=[],h=[],d=e,u=(t-e)/(n=Math.max(1,n)),p=new T,f=new J;for(let _=0;_<=n;_++){for(let m=0;m<=i;m++){let g=s+m/i*a;p.x=d*Math.cos(g),p.y=d*Math.sin(g),c.push(p.x,p.y,p.z),l.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}d+=u}for(let _=0;_<n;_++){let m=_*(i+1);for(let g=0;g<i;g++){let v=g+m,x=v,M=v+i+1,A=v+i+2,R=v+1;o.push(x,M,R),o.push(M,A,R)}}this.setIndex(o),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(l,3)),this.setAttribute("uv",new ye(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},vo=class r extends et{constructor(e=new On([new J(0,.5),new J(-.5,-.5),new J(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],n=[],s=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;function l(h){let d=n.length/3,u=h.extractPoints(t),p=u.shape,f=u.holes;wi.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,g=f.length;m<g;m++){let v=f[m];wi.isClockWise(v)===!0&&(f[m]=v.reverse())}let _=wi.triangulateShape(p,f);for(let m=0,g=f.length;m<g;m++){let v=f[m];p=p.concat(v)}for(let m=0,g=p.length;m<g;m++){let v=p[m];n.push(v.x,v.y,0),s.push(0,0,1),a.push(v.x,v.y)}for(let m=0,g=_.length;m<g;m++){let v=_[m],x=v[0]+d,M=v[1]+d,A=v[2]+d;i.push(x,M,A),c+=3}}this.setIndex(i),this.setAttribute("position",new ye(n,3)),this.setAttribute("normal",new ye(s,3)),this.setAttribute("uv",new ye(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i){if(i.shapes=[],Array.isArray(t))for(let n=0,s=t.length;n<s;n++){let a=t[n];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i})(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let n=0,s=e.shapes.length;n<s;n++){let a=t[e.shapes[n]];i.push(a)}return new r(i,e.curveSegments)}},gi=class r extends et{constructor(e=1,t=32,i=16,n=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new T,u=new T,p=[],f=[],_=[],m=[];for(let g=0;g<=i;g++){let v=[],x=g/i,M=0;g===0&&a===0?M=.5/t:g===i&&c===Math.PI&&(M=-.5/t);for(let A=0;A<=t;A++){let R=A/t;d.x=-e*Math.cos(n+R*s)*Math.sin(a+x*o),d.y=e*Math.cos(a+x*o),d.z=e*Math.sin(n+R*s)*Math.sin(a+x*o),f.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(R+M,1-x),v.push(l++)}h.push(v)}for(let g=0;g<i;g++)for(let v=0;v<t;v++){let x=h[g][v+1],M=h[g][v],A=h[g+1][v],R=h[g+1][v+1];(g!==0||a>0)&&p.push(x,M,R),(g!==i-1||c<Math.PI)&&p.push(M,A,R)}this.setIndex(p),this.setAttribute("position",new ye(f,3)),this.setAttribute("normal",new ye(_,3)),this.setAttribute("uv",new ye(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},xo=class r extends mn{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Bn=class r extends et{constructor(e=1,t=.4,i=12,n=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);let a=[],o=[],c=[],l=[],h=new T,d=new T,u=new T;for(let p=0;p<=i;p++)for(let f=0;f<=n;f++){let _=f/n*s,m=p/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(_),d.y=(e+t*Math.cos(m))*Math.sin(_),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(f/n),l.push(p/i)}for(let p=1;p<=i;p++)for(let f=1;f<=n;f++){let _=(n+1)*p+f-1,m=(n+1)*(p-1)+f-1,g=(n+1)*(p-1)+f,v=(n+1)*p+f;a.push(_,m,v),a.push(m,g,v)}this.setIndex(a),this.setAttribute("position",new ye(o,3)),this.setAttribute("normal",new ye(c,3)),this.setAttribute("uv",new ye(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},yo=class r extends et{constructor(e=1,t=.4,i=64,n=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:n,p:s,q:a},i=Math.floor(i),n=Math.floor(n);let o=[],c=[],l=[],h=[],d=new T,u=new T,p=new T,f=new T,_=new T,m=new T,g=new T;for(let x=0;x<=i;++x){let M=x/i*s*Math.PI*2;v(M,s,a,e,p),v(M+.01,s,a,e,f),m.subVectors(f,p),g.addVectors(f,p),_.crossVectors(m,g),g.crossVectors(_,m),_.normalize(),g.normalize();for(let A=0;A<=n;++A){let R=A/n*Math.PI*2,U=-t*Math.cos(R),F=t*Math.sin(R);d.x=p.x+(U*g.x+F*_.x),d.y=p.y+(U*g.y+F*_.y),d.z=p.z+(U*g.z+F*_.z),c.push(d.x,d.y,d.z),u.subVectors(d,p).normalize(),l.push(u.x,u.y,u.z),h.push(x/i),h.push(A/n)}}for(let x=1;x<=i;x++)for(let M=1;M<=n;M++){let A=(n+1)*(x-1)+(M-1),R=(n+1)*x+(M-1),U=(n+1)*x+M,F=(n+1)*(x-1)+M;o.push(A,R,F),o.push(R,U,F)}function v(x,M,A,R,U){let F=Math.cos(x),D=Math.sin(x),k=A/M*x,V=Math.cos(k);U.x=R*(2+V)*.5*F,U.y=R*(2+V)*D*.5,U.z=R*Math.sin(k)*.5}this.setIndex(o),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(l,3)),this.setAttribute("uv",new ye(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Or=class r extends et{constructor(e=new Ls(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),t=64,i=1,n=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new T,c=new T,l=new J,h=new T,d=[],u=[],p=[],f=[];function _(m){h=e.getPointAt(m/t,h);let g=a.normals[m],v=a.binormals[m];for(let x=0;x<=n;x++){let M=x/n*Math.PI*2,A=Math.sin(M),R=-Math.cos(M);c.x=R*g.x+A*v.x,c.y=R*g.y+A*v.y,c.z=R*g.z+A*v.z,c.normalize(),u.push(c.x,c.y,c.z),o.x=h.x+i*c.x,o.y=h.y+i*c.y,o.z=h.z+i*c.z,d.push(o.x,o.y,o.z)}}(function(){for(let m=0;m<t;m++)_(m);_(s===!1?t:0),(function(){for(let m=0;m<=t;m++)for(let g=0;g<=n;g++)l.x=m/t,l.y=g/n,p.push(l.x,l.y)})(),(function(){for(let m=1;m<=t;m++)for(let g=1;g<=n;g++){let v=(n+1)*(m-1)+(g-1),x=(n+1)*m+(g-1),M=(n+1)*m+g,A=(n+1)*(m-1)+g;f.push(v,x,A),f.push(x,M,A)}})()})(),this.setIndex(f),this.setAttribute("position",new ye(d,3)),this.setAttribute("normal",new ye(u,3)),this.setAttribute("uv",new ye(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new po[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Mo=class extends et{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,n=new T,s=new T;if(e.index!==null){let a=e.attributes.position,o=e.index,c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){let d=c[l],u=d.start;for(let p=u,f=u+d.count;p<f;p+=3)for(let _=0;_<3;_++){let m=o.getX(p+_),g=o.getX(p+(_+1)%3);n.fromBufferAttribute(a,m),s.fromBufferAttribute(a,g),Pu(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){let h=3*o+l,d=3*o+(l+1)%3;n.fromBufferAttribute(a,h),s.fromBufferAttribute(a,d),Pu(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new ye(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Pu(r,e,t){let i=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,n=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(i)!==!0&&t.has(n)!==!0&&(t.add(i),t.add(n),!0)}var d0=Object.freeze({__proto__:null,BoxGeometry:fi,CapsuleGeometry:ao,CircleGeometry:oo,ConeGeometry:Ir,CylinderGeometry:Ki,DodecahedronGeometry:lo,EdgesGeometry:co,ExtrudeGeometry:Nr,IcosahedronGeometry:mo,LatheGeometry:fo,OctahedronGeometry:go,PlaneGeometry:kt,PolyhedronGeometry:mn,RingGeometry:_o,ShapeGeometry:vo,SphereGeometry:gi,TetrahedronGeometry:xo,TorusGeometry:Bn,TorusKnotGeometry:yo,TubeGeometry:Or,WireframeGeometry:Mo});var Pe=class extends mi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Bs=class extends mi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},So=class extends mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},bo=class extends mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ka(r,e){return r&&r.constructor!==e?typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r):r}function _m(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var zn=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],s=t[i-1];i:{e:{let a;t:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=t[++i],e<n)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(i=2,s=o);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(n=s,s=t[--i-1],e>=s)break e}a=i,i=0;break t}break i}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let a=0;a!==n;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},To=class extends zn{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cc,endingEnd:cc}}intervalChanged_(e,t,i){let n=this.parameterPositions,s=e-2,a=e+1,o=n[s],c=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case hc:s=e,o=2*t-i;break;case uc:s=n.length-2,o=t+n[s]-n[s+1];break;default:s=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case hc:a=e,c=2*i-t;break;case uc:a=1,c=i+n[1]-n[0];break;default:a=e-1,c=t}let l=.5*(i-t),h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,f=(i-t)/(n-t),_=f*f,m=_*f,g=-u*m+2*u*_-u*f,v=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*f+1,x=(-1-p)*m+(1.5+p)*_+.5*f,M=p*m-p*_;for(let A=0;A!==o;++A)s[A]=g*a[h+A]+v*a[l+A]+x*a[c+A]+M*a[d+A];return s}},Eo=class extends zn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(i-t)/(n-t),d=1-h;for(let u=0;u!==o;++u)s[u]=a[l+u]*d+a[c+u]*h;return s}},wo=class extends zn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},Yt=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ka(t,this.TimeBufferType),this.values=ka(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ka(e.times,Array),values:ka(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new wo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Eo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new To(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ms:t=this.InterpolantFactoryMethodDiscrete;break;case ja:t=this.InterpolantFactoryMethodLinear;break;case Va:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ms;case this.InterpolantFactoryMethodLinear:return ja;case this.InterpolantFactoryMethodSmooth:return Va}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(n!==void 0&&_m(n))for(let o=0,c=n.length;o!==c;++o){let l=n[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Va,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o];if(l!==e[o+1]&&(o!==1||l!==e[0]))if(n)c=!0;else{let h=o*i,d=h-i,u=h+i;for(let p=0;p!==i;++p){let f=t[h+p];if(f!==t[d+p]||f!==t[u+p]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*i,d=a*i;for(let u=0;u!==i;++u)t[d+u]=t[h+u]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Yt.prototype.ValueTypeName="",Yt.prototype.TimeBufferType=Float32Array,Yt.prototype.ValueBufferType=Float32Array,Yt.prototype.DefaultInterpolation=ja;var un=class extends Yt{constructor(e,t,i){super(e,t,i)}};un.prototype.ValueTypeName="bool",un.prototype.ValueBufferType=Array,un.prototype.DefaultInterpolation=ms,un.prototype.InterpolantFactoryMethodLinear=void 0,un.prototype.InterpolantFactoryMethodSmooth=void 0;var Ao=class extends Yt{constructor(e,t,i,n){super(e,t,i,n)}};Ao.prototype.ValueTypeName="color";var Ro=class extends Yt{constructor(e,t,i,n){super(e,t,i,n)}};Ro.prototype.ValueTypeName="number";var Co=class extends zn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(n-t),l=e*o;for(let h=l+o;l!==h;l+=4)Dt.slerpFlat(s,0,a,l-o,a,l,c);return s}},zs=class extends Yt{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new Co(this.times,this.values,this.getValueSize(),e)}};zs.prototype.ValueTypeName="quaternion",zs.prototype.InterpolantFactoryMethodSmooth=void 0;var dn=class extends Yt{constructor(e,t,i){super(e,t,i)}};dn.prototype.ValueTypeName="string",dn.prototype.ValueBufferType=Array,dn.prototype.DefaultInterpolation=ms,dn.prototype.InterpolantFactoryMethodLinear=void 0,dn.prototype.InterpolantFactoryMethodSmooth=void 0;var Po=class extends Yt{constructor(e,t,i,n){super(e,t,i,n)}};Po.prototype.ValueTypeName="vector";var Io=class{constructor(e,t,i){let n=this,s,a=!1,o=0,c=0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){c++,a===!1&&n.onStart!==void 0&&n.onStart(h,o,c),a=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,c),o===c&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let p=l[d],f=l[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Nd=new Io,Lo=class{constructor(e){this.manager=e!==void 0?e:Nd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Lo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Hn=class extends rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Hs=class extends Hn{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},ac=new Ue,Iu=new T,Lu=new T,Gs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new J(512,512),this.mapType=Ui,this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pn,this._frameExtents=new J(1,1),this._viewportCount=1,this._viewports=[new Ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Iu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Iu),Lu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lu),t.updateMatrixWorld(),ac.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ac,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ac)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},_c=class extends Gs{constructor(){super(new bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=2*Un*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;i===t.fov&&n===t.aspect&&s===t.far||(t.fov=i,t.aspect=n,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ks=class extends Hn{constructor(e,t,i=0,n=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.target=new rt,this.distance=i,this.angle=n,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new _c}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Du=new Ue,cs=new T,oc=new T,vc=class extends Gs{constructor(){super(new bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new J(4,2),this._viewportCount=6,this._viewports=[new Ye(2,1,1,1),new Ye(0,1,1,1),new Ye(3,1,1,1),new Ye(1,1,1,1),new Ye(3,0,1,1),new Ye(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,n=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),cs.setFromMatrixPosition(e.matrixWorld),i.position.copy(cs),oc.copy(i.position),oc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(oc),i.updateMatrixWorld(),n.makeTranslation(-cs.x,-cs.y,-cs.z),Du.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Du,i.coordinateSystem,i.reversedDepth)}},Gn=class extends Hn{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new vc}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Vs=class extends Ar{constructor(e=-1,t=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-e,a=i+e,o=n+t,c=n-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},xc=class extends Gs{constructor(){super(new Vs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Fr=class extends Hn{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.target=new rt,this.shadow=new xc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var p0=new Ue,m0=new Ue,f0=new Ue;var Do=class extends bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var g0=new T,_0=new Dt,v0=new T,x0=new T,y0=new T;var M0=new T,S0=new Dt,b0=new T,T0=new T;var dh="\\[\\]\\.:\\/",vm=new RegExp("["+dh+"]","g"),lc="[^"+dh+"]",xm="[^"+dh.replace("\\.","")+"]",ym=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",lc)+/(WCOD+)?/.source.replace("WCOD",xm)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lc)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lc)+"$"),Mm=["material","materials","bones","map"],Qe=class r{constructor(e,t,i){this.path=t,this.parsedPath=i||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,i):new r(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(vm,"")}static parseTrackName(e){let t=ym.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);Mm.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(l!==void 0){if(e[l]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[l]}}let a=e[n];if(a===void 0){let l=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+n+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Qe.Composite=class{constructor(r,e,t){let i=t||Qe.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,i)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,n=t.length;i!==n;++i)t[i].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},Qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Qe.prototype.GetterByBindingType=[Qe.prototype._getValue_direct,Qe.prototype._getValue_array,Qe.prototype._getValue_arrayElement,Qe.prototype._getValue_toArray],Qe.prototype.SetterByBindingTypeAndVersioning=[[Qe.prototype._setValue_direct,Qe.prototype._setValue_direct_setNeedsUpdate,Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_array,Qe.prototype._setValue_array_setNeedsUpdate,Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_arrayElement,Qe.prototype._setValue_arrayElement_setNeedsUpdate,Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_fromArray,Qe.prototype._setValue_fromArray_setNeedsUpdate,Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var E0=new Float32Array(1);var Uu=new Ue,Ws=class{constructor(e,t,i=0,n=1/0){this.ray=new Li(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new wr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Uu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Uu),this}intersectObject(e,t=!0,i=[]){return yc(e,this,i,t),i.sort(Nu),i}intersectObjects(e,t=!0,i=[]){for(let n=0,s=e.length;n<s;n++)yc(e[n],this,i,t);return i.sort(Nu),i}};function Nu(r,e){return r.distance-e.distance}function yc(r,e,t,i){let n=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){let s=r.children;for(let a=0,o=s.length;a<o;a++)yc(s[a],e,t,!0)}}var gn=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=De(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(De(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var w0=new J;var A0=new T,R0=new T,C0=new T,P0=new T,I0=new T,L0=new T,D0=new T;var U0=new T;var N0=new T,O0=new Ue,F0=new Ue;var B0=new T,z0=new Se,H0=new Se;var Xs=class extends so{constructor(e=10,t=10,i=4473924,n=8947848){i=new Se(i),n=new Se(n);let s=t/2,a=e/t,o=e/2,c=[],l=[];for(let d=0,u=0,p=-o;d<=t;d++,p+=a){c.push(-o,0,p,o,0,p),c.push(p,0,-o,p,0,o);let f=d===s?i:n;f.toArray(l,u),u+=3,f.toArray(l,u),u+=3,f.toArray(l,u),u+=3,f.toArray(l,u),u+=3}let h=new et;h.setAttribute("position",new ye(c,3)),h.setAttribute("color",new ye(l,3)),super(h,new ws({vertexColors:!0,toneMapped:!1})),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var G0=new T,k0=new T,V0=new T;var W0=new T,X0=new Ar;var j0=new ti;var q0=new T;var js=class extends Pi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){e!==void 0?(this.domElement!==null&&this.disconnect(),this.domElement=e):console.warn("THREE.Controls: connect() now requires an element.")}disconnect(){}dispose(){}update(){}};function ph(r,e,t,i){let n=(function(s){switch(s){case Ui:case wc:return{byteLength:1,components:1};case Gr:case Ac:case kr:return{byteLength:2,components:1};case qo:case Yo:return{byteLength:2,components:4};case Wn:case jo:case _i:return{byteLength:4,components:1};case Rc:case Cc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)})(i);switch(t){case 1021:return r*e;case Zo:case Jo:return r*e/n.components*n.byteLength;case 1030:case 1031:return r*e*2/n.components*n.byteLength;case 1022:return r*e*3/n.components*n.byteLength;case vi:case 1033:return r*e*4/n.components*n.byteLength;case 33776:case 33777:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(r,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(r,8)*Math.max(e,8)/2;case 36196:case 37492:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37808:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(r/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(r/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function sp(){let r=null,e=!1,t=null,i=null;function n(s,a){t(s,a),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function bm(r){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let i=e.get(t);i&&(r.deleteBuffer(i.buffer),e.delete(t))},update:function(t,i){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let n=e.get(t);if(n===void 0)e.set(t,(function(s,a){let o=s.array,c=s.usage,l=o.byteLength,h=r.createBuffer(),d;if(r.bindBuffer(a,h),r.bufferData(a,o,c),s.onUploadCallback(),o instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)d=r.HALF_FLOAT;else if(o instanceof Uint16Array)d=s.isFloat16BufferAttribute?r.HALF_FLOAT:r.UNSIGNED_SHORT;else if(o instanceof Int16Array)d=r.SHORT;else if(o instanceof Uint32Array)d=r.UNSIGNED_INT;else if(o instanceof Int32Array)d=r.INT;else if(o instanceof Int8Array)d=r.BYTE;else if(o instanceof Uint8Array)d=r.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);d=r.UNSIGNED_BYTE}return{buffer:h,type:d,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:l}})(t,i));else if(n.version<t.version){if(n.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let c=a.array,l=a.updateRanges;if(r.bindBuffer(o,s),l.length===0)r.bufferSubData(o,0,c);else{l.sort((d,u)=>d.start-u.start);let h=0;for(let d=1;d<l.length;d++){let u=l[h],p=l[d];p.start<=u.start+u.count+1?u.count=Math.max(u.count,p.start+p.count-u.start):(++h,l[h]=p)}l.length=h+1;for(let d=0,u=l.length;d<u;d++){let p=l[d];r.bufferSubData(o,p.start*c.BYTES_PER_ELEMENT,c,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(n.buffer,t,i),n.version=t.version}}}}var Ne={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},ae={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new J(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},Ni={basic:{uniforms:Ut([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Ut([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Se(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Ut([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Ut([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Ut([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Se(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Ut([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Ut([ae.points,ae.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Ut([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Ut([ae.common,ae.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Ut([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Ut([ae.sprite,ae.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:Ut([ae.common,ae.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:Ut([ae.lights,ae.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};Ni.physical={uniforms:Ut([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new J(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new J},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};var tl={r:0,b:0,g:0},qn=new ni,Tm=new Ue;function Em(r,e,t,i,n,s,a){let o=new Se(0),c,l,h=s===!0?0:1,d=null,u=0,p=null;function f(m){let g=m.isScene===!0?m.background:null;return g&&g.isTexture&&(g=(m.backgroundBlurriness>0?t:e).get(g)),g}function _(m,g){m.getRGB(tl,hh(r)),i.buffers.color.setClear(tl.r,tl.g,tl.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(m,g=1){o.set(m),h=g,_(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(m){h=m,_(o,h)},render:function(m){let g=!1,v=f(m);v===null?_(o,h):v&&v.isColor&&(_(v,1),g=!0);let x=r.xr.getEnvironmentBlendMode();x==="additive"?i.buffers.color.setClear(0,0,0,1,a):x==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(r.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))},addToRenderList:function(m,g){let v=f(g);v&&(v.isCubeTexture||v.mapping===Zs)?(l===void 0&&(l=new tt(new fi(1,1,1),new zt({name:"BackgroundCubeMaterial",uniforms:jn(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(x,M,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),qn.copy(g.backgroundRotation),qn.x*=-1,qn.y*=-1,qn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),l.material.uniforms.envMap.value=v,l.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Tm.makeRotationFromEuler(qn)),l.material.toneMapped=Ve.getTransfer(v.colorSpace)!==Ke,d===v&&u===v.version&&p===r.toneMapping||(l.material.needsUpdate=!0,d=v,u=v.version,p=r.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new tt(new kt(2,2),new zt({name:"BackgroundMaterial",uniforms:jn(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:Br,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=Ve.getTransfer(v.colorSpace)!==Ke,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),d===v&&u===v.version&&p===r.toneMapping||(c.material.needsUpdate=!0,d=v,u=v.version,p=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))},dispose:function(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}}}function wm(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=l(null),s=n,a=!1;function o(g){return r.bindVertexArray(g)}function c(g){return r.deleteVertexArray(g)}function l(g){let v=[],x=[],M=[];for(let A=0;A<t;A++)v[A]=0,x[A]=0,M[A]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:x,attributeDivisors:M,object:g,attributes:{},index:null}}function h(){let g=s.newAttributes;for(let v=0,x=g.length;v<x;v++)g[v]=0}function d(g){u(g,0)}function u(g,v){let x=s.newAttributes,M=s.enabledAttributes,A=s.attributeDivisors;x[g]=1,M[g]===0&&(r.enableVertexAttribArray(g),M[g]=1),A[g]!==v&&(r.vertexAttribDivisor(g,v),A[g]=v)}function p(){let g=s.newAttributes,v=s.enabledAttributes;for(let x=0,M=v.length;x<M;x++)v[x]!==g[x]&&(r.disableVertexAttribArray(x),v[x]=0)}function f(g,v,x,M,A,R,U){U===!0?r.vertexAttribIPointer(g,v,x,A,R):r.vertexAttribPointer(g,v,x,M,A,R)}function _(){m(),a=!0,s!==n&&(s=n,o(s.object))}function m(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:function(g,v,x,M,A){let R=!1,U=(function(F,D,k){let V=k.wireframe===!0,O=i[F.id];O===void 0&&(O={},i[F.id]=O);let Y=O[D.id];Y===void 0&&(Y={},O[D.id]=Y);let H=Y[V];return H===void 0&&(H=l(r.createVertexArray()),Y[V]=H),H})(M,x,v);s!==U&&(s=U,o(s.object)),R=(function(F,D,k,V){let O=s.attributes,Y=D.attributes,H=0,q=k.getAttributes();for(let Z in q)if(q[Z].location>=0){let ne=O[Z],$=Y[Z];if($===void 0&&(Z==="instanceMatrix"&&F.instanceMatrix&&($=F.instanceMatrix),Z==="instanceColor"&&F.instanceColor&&($=F.instanceColor)),ne===void 0||ne.attribute!==$||$&&ne.data!==$.data)return!0;H++}return s.attributesNum!==H||s.index!==V})(g,M,x,A),R&&(function(F,D,k,V){let O={},Y=D.attributes,H=0,q=k.getAttributes();for(let Z in q)if(q[Z].location>=0){let ne=Y[Z];ne===void 0&&(Z==="instanceMatrix"&&F.instanceMatrix&&(ne=F.instanceMatrix),Z==="instanceColor"&&F.instanceColor&&(ne=F.instanceColor));let $={};$.attribute=ne,ne&&ne.data&&($.data=ne.data),O[Z]=$,H++}s.attributes=O,s.attributesNum=H,s.index=V})(g,M,x,A),A!==null&&e.update(A,r.ELEMENT_ARRAY_BUFFER),(R||a)&&(a=!1,(function(F,D,k,V){h();let O=V.attributes,Y=k.getAttributes(),H=D.defaultAttributeValues;for(let q in Y){let Z=Y[q];if(Z.location>=0){let ne=O[q];if(ne===void 0&&(q==="instanceMatrix"&&F.instanceMatrix&&(ne=F.instanceMatrix),q==="instanceColor"&&F.instanceColor&&(ne=F.instanceColor)),ne!==void 0){let $=ne.normalized,me=ne.itemSize,xe=e.get(ne);if(xe===void 0)continue;let ge=xe.buffer,Ee=xe.type,ie=xe.bytesPerElement,se=Ee===r.INT||Ee===r.UNSIGNED_INT||ne.gpuType===jo;if(ne.isInterleavedBufferAttribute){let re=ne.data,be=re.stride,Le=ne.offset;if(re.isInstancedInterleavedBuffer){for(let b=0;b<Z.locationSize;b++)u(Z.location+b,re.meshPerAttribute);F.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let b=0;b<Z.locationSize;b++)d(Z.location+b);r.bindBuffer(r.ARRAY_BUFFER,ge);for(let b=0;b<Z.locationSize;b++)f(Z.location+b,me/Z.locationSize,Ee,$,be*ie,(Le+me/Z.locationSize*b)*ie,se)}else{if(ne.isInstancedBufferAttribute){for(let re=0;re<Z.locationSize;re++)u(Z.location+re,ne.meshPerAttribute);F.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let re=0;re<Z.locationSize;re++)d(Z.location+re);r.bindBuffer(r.ARRAY_BUFFER,ge);for(let re=0;re<Z.locationSize;re++)f(Z.location+re,me/Z.locationSize,Ee,$,me*ie,me/Z.locationSize*re*ie,se)}}else if(H!==void 0){let $=H[q];if($!==void 0)switch($.length){case 2:r.vertexAttrib2fv(Z.location,$);break;case 3:r.vertexAttrib3fv(Z.location,$);break;case 4:r.vertexAttrib4fv(Z.location,$);break;default:r.vertexAttrib1fv(Z.location,$)}}}}p()})(g,v,x,M),A!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(A).buffer))},reset:_,resetDefaultState:m,dispose:function(){_();for(let g in i){let v=i[g];for(let x in v){let M=v[x];for(let A in M)c(M[A].object),delete M[A];delete v[x]}delete i[g]}},releaseStatesOfGeometry:function(g){if(i[g.id]===void 0)return;let v=i[g.id];for(let x in v){let M=v[x];for(let A in M)c(M[A].object),delete M[A];delete v[x]}delete i[g.id]},releaseStatesOfProgram:function(g){for(let v in i){let x=i[v];if(x[g.id]===void 0)continue;let M=x[g.id];for(let A in M)c(M[A].object),delete M[A];delete x[g.id]}},initAttributes:h,enableAttribute:d,disableUnusedAttributes:p}}function Am(r,e,t){let i;function n(s,a,o){o!==0&&(r.drawArraysInstanced(i,s,a,o),t.update(a,i,o))}this.setMode=function(s){i=s},this.render=function(s,a){r.drawArrays(i,s,a),t.update(a,i,1)},this.renderInstances=n,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,s,0,a,0,o);let c=0;for(let l=0;l<o;l++)c+=a[l];t.update(c,i,1)},this.renderMultiDrawInstances=function(s,a,o,c){if(o===0)return;let l=e.get("WEBGL_multi_draw");if(l===null)for(let h=0;h<s.length;h++)n(s[h],a[h],c[h]);else{l.multiDrawArraysInstancedWEBGL(i,s,0,a,0,c,0,o);let h=0;for(let d=0;d<o;d++)h+=a[d]*c[d];t.update(h,i,1)}}}function Rm(r,e,t,i){let n;function s(u){if(u==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";u="mediump"}return u==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let c=t.logarithmicDepthBuffer===!0,l=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let u=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(u.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:s,textureFormatReadable:function(u){return u===vi||i.convert(u)===r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(u){let p=u===kr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(u!==Ui&&i.convert(u)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&u!==_i&&!p)},precision:a,logarithmicDepthBuffer:c,reversedDepthBuffer:l,maxTextures:h,maxVertexTextures:d,maxTextureSize:r.getParameter(r.MAX_TEXTURE_SIZE),maxCubemapSize:r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:r.getParameter(r.MAX_VERTEX_ATTRIBS),maxVertexUniforms:r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:r.getParameter(r.MAX_VARYING_VECTORS),maxFragmentUniforms:r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:d>0,maxSamples:r.getParameter(r.MAX_SAMPLES)}}function Cm(r){let e=this,t=null,i=0,n=!1,s=!1,a=new ei,o=new Ie,c={value:null,needsUpdate:!1};function l(h,d,u,p){let f=h!==null?h.length:0,_=null;if(f!==0){if(_=c.value,p!==!0||_===null){let m=u+4*f,g=d.matrixWorldInverse;o.getNormalMatrix(g),(_===null||_.length<m)&&(_=new Float32Array(m));for(let v=0,x=u;v!==f;++v,x+=4)a.copy(h[v]).applyMatrix4(g,o),a.normal.toArray(_,x),_[x+3]=a.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,_}this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let u=h.length!==0||d||i!==0||n;return n=d,i=h.length,u},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=l(h,d,0)},this.setState=function(h,d,u){let p=h.clippingPlanes,f=h.clipIntersection,_=h.clipShadows,m=r.get(h);if(!n||p===null||p.length===0||s&&!_)s?l(null):(function(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0})();else{let g=s?0:i,v=4*g,x=m.clippingState||null;c.value=x,x=l(p,d,v,u);for(let M=0;M!==v;++M)x[M]=t[M];m.clippingState=x,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=g}}}function Pm(r){let e=new WeakMap;function t(n,s){return s===Vo?n.mapping=Hr:s===Wo&&(n.mapping=kn),n}function i(n){let s=n.target;s.removeEventListener("dispose",i);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(n){if(n&&n.isTexture){let s=n.mapping;if(s===Vo||s===Wo){if(e.has(n))return t(e.get(n).texture,n.mapping);{let a=n.image;if(a&&a.height>0){let o=new $a(a.height);return o.fromEquirectangularTexture(r,n),e.set(n,o),n.addEventListener("dispose",i),t(o.texture,n.mapping)}return null}}}return n},dispose:function(){e=new WeakMap}}}var Od=[.125,.215,.35,.446,.526,.582],ea=20,mh=new Vs,Fd=new Se,fh=null,gh=0,_h=0,vh=!1,Zn=(1+Math.sqrt(5))/2,Wr=1/Zn,Bd=[new T(-Zn,Wr,0),new T(Zn,Wr,0),new T(-Wr,0,Zn),new T(Wr,0,Zn),new T(0,Zn,-Wr),new T(0,Zn,Wr),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],Im=new T,jr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100,s={}){let{size:a=256,position:o=Im}=s;fh=this._renderer.getRenderTarget(),gh=this._renderer.getActiveCubeFace(),_h=this._renderer.getActiveMipmapLevel(),vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,n,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fh,gh,_h),this._renderer.xr.enabled=vh,e.scissorTest=!1,il(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hr||e.mapping===kn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fh=this._renderer.getRenderTarget(),gh=this._renderer.getActiveCubeFace(),_h=this._renderer.getActiveMipmapLevel(),vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ci,minFilter:Ci,generateMipmaps:!1,type:kr,format:vi,colorSpace:Dn,depthBuffer:!1},n=zd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zd(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(a){let o=[],c=[],l=[],h=a,d=a-4+1+Od.length;for(let u=0;u<d;u++){let p=Math.pow(2,h);c.push(p);let f=1/p;u>a-4?f=Od[u-a+4-1]:u===0&&(f=0),l.push(f);let _=1/(p-2),m=-_,g=1+_,v=[m,m,g,m,g,g,m,m,g,g,m,g],x=6,M=6,A=3,R=2,U=1,F=new Float32Array(A*M*x),D=new Float32Array(R*M*x),k=new Float32Array(U*M*x);for(let O=0;O<x;O++){let Y=O%3*2/3-1,H=O>2?0:-1,q=[Y,H,0,Y+2/3,H,0,Y+2/3,H+1,0,Y,H,0,Y+2/3,H+1,0,Y,H+1,0];F.set(q,A*M*O),D.set(v,R*M*O);let Z=[O,O,O,O,O,O];k.set(Z,U*M*O)}let V=new et;V.setAttribute("position",new Ft(F,A)),V.setAttribute("uv",new Ft(D,R)),V.setAttribute("faceIndex",new Ft(k,U)),o.push(V),h>4&&h--}return{lodPlanes:o,sizeLods:c,sigmas:l}})(s)),this._blurMaterial=(function(a,o,c){let l=new Float32Array(ea),h=new T(0,1,0);return new zt({name:"SphericalGaussianBlur",defines:{n:ea,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:l},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})})(s,e,t)}return n}_compileMaterial(e){let t=new tt(this._lodPlanes[0],e);this._renderer.compile(t,mh)}_sceneToCubeUV(e,t,i,n,s){let a=new bt(90,1,t,i),o=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,d=l.toneMapping;l.getClearColor(Fd),l.toneMapping=Qi,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(n),l.clearDepth(),l.setRenderTarget(null));let u=new Bt({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),p=new tt(new fi,u),f=!1,_=e.background;_?_.isColor&&(u.color.copy(_),e.background=null,f=!0):(u.color.copy(Fd),f=!0);for(let m=0;m<6;m++){let g=m%3;g===0?(a.up.set(0,o[m],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x+c[m],s.y,s.z)):g===1?(a.up.set(0,0,o[m]),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y+c[m],s.z)):(a.up.set(0,o[m],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y,s.z+c[m]));let v=this._cubeSize;il(n,g*v,m>2?v:0,v,v),l.setRenderTarget(n),f&&l.render(p,a),l.render(e,a)}p.geometry.dispose(),p.material.dispose(),l.toneMapping=d,l.autoClear=h,e.background=_}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===Hr||e.mapping===kn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hd());let s=n?this._cubemapMaterial:this._equirectMaterial,a=new tt(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;il(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,mh)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let n=this._lodPlanes.length;for(let s=1;s<n;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Bd[(n-s-1)%Bd.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,n,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",s),this._halfBlur(a,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new tt(this._lodPlanes[n],l),d=l.uniforms,u=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*u):2*Math.PI/39,f=s/p,_=isFinite(s)?1+Math.floor(3*f):ea;_>ea&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to 20`);let m=[],g=0;for(let M=0;M<ea;++M){let A=M/f,R=Math.exp(-A*A/2);m.push(R),M===0?g+=R:M<_&&(g+=2*R)}for(let M=0;M<m.length;M++)m[M]=m[M]/g;d.envMap.value=e.texture,d.samples.value=_,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:v}=this;d.dTheta.value=p,d.mipInt.value=v-i;let x=this._sizeLods[n];il(t,3*x*(n>v-4?n-v+4:0),4*(this._cubeSize-x),3*x,2*x),c.setRenderTarget(t),c.render(h,mh)}};function zd(r,e,t){let i=new Ii(r,e,t);return i.texture.mapping=Zs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function il(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function Hd(){return new zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function Gd(){return new zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function Rh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Lm(r){let e=new WeakMap,t=null;function i(n){let s=n.target;s.removeEventListener("dispose",i);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(n){if(n&&n.isTexture){let s=n.mapping,a=s===Vo||s===Wo,o=s===Hr||s===kn;if(a||o){let c=e.get(n),l=c!==void 0?c.texture.pmremVersion:0;if(n.isRenderTargetTexture&&n.pmremVersion!==l)return t===null&&(t=new jr(r)),c=a?t.fromEquirectangular(n,c):t.fromCubemap(n,c),c.texture.pmremVersion=n.pmremVersion,e.set(n,c),c.texture;if(c!==void 0)return c.texture;{let h=n.image;return a&&h&&h.height>0||o&&h&&(function(d){let u=0,p=6;for(let f=0;f<p;f++)d[f]!==void 0&&u++;return u===p})(h)?(t===null&&(t=new jr(r)),c=a?t.fromEquirectangular(n):t.fromCubemap(n),c.texture.pmremVersion=n.pmremVersion,e.set(n,c),n.addEventListener("dispose",i),c.texture):null}}}return n},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function Dm(r){let e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&Tr("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Um(r,e,t,i){let n={},s=new WeakMap;function a(c){let l=c.target;l.index!==null&&e.remove(l.index);for(let d in l.attributes)e.remove(l.attributes[d]);l.removeEventListener("dispose",a),delete n[l.id];let h=s.get(l);h&&(e.remove(h),s.delete(l)),i.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,t.memory.geometries--}function o(c){let l=[],h=c.index,d=c.attributes.position,u=0;if(h!==null){let _=h.array;u=h.version;for(let m=0,g=_.length;m<g;m+=3){let v=_[m+0],x=_[m+1],M=_[m+2];l.push(v,x,x,M,M,v)}}else{if(d===void 0)return;{let _=d.array;u=d.version;for(let m=0,g=_.length/3-1;m<g;m+=3){let v=m+0,x=m+1,M=m+2;l.push(v,x,x,M,M,v)}}}let p=new(ch(l)?ys:xs)(l,1);p.version=u;let f=s.get(c);f&&e.remove(f),s.set(c,p)}return{get:function(c,l){return n[l.id]===!0||(l.addEventListener("dispose",a),n[l.id]=!0,t.memory.geometries++),l},update:function(c){let l=c.attributes;for(let h in l)e.update(l[h],r.ARRAY_BUFFER)},getWireframeAttribute:function(c){let l=s.get(c);if(l){let h=c.index;h!==null&&l.version<h.version&&o(c)}else o(c);return s.get(c)}}}function Nm(r,e,t){let i,n,s;function a(o,c,l){l!==0&&(r.drawElementsInstanced(i,c,n,o*s,l),t.update(c,i,l))}this.setMode=function(o){i=o},this.setIndex=function(o){n=o.type,s=o.bytesPerElement},this.render=function(o,c){r.drawElements(i,c,n,o*s),t.update(c,i,1)},this.renderInstances=a,this.renderMultiDraw=function(o,c,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,c,0,n,o,0,l);let h=0;for(let d=0;d<l;d++)h+=c[d];t.update(h,i,1)},this.renderMultiDrawInstances=function(o,c,l,h){if(l===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let u=0;u<o.length;u++)a(o[u]/s,c[u],h[u]);else{d.multiDrawElementsInstancedWEBGL(i,c,0,n,o,0,h,0,l);let u=0;for(let p=0;p<l;p++)u+=c[p]*h[p];t.update(u,i,1)}}}function Om(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,n){switch(e.calls++,i){case r.TRIANGLES:e.triangles+=n*(t/3);break;case r.LINES:e.lines+=n*(t/2);break;case r.LINE_STRIP:e.lines+=n*(t-1);break;case r.LINE_LOOP:e.lines+=n*t;break;case r.POINTS:e.points+=n*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i)}}}}function Fm(r,e,t){let i=new WeakMap,n=new Ye;return{update:function(s,a,o){let c=s.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=l!==void 0?l.length:0,d=i.get(a);if(d===void 0||d.count!==h){let F=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",F)};d!==void 0&&d.texture.dispose();let u=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],g=a.morphAttributes.color||[],v=0;u===!0&&(v=1),p===!0&&(v=2),f===!0&&(v=3);let x=a.attributes.position.count*v,M=1;x>e.maxTextureSize&&(M=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let A=new Float32Array(x*M*4*h),R=new vs(A,x,M,h);R.type=_i,R.needsUpdate=!0;let U=4*v;for(let D=0;D<h;D++){let k=_[D],V=m[D],O=g[D],Y=x*M*4*D;for(let H=0;H<k.count;H++){let q=H*U;u===!0&&(n.fromBufferAttribute(k,H),A[Y+q+0]=n.x,A[Y+q+1]=n.y,A[Y+q+2]=n.z,A[Y+q+3]=0),p===!0&&(n.fromBufferAttribute(V,H),A[Y+q+4]=n.x,A[Y+q+5]=n.y,A[Y+q+6]=n.z,A[Y+q+7]=0),f===!0&&(n.fromBufferAttribute(O,H),A[Y+q+8]=n.x,A[Y+q+9]=n.y,A[Y+q+10]=n.z,A[Y+q+11]=O.itemSize===4?n.w:1)}}d={count:h,texture:R,size:new J(x,M)},i.set(a,d),a.addEventListener("dispose",F)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(r,"morphTexture",s.morphTexture,t);else{let u=0;for(let f=0;f<c.length;f++)u+=c[f];let p=a.morphTargetsRelative?1:1-u;o.getUniforms().setValue(r,"morphTargetBaseInfluence",p),o.getUniforms().setValue(r,"morphTargetInfluences",c)}o.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),o.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}}}function Bm(r,e,t,i){let n=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=i.render.frame,c=a.geometry,l=e.get(a,c);if(n.get(l)!==o&&(e.update(l),n.set(l,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),n.get(a)!==o&&(t.update(a.instanceMatrix,r.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,r.ARRAY_BUFFER),n.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;n.get(h)!==o&&(h.update(),n.set(h,o))}return l},dispose:function(){n=new WeakMap}}}var ap=new Ot,kd=new As(1,1),op=new vs,lp=new Ja,cp=new Ms,Vd=[],Wd=[],Xd=new Float32Array(16),jd=new Float32Array(9),qd=new Float32Array(4);function qr(r,e,t){let i=r[0];if(i<=0||i>0)return r;let n=e*t,s=Vd[n];if(s===void 0&&(s=new Float32Array(n),Vd[n]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function _t(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function vt(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function sl(r,e){let t=Wd[e];t===void 0&&(t=new Int32Array(e),Wd[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function zm(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Hm(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;r.uniform2fv(this.addr,e),vt(t,e)}}function Gm(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;r.uniform3fv(this.addr,e),vt(t,e)}}function km(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;r.uniform4fv(this.addr,e),vt(t,e)}}function Vm(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,i))return;qd.set(i),r.uniformMatrix2fv(this.addr,!1,qd),vt(t,i)}}function Wm(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,i))return;jd.set(i),r.uniformMatrix3fv(this.addr,!1,jd),vt(t,i)}}function Xm(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,i))return;Xd.set(i),r.uniformMatrix4fv(this.addr,!1,Xd),vt(t,i)}}function jm(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function qm(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;r.uniform2iv(this.addr,e),vt(t,e)}}function Ym(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;r.uniform3iv(this.addr,e),vt(t,e)}}function Zm(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;r.uniform4iv(this.addr,e),vt(t,e)}}function Jm(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Km(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;r.uniform2uiv(this.addr,e),vt(t,e)}}function $m(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;r.uniform3uiv(this.addr,e),vt(t,e)}}function Qm(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;r.uniform4uiv(this.addr,e),vt(t,e)}}function ef(r,e,t){let i=this.cache,n=t.allocateTextureUnit(),s;i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),this.type===r.SAMPLER_2D_SHADOW?(kd.compareFunction=ah,s=kd):s=ap,t.setTexture2D(e||s,n)}function tf(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||lp,n)}function nf(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||cp,n)}function rf(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||op,n)}function sf(r,e){r.uniform1fv(this.addr,e)}function af(r,e){let t=qr(e,this.size,2);r.uniform2fv(this.addr,t)}function of(r,e){let t=qr(e,this.size,3);r.uniform3fv(this.addr,t)}function lf(r,e){let t=qr(e,this.size,4);r.uniform4fv(this.addr,t)}function cf(r,e){let t=qr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function hf(r,e){let t=qr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function uf(r,e){let t=qr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function df(r,e){r.uniform1iv(this.addr,e)}function pf(r,e){r.uniform2iv(this.addr,e)}function mf(r,e){r.uniform3iv(this.addr,e)}function ff(r,e){r.uniform4iv(this.addr,e)}function gf(r,e){r.uniform1uiv(this.addr,e)}function _f(r,e){r.uniform2uiv(this.addr,e)}function vf(r,e){r.uniform3uiv(this.addr,e)}function xf(r,e){r.uniform4uiv(this.addr,e)}function yf(r,e,t){let i=this.cache,n=e.length,s=sl(t,n);_t(i,s)||(r.uniform1iv(this.addr,s),vt(i,s));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||ap,s[a])}function Mf(r,e,t){let i=this.cache,n=e.length,s=sl(t,n);_t(i,s)||(r.uniform1iv(this.addr,s),vt(i,s));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||lp,s[a])}function Sf(r,e,t){let i=this.cache,n=e.length,s=sl(t,n);_t(i,s)||(r.uniform1iv(this.addr,s),vt(i,s));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||cp,s[a])}function bf(r,e,t){let i=this.cache,n=e.length,s=sl(t,n);_t(i,s)||(r.uniform1iv(this.addr,s),vt(i,s));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||op,s[a])}var yh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=(function(n){switch(n){case 5126:return zm;case 35664:return Hm;case 35665:return Gm;case 35666:return km;case 35674:return Vm;case 35675:return Wm;case 35676:return Xm;case 5124:case 35670:return jm;case 35667:case 35671:return qm;case 35668:case 35672:return Ym;case 35669:case 35673:return Zm;case 5125:return Jm;case 36294:return Km;case 36295:return $m;case 36296:return Qm;case 35678:case 36198:case 36298:case 36306:case 35682:return ef;case 35679:case 36299:case 36307:return tf;case 35680:case 36300:case 36308:case 36293:return nf;case 36289:case 36303:case 36311:case 36292:return rf}})(t.type)}},Mh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(n){switch(n){case 5126:return sf;case 35664:return af;case 35665:return of;case 35666:return lf;case 35674:return cf;case 35675:return hf;case 35676:return uf;case 5124:case 35670:return df;case 35667:case 35671:return pf;case 35668:case 35672:return mf;case 35669:case 35673:return ff;case 5125:return gf;case 36294:return _f;case 36295:return vf;case 36296:return xf;case 35678:case 36198:case 36298:case 36306:case 35682:return yf;case 35679:case 36299:case 36307:return Mf;case 35680:case 36300:case 36308:case 36293:return Sf;case 36289:case 36303:case 36311:case 36292:return bf}})(t.type)}},Sh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let o=n[s];o.setValue(e,t[o.id],i)}}},xh=/(\w+)(\])?(\[|\.)?/g;function Yd(r,e){r.seq.push(e),r.map[e.id]=e}function Tf(r,e,t){let i=r.name,n=i.length;for(xh.lastIndex=0;;){let s=xh.exec(i),a=xh.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o|=0),l===void 0||l==="["&&a+2===n){Yd(t,l===void 0?new yh(o,r,e):new Mh(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new Sh(o),Yd(t,h)),t=h}}}var Xr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=e.getActiveUniform(t,n);Tf(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,i,n){let s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,s=e.length;n!==s;++n){let a=e[n];a.id in t&&i.push(a)}return i}};function Zd(r,e,t){let i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}var Ef=0,Jd=new Ie;function Kd(r,e,t){let i=r.getShaderParameter(e,r.COMPILE_STATUS),n=(r.getShaderInfoLog(e)||"").trim();if(i&&n==="")return"";let s=/ERROR: 0:(\d+)/.exec(n);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+(function(o,c){let l=o.split(`
`),h=[],d=Math.max(c-6,0),u=Math.min(c+6,l.length);for(let p=d;p<u;p++){let f=p+1;h.push(`${f===c?">":" "} ${f}: ${l[p]}`)}return h.join(`
`)})(r.getShaderSource(e),a)}return n}function wf(r,e){let t=(function(i){Ve._getMatrix(Jd,Ve.workingColorSpace,i);let n=`mat3( ${Jd.elements.map(s=>s.toFixed(4))} )`;switch(Ve.getTransfer(i)){case fs:return[n,"LinearTransferOETF"];case Ke:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[n,"LinearTransferOETF"]}})(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Af(r,e){let t;switch(e){case od:t="Linear";break;case ld:t="Reinhard";break;case cd:t="Cineon";break;case ko:t="ACESFilmic";break;case ud:t="AgX";break;case dd:t="Neutral";break;case hd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var nl=new T;function Rf(){return Ve.getLuminanceCoefficients(nl),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${nl.x.toFixed(4)}, ${nl.y.toFixed(4)}, ${nl.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ta(r){return r!==""}function $d(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Cf=/^[ \t]*#include +<([\w\d./]+)>/gm;function bh(r){return r.replace(Cf,If)}var Pf=new Map;function If(r,e){let t=Ne[e];if(t===void 0){let i=Pf.get(e);if(i===void 0)throw new Error("Can not resolve #include <"+e+">");t=Ne[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return bh(t)}var Lf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ep(r){return r.replace(Lf,Df)}function Df(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function tp(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Uf(r,e,t,i){let n=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=(function(V){let O="SHADOWMAP_TYPE_BASIC";return V.shadowMapType===Sc?O="SHADOWMAP_TYPE_PCF":V.shadowMapType===Uo?O="SHADOWMAP_TYPE_PCF_SOFT":V.shadowMapType===Di&&(O="SHADOWMAP_TYPE_VSM"),O})(t),l=(function(V){let O="ENVMAP_TYPE_CUBE";if(V.envMap)switch(V.envMapMode){case Hr:case kn:O="ENVMAP_TYPE_CUBE";break;case Zs:O="ENVMAP_TYPE_CUBE_UV"}return O})(t),h=(function(V){let O="ENVMAP_MODE_REFLECTION";return V.envMap&&V.envMapMode===kn&&(O="ENVMAP_MODE_REFRACTION"),O})(t),d=(function(V){let O="ENVMAP_BLENDING_NONE";if(V.envMap)switch(V.combine){case rd:O="ENVMAP_BLENDING_MULTIPLY";break;case sd:O="ENVMAP_BLENDING_MIX";break;case ad:O="ENVMAP_BLENDING_ADD"}return O})(t),u=(function(V){let O=V.envMapCubeUVHeight;if(O===null)return null;let Y=Math.log2(O)-2,H=1/O;return{texelWidth:1/(3*Math.max(Math.pow(2,Y),112)),texelHeight:H,maxMip:Y}})(t),p=(function(V){return[V.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",V.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ta).join(`
`)})(t),f=(function(V){let O=[];for(let Y in V){let H=V[Y];H!==!1&&O.push("#define "+Y+" "+H)}return O.join(`
`)})(s),_=n.createProgram(),m,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ta).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ta).join(`
`),g.length>0&&(g+=`
`)):(m=[tp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ta).join(`
`),g=[tp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qi?"#define TONE_MAPPING":"",t.toneMapping!==Qi?Ne.tonemapping_pars_fragment:"",t.toneMapping!==Qi?Af("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,wf("linearToOutputTexel",t.outputColorSpace),Rf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ta).join(`
`)),a=bh(a),a=$d(a,t),a=Qd(a,t),o=bh(o),o=$d(o,t),o=Qd(o,t),a=ep(a),o=ep(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let x=v+m+a,M=v+g+o,A=Zd(n,n.VERTEX_SHADER,x),R=Zd(n,n.FRAGMENT_SHADER,M);function U(V){if(r.debug.checkShaderErrors){let O=n.getProgramInfoLog(_)||"",Y=n.getShaderInfoLog(A)||"",H=n.getShaderInfoLog(R)||"",q=O.trim(),Z=Y.trim(),ne=H.trim(),$=!0,me=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,_,A,R);else{let xe=Kd(n,A,"vertex"),ge=Kd(n,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+q+`
`+xe+`
`+ge)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):Z!==""&&ne!==""||(me=!1);me&&(V.diagnostics={runnable:$,programLog:q,vertexShader:{log:Z,prefix:m},fragmentShader:{log:ne,prefix:g}})}n.deleteShader(A),n.deleteShader(R),F=new Xr(n,_),D=(function(O,Y){let H={},q=O.getProgramParameter(Y,O.ACTIVE_ATTRIBUTES);for(let Z=0;Z<q;Z++){let ne=O.getActiveAttrib(Y,Z),$=ne.name,me=1;ne.type===O.FLOAT_MAT2&&(me=2),ne.type===O.FLOAT_MAT3&&(me=3),ne.type===O.FLOAT_MAT4&&(me=4),H[$]={type:ne.type,location:O.getAttribLocation(Y,$),locationSize:me}}return H})(n,_)}let F,D;n.attachShader(_,A),n.attachShader(_,R),t.index0AttributeName!==void 0?n.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_),this.getUniforms=function(){return F===void 0&&U(this),F},this.getAttributes=function(){return D===void 0&&U(this),D};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=n.getProgramParameter(_,37297)),k},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ef++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=R,this}var Nf=0,Th=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Eh(e),t.set(e,i)),i}},Eh=class{constructor(e){this.id=Nf++,this.code=e,this.usedTimes=0}};function Of(r,e,t,i,n,s,a){let o=new wr,c=new Th,l=new Set,h=[],d=n.logarithmicDepthBuffer,u=n.vertexTextures,p=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(m){return l.add(m),m===0?"uv":`uv${m}`}return{getParameters:function(m,g,v,x,M){let A=x.fog,R=M.geometry,U=m.isMeshStandardMaterial?x.environment:null,F=(m.isMeshStandardMaterial?t:e).get(m.envMap||U),D=F&&F.mapping===Zs?F.image.height:null,k=f[m.type];m.precision!==null&&(p=n.getMaxPrecision(m.precision),p!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));let V=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,O=V!==void 0?V.length:0,Y,H,q,Z,ne=0;if(R.morphAttributes.position!==void 0&&(ne=1),R.morphAttributes.normal!==void 0&&(ne=2),R.morphAttributes.color!==void 0&&(ne=3),k){let Pt=Ni[k];Y=Pt.vertexShader,H=Pt.fragmentShader}else Y=m.vertexShader,H=m.fragmentShader,c.update(m),q=c.getVertexShaderID(m),Z=c.getFragmentShaderID(m);let $=r.getRenderTarget(),me=r.state.buffers.depth.getReversed(),xe=M.isInstancedMesh===!0,ge=M.isBatchedMesh===!0,Ee=!!m.map,ie=!!m.matcap,se=!!F,re=!!m.aoMap,be=!!m.lightMap,Le=!!m.bumpMap,b=!!m.normalMap,S=!!m.displacementMap,N=!!m.emissiveMap,P=!!m.metalnessMap,y=!!m.roughnessMap,w=m.anisotropy>0,L=m.clearcoat>0,C=m.dispersion>0,X=m.iridescence>0,B=m.sheen>0,z=m.transmission>0,ee=w&&!!m.anisotropyMap,oe=L&&!!m.clearcoatMap,te=L&&!!m.clearcoatNormalMap,de=L&&!!m.clearcoatRoughnessMap,_e=X&&!!m.iridescenceMap,Me=X&&!!m.iridescenceThicknessMap,ze=B&&!!m.sheenColorMap,Xe=B&&!!m.sheenRoughnessMap,je=!!m.specularMap,ce=!!m.specularColorMap,Te=!!m.specularIntensityMap,Be=z&&!!m.transmissionMap,Ct=z&&!!m.thicknessMap,fe=!!m.gradientMap,qe=!!m.alphaMap,He=m.alphaTest>0,ai=!!m.alphaHash,Gi=!!m.extensions,I=Qi;m.toneMapped&&($!==null&&$.isXRRenderTarget!==!0||(I=r.toneMapping));let Mt={shaderID:k,shaderType:m.type,shaderName:m.name,vertexShader:Y,fragmentShader:H,defines:m.defines,customVertexShaderID:q,customFragmentShaderID:Z,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,batching:ge,batchingColor:ge&&M._colorsTexture!==null,instancing:xe,instancingColor:xe&&M.instanceColor!==null,instancingMorph:xe&&M.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:$===null?r.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Dn,alphaToCoverage:!!m.alphaToCoverage,map:Ee,matcap:ie,envMap:se,envMapMode:se&&F.mapping,envMapCubeUVHeight:D,aoMap:re,lightMap:be,bumpMap:Le,normalMap:b,displacementMap:u&&S,emissiveMap:N,normalMapObjectSpace:b&&m.normalMapType===xd,normalMapTangentSpace:b&&m.normalMapType===vd,metalnessMap:P,roughnessMap:y,anisotropy:w,anisotropyMap:ee,clearcoat:L,clearcoatMap:oe,clearcoatNormalMap:te,clearcoatRoughnessMap:de,dispersion:C,iridescence:X,iridescenceMap:_e,iridescenceThicknessMap:Me,sheen:B,sheenColorMap:ze,sheenRoughnessMap:Xe,specularMap:je,specularColorMap:ce,specularIntensityMap:Te,transmission:z,transmissionMap:Be,thicknessMap:Ct,gradientMap:fe,opaque:m.transparent===!1&&m.blending===qs&&m.alphaToCoverage===!1,alphaMap:qe,alphaTest:He,alphaHash:ai,combine:m.combine,mapUv:Ee&&_(m.map.channel),aoMapUv:re&&_(m.aoMap.channel),lightMapUv:be&&_(m.lightMap.channel),bumpMapUv:Le&&_(m.bumpMap.channel),normalMapUv:b&&_(m.normalMap.channel),displacementMapUv:S&&_(m.displacementMap.channel),emissiveMapUv:N&&_(m.emissiveMap.channel),metalnessMapUv:P&&_(m.metalnessMap.channel),roughnessMapUv:y&&_(m.roughnessMap.channel),anisotropyMapUv:ee&&_(m.anisotropyMap.channel),clearcoatMapUv:oe&&_(m.clearcoatMap.channel),clearcoatNormalMapUv:te&&_(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&_(m.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&_(m.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&_(m.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&_(m.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&_(m.sheenRoughnessMap.channel),specularMapUv:je&&_(m.specularMap.channel),specularColorMapUv:ce&&_(m.specularColorMap.channel),specularIntensityMapUv:Te&&_(m.specularIntensityMap.channel),transmissionMapUv:Be&&_(m.transmissionMap.channel),thicknessMapUv:Ct&&_(m.thicknessMap.channel),alphaMapUv:qe&&_(m.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(b||w),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:M.isPoints===!0&&!!R.attributes.uv&&(Ee||qe),fog:!!A,useFog:m.fog===!0,fogExp2:!!A&&A.isFogExp2,flatShading:m.flatShading===!0&&m.wireframe===!1,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:me,skinning:M.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:ne,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:r.shadowMap.enabled&&v.length>0,shadowMapType:r.shadowMap.type,toneMapping:I,decodeVideoTexture:Ee&&m.map.isVideoTexture===!0&&Ve.getTransfer(m.map.colorSpace)===Ke,decodeVideoTextureEmissive:N&&m.emissiveMap.isVideoTexture===!0&&Ve.getTransfer(m.emissiveMap.colorSpace)===Ke,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===gt,flipSided:m.side===Ht,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:Gi&&m.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gi&&m.extensions.multiDraw===!0||ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return Mt.vertexUv1s=l.has(1),Mt.vertexUv2s=l.has(2),Mt.vertexUv3s=l.has(3),l.clear(),Mt},getProgramCacheKey:function(m){let g=[];if(m.shaderID?g.push(m.shaderID):(g.push(m.customVertexShaderID),g.push(m.customFragmentShaderID)),m.defines!==void 0)for(let v in m.defines)g.push(v),g.push(m.defines[v]);return m.isRawShaderMaterial===!1&&((function(v,x){v.push(x.precision),v.push(x.outputColorSpace),v.push(x.envMapMode),v.push(x.envMapCubeUVHeight),v.push(x.mapUv),v.push(x.alphaMapUv),v.push(x.lightMapUv),v.push(x.aoMapUv),v.push(x.bumpMapUv),v.push(x.normalMapUv),v.push(x.displacementMapUv),v.push(x.emissiveMapUv),v.push(x.metalnessMapUv),v.push(x.roughnessMapUv),v.push(x.anisotropyMapUv),v.push(x.clearcoatMapUv),v.push(x.clearcoatNormalMapUv),v.push(x.clearcoatRoughnessMapUv),v.push(x.iridescenceMapUv),v.push(x.iridescenceThicknessMapUv),v.push(x.sheenColorMapUv),v.push(x.sheenRoughnessMapUv),v.push(x.specularMapUv),v.push(x.specularColorMapUv),v.push(x.specularIntensityMapUv),v.push(x.transmissionMapUv),v.push(x.thicknessMapUv),v.push(x.combine),v.push(x.fogExp2),v.push(x.sizeAttenuation),v.push(x.morphTargetsCount),v.push(x.morphAttributeCount),v.push(x.numDirLights),v.push(x.numPointLights),v.push(x.numSpotLights),v.push(x.numSpotLightMaps),v.push(x.numHemiLights),v.push(x.numRectAreaLights),v.push(x.numDirLightShadows),v.push(x.numPointLightShadows),v.push(x.numSpotLightShadows),v.push(x.numSpotLightShadowsWithMaps),v.push(x.numLightProbes),v.push(x.shadowMapType),v.push(x.toneMapping),v.push(x.numClippingPlanes),v.push(x.numClipIntersection),v.push(x.depthPacking)})(g,m),(function(v,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),x.gradientMap&&o.enable(22),v.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reversedDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),v.push(o.mask)})(g,m),g.push(r.outputColorSpace)),g.push(m.customProgramCacheKey),g.join()},getUniforms:function(m){let g=f[m.type],v;if(g){let x=Ni[g];v=Pd.clone(x.uniforms)}else v=m.uniforms;return v},acquireProgram:function(m,g){let v;for(let x=0,M=h.length;x<M;x++){let A=h[x];if(A.cacheKey===g){v=A,++v.usedTimes;break}}return v===void 0&&(v=new Uf(r,g,m,s),h.push(v)),v},releaseProgram:function(m){if(--m.usedTimes===0){let g=h.indexOf(m);h[g]=h[h.length-1],h.pop(),m.destroy()}},releaseShaderCache:function(m){c.remove(m)},programs:h,dispose:function(){c.dispose()}}}function Ff(){let r=new WeakMap;return{has:function(e){return r.has(e)},get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,i){r.get(e)[t]=i},dispose:function(){r=new WeakMap}}}function Bf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function ip(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function np(){let r=[],e=0,t=[],i=[],n=[];function s(a,o,c,l,h,d){let u=r[e];return u===void 0?(u={id:a.id,object:a,geometry:o,material:c,groupOrder:l,renderOrder:a.renderOrder,z:h,group:d},r[e]=u):(u.id=a.id,u.object=a,u.geometry=o,u.material=c,u.groupOrder=l,u.renderOrder=a.renderOrder,u.z=h,u.group=d),e++,u}return{opaque:t,transmissive:i,transparent:n,init:function(){e=0,t.length=0,i.length=0,n.length=0},push:function(a,o,c,l,h,d){let u=s(a,o,c,l,h,d);c.transmission>0?i.push(u):c.transparent===!0?n.push(u):t.push(u)},unshift:function(a,o,c,l,h,d){let u=s(a,o,c,l,h,d);c.transmission>0?i.unshift(u):c.transparent===!0?n.unshift(u):t.unshift(u)},finish:function(){for(let a=e,o=r.length;a<o;a++){let c=r[a];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}},sort:function(a,o){t.length>1&&t.sort(a||Bf),i.length>1&&i.sort(o||ip),n.length>1&&n.sort(o||ip)}}}function zf(){let r=new WeakMap;return{get:function(e,t){let i=r.get(e),n;return i===void 0?(n=new np,r.set(e,[n])):t>=i.length?(n=new np,i.push(n)):n=i[t],n},dispose:function(){r=new WeakMap}}}function Hf(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new Se};break;case"SpotLight":t={position:new T,direction:new T,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new T,halfWidth:new T,halfHeight:new T}}return r[e.id]=t,t}}}var Gf=0;function kf(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Vf(r){let e=new Hf,t=(function(){let o={};return{get:function(c){if(o[c.id]!==void 0)return o[c.id];let l;switch(c.type){case"DirectionalLight":case"SpotLight":l={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"PointLight":l={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1e3}}return o[c.id]=l,l}}})(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new T);let n=new T,s=new Ue,a=new Ue;return{setup:function(o){let c=0,l=0,h=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let d=0,u=0,p=0,f=0,_=0,m=0,g=0,v=0,x=0,M=0,A=0;o.sort(kf);for(let U=0,F=o.length;U<F;U++){let D=o[U],k=D.color,V=D.intensity,O=D.distance,Y=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)c+=k.r*V,l+=k.g*V,h+=k.b*V;else if(D.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(D.sh.coefficients[H],V);A++}else if(D.isDirectionalLight){let H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let q=D.shadow,Z=t.get(D);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,i.directionalShadow[d]=Z,i.directionalShadowMap[d]=Y,i.directionalShadowMatrix[d]=D.shadow.matrix,m++}i.directional[d]=H,d++}else if(D.isSpotLight){let H=e.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy(k).multiplyScalar(V),H.distance=O,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,i.spot[p]=H;let q=D.shadow;if(D.map&&(i.spotLightMap[x]=D.map,x++,q.updateMatrices(D),D.castShadow&&M++),i.spotLightMatrix[p]=q.matrix,D.castShadow){let Z=t.get(D);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,i.spotShadow[p]=Z,i.spotShadowMap[p]=Y,v++}p++}else if(D.isRectAreaLight){let H=e.get(D);H.color.copy(k).multiplyScalar(V),H.halfWidth.set(.5*D.width,0,0),H.halfHeight.set(0,.5*D.height,0),i.rectArea[f]=H,f++}else if(D.isPointLight){let H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),H.distance=D.distance,H.decay=D.decay,D.castShadow){let q=D.shadow,Z=t.get(D);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,Z.shadowCameraNear=q.camera.near,Z.shadowCameraFar=q.camera.far,i.pointShadow[u]=Z,i.pointShadowMap[u]=Y,i.pointShadowMatrix[u]=D.shadow.matrix,g++}i.point[u]=H,u++}else if(D.isHemisphereLight){let H=e.get(D);H.skyColor.copy(D.color).multiplyScalar(V),H.groundColor.copy(D.groundColor).multiplyScalar(V),i.hemi[_]=H,_++}}f>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=l,i.ambient[2]=h;let R=i.hash;R.directionalLength===d&&R.pointLength===u&&R.spotLength===p&&R.rectAreaLength===f&&R.hemiLength===_&&R.numDirectionalShadows===m&&R.numPointShadows===g&&R.numSpotShadows===v&&R.numSpotMaps===x&&R.numLightProbes===A||(i.directional.length=d,i.spot.length=p,i.rectArea.length=f,i.point.length=u,i.hemi.length=_,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=v+x-M,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=A,R.directionalLength=d,R.pointLength=u,R.spotLength=p,R.rectAreaLength=f,R.hemiLength=_,R.numDirectionalShadows=m,R.numPointShadows=g,R.numSpotShadows=v,R.numSpotMaps=x,R.numLightProbes=A,i.version=Gf++)},setupView:function(o,c){let l=0,h=0,d=0,u=0,p=0,f=c.matrixWorldInverse;for(let _=0,m=o.length;_<m;_++){let g=o[_];if(g.isDirectionalLight){let v=i.directional[l];v.direction.setFromMatrixPosition(g.matrixWorld),n.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(f),l++}else if(g.isSpotLight){let v=i.spot[d];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(f),v.direction.setFromMatrixPosition(g.matrixWorld),n.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(f),d++}else if(g.isRectAreaLight){let v=i.rectArea[u];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(f),a.identity(),s.copy(g.matrixWorld),s.premultiply(f),a.extractRotation(s),v.halfWidth.set(.5*g.width,0,0),v.halfHeight.set(0,.5*g.height,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),u++}else if(g.isPointLight){let v=i.point[h];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(f),h++}else if(g.isHemisphereLight){let v=i.hemi[p];v.direction.setFromMatrixPosition(g.matrixWorld),v.direction.transformDirection(f),p++}}},state:i}}function rp(r){let e=new Vf(r),t=[],i=[],n={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){n.camera=s,t.length=0,i.length=0},state:n,setupLights:function(){e.setup(t)},setupLightsView:function(s){e.setupView(t,s)},pushLight:function(s){t.push(s)},pushShadow:function(s){i.push(s)}}}function Wf(r){let e=new WeakMap;return{get:function(t,i=0){let n=e.get(t),s;return n===void 0?(s=new rp(r),e.set(t,[s])):i>=n.length?(s=new rp(r),n.push(s)):s=n[i],s},dispose:function(){e=new WeakMap}}}function Xf(r,e,t){let i=new pn,n=new J,s=new J,a=new Ye,o=new So({depthPacking:_d}),c=new bo,l={},h=t.maxTextureSize,d={[Br]:Ht,[Ht]:Br,[gt]:gt},u=new zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let f=new et;f.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new tt(f,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sc;let g=this.type;function v(R,U){let F=e.update(_);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ii(n.x,n.y)),u.uniforms.shadow_pass.value=R.map.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,r.setRenderTarget(R.mapPass),r.clear(),r.renderBufferDirect(U,null,F,u,_,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,r.setRenderTarget(R.map),r.clear(),r.renderBufferDirect(U,null,F,p,_,null)}function x(R,U,F,D){let k=null,V=F.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(V!==void 0)k=V;else if(k=F.isPointLight===!0?c:o,r.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){let O=k.uuid,Y=U.uuid,H=l[O];H===void 0&&(H={},l[O]=H);let q=H[Y];q===void 0&&(q=k.clone(),H[Y]=q,U.addEventListener("dispose",A)),k=q}return k.visible=U.visible,k.wireframe=U.wireframe,k.side=D===Di?U.shadowSide!==null?U.shadowSide:U.side:U.shadowSide!==null?U.shadowSide:d[U.side],k.alphaMap=U.alphaMap,k.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,k.map=U.map,k.clipShadows=U.clipShadows,k.clippingPlanes=U.clippingPlanes,k.clipIntersection=U.clipIntersection,k.displacementMap=U.displacementMap,k.displacementScale=U.displacementScale,k.displacementBias=U.displacementBias,k.wireframeLinewidth=U.wireframeLinewidth,k.linewidth=U.linewidth,F.isPointLight===!0&&k.isMeshDistanceMaterial===!0&&(r.properties.get(k).light=F),k}function M(R,U,F,D,k){if(R.visible===!1)return;if(R.layers.test(U.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&k===Di)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,R.matrixWorld);let O=e.update(R),Y=R.material;if(Array.isArray(Y)){let H=O.groups;for(let q=0,Z=H.length;q<Z;q++){let ne=H[q],$=Y[ne.materialIndex];if($&&$.visible){let me=x(R,$,D,k);R.onBeforeShadow(r,R,U,F,O,me,ne),r.renderBufferDirect(F,null,O,me,R,ne),R.onAfterShadow(r,R,U,F,O,me,ne)}}}else if(Y.visible){let H=x(R,Y,D,k);R.onBeforeShadow(r,R,U,F,O,H,null),r.renderBufferDirect(F,null,O,H,R,null),R.onAfterShadow(r,R,U,F,O,H,null)}}let V=R.children;for(let O=0,Y=V.length;O<Y;O++)M(V[O],U,F,D,k)}function A(R){R.target.removeEventListener("dispose",A);for(let U in l){let F=l[U],D=R.target.uuid;D in F&&(F[D].dispose(),delete F[D])}}this.render=function(R,U,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let D=r.getRenderTarget(),k=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),O=r.state;O.setBlending(xn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let Y=g!==Di&&this.type===Di,H=g===Di&&this.type!==Di;for(let q=0,Z=R.length;q<Z;q++){let ne=R[q],$=ne.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;n.copy($.mapSize);let me=$.getFrameExtents();if(n.multiply(me),s.copy($.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/me.x),n.x=s.x*me.x,$.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/me.y),n.y=s.y*me.y,$.mapSize.y=s.y)),$.map===null||Y===!0||H===!0){let ge=this.type!==Di?{minFilter:Ri,magFilter:Ri}:{};$.map!==null&&$.map.dispose(),$.map=new Ii(n.x,n.y,ge),$.map.texture.name=ne.name+".shadowMap",$.camera.updateProjectionMatrix()}r.setRenderTarget($.map),r.clear();let xe=$.getViewportCount();for(let ge=0;ge<xe;ge++){let Ee=$.getViewport(ge);a.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),O.viewport(a),$.updateMatrices(ne,ge),i=$.getFrustum(),M(U,F,$.camera,ne,this.type)}$.isPointLightShadow!==!0&&this.type===Di&&v($,F),$.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(D,k,V)}}var jf={[No]:Oo,[Fo]:Ho,[Bo]:Go,[Ys]:zo,[Oo]:No,[Ho]:Fo,[Go]:Bo,[zo]:Ys};function qf(r,e){let t=new function(){let y=!1,w=new Ye,L=null,C=new Ye(0,0,0,0);return{setMask:function(X){L===X||y||(r.colorMask(X,X,X,X),L=X)},setLocked:function(X){y=X},setClear:function(X,B,z,ee,oe){oe===!0&&(X*=ee,B*=ee,z*=ee),w.set(X,B,z,ee),C.equals(w)===!1&&(r.clearColor(X,B,z,ee),C.copy(w))},reset:function(){y=!1,L=null,C.set(-1,0,0,0)}}},i=new function(){let y=!1,w=!1,L=null,C=null,X=null;return{setReversed:function(B){if(w!==B){let z=e.get("EXT_clip_control");B?z.clipControlEXT(z.LOWER_LEFT_EXT,z.ZERO_TO_ONE_EXT):z.clipControlEXT(z.LOWER_LEFT_EXT,z.NEGATIVE_ONE_TO_ONE_EXT),w=B;let ee=X;X=null,this.setClear(ee)}},getReversed:function(){return w},setTest:function(B){B?se(r.DEPTH_TEST):re(r.DEPTH_TEST)},setMask:function(B){L===B||y||(r.depthMask(B),L=B)},setFunc:function(B){if(w&&(B=jf[B]),C!==B){switch(B){case No:r.depthFunc(r.NEVER);break;case Oo:r.depthFunc(r.ALWAYS);break;case Fo:r.depthFunc(r.LESS);break;case Ys:r.depthFunc(r.LEQUAL);break;case Bo:r.depthFunc(r.EQUAL);break;case zo:r.depthFunc(r.GEQUAL);break;case Ho:r.depthFunc(r.GREATER);break;case Go:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}C=B}},setLocked:function(B){y=B},setClear:function(B){X!==B&&(w&&(B=1-B),r.clearDepth(B),X=B)},reset:function(){y=!1,L=null,C=null,X=null,w=!1}}},n=new function(){let y=!1,w=null,L=null,C=null,X=null,B=null,z=null,ee=null,oe=null;return{setTest:function(te){y||(te?se(r.STENCIL_TEST):re(r.STENCIL_TEST))},setMask:function(te){w===te||y||(r.stencilMask(te),w=te)},setFunc:function(te,de,_e){L===te&&C===de&&X===_e||(r.stencilFunc(te,de,_e),L=te,C=de,X=_e)},setOp:function(te,de,_e){B===te&&z===de&&ee===_e||(r.stencilOp(te,de,_e),B=te,z=de,ee=_e)},setLocked:function(te){y=te},setClear:function(te){oe!==te&&(r.clearStencil(te),oe=te)},reset:function(){y=!1,w=null,L=null,C=null,X=null,B=null,z=null,ee=null,oe=null}}},s=new WeakMap,a=new WeakMap,o={},c={},l=new WeakMap,h=[],d=null,u=!1,p=null,f=null,_=null,m=null,g=null,v=null,x=null,M=new Se(0,0,0),A=0,R=!1,U=null,F=null,D=null,k=null,V=null,O=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,H=0,q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(q)[1]),Y=H>=1):q.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Y=H>=2);let Z=null,ne={},$=r.getParameter(r.SCISSOR_BOX),me=r.getParameter(r.VIEWPORT),xe=new Ye().fromArray($),ge=new Ye().fromArray(me);function Ee(y,w,L,C){let X=new Uint8Array(4),B=r.createTexture();r.bindTexture(y,B),r.texParameteri(y,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(y,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let z=0;z<L;z++)y===r.TEXTURE_3D||y===r.TEXTURE_2D_ARRAY?r.texImage3D(w,0,r.RGBA,1,1,C,0,r.RGBA,r.UNSIGNED_BYTE,X):r.texImage2D(w+z,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,X);return B}let ie={};function se(y){o[y]!==!0&&(r.enable(y),o[y]=!0)}function re(y){o[y]!==!1&&(r.disable(y),o[y]=!1)}ie[r.TEXTURE_2D]=Ee(r.TEXTURE_2D,r.TEXTURE_2D,1),ie[r.TEXTURE_CUBE_MAP]=Ee(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[r.TEXTURE_2D_ARRAY]=Ee(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ie[r.TEXTURE_3D]=Ee(r.TEXTURE_3D,r.TEXTURE_3D,1,1),t.setClear(0,0,0,1),i.setClear(1),n.setClear(0),se(r.DEPTH_TEST),i.setFunc(Ys),S(!1),N(Mc),se(r.CULL_FACE),b(xn);let be={[zr]:r.FUNC_ADD,[zu]:r.FUNC_SUBTRACT,[Hu]:r.FUNC_REVERSE_SUBTRACT};be[Gu]=r.MIN,be[ku]=r.MAX;let Le={[Vu]:r.ZERO,[Wu]:r.ONE,[Xu]:r.SRC_COLOR,[qu]:r.SRC_ALPHA,[Qu]:r.SRC_ALPHA_SATURATE,[Ku]:r.DST_COLOR,[Zu]:r.DST_ALPHA,[ju]:r.ONE_MINUS_SRC_COLOR,[Yu]:r.ONE_MINUS_SRC_ALPHA,[$u]:r.ONE_MINUS_DST_COLOR,[Ju]:r.ONE_MINUS_DST_ALPHA,[ed]:r.CONSTANT_COLOR,[td]:r.ONE_MINUS_CONSTANT_COLOR,[id]:r.CONSTANT_ALPHA,[nd]:r.ONE_MINUS_CONSTANT_ALPHA};function b(y,w,L,C,X,B,z,ee,oe,te){if(y!==xn){if(u===!1&&(se(r.BLEND),u=!0),y===Bu)X=X||w,B=B||L,z=z||C,w===f&&X===g||(r.blendEquationSeparate(be[w],be[X]),f=w,g=X),L===_&&C===m&&B===v&&z===x||(r.blendFuncSeparate(Le[L],Le[C],Le[B],Le[z]),_=L,m=C,v=B,x=z),ee.equals(M)!==!1&&oe===A||(r.blendColor(ee.r,ee.g,ee.b,oe),M.copy(ee),A=oe),p=y,R=!1;else if(y!==p||te!==R){if(f===zr&&g===zr||(r.blendEquation(r.FUNC_ADD),f=zr,g=zr),te)switch(y){case qs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case yn:r.blendFunc(r.ONE,r.ONE);break;case bc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Tc:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",y)}else switch(y){case qs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case yn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case bc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",y)}_=null,m=null,v=null,x=null,M.set(0,0,0),A=0,p=y,R=te}}else u===!0&&(re(r.BLEND),u=!1)}function S(y){U!==y&&(y?r.frontFace(r.CW):r.frontFace(r.CCW),U=y)}function N(y){y!==Ou?(se(r.CULL_FACE),y!==F&&(y===Mc?r.cullFace(r.BACK):y===Fu?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):re(r.CULL_FACE),F=y}function P(y,w,L){y?(se(r.POLYGON_OFFSET_FILL),k===w&&V===L||(r.polygonOffset(w,L),k=w,V=L)):re(r.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:i,stencil:n},enable:se,disable:re,bindFramebuffer:function(y,w){return c[y]!==w&&(r.bindFramebuffer(y,w),c[y]=w,y===r.DRAW_FRAMEBUFFER&&(c[r.FRAMEBUFFER]=w),y===r.FRAMEBUFFER&&(c[r.DRAW_FRAMEBUFFER]=w),!0)},drawBuffers:function(y,w){let L=h,C=!1;if(y){L=l.get(w),L===void 0&&(L=[],l.set(w,L));let X=y.textures;if(L.length!==X.length||L[0]!==r.COLOR_ATTACHMENT0){for(let B=0,z=X.length;B<z;B++)L[B]=r.COLOR_ATTACHMENT0+B;L.length=X.length,C=!0}}else L[0]!==r.BACK&&(L[0]=r.BACK,C=!0);C&&r.drawBuffers(L)},useProgram:function(y){return d!==y&&(r.useProgram(y),d=y,!0)},setBlending:b,setMaterial:function(y,w){y.side===gt?re(r.CULL_FACE):se(r.CULL_FACE);let L=y.side===Ht;w&&(L=!L),S(L),y.blending===qs&&y.transparent===!1?b(xn):b(y.blending,y.blendEquation,y.blendSrc,y.blendDst,y.blendEquationAlpha,y.blendSrcAlpha,y.blendDstAlpha,y.blendColor,y.blendAlpha,y.premultipliedAlpha),i.setFunc(y.depthFunc),i.setTest(y.depthTest),i.setMask(y.depthWrite),t.setMask(y.colorWrite);let C=y.stencilWrite;n.setTest(C),C&&(n.setMask(y.stencilWriteMask),n.setFunc(y.stencilFunc,y.stencilRef,y.stencilFuncMask),n.setOp(y.stencilFail,y.stencilZFail,y.stencilZPass)),P(y.polygonOffset,y.polygonOffsetFactor,y.polygonOffsetUnits),y.alphaToCoverage===!0?se(r.SAMPLE_ALPHA_TO_COVERAGE):re(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:S,setCullFace:N,setLineWidth:function(y){y!==D&&(Y&&r.lineWidth(y),D=y)},setPolygonOffset:P,setScissorTest:function(y){y?se(r.SCISSOR_TEST):re(r.SCISSOR_TEST)},activeTexture:function(y){y===void 0&&(y=r.TEXTURE0+O-1),Z!==y&&(r.activeTexture(y),Z=y)},bindTexture:function(y,w,L){L===void 0&&(L=Z===null?r.TEXTURE0+O-1:Z);let C=ne[L];C===void 0&&(C={type:void 0,texture:void 0},ne[L]=C),C.type===y&&C.texture===w||(Z!==L&&(r.activeTexture(L),Z=L),r.bindTexture(y,w||ie[y]),C.type=y,C.texture=w)},unbindTexture:function(){let y=ne[Z];y!==void 0&&y.type!==void 0&&(r.bindTexture(y.type,null),y.type=void 0,y.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},compressedTexImage3D:function(){try{r.compressedTexImage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},texImage2D:function(){try{r.texImage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},texImage3D:function(){try{r.texImage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},updateUBOMapping:function(y,w){let L=a.get(w);L===void 0&&(L=new WeakMap,a.set(w,L));let C=L.get(y);C===void 0&&(C=r.getUniformBlockIndex(w,y.name),L.set(y,C))},uniformBlockBinding:function(y,w){let L=a.get(w).get(y);s.get(w)!==L&&(r.uniformBlockBinding(w,L,y.__bindingPointIndex),s.set(w,L))},texStorage2D:function(){try{r.texStorage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},texStorage3D:function(){try{r.texStorage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},texSubImage2D:function(){try{r.texSubImage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},texSubImage3D:function(){try{r.texSubImage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},scissor:function(y){xe.equals(y)===!1&&(r.scissor(y.x,y.y,y.z,y.w),xe.copy(y))},viewport:function(y){ge.equals(y)===!1&&(r.viewport(y.x,y.y,y.z,y.w),ge.copy(y))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),i.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),o={},Z=null,ne={},c={},l=new WeakMap,h=[],d=null,u=!1,p=null,f=null,_=null,m=null,g=null,v=null,x=null,M=new Se(0,0,0),A=0,R=!1,U=null,F=null,D=null,k=null,V=null,xe.set(0,0,r.canvas.width,r.canvas.height),ge.set(0,0,r.canvas.width,r.canvas.height),t.reset(),i.reset(),n.reset()}}}function Yf(r,e,t,i,n,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),l=new J,h=new WeakMap,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(b,S){return p?new OffscreenCanvas(b,S):_s("canvas")}function _(b,S,N){let P=1,y=Le(b);if((y.width>N||y.height>N)&&(P=N/Math.max(y.width,y.height)),P<1){if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let w=Math.floor(P*y.width),L=Math.floor(P*y.height);d===void 0&&(d=f(w,L));let C=S?f(w,L):d;return C.width=w,C.height=L,C.getContext("2d").drawImage(b,0,0,w,L),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+w+"x"+L+")."),C}return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),b}return b}function m(b){return b.generateMipmaps}function g(b){r.generateMipmap(b)}function v(b){return b.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?r.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function x(b,S,N,P,y=!1){if(b!==null){if(r[b]!==void 0)return r[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let w=S;if(S===r.RED&&(N===r.FLOAT&&(w=r.R32F),N===r.HALF_FLOAT&&(w=r.R16F),N===r.UNSIGNED_BYTE&&(w=r.R8)),S===r.RED_INTEGER&&(N===r.UNSIGNED_BYTE&&(w=r.R8UI),N===r.UNSIGNED_SHORT&&(w=r.R16UI),N===r.UNSIGNED_INT&&(w=r.R32UI),N===r.BYTE&&(w=r.R8I),N===r.SHORT&&(w=r.R16I),N===r.INT&&(w=r.R32I)),S===r.RG&&(N===r.FLOAT&&(w=r.RG32F),N===r.HALF_FLOAT&&(w=r.RG16F),N===r.UNSIGNED_BYTE&&(w=r.RG8)),S===r.RG_INTEGER&&(N===r.UNSIGNED_BYTE&&(w=r.RG8UI),N===r.UNSIGNED_SHORT&&(w=r.RG16UI),N===r.UNSIGNED_INT&&(w=r.RG32UI),N===r.BYTE&&(w=r.RG8I),N===r.SHORT&&(w=r.RG16I),N===r.INT&&(w=r.RG32I)),S===r.RGB_INTEGER&&(N===r.UNSIGNED_BYTE&&(w=r.RGB8UI),N===r.UNSIGNED_SHORT&&(w=r.RGB16UI),N===r.UNSIGNED_INT&&(w=r.RGB32UI),N===r.BYTE&&(w=r.RGB8I),N===r.SHORT&&(w=r.RGB16I),N===r.INT&&(w=r.RGB32I)),S===r.RGBA_INTEGER&&(N===r.UNSIGNED_BYTE&&(w=r.RGBA8UI),N===r.UNSIGNED_SHORT&&(w=r.RGBA16UI),N===r.UNSIGNED_INT&&(w=r.RGBA32UI),N===r.BYTE&&(w=r.RGBA8I),N===r.SHORT&&(w=r.RGBA16I),N===r.INT&&(w=r.RGBA32I)),S===r.RGB&&(N===r.UNSIGNED_INT_5_9_9_9_REV&&(w=r.RGB9_E5),N===r.UNSIGNED_INT_10F_11F_11F_REV&&(w=r.R11F_G11F_B10F)),S===r.RGBA){let L=y?fs:Ve.getTransfer(P);N===r.FLOAT&&(w=r.RGBA32F),N===r.HALF_FLOAT&&(w=r.RGBA16F),N===r.UNSIGNED_BYTE&&(w=L===Ke?r.SRGB8_ALPHA8:r.RGBA8),N===r.UNSIGNED_SHORT_4_4_4_4&&(w=r.RGBA4),N===r.UNSIGNED_SHORT_5_5_5_1&&(w=r.RGB5_A1)}return w!==r.R16F&&w!==r.R32F&&w!==r.RG16F&&w!==r.RG32F&&w!==r.RGBA16F&&w!==r.RGBA32F||e.get("EXT_color_buffer_float"),w}function M(b,S){let N;return b?S===null||S===Wn||S===Vr?N=r.DEPTH24_STENCIL8:S===_i?N=r.DEPTH32F_STENCIL8:S===Gr&&(N=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Wn||S===Vr?N=r.DEPTH_COMPONENT24:S===_i?N=r.DEPTH_COMPONENT32F:S===Gr&&(N=r.DEPTH_COMPONENT16),N}function A(b,S){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Ri&&b.minFilter!==Ci?Math.log2(Math.max(S.width,S.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?S.mipmaps.length:1}function R(b){let S=b.target;S.removeEventListener("dispose",R),(function(N){let P=i.get(N);if(P.__webglInit===void 0)return;let y=N.source,w=u.get(y);if(w){let L=w[P.__cacheKey];L.usedTimes--,L.usedTimes===0&&F(N),Object.keys(w).length===0&&u.delete(y)}i.remove(N)})(S),S.isVideoTexture&&h.delete(S)}function U(b){let S=b.target;S.removeEventListener("dispose",U),(function(N){let P=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let w=0;w<6;w++){if(Array.isArray(P.__webglFramebuffer[w]))for(let L=0;L<P.__webglFramebuffer[w].length;L++)r.deleteFramebuffer(P.__webglFramebuffer[w][L]);else r.deleteFramebuffer(P.__webglFramebuffer[w]);P.__webglDepthbuffer&&r.deleteRenderbuffer(P.__webglDepthbuffer[w])}else{if(Array.isArray(P.__webglFramebuffer))for(let w=0;w<P.__webglFramebuffer.length;w++)r.deleteFramebuffer(P.__webglFramebuffer[w]);else r.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&r.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&r.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let w=0;w<P.__webglColorRenderbuffer.length;w++)P.__webglColorRenderbuffer[w]&&r.deleteRenderbuffer(P.__webglColorRenderbuffer[w]);P.__webglDepthRenderbuffer&&r.deleteRenderbuffer(P.__webglDepthRenderbuffer)}let y=N.textures;for(let w=0,L=y.length;w<L;w++){let C=i.get(y[w]);C.__webglTexture&&(r.deleteTexture(C.__webglTexture),a.memory.textures--),i.remove(y[w])}i.remove(N)})(S)}function F(b){let S=i.get(b);r.deleteTexture(S.__webglTexture);let N=b.source;delete u.get(N)[S.__cacheKey],a.memory.textures--}let D=0;function k(b,S){let N=i.get(b);if(b.isVideoTexture&&(function(P){let y=a.render.frame;h.get(P)!==y&&(h.set(P,y),P.update())})(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&N.__version!==b.version){let P=b.image;if(P===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(P.complete!==!1)return void ne(N,b,S);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}else b.isExternalTexture&&(N.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,N.__webglTexture,r.TEXTURE0+S)}let V={[Wa]:r.REPEAT,[br]:r.CLAMP_TO_EDGE,[Xa]:r.MIRRORED_REPEAT},O={[Ri]:r.NEAREST,[pd]:r.NEAREST_MIPMAP_NEAREST,[Js]:r.NEAREST_MIPMAP_LINEAR,[Ci]:r.LINEAR,[Xo]:r.LINEAR_MIPMAP_NEAREST,[Vn]:r.LINEAR_MIPMAP_LINEAR},Y={[yd]:r.NEVER,[wd]:r.ALWAYS,[Md]:r.LESS,[ah]:r.LEQUAL,[Sd]:r.EQUAL,[Ed]:r.GEQUAL,[bd]:r.GREATER,[Td]:r.NOTEQUAL};function H(b,S){if(S.type!==_i||e.has("OES_texture_float_linear")!==!1||S.magFilter!==Ci&&S.magFilter!==Xo&&S.magFilter!==Js&&S.magFilter!==Vn&&S.minFilter!==Ci&&S.minFilter!==Xo&&S.minFilter!==Js&&S.minFilter!==Vn||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(b,r.TEXTURE_WRAP_S,V[S.wrapS]),r.texParameteri(b,r.TEXTURE_WRAP_T,V[S.wrapT]),b!==r.TEXTURE_3D&&b!==r.TEXTURE_2D_ARRAY||r.texParameteri(b,r.TEXTURE_WRAP_R,V[S.wrapR]),r.texParameteri(b,r.TEXTURE_MAG_FILTER,O[S.magFilter]),r.texParameteri(b,r.TEXTURE_MIN_FILTER,O[S.minFilter]),S.compareFunction&&(r.texParameteri(b,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(b,r.TEXTURE_COMPARE_FUNC,Y[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ri||S.minFilter!==Js&&S.minFilter!==Vn||S.type===_i&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let N=e.get("EXT_texture_filter_anisotropic");r.texParameterf(b,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,n.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function q(b,S){let N=!1;b.__webglInit===void 0&&(b.__webglInit=!0,S.addEventListener("dispose",R));let P=S.source,y=u.get(P);y===void 0&&(y={},u.set(P,y));let w=(function(L){let C=[];return C.push(L.wrapS),C.push(L.wrapT),C.push(L.wrapR||0),C.push(L.magFilter),C.push(L.minFilter),C.push(L.anisotropy),C.push(L.internalFormat),C.push(L.format),C.push(L.type),C.push(L.generateMipmaps),C.push(L.premultiplyAlpha),C.push(L.flipY),C.push(L.unpackAlignment),C.push(L.colorSpace),C.join()})(S);if(w!==b.__cacheKey){y[w]===void 0&&(y[w]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,N=!0),y[w].usedTimes++;let L=y[b.__cacheKey];L!==void 0&&(y[b.__cacheKey].usedTimes--,L.usedTimes===0&&F(S)),b.__cacheKey=w,b.__webglTexture=y[w].texture}return N}function Z(b,S,N){return Math.floor(Math.floor(b/N)/S)}function ne(b,S,N){let P=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(P=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(P=r.TEXTURE_3D);let y=q(b,S),w=S.source;t.bindTexture(P,b.__webglTexture,r.TEXTURE0+N);let L=i.get(w);if(w.version!==L.__version||y===!0){t.activeTexture(r.TEXTURE0+N);let C=Ve.getPrimaries(Ve.workingColorSpace),X=S.colorSpace===Xn?null:Ve.getPrimaries(S.colorSpace),B=S.colorSpace===Xn||C===X?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,B);let z=_(S.image,!1,n.maxTextureSize);z=be(S,z);let ee=s.convert(S.format,S.colorSpace),oe=s.convert(S.type),te,de=x(S.internalFormat,ee,oe,S.colorSpace,S.isVideoTexture);H(P,S);let _e=S.mipmaps,Me=S.isVideoTexture!==!0,ze=L.__version===void 0||y===!0,Xe=w.dataReady,je=A(S,z);if(S.isDepthTexture)de=M(S.format===$s,S.type),ze&&(Me?t.texStorage2D(r.TEXTURE_2D,1,de,z.width,z.height):t.texImage2D(r.TEXTURE_2D,0,de,z.width,z.height,0,ee,oe,null));else if(S.isDataTexture)if(_e.length>0){Me&&ze&&t.texStorage2D(r.TEXTURE_2D,je,de,_e[0].width,_e[0].height);for(let ce=0,Te=_e.length;ce<Te;ce++)te=_e[ce],Me?Xe&&t.texSubImage2D(r.TEXTURE_2D,ce,0,0,te.width,te.height,ee,oe,te.data):t.texImage2D(r.TEXTURE_2D,ce,de,te.width,te.height,0,ee,oe,te.data);S.generateMipmaps=!1}else Me?(ze&&t.texStorage2D(r.TEXTURE_2D,je,de,z.width,z.height),Xe&&(function(ce,Te,Be,Ct){let fe=ce.updateRanges;if(fe.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,Te.width,Te.height,Be,Ct,Te.data);else{fe.sort((I,Mt)=>I.start-Mt.start);let qe=0;for(let I=1;I<fe.length;I++){let Mt=fe[qe],Pt=fe[I],at=Mt.start+Mt.count,Tn=Z(Pt.start,Te.width,4),En=Z(Mt.start,Te.width,4);Pt.start<=at+1&&Tn===En&&Z(Pt.start+Pt.count-1,Te.width,4)===Tn?Mt.count=Math.max(Mt.count,Pt.start+Pt.count-Mt.start):(++qe,fe[qe]=Pt)}fe.length=qe+1;let He=r.getParameter(r.UNPACK_ROW_LENGTH),ai=r.getParameter(r.UNPACK_SKIP_PIXELS),Gi=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,Te.width);for(let I=0,Mt=fe.length;I<Mt;I++){let Pt=fe[I],at=Math.floor(Pt.start/4),Tn=Math.ceil(Pt.count/4),En=at%Te.width,Kr=Math.floor(at/Te.width),ca=Tn;r.pixelStorei(r.UNPACK_SKIP_PIXELS,En),r.pixelStorei(r.UNPACK_SKIP_ROWS,Kr),t.texSubImage2D(r.TEXTURE_2D,0,En,Kr,ca,1,Be,Ct,Te.data)}ce.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,He),r.pixelStorei(r.UNPACK_SKIP_PIXELS,ai),r.pixelStorei(r.UNPACK_SKIP_ROWS,Gi)}})(S,z,ee,oe)):t.texImage2D(r.TEXTURE_2D,0,de,z.width,z.height,0,ee,oe,z.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Me&&ze&&t.texStorage3D(r.TEXTURE_2D_ARRAY,je,de,_e[0].width,_e[0].height,z.depth);for(let ce=0,Te=_e.length;ce<Te;ce++)if(te=_e[ce],S.format!==vi)if(ee!==null)if(Me){if(Xe)if(S.layerUpdates.size>0){let Be=ph(te.width,te.height,S.format,S.type);for(let Ct of S.layerUpdates){let fe=te.data.subarray(Ct*Be/te.data.BYTES_PER_ELEMENT,(Ct+1)*Be/te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ce,0,0,Ct,te.width,te.height,1,ee,fe)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ce,0,0,0,te.width,te.height,z.depth,ee,te.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ce,de,te.width,te.height,z.depth,0,te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Me?Xe&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ce,0,0,0,te.width,te.height,z.depth,ee,oe,te.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ce,de,te.width,te.height,z.depth,0,ee,oe,te.data)}else{Me&&ze&&t.texStorage2D(r.TEXTURE_2D,je,de,_e[0].width,_e[0].height);for(let ce=0,Te=_e.length;ce<Te;ce++)te=_e[ce],S.format!==vi?ee!==null?Me?Xe&&t.compressedTexSubImage2D(r.TEXTURE_2D,ce,0,0,te.width,te.height,ee,te.data):t.compressedTexImage2D(r.TEXTURE_2D,ce,de,te.width,te.height,0,te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Me?Xe&&t.texSubImage2D(r.TEXTURE_2D,ce,0,0,te.width,te.height,ee,oe,te.data):t.texImage2D(r.TEXTURE_2D,ce,de,te.width,te.height,0,ee,oe,te.data)}else if(S.isDataArrayTexture)if(Me){if(ze&&t.texStorage3D(r.TEXTURE_2D_ARRAY,je,de,z.width,z.height,z.depth),Xe)if(S.layerUpdates.size>0){let ce=ph(z.width,z.height,S.format,S.type);for(let Te of S.layerUpdates){let Be=z.data.subarray(Te*ce/z.data.BYTES_PER_ELEMENT,(Te+1)*ce/z.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Te,z.width,z.height,1,ee,oe,Be)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,z.width,z.height,z.depth,ee,oe,z.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,de,z.width,z.height,z.depth,0,ee,oe,z.data);else if(S.isData3DTexture)Me?(ze&&t.texStorage3D(r.TEXTURE_3D,je,de,z.width,z.height,z.depth),Xe&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,z.width,z.height,z.depth,ee,oe,z.data)):t.texImage3D(r.TEXTURE_3D,0,de,z.width,z.height,z.depth,0,ee,oe,z.data);else if(S.isFramebufferTexture){if(ze)if(Me)t.texStorage2D(r.TEXTURE_2D,je,de,z.width,z.height);else{let ce=z.width,Te=z.height;for(let Be=0;Be<je;Be++)t.texImage2D(r.TEXTURE_2D,Be,de,ce,Te,0,ee,oe,null),ce>>=1,Te>>=1}}else if(_e.length>0){if(Me&&ze){let ce=Le(_e[0]);t.texStorage2D(r.TEXTURE_2D,je,de,ce.width,ce.height)}for(let ce=0,Te=_e.length;ce<Te;ce++)te=_e[ce],Me?Xe&&t.texSubImage2D(r.TEXTURE_2D,ce,0,0,ee,oe,te):t.texImage2D(r.TEXTURE_2D,ce,de,ee,oe,te);S.generateMipmaps=!1}else if(Me){if(ze){let ce=Le(z);t.texStorage2D(r.TEXTURE_2D,je,de,ce.width,ce.height)}Xe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ee,oe,z)}else t.texImage2D(r.TEXTURE_2D,0,de,ee,oe,z);m(S)&&g(P),L.__version=w.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function $(b,S,N,P,y,w){let L=s.convert(N.format,N.colorSpace),C=s.convert(N.type),X=x(N.internalFormat,L,C,N.colorSpace),B=i.get(S),z=i.get(N);if(z.__renderTarget=S,!B.__hasExternalTextures){let ee=Math.max(1,S.width>>w),oe=Math.max(1,S.height>>w);y===r.TEXTURE_3D||y===r.TEXTURE_2D_ARRAY?t.texImage3D(y,w,X,ee,oe,S.depth,0,L,C,null):t.texImage2D(y,w,X,ee,oe,0,L,C,null)}t.bindFramebuffer(r.FRAMEBUFFER,b),re(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,P,y,z.__webglTexture,0,se(S)):(y===r.TEXTURE_2D||y>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&y<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,P,y,z.__webglTexture,w),t.bindFramebuffer(r.FRAMEBUFFER,null)}function me(b,S,N){if(r.bindRenderbuffer(r.RENDERBUFFER,b),S.depthBuffer){let P=S.depthTexture,y=P&&P.isDepthTexture?P.type:null,w=M(S.stencilBuffer,y),L=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,C=se(S);re(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,C,w,S.width,S.height):N?r.renderbufferStorageMultisample(r.RENDERBUFFER,C,w,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,w,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,L,r.RENDERBUFFER,b)}else{let P=S.textures;for(let y=0;y<P.length;y++){let w=P[y],L=s.convert(w.format,w.colorSpace),C=s.convert(w.type),X=x(w.internalFormat,L,C,w.colorSpace),B=se(S);N&&re(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,B,X,S.width,S.height):re(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,B,X,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,X,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function xe(b,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,b),!S.depthTexture||!S.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let N=i.get(S.depthTexture);N.__renderTarget=S,N.__webglTexture&&S.depthTexture.image.width===S.width&&S.depthTexture.image.height===S.height||(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),k(S.depthTexture,0);let P=N.__webglTexture,y=se(S);if(S.depthTexture.format===Ks)re(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,P,0,y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,P,0);else{if(S.depthTexture.format!==$s)throw new Error("Unknown depthTexture format");re(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,P,0,y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,P,0)}}function ge(b){let S=i.get(b),N=b.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==b.depthTexture){let P=b.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),P){let y=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,P.removeEventListener("dispose",y)};P.addEventListener("dispose",y),S.__depthDisposeCallback=y}S.__boundDepthTexture=P}if(b.depthTexture&&!S.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");let P=b.texture.mipmaps;P&&P.length>0?xe(S.__webglFramebuffer[0],b):xe(S.__webglFramebuffer,b)}else if(N){S.__webglDepthbuffer=[];for(let P=0;P<6;P++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[P]),S.__webglDepthbuffer[P]===void 0)S.__webglDepthbuffer[P]=r.createRenderbuffer(),me(S.__webglDepthbuffer[P],b,!1);else{let y=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,w=S.__webglDepthbuffer[P];r.bindRenderbuffer(r.RENDERBUFFER,w),r.framebufferRenderbuffer(r.FRAMEBUFFER,y,r.RENDERBUFFER,w)}}else{let P=b.texture.mipmaps;if(P&&P.length>0?t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),me(S.__webglDepthbuffer,b,!1);else{let y=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,w=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,w),r.framebufferRenderbuffer(r.FRAMEBUFFER,y,r.RENDERBUFFER,w)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}let Ee=[],ie=[];function se(b){return Math.min(n.maxSamples,b.samples)}function re(b){let S=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function be(b,S){let N=b.colorSpace,P=b.format,y=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||N!==Dn&&N!==Xn&&(Ve.getTransfer(N)===Ke?P===vi&&y===Ui||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),S}function Le(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=function(){let b=D;return b>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+n.maxTextures),D+=1,b},this.resetTextureUnits=function(){D=0},this.setTexture2D=k,this.setTexture2DArray=function(b,S){let N=i.get(b);b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version?ne(N,b,S):t.bindTexture(r.TEXTURE_2D_ARRAY,N.__webglTexture,r.TEXTURE0+S)},this.setTexture3D=function(b,S){let N=i.get(b);b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version?ne(N,b,S):t.bindTexture(r.TEXTURE_3D,N.__webglTexture,r.TEXTURE0+S)},this.setTextureCube=function(b,S){let N=i.get(b);b.version>0&&N.__version!==b.version?(function(P,y,w){if(y.image.length!==6)return;let L=q(P,y),C=y.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+w);let X=i.get(C);if(C.version!==X.__version||L===!0){t.activeTexture(r.TEXTURE0+w);let B=Ve.getPrimaries(Ve.workingColorSpace),z=y.colorSpace===Xn?null:Ve.getPrimaries(y.colorSpace),ee=y.colorSpace===Xn||B===z?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let oe=y.isCompressedTexture||y.image[0].isCompressedTexture,te=y.image[0]&&y.image[0].isDataTexture,de=[];for(let fe=0;fe<6;fe++)de[fe]=oe||te?te?y.image[fe].image:y.image[fe]:_(y.image[fe],!0,n.maxCubemapSize),de[fe]=be(y,de[fe]);let _e=de[0],Me=s.convert(y.format,y.colorSpace),ze=s.convert(y.type),Xe=x(y.internalFormat,Me,ze,y.colorSpace),je=y.isVideoTexture!==!0,ce=X.__version===void 0||L===!0,Te=C.dataReady,Be,Ct=A(y,_e);if(H(r.TEXTURE_CUBE_MAP,y),oe){je&&ce&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ct,Xe,_e.width,_e.height);for(let fe=0;fe<6;fe++){Be=de[fe].mipmaps;for(let qe=0;qe<Be.length;qe++){let He=Be[qe];y.format!==vi?Me!==null?je?Te&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,qe,0,0,He.width,He.height,Me,He.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,qe,Xe,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?Te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,qe,0,0,He.width,He.height,Me,ze,He.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,qe,Xe,He.width,He.height,0,Me,ze,He.data)}}}else{if(Be=y.mipmaps,je&&ce){Be.length>0&&Ct++;let fe=Le(de[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ct,Xe,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(te){je?Te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,de[fe].width,de[fe].height,Me,ze,de[fe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Xe,de[fe].width,de[fe].height,0,Me,ze,de[fe].data);for(let qe=0;qe<Be.length;qe++){let He=Be[qe].image[fe].image;je?Te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,qe+1,0,0,He.width,He.height,Me,ze,He.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,qe+1,Xe,He.width,He.height,0,Me,ze,He.data)}}else{je?Te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Me,ze,de[fe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Xe,Me,ze,de[fe]);for(let qe=0;qe<Be.length;qe++){let He=Be[qe];je?Te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,qe+1,0,0,Me,ze,He.image[fe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,qe+1,Xe,Me,ze,He.image[fe])}}}m(y)&&g(r.TEXTURE_CUBE_MAP),X.__version=C.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version})(N,b,S):t.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+S)},this.rebindTextures=function(b,S,N){let P=i.get(b);S!==void 0&&$(P.__webglFramebuffer,b,b.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),N!==void 0&&ge(b)},this.setupRenderTarget=function(b){let S=b.texture,N=i.get(b),P=i.get(S);b.addEventListener("dispose",U);let y=b.textures,w=b.isWebGLCubeRenderTarget===!0,L=y.length>1;if(L||(P.__webglTexture===void 0&&(P.__webglTexture=r.createTexture()),P.__version=S.version,a.memory.textures++),w){N.__webglFramebuffer=[];for(let C=0;C<6;C++)if(S.mipmaps&&S.mipmaps.length>0){N.__webglFramebuffer[C]=[];for(let X=0;X<S.mipmaps.length;X++)N.__webglFramebuffer[C][X]=r.createFramebuffer()}else N.__webglFramebuffer[C]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){N.__webglFramebuffer=[];for(let C=0;C<S.mipmaps.length;C++)N.__webglFramebuffer[C]=r.createFramebuffer()}else N.__webglFramebuffer=r.createFramebuffer();if(L)for(let C=0,X=y.length;C<X;C++){let B=i.get(y[C]);B.__webglTexture===void 0&&(B.__webglTexture=r.createTexture(),a.memory.textures++)}if(b.samples>0&&re(b)===!1){N.__webglMultisampledFramebuffer=r.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let C=0;C<y.length;C++){let X=y[C];N.__webglColorRenderbuffer[C]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,N.__webglColorRenderbuffer[C]);let B=s.convert(X.format,X.colorSpace),z=s.convert(X.type),ee=x(X.internalFormat,B,z,X.colorSpace,b.isXRRenderTarget===!0),oe=se(b);r.renderbufferStorageMultisample(r.RENDERBUFFER,oe,ee,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+C,r.RENDERBUFFER,N.__webglColorRenderbuffer[C])}r.bindRenderbuffer(r.RENDERBUFFER,null),b.depthBuffer&&(N.__webglDepthRenderbuffer=r.createRenderbuffer(),me(N.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(w){t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture),H(r.TEXTURE_CUBE_MAP,S);for(let C=0;C<6;C++)if(S.mipmaps&&S.mipmaps.length>0)for(let X=0;X<S.mipmaps.length;X++)$(N.__webglFramebuffer[C][X],b,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+C,X);else $(N.__webglFramebuffer[C],b,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+C,0);m(S)&&g(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(L){for(let C=0,X=y.length;C<X;C++){let B=y[C],z=i.get(B),ee=r.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ee=b.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ee,z.__webglTexture),H(ee,B),$(N.__webglFramebuffer,b,B,r.COLOR_ATTACHMENT0+C,ee,0),m(B)&&g(ee)}t.unbindTexture()}else{let C=r.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(C=b.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(C,P.__webglTexture),H(C,S),S.mipmaps&&S.mipmaps.length>0)for(let X=0;X<S.mipmaps.length;X++)$(N.__webglFramebuffer[X],b,S,r.COLOR_ATTACHMENT0,C,X);else $(N.__webglFramebuffer,b,S,r.COLOR_ATTACHMENT0,C,0);m(S)&&g(C),t.unbindTexture()}b.depthBuffer&&ge(b)},this.updateRenderTargetMipmap=function(b){let S=b.textures;for(let N=0,P=S.length;N<P;N++){let y=S[N];if(m(y)){let w=v(b),L=i.get(y).__webglTexture;t.bindTexture(w,L),g(w),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(b){if(b.samples>0){if(re(b)===!1){let S=b.textures,N=b.width,P=b.height,y=r.COLOR_BUFFER_BIT,w=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,L=i.get(b),C=S.length>1;if(C)for(let B=0;B<S.length;B++)t.bindFramebuffer(r.FRAMEBUFFER,L.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+B,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,L.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+B,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,L.__webglMultisampledFramebuffer);let X=b.texture.mipmaps;X&&X.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,L.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,L.__webglFramebuffer);for(let B=0;B<S.length;B++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(y|=r.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(y|=r.STENCIL_BUFFER_BIT)),C){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,L.__webglColorRenderbuffer[B]);let z=i.get(S[B]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,z,0)}r.blitFramebuffer(0,0,N,P,0,0,N,P,y,r.NEAREST),c===!0&&(Ee.length=0,ie.length=0,Ee.push(r.COLOR_ATTACHMENT0+B),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Ee.push(w),ie.push(w),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ie)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ee))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),C)for(let B=0;B<S.length;B++){t.bindFramebuffer(r.FRAMEBUFFER,L.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+B,r.RENDERBUFFER,L.__webglColorRenderbuffer[B]);let z=i.get(S[B]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,L.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+B,r.TEXTURE_2D,z,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,L.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){let S=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}},this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=$,this.useMultisampledRTT=re}function Zf(r,e){return{convert:function(t,i=Xn){let n,s=Ve.getTransfer(i);if(t===Ui)return r.UNSIGNED_BYTE;if(t===qo)return r.UNSIGNED_SHORT_4_4_4_4;if(t===Yo)return r.UNSIGNED_SHORT_5_5_5_1;if(t===Rc)return r.UNSIGNED_INT_5_9_9_9_REV;if(t===Cc)return r.UNSIGNED_INT_10F_11F_11F_REV;if(t===wc)return r.BYTE;if(t===Ac)return r.SHORT;if(t===Gr)return r.UNSIGNED_SHORT;if(t===jo)return r.INT;if(t===Wn)return r.UNSIGNED_INT;if(t===_i)return r.FLOAT;if(t===kr)return r.HALF_FLOAT;if(t===md)return r.ALPHA;if(t===fd)return r.RGB;if(t===vi)return r.RGBA;if(t===Ks)return r.DEPTH_COMPONENT;if(t===$s)return r.DEPTH_STENCIL;if(t===Zo)return r.RED;if(t===Jo)return r.RED_INTEGER;if(t===gd)return r.RG;if(t===Pc)return r.RG_INTEGER;if(t===Ic)return r.RGBA_INTEGER;if(t===Ko||t===$o||t===Qo||t===el)if(s===Ke){if(n=e.get("WEBGL_compressed_texture_s3tc_srgb"),n===null)return null;if(t===Ko)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===$o)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===Qo)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===el)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(n=e.get("WEBGL_compressed_texture_s3tc"),n===null)return null;if(t===Ko)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===$o)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===Qo)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===el)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===Lc||t===Dc||t===Uc||t===Nc){if(n=e.get("WEBGL_compressed_texture_pvrtc"),n===null)return null;if(t===Lc)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===Dc)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===Uc)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===Nc)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===Oc||t===Fc||t===Bc){if(n=e.get("WEBGL_compressed_texture_etc"),n===null)return null;if(t===Oc||t===Fc)return s===Ke?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(t===Bc)return s===Ke?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC}if(t===zc||t===Hc||t===Gc||t===kc||t===Vc||t===Wc||t===Xc||t===jc||t===qc||t===Yc||t===Zc||t===Jc||t===Kc||t===$c){if(n=e.get("WEBGL_compressed_texture_astc"),n===null)return null;if(t===zc)return s===Ke?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===Hc)return s===Ke?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===Gc)return s===Ke?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===kc)return s===Ke?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===Vc)return s===Ke?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===Wc)return s===Ke?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===Xc)return s===Ke?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===jc)return s===Ke?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===qc)return s===Ke?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===Yc)return s===Ke?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===Zc)return s===Ke?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===Jc)return s===Ke?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===Kc)return s===Ke?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===$c)return s===Ke?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===Qc||t===eh||t===th){if(n=e.get("EXT_texture_compression_bptc"),n===null)return null;if(t===Qc)return s===Ke?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===eh)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===th)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===ih||t===nh||t===rh||t===sh){if(n=e.get("EXT_texture_compression_rgtc"),n===null)return null;if(t===ih)return n.COMPRESSED_RED_RGTC1_EXT;if(t===nh)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===rh)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===sh)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===Vr?r.UNSIGNED_INT_24_8:r[t]!==void 0?r[t]:null}}}var wh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Rs(e.texture);e.depthNear===t.depthNear&&e.depthFar===t.depthFar||(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new zt({vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new tt(new kt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ah=class extends Pi{constructor(e,t){super();let i=this,n=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,p=null,f=null,_=typeof XRWebGLBinding<"u",m=new wh,g={},v=t.getContextAttributes(),x=null,M=null,A=[],R=[],U=new J,F=null,D=new bt;D.viewport=new Ye;let k=new bt;k.viewport=new Ye;let V=[D,k],O=new Do,Y=null,H=null;function q(ie){let se=R.indexOf(ie.inputSource);if(se===-1)return;let re=A[se];re!==void 0&&(re.update(ie.inputSource,ie.frame,l||a),re.dispatchEvent({type:ie.type,data:ie.inputSource}))}function Z(){n.removeEventListener("select",q),n.removeEventListener("selectstart",q),n.removeEventListener("selectend",q),n.removeEventListener("squeeze",q),n.removeEventListener("squeezestart",q),n.removeEventListener("squeezeend",q),n.removeEventListener("end",Z),n.removeEventListener("inputsourceschange",ne);for(let ie=0;ie<A.length;ie++){let se=R[ie];se!==null&&(R[ie]=null,A[ie].disconnect(se))}Y=null,H=null,m.reset();for(let ie in g)delete g[ie];e.setRenderTarget(x),p=null,u=null,d=null,n=null,M=null,Ee.stop(),i.isPresenting=!1,e.setPixelRatio(F),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}function ne(ie){for(let se=0;se<ie.removed.length;se++){let re=ie.removed[se],be=R.indexOf(re);be>=0&&(R[be]=null,A[be].disconnect(re))}for(let se=0;se<ie.added.length;se++){let re=ie.added[se],be=R.indexOf(re);if(be===-1){for(let b=0;b<A.length;b++){if(b>=R.length){R.push(re),be=b;break}if(R[b]===null){R[b]=re,be=b;break}}if(be===-1)break}let Le=A[be];Le&&Le.connect(re)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let se=A[ie];return se===void 0&&(se=new Rr,A[ie]=se),se.getTargetRaySpace()},this.getControllerGrip=function(ie){let se=A[ie];return se===void 0&&(se=new Rr,A[ie]=se),se.getGripSpace()},this.getHand=function(ie){let se=A[ie];return se===void 0&&(se=new Rr,A[ie]=se),se.getHandSpace()},this.setFramebufferScaleFactor=function(ie){s=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){o=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(ie){l=ie},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(n,t)),d},this.getFrame=function(){return f},this.getSession=function(){return n},this.setSession=async function(ie){if(n=ie,n!==null){if(x=e.getRenderTarget(),n.addEventListener("select",q),n.addEventListener("selectstart",q),n.addEventListener("selectend",q),n.addEventListener("squeeze",q),n.addEventListener("squeezestart",q),n.addEventListener("squeezeend",q),n.addEventListener("end",Z),n.addEventListener("inputsourceschange",ne),v.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(U),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,re=null,be=null;v.depth&&(be=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=v.stencil?$s:Ks,re=v.stencil?Vr:Wn);let Le={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Le),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new Ii(u.textureWidth,u.textureHeight,{format:vi,type:Ui,depthTexture:new As(u.textureWidth,u.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let se={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(n,t,se),n.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Ii(p.framebufferWidth,p.framebufferHeight,{format:vi,type:Ui,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await n.requestReferenceSpace(o),Ee.setContext(n),Ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};let $=new T,me=new T;function xe(ie,se){se===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(se.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(n===null)return;let se=ie.near,re=ie.far;m.texture!==null&&(m.depthNear>0&&(se=m.depthNear),m.depthFar>0&&(re=m.depthFar)),O.near=k.near=D.near=se,O.far=k.far=D.far=re,Y===O.near&&H===O.far||(n.updateRenderState({depthNear:O.near,depthFar:O.far}),Y=O.near,H=O.far),O.layers.mask=6|ie.layers.mask,D.layers.mask=3&O.layers.mask,k.layers.mask=5&O.layers.mask;let be=ie.parent,Le=O.cameras;xe(O,be);for(let b=0;b<Le.length;b++)xe(Le[b],be);Le.length===2?(function(b,S,N){$.setFromMatrixPosition(S.matrixWorld),me.setFromMatrixPosition(N.matrixWorld);let P=$.distanceTo(me),y=S.projectionMatrix.elements,w=N.projectionMatrix.elements,L=y[14]/(y[10]-1),C=y[14]/(y[10]+1),X=(y[9]+1)/y[5],B=(y[9]-1)/y[5],z=(y[8]-1)/y[0],ee=(w[8]+1)/w[0],oe=L*z,te=L*ee,de=P/(-z+ee),_e=de*-z;if(S.matrixWorld.decompose(b.position,b.quaternion,b.scale),b.translateX(_e),b.translateZ(de),b.matrixWorld.compose(b.position,b.quaternion,b.scale),b.matrixWorldInverse.copy(b.matrixWorld).invert(),y[10]===-1)b.projectionMatrix.copy(S.projectionMatrix),b.projectionMatrixInverse.copy(S.projectionMatrixInverse);else{let Me=L+de,ze=C+de,Xe=oe-_e,je=te+(P-_e),ce=X*C/ze*Me,Te=B*C/ze*Me;b.projectionMatrix.makePerspective(Xe,je,ce,Te,Me,ze),b.projectionMatrixInverse.copy(b.projectionMatrix).invert()}})(O,D,k):O.projectionMatrix.copy(D.projectionMatrix),(function(b,S,N){N===null?b.matrix.copy(S.matrixWorld):(b.matrix.copy(N.matrixWorld),b.matrix.invert(),b.matrix.multiply(S.matrixWorld)),b.matrix.decompose(b.position,b.quaternion,b.scale),b.updateMatrixWorld(!0),b.projectionMatrix.copy(S.projectionMatrix),b.projectionMatrixInverse.copy(S.projectionMatrixInverse),b.isPerspectiveCamera&&(b.fov=2*Un*Math.atan(1/b.projectionMatrix.elements[5]),b.zoom=1)})(ie,O,be)},this.getCamera=function(){return O},this.getFoveation=function(){if(u!==null||p!==null)return c},this.setFoveation=function(ie){c=ie,u!==null&&(u.fixedFoveation=ie),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ie)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(ie){return g[ie]};let ge=null,Ee=new sp;Ee.setAnimationLoop(function(ie,se){if(h=se.getViewerPose(l||a),f=se,h!==null){let re=h.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let be=!1;re.length!==O.cameras.length&&(O.cameras.length=0,be=!0);for(let b=0;b<re.length;b++){let S=re[b],N=null;if(p!==null)N=p.getViewport(S);else{let y=d.getViewSubImage(u,S);N=y.viewport,b===0&&(e.setRenderTargetTextures(M,y.colorTexture,y.depthStencilTexture),e.setRenderTarget(M))}let P=V[b];P===void 0&&(P=new bt,P.layers.enable(b),P.viewport=new Ye,V[b]=P),P.matrix.fromArray(S.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(S.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(N.x,N.y,N.width,N.height),b===0&&(O.matrix.copy(P.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),be===!0&&O.cameras.push(P)}let Le=n.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&_){d=i.getBinding();let b=d.getDepthInformation(re[0]);b&&b.isValid&&b.texture&&m.init(b,n.renderState)}if(Le&&Le.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let b=0;b<re.length;b++){let S=re[b].camera;if(S){let N=g[S];N||(N=new Rs,g[S]=N);let P=d.getCameraImage(S);N.sourceTexture=P}}}}for(let re=0;re<A.length;re++){let be=R[re],Le=A[re];be!==null&&Le!==void 0&&Le.update(be,se,l||a)}ge&&ge(ie,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),f=null}),this.setAnimationLoop=function(ie){ge=ie},this.dispose=function(){}}},Yn=new ni,Jf=new Ue;function Kf(r,e){function t(n,s){n.matrixAutoUpdate===!0&&n.updateMatrix(),s.value.copy(n.matrix)}function i(n,s){n.opacity.value=s.opacity,s.color&&n.diffuse.value.copy(s.color),s.emissive&&n.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(n.map.value=s.map,t(s.map,n.mapTransform)),s.alphaMap&&(n.alphaMap.value=s.alphaMap,t(s.alphaMap,n.alphaMapTransform)),s.bumpMap&&(n.bumpMap.value=s.bumpMap,t(s.bumpMap,n.bumpMapTransform),n.bumpScale.value=s.bumpScale,s.side===Ht&&(n.bumpScale.value*=-1)),s.normalMap&&(n.normalMap.value=s.normalMap,t(s.normalMap,n.normalMapTransform),n.normalScale.value.copy(s.normalScale),s.side===Ht&&n.normalScale.value.negate()),s.displacementMap&&(n.displacementMap.value=s.displacementMap,t(s.displacementMap,n.displacementMapTransform),n.displacementScale.value=s.displacementScale,n.displacementBias.value=s.displacementBias),s.emissiveMap&&(n.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,n.emissiveMapTransform)),s.specularMap&&(n.specularMap.value=s.specularMap,t(s.specularMap,n.specularMapTransform)),s.alphaTest>0&&(n.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,c=a.envMapRotation;o&&(n.envMap.value=o,Yn.copy(c),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),n.envMapRotation.value.setFromMatrix4(Jf.makeRotationFromEuler(Yn)),n.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,n.reflectivity.value=s.reflectivity,n.ior.value=s.ior,n.refractionRatio.value=s.refractionRatio),s.lightMap&&(n.lightMap.value=s.lightMap,n.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,n.lightMapTransform)),s.aoMap&&(n.aoMap.value=s.aoMap,n.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,n.aoMapTransform))}return{refreshFogUniforms:function(n,s){s.color.getRGB(n.fogColor.value,hh(r)),s.isFog?(n.fogNear.value=s.near,n.fogFar.value=s.far):s.isFogExp2&&(n.fogDensity.value=s.density)},refreshMaterialUniforms:function(n,s,a,o,c){s.isMeshBasicMaterial||s.isMeshLambertMaterial?i(n,s):s.isMeshToonMaterial?(i(n,s),(function(l,h){h.gradientMap&&(l.gradientMap.value=h.gradientMap)})(n,s)):s.isMeshPhongMaterial?(i(n,s),(function(l,h){l.specular.value.copy(h.specular),l.shininess.value=Math.max(h.shininess,1e-4)})(n,s)):s.isMeshStandardMaterial?(i(n,s),(function(l,h){l.metalness.value=h.metalness,h.metalnessMap&&(l.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,l.metalnessMapTransform)),l.roughness.value=h.roughness,h.roughnessMap&&(l.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,l.roughnessMapTransform)),h.envMap&&(l.envMapIntensity.value=h.envMapIntensity)})(n,s),s.isMeshPhysicalMaterial&&(function(l,h,d){l.ior.value=h.ior,h.sheen>0&&(l.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),l.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(l.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,l.sheenColorMapTransform)),h.sheenRoughnessMap&&(l.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,l.sheenRoughnessMapTransform))),h.clearcoat>0&&(l.clearcoat.value=h.clearcoat,l.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(l.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,l.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(l.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ht&&l.clearcoatNormalScale.value.negate())),h.dispersion>0&&(l.dispersion.value=h.dispersion),h.iridescence>0&&(l.iridescence.value=h.iridescence,l.iridescenceIOR.value=h.iridescenceIOR,l.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(l.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,l.iridescenceMapTransform)),h.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),h.transmission>0&&(l.transmission.value=h.transmission,l.transmissionSamplerMap.value=d.texture,l.transmissionSamplerSize.value.set(d.width,d.height),h.transmissionMap&&(l.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,l.transmissionMapTransform)),l.thickness.value=h.thickness,h.thicknessMap&&(l.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=h.attenuationDistance,l.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(l.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(l.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=h.specularIntensity,l.specularColor.value.copy(h.specularColor),h.specularColorMap&&(l.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,l.specularColorMapTransform)),h.specularIntensityMap&&(l.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,l.specularIntensityMapTransform))})(n,s,c)):s.isMeshMatcapMaterial?(i(n,s),(function(l,h){h.matcap&&(l.matcap.value=h.matcap)})(n,s)):s.isMeshDepthMaterial?i(n,s):s.isMeshDistanceMaterial?(i(n,s),(function(l,h){let d=e.get(h).light;l.referencePosition.value.setFromMatrixPosition(d.matrixWorld),l.nearDistance.value=d.shadow.camera.near,l.farDistance.value=d.shadow.camera.far})(n,s)):s.isMeshNormalMaterial?i(n,s):s.isLineBasicMaterial?((function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform))})(n,s),s.isLineDashedMaterial&&(function(l,h){l.dashSize.value=h.dashSize,l.totalSize.value=h.dashSize+h.gapSize,l.scale.value=h.scale})(n,s)):s.isPointsMaterial?(function(l,h,d,u){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.size.value=h.size*d,l.scale.value=.5*u,h.map&&(l.map.value=h.map,t(h.map,l.uvTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(n,s,a,o):s.isSpriteMaterial?(function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.rotation.value=h.rotation,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(n,s):s.isShadowMaterial?(n.color.value.copy(s.color),n.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function $f(r,e,t,i){let n={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(d,u,p,f){let _=d.value,m=u+"_"+p;if(f[m]===void 0)return f[m]=typeof _=="number"||typeof _=="boolean"?_:_.clone(),!0;{let g=f[m];if(typeof _=="number"||typeof _=="boolean"){if(g!==_)return f[m]=_,!0}else if(g.equals(_)===!1)return g.copy(_),!0}return!1}function l(d){let u={boundary:0,storage:0};return typeof d=="number"||typeof d=="boolean"?(u.boundary=4,u.storage=4):d.isVector2?(u.boundary=8,u.storage=8):d.isVector3||d.isColor?(u.boundary=16,u.storage=12):d.isVector4?(u.boundary=16,u.storage=16):d.isMatrix3?(u.boundary=48,u.storage=48):d.isMatrix4?(u.boundary=64,u.storage=64):d.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",d),u}function h(d){let u=d.target;u.removeEventListener("dispose",h);let p=a.indexOf(u.__bindingPointIndex);a.splice(p,1),r.deleteBuffer(n[u.id]),delete n[u.id],delete s[u.id]}return{bind:function(d,u){let p=u.program;i.uniformBlockBinding(d,p)},update:function(d,u){let p=n[d.id];p===void 0&&((function(m){let g=m.uniforms,v=0,x=16;for(let A=0,R=g.length;A<R;A++){let U=Array.isArray(g[A])?g[A]:[g[A]];for(let F=0,D=U.length;F<D;F++){let k=U[F],V=Array.isArray(k.value)?k.value:[k.value];for(let O=0,Y=V.length;O<Y;O++){let H=l(V[O]),q=v%x,Z=q%H.boundary,ne=q+Z;v+=Z,ne!==0&&x-ne<H.storage&&(v+=x-ne),k.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=H.storage}}}let M=v%x;M>0&&(v+=x-M),m.__size=v,m.__cache={}})(d),p=(function(m){let g=(function(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();m.__bindingPointIndex=g;let v=r.createBuffer(),x=m.__size,M=m.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,x,M),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,g,v),v})(d),n[d.id]=p,d.addEventListener("dispose",h));let f=u.program;i.updateUBOMapping(d,f);let _=e.render.frame;s[d.id]!==_&&((function(m){let g=n[m.id],v=m.uniforms,x=m.__cache;r.bindBuffer(r.UNIFORM_BUFFER,g);for(let M=0,A=v.length;M<A;M++){let R=Array.isArray(v[M])?v[M]:[v[M]];for(let U=0,F=R.length;U<F;U++){let D=R[U];if(c(D,M,U,x)===!0){let k=D.__offset,V=Array.isArray(D.value)?D.value:[D.value],O=0;for(let Y=0;Y<V.length;Y++){let H=V[Y],q=l(H);typeof H=="number"||typeof H=="boolean"?(D.__data[0]=H,r.bufferSubData(r.UNIFORM_BUFFER,k+O,D.__data)):H.isMatrix3?(D.__data[0]=H.elements[0],D.__data[1]=H.elements[1],D.__data[2]=H.elements[2],D.__data[3]=0,D.__data[4]=H.elements[3],D.__data[5]=H.elements[4],D.__data[6]=H.elements[5],D.__data[7]=0,D.__data[8]=H.elements[6],D.__data[9]=H.elements[7],D.__data[10]=H.elements[8],D.__data[11]=0):(H.toArray(D.__data,O),O+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,k,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)})(d),s[d.id]=_)},dispose:function(){for(let d in n)r.deleteBuffer(n[d]);a=[],n={},s={}}}}var rl=class{constructor(e={}){let{canvas:t=Ad(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1}=e,p;if(this.isWebGLRenderer=!0,i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let f=new Uint32Array(4),_=new Int32Array(4),m=null,g=null,v=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,A=!1;this._outputColorSpace=qt;let R=0,U=0,F=null,D=-1,k=null,V=new Ye,O=new Ye,Y=null,H=new Se(0),q=0,Z=t.width,ne=t.height,$=1,me=null,xe=null,ge=new Ye(0,0,Z,ne),Ee=new Ye(0,0,Z,ne),ie=!1,se=new pn,re=!1,be=!1,Le=new Ue,b=new T,S=new Ye,N={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},P=!1;function y(){return F===null?$:1}let w,L,C,X,B,z,ee,oe,te,de,_e,Me,ze,Xe,je,ce,Te,Be,Ct,fe,qe,He,ai,Gi,I=i;function Mt(E,G){return t.getContext(E,G)}try{let E={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Tn,!1),t.addEventListener("webglcontextrestored",En,!1),t.addEventListener("webglcontextcreationerror",Kr,!1),I===null){let G="webgl2";if(I=Mt(G,E),I===null)throw Mt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}function Pt(){w=new Dm(I),w.init(),He=new Zf(I,w),L=new Rm(I,w,e,He),C=new qf(I,w),L.reversedDepthBuffer&&u&&C.buffers.depth.setReversed(!0),X=new Om(I),B=new Ff,z=new Yf(I,w,C,B,L,He,X),ee=new Pm(M),oe=new Lm(M),te=new bm(I),ai=new wm(I,te),de=new Um(I,te,X,ai),_e=new Bm(I,de,te,X),Ct=new Fm(I,L,z),ce=new Cm(B),Me=new Of(M,ee,oe,w,L,ai,ce),ze=new Kf(M,B),Xe=new zf,je=new Wf(w),Be=new Em(M,ee,oe,C,_e,p,c),Te=new Xf(M,_e,L),Gi=new $f(I,X,L,C),fe=new Am(I,w,X),qe=new Nm(I,w,X),X.programs=Me.programs,M.capabilities=L,M.extensions=w,M.properties=B,M.renderLists=Xe,M.shadowMap=Te,M.state=C,M.info=X}Pt();let at=new Ah(M,I);function Tn(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function En(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let E=X.autoReset,G=Te.enabled,j=Te.autoUpdate,K=Te.needsUpdate,W=Te.type;Pt(),X.autoReset=E,Te.enabled=G,Te.autoUpdate=j,Te.needsUpdate=K,Te.type=W}function Kr(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ca(E){let G=E.target;G.removeEventListener("dispose",ca),(function(j){(function(K){let W=B.get(K).programs;W!==void 0&&(W.forEach(function(Q){Me.releaseProgram(Q)}),K.isShaderMaterial&&Me.releaseShaderCache(K))})(j),B.remove(j)})(G)}function El(E,G,j){E.transparent===!0&&E.side===gt&&E.forceSinglePass===!1?(E.side=Ht,E.needsUpdate=!0,ua(E,G,j),E.side=Br,E.needsUpdate=!0,ua(E,G,j),E.side=gt):ua(E,G,j)}this.xr=at,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let E=w.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=w.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(E){E!==void 0&&($=E,this.setSize(Z,ne,!1))},this.getSize=function(E){return E.set(Z,ne)},this.setSize=function(E,G,j=!0){at.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(Z=E,ne=G,t.width=Math.floor(E*$),t.height=Math.floor(G*$),j===!0&&(t.style.width=E+"px",t.style.height=G+"px"),this.setViewport(0,0,E,G))},this.getDrawingBufferSize=function(E){return E.set(Z*$,ne*$).floor()},this.setDrawingBufferSize=function(E,G,j){Z=E,ne=G,$=j,t.width=Math.floor(E*j),t.height=Math.floor(G*j),this.setViewport(0,0,E,G)},this.getCurrentViewport=function(E){return E.copy(V)},this.getViewport=function(E){return E.copy(ge)},this.setViewport=function(E,G,j,K){E.isVector4?ge.set(E.x,E.y,E.z,E.w):ge.set(E,G,j,K),C.viewport(V.copy(ge).multiplyScalar($).round())},this.getScissor=function(E){return E.copy(Ee)},this.setScissor=function(E,G,j,K){E.isVector4?Ee.set(E.x,E.y,E.z,E.w):Ee.set(E,G,j,K),C.scissor(O.copy(Ee).multiplyScalar($).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(E){C.setScissorTest(ie=E)},this.setOpaqueSort=function(E){me=E},this.setTransparentSort=function(E){xe=E},this.getClearColor=function(E){return E.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(E=!0,G=!0,j=!0){let K=0;if(E){let W=!1;if(F!==null){let Q=F.texture.format;W=Q===Ic||Q===Pc||Q===Jo}if(W){let Q=F.texture.type,he=Q===Ui||Q===Wn||Q===Gr||Q===Vr||Q===qo||Q===Yo,pe=Be.getClearColor(),ve=Be.getClearAlpha(),we=pe.r,Re=pe.g,Ae=pe.b;he?(f[0]=we,f[1]=Re,f[2]=Ae,f[3]=ve,I.clearBufferuiv(I.COLOR,0,f)):(_[0]=we,_[1]=Re,_[2]=Ae,_[3]=ve,I.clearBufferiv(I.COLOR,0,_))}else K|=I.COLOR_BUFFER_BIT}G&&(K|=I.DEPTH_BUFFER_BIT),j&&(K|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Tn,!1),t.removeEventListener("webglcontextrestored",En,!1),t.removeEventListener("webglcontextcreationerror",Kr,!1),Be.dispose(),Xe.dispose(),je.dispose(),B.dispose(),ee.dispose(),oe.dispose(),_e.dispose(),ai.dispose(),Gi.dispose(),Me.dispose(),at.dispose(),at.removeEventListener("sessionstart",kh),at.removeEventListener("sessionend",Vh),wn.stop()},this.renderBufferDirect=function(E,G,j,K,W,Q){G===null&&(G=N);let he=W.isMesh&&W.matrixWorld.determinant()<0,pe=(function(Ge,ot,At,Fe,Ce){ot.isScene!==!0&&(ot=N),z.resetTextureUnits();let oi=ot.fog,Rl=Fe.isMeshStandardMaterial?ot.environment:null,da=F===null?M.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Dn,nn=(Fe.isMeshStandardMaterial?oe:ee).get(Fe.envMap||Rl),Mi=Fe.vertexColors===!0&&!!At.attributes.color&&At.attributes.color.itemSize===4,nr=!!At.attributes.tangent&&(!!Fe.normalMap||Fe.anisotropy>0),ki=!!At.morphAttributes.position,Cl=!!At.morphAttributes.normal,rr=!!At.morphAttributes.color,Zh=Qi;Fe.toneMapped&&(F!==null&&F.isXRRenderTarget!==!0||(Zh=M.toneMapping));let Jh=At.morphAttributes.position||At.morphAttributes.normal||At.morphAttributes.color,Bp=Jh!==void 0?Jh.length:0,ke=B.get(Fe),zp=g.state.lights;if(re===!0&&(be===!0||Ge!==k)){let $t=Ge===k&&Fe.id===D;ce.setState(Fe,Ge,$t)}let li=!1;Fe.version===ke.__version?ke.needsLights&&ke.lightsStateVersion!==zp.state.version||ke.outputColorSpace!==da||Ce.isBatchedMesh&&ke.batching===!1?li=!0:Ce.isBatchedMesh||ke.batching!==!0?Ce.isBatchedMesh&&ke.batchingColor===!0&&Ce.colorTexture===null||Ce.isBatchedMesh&&ke.batchingColor===!1&&Ce.colorTexture!==null||Ce.isInstancedMesh&&ke.instancing===!1?li=!0:Ce.isInstancedMesh||ke.instancing!==!0?Ce.isSkinnedMesh&&ke.skinning===!1?li=!0:Ce.isSkinnedMesh||ke.skinning!==!0?Ce.isInstancedMesh&&ke.instancingColor===!0&&Ce.instanceColor===null||Ce.isInstancedMesh&&ke.instancingColor===!1&&Ce.instanceColor!==null||Ce.isInstancedMesh&&ke.instancingMorph===!0&&Ce.morphTexture===null||Ce.isInstancedMesh&&ke.instancingMorph===!1&&Ce.morphTexture!==null||ke.envMap!==nn||Fe.fog===!0&&ke.fog!==oi?li=!0:ke.numClippingPlanes===void 0||ke.numClippingPlanes===ce.numPlanes&&ke.numIntersection===ce.numIntersection?(ke.vertexAlphas!==Mi||ke.vertexTangents!==nr||ke.morphTargets!==ki||ke.morphNormals!==Cl||ke.morphColors!==rr||ke.toneMapping!==Zh||ke.morphTargetsCount!==Bp)&&(li=!0):li=!0:li=!0:li=!0:li=!0:(li=!0,ke.__version=Fe.version);let An=ke.currentProgram;li===!0&&(An=ua(Fe,ot,Ce));let Kh=!1,$r=!1,Pl=!1,pt=An.getUniforms(),rn=ke.uniforms;if(C.useProgram(An.program)&&(Kh=!0,$r=!0,Pl=!0),Fe.id!==D&&(D=Fe.id,$r=!0),Kh||k!==Ge){C.buffers.depth.getReversed()&&Ge.reversedDepth!==!0&&(Ge._reversedDepth=!0,Ge.updateProjectionMatrix()),pt.setValue(I,"projectionMatrix",Ge.projectionMatrix),pt.setValue(I,"viewMatrix",Ge.matrixWorldInverse);let $t=pt.map.cameraPosition;$t!==void 0&&$t.setValue(I,b.setFromMatrixPosition(Ge.matrixWorld)),L.logarithmicDepthBuffer&&pt.setValue(I,"logDepthBufFC",2/(Math.log(Ge.far+1)/Math.LN2)),(Fe.isMeshPhongMaterial||Fe.isMeshToonMaterial||Fe.isMeshLambertMaterial||Fe.isMeshBasicMaterial||Fe.isMeshStandardMaterial||Fe.isShaderMaterial)&&pt.setValue(I,"isOrthographic",Ge.isOrthographicCamera===!0),k!==Ge&&(k=Ge,$r=!0,Pl=!0)}if(Ce.isSkinnedMesh){pt.setOptional(I,Ce,"bindMatrix"),pt.setOptional(I,Ce,"bindMatrixInverse");let $t=Ce.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),pt.setValue(I,"boneTexture",$t.boneTexture,z))}Ce.isBatchedMesh&&(pt.setOptional(I,Ce,"batchingTexture"),pt.setValue(I,"batchingTexture",Ce._matricesTexture,z),pt.setOptional(I,Ce,"batchingIdTexture"),pt.setValue(I,"batchingIdTexture",Ce._indirectTexture,z),pt.setOptional(I,Ce,"batchingColorTexture"),Ce._colorsTexture!==null&&pt.setValue(I,"batchingColorTexture",Ce._colorsTexture,z));let Il=At.morphAttributes;Il.position===void 0&&Il.normal===void 0&&Il.color===void 0||Ct.update(Ce,At,An),($r||ke.receiveShadow!==Ce.receiveShadow)&&(ke.receiveShadow=Ce.receiveShadow,pt.setValue(I,"receiveShadow",Ce.receiveShadow)),Fe.isMeshGouraudMaterial&&Fe.envMap!==null&&(rn.envMap.value=nn,rn.flipEnvMap.value=nn.isCubeTexture&&nn.isRenderTargetTexture===!1?-1:1),Fe.isMeshStandardMaterial&&Fe.envMap===null&&ot.environment!==null&&(rn.envMapIntensity.value=ot.environmentIntensity),$r&&(pt.setValue(I,"toneMappingExposure",M.toneMappingExposure),ke.needsLights&&(ci=Pl,(Si=rn).ambientLightColor.needsUpdate=ci,Si.lightProbe.needsUpdate=ci,Si.directionalLights.needsUpdate=ci,Si.directionalLightShadows.needsUpdate=ci,Si.pointLights.needsUpdate=ci,Si.pointLightShadows.needsUpdate=ci,Si.spotLights.needsUpdate=ci,Si.spotLightShadows.needsUpdate=ci,Si.rectAreaLights.needsUpdate=ci,Si.hemisphereLights.needsUpdate=ci),oi&&Fe.fog===!0&&ze.refreshFogUniforms(rn,oi),ze.refreshMaterialUniforms(rn,Fe,$,ne,g.state.transmissionRenderTarget[Ge.id]),Xr.upload(I,qh(ke),rn,z));var Si,ci;if(Fe.isShaderMaterial&&Fe.uniformsNeedUpdate===!0&&(Xr.upload(I,qh(ke),rn,z),Fe.uniformsNeedUpdate=!1),Fe.isSpriteMaterial&&pt.setValue(I,"center",Ce.center),pt.setValue(I,"modelViewMatrix",Ce.modelViewMatrix),pt.setValue(I,"normalMatrix",Ce.normalMatrix),pt.setValue(I,"modelMatrix",Ce.matrixWorld),Fe.isShaderMaterial||Fe.isRawShaderMaterial){let $t=Fe.uniformsGroups;for(let Ll=0,Hp=$t.length;Ll<Hp;Ll++){let $h=$t[Ll];Gi.update($h,An),Gi.bind($h,An)}}return An})(E,G,j,K,W);C.setMaterial(K,he);let ve=j.index,we=1;if(K.wireframe===!0){if(ve=de.getWireframeAttribute(j),ve===void 0)return;we=2}let Re=j.drawRange,Ae=j.attributes.position,Oe=Re.start*we,it=(Re.start+Re.count)*we;Q!==null&&(Oe=Math.max(Oe,Q.start*we),it=Math.min(it,(Q.start+Q.count)*we)),ve!==null?(Oe=Math.max(Oe,0),it=Math.min(it,ve.count)):Ae!=null&&(Oe=Math.max(Oe,0),it=Math.min(it,Ae.count));let ht=it-Oe;if(ht<0||ht===1/0)return;let dt;ai.setup(W,K,pe,j,ve);let nt=fe;if(ve!==null&&(dt=te.get(ve),nt=qe,nt.setIndex(dt)),W.isMesh)K.wireframe===!0?(C.setLineWidth(K.wireframeLinewidth*y()),nt.setMode(I.LINES)):nt.setMode(I.TRIANGLES);else if(W.isLine){let Ge=K.linewidth;Ge===void 0&&(Ge=1),C.setLineWidth(Ge*y()),W.isLineSegments?nt.setMode(I.LINES):W.isLineLoop?nt.setMode(I.LINE_LOOP):nt.setMode(I.LINE_STRIP)}else W.isPoints?nt.setMode(I.POINTS):W.isSprite&&nt.setMode(I.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Tr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),nt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(w.get("WEBGL_multi_draw"))nt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Ge=W._multiDrawStarts,ot=W._multiDrawCounts,At=W._multiDrawCount,Fe=ve?te.get(ve).bytesPerElement:1,Ce=B.get(K).currentProgram.getUniforms();for(let oi=0;oi<At;oi++)Ce.setValue(I,"_gl_DrawID",oi),nt.render(Ge[oi]/Fe,ot[oi])}else if(W.isInstancedMesh)nt.renderInstances(Oe,ht,W.count);else if(j.isInstancedBufferGeometry){let Ge=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,ot=Math.min(j.instanceCount,Ge);nt.renderInstances(Oe,ht,ot)}else nt.render(Oe,ht)},this.compile=function(E,G,j=null){j===null&&(j=E),g=je.get(j),g.init(G),x.push(g),j.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),E!==j&&E.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),g.setupLights();let K=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let Q=W.material;if(Q)if(Array.isArray(Q))for(let he=0;he<Q.length;he++){let pe=Q[he];El(pe,j,W),K.add(pe)}else El(Q,j,W),K.add(Q)}),g=x.pop(),K},this.compileAsync=function(E,G,j=null){let K=this.compile(E,G,j);return new Promise(W=>{function Q(){K.forEach(function(he){B.get(he).currentProgram.isReady()&&K.delete(he)}),K.size!==0?setTimeout(Q,10):W(E)}w.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let wl=null;function kh(){wn.stop()}function Vh(){wn.start()}let wn=new sp;function Al(E,G,j,K){if(E.visible===!1)return;if(E.layers.test(G.layers)){if(E.isGroup)j=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(G);else if(E.isLight)g.pushLight(E),E.castShadow&&g.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||se.intersectsSprite(E)){K&&S.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Le);let Q=_e.update(E),he=E.material;he.visible&&m.push(E,Q,he,j,S.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||se.intersectsObject(E))){let Q=_e.update(E),he=E.material;if(K&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),S.copy(E.boundingSphere.center)):(Q.boundingSphere===null&&Q.computeBoundingSphere(),S.copy(Q.boundingSphere.center)),S.applyMatrix4(E.matrixWorld).applyMatrix4(Le)),Array.isArray(he)){let pe=Q.groups;for(let ve=0,we=pe.length;ve<we;ve++){let Re=pe[ve],Ae=he[Re.materialIndex];Ae&&Ae.visible&&m.push(E,Q,Ae,j,S.z,Re)}}else he.visible&&m.push(E,Q,he,j,S.z,null)}}let W=E.children;for(let Q=0,he=W.length;Q<he;Q++)Al(W[Q],G,j,K)}function Wh(E,G,j,K){let W=E.opaque,Q=E.transmissive,he=E.transparent;g.setupLightsView(j),re===!0&&ce.setGlobalState(M.clippingPlanes,j),K&&C.viewport(V.copy(K)),W.length>0&&ha(W,G,j),Q.length>0&&ha(Q,G,j),he.length>0&&ha(he,G,j),C.buffers.depth.setTest(!0),C.buffers.depth.setMask(!0),C.buffers.color.setMask(!0),C.setPolygonOffset(!1)}function Xh(E,G,j,K){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[K.id]===void 0&&(g.state.transmissionRenderTarget[K.id]=new Ii(1,1,{generateMipmaps:!0,type:w.has("EXT_color_buffer_half_float")||w.has("EXT_color_buffer_float")?kr:Ui,minFilter:Vn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ve.workingColorSpace}));let W=g.state.transmissionRenderTarget[K.id],Q=K.viewport||V;W.setSize(Q.z*M.transmissionResolutionScale,Q.w*M.transmissionResolutionScale);let he=M.getRenderTarget(),pe=M.getActiveCubeFace(),ve=M.getActiveMipmapLevel();M.setRenderTarget(W),M.getClearColor(H),q=M.getClearAlpha(),q<1&&M.setClearColor(16777215,.5),M.clear(),P&&Be.render(j);let we=M.toneMapping;M.toneMapping=Qi;let Re=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),g.setupLightsView(K),re===!0&&ce.setGlobalState(M.clippingPlanes,K),ha(E,j,K),z.updateMultisampleRenderTarget(W),z.updateRenderTargetMipmap(W),w.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let Oe=0,it=G.length;Oe<it;Oe++){let ht=G[Oe],dt=ht.object,nt=ht.geometry,Ge=ht.material,ot=ht.group;if(Ge.side===gt&&dt.layers.test(K.layers)){let At=Ge.side;Ge.side=Ht,Ge.needsUpdate=!0,jh(dt,j,K,nt,Ge,ot),Ge.side=At,Ge.needsUpdate=!0,Ae=!0}}Ae===!0&&(z.updateMultisampleRenderTarget(W),z.updateRenderTargetMipmap(W))}M.setRenderTarget(he,pe,ve),M.setClearColor(H,q),Re!==void 0&&(K.viewport=Re),M.toneMapping=we}function ha(E,G,j){let K=G.isScene===!0?G.overrideMaterial:null;for(let W=0,Q=E.length;W<Q;W++){let he=E[W],pe=he.object,ve=he.geometry,we=he.group,Re=he.material;Re.allowOverride===!0&&K!==null&&(Re=K),pe.layers.test(j.layers)&&jh(pe,G,j,ve,Re,we)}}function jh(E,G,j,K,W,Q){E.onBeforeRender(M,G,j,K,W,Q),E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(M,G,j,K,E,Q),W.transparent===!0&&W.side===gt&&W.forceSinglePass===!1?(W.side=Ht,W.needsUpdate=!0,M.renderBufferDirect(j,G,K,W,E,Q),W.side=Br,W.needsUpdate=!0,M.renderBufferDirect(j,G,K,W,E,Q),W.side=gt):M.renderBufferDirect(j,G,K,W,E,Q),E.onAfterRender(M,G,j,K,W,Q)}function ua(E,G,j){G.isScene!==!0&&(G=N);let K=B.get(E),W=g.state.lights,Q=g.state.shadowsArray,he=W.state.version,pe=Me.getParameters(E,W.state,Q,G,j),ve=Me.getProgramCacheKey(pe),we=K.programs;K.environment=E.isMeshStandardMaterial?G.environment:null,K.fog=G.fog,K.envMap=(E.isMeshStandardMaterial?oe:ee).get(E.envMap||K.environment),K.envMapRotation=K.environment!==null&&E.envMap===null?G.environmentRotation:E.envMapRotation,we===void 0&&(E.addEventListener("dispose",ca),we=new Map,K.programs=we);let Re=we.get(ve);if(Re!==void 0){if(K.currentProgram===Re&&K.lightsStateVersion===he)return Yh(E,pe),Re}else pe.uniforms=Me.getUniforms(E),E.onBeforeCompile(pe,M),Re=Me.acquireProgram(pe,ve),we.set(ve,Re),K.uniforms=pe.uniforms;let Ae=K.uniforms;return(E.isShaderMaterial||E.isRawShaderMaterial)&&E.clipping!==!0||(Ae.clippingPlanes=ce.uniform),Yh(E,pe),K.needsLights=(function(Oe){return Oe.isMeshLambertMaterial||Oe.isMeshToonMaterial||Oe.isMeshPhongMaterial||Oe.isMeshStandardMaterial||Oe.isShadowMaterial||Oe.isShaderMaterial&&Oe.lights===!0})(E),K.lightsStateVersion=he,K.needsLights&&(Ae.ambientLightColor.value=W.state.ambient,Ae.lightProbe.value=W.state.probe,Ae.directionalLights.value=W.state.directional,Ae.directionalLightShadows.value=W.state.directionalShadow,Ae.spotLights.value=W.state.spot,Ae.spotLightShadows.value=W.state.spotShadow,Ae.rectAreaLights.value=W.state.rectArea,Ae.ltc_1.value=W.state.rectAreaLTC1,Ae.ltc_2.value=W.state.rectAreaLTC2,Ae.pointLights.value=W.state.point,Ae.pointLightShadows.value=W.state.pointShadow,Ae.hemisphereLights.value=W.state.hemi,Ae.directionalShadowMap.value=W.state.directionalShadowMap,Ae.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ae.spotShadowMap.value=W.state.spotShadowMap,Ae.spotLightMatrix.value=W.state.spotLightMatrix,Ae.spotLightMap.value=W.state.spotLightMap,Ae.pointShadowMap.value=W.state.pointShadowMap,Ae.pointShadowMatrix.value=W.state.pointShadowMatrix),K.currentProgram=Re,K.uniformsList=null,Re}function qh(E){if(E.uniformsList===null){let G=E.currentProgram.getUniforms();E.uniformsList=Xr.seqWithValue(G.seq,E.uniforms)}return E.uniformsList}function Yh(E,G){let j=B.get(E);j.outputColorSpace=G.outputColorSpace,j.batching=G.batching,j.batchingColor=G.batchingColor,j.instancing=G.instancing,j.instancingColor=G.instancingColor,j.instancingMorph=G.instancingMorph,j.skinning=G.skinning,j.morphTargets=G.morphTargets,j.morphNormals=G.morphNormals,j.morphColors=G.morphColors,j.morphTargetsCount=G.morphTargetsCount,j.numClippingPlanes=G.numClippingPlanes,j.numIntersection=G.numClipIntersection,j.vertexAlphas=G.vertexAlphas,j.vertexTangents=G.vertexTangents,j.toneMapping=G.toneMapping}wn.setAnimationLoop(function(E){wl&&wl(E)}),typeof self<"u"&&wn.setContext(self),this.setAnimationLoop=function(E){wl=E,at.setAnimationLoop(E),E===null?wn.stop():wn.start()},at.addEventListener("sessionstart",kh),at.addEventListener("sessionend",Vh),this.render=function(E,G){if(G!==void 0&&G.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(A===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(at.cameraAutoUpdate===!0&&at.updateCamera(G),G=at.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,G,F),g=je.get(E,x.length),g.init(G),x.push(g),Le.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),se.setFromProjectionMatrix(Le,Zi,G.reversedDepth),be=this.localClippingEnabled,re=ce.init(this.clippingPlanes,be),m=Xe.get(E,v.length),m.init(),v.push(m),at.enabled===!0&&at.isPresenting===!0){let Q=M.xr.getDepthSensingMesh();Q!==null&&Al(Q,G,-1/0,M.sortObjects)}Al(E,G,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(me,xe),P=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,P&&Be.addToRenderList(m,E),this.info.render.frame++,re===!0&&ce.beginShadows();let j=g.state.shadowsArray;Te.render(j,E,G),re===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();let K=m.opaque,W=m.transmissive;if(g.setupLights(),G.isArrayCamera){let Q=G.cameras;if(W.length>0)for(let he=0,pe=Q.length;he<pe;he++)Xh(K,W,E,Q[he]);P&&Be.render(E);for(let he=0,pe=Q.length;he<pe;he++){let ve=Q[he];Wh(m,E,ve,ve.viewport)}}else W.length>0&&Xh(K,W,E,G),P&&Be.render(E),Wh(m,E,G);F!==null&&U===0&&(z.updateMultisampleRenderTarget(F),z.updateRenderTargetMipmap(F)),E.isScene===!0&&E.onAfterRender(M,E,G),ai.resetDefaultState(),D=-1,k=null,x.pop(),x.length>0?(g=x[x.length-1],re===!0&&ce.setGlobalState(M.clippingPlanes,g.state.camera)):g=null,v.pop(),m=v.length>0?v[v.length-1]:null},this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(E,G,j){let K=B.get(E);K.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),B.get(E.texture).__webglTexture=G,B.get(E.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:j,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,G){let j=B.get(E);j.__webglFramebuffer=G,j.__useDefaultFramebuffer=G===void 0};let Np=I.createFramebuffer();this.setRenderTarget=function(E,G=0,j=0){F=E,R=G,U=j;let K=!0,W=null,Q=!1,he=!1;if(E){let pe=B.get(E);if(pe.__useDefaultFramebuffer!==void 0)C.bindFramebuffer(I.FRAMEBUFFER,null),K=!1;else if(pe.__webglFramebuffer===void 0)z.setupRenderTarget(E);else if(pe.__hasExternalTextures)z.rebindTextures(E,B.get(E.texture).__webglTexture,B.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Re=E.depthTexture;if(pe.__boundDepthTexture!==Re){if(Re!==null&&B.has(Re)&&(E.width!==Re.image.width||E.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(E)}}let ve=E.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(he=!0);let we=B.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(W=Array.isArray(we[G])?we[G][j]:we[G],Q=!0):W=E.samples>0&&z.useMultisampledRTT(E)===!1?B.get(E).__webglMultisampledFramebuffer:Array.isArray(we)?we[j]:we,V.copy(E.viewport),O.copy(E.scissor),Y=E.scissorTest}else V.copy(ge).multiplyScalar($).floor(),O.copy(Ee).multiplyScalar($).floor(),Y=ie;if(j!==0&&(W=Np),C.bindFramebuffer(I.FRAMEBUFFER,W)&&K&&C.drawBuffers(E,W),C.viewport(V),C.scissor(O),C.setScissorTest(Y),Q){let pe=B.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+G,pe.__webglTexture,j)}else if(he){let pe=G;for(let ve=0;ve<E.textures.length;ve++){let we=B.get(E.textures[ve]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+ve,we.__webglTexture,j,pe)}}else if(E!==null&&j!==0){let pe=B.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,pe.__webglTexture,j)}D=-1},this.readRenderTargetPixels=function(E,G,j,K,W,Q,he,pe=0){if(!E||!E.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=B.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&he!==void 0&&(ve=ve[he]),ve){C.bindFramebuffer(I.FRAMEBUFFER,ve);try{let we=E.textures[pe],Re=we.format,Ae=we.type;if(!L.textureFormatReadable(Re))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!L.textureTypeReadable(Ae))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");G>=0&&G<=E.width-K&&j>=0&&j<=E.height-W&&(E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+pe),I.readPixels(G,j,K,W,He.convert(Re),He.convert(Ae),Q))}finally{let we=F!==null?B.get(F).__webglFramebuffer:null;C.bindFramebuffer(I.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(E,G,j,K,W,Q,he,pe=0){if(!E||!E.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=B.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&he!==void 0&&(ve=ve[he]),ve){if(G>=0&&G<=E.width-K&&j>=0&&j<=E.height-W){C.bindFramebuffer(I.FRAMEBUFFER,ve);let we=E.textures[pe],Re=we.format,Ae=we.type;if(!L.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!L.textureTypeReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Oe=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Oe),I.bufferData(I.PIXEL_PACK_BUFFER,Q.byteLength,I.STREAM_READ),E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+pe),I.readPixels(G,j,K,W,He.convert(Re),He.convert(Ae),0);let it=F!==null?B.get(F).__webglFramebuffer:null;C.bindFramebuffer(I.FRAMEBUFFER,it);let ht=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Rd(I,ht,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Oe),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Q),I.deleteBuffer(Oe),I.deleteSync(ht),Q}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,G=null,j=0){let K=Math.pow(2,-j),W=Math.floor(E.image.width*K),Q=Math.floor(E.image.height*K),he=G!==null?G.x:0,pe=G!==null?G.y:0;z.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,j,0,0,he,pe,W,Q),C.unbindTexture()};let Op=I.createFramebuffer(),Fp=I.createFramebuffer();this.copyTextureToTexture=function(E,G,j=null,K=null,W=0,Q=null){let he,pe,ve,we,Re,Ae,Oe,it,ht;Q===null&&(W!==0?(Tr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=W,W=0):Q=0);let dt=E.isCompressedTexture?E.mipmaps[Q]:E.image;if(j!==null)he=j.max.x-j.min.x,pe=j.max.y-j.min.y,ve=j.isBox3?j.max.z-j.min.z:1,we=j.min.x,Re=j.min.y,Ae=j.isBox3?j.min.z:0;else{let Mi=Math.pow(2,-W);he=Math.floor(dt.width*Mi),pe=Math.floor(dt.height*Mi),ve=E.isDataArrayTexture?dt.depth:E.isData3DTexture?Math.floor(dt.depth*Mi):1,we=0,Re=0,Ae=0}K!==null?(Oe=K.x,it=K.y,ht=K.z):(Oe=0,it=0,ht=0);let nt=He.convert(G.format),Ge=He.convert(G.type),ot;G.isData3DTexture?(z.setTexture3D(G,0),ot=I.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(z.setTexture2DArray(G,0),ot=I.TEXTURE_2D_ARRAY):(z.setTexture2D(G,0),ot=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,G.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,G.unpackAlignment);let At=I.getParameter(I.UNPACK_ROW_LENGTH),Fe=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ce=I.getParameter(I.UNPACK_SKIP_PIXELS),oi=I.getParameter(I.UNPACK_SKIP_ROWS),Rl=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,dt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,dt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,we),I.pixelStorei(I.UNPACK_SKIP_ROWS,Re),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ae);let da=E.isDataArrayTexture||E.isData3DTexture,nn=G.isDataArrayTexture||G.isData3DTexture;if(E.isDepthTexture){let Mi=B.get(E),nr=B.get(G),ki=B.get(Mi.__renderTarget),Cl=B.get(nr.__renderTarget);C.bindFramebuffer(I.READ_FRAMEBUFFER,ki.__webglFramebuffer),C.bindFramebuffer(I.DRAW_FRAMEBUFFER,Cl.__webglFramebuffer);for(let rr=0;rr<ve;rr++)da&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,B.get(E).__webglTexture,W,Ae+rr),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,B.get(G).__webglTexture,Q,ht+rr)),I.blitFramebuffer(we,Re,he,pe,Oe,it,he,pe,I.DEPTH_BUFFER_BIT,I.NEAREST);C.bindFramebuffer(I.READ_FRAMEBUFFER,null),C.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(W!==0||E.isRenderTargetTexture||B.has(E)){let Mi=B.get(E),nr=B.get(G);C.bindFramebuffer(I.READ_FRAMEBUFFER,Op),C.bindFramebuffer(I.DRAW_FRAMEBUFFER,Fp);for(let ki=0;ki<ve;ki++)da?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Mi.__webglTexture,W,Ae+ki):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Mi.__webglTexture,W),nn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,nr.__webglTexture,Q,ht+ki):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,nr.__webglTexture,Q),W!==0?I.blitFramebuffer(we,Re,he,pe,Oe,it,he,pe,I.COLOR_BUFFER_BIT,I.NEAREST):nn?I.copyTexSubImage3D(ot,Q,Oe,it,ht+ki,we,Re,he,pe):I.copyTexSubImage2D(ot,Q,Oe,it,we,Re,he,pe);C.bindFramebuffer(I.READ_FRAMEBUFFER,null),C.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else nn?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(ot,Q,Oe,it,ht,he,pe,ve,nt,Ge,dt.data):G.isCompressedArrayTexture?I.compressedTexSubImage3D(ot,Q,Oe,it,ht,he,pe,ve,nt,dt.data):I.texSubImage3D(ot,Q,Oe,it,ht,he,pe,ve,nt,Ge,dt):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Q,Oe,it,he,pe,nt,Ge,dt.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Q,Oe,it,dt.width,dt.height,nt,dt.data):I.texSubImage2D(I.TEXTURE_2D,Q,Oe,it,he,pe,nt,Ge,dt);I.pixelStorei(I.UNPACK_ROW_LENGTH,At),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Fe),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ce),I.pixelStorei(I.UNPACK_SKIP_ROWS,oi),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Rl),Q===0&&G.generateMipmaps&&I.generateMipmap(ot),C.unbindTexture()},this.initRenderTarget=function(E){B.get(E).__webglFramebuffer===void 0&&z.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?z.setTextureCube(E,0):E.isData3DTexture?z.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?z.setTexture2DArray(E,0):z.setTexture2D(E,0),C.unbindTexture()},this.resetState=function(){R=0,U=0,F=null,C.reset(),ai.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ve._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ve._getUnpackColorSpace()}};var hp={type:"change"},Ph={type:"start"},dp={type:"end"},al=new Li,up=new ei,eg=Math.cos(70*Qs.DEG2RAD),xt=new T,Vt=2*Math.PI,$e={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ch=1e-6,ol=class extends js{constructor(e,t=null){super(e,t),this.state=$e.NONE,this.target=new T,this.cursor=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_n.ROTATE,MIDDLE:_n.DOLLY,RIGHT:_n.PAN},this.touches={ONE:vn.ROTATE,TWO:vn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new T,this._lastQuaternion=new Dt,this._lastTargetPosition=new T,this._quat=new Dt().setFromUnitVectors(e.up,new T(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new gn,this._sphericalDelta=new gn,this._scale=1,this._panOffset=new T,this._rotateStart=new J,this._rotateEnd=new J,this._rotateDelta=new J,this._panStart=new J,this._panEnd=new J,this._panDelta=new J,this._dollyStart=new J,this._dollyEnd=new J,this._dollyDelta=new J,this._dollyDirection=new T,this._mouse=new J,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ig.bind(this),this._onPointerDown=tg.bind(this),this._onPointerUp=ng.bind(this),this._onContextMenu=hg.bind(this),this._onMouseWheel=ag.bind(this),this._onKeyDown=og.bind(this),this._onTouchStart=lg.bind(this),this._onTouchMove=cg.bind(this),this._onMouseDown=rg.bind(this),this._onMouseMove=sg.bind(this),this._interceptControlDown=ug.bind(this),this._interceptControlUp=dg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(hp),this.update(),this.state=$e.NONE}update(e=null){let t=this.object.position;xt.copy(t).sub(this.target),xt.applyQuaternion(this._quat),this._spherical.setFromVector3(xt),this.autoRotate&&this.state===$e.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,n=this.maxAzimuthAngle;isFinite(i)&&isFinite(n)&&(i<-Math.PI?i+=Vt:i>Math.PI&&(i-=Vt),n<-Math.PI?n+=Vt:n>Math.PI&&(n-=Vt),i<=n?this._spherical.theta=Math.max(i,Math.min(n,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+n)/2?Math.max(i,this._spherical.theta):Math.min(n,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(xt.setFromSpherical(this._spherical),xt.applyQuaternion(this._quatInverse),t.copy(this.target).add(xt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=xt.length();a=this._clampDistance(o*this._scale);let c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){let o=new T(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;let l=new T(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=xt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(al.origin.copy(this.object.position),al.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(al.direction))<eg?this.object.lookAt(this.target):(up.setFromNormalAndCoplanarPoint(this.object.up,this.target),al.intersectPlane(up,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Ch||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ch||this._lastTargetPosition.distanceToSquared(this.target)>Ch?(this.dispatchEvent(hp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Vt/60*this.autoRotateSpeed*e:Vt/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){xt.setFromMatrixColumn(t,0),xt.multiplyScalar(-e),this._panOffset.add(xt)}_panUp(e,t){this.screenSpacePanning===!0?xt.setFromMatrixColumn(t,1):(xt.setFromMatrixColumn(t,0),xt.crossVectors(this.object.up,xt)),xt.multiplyScalar(e),this._panOffset.add(xt)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let n=this.object.position;xt.copy(n).sub(this.target);let s=xt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),n=e-i.left,s=t-i.top,a=i.width,o=i.height;this._mouse.x=n/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Vt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Vt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Vt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Vt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Vt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Vt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._rotateStart.set(i,n)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panStart.set(i,n)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,s=Math.sqrt(i*i+n*n);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),n=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(n,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Vt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Vt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panEnd.set(i,n)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,s=Math.sqrt(i*i+n*n);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new J,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function tg(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function ig(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function ng(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(dp),this.state=$e.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function rg(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case _n.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=$e.DOLLY;break;case _n.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=$e.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=$e.ROTATE}break;case _n.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=$e.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=$e.PAN}break;default:this.state=$e.NONE}this.state!==$e.NONE&&this.dispatchEvent(Ph)}function sg(r){switch(this.state){case $e.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case $e.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case $e.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function ag(r){this.enabled===!1||this.enableZoom===!1||this.state!==$e.NONE||(r.preventDefault(),this.dispatchEvent(Ph),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(dp))}function og(r){this.enabled!==!1&&this._handleKeyDown(r)}function lg(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case vn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=$e.TOUCH_ROTATE;break;case vn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=$e.TOUCH_PAN;break;default:this.state=$e.NONE}break;case 2:switch(this.touches.TWO){case vn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=$e.TOUCH_DOLLY_PAN;break;case vn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=$e.TOUCH_DOLLY_ROTATE;break;default:this.state=$e.NONE}break;default:this.state=$e.NONE}this.state!==$e.NONE&&this.dispatchEvent(Ph)}function cg(r){switch(this._trackPointer(r),this.state){case $e.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case $e.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case $e.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case $e.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=$e.NONE}}function hg(r){this.enabled!==!1&&r.preventDefault()}function ug(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function dg(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var ll=class extends Nn{constructor(){super();let e=new fi;e.deleteAttribute("uv");let t=new Pe({side:Ht}),i=new Pe,n=new Gn(16777215,900,28,2);n.position.set(.418,16.199,.3),this.add(n);let s=new tt(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let a=new Ji(e,i,6),o=new rt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new tt(e,Yr(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new tt(e,Yr(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new tt(e,Yr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new tt(e,Yr(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new tt(e,Yr(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let p=new tt(e,Yr(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Yr(r){return new Bs({color:0,emissive:16777215,emissiveIntensity:r})}var We=r=>document.querySelector(r),Nh=r=>[...document.querySelectorAll(r)],Sl=matchMedia("(prefers-reduced-motion: reduce)").matches,le={mode:"cutaway",step:"overview",started:!1,playing:!1,follow:!Sl,speed:1,time:0,phase:0,rendered:!1,stage:"idle"},xi,yt,Jt,ct,Wt,Oi,Fi,pp,mp,ul,Qn,Kn,aa,ia,na,Mn,Bi,dl,pl,pg=[],Jr=[],yp=[],en=[],Mp=[],fp=[],Sp={},bp=[],Oh=[],Tp=[],gl=38,mg=26.2,ra=[],Fh=[],Ep=[],$n,wp,Zr,ml,oa=0,Bh=0,Jn=0,zh={uHeat:{value:0}},Hh=0,fg=[{at:0,name:"condenser"},{at:1,name:"feedwater"},{at:5.8,name:"boiler"},{at:9.6,name:"superheater"},{at:11.6,name:"steam"},{at:12.7,name:"turbine"},{at:17,name:"generator"},{at:20,name:"distribution"},{at:24,name:"load"},{at:26.2,name:"light"},{at:28,name:"charging"},{at:31,name:"electric-car"},{at:38,name:"complete"}],gg={water:{start:1,velocity:1.65},boiler:{start:5.8,velocity:1.1},superheater:{start:9.6,velocity:6.5},steam:{start:11.6,velocity:10.5},internal:{start:12.25,velocity:9},"steam-out":{start:13,velocity:3.5},condensation:{start:14.8,velocity:.8},"heat-transfer":{start:14.8,velocity:.6},electric:{start:13.4,velocity:4.4},"load-electric":{start:24.1,velocity:5.4},"ev-feed":{start:27.5,velocity:4.2},"ev-charge":{start:29.3,velocity:2.6},"heat-in":{start:6,velocity:1.4},downcomer:{start:5.4,velocity:.8},cooling:{start:.35,velocity:1.1},exhaust:{start:5.8,velocity:1.4}},_g=Qs.clamp;function zi(r,e,t){let i=_g((r-e)/(t-e),0,1);return i*i*(3-2*i)}var ut=r=>new T(...r),Et=new Pe({color:11715774,metalness:.68,roughness:.32}),ft=new Pe({color:13095341,metalness:.28,roughness:.43}),st=new Pe({color:5204069,metalness:.48,roughness:.4}),Ap=new Pe({color:12024130,metalness:.72,roughness:.3}),ri=new Pe({color:8230278,metalness:.4,roughness:.53}),bn=new Pe({color:14409673,roughness:.75}),_l=new Pe({color:14321745,metalness:.33,roughness:.4}),sa=new Pe({color:6135742,metalness:.3,roughness:.38}),Ih=new Pe({color:4956315,metalness:.35,roughness:.4}),Px=new Pe({color:13018951,metalness:.48,roughness:.38});function wt(r,e,t,i=Wt){let n=new tt(r,e);return n.position.copy(ut(t)),n.castShadow=!0,n.receiveShadow=!0,i.add(n),n}function ue(r,e,t=Et,i=Wt){return wt(new fi(...r),t,e,i)}function Ze(r,e,t,i,n=Et,s=Wt,a="x",o=40){let c=wt(new Ki(r,e,t,o),n,i,s);return a==="x"&&(c.rotation.z=-Math.PI/2),a==="z"&&(c.rotation.x=Math.PI/2),c}function Kt(r,e,t,i=Et,n=Wt,s="x"){let a=wt(new Bn(r,e,8,48),i,t,n);return s==="x"&&(a.rotation.y=Math.PI/2),s==="y"&&(a.rotation.x=Math.PI/2),a}function tn(r,e,t,i=Wt,n=!0){let s=n?new $i(r.map(ut),!1,"centripetal"):new Dr;if(!n)for(let o=0;o<r.length-1;o++)s.add(new fn(ut(r[o]),ut(r[o+1])));return{mesh:wt(new Or(s,Math.max(24,r.length*12),e,10,!1),t,[0,0,0],i),curve:s}}function si(r,e,t,i,n=Wt){let s=ut(e).sub(ut(r)),a=Ze(t,t,s.length(),ut(r).add(ut(e)).multiplyScalar(.5).toArray(),i,n,"y",10);return a.quaternion.setFromUnitVectors(new T(0,1,0),s.normalize()),a}function Hi(r,e,t=28,i=.12,n="fluid",s=.075){let a=["steam","internal","superheater","heat-in"].includes(n);a&&n!=="heat-in"&&(t=n==="steam"?13:n==="internal"?18:20),n==="steam-out"&&(t=12,s*=.55),n==="steam"&&(e=16761937);let o=a?new Ir(s*.65,s*3.5,6):new gi(s,7,5),c=new Bt({color:["boiler","condensation"].includes(n)?16777215:e,toneMapped:!1}),l=new Ji(o,c,t);l.instanceMatrix.setUsage(oh),l.frustumCulled=!1,Wt.add(l);let h=r.getLength(),d=gg[n]||{start:0,velocity:1},u=Array.from({length:601},(f,_)=>r.getPointAt(_/600)),p=a?Array.from({length:601},(f,_)=>new Dt().setFromUnitVectors(new T(0,1,0),r.getTangentAt(_/600).normalize())):null;return en.push({curve:r,inst:l,count:t,speed:i,type:n,length:h,fast:a,samples:u,rotations:p,...d,visibleCount:0}),l}function Sn(r,e,t,i,n=.13,s="fluid"){let a=t.clone();a.transparent=!0,a.opacity=["steam","superheater"].includes(s)?.3:.52,a.depthWrite=!1,pg.push(a);let o=tn(r,e,a);return Hi(o.curve,i,32,n,s,e*.68),o}function ir(r){let e=new Tt;return e.userData.part=r,Wt.add(e),Sp[r]=e,e}function Rp(r,e,t,i,n){for(let s=0;s<12;s++){let a=s/12*Math.PI*2;Ze(.042,.042,.11,[r,t+Math.cos(a)*e,i+Math.sin(a)*e],Et,n,"x",6)}}function fl(r,e,t,i){ue([.32,.48,.65],[r,e-.6,t],ft,i),Ze(.29,.29,.38,[r,e,t],ft,i),Kt(.23,.04,[r+.2,e,t],st,i)}function vl(r,e,t,i,n,s,a,o,c){let l=new Ki(i,n,s,56,1,!0,c?Math.PI:0,Math.PI),h=wt(l,a,[r,e,t],o);return h.rotation.z=-Math.PI/2,h}function vg(r){let e=new zt({uniforms:zh,transparent:!0,depthWrite:!1,side:gt,vertexShader:"varying float h;void main(){h=uv.y;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform float uHeat;varying float h;
   void main(){float warm=smoothstep(.02,.7,uHeat-h*.24);
   vec3 color=mix(vec3(.12,.48,.86),vec3(1.,.52,.12),warm);
   float vapour=smoothstep(.58,1.,h)*smoothstep(.55,1.,uHeat);
   gl_FragColor=vec4(mix(color,vec3(1.,.88,.54),vapour),.75-vapour*.42);
   #include <colorspace_fragment>
   }`});for(let a=0;a<6;a++){let o=-7.28+a*.43,c=sa.clone();c.transparent=!0,c.opacity=.19,c.depthWrite=!1,Ze(.145,.145,4.15,[o,3.175,-1.5],c,r,"y",20),Tp.push(c),Ze(.117,.117,4.12,[o,3.175,-1.5],e,r,"y",20),Hi(new fn(ut([o,1.1,-1.5]),ut([o,5.25,-1.5])),13496319,13,.1,"boiler",.048);for(let l of[1.6,2.3,3])Hi(new $i([[o,l-.18,-.56],[o,l,-.94],[o,l+.05,-1.32]].map(ut)),16755254,4,.1,"heat-in",.047)}Sn([[-5.05,1.1,-1.5],[-6.3,1.1,-1.5],[-7.4,1.1,-1.5]],.17,sa,10147839,.11,"downcomer"),Sn([[-7.36,5.33,-1.4],[-7.52,5.1,-1.73],[-7.52,1.38,-1.73],[-7.35,1.1,-1.5]],.12,sa,10147839,.11,"downcomer");let t=new Pe({color:10467518,transparent:!0,opacity:.16,metalness:.18,roughness:.22,side:gt,depthWrite:!1});Ze(.48,.48,3.15,[-6.05,5.45,-1.4],t,r);for(let a of[-7.65,-4.45])Kt(.48,.043,[a,5.45,-1.4],Et,r),Rp(a,.42,5.45,-1.4,r);dl=new Pe({color:3773669,transparent:!0,opacity:.73,roughness:.3,side:gt});let i=wt(new Ki(.415,.415,3.06,40,1,!1,0,Math.PI),dl,[-6.05,5.45,-1.4],r);i.rotation.z=-Math.PI/2;let n=wt(new kt(3.06,.83),dl,[-6.05,5.45,-1.4],r);n.rotation.x=-Math.PI/2;let s=new Tt;r.add(s),Ze(.485,.485,3.17,[-6.05,5.45,-1.4],st,s),Jr.push({obj:s,part:"boiler"}),Bi=new Ji(new gi(.046,8,6),new Pe({color:16773053,emissive:16757548,emissiveIntensity:.38,transparent:!0,opacity:.84,roughness:.15}),90),Bi.frustumCulled=!1,r.add(Bi)}function xg(r){let e=le.started?zi(r,6.2,9.6):0;zh.uHeat.value=e;for(let t of Tp)t.color.copy(yl).lerp(Ml,e);if(dl.color.copy(yl).lerp(Ml,e*.85),Bi.visible=le.mode==="cutaway"&&e>.16,!!Bi.visible){for(let t=0;t<Bi.count;t++){let i=t%6,n=(Math.max(0,r-6.6)*(.24+t%4*.015)+t*.137)%1;t<72?Rt.position.set(-7.28+i*.43+Math.sin(t*3.5+r)*.027,1.18+n*4.1,-1.5+Math.cos(t*1.7+r)*.03):Rt.position.set(-7.4+(t-72)*.157,5.17+n*.6,-1.4+Math.sin(t)*.13),Rt.quaternion.identity(),Rt.scale.setScalar(e*(.38+n*1.58)),Rt.updateMatrix(),Bi.setMatrixAt(t,Rt.matrix)}Bi.instanceMatrix.needsUpdate=!0}}function yg(){let r=ir("boiler");ue([3.5,.4,3.7],[-6.1,.43,-.4],bn,r);let e=new Tt;r.add(e),yp.push(e),ue([3.12,5.2,.16],[-6.1,3.23,-1.92],ft,r),ue([.16,5.2,3.1],[-7.68,3.23,-.4],ft,r),ue([3.12,5.2,.16],[-6.1,3.23,1.16],ft,e),ue([.16,5.2,3.1],[-4.52,3.23,-.4],ft,e),ue([3.3,.18,3.35],[-6.1,5.88,-.4],ft,e);for(let s=1;s<6;s+=1.25)si([-7.8,s,1.26],[-4.45,s,1.26],.047,ri,e),si([-4.45,s,-2],[-4.45,s,1.26],.047,ri,e);for(let s of[-7.82,-4.39])for(let a of[-2.08,1.35])ue([.13,6,.13],[s,3.1,a],ri,r);vg(r),Sn([[-7.35,4.55,.62],[-4.95,4.55,.62],[-4.8,4.8,.4],[-7.35,4.8,.4],[-7.45,5.03,.1],[-4.7,5.03,.1],[-4.6,5.4,-.1]],.083,_l,16768433,.12,"superheater"),Sn([[-7.3,5.82,-1.4],[-7.4,5.3,-.8],[-7.35,4.55,.62]],.09,_l,16768433,.12,"superheater");let i=ue([2.7,.14,2.5],[-6.1,.91,-.4],st,r);for(let s=0;s<12;s++)ue([.1,.08,2.25],[-7.27+s*.21,1.02,-.4],Et,r);Rg(r),ue([.8,.65,.6],[-6.8,1.2,1.62],st,e);for(let s=0;s<4;s++)Ze(.14,.14,.4,[-7+s*.65,1.42,1.47],st,r,"z");tn([[-6.8,5.7,-1.8],[-6.8,6.5,-2.7],[-8.3,6.5,-2.7]],.37,st,r),Ze(.35,.43,7.35,[-8.3,4,-2.7],ft,r,"y"),Kt(.36,.065,[-8.3,7.68,-2.7],Et,r,"y");for(let s=2;s<7.5;s+=.9)Kt(.41-(s-2)*.006,.025,[-8.3,s,-2.7],ri,r,"y");let n=tn([[-8.3,7.75,-2.7],[-8.32,8.5,-2.72],[-8.1,9.25,-2.9]],.02,new Bt({visible:!1}));Hi(n.curve,9214092,12,.08,"exhaust",.055);for(let s of[-.7,-.22])si([-7.91,.7,s],[-7.91,5.85,s],.027,Et,r);for(let s=1;s<5.85;s+=.32)si([-7.95,s,-.7],[-7.95,s,-.22],.025,Et,r)}function Mg(){let r=ir("turbine"),e=3.35;ue([5.25,.35,2.95],[-.65,1.9,0],bn,r);for(let s of[-2.7,1.3])for(let a of[-1,1])ue([.38,1.45,.4],[s,1,a],ri,r);let t=ft.clone();t.side=gt,vl(-.6,e,0,1.13,.62,4.15,t,r,!1);let i=new Tt;r.add(i),vl(-.6,e,0,1.13,.62,4.15,t,i,!0),Jr.push({obj:i,part:"turbine"});for(let s=0;s<7;s++){let a=-2.58+s*.66,o=.65+s*.082;for(let c of[!1,!0]){let l=wt(new Bn(o,.045,7,36,Math.PI),st,[a,e,0],c?i:r);c||l.geometry.rotateX(Math.PI),l.rotation.y=Math.PI/2}}for(let s of[-1,1])ue([4.6,.1,.2],[-.6,e,s*.81],ft,r);Oi=new Tt,Oi.position.set(0,e,0),r.add(Oi),Ze(.17,.17,10.25,[1.15,0,0],Et,Oi);for(let s=0;s<9;s++){let a=-2.36+s*.435,o=.46+s*.063;Ze(o*.37,o*.37,.12,[a,0,0],st,Oi);for(let c=0;c<20;c++){let l=c/20*Math.PI*2,h=ue([.095,o*.55,.105],[a,Math.cos(l)*o*.64,Math.sin(l)*o*.64],Et,Oi);h.rotation.x=l,h.rotation.y=.3}if(Kt(o*.94,.014,[a,0,0],Et,Oi),s<8)for(let c=0;c<16;c++){let l=c/16*Math.PI*2,h=ue([.06,o*.39,.05],[a+.215,e+Math.cos(l)*o*.73,Math.sin(l)*o*.73],ri,r);h.rotation.x=l,h.rotation.y=-.3}}fl(-3.04,e,0,r),fl(1.83,e,0,r),fl(2.43,e,0,r),Ze(.3,.3,.23,[2.1,0,0],st,Oi);let n=tn([[-2.7,e+.25,0],[-1.7,e+.38,.08],[-.5,e+.4,.13],[.9,e+.43,.18],[1.15,e-.25,.25]],.045,new Bt({visible:!1}));Hi(n.curve,16764006,46,.17,"internal",.055);for(let s of[-.24,.24]){let a=new $i([[-2.64,e+.28,s],[-2,e+.33,s],[-1,e+.4,s],[.9,e+.43,s],[1.15,e-.25,.25]].map(ut));Hi(a,16768160,18,.17,"internal",.028)}ue([8.8,.1,.65],[.65,2.06,-1.82],st,r);for(let s=-3.5;s<5;s+=.7)si([s,2.1,-2.12],[s,2.9,-2.12],.018,ri,r);si([-3.5,2.85,-2.12],[4.9,2.85,-2.12],.022,ri,r),si([-3.5,2.48,-2.12],[4.9,2.48,-2.12],.017,ri,r)}function Sg(){let r=ir("generator"),e=4.5,t=3.35;ue([3.2,.35,2.9],[e,1.95,0],bn,r);for(let c of[-1,1])ue([.65,.72,1.3],[e+c*.9,2.5,0],ft,r);let i=ft.clone();i.side=gt,vl(e,t,0,.95,.95,2.65,i,r,!1);let n=new Tt;r.add(n),vl(e,t,0,.95,.95,2.65,i,n,!0),Jr.push({obj:n,part:"generator"});for(let c of[-1,1])Kt(.94,.075,[e+c*1.36,t,0],ft,r),Rp(e+c*1.43,.82,t,0,r);pl=Ap.clone(),pl.emissive.set(16753443);for(let c=0;c<6;c++)for(let l=0;l<2;l++){let h=c/6*Math.PI*2+.03*l,d=h+Math.PI*.78,u=.73+l*.043,p=[],f=(_,m,g=u)=>[_,t+Math.cos(m)*g,Math.sin(m)*g];p.push(f(e-1.13,h),f(e,h),f(e+1.13,h));for(let _=0;_<=10;_++){let m=_/10;p.push(f(e+1.22+Math.sin(m*Math.PI)*.16,h+(d-h)*m,u+.025*Math.sin(m*Math.PI)))}p.push(f(e+1.13,d),f(e,d),f(e-1.13,d));for(let _=0;_<=10;_++){let m=_/10;p.push(f(e-1.22-Math.sin(m*Math.PI)*.16,d+(h-d)*m,u+.025*Math.sin(m*Math.PI)))}p.push(f(e-1.13,h)),tn(p,.032,pl,r)}Fi=new Tt,Fi.position.set(e,t,0),r.add(Fi),Ze(.41,.41,2.4,[0,0,0],st,Fi);let s=new Pe({color:13201235,roughness:.42,metalness:.35}),a=new Pe({color:5541541,roughness:.42,metalness:.35});ue([2.15,.27,.52],[0,.37,0],s,Fi),ue([2.15,.27,.52],[0,-.37,0],a,Fi);for(let[c,l,h]of[["N","#ffe8dd",[1.23,.3,0]],["S","#e1f3ff",[1.23,-.3,0]]]){let d=document.createElement("canvas");d.width=64,d.height=64;let u=d.getContext("2d");u.fillStyle=l,u.font="bold 46px Arial",u.textAlign="center",u.textBaseline="middle",u.fillText(c,32,34);let p=new Pr(d),f=wt(new kt(.26,.26),new Bt({map:p,transparent:!0,side:gt}),h,Fi);f.rotation.y=Math.PI/2}let o=new Bt({color:13804088,transparent:!0,opacity:0,depthWrite:!1});bp.push(o);for(let c of[-.65,0,.65])for(let l of[-1,1])tn([[c,.42,0],[c,.48,l*.47],[c,0,l*.59],[c,-.48,l*.47],[c,-.42,0]],.012,o,Fi);fl(6.2,t,0,r),Ze(.48,.48,.62,[6.55,t,0],ft,r),Kt(.42,.028,[6.88,t,0],st,r),ue([1.8,.45,.52],[4.7,2.55,1.07],ft,r);for(let c=0;c<3;c++){let l=4.1+c*.6;Ze(.09,.09,.35,[l,2.55,1.42],st,r,"z"),Kt(.095,.025,[l,2.55,1.57],Cp[c],r,"z")}}function bg(){let r=ir("condenser"),e=-.25,t=.97,i=.65,n=new Pe({color:8434864,transparent:!0,opacity:.2,roughness:.22,metalness:.15,depthWrite:!1,side:gt}),s=new Tt;r.add(s),ue([4.2,1.48,2],[e,t,i],ft,s),Jr.push({obj:s,part:"condenser"}),ue([4.18,1.47,2.02],[e,t,i],n,r);let a=new Pe({color:4294573,transparent:!0,opacity:.7,roughness:.2});ue([4.04,.27,1.86],[e,.43,i],a,r);for(let o=0;o<3;o++)for(let c=0;c<3;c++)Ze(.075,.075,3.75,[e,.72+o*.23,i-.52+c*.52],Ih,r);for(let o of[-1,1])ue([.17,.96,1.62],[e+o*1.96,1,i],Ih,r);for(let o=0;o<9;o++){let c=-1.65+o%3*1.3,l=.2+Math.floor(o/3)*.45,h=new $i([[c,1.6,l],[c+.1,1.12,l],[c,.51,l]].map(ut));Hi(h,9491947,7,.16,"condensation",.045)}for(let o=0;o<4;o++){let c=-1.4+o*.85,l=new fn(ut([c,1.48,.72]),ut([c,1.13,.65]));Hi(l,16759667,5,.18,"heat-transfer",.026)}Sn([[-2.5,.75,3.8],[-2.6,.9,2.5],[-2.24,1,.65],[0,1,.65],[1.74,1,.65],[2.4,1,1.8],[2.6,.8,3.8]],.15,Ih,11791840,.12,"cooling");for(let o of[-2.6,2.6])Kt(.18,.045,[o,.77,3.52],Et,r,"z");Ze(.25,.25,.6,[-3.65,.64,2.15],st,r),Ze(.34,.34,.24,[-3.23,.64,2.15],sa,r),ue([1.15,.12,.65],[-3.65,.35,2.15],bn,r);for(let o=0;o<6;o++)Kt(.255,.02,[-3.9+o*.09,.64,2.15],ri,r)}function Tg(){Sn([[-4.6,5.4,-.1],[-3.8,5.7,-.1],[-3.25,5.55,-.1],[-3.08,4.05,-.1],[-2.65,3.65,0]],.14,_l,16769187,.11,"steam");for(let r of[[-3.43,5.67,-.1],[-3.08,4.55,-.1]])Kt(.19,.044,r,Et,Wt,r[1]<5?"y":"x");Sn([[1.15,3.1,.25],[1.48,2.5,.4],[1,1.7,.65]],.27,_l,16766887,.11,"steam-out"),Sn([[-.8,.46,1.44],[-1.4,.5,2.2],[-3.25,.6,2.15],[-4.2,.65,2.15],[-5,.82,2],[-5.05,1.1,-1.5]],.12,sa,12182527,.11,"water"),wg()}var Cp=[11821904,13150274,5803170].map(r=>new Pe({color:r,roughness:.5})),Pp=new Pe({color:4016455,metalness:.55,roughness:.45}),Ip=new Pe({color:14343366,roughness:.24,metalness:.12});function Eg(r,e,t,i,n=Wt){Ze(.065,.065,i,[r,e+i/2,t],Ap,n,"y",12);let s=Math.max(3,Math.round(i/.105));for(let a=0;a<s;a++)Ze(.115,.14,.045,[r,e+.05+a*(i-.09)/s,t],Ip,n,"y",16);return[r,e+i,t]}function la(r,e,t,i,n=.033,s=.07){let a=tn(r,n,Pp,i),o=Hi(a.curve,16767828,15,.13,e,s),c=en.at(-1);return c.phase=t,Oh.push({type:e,phase:t,points:r}),o}function wg(){let r=ir("grid");ue([1.9,.16,2.05],[8.15,.39,-1.05],bn,r),ue([1.5,1.18,1.7],[8.15,1.06,-1.05],ri,r),ue([1.65,.12,1.86],[8.15,1.7,-1.05],ft,r);for(let e of[-1,1])for(let t=0;t<6;t++)ue([.13,.81,.055],[8.15+e*.8,1.06,-1.7+t*.26],st,r);ue([1.14,.87,.035],[8.15,1.07,-.18],ft,r),ue([.055,.18,.045],[8.52,1.08,-.15],st,r);for(let e=0;e<3;e++){let t=-1.65+e*.58,i=Eg(7.7,1.77,t,.35,r);Ze(.083,.083,.07,[7.7,2.05,t],Cp[e],r,"y",12),la([[4.1+e*.6,2.55,1.59],[4.1+e*.6,1.15,1.82+e*.22],[5.9+e*.2,.5,1.82+e*.22],[6.67+e*.19,.6,t],[7.07,1.62,t],i],"electric",e,r)}for(let e of[8.02,8.4])Ze(.06,.06,.14,[e,.85,-.07],Ip,r,"z",12),Kt(.067,.018,[e,.85,.01],st,r,"z")}function Ag(){ue([26.6,.42,9.7],[2.5,.02,0],new Pe({color:13752776,roughness:.9})),ue([26.3,.04,9.4],[2.5,.255,0],new Pe({color:14804182,roughness:.9}));let r=new Xs(26,52,12503736,13752777);r.position.set(2.5,.287,0),Wt.add(r),r.material.transparent=!0,r.material.opacity=.25,r.scale.z=.35;for(let t=-9;t<15;t+=1)ue([.4,.015,.1],[t,.29,4.23],bn);for(let t of[-8.7,6.3]){ue([1.3,.11,3.1],[t,.32,-.5],st);for(let i=0;i<5;i++)ue([1.3,.13,.25],[t,.39+i*.13,1-i*.29],ri)}let e=new Tt;e.position.set(6.4,.42,2.9),Wt.add(e),Ze(.082,.082,.28,[0,.37,0],st,e,"y",10),wt(new gi(.075,10,8),ft,[0,.58,0],e);for(let t of[-.046,.046])si([t,.04,0],[t,.25,0],.025,st,e);for(let t of[-.11,.11])si([t,.21,0],[t*.7,.46,0],.022,st,e)}var xl={uTime:{value:0},uBurn:{value:0}};function Rg(r){let e="varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",t=`
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
 }`;for(let i=0;i<13;i++){let n=-7.15+i%4*.63+i%2*.045,s=-1.18+Math.floor(i/4)*.58,a=1.95+Math.sin(i*2.1)*.36,o=.96+Math.sin(i)*.13,c=new zt({vertexShader:e,fragmentShader:t,uniforms:{...xl,uSeed:{value:i*1.37}},transparent:!0,depthWrite:!1,side:gt,toneMapped:!1}),l=new kt(o,a);l.translate(0,a*.5,0);let h=wt(l,c,[n,1.025,s],r);h.castShadow=!1,h.receiveShadow=!1,h.renderOrder=3,Mp.push(h)}Qn=new Ji(new gi(.021,5,4),new Bt({color:16757830,toneMapped:!1}),38),Qn.frustumCulled=!1,r.add(Qn),ul=new Gn(16744739,0,7),ul.position.set(-6.1,2.1,-.3),r.add(ul)}function Dh(){let r=document.createElement("canvas");r.width=r.height=128;let e=r.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,246,188,.75)"),t.addColorStop(.22,"rgba(255,208,83,.42)"),t.addColorStop(.55,"rgba(255,163,40,.13)"),t.addColorStop(1,"rgba(255,157,30,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),new Pr(r)}function Cg(){let r=ir("load"),e=12.2,t=-.97,i=new Pe({color:3884102,roughness:1}),n=new Pe({color:12897216,roughness:.9}),s=new Pe({color:14935513,roughness:.85});ue([5.7,.065,3.2],[12.35,.315,1.2],i,r),ue([5.7,.17,1.1],[12.35,.367,-.96],n,r);for(let l=0;l<11;l++)ue([.49,.15,.13],[9.75+l*.52,.39,-.37],bn,r);for(let l of[.18,2.22])ue([4.45,.006,.04],[11.9,.351,l],s,r);ue([.04,.006,2.04],[9.68,.351,1.2],s,r);for(let l of[-.25,2.64])ue([5.5,.006,.045],[12.35,.351,l],s,r);for(let l=-.08;l<2.55;l+=.43)ue([.67,.007,.22],[14.72,.352,l],s,r);ue([.45,.12,.45],[e,.51,t],st,r);for(let l of[-.15,.15])for(let h of[-.15,.15])Ze(.024,.024,.055,[e+l,.59,t+h],Et,r,"y",6);Mn=Et.clone(),Mn.transparent=!0,Mn.opacity=.45,Mn.depthWrite=!1,Ze(.075,.13,4.08,[e,2.61,t],Mn,r,"y",24),Ze(.145,.155,.32,[e,.73,t],st,r,"y",24),tn([[e,4.6,t],[e,4.89,-.72],[e,5.05,-.15],[e,5.05,.64]],.073,Mn,r),wt(new gi(1,24,12),st,[e,5.035,.96],r).scale.set(.36,.12,.72),aa=ue([.54,.065,1.1],[e,4.935,.96],new Pe({color:6649205,emissive:16768672,emissiveIntensity:0,roughness:.25}),r),aa.castShadow=!1;for(let l=0;l<5;l++)ue([.52,.025,.025],[e,5.14,.63+l*.15],Et,r);let o=Dh();ia=new Ts(new Cr({map:o,transparent:!0,opacity:0,depthWrite:!1,blending:yn,toneMapped:!1})),ia.position.set(e,4.925,.96),ia.scale.set(1.5,1,1),r.add(ia),na=wt(new kt(4.15,3),new Bt({map:o,transparent:!0,opacity:0,depthWrite:!1,blending:yn,toneMapped:!1}),[e,.359,1.19],r),na.rotation.x=-Math.PI/2,na.castShadow=!1,Kn=new ks(16768923,0,9,.48,.67,2),Kn.position.set(e,4.88,.96),Kn.target.position.set(e,.35,1.2),r.add(Kn,Kn.target),la([[8.02,.85,.01],[8.75,.58,-.57],[9.3,.55,-1.04],[9.8,.55,-1.04],[11.4,.55,-1.04],[11.8,.55,-1.04],[e-.035,.84,t],[e-.035,4.59,t],[e-.035,4.86,-.69],[e-.035,5,-.14],[e-.035,4.94,.45]],"load-electric",0,r,.013,.044);let c=en.at(-1);Hh=c.start+c.length/c.velocity,la([[e+.035,4.94,.45],[e+.035,5,-.14],[e+.035,4.86,-.69],[e+.035,4.59,t],[e+.035,.84,t],[11.8,.55,-.85],[11.4,.55,-.85],[9.8,.55,-.85],[9.34,.55,-.85],[8.95,.58,-.39],[8.4,.85,.01]],"load-electric",1,r,.013,.044),en.at(-1).returnConductor=!0}function gp(r,e,t,i,n,s=.06){let a=new On;a.moveTo(...r[0]);for(let c of r.slice(1))a.lineTo(...c);a.closePath();let o=new Nr(a,{depth:e,bevelEnabled:!0,bevelSegments:3,steps:1,bevelSize:s,bevelThickness:s,curveSegments:8});return o.translate(0,0,-e/2),wt(o,t,i,n)}function Pg(){let r=ir("ev"),e=11.9,t=1.2,i=new Pe({color:7449274,metalness:.48,roughness:.28}),n=new Pe({color:2635581,metalness:.4,roughness:.45}),s=new Pe({color:2370348,roughness:.9}),a=new Pe({color:2309712,metalness:.42,roughness:.18});$n=i.clone(),$n.transparent=!0,$n.opacity=.46,$n.depthWrite=!1,gp([[-1.91,.41],[-1.95,.59],[-1.75,.81],[-1.13,.92],[.97,.94],[1.73,.78],[1.95,.58],[1.9,.39]],1.45,$n,[e,.35,t],r,.08),gp([[-1.05,.94],[-.58,1.5],[.56,1.5],[1.16,.94]],1.25,a,[e,.35,t],r,.035),wt(new gi(1,24,12),i,[e-.01,1.895,t],r).scale.set(.7,.055,.67),ue([.085,.55,1.33],[e,1.58,t],i,r);for(let u of[-1,1]){si([e-1.1,1.29,t+u*.66],[e-.6,1.86,t+u*.66],.035,i,r),si([e+1.18,1.29,t+u*.66],[e+.58,1.86,t+u*.66],.035,i,r);for(let p of[-.61,.64])ue([.21,.035,.036],[e+p,1.19,t+u*.805],n,r);ue([.18,.1,.17],[e+.85,1.44,t+u*.87],i,r);for(let p of[-1.22,1.22]){Ze(.33,.33,.18,[e+p,.7,t+u*.77],s,r,"z",32),Ze(.21,.21,.195,[e+p,.7,t+u*.78],Et,r,"z",24),Ze(.07,.07,.206,[e+p,.7,t+u*.78],n,r,"z",16);for(let f=0;f<5;f++){let _=f*Math.PI*2/5;si([e+p,.7,t+u*.89],[e+p+Math.cos(_)*.18,.7+Math.sin(_)*.18,t+u*.89],.016,n,r)}}}ue([.11,.22,1.28],[e+1.94,.85,t],i,r),ue([.11,.2,1.27],[e-1.94,.83,t],i,r),ue([.02,.08,.78],[e+2.005,.77,t],n,r);for(let u of[-1,1]){let p=ue([.055,.13,.36],[e+1.99,1.01,t+u*.52],new Pe({color:7571334,emissive:15203071,emissiveIntensity:0,roughness:.22}),r);p.castShadow=!1,Fh.push(p),ue([.055,.11,.31],[e-1.99,1.01,t+u*.52],new Pe({color:8465970,roughness:.3}),r);let f=wt(new kt(1.4,.95),new Bt({map:Dh(),transparent:!0,opacity:0,depthWrite:!1,blending:yn,toneMapped:!1}),[14.55,.361,t+u*.52],r);f.rotation.x=-Math.PI/2,f.castShadow=!1,Ep.push(f)}ue([2.84,.1,1.12],[e,.78,t],n,r);for(let u=0;u<6;u++){let p=new Pe({color:3430498,emissive:4063169,emissiveIntensity:0,roughness:.35,metalness:.25});ra.push(ue([.39,.19,.99],[e-1.08+u*.43,.93,t],p,r))}wp=Kt(.095,.025,[e-1.13,1.18,t+.83],new Pe({color:3429963,emissive:4784056,emissiveIntensity:0}),r,"z"),ue([.94,.14,.8],[10.35,.39,3.22],bn,r),ue([.61,1.34,.4],[10.35,1.13,3.22],ft,r),ue([.48,.78,.045],[10.35,1.3,3.45],n,r),Zr=new Pe({color:2380620,emissive:4718528,emissiveIntensity:0});for(let u of[-.145,.145])ue([.018,.22,.015],[10.35+u,1.47,3.48],Zr,r);for(let u of[1.36,1.58])ue([.3,.018,.015],[10.35,u,3.48],Zr,r);ue([.07,.035,.015],[10.35,1.605,3.48],Zr,r);for(let u=0;u<3;u++)ue([.07,.14,.018],[10.25+u*.1,1.47,3.485],Zr,r);la([[8.02,.85,.01],[8.9,.55,.04],[9.16,.55,.45],[9.16,.55,2.6],[9.3,.55,3.18],[10.21,.55,3.18],[10.25,1.15,3.24]],"ev-feed",0,r,.018,.05);let c=en.at(-1);oa=c.start+c.length/c.velocity,la([[10.43,1.15,3.24],[10.45,.55,3.36],[9.25,.55,3.36],[8.98,.55,2.6],[8.98,.55,.4],[8.4,.85,.01]],"ev-feed",1,r,.018,.05),en.at(-1).returnConductor=!0;let l=[[10.6,1.25,3.23],[10.92,.81,3],[11.02,.71,2.55],[10.83,.99,2.17],[e-1.13,1.18,t+.93]],h=tn(l,.041,Pp,r);Hi(h.curve,7077840,12,.12,"ev-charge",.053);let d=en.at(-1);d.start=Math.max(d.start,oa+.15),Bh=d.start+d.length/d.velocity,Oh.push({type:"ev-charge",phase:0,points:l}),Ze(.064,.064,.22,[e-1.13,1.18,t+.98],n,r,"z",16),ml=wt(new kt(4.1,2.3),new Bt({map:Dh(),color:5832645,transparent:!0,opacity:0,depthWrite:!1,blending:yn,toneMapped:!1}),[e,.363,t],r),ml.rotation.x=-Math.PI/2,ml.castShadow=!1}function Ig(r){let e=Math.max(31,Bh),t=le.started;Jn=t?zi(r,e,e+.6):0,$n.opacity=le.mode==="outside"?1:.46,$n.depthWrite=le.mode==="outside";let i=t?zi(r,oa,oa+.35):0;Zr.emissiveIntensity=i*2.5,wp.material.emissiveIntensity=Jn*3.2;for(let n=0;n<ra.length;n++){let s=t?zi(r,e+n*.7,e+n*.7+.6):0;ra[n].material.emissiveIntensity=s*2.7,ra[n].material.color.set(s>.01?6875325:3430498)}for(let n of Fh)n.material.emissiveIntensity=Jn*7,n.material.color.set(Jn>.01?15400959:7571334);for(let n of Ep)n.material.opacity=Jn*.85;ml.material.opacity=Jn*.62}var Gt={overview:{target:[2.4,2.55,0],offset:[18.4,15,26],wide:!0},boiler:{target:[-6.1,3.5,-.65],offset:[4,2.2,9.6]},turbine:{target:[-.5,3.2,0],offset:[5.7,4.25,8.4]},generator:{target:[4.65,3.3,0],offset:[5,3,6.5]},condenser:{target:[-.7,1.15,1.4],offset:[6,3.8,8.7]},grid:{target:[8.15,1.65,-.05],offset:[5.2,4,8]},load:{target:[11.8,2.5,.5],offset:[4.6,1.8,9.6]},ev:{target:[11.7,1.15,1.65],offset:[4.9,3.3,7.1],wide:!0}},cl=[{t:0,...Gt.overview},{t:1.8,...Gt.condenser},{t:4.8,target:[-3.7,1.2,1.2],offset:[7,4.4,9]},{t:7.3,...Gt.boiler},{t:9.3,...Gt.boiler},{t:10.8,target:[-5.9,4.7,-.7],offset:[4.3,2.4,7.6]},{t:13.4,...Gt.turbine},{t:15.8,...Gt.turbine},{t:18.5,...Gt.generator},{t:21.5,...Gt.grid},{t:22.8,...Gt.grid},{t:24.5,...Gt.load},{t:27.3,...Gt.load},{t:29.1,...Gt.ev},{t:31,...Gt.ev},{t:38,...Gt.ev}],yi=null,_p=0,Rt=new rt,hl=new Se,yl=new Se(3773669),Ml=new Se(16758366),vp=new T,Lh=new T,xp=new T;function Uh(r,e=!1){let t=yt.aspect;return t<1.1&&r.multiplyScalar(e?Math.min(2.7,1.15/t):Math.min(1.65,.85/t)),r}function Lg(){let r=We("#scene-wrap");xi=new Nn,xi.background=new Se(15265512),xi.fog=new Ss(15265512,65,145),yt=new bt(35,r.clientWidth/r.clientHeight,.1,190),Jt=new rl({canvas:We("#scene"),antialias:!0,powerPreference:"high-performance"}),Jt.setPixelRatio(Math.min(devicePixelRatio,1.7)),Jt.setSize(r.clientWidth,r.clientHeight,!1),Jt.shadowMap.enabled=!0,Jt.shadowMap.type=Uo,Jt.toneMapping=ko,Jt.toneMappingExposure=.91,pp=new jr(Jt),mp=new ll,xi.environment=pp.fromScene(mp,.04).texture,xi.environmentIntensity=.6,xi.add(new Hs(16777215,9545863,1.6));let e=new Fr(16774364,2.6);e.position.set(-5,16,10),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),Object.assign(e.shadow.camera,{left:-15,right:15,top:13,bottom:-13,near:1,far:55}),e.shadow.normalBias=.035,e.shadow.bias=-2e-4,xi.add(e);let t=new Fr(15004927,1.1);t.position.set(8,6,-7),xi.add(t);let i=wt(new kt(300,300),new Pe({color:15002594,roughness:1}),[0,-.26,0],xi);i.rotation.x=-Math.PI/2,i.castShadow=!1,Wt=new Tt,xi.add(Wt),Ag(),yg(),Mg(),Sg(),bg(),Tg(),Cg(),Pg();for(let[c,l]of Object.entries(Sp))l.traverse(h=>{h.isMesh&&!(h.material instanceof zt)&&(h.userData.part=c,fp.push(h))});ct=new ol(yt,Jt.domElement),ct.enableDamping=!0,ct.dampingFactor=.085,ct.minDistance=4,ct.maxDistance=110,ct.maxPolarAngle=Math.PI*.48,ct.minPolarAngle=.1,ct.enablePan=!0,er("overview",!0);let n=r.clientWidth,s=r.clientHeight;new ResizeObserver(()=>{yt.aspect=r.clientWidth/r.clientHeight,yt.updateProjectionMatrix(),Jt.setSize(r.clientWidth,r.clientHeight,!1),(Math.abs(n-r.clientWidth)>40||Math.abs(s-r.clientHeight)>80)&&(n=r.clientWidth,s=r.clientHeight,le.follow&&le.started?Gh():er(le.step,!0))}).observe(r),ct.addEventListener("start",()=>tr(!1));let a=new Ws,o=null;We("#scene").addEventListener("pointerdown",c=>{o={x:c.clientX,y:c.clientY}}),We("#scene").addEventListener("pointerup",c=>{if(!o||Math.hypot(c.clientX-o.x,c.clientY-o.y)>5)return;let l=Jt.domElement.getBoundingClientRect();a.setFromCamera(new J((c.clientX-l.left)/l.width*2-1,-(c.clientY-l.top)/l.height*2+1),yt);let h=a.intersectObjects(fp,!1).find(d=>Dg(d.object));h&&(le.step=h.object.userData.part,er(le.step))}),We("#scene").addEventListener("keydown",c=>{if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","+","-","="].includes(c.key)){c.preventDefault(),tr(!1);let l=new gn().setFromVector3(yt.position.clone().sub(ct.target));c.key==="ArrowLeft"&&(l.theta-=.12),c.key==="ArrowRight"&&(l.theta+=.12),c.key==="ArrowUp"&&(l.phi=Math.max(.2,l.phi-.12)),c.key==="ArrowDown"&&(l.phi=Math.min(1.48,l.phi+.12)),(c.key==="+"||c.key==="=")&&(l.radius*=.88),c.key==="-"&&(l.radius*=1.12),yt.position.copy(ct.target).add(new T().setFromSpherical(l)),ct.update()}}),We("#loading").hidden=!0,bl(),Tl(0),requestAnimationFrame(Up)}function Dg(r){for(;r;){if(!r.visible)return!1;r=r.parent}return!0}function er(r,e=!1){if(!yt||!ct)return;let t=Gt[r],i=ut(t.target),n=Uh(ut(t.offset),!!t.wide),s=i.clone().add(n);e||Sl?(ct.target.copy(i),yt.position.copy(s),ct.update(),yi=null):yi={from:yt.position.clone(),to:s,fromTarget:ct.target.clone(),target:i,elapsed:0}}function tr(r){le.follow=r,yi=null,We("#follow").classList.toggle("active",r),We("#follow").setAttribute("aria-pressed",String(r))}function Gh(){let r=Math.min(le.time,gl),e=0;for(;e<cl.length-2&&r>cl[e+1].t;)e++;let t=cl[e],i=cl[e+1],n=zi(r,t.t,i.t);Lh.lerpVectors(ut(t.target),ut(i.target),n);let s=Uh(ut(t.offset),!!t.wide),a=Uh(ut(i.offset),!!i.wide);xp.lerpVectors(s,a,n),ct.target.copy(Lh),yt.position.copy(Lh).add(xp)}function Lp(r){le.mode=r,Nh("[data-mode]").forEach(e=>{e.classList.toggle("active",e.dataset.mode===r),e.setAttribute("aria-pressed",String(e.dataset.mode===r))}),(!le.follow||!le.started)&&er(le.step)}function bl(){We("#start span").textContent=le.started?"\u6700\u521D\u304B\u3089":"\u30B9\u30BF\u30FC\u30C8",We("#pause").disabled=!le.started,We("#timeline").disabled=!le.started,We("#pause").innerHTML=le.playing?'<svg viewBox="0 0 24 24"><path d="M8 5v14M16 5v14"/></svg>':'<svg viewBox="0 0 24 24"><path d="m8 5 11 7-11 7Z"/></svg>',We("#pause").setAttribute("aria-label",le.playing?"\u4E00\u6642\u505C\u6B62":"\u518D\u958B"),We("#pause").title=le.playing?"\u4E00\u6642\u505C\u6B62":"\u518D\u958B",We("#follow").classList.toggle("active",le.follow),We("#follow").setAttribute("aria-pressed",String(le.follow))}function Ug(){le.started=!0,le.playing=!0,le.time=0,le.phase=0,le.step="overview",le.stage="condenser",tr(!Sl),Lp("cutaway"),er("overview",!0),bl()}function Ng(){le.started=!1,le.playing=!1,le.time=0,le.phase=0,le.stage="idle",le.step="overview",tr(!Sl),er("overview",!0),bl(),Tl(0)}We("#start").addEventListener("click",Ug);We("#pause").addEventListener("click",()=>{le.playing=!le.playing,bl()});We("#reset").addEventListener("click",Ng);We("#speed").addEventListener("change",r=>{le.speed=Number(r.target.value)});We("#follow").addEventListener("click",()=>tr(!le.follow));We("#timeline").addEventListener("input",r=>{le.time=Number(r.target.value),Tl(0),le.follow&&Gh()});Nh("[data-mode]").forEach(r=>r.addEventListener("click",()=>Lp(r.dataset.mode)));We("#reset-camera").addEventListener("click",()=>{tr(!1),le.step="overview",er("overview")});function Dp(r){yt&&(tr(!1),yt.position.sub(ct.target).multiplyScalar(r).add(ct.target),ct.update())}We("#zoom-in").addEventListener("click",()=>Dp(.82));We("#zoom-out").addEventListener("click",()=>Dp(1.22));We("#fullscreen").addEventListener("click",async()=>{try{document.fullscreenElement?await document.exitFullscreen():We("#scene-wrap").requestFullscreen&&await We("#scene-wrap").requestFullscreen()}catch{}});function Og(r){let e=Math.max(0,r-12.7),t=2.4;return 2.3*(e<t?e*e*e/(t*t)-.5*e*e*e*e/(t*t*t):e-t*.5)}function Tl(r){let e=le.started?le.time:0;le.stage=le.started?fg.findLast(a=>e>=a.at).name:"idle",le.phase=le.started?Og(e):0,Oi.rotation.x=le.phase,Fi.rotation.x=le.phase;for(let a of Jr)a.obj.visible=le.mode==="outside";for(let a of yp)a.visible=le.mode==="outside";let t=le.started?zi(e,5.8,7.3):0;xl.uTime.value=e,xl.uBurn.value=t;for(let a of Mp)a.visible=t>.001,a.rotation.y=Math.atan2(yt.position.x-a.position.x,yt.position.z-a.position.z),a.scale.y=.6+.4*t;ul.intensity=t*48*(.91+.09*Math.sin(e*16)*Math.sin(e*7.3)),Qn.visible=t>.001;for(let a=0;a<Qn.count&&t>.001;a++){let o=(e*(.21+a%5*.015)+a*.137)%1;Rt.position.set(-7.12+a%7*.34+Math.sin(e*2+a)*.1*o,1.14+o*2.9,-1.12+a%4*.44+Math.sin(a+e)*.08),Rt.quaternion.identity(),Rt.scale.setScalar((1-o)*t),Rt.updateMatrix(),Qn.setMatrixAt(a,Rt.matrix)}Qn.instanceMatrix.needsUpdate=!0;for(let a of en){let o=le.started?e-a.start:-1;if(a.inst.visible=o>=0&&!a.returnConductor,["internal","condensation","boiler","superheater","heat-transfer","heat-in"].includes(a.type)&&le.mode==="outside"&&(a.inst.visible=!1),a.visibleCount=0,!!a.inst.visible){for(let c=0;c<a.count;c++){let l=o*a.velocity/a.length-(c+Math.sin(c*4.13)*.15)/a.count,h=(l%1+1)%1,d=l>=0,u=h*600,p=Math.floor(u),f=Math.min(p+1,600);vp.lerpVectors(a.samples[p],a.samples[f],u-p),Rt.position.copy(vp),a.fast?Rt.quaternion.copy(a.rotations[p]):Rt.quaternion.identity();let _=d?1:0;Rt.scale.setScalar(_*(a.type==="condensation"?.5+.65*h:1)),Rt.updateMatrix(),a.inst.setMatrixAt(c,Rt.matrix),d&&a.visibleCount++,a.type==="boiler"&&(hl.copy(yl).lerp(Ml,zi(h,.15,.85)*t),a.inst.setColorAt(c,hl)),a.type==="condensation"&&(hl.copy(Ml).lerp(yl,Math.min(1,h*2.5)),a.inst.setColorAt(c,hl))}a.inst.instanceMatrix.needsUpdate=!0,a.inst.instanceColor&&(a.inst.instanceColor.needsUpdate=!0)}}xg(e);let i=le.started?zi(e,13.1,15):0;pl.emissiveIntensity=i*.42;for(let a of bp)a.opacity=i*(.22+.42*Math.abs(Math.sin(le.phase)));let n=Math.max(mg,Hh),s=le.started?zi(e,n,n+.65):0;Mn.opacity=le.mode==="outside"?1:.45,Mn.depthWrite=le.mode==="outside",aa.material.emissiveIntensity=s*5,aa.material.color.set(s>.01?16772543:6649205),ia.material.opacity=s*.64,na.material.opacity=s*.9,Kn.intensity=s*165,Ig(e),We("#timeline").value=Math.min(gl,e),We("#timeline").style.setProperty("--progress",`${Math.min(e/gl,1)*100}%`)}function Up(r){requestAnimationFrame(Up);let e=Math.min((r-(_p||r))/1e3,.05);if(_p=r,!document.hidden){if(le.playing&&(le.time+=e*le.speed),le.follow&&le.started&&le.time<=gl)Gh();else if(yi){yi.elapsed+=e;let t=zi(yi.elapsed,0,1.1);yt.position.lerpVectors(yi.from,yi.to,t),ct.target.lerpVectors(yi.fromTarget,yi.target,t),t===1&&(yi=null)}Tl(e),ct.update(),Jt.render(xi,yt),le.rendered=!0}}try{Lg()}catch(r){console.error(r),We("#loading").hidden=!1,We("#loading").className="error",We("#loading").innerHTML='<div>3D\u3092\u8868\u793A\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002</div><button onclick="location.reload()">\u518D\u8AAD\u307F\u8FBC\u307F</button>',Nh("button,select,input").forEach(e=>{e.closest("#loading")||(e.disabled=!0)})}window.energyLab={snapshot:()=>({...le,rotorAngle:Oi?.rotation.x,magnetAngle:Fi?.rotation.x,flamePower:xl.uBurn.value,lightPower:Kn?.intensity,luminairePower:aa?.material.emissiveIntensity,roadGlow:na?.material.opacity,loadArrival:Hh,loadKind:"streetlight-and-ev",evArrival:Bh,evFeedArrival:oa,evCharge:Jn,evHeadlights:Fh[0]?.material.emissiveIntensity,evCellsLit:ra.filter(r=>r.material.emissiveIntensity>.4).length,distributionUnits:1,waterHeat:zh.uHeat.value,bubbleCount:Bi?.visible?Bi.count:0,circuits:Oh.map(({type:r,phase:e,points:t})=>({type:r,phase:e,start:t[0],end:t.at(-1)})),drawCalls:Jt?.info.render.calls,visibleCovers:Jr.filter(r=>r.obj.visible).length,camera:yt?.position.toArray(),target:ct?.target.toArray(),flows:en.map(r=>({type:r.type,phase:r.phase,velocity:r.velocity,count:r.inst.visible?r.visibleCount:0}))})};})();
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
