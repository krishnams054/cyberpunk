(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pu="170",Xp=0,tf=1,Yp=2,Wh=1,qp=2,bi=3,sr=0,Sn=1,Ci=2,er=0,_s=1,la=2,nf=3,rf=4,$p=5,br=100,Kp=101,Zp=102,jp=103,Jp=104,Qp=200,em=201,tm=202,nm=203,tc=204,nc=205,im=206,rm=207,sm=208,am=209,om=210,lm=211,cm=212,um=213,fm=214,ic=0,rc=1,sc=2,As=3,ac=4,oc=5,lc=6,cc=7,Xh=0,hm=1,dm=2,tr=0,pm=1,mm=2,_m=3,gm=4,vm=5,xm=6,Mm=7,Yh=300,ws=301,Cs=302,uc=303,fc=304,nl=306,hc=1e3,wr=1001,dc=1002,oi=1003,Sm=1004,za=1005,pi=1006,ul=1007,Cr=1008,Ni=1009,qh=1010,$h=1011,Sa=1012,mu=1013,Br=1014,Pi=1015,La=1016,_u=1017,gu=1018,Rs=1020,Kh=35902,Zh=1021,jh=1022,si=1023,Jh=1024,Qh=1025,gs=1026,Ps=1027,ed=1028,vu=1029,td=1030,xu=1031,Mu=1033,bo=33776,Ao=33777,wo=33778,Co=33779,pc=35840,mc=35841,_c=35842,gc=35843,vc=36196,xc=37492,Mc=37496,Sc=37808,yc=37809,Ec=37810,Tc=37811,bc=37812,Ac=37813,wc=37814,Cc=37815,Rc=37816,Pc=37817,Dc=37818,Lc=37819,Ic=37820,Uc=37821,Ro=36492,Nc=36494,Fc=36495,nd=36283,Oc=36284,Bc=36285,zc=36286,ym=3200,Em=3201,Tm=0,bm=1,$i="",qn="srgb",Bs="srgb-linear",il="linear",gt="srgb",Xr=7680,sf=519,Am=512,wm=513,Cm=514,id=515,Rm=516,Pm=517,Dm=518,Lm=519,af=35044,of=35048,lf="300 es",Di=2e3,ko=2001;class zs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fl=Math.PI/180,kc=180/Math.PI;function Ia(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(jt[r&255]+jt[r>>8&255]+jt[r>>16&255]+jt[r>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]).toLowerCase()}function xn(r,e,t){return Math.max(e,Math.min(t,r))}function Im(r,e){return(r%e+e)%e}function hl(r,e,t){return(1-t)*r+t*e}function Ws(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function gn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class mt{constructor(e=0,t=0){mt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,t,n,i,s,a,o,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],M=i[1],S=i[4],v=i[7],P=i[2],w=i[5],b=i[8];return s[0]=a*_+o*M+l*P,s[3]=a*m+o*S+l*w,s[6]=a*p+o*v+l*b,s[1]=c*_+u*M+d*P,s[4]=c*m+u*S+d*w,s[7]=c*p+u*v+d*b,s[2]=h*_+f*M+g*P,s[5]=h*m+f*S+g*w,s[8]=h*p+f*v+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*s,f=c*s-a*l,g=t*d+n*h+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=h*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(dl.makeScale(e,t)),this}rotate(e){return this.premultiply(dl.makeRotation(-e)),this}translate(e,t){return this.premultiply(dl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const dl=new je;function rd(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Vo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Um(){const r=Vo("canvas");return r.style.display="block",r}const cf={};function Qs(r){r in cf||(cf[r]=!0,console.warn(r))}function Nm(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Fm(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Om(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ot={enabled:!0,workingColorSpace:Bs,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===gt&&(r.r=Ii(r.r),r.g=Ii(r.g),r.b=Ii(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===gt&&(r.r=vs(r.r),r.g=vs(r.g),r.b=vs(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===$i?il:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Ii(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function vs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const uf=[.64,.33,.3,.6,.15,.06],ff=[.2126,.7152,.0722],hf=[.3127,.329],df=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pf=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ot.define({[Bs]:{primaries:uf,whitePoint:hf,transfer:il,toXYZ:df,fromXYZ:pf,luminanceCoefficients:ff,workingColorSpaceConfig:{unpackColorSpace:qn},outputColorSpaceConfig:{drawingBufferColorSpace:qn}},[qn]:{primaries:uf,whitePoint:hf,transfer:gt,toXYZ:df,fromXYZ:pf,luminanceCoefficients:ff,outputColorSpaceConfig:{drawingBufferColorSpace:qn}}});let Yr;class Bm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Yr===void 0&&(Yr=Vo("canvas")),Yr.width=e.width,Yr.height=e.height;const n=Yr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Yr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Vo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Ii(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ii(t[n]/255)*255):t[n]=Ii(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zm=0;class sd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=Ia(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(pl(i[a].image)):s.push(pl(i[a]))}else s=pl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function pl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Bm.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let km=0;class pn extends zs{constructor(e=pn.DEFAULT_IMAGE,t=pn.DEFAULT_MAPPING,n=wr,i=wr,s=pi,a=Cr,o=si,l=Ni,c=pn.DEFAULT_ANISOTROPY,u=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=Ia(),this.name="",this.source=new sd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hc:e.x=e.x-Math.floor(e.x);break;case wr:e.x=e.x<0?0:1;break;case dc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hc:e.y=e.y-Math.floor(e.y);break;case wr:e.y=e.y<0?0:1;break;case dc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Yh;pn.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,t=0,n=0,i=1){Nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,v=(f+1)/2,P=(p+1)/2,w=(u+h)/4,b=(d+_)/4,D=(g+m)/4;return S>v&&S>P?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=w/n,s=b/n):v>P?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=w/i,s=D/i):P<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(P),n=b/s,i=D/s),this.set(n,i,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-_)/M,this.z=(h-u)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vm extends zs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new pn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new sd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zr extends Vm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ad extends pn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=oi,this.minFilter=oi,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hm extends pn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=oi,this.minFilter=oi,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ua{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3];const h=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==h||c!==f||u!==g){let m=1-o;const p=l*h+c*f+u*g+d*_,M=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const P=Math.sqrt(S),w=Math.atan2(P,p*M);m=Math.sin(m*w)/P,o=Math.sin(o*w)/P}const v=o*M;if(l=l*m+h*v,c=c*m+f*v,u=u*m+g*v,d=d*m+_*v,m===1-o){const P=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=P,c*=P,u*=P,d*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[a],h=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+u*d+l*f-c*h,e[t+1]=l*g+u*h+c*d-o*f,e[t+2]=c*g+u*f+o*h-l*d,e[t+3]=u*g-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),d=o(s/2),h=l(n/2),f=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*d+this._w*h,this._x=n*d+this._x*h,this._y=i*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,n=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-s*d,this.z=i+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ml.copy(this).projectOnVector(e),this.sub(ml)}reflect(e){return this.sub(ml.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ml=new Y,mf=new Ua;class Na{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ei):ei.fromBufferAttribute(s,a),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ka.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ka.copy(n.boundingBox)),ka.applyMatrix4(e.matrixWorld),this.union(ka)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xs),Va.subVectors(this.max,Xs),qr.subVectors(e.a,Xs),$r.subVectors(e.b,Xs),Kr.subVectors(e.c,Xs),Vi.subVectors($r,qr),Hi.subVectors(Kr,$r),hr.subVectors(qr,Kr);let t=[0,-Vi.z,Vi.y,0,-Hi.z,Hi.y,0,-hr.z,hr.y,Vi.z,0,-Vi.x,Hi.z,0,-Hi.x,hr.z,0,-hr.x,-Vi.y,Vi.x,0,-Hi.y,Hi.x,0,-hr.y,hr.x,0];return!_l(t,qr,$r,Kr,Va)||(t=[1,0,0,0,1,0,0,0,1],!_l(t,qr,$r,Kr,Va))?!1:(Ha.crossVectors(Vi,Hi),t=[Ha.x,Ha.y,Ha.z],_l(t,qr,$r,Kr,Va))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Mi=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],ei=new Y,ka=new Na,qr=new Y,$r=new Y,Kr=new Y,Vi=new Y,Hi=new Y,hr=new Y,Xs=new Y,Va=new Y,Ha=new Y,dr=new Y;function _l(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){dr.fromArray(r,s);const o=i.x*Math.abs(dr.x)+i.y*Math.abs(dr.y)+i.z*Math.abs(dr.z),l=e.dot(dr),c=t.dot(dr),u=n.dot(dr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Gm=new Na,Ys=new Y,gl=new Y;class Fa{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Gm.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ys.subVectors(e,this.center);const t=Ys.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ys,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ys.copy(e.center).add(gl)),this.expandByPoint(Ys.copy(e.center).sub(gl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Si=new Y,vl=new Y,Ga=new Y,Gi=new Y,xl=new Y,Wa=new Y,Ml=new Y;class Su{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){vl.copy(e).add(t).multiplyScalar(.5),Ga.copy(t).sub(e).normalize(),Gi.copy(this.origin).sub(vl);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ga),o=Gi.dot(this.direction),l=-Gi.dot(Ga),c=Gi.lengthSq(),u=Math.abs(1-a*a);let d,h,f,g;if(u>0)if(d=a*l-o,h=a*o-l,g=s*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(vl).addScaledVector(Ga,h),f}intersectSphere(e,t){Si.subVectors(e.center,this.origin);const n=Si.dot(this.direction),i=Si.dot(Si)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,n,i,s){xl.subVectors(t,e),Wa.subVectors(n,e),Ml.crossVectors(xl,Wa);let a=this.direction.dot(Ml),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gi.subVectors(this.origin,e);const l=o*this.direction.dot(Wa.crossVectors(Gi,Wa));if(l<0)return null;const c=o*this.direction.dot(xl.cross(Gi));if(c<0||l+c>a)return null;const u=-o*Gi.dot(Ml);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lt{constructor(e,t,n,i,s,a,o,l,c,u,d,h,f,g,_,m){Lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,d,h,f,g,_,m)}set(e,t,n,i,s,a,o,l,c,u,d,h,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Zr.setFromMatrixColumn(e,0).length(),s=1/Zr.setFromMatrixColumn(e,1).length(),a=1/Zr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*u,f=a*d,g=o*u,_=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,g=c*u,_=c*d;t[0]=h+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=_+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,g=c*u,_=c*d;t[0]=h-_*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,f=a*d,g=o*u,_=o*d;t[0]=l*u,t[4]=g*c-f,t[8]=h*c+_,t[1]=l*d,t[5]=_*c+h,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-h*d,t[8]=g*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+g,t[10]=h-_*d}else if(e.order==="XZY"){const h=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+_,t[5]=a*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wm,e,Xm)}lookAt(e,t,n){const i=this.elements;return Pn.subVectors(e,t),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Wi.crossVectors(n,Pn),Wi.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Wi.crossVectors(n,Pn)),Wi.normalize(),Xa.crossVectors(Pn,Wi),i[0]=Wi.x,i[4]=Xa.x,i[8]=Pn.x,i[1]=Wi.y,i[5]=Xa.y,i[9]=Pn.y,i[2]=Wi.z,i[6]=Xa.z,i[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],S=n[7],v=n[11],P=n[15],w=i[0],b=i[4],D=i[8],y=i[12],x=i[1],L=i[5],O=i[9],V=i[13],q=i[2],j=i[6],K=i[10],$=i[14],B=i[3],se=i[7],E=i[11],R=i[15];return s[0]=a*w+o*x+l*q+c*B,s[4]=a*b+o*L+l*j+c*se,s[8]=a*D+o*O+l*K+c*E,s[12]=a*y+o*V+l*$+c*R,s[1]=u*w+d*x+h*q+f*B,s[5]=u*b+d*L+h*j+f*se,s[9]=u*D+d*O+h*K+f*E,s[13]=u*y+d*V+h*$+f*R,s[2]=g*w+_*x+m*q+p*B,s[6]=g*b+_*L+m*j+p*se,s[10]=g*D+_*O+m*K+p*E,s[14]=g*y+_*V+m*$+p*R,s[3]=M*w+S*x+v*q+P*B,s[7]=M*b+S*L+v*j+P*se,s[11]=M*D+S*O+v*K+P*E,s[15]=M*y+S*V+v*$+P*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*d-i*c*d-s*o*h+n*c*h+i*o*f-n*l*f)+_*(+t*l*f-t*c*h+s*a*h-i*a*f+i*c*u-s*l*u)+m*(+t*c*d-t*o*f-s*a*d+n*a*f+s*o*u-n*c*u)+p*(-i*o*u-t*l*d+t*o*h+i*a*d-n*a*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=d*m*c-_*h*c+_*l*f-o*m*f-d*l*p+o*h*p,S=g*h*c-u*m*c-g*l*f+a*m*f+u*l*p-a*h*p,v=u*_*c-g*d*c+g*o*f-a*_*f-u*o*p+a*d*p,P=g*d*l-u*_*l-g*o*h+a*_*h+u*o*m-a*d*m,w=t*M+n*S+i*v+s*P;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=M*b,e[1]=(_*h*s-d*m*s-_*i*f+n*m*f+d*i*p-n*h*p)*b,e[2]=(o*m*s-_*l*s+_*i*c-n*m*c-o*i*p+n*l*p)*b,e[3]=(d*l*s-o*h*s-d*i*c+n*h*c+o*i*f-n*l*f)*b,e[4]=S*b,e[5]=(u*m*s-g*h*s+g*i*f-t*m*f-u*i*p+t*h*p)*b,e[6]=(g*l*s-a*m*s-g*i*c+t*m*c+a*i*p-t*l*p)*b,e[7]=(a*h*s-u*l*s+u*i*c-t*h*c-a*i*f+t*l*f)*b,e[8]=v*b,e[9]=(g*d*s-u*_*s-g*n*f+t*_*f+u*n*p-t*d*p)*b,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*p+t*o*p)*b,e[11]=(u*o*s-a*d*s-u*n*c+t*d*c+a*n*f-t*o*f)*b,e[12]=P*b,e[13]=(u*_*i-g*d*i+g*n*h-t*_*h-u*n*m+t*d*m)*b,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*m-t*o*m)*b,e[15]=(a*d*i-u*o*i+u*n*l-t*d*l-a*n*h+t*o*h)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,h=s*c,f=s*u,g=s*d,_=a*u,m=a*d,p=o*d,M=l*c,S=l*u,v=l*d,P=n.x,w=n.y,b=n.z;return i[0]=(1-(_+p))*P,i[1]=(f+v)*P,i[2]=(g-S)*P,i[3]=0,i[4]=(f-v)*w,i[5]=(1-(h+p))*w,i[6]=(m+M)*w,i[7]=0,i[8]=(g+S)*b,i[9]=(m-M)*b,i[10]=(1-(h+_))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Zr.set(i[0],i[1],i[2]).length();const a=Zr.set(i[4],i[5],i[6]).length(),o=Zr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],ti.copy(this);const c=1/s,u=1/a,d=1/o;return ti.elements[0]*=c,ti.elements[1]*=c,ti.elements[2]*=c,ti.elements[4]*=u,ti.elements[5]*=u,ti.elements[6]*=u,ti.elements[8]*=d,ti.elements[9]*=d,ti.elements[10]*=d,t.setFromRotationMatrix(ti),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=Di){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),d=(t+e)/(t-e),h=(n+i)/(n-i);let f,g;if(o===Di)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===ko)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Di){const l=this.elements,c=1/(t-e),u=1/(n-i),d=1/(a-s),h=(t+e)*c,f=(n+i)*u;let g,_;if(o===Di)g=(a+s)*d,_=-2*d;else if(o===ko)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Zr=new Y,ti=new Lt,Wm=new Y(0,0,0),Xm=new Y(1,1,1),Wi=new Y,Xa=new Y,Pn=new Y,_f=new Lt,gf=new Ua;class Fi{constructor(e=0,t=0,n=0,i=Fi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(xn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(xn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-xn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(xn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-xn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _f.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_f,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gf.setFromEuler(this),this.setFromQuaternion(gf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fi.DEFAULT_ORDER="XYZ";class od{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ym=0;const vf=new Y,jr=new Ua,yi=new Lt,Ya=new Y,qs=new Y,qm=new Y,$m=new Ua,xf=new Y(1,0,0),Mf=new Y(0,1,0),Sf=new Y(0,0,1),yf={type:"added"},Km={type:"removed"},Jr={type:"childadded",child:null},Sl={type:"childremoved",child:null};class mn extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=Ia(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const e=new Y,t=new Fi,n=new Ua,i=new Y(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Lt},normalMatrix:{value:new je}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new od,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return jr.setFromAxisAngle(e,t),this.quaternion.multiply(jr),this}rotateOnWorldAxis(e,t){return jr.setFromAxisAngle(e,t),this.quaternion.premultiply(jr),this}rotateX(e){return this.rotateOnAxis(xf,e)}rotateY(e){return this.rotateOnAxis(Mf,e)}rotateZ(e){return this.rotateOnAxis(Sf,e)}translateOnAxis(e,t){return vf.copy(e).applyQuaternion(this.quaternion),this.position.add(vf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xf,e)}translateY(e){return this.translateOnAxis(Mf,e)}translateZ(e){return this.translateOnAxis(Sf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ya.copy(e):Ya.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(qs,Ya,this.up):yi.lookAt(Ya,qs,this.up),this.quaternion.setFromRotationMatrix(yi),i&&(yi.extractRotation(i.matrixWorld),jr.setFromRotationMatrix(yi),this.quaternion.premultiply(jr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yf),Jr.child=e,this.dispatchEvent(Jr),Jr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Km),Sl.child=e,this.dispatchEvent(Sl),Sl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yf),Jr.child=e,this.dispatchEvent(Jr),Jr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,e,qm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,$m,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}mn.DEFAULT_UP=new Y(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ni=new Y,Ei=new Y,yl=new Y,Ti=new Y,Qr=new Y,es=new Y,Ef=new Y,El=new Y,Tl=new Y,bl=new Y,Al=new Nt,wl=new Nt,Cl=new Nt;class ri{constructor(e=new Y,t=new Y,n=new Y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ni.subVectors(e,t),i.cross(ni);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ni.subVectors(i,t),Ei.subVectors(n,t),yl.subVectors(e,t);const a=ni.dot(ni),o=ni.dot(Ei),l=ni.dot(yl),c=Ei.dot(Ei),u=Ei.dot(yl),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ti.x),l.addScaledVector(a,Ti.y),l.addScaledVector(o,Ti.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return Al.setScalar(0),wl.setScalar(0),Cl.setScalar(0),Al.fromBufferAttribute(e,t),wl.fromBufferAttribute(e,n),Cl.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Al,s.x),a.addScaledVector(wl,s.y),a.addScaledVector(Cl,s.z),a}static isFrontFacing(e,t,n,i){return ni.subVectors(n,t),Ei.subVectors(e,t),ni.cross(Ei).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),ni.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ri.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return ri.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Qr.subVectors(i,n),es.subVectors(s,n),El.subVectors(e,n);const l=Qr.dot(El),c=es.dot(El);if(l<=0&&c<=0)return t.copy(n);Tl.subVectors(e,i);const u=Qr.dot(Tl),d=es.dot(Tl);if(u>=0&&d<=u)return t.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Qr,a);bl.subVectors(e,s);const f=Qr.dot(bl),g=es.dot(bl);if(g>=0&&f<=g)return t.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(es,o);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return Ef.subVectors(s,i),o=(d-u)/(d-u+(f-g)),t.copy(i).addScaledVector(Ef,o);const p=1/(m+_+h);return a=_*p,o=h*p,t.copy(n).addScaledVector(Qr,a).addScaledVector(es,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ld={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},qa={h:0,s:0,l:0};function Rl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class at{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ot.workingColorSpace){if(e=Im(e,1),t=xn(t,0,1),n=xn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Rl(a,s,e+1/3),this.g=Rl(a,s,e),this.b=Rl(a,s,e-1/3)}return ot.toWorkingColorSpace(this,i),this}setStyle(e,t=qn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qn){const n=ld[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ii(e.r),this.g=Ii(e.g),this.b=Ii(e.b),this}copyLinearToSRGB(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qn){return ot.fromWorkingColorSpace(Jt.copy(this),e),Math.round(xn(Jt.r*255,0,255))*65536+Math.round(xn(Jt.g*255,0,255))*256+Math.round(xn(Jt.b*255,0,255))}getHexString(e=qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(Jt.copy(this),t);const n=Jt.r,i=Jt.g,s=Jt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=qn){ot.fromWorkingColorSpace(Jt.copy(this),e);const t=Jt.r,n=Jt.g,i=Jt.b;return e!==qn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+t,Xi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xi),e.getHSL(qa);const n=hl(Xi.h,qa.h,t),i=hl(Xi.s,qa.s,t),s=hl(Xi.l,qa.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new at;at.NAMES=ld;let Zm=0;class ks extends zs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=Ia(),this.name="",this.blending=_s,this.side=sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tc,this.blendDst=nc,this.blendEquation=br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xr,this.stencilZFail=Xr,this.stencilZPass=Xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(n.blending=this.blending),this.side!==sr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==tc&&(n.blendSrc=this.blendSrc),this.blendDst!==nc&&(n.blendDst=this.blendDst),this.blendEquation!==br&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ho extends ks{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.combine=Xh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ot=new Y,$a=new mt;class hn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=af,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$a.fromBufferAttribute(this,t),$a.applyMatrix3(e),this.setXY(t,$a.x,$a.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ws(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ws(t,this.array)),t}setX(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ws(t,this.array)),t}setY(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ws(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ws(t,this.array)),t}setW(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),n=gn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),n=gn(n,this.array),i=gn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),n=gn(n,this.array),i=gn(i,this.array),s=gn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==af&&(e.usage=this.usage),e}}class cd extends hn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ud extends hn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class _n extends hn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let jm=0;const Xn=new Lt,Pl=new mn,ts=new Y,Dn=new Na,$s=new Na,Xt=new Y;class yn extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jm++}),this.uuid=Ia(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rd(e)?ud:cd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,t,n){return Xn.makeTranslation(e,t,n),this.applyMatrix4(Xn),this}scale(e,t,n){return Xn.makeScale(e,t,n),this.applyMatrix4(Xn),this}lookAt(e){return Pl.lookAt(e),Pl.updateMatrix(),this.applyMatrix4(Pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new _n(n,3))}else{for(let n=0,i=t.count;n<i;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Na);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const n=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];$s.setFromBufferAttribute(o),this.morphTargetsRelative?(Xt.addVectors(Dn.min,$s.min),Dn.expandByPoint(Xt),Xt.addVectors(Dn.max,$s.max),Dn.expandByPoint(Xt)):(Dn.expandByPoint($s.min),Dn.expandByPoint($s.max))}Dn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Xt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Xt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Xt.fromBufferAttribute(o,c),l&&(ts.fromBufferAttribute(e,c),Xt.add(ts)),i=Math.max(i,n.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new Y,l[D]=new Y;const c=new Y,u=new Y,d=new Y,h=new mt,f=new mt,g=new mt,_=new Y,m=new Y;function p(D,y,x){c.fromBufferAttribute(n,D),u.fromBufferAttribute(n,y),d.fromBufferAttribute(n,x),h.fromBufferAttribute(s,D),f.fromBufferAttribute(s,y),g.fromBufferAttribute(s,x),u.sub(c),d.sub(c),f.sub(h),g.sub(h);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(L),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(L),o[D].add(_),o[y].add(_),o[x].add(_),l[D].add(m),l[y].add(m),l[x].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let D=0,y=M.length;D<y;++D){const x=M[D],L=x.start,O=x.count;for(let V=L,q=L+O;V<q;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const S=new Y,v=new Y,P=new Y,w=new Y;function b(D){P.fromBufferAttribute(i,D),w.copy(P);const y=o[D];S.copy(y),S.sub(P.multiplyScalar(P.dot(y))).normalize(),v.crossVectors(w,y);const L=v.dot(l[D])<0?-1:1;a.setXYZW(D,S.x,S.y,S.z,L)}for(let D=0,y=M.length;D<y;++D){const x=M[D],L=x.start,O=x.count;for(let V=L,q=L+O;V<q;V+=3)b(e.getX(V+0)),b(e.getX(V+1)),b(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new hn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new Y,s=new Y,a=new Y,o=new Y,l=new Y,c=new Y,u=new Y,d=new Y;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[f++]}return new hn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tf=new Lt,pr=new Su,Ka=new Fa,bf=new Y,Za=new Y,ja=new Y,Ja=new Y,Dl=new Y,Qa=new Y,Af=new Y,eo=new Y;class ai extends mn{constructor(e=new yn,t=new Ho){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Qa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(Dl.fromBufferAttribute(d,e),a?Qa.addScaledVector(Dl,u):Qa.addScaledVector(Dl.sub(t),u))}t.add(Qa)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ka.copy(n.boundingSphere),Ka.applyMatrix4(s),pr.copy(e.ray).recast(e.near),!(Ka.containsPoint(pr.origin)===!1&&(pr.intersectSphere(Ka,bf)===null||pr.origin.distanceToSquared(bf)>(e.far-e.near)**2))&&(Tf.copy(s).invert(),pr.copy(e.ray).applyMatrix4(Tf),!(n.boundingBox!==null&&pr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,pr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),S=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,P=S;v<P;v+=3){const w=o.getX(v),b=o.getX(v+1),D=o.getX(v+2);i=to(this,p,e,n,c,u,d,w,b,D),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=o.getX(m),S=o.getX(m+1),v=o.getX(m+2);i=to(this,a,e,n,c,u,d,M,S,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,P=S;v<P;v+=3){const w=v,b=v+1,D=v+2;i=to(this,p,e,n,c,u,d,w,b,D),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=m,S=m+1,v=m+2;i=to(this,a,e,n,c,u,d,M,S,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Jm(r,e,t,n,i,s,a,o){let l;if(e.side===Sn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===sr,o),l===null)return null;eo.copy(o),eo.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(eo);return c<t.near||c>t.far?null:{distance:c,point:eo.clone(),object:r}}function to(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Za),r.getVertexPosition(l,ja),r.getVertexPosition(c,Ja);const u=Jm(r,e,t,n,Za,ja,Ja,Af);if(u){const d=new Y;ri.getBarycoord(Af,Za,ja,Ja,d),i&&(u.uv=ri.getInterpolatedAttribute(i,o,l,c,d,new mt)),s&&(u.uv1=ri.getInterpolatedAttribute(s,o,l,c,d,new mt)),a&&(u.normal=ri.getInterpolatedAttribute(a,o,l,c,d,new Y),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new Y,materialIndex:0};ri.getNormal(Za,ja,Ja,h.normal),u.face=h,u.barycoord=d}return u}class Oa extends yn{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new _n(c,3)),this.setAttribute("normal",new _n(u,3)),this.setAttribute("uv",new _n(d,2));function g(_,m,p,M,S,v,P,w,b,D,y){const x=v/b,L=P/D,O=v/2,V=P/2,q=w/2,j=b+1,K=D+1;let $=0,B=0;const se=new Y;for(let E=0;E<K;E++){const R=E*L-V;for(let Q=0;Q<j;Q++){const le=Q*x-O;se[_]=le*M,se[m]=R*S,se[p]=q,c.push(se.x,se.y,se.z),se[_]=0,se[m]=0,se[p]=w>0?1:-1,u.push(se.x,se.y,se.z),d.push(Q/b),d.push(1-E/D),$+=1}}for(let E=0;E<D;E++)for(let R=0;R<b;R++){const Q=h+R+j*E,le=h+R+j*(E+1),N=h+(R+1)+j*(E+1),H=h+(R+1)+j*E;l.push(Q,le,H),l.push(le,N,H),B+=6}o.addGroup(f,B,y),f+=B,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ds(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function ln(r){const e={};for(let t=0;t<r.length;t++){const n=Ds(r[t]);for(const i in n)e[i]=n[i]}return e}function Qm(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function fd(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const e_={clone:Ds,merge:ln};var t_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,n_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ar extends ks{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=t_,this.fragmentShader=n_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ds(e.uniforms),this.uniformsGroups=Qm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class hd extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=Di}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yi=new Y,wf=new mt,Cf=new mt;class Nn extends hd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=kc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kc*2*Math.atan(Math.tan(fl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z)}getViewSize(e,t){return this.getViewBounds(e,wf,Cf),t.subVectors(Cf,wf)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(fl*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ns=-90,is=1;class i_ extends mn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Nn(ns,is,e,t);i.layers=this.layers,this.add(i);const s=new Nn(ns,is,e,t);s.layers=this.layers,this.add(s);const a=new Nn(ns,is,e,t);a.layers=this.layers,this.add(a);const o=new Nn(ns,is,e,t);o.layers=this.layers,this.add(o);const l=new Nn(ns,is,e,t);l.layers=this.layers,this.add(l);const c=new Nn(ns,is,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Di)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ko)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class dd extends pn{constructor(e,t,n,i,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ws,super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class r_ extends zr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new dd(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Oa(5,5,5),s=new ar({name:"CubemapFromEquirect",uniforms:Ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Sn,blending:er});s.uniforms.tEquirect.value=t;const a=new ai(i,s),o=t.minFilter;return t.minFilter===Cr&&(t.minFilter=pi),new i_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const Ll=new Y,s_=new Y,a_=new je;class Mr{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ll.subVectors(n,t).cross(s_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ll),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||a_.getNormalMatrix(e),i=this.coplanarPoint(Ll).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mr=new Fa,no=new Y;class pd{constructor(e=new Mr,t=new Mr,n=new Mr,i=new Mr,s=new Mr,a=new Mr){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Di){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],d=i[6],h=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],M=i[13],S=i[14],v=i[15];if(n[0].setComponents(l-s,h-c,m-f,v-p).normalize(),n[1].setComponents(l+s,h+c,m+f,v+p).normalize(),n[2].setComponents(l+a,h+u,m+g,v+M).normalize(),n[3].setComponents(l-a,h-u,m-g,v-M).normalize(),n[4].setComponents(l-o,h-d,m-_,v-S).normalize(),t===Di)n[5].setComponents(l+o,h+d,m+_,v+S).normalize();else if(t===ko)n[5].setComponents(o,d,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(e){return mr.center.set(0,0,0),mr.radius=.7071067811865476,mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(no.x=i.normal.x>0?e.max.x:e.min.x,no.y=i.normal.y>0?e.max.y:e.min.y,no.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(no)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function md(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function o_(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}class rl extends yn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,d=e/o,h=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const M=p*h-a;for(let S=0;S<c;S++){const v=S*d-s;g.push(v,-M,0),_.push(0,0,1),m.push(S/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const S=M+c*p,v=M+c*(p+1),P=M+1+c*(p+1),w=M+1+c*p;f.push(S,v,w),f.push(v,P,w)}this.setIndex(f),this.setAttribute("position",new _n(g,3)),this.setAttribute("normal",new _n(_,3)),this.setAttribute("uv",new _n(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rl(e.width,e.height,e.widthSegments,e.heightSegments)}}var l_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,c_=`#ifdef USE_ALPHAHASH
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
#endif`,u_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,f_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,h_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,d_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,p_=`#ifdef USE_AOMAP
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
#endif`,m_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,__=`#ifdef USE_BATCHING
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
#endif`,g_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,v_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,x_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,M_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,S_=`#ifdef USE_IRIDESCENCE
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
#endif`,y_=`#ifdef USE_BUMPMAP
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
#endif`,E_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,T_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,b_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,A_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,w_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,C_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,R_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,P_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,D_=`#define PI 3.141592653589793
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
} // validated`,L_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,I_=`vec3 transformedNormal = objectNormal;
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
#endif`,U_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,N_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,F_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,O_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,B_="gl_FragColor = linearToOutputTexel( gl_FragColor );",z_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,k_=`#ifdef USE_ENVMAP
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
#endif`,V_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,H_=`#ifdef USE_ENVMAP
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
#endif`,G_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,W_=`#ifdef USE_ENVMAP
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
#endif`,X_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Y_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,q_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,K_=`#ifdef USE_GRADIENTMAP
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
}`,Z_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,j_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,J_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Q_=`uniform bool receiveShadow;
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
#endif`,eg=`#ifdef USE_ENVMAP
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
#endif`,tg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ng=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ig=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sg=`PhysicalMaterial material;
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
#endif`,ag=`struct PhysicalMaterial {
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
}`,og=`
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
#endif`,lg=`#if defined( RE_IndirectDiffuse )
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
#endif`,cg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ug=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_g=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gg=`#if defined( USE_POINTS_UV )
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
#endif`,vg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Eg=`#ifdef USE_MORPHTARGETS
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
#endif`,Tg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ag=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pg=`#ifdef USE_NORMALMAP
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
#endif`,Dg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ig=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ug=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ng=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Og=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,Wg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Yg=`float getShadowMask() {
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
}`,qg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$g=`#ifdef USE_SKINNING
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
#endif`,Kg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zg=`#ifdef USE_SKINNING
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
#endif`,jg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,e0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,t0=`#ifdef USE_TRANSMISSION
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
#endif`,n0=`#ifdef USE_TRANSMISSION
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
#endif`,i0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const o0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,l0=`uniform sampler2D t2D;
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
}`,c0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,f0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d0=`#include <common>
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
}`,p0=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,m0=`#define DISTANCE
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
}`,_0=`#define DISTANCE
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
}`,g0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,v0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x0=`uniform float scale;
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
}`,M0=`uniform vec3 diffuse;
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
}`,S0=`#include <common>
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
}`,y0=`uniform vec3 diffuse;
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
}`,E0=`#define LAMBERT
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
}`,T0=`#define LAMBERT
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
}`,b0=`#define MATCAP
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
}`,A0=`#define MATCAP
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
}`,w0=`#define NORMAL
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
}`,C0=`#define NORMAL
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
}`,R0=`#define PHONG
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
}`,P0=`#define PHONG
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
}`,D0=`#define STANDARD
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
}`,L0=`#define STANDARD
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
}`,I0=`#define TOON
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
}`,U0=`#define TOON
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
}`,N0=`uniform float size;
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
}`,F0=`uniform vec3 diffuse;
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
}`,O0=`#include <common>
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
}`,B0=`uniform vec3 color;
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
}`,z0=`uniform float rotation;
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
}`,k0=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:l_,alphahash_pars_fragment:c_,alphamap_fragment:u_,alphamap_pars_fragment:f_,alphatest_fragment:h_,alphatest_pars_fragment:d_,aomap_fragment:p_,aomap_pars_fragment:m_,batching_pars_vertex:__,batching_vertex:g_,begin_vertex:v_,beginnormal_vertex:x_,bsdfs:M_,iridescence_fragment:S_,bumpmap_pars_fragment:y_,clipping_planes_fragment:E_,clipping_planes_pars_fragment:T_,clipping_planes_pars_vertex:b_,clipping_planes_vertex:A_,color_fragment:w_,color_pars_fragment:C_,color_pars_vertex:R_,color_vertex:P_,common:D_,cube_uv_reflection_fragment:L_,defaultnormal_vertex:I_,displacementmap_pars_vertex:U_,displacementmap_vertex:N_,emissivemap_fragment:F_,emissivemap_pars_fragment:O_,colorspace_fragment:B_,colorspace_pars_fragment:z_,envmap_fragment:k_,envmap_common_pars_fragment:V_,envmap_pars_fragment:H_,envmap_pars_vertex:G_,envmap_physical_pars_fragment:eg,envmap_vertex:W_,fog_vertex:X_,fog_pars_vertex:Y_,fog_fragment:q_,fog_pars_fragment:$_,gradientmap_pars_fragment:K_,lightmap_pars_fragment:Z_,lights_lambert_fragment:j_,lights_lambert_pars_fragment:J_,lights_pars_begin:Q_,lights_toon_fragment:tg,lights_toon_pars_fragment:ng,lights_phong_fragment:ig,lights_phong_pars_fragment:rg,lights_physical_fragment:sg,lights_physical_pars_fragment:ag,lights_fragment_begin:og,lights_fragment_maps:lg,lights_fragment_end:cg,logdepthbuf_fragment:ug,logdepthbuf_pars_fragment:fg,logdepthbuf_pars_vertex:hg,logdepthbuf_vertex:dg,map_fragment:pg,map_pars_fragment:mg,map_particle_fragment:_g,map_particle_pars_fragment:gg,metalnessmap_fragment:vg,metalnessmap_pars_fragment:xg,morphinstance_vertex:Mg,morphcolor_vertex:Sg,morphnormal_vertex:yg,morphtarget_pars_vertex:Eg,morphtarget_vertex:Tg,normal_fragment_begin:bg,normal_fragment_maps:Ag,normal_pars_fragment:wg,normal_pars_vertex:Cg,normal_vertex:Rg,normalmap_pars_fragment:Pg,clearcoat_normal_fragment_begin:Dg,clearcoat_normal_fragment_maps:Lg,clearcoat_pars_fragment:Ig,iridescence_pars_fragment:Ug,opaque_fragment:Ng,packing:Fg,premultiplied_alpha_fragment:Og,project_vertex:Bg,dithering_fragment:zg,dithering_pars_fragment:kg,roughnessmap_fragment:Vg,roughnessmap_pars_fragment:Hg,shadowmap_pars_fragment:Gg,shadowmap_pars_vertex:Wg,shadowmap_vertex:Xg,shadowmask_pars_fragment:Yg,skinbase_vertex:qg,skinning_pars_vertex:$g,skinning_vertex:Kg,skinnormal_vertex:Zg,specularmap_fragment:jg,specularmap_pars_fragment:Jg,tonemapping_fragment:Qg,tonemapping_pars_fragment:e0,transmission_fragment:t0,transmission_pars_fragment:n0,uv_pars_fragment:i0,uv_pars_vertex:r0,uv_vertex:s0,worldpos_vertex:a0,background_vert:o0,background_frag:l0,backgroundCube_vert:c0,backgroundCube_frag:u0,cube_vert:f0,cube_frag:h0,depth_vert:d0,depth_frag:p0,distanceRGBA_vert:m0,distanceRGBA_frag:_0,equirect_vert:g0,equirect_frag:v0,linedashed_vert:x0,linedashed_frag:M0,meshbasic_vert:S0,meshbasic_frag:y0,meshlambert_vert:E0,meshlambert_frag:T0,meshmatcap_vert:b0,meshmatcap_frag:A0,meshnormal_vert:w0,meshnormal_frag:C0,meshphong_vert:R0,meshphong_frag:P0,meshphysical_vert:D0,meshphysical_frag:L0,meshtoon_vert:I0,meshtoon_frag:U0,points_vert:N0,points_frag:F0,shadow_vert:O0,shadow_frag:B0,sprite_vert:z0,sprite_frag:k0},ye={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},hi={basic:{uniforms:ln([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:ln([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new at(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:ln([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:ln([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:ln([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new at(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:ln([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:ln([ye.points,ye.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:ln([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:ln([ye.common,ye.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:ln([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:ln([ye.sprite,ye.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:ln([ye.common,ye.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:ln([ye.lights,ye.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};hi.physical={uniforms:ln([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const io={r:0,b:0,g:0},_r=new Fi,V0=new Lt;function H0(r,e,t,n,i,s,a){const o=new at(0);let l=s===!0?0:1,c,u,d=null,h=0,f=null;function g(M){let S=M.isScene===!0?M.background:null;return S&&S.isTexture&&(S=(M.backgroundBlurriness>0?t:e).get(S)),S}function _(M){let S=!1;const v=g(M);v===null?p(o,l):v&&v.isColor&&(p(v,1),S=!0);const P=r.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(M,S){const v=g(S);v&&(v.isCubeTexture||v.mapping===nl)?(u===void 0&&(u=new ai(new Oa(1,1,1),new ar({name:"BackgroundCubeMaterial",uniforms:Ds(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),_r.copy(S.backgroundRotation),_r.x*=-1,_r.y*=-1,_r.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(V0.makeRotationFromEuler(_r)),u.material.toneMapped=ot.getTransfer(v.colorSpace)!==gt,(d!==v||h!==v.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,d=v,h=v.version,f=r.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ai(new rl(2,2),new ar({name:"BackgroundMaterial",uniforms:Ds(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:sr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=ot.getTransfer(v.colorSpace)!==gt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,d=v,h=v.version,f=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,S){M.getRGB(io,fd(r)),n.buffers.color.setClear(io.r,io.g,io.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(M,S=1){o.set(M),l=S,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(o,l)},render:_,addToRenderList:m}}function G0(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,a=!1;function o(x,L,O,V,q){let j=!1;const K=d(V,O,L);s!==K&&(s=K,c(s.object)),j=f(x,V,O,q),j&&g(x,V,O,q),q!==null&&e.update(q,r.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,v(x,L,O,V),q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return r.createVertexArray()}function c(x){return r.bindVertexArray(x)}function u(x){return r.deleteVertexArray(x)}function d(x,L,O){const V=O.wireframe===!0;let q=n[x.id];q===void 0&&(q={},n[x.id]=q);let j=q[L.id];j===void 0&&(j={},q[L.id]=j);let K=j[V];return K===void 0&&(K=h(l()),j[V]=K),K}function h(x){const L=[],O=[],V=[];for(let q=0;q<t;q++)L[q]=0,O[q]=0,V[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:V,object:x,attributes:{},index:null}}function f(x,L,O,V){const q=s.attributes,j=L.attributes;let K=0;const $=O.getAttributes();for(const B in $)if($[B].location>=0){const E=q[B];let R=j[B];if(R===void 0&&(B==="instanceMatrix"&&x.instanceMatrix&&(R=x.instanceMatrix),B==="instanceColor"&&x.instanceColor&&(R=x.instanceColor)),E===void 0||E.attribute!==R||R&&E.data!==R.data)return!0;K++}return s.attributesNum!==K||s.index!==V}function g(x,L,O,V){const q={},j=L.attributes;let K=0;const $=O.getAttributes();for(const B in $)if($[B].location>=0){let E=j[B];E===void 0&&(B==="instanceMatrix"&&x.instanceMatrix&&(E=x.instanceMatrix),B==="instanceColor"&&x.instanceColor&&(E=x.instanceColor));const R={};R.attribute=E,E&&E.data&&(R.data=E.data),q[B]=R,K++}s.attributes=q,s.attributesNum=K,s.index=V}function _(){const x=s.newAttributes;for(let L=0,O=x.length;L<O;L++)x[L]=0}function m(x){p(x,0)}function p(x,L){const O=s.newAttributes,V=s.enabledAttributes,q=s.attributeDivisors;O[x]=1,V[x]===0&&(r.enableVertexAttribArray(x),V[x]=1),q[x]!==L&&(r.vertexAttribDivisor(x,L),q[x]=L)}function M(){const x=s.newAttributes,L=s.enabledAttributes;for(let O=0,V=L.length;O<V;O++)L[O]!==x[O]&&(r.disableVertexAttribArray(O),L[O]=0)}function S(x,L,O,V,q,j,K){K===!0?r.vertexAttribIPointer(x,L,O,q,j):r.vertexAttribPointer(x,L,O,V,q,j)}function v(x,L,O,V){_();const q=V.attributes,j=O.getAttributes(),K=L.defaultAttributeValues;for(const $ in j){const B=j[$];if(B.location>=0){let se=q[$];if(se===void 0&&($==="instanceMatrix"&&x.instanceMatrix&&(se=x.instanceMatrix),$==="instanceColor"&&x.instanceColor&&(se=x.instanceColor)),se!==void 0){const E=se.normalized,R=se.itemSize,Q=e.get(se);if(Q===void 0)continue;const le=Q.buffer,N=Q.type,H=Q.bytesPerElement,re=N===r.INT||N===r.UNSIGNED_INT||se.gpuType===mu;if(se.isInterleavedBufferAttribute){const Z=se.data,ae=Z.stride,ue=se.offset;if(Z.isInstancedInterleavedBuffer){for(let Me=0;Me<B.locationSize;Me++)p(B.location+Me,Z.meshPerAttribute);x.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Me=0;Me<B.locationSize;Me++)m(B.location+Me);r.bindBuffer(r.ARRAY_BUFFER,le);for(let Me=0;Me<B.locationSize;Me++)S(B.location+Me,R/B.locationSize,N,E,ae*H,(ue+R/B.locationSize*Me)*H,re)}else{if(se.isInstancedBufferAttribute){for(let Z=0;Z<B.locationSize;Z++)p(B.location+Z,se.meshPerAttribute);x.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Z=0;Z<B.locationSize;Z++)m(B.location+Z);r.bindBuffer(r.ARRAY_BUFFER,le);for(let Z=0;Z<B.locationSize;Z++)S(B.location+Z,R/B.locationSize,N,E,R*H,R/B.locationSize*Z*H,re)}}else if(K!==void 0){const E=K[$];if(E!==void 0)switch(E.length){case 2:r.vertexAttrib2fv(B.location,E);break;case 3:r.vertexAttrib3fv(B.location,E);break;case 4:r.vertexAttrib4fv(B.location,E);break;default:r.vertexAttrib1fv(B.location,E)}}}}M()}function P(){D();for(const x in n){const L=n[x];for(const O in L){const V=L[O];for(const q in V)u(V[q].object),delete V[q];delete L[O]}delete n[x]}}function w(x){if(n[x.id]===void 0)return;const L=n[x.id];for(const O in L){const V=L[O];for(const q in V)u(V[q].object),delete V[q];delete L[O]}delete n[x.id]}function b(x){for(const L in n){const O=n[L];if(O[x.id]===void 0)continue;const V=O[x.id];for(const q in V)u(V[q].object),delete V[q];delete O[x.id]}}function D(){y(),a=!0,s!==i&&(s=i,c(s.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:D,resetDefaultState:y,dispose:P,releaseStatesOfGeometry:w,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function W0(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,d){d!==0&&(r.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];t.update(f,n,1)}function l(c,u,d,h){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],u[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*h[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function X0(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(b){return!(b!==si&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const D=b===La&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Ni&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Pi&&!D)}function l(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:P,maxSamples:w}}function Y0(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Mr,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||i;return i=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=r.get(d);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const M=s?0:n,S=M*4;let v=p.clippingState||null;l.value=v,v=u(g,h,S,f);for(let P=0;P!==S;++P)v[P]=t[P];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,v=f;S!==_;++S,v+=4)a.copy(d[S]).applyMatrix4(M,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function q0(r){let e=new WeakMap;function t(a,o){return o===uc?a.mapping=ws:o===fc&&(a.mapping=Cs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===uc||o===fc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new r_(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class $0 extends hd{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const fs=4,Rf=[.125,.215,.35,.446,.526,.582],Ar=20,Il=new $0,Pf=new at;let Ul=null,Nl=0,Fl=0,Ol=!1;const Sr=(1+Math.sqrt(5))/2,rs=1/Sr,Df=[new Y(-Sr,rs,0),new Y(Sr,rs,0),new Y(-rs,0,Sr),new Y(rs,0,Sr),new Y(0,Sr,-rs),new Y(0,Sr,rs),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)];class Lf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ul=this._renderer.getRenderTarget(),Nl=this._renderer.getActiveCubeFace(),Fl=this._renderer.getActiveMipmapLevel(),Ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ul,Nl,Fl),this._renderer.xr.enabled=Ol,e.scissorTest=!1,ro(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ws||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ul=this._renderer.getRenderTarget(),Nl=this._renderer.getActiveCubeFace(),Fl=this._renderer.getActiveMipmapLevel(),Ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pi,minFilter:pi,generateMipmaps:!1,type:La,format:si,colorSpace:Bs,depthBuffer:!1},i=If(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=If(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=K0(s)),this._blurMaterial=Z0(s,e,t)}return i}_compileMaterial(e){const t=new ai(this._lodPlanes[0],e);this._renderer.compile(t,Il)}_sceneToCubeUV(e,t,n,i){const o=new Nn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Pf),u.toneMapping=tr,u.autoClear=!1;const f=new Ho({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),g=new ai(new Oa,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(Pf),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):M===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const S=this._cubeSize;ro(i,M*S,p>2?S:0,S,S),u.setRenderTarget(i),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ws||e.mapping===Cs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uf());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new ai(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ro(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Il)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Df[(i-s-1)%Df.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new ai(this._lodPlanes[i],c),h=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ar-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Ar;m>Ar&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ar}`);const p=[];let M=0;for(let b=0;b<Ar;++b){const D=b/_,y=Math.exp(-D*D/2);p.push(y),b===0?M+=y:b<m&&(M+=2*y)}for(let b=0;b<p.length;b++)p[b]=p[b]/M;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:S}=this;h.dTheta.value=g,h.mipInt.value=S-n;const v=this._sizeLods[i],P=3*v*(i>S-fs?i-S+fs:0),w=4*(this._cubeSize-v);ro(t,P,w,3*v,2*v),l.setRenderTarget(t),l.render(d,Il)}}function K0(r){const e=[],t=[],n=[];let i=r;const s=r-fs+1+Rf.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-fs?l=Rf[a-r+fs-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*f),S=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let w=0;w<f;w++){const b=w%3*2/3-1,D=w>2?0:-1,y=[b,D,0,b+2/3,D,0,b+2/3,D+1,0,b,D,0,b+2/3,D+1,0,b,D+1,0];M.set(y,_*g*w),S.set(h,m*g*w);const x=[w,w,w,w,w,w];v.set(x,p*g*w)}const P=new yn;P.setAttribute("position",new hn(M,_)),P.setAttribute("uv",new hn(S,m)),P.setAttribute("faceIndex",new hn(v,p)),e.push(P),i>fs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function If(r,e,t){const n=new zr(r,e,t);return n.texture.mapping=nl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ro(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Z0(r,e,t){const n=new Float32Array(Ar),i=new Y(0,1,0);return new ar({name:"SphericalGaussianBlur",defines:{n:Ar,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:yu(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function Uf(){return new ar({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yu(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function Nf(){return new ar({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function yu(){return`

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
	`}function j0(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===uc||l===fc,u=l===ws||l===Cs;if(c||u){let d=e.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new Lf(r)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new Lf(r)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function J0(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Qs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Q0(r,e,t,n){const i={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}h.removeEventListener("dispose",a),delete i[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],r.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],r.ARRAY_BUFFER)}}function c(d){const h=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const M=f.array;_=f.version;for(let S=0,v=M.length;S<v;S+=3){const P=M[S+0],w=M[S+1],b=M[S+2];h.push(P,w,w,b,b,P)}}else if(g!==void 0){const M=g.array;_=g.version;for(let S=0,v=M.length/3-1;S<v;S+=3){const P=S+0,w=S+1,b=S+2;h.push(P,w,w,b,b,P)}}else return;const m=new(rd(h)?ud:cd)(h,1);m.version=_;const p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function ev(r,e,t){let n;function i(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,f){r.drawElements(n,f,s,h*a),t.update(f,n,1)}function c(h,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,h*a,g),t.update(f,n,g))}function u(h,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function d(h,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,h,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M]*_[M];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function tv(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function nv(r,e,t){const n=new WeakMap,i=new Nt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let x=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var f=x;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let P=o.attributes.position.count*v,w=1;P>e.maxTextureSize&&(w=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const b=new Float32Array(P*w*4*d),D=new ad(b,P,w,d);D.type=Pi,D.needsUpdate=!0;const y=v*4;for(let L=0;L<d;L++){const O=p[L],V=M[L],q=S[L],j=P*w*4*L;for(let K=0;K<O.count;K++){const $=K*y;g===!0&&(i.fromBufferAttribute(O,K),b[j+$+0]=i.x,b[j+$+1]=i.y,b[j+$+2]=i.z,b[j+$+3]=0),_===!0&&(i.fromBufferAttribute(V,K),b[j+$+4]=i.x,b[j+$+5]=i.y,b[j+$+6]=i.z,b[j+$+7]=0),m===!0&&(i.fromBufferAttribute(q,K),b[j+$+8]=i.x,b[j+$+9]=i.y,b[j+$+10]=i.z,b[j+$+11]=q.itemSize===4?i.w:1)}}h={count:d,texture:D,size:new mt(P,w)},n.set(o,h),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function iv(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return d}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class _d extends pn{constructor(e,t,n,i,s,a,o,l,c,u=gs){if(u!==gs&&u!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===gs&&(n=Br),n===void 0&&u===Ps&&(n=Rs),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:oi,this.minFilter=l!==void 0?l:oi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const gd=new pn,Ff=new _d(1,1),vd=new ad,xd=new Hm,Md=new dd,Of=[],Bf=[],zf=new Float32Array(16),kf=new Float32Array(9),Vf=new Float32Array(4);function Vs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Of[i];if(s===void 0&&(s=new Float32Array(i),Of[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Gt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Wt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function sl(r,e){let t=Bf[e];t===void 0&&(t=new Int32Array(e),Bf[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function rv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function sv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;r.uniform2fv(this.addr,e),Wt(t,e)}}function av(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;r.uniform3fv(this.addr,e),Wt(t,e)}}function ov(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;r.uniform4fv(this.addr,e),Wt(t,e)}}function lv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;Vf.set(n),r.uniformMatrix2fv(this.addr,!1,Vf),Wt(t,n)}}function cv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;kf.set(n),r.uniformMatrix3fv(this.addr,!1,kf),Wt(t,n)}}function uv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;zf.set(n),r.uniformMatrix4fv(this.addr,!1,zf),Wt(t,n)}}function fv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function hv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;r.uniform2iv(this.addr,e),Wt(t,e)}}function dv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;r.uniform3iv(this.addr,e),Wt(t,e)}}function pv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;r.uniform4iv(this.addr,e),Wt(t,e)}}function mv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function _v(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;r.uniform2uiv(this.addr,e),Wt(t,e)}}function gv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;r.uniform3uiv(this.addr,e),Wt(t,e)}}function vv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;r.uniform4uiv(this.addr,e),Wt(t,e)}}function xv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Ff.compareFunction=id,s=Ff):s=gd,t.setTexture2D(e||s,i)}function Mv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||xd,i)}function Sv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Md,i)}function yv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||vd,i)}function Ev(r){switch(r){case 5126:return rv;case 35664:return sv;case 35665:return av;case 35666:return ov;case 35674:return lv;case 35675:return cv;case 35676:return uv;case 5124:case 35670:return fv;case 35667:case 35671:return hv;case 35668:case 35672:return dv;case 35669:case 35673:return pv;case 5125:return mv;case 36294:return _v;case 36295:return gv;case 36296:return vv;case 35678:case 36198:case 36298:case 36306:case 35682:return xv;case 35679:case 36299:case 36307:return Mv;case 35680:case 36300:case 36308:case 36293:return Sv;case 36289:case 36303:case 36311:case 36292:return yv}}function Tv(r,e){r.uniform1fv(this.addr,e)}function bv(r,e){const t=Vs(e,this.size,2);r.uniform2fv(this.addr,t)}function Av(r,e){const t=Vs(e,this.size,3);r.uniform3fv(this.addr,t)}function wv(r,e){const t=Vs(e,this.size,4);r.uniform4fv(this.addr,t)}function Cv(r,e){const t=Vs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Rv(r,e){const t=Vs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Pv(r,e){const t=Vs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Dv(r,e){r.uniform1iv(this.addr,e)}function Lv(r,e){r.uniform2iv(this.addr,e)}function Iv(r,e){r.uniform3iv(this.addr,e)}function Uv(r,e){r.uniform4iv(this.addr,e)}function Nv(r,e){r.uniform1uiv(this.addr,e)}function Fv(r,e){r.uniform2uiv(this.addr,e)}function Ov(r,e){r.uniform3uiv(this.addr,e)}function Bv(r,e){r.uniform4uiv(this.addr,e)}function zv(r,e,t){const n=this.cache,i=e.length,s=sl(t,i);Gt(n,s)||(r.uniform1iv(this.addr,s),Wt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||gd,s[a])}function kv(r,e,t){const n=this.cache,i=e.length,s=sl(t,i);Gt(n,s)||(r.uniform1iv(this.addr,s),Wt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||xd,s[a])}function Vv(r,e,t){const n=this.cache,i=e.length,s=sl(t,i);Gt(n,s)||(r.uniform1iv(this.addr,s),Wt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Md,s[a])}function Hv(r,e,t){const n=this.cache,i=e.length,s=sl(t,i);Gt(n,s)||(r.uniform1iv(this.addr,s),Wt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||vd,s[a])}function Gv(r){switch(r){case 5126:return Tv;case 35664:return bv;case 35665:return Av;case 35666:return wv;case 35674:return Cv;case 35675:return Rv;case 35676:return Pv;case 5124:case 35670:return Dv;case 35667:case 35671:return Lv;case 35668:case 35672:return Iv;case 35669:case 35673:return Uv;case 5125:return Nv;case 36294:return Fv;case 36295:return Ov;case 36296:return Bv;case 35678:case 36198:case 36298:case 36306:case 35682:return zv;case 35679:case 36299:case 36307:return kv;case 35680:case 36300:case 36308:case 36293:return Vv;case 36289:case 36303:case 36311:case 36292:return Hv}}class Wv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ev(t.type)}}class Xv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Gv(t.type)}}class Yv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Bl=/(\w+)(\])?(\[|\.)?/g;function Hf(r,e){r.seq.push(e),r.map[e.id]=e}function qv(r,e,t){const n=r.name,i=n.length;for(Bl.lastIndex=0;;){const s=Bl.exec(n),a=Bl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Hf(t,c===void 0?new Wv(o,r,e):new Xv(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new Yv(o),Hf(t,d)),t=d}}}class Po{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);qv(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Gf(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const $v=37297;let Kv=0;function Zv(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Wf=new je;function jv(r){ot._getMatrix(Wf,ot.workingColorSpace,r);const e=`mat3( ${Wf.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(r)){case il:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Xf(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Zv(r.getShaderSource(e),a)}else return i}function Jv(r,e){const t=jv(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Qv(r,e){let t;switch(e){case pm:t="Linear";break;case mm:t="Reinhard";break;case _m:t="Cineon";break;case gm:t="ACESFilmic";break;case xm:t="AgX";break;case Mm:t="Neutral";break;case vm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const so=new Y;function ex(){ot.getLuminanceCoefficients(so);const r=so.x.toFixed(4),e=so.y.toFixed(4),t=so.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tx(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ea).join(`
`)}function nx(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ix(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function ea(r){return r!==""}function Yf(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qf(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vc(r){return r.replace(rx,ax)}const sx=new Map;function ax(r,e){let t=Je[e];if(t===void 0){const n=sx.get(e);if(n!==void 0)t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Vc(t)}const ox=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $f(r){return r.replace(ox,lx)}function lx(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Kf(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function cx(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Wh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===qp?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function ux(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ws:case Cs:e="ENVMAP_TYPE_CUBE";break;case nl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function fx(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Cs:e="ENVMAP_MODE_REFRACTION";break}return e}function hx(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Xh:e="ENVMAP_BLENDING_MULTIPLY";break;case hm:e="ENVMAP_BLENDING_MIX";break;case dm:e="ENVMAP_BLENDING_ADD";break}return e}function dx(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function px(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=cx(t),c=ux(t),u=fx(t),d=hx(t),h=dx(t),f=tx(t),g=nx(s),_=i.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ea).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ea).join(`
`),p.length>0&&(p+=`
`)):(m=[Kf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ea).join(`
`),p=[Kf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==tr?"#define TONE_MAPPING":"",t.toneMapping!==tr?Je.tonemapping_pars_fragment:"",t.toneMapping!==tr?Qv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,Jv("linearToOutputTexel",t.outputColorSpace),ex(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ea).join(`
`)),a=Vc(a),a=Yf(a,t),a=qf(a,t),o=Vc(o),o=Yf(o,t),o=qf(o,t),a=$f(a),o=$f(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===lf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=M+m+a,v=M+p+o,P=Gf(i,i.VERTEX_SHADER,S),w=Gf(i,i.FRAGMENT_SHADER,v);i.attachShader(_,P),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(L){if(r.debug.checkShaderErrors){const O=i.getProgramInfoLog(_).trim(),V=i.getShaderInfoLog(P).trim(),q=i.getShaderInfoLog(w).trim();let j=!0,K=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(j=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,P,w);else{const $=Xf(i,P,"vertex"),B=Xf(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+O+`
`+$+`
`+B)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(V===""||q==="")&&(K=!1);K&&(L.diagnostics={runnable:j,programLog:O,vertexShader:{log:V,prefix:m},fragmentShader:{log:q,prefix:p}})}i.deleteShader(P),i.deleteShader(w),D=new Po(i,_),y=ix(i,_)}let D;this.getUniforms=function(){return D===void 0&&b(this),D};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(_,$v)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Kv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=w,this}let mx=0;class _x{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new gx(e),t.set(e,n)),n}}class gx{constructor(e){this.id=mx++,this.code=e,this.usedTimes=0}}function vx(r,e,t,n,i,s,a){const o=new od,l=new _x,c=new Set,u=[],d=i.logarithmicDepthBuffer,h=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,x,L,O,V){const q=O.fog,j=V.geometry,K=y.isMeshStandardMaterial?O.environment:null,$=(y.isMeshStandardMaterial?t:e).get(y.envMap||K),B=$&&$.mapping===nl?$.image.height:null,se=g[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const E=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,R=E!==void 0?E.length:0;let Q=0;j.morphAttributes.position!==void 0&&(Q=1),j.morphAttributes.normal!==void 0&&(Q=2),j.morphAttributes.color!==void 0&&(Q=3);let le,N,H,re;if(se){const Ae=hi[se];le=Ae.vertexShader,N=Ae.fragmentShader}else le=y.vertexShader,N=y.fragmentShader,l.update(y),H=l.getVertexShaderID(y),re=l.getFragmentShaderID(y);const Z=r.getRenderTarget(),ae=r.state.buffers.depth.getReversed(),ue=V.isInstancedMesh===!0,Me=V.isBatchedMesh===!0,Pe=!!y.map,be=!!y.matcap,Ee=!!$,I=!!y.aoMap,$e=!!y.lightMap,Ue=!!y.bumpMap,k=!!y.normalMap,Te=!!y.displacementMap,Ye=!!y.emissiveMap,we=!!y.metalnessMap,C=!!y.roughnessMap,T=y.anisotropy>0,G=y.clearcoat>0,ie=y.dispersion>0,te=y.iridescence>0,ee=y.sheen>0,me=y.transmission>0,de=T&&!!y.anisotropyMap,_e=G&&!!y.clearcoatMap,Ge=G&&!!y.clearcoatNormalMap,oe=G&&!!y.clearcoatRoughnessMap,he=te&&!!y.iridescenceMap,Oe=te&&!!y.iridescenceThicknessMap,Be=ee&&!!y.sheenColorMap,Ce=ee&&!!y.sheenRoughnessMap,Ke=!!y.specularMap,ze=!!y.specularColorMap,st=!!y.specularIntensityMap,U=me&&!!y.transmissionMap,ge=me&&!!y.thicknessMap,J=!!y.gradientMap,ne=!!y.alphaMap,pe=y.alphaTest>0,ve=!!y.alphaHash,ke=!!y.extensions;let lt=tr;y.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(lt=r.toneMapping);const Pt={shaderID:se,shaderType:y.type,shaderName:y.name,vertexShader:le,fragmentShader:N,defines:y.defines,customVertexShaderID:H,customFragmentShaderID:re,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Me,batchingColor:Me&&V._colorsTexture!==null,instancing:ue,instancingColor:ue&&V.instanceColor!==null,instancingMorph:ue&&V.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Z===null?r.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Bs,alphaToCoverage:!!y.alphaToCoverage,map:Pe,matcap:be,envMap:Ee,envMapMode:Ee&&$.mapping,envMapCubeUVHeight:B,aoMap:I,lightMap:$e,bumpMap:Ue,normalMap:k,displacementMap:h&&Te,emissiveMap:Ye,normalMapObjectSpace:k&&y.normalMapType===bm,normalMapTangentSpace:k&&y.normalMapType===Tm,metalnessMap:we,roughnessMap:C,anisotropy:T,anisotropyMap:de,clearcoat:G,clearcoatMap:_e,clearcoatNormalMap:Ge,clearcoatRoughnessMap:oe,dispersion:ie,iridescence:te,iridescenceMap:he,iridescenceThicknessMap:Oe,sheen:ee,sheenColorMap:Be,sheenRoughnessMap:Ce,specularMap:Ke,specularColorMap:ze,specularIntensityMap:st,transmission:me,transmissionMap:U,thicknessMap:ge,gradientMap:J,opaque:y.transparent===!1&&y.blending===_s&&y.alphaToCoverage===!1,alphaMap:ne,alphaTest:pe,alphaHash:ve,combine:y.combine,mapUv:Pe&&_(y.map.channel),aoMapUv:I&&_(y.aoMap.channel),lightMapUv:$e&&_(y.lightMap.channel),bumpMapUv:Ue&&_(y.bumpMap.channel),normalMapUv:k&&_(y.normalMap.channel),displacementMapUv:Te&&_(y.displacementMap.channel),emissiveMapUv:Ye&&_(y.emissiveMap.channel),metalnessMapUv:we&&_(y.metalnessMap.channel),roughnessMapUv:C&&_(y.roughnessMap.channel),anisotropyMapUv:de&&_(y.anisotropyMap.channel),clearcoatMapUv:_e&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Ge&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&_(y.sheenRoughnessMap.channel),specularMapUv:Ke&&_(y.specularMap.channel),specularColorMapUv:ze&&_(y.specularColorMap.channel),specularIntensityMapUv:st&&_(y.specularIntensityMap.channel),transmissionMapUv:U&&_(y.transmissionMap.channel),thicknessMapUv:ge&&_(y.thicknessMap.channel),alphaMapUv:ne&&_(y.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(k||T),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!j.attributes.uv&&(Pe||ne),fog:!!q,useFog:y.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:ae,skinning:V.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:R,morphTextureStride:Q,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:lt,decodeVideoTexture:Pe&&y.map.isVideoTexture===!0&&ot.getTransfer(y.map.colorSpace)===gt,decodeVideoTextureEmissive:Ye&&y.emissiveMap.isVideoTexture===!0&&ot.getTransfer(y.emissiveMap.colorSpace)===gt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ci,flipSided:y.side===Sn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ke&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&y.extensions.multiDraw===!0||Me)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Pt.vertexUv1s=c.has(1),Pt.vertexUv2s=c.has(2),Pt.vertexUv3s=c.has(3),c.clear(),Pt}function p(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const L in y.defines)x.push(L),x.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(M(x,y),S(x,y),x.push(r.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function M(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function S(y,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),y.push(o.mask)}function v(y){const x=g[y.type];let L;if(x){const O=hi[x];L=e_.clone(O.uniforms)}else L=y.uniforms;return L}function P(y,x){let L;for(let O=0,V=u.length;O<V;O++){const q=u[O];if(q.cacheKey===x){L=q,++L.usedTimes;break}}return L===void 0&&(L=new px(r,x,y,s),u.push(L)),L}function w(y){if(--y.usedTimes===0){const x=u.indexOf(y);u[x]=u[u.length-1],u.pop(),y.destroy()}}function b(y){l.remove(y)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:P,releaseProgram:w,releaseShaderCache:b,programs:u,dispose:D}}function xx(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Mx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Zf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function jf(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(d,h,f,g,_,m){let p=r[e];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},r[e]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),e++,p}function o(d,h,f,g,_,m){const p=a(d,h,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(d,h,f,g,_,m){const p=a(d,h,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(d,h){t.length>1&&t.sort(d||Mx),n.length>1&&n.sort(h||Zf),i.length>1&&i.sort(h||Zf)}function u(){for(let d=e,h=r.length;d<h;d++){const f=r[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function Sx(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new jf,r.set(n,[a])):i>=s.length?(a=new jf,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function yx(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new at};break;case"SpotLight":t={position:new Y,direction:new Y,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return r[e.id]=t,t}}}function Ex(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Tx=0;function bx(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Ax(r){const e=new yx,t=Ex(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Y);const i=new Y,s=new Lt,a=new Lt;function o(c){let u=0,d=0,h=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,M=0,S=0,v=0,P=0,w=0,b=0;c.sort(bx);for(let y=0,x=c.length;y<x;y++){const L=c[y],O=L.color,V=L.intensity,q=L.distance,j=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=O.r*V,d+=O.g*V,h+=O.b*V;else if(L.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(L.sh.coefficients[K],V);b++}else if(L.isDirectionalLight){const K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const $=L.shadow,B=t.get(L);B.shadowIntensity=$.intensity,B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,n.directionalShadow[f]=B,n.directionalShadowMap[f]=j,n.directionalShadowMatrix[f]=L.shadow.matrix,M++}n.directional[f]=K,f++}else if(L.isSpotLight){const K=e.get(L);K.position.setFromMatrixPosition(L.matrixWorld),K.color.copy(O).multiplyScalar(V),K.distance=q,K.coneCos=Math.cos(L.angle),K.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),K.decay=L.decay,n.spot[_]=K;const $=L.shadow;if(L.map&&(n.spotLightMap[P]=L.map,P++,$.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[_]=$.matrix,L.castShadow){const B=t.get(L);B.shadowIntensity=$.intensity,B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,n.spotShadow[_]=B,n.spotShadowMap[_]=j,v++}_++}else if(L.isRectAreaLight){const K=e.get(L);K.color.copy(O).multiplyScalar(V),K.halfWidth.set(L.width*.5,0,0),K.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=K,m++}else if(L.isPointLight){const K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),K.distance=L.distance,K.decay=L.decay,L.castShadow){const $=L.shadow,B=t.get(L);B.shadowIntensity=$.intensity,B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,B.shadowCameraNear=$.camera.near,B.shadowCameraFar=$.camera.far,n.pointShadow[g]=B,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=L.shadow.matrix,S++}n.point[g]=K,g++}else if(L.isHemisphereLight){const K=e.get(L);K.skyColor.copy(L.color).multiplyScalar(V),K.groundColor.copy(L.groundColor).multiplyScalar(V),n.hemi[p]=K,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const D=n.hash;(D.directionalLength!==f||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==M||D.numPointShadows!==S||D.numSpotShadows!==v||D.numSpotMaps!==P||D.numLightProbes!==b)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+P-w,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=b,D.directionalLength=f,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=M,D.numPointShadows=S,D.numSpotShadows=v,D.numSpotMaps=P,D.numLightProbes=b,n.version=Tx++)}function l(c,u){let d=0,h=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const S=c[p];if(S.isDirectionalLight){const v=n.directional[d];v.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(S.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(S.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const v=n.point[h];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),h++}else if(S.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Jf(r){const e=new Ax(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function wx(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Jf(r),e.set(i,[o])):s>=a.length?(o=new Jf(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class Cx extends ks{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ym,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Rx extends ks{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Px=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dx=`uniform sampler2D shadow_pass;
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
}`;function Lx(r,e,t){let n=new pd;const i=new mt,s=new mt,a=new Nt,o=new Cx({depthPacking:Em}),l=new Rx,c={},u=t.maxTextureSize,d={[sr]:Sn,[Sn]:sr,[Ci]:Ci},h=new ar({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:Px,fragmentShader:Dx}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new yn;g.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ai(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wh;let p=this.type;this.render=function(w,b,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const y=r.getRenderTarget(),x=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),O=r.state;O.setBlending(er),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const V=p!==bi&&this.type===bi,q=p===bi&&this.type!==bi;for(let j=0,K=w.length;j<K;j++){const $=w[j],B=$.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const se=B.getFrameExtents();if(i.multiply(se),s.copy(B.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/se.x),i.x=s.x*se.x,B.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/se.y),i.y=s.y*se.y,B.mapSize.y=s.y)),B.map===null||V===!0||q===!0){const R=this.type!==bi?{minFilter:oi,magFilter:oi}:{};B.map!==null&&B.map.dispose(),B.map=new zr(i.x,i.y,R),B.map.texture.name=$.name+".shadowMap",B.camera.updateProjectionMatrix()}r.setRenderTarget(B.map),r.clear();const E=B.getViewportCount();for(let R=0;R<E;R++){const Q=B.getViewport(R);a.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),O.viewport(a),B.updateMatrices($,R),n=B.getFrustum(),v(b,D,B.camera,$,this.type)}B.isPointLightShadow!==!0&&this.type===bi&&M(B,D),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(y,x,L)};function M(w,b){const D=e.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new zr(i.x,i.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(b,null,D,h,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(b,null,D,f,_,null)}function S(w,b,D,y){let x=null;const L=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)x=L;else if(x=D.isPointLight===!0?l:o,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const O=x.uuid,V=b.uuid;let q=c[O];q===void 0&&(q={},c[O]=q);let j=q[V];j===void 0&&(j=x.clone(),q[V]=j,b.addEventListener("dispose",P)),x=j}if(x.visible=b.visible,x.wireframe=b.wireframe,y===bi?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:d[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,D.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const O=r.properties.get(x);O.light=D}return x}function v(w,b,D,y,x){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===bi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);const V=e.update(w),q=w.material;if(Array.isArray(q)){const j=V.groups;for(let K=0,$=j.length;K<$;K++){const B=j[K],se=q[B.materialIndex];if(se&&se.visible){const E=S(w,se,y,x);w.onBeforeShadow(r,w,b,D,V,E,B),r.renderBufferDirect(D,null,V,E,w,B),w.onAfterShadow(r,w,b,D,V,E,B)}}}else if(q.visible){const j=S(w,q,y,x);w.onBeforeShadow(r,w,b,D,V,j,null),r.renderBufferDirect(D,null,V,j,w,null),w.onAfterShadow(r,w,b,D,V,j,null)}}const O=w.children;for(let V=0,q=O.length;V<q;V++)v(O[V],b,D,y,x)}function P(w){w.target.removeEventListener("dispose",P);for(const D in c){const y=c[D],x=w.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}const Ix={[ic]:rc,[sc]:lc,[ac]:cc,[As]:oc,[rc]:ic,[lc]:sc,[cc]:ac,[oc]:As};function Ux(r,e){function t(){let U=!1;const ge=new Nt;let J=null;const ne=new Nt(0,0,0,0);return{setMask:function(pe){J!==pe&&!U&&(r.colorMask(pe,pe,pe,pe),J=pe)},setLocked:function(pe){U=pe},setClear:function(pe,ve,ke,lt,Pt){Pt===!0&&(pe*=lt,ve*=lt,ke*=lt),ge.set(pe,ve,ke,lt),ne.equals(ge)===!1&&(r.clearColor(pe,ve,ke,lt),ne.copy(ge))},reset:function(){U=!1,J=null,ne.set(-1,0,0,0)}}}function n(){let U=!1,ge=!1,J=null,ne=null,pe=null;return{setReversed:function(ve){if(ge!==ve){const ke=e.get("EXT_clip_control");ge?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT);const lt=pe;pe=null,this.setClear(lt)}ge=ve},getReversed:function(){return ge},setTest:function(ve){ve?Z(r.DEPTH_TEST):ae(r.DEPTH_TEST)},setMask:function(ve){J!==ve&&!U&&(r.depthMask(ve),J=ve)},setFunc:function(ve){if(ge&&(ve=Ix[ve]),ne!==ve){switch(ve){case ic:r.depthFunc(r.NEVER);break;case rc:r.depthFunc(r.ALWAYS);break;case sc:r.depthFunc(r.LESS);break;case As:r.depthFunc(r.LEQUAL);break;case ac:r.depthFunc(r.EQUAL);break;case oc:r.depthFunc(r.GEQUAL);break;case lc:r.depthFunc(r.GREATER);break;case cc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ne=ve}},setLocked:function(ve){U=ve},setClear:function(ve){pe!==ve&&(ge&&(ve=1-ve),r.clearDepth(ve),pe=ve)},reset:function(){U=!1,J=null,ne=null,pe=null,ge=!1}}}function i(){let U=!1,ge=null,J=null,ne=null,pe=null,ve=null,ke=null,lt=null,Pt=null;return{setTest:function(Ae){U||(Ae?Z(r.STENCIL_TEST):ae(r.STENCIL_TEST))},setMask:function(Ae){ge!==Ae&&!U&&(r.stencilMask(Ae),ge=Ae)},setFunc:function(Ae,Ie,Ze){(J!==Ae||ne!==Ie||pe!==Ze)&&(r.stencilFunc(Ae,Ie,Ze),J=Ae,ne=Ie,pe=Ze)},setOp:function(Ae,Ie,Ze){(ve!==Ae||ke!==Ie||lt!==Ze)&&(r.stencilOp(Ae,Ie,Ze),ve=Ae,ke=Ie,lt=Ze)},setLocked:function(Ae){U=Ae},setClear:function(Ae){Pt!==Ae&&(r.clearStencil(Ae),Pt=Ae)},reset:function(){U=!1,ge=null,J=null,ne=null,pe=null,ve=null,ke=null,lt=null,Pt=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,f=[],g=null,_=!1,m=null,p=null,M=null,S=null,v=null,P=null,w=null,b=new at(0,0,0),D=0,y=!1,x=null,L=null,O=null,V=null,q=null;const j=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,$=0;const B=r.getParameter(r.VERSION);B.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(B)[1]),K=$>=1):B.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),K=$>=2);let se=null,E={};const R=r.getParameter(r.SCISSOR_BOX),Q=r.getParameter(r.VIEWPORT),le=new Nt().fromArray(R),N=new Nt().fromArray(Q);function H(U,ge,J,ne){const pe=new Uint8Array(4),ve=r.createTexture();r.bindTexture(U,ve),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ke=0;ke<J;ke++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(ge,0,r.RGBA,1,1,ne,0,r.RGBA,r.UNSIGNED_BYTE,pe):r.texImage2D(ge+ke,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,pe);return ve}const re={};re[r.TEXTURE_2D]=H(r.TEXTURE_2D,r.TEXTURE_2D,1),re[r.TEXTURE_CUBE_MAP]=H(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[r.TEXTURE_2D_ARRAY]=H(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),re[r.TEXTURE_3D]=H(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(r.DEPTH_TEST),a.setFunc(As),Ue(!1),k(tf),Z(r.CULL_FACE),I(er);function Z(U){u[U]!==!0&&(r.enable(U),u[U]=!0)}function ae(U){u[U]!==!1&&(r.disable(U),u[U]=!1)}function ue(U,ge){return d[U]!==ge?(r.bindFramebuffer(U,ge),d[U]=ge,U===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=ge),U===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=ge),!0):!1}function Me(U,ge){let J=f,ne=!1;if(U){J=h.get(ge),J===void 0&&(J=[],h.set(ge,J));const pe=U.textures;if(J.length!==pe.length||J[0]!==r.COLOR_ATTACHMENT0){for(let ve=0,ke=pe.length;ve<ke;ve++)J[ve]=r.COLOR_ATTACHMENT0+ve;J.length=pe.length,ne=!0}}else J[0]!==r.BACK&&(J[0]=r.BACK,ne=!0);ne&&r.drawBuffers(J)}function Pe(U){return g!==U?(r.useProgram(U),g=U,!0):!1}const be={[br]:r.FUNC_ADD,[Kp]:r.FUNC_SUBTRACT,[Zp]:r.FUNC_REVERSE_SUBTRACT};be[jp]=r.MIN,be[Jp]=r.MAX;const Ee={[Qp]:r.ZERO,[em]:r.ONE,[tm]:r.SRC_COLOR,[tc]:r.SRC_ALPHA,[om]:r.SRC_ALPHA_SATURATE,[sm]:r.DST_COLOR,[im]:r.DST_ALPHA,[nm]:r.ONE_MINUS_SRC_COLOR,[nc]:r.ONE_MINUS_SRC_ALPHA,[am]:r.ONE_MINUS_DST_COLOR,[rm]:r.ONE_MINUS_DST_ALPHA,[lm]:r.CONSTANT_COLOR,[cm]:r.ONE_MINUS_CONSTANT_COLOR,[um]:r.CONSTANT_ALPHA,[fm]:r.ONE_MINUS_CONSTANT_ALPHA};function I(U,ge,J,ne,pe,ve,ke,lt,Pt,Ae){if(U===er){_===!0&&(ae(r.BLEND),_=!1);return}if(_===!1&&(Z(r.BLEND),_=!0),U!==$p){if(U!==m||Ae!==y){if((p!==br||v!==br)&&(r.blendEquation(r.FUNC_ADD),p=br,v=br),Ae)switch(U){case _s:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case la:r.blendFunc(r.ONE,r.ONE);break;case nf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case rf:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case _s:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case la:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case nf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case rf:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}M=null,S=null,P=null,w=null,b.set(0,0,0),D=0,m=U,y=Ae}return}pe=pe||ge,ve=ve||J,ke=ke||ne,(ge!==p||pe!==v)&&(r.blendEquationSeparate(be[ge],be[pe]),p=ge,v=pe),(J!==M||ne!==S||ve!==P||ke!==w)&&(r.blendFuncSeparate(Ee[J],Ee[ne],Ee[ve],Ee[ke]),M=J,S=ne,P=ve,w=ke),(lt.equals(b)===!1||Pt!==D)&&(r.blendColor(lt.r,lt.g,lt.b,Pt),b.copy(lt),D=Pt),m=U,y=!1}function $e(U,ge){U.side===Ci?ae(r.CULL_FACE):Z(r.CULL_FACE);let J=U.side===Sn;ge&&(J=!J),Ue(J),U.blending===_s&&U.transparent===!1?I(er):I(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const ne=U.stencilWrite;o.setTest(ne),ne&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ye(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Z(r.SAMPLE_ALPHA_TO_COVERAGE):ae(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(U){x!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),x=U)}function k(U){U!==Xp?(Z(r.CULL_FACE),U!==L&&(U===tf?r.cullFace(r.BACK):U===Yp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ae(r.CULL_FACE),L=U}function Te(U){U!==O&&(K&&r.lineWidth(U),O=U)}function Ye(U,ge,J){U?(Z(r.POLYGON_OFFSET_FILL),(V!==ge||q!==J)&&(r.polygonOffset(ge,J),V=ge,q=J)):ae(r.POLYGON_OFFSET_FILL)}function we(U){U?Z(r.SCISSOR_TEST):ae(r.SCISSOR_TEST)}function C(U){U===void 0&&(U=r.TEXTURE0+j-1),se!==U&&(r.activeTexture(U),se=U)}function T(U,ge,J){J===void 0&&(se===null?J=r.TEXTURE0+j-1:J=se);let ne=E[J];ne===void 0&&(ne={type:void 0,texture:void 0},E[J]=ne),(ne.type!==U||ne.texture!==ge)&&(se!==J&&(r.activeTexture(J),se=J),r.bindTexture(U,ge||re[U]),ne.type=U,ne.texture=ge)}function G(){const U=E[se];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ie(){try{r.compressedTexImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{r.compressedTexImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{r.texSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{r.texSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ge(){try{r.texStorage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{r.texStorage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{r.texImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Oe(){try{r.texImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Be(U){le.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),le.copy(U))}function Ce(U){N.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),N.copy(U))}function Ke(U,ge){let J=c.get(ge);J===void 0&&(J=new WeakMap,c.set(ge,J));let ne=J.get(U);ne===void 0&&(ne=r.getUniformBlockIndex(ge,U.name),J.set(U,ne))}function ze(U,ge){const ne=c.get(ge).get(U);l.get(ge)!==ne&&(r.uniformBlockBinding(ge,ne,U.__bindingPointIndex),l.set(ge,ne))}function st(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},se=null,E={},d={},h=new WeakMap,f=[],g=null,_=!1,m=null,p=null,M=null,S=null,v=null,P=null,w=null,b=new at(0,0,0),D=0,y=!1,x=null,L=null,O=null,V=null,q=null,le.set(0,0,r.canvas.width,r.canvas.height),N.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Z,disable:ae,bindFramebuffer:ue,drawBuffers:Me,useProgram:Pe,setBlending:I,setMaterial:$e,setFlipSided:Ue,setCullFace:k,setLineWidth:Te,setPolygonOffset:Ye,setScissorTest:we,activeTexture:C,bindTexture:T,unbindTexture:G,compressedTexImage2D:ie,compressedTexImage3D:te,texImage2D:he,texImage3D:Oe,updateUBOMapping:Ke,uniformBlockBinding:ze,texStorage2D:Ge,texStorage3D:oe,texSubImage2D:ee,texSubImage3D:me,compressedTexSubImage2D:de,compressedTexSubImage3D:_e,scissor:Be,viewport:Ce,reset:st}}function Qf(r,e,t,n){const i=Nx(n);switch(t){case Zh:return r*e;case Jh:return r*e;case Qh:return r*e*2;case ed:return r*e/i.components*i.byteLength;case vu:return r*e/i.components*i.byteLength;case td:return r*e*2/i.components*i.byteLength;case xu:return r*e*2/i.components*i.byteLength;case jh:return r*e*3/i.components*i.byteLength;case si:return r*e*4/i.components*i.byteLength;case Mu:return r*e*4/i.components*i.byteLength;case bo:case Ao:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case wo:case Co:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case mc:case gc:return Math.max(r,16)*Math.max(e,8)/4;case pc:case _c:return Math.max(r,8)*Math.max(e,8)/2;case vc:case xc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Mc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Sc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case yc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Ec:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Tc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case bc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Ac:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case wc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Cc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Rc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Pc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Dc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Lc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Ic:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Uc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Ro:case Nc:case Fc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case nd:case Oc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Bc:case zc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Nx(r){switch(r){case Ni:case qh:return{byteLength:1,components:1};case Sa:case $h:case La:return{byteLength:2,components:1};case _u:case gu:return{byteLength:2,components:4};case Br:case mu:case Pi:return{byteLength:4,components:1};case Kh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Fx(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new mt,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,T){return f?new OffscreenCanvas(C,T):Vo("canvas")}function _(C,T,G){let ie=1;const te=we(C);if((te.width>G||te.height>G)&&(ie=G/Math.max(te.width,te.height)),ie<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ee=Math.floor(ie*te.width),me=Math.floor(ie*te.height);d===void 0&&(d=g(ee,me));const de=T?g(ee,me):d;return de.width=ee,de.height=me,de.getContext("2d").drawImage(C,0,0,ee,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+ee+"x"+me+")."),de}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){r.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(C,T,G,ie,te=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ee=T;if(T===r.RED&&(G===r.FLOAT&&(ee=r.R32F),G===r.HALF_FLOAT&&(ee=r.R16F),G===r.UNSIGNED_BYTE&&(ee=r.R8)),T===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(ee=r.R8UI),G===r.UNSIGNED_SHORT&&(ee=r.R16UI),G===r.UNSIGNED_INT&&(ee=r.R32UI),G===r.BYTE&&(ee=r.R8I),G===r.SHORT&&(ee=r.R16I),G===r.INT&&(ee=r.R32I)),T===r.RG&&(G===r.FLOAT&&(ee=r.RG32F),G===r.HALF_FLOAT&&(ee=r.RG16F),G===r.UNSIGNED_BYTE&&(ee=r.RG8)),T===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(ee=r.RG8UI),G===r.UNSIGNED_SHORT&&(ee=r.RG16UI),G===r.UNSIGNED_INT&&(ee=r.RG32UI),G===r.BYTE&&(ee=r.RG8I),G===r.SHORT&&(ee=r.RG16I),G===r.INT&&(ee=r.RG32I)),T===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(ee=r.RGB8UI),G===r.UNSIGNED_SHORT&&(ee=r.RGB16UI),G===r.UNSIGNED_INT&&(ee=r.RGB32UI),G===r.BYTE&&(ee=r.RGB8I),G===r.SHORT&&(ee=r.RGB16I),G===r.INT&&(ee=r.RGB32I)),T===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(ee=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(ee=r.RGBA16UI),G===r.UNSIGNED_INT&&(ee=r.RGBA32UI),G===r.BYTE&&(ee=r.RGBA8I),G===r.SHORT&&(ee=r.RGBA16I),G===r.INT&&(ee=r.RGBA32I)),T===r.RGB&&G===r.UNSIGNED_INT_5_9_9_9_REV&&(ee=r.RGB9_E5),T===r.RGBA){const me=te?il:ot.getTransfer(ie);G===r.FLOAT&&(ee=r.RGBA32F),G===r.HALF_FLOAT&&(ee=r.RGBA16F),G===r.UNSIGNED_BYTE&&(ee=me===gt?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(ee=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(ee=r.RGB5_A1)}return(ee===r.R16F||ee===r.R32F||ee===r.RG16F||ee===r.RG32F||ee===r.RGBA16F||ee===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function v(C,T){let G;return C?T===null||T===Br||T===Rs?G=r.DEPTH24_STENCIL8:T===Pi?G=r.DEPTH32F_STENCIL8:T===Sa&&(G=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Br||T===Rs?G=r.DEPTH_COMPONENT24:T===Pi?G=r.DEPTH_COMPONENT32F:T===Sa&&(G=r.DEPTH_COMPONENT16),G}function P(C,T){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==oi&&C.minFilter!==pi?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function w(C){const T=C.target;T.removeEventListener("dispose",w),D(T),T.isVideoTexture&&u.delete(T)}function b(C){const T=C.target;T.removeEventListener("dispose",b),x(T)}function D(C){const T=n.get(C);if(T.__webglInit===void 0)return;const G=C.source,ie=h.get(G);if(ie){const te=ie[T.__cacheKey];te.usedTimes--,te.usedTimes===0&&y(C),Object.keys(ie).length===0&&h.delete(G)}n.remove(C)}function y(C){const T=n.get(C);r.deleteTexture(T.__webglTexture);const G=C.source,ie=h.get(G);delete ie[T.__cacheKey],a.memory.textures--}function x(C){const T=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(T.__webglFramebuffer[ie]))for(let te=0;te<T.__webglFramebuffer[ie].length;te++)r.deleteFramebuffer(T.__webglFramebuffer[ie][te]);else r.deleteFramebuffer(T.__webglFramebuffer[ie]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[ie])}else{if(Array.isArray(T.__webglFramebuffer))for(let ie=0;ie<T.__webglFramebuffer.length;ie++)r.deleteFramebuffer(T.__webglFramebuffer[ie]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ie=0;ie<T.__webglColorRenderbuffer.length;ie++)T.__webglColorRenderbuffer[ie]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[ie]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const G=C.textures;for(let ie=0,te=G.length;ie<te;ie++){const ee=n.get(G[ie]);ee.__webglTexture&&(r.deleteTexture(ee.__webglTexture),a.memory.textures--),n.remove(G[ie])}n.remove(C)}let L=0;function O(){L=0}function V(){const C=L;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),L+=1,C}function q(C){const T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function j(C,T){const G=n.get(C);if(C.isVideoTexture&&Te(C),C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){const ie=C.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{N(G,C,T);return}}t.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+T)}function K(C,T){const G=n.get(C);if(C.version>0&&G.__version!==C.version){N(G,C,T);return}t.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+T)}function $(C,T){const G=n.get(C);if(C.version>0&&G.__version!==C.version){N(G,C,T);return}t.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+T)}function B(C,T){const G=n.get(C);if(C.version>0&&G.__version!==C.version){H(G,C,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+T)}const se={[hc]:r.REPEAT,[wr]:r.CLAMP_TO_EDGE,[dc]:r.MIRRORED_REPEAT},E={[oi]:r.NEAREST,[Sm]:r.NEAREST_MIPMAP_NEAREST,[za]:r.NEAREST_MIPMAP_LINEAR,[pi]:r.LINEAR,[ul]:r.LINEAR_MIPMAP_NEAREST,[Cr]:r.LINEAR_MIPMAP_LINEAR},R={[Am]:r.NEVER,[Lm]:r.ALWAYS,[wm]:r.LESS,[id]:r.LEQUAL,[Cm]:r.EQUAL,[Dm]:r.GEQUAL,[Rm]:r.GREATER,[Pm]:r.NOTEQUAL};function Q(C,T){if(T.type===Pi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===pi||T.magFilter===ul||T.magFilter===za||T.magFilter===Cr||T.minFilter===pi||T.minFilter===ul||T.minFilter===za||T.minFilter===Cr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,se[T.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,se[T.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,se[T.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,E[T.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,E[T.minFilter]),T.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,R[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===oi||T.minFilter!==za&&T.minFilter!==Cr||T.type===Pi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function le(C,T){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",w));const ie=T.source;let te=h.get(ie);te===void 0&&(te={},h.set(ie,te));const ee=q(T);if(ee!==C.__cacheKey){te[ee]===void 0&&(te[ee]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,G=!0),te[ee].usedTimes++;const me=te[C.__cacheKey];me!==void 0&&(te[C.__cacheKey].usedTimes--,me.usedTimes===0&&y(T)),C.__cacheKey=ee,C.__webglTexture=te[ee].texture}return G}function N(C,T,G){let ie=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ie=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ie=r.TEXTURE_3D);const te=le(C,T),ee=T.source;t.bindTexture(ie,C.__webglTexture,r.TEXTURE0+G);const me=n.get(ee);if(ee.version!==me.__version||te===!0){t.activeTexture(r.TEXTURE0+G);const de=ot.getPrimaries(ot.workingColorSpace),_e=T.colorSpace===$i?null:ot.getPrimaries(T.colorSpace),Ge=T.colorSpace===$i||de===_e?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let oe=_(T.image,!1,i.maxTextureSize);oe=Ye(T,oe);const he=s.convert(T.format,T.colorSpace),Oe=s.convert(T.type);let Be=S(T.internalFormat,he,Oe,T.colorSpace,T.isVideoTexture);Q(ie,T);let Ce;const Ke=T.mipmaps,ze=T.isVideoTexture!==!0,st=me.__version===void 0||te===!0,U=ee.dataReady,ge=P(T,oe);if(T.isDepthTexture)Be=v(T.format===Ps,T.type),st&&(ze?t.texStorage2D(r.TEXTURE_2D,1,Be,oe.width,oe.height):t.texImage2D(r.TEXTURE_2D,0,Be,oe.width,oe.height,0,he,Oe,null));else if(T.isDataTexture)if(Ke.length>0){ze&&st&&t.texStorage2D(r.TEXTURE_2D,ge,Be,Ke[0].width,Ke[0].height);for(let J=0,ne=Ke.length;J<ne;J++)Ce=Ke[J],ze?U&&t.texSubImage2D(r.TEXTURE_2D,J,0,0,Ce.width,Ce.height,he,Oe,Ce.data):t.texImage2D(r.TEXTURE_2D,J,Be,Ce.width,Ce.height,0,he,Oe,Ce.data);T.generateMipmaps=!1}else ze?(st&&t.texStorage2D(r.TEXTURE_2D,ge,Be,oe.width,oe.height),U&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,oe.width,oe.height,he,Oe,oe.data)):t.texImage2D(r.TEXTURE_2D,0,Be,oe.width,oe.height,0,he,Oe,oe.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ze&&st&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ge,Be,Ke[0].width,Ke[0].height,oe.depth);for(let J=0,ne=Ke.length;J<ne;J++)if(Ce=Ke[J],T.format!==si)if(he!==null)if(ze){if(U)if(T.layerUpdates.size>0){const pe=Qf(Ce.width,Ce.height,T.format,T.type);for(const ve of T.layerUpdates){const ke=Ce.data.subarray(ve*pe/Ce.data.BYTES_PER_ELEMENT,(ve+1)*pe/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,ve,Ce.width,Ce.height,1,he,ke)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,0,Ce.width,Ce.height,oe.depth,he,Ce.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,J,Be,Ce.width,Ce.height,oe.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?U&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,0,Ce.width,Ce.height,oe.depth,he,Oe,Ce.data):t.texImage3D(r.TEXTURE_2D_ARRAY,J,Be,Ce.width,Ce.height,oe.depth,0,he,Oe,Ce.data)}else{ze&&st&&t.texStorage2D(r.TEXTURE_2D,ge,Be,Ke[0].width,Ke[0].height);for(let J=0,ne=Ke.length;J<ne;J++)Ce=Ke[J],T.format!==si?he!==null?ze?U&&t.compressedTexSubImage2D(r.TEXTURE_2D,J,0,0,Ce.width,Ce.height,he,Ce.data):t.compressedTexImage2D(r.TEXTURE_2D,J,Be,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?U&&t.texSubImage2D(r.TEXTURE_2D,J,0,0,Ce.width,Ce.height,he,Oe,Ce.data):t.texImage2D(r.TEXTURE_2D,J,Be,Ce.width,Ce.height,0,he,Oe,Ce.data)}else if(T.isDataArrayTexture)if(ze){if(st&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ge,Be,oe.width,oe.height,oe.depth),U)if(T.layerUpdates.size>0){const J=Qf(oe.width,oe.height,T.format,T.type);for(const ne of T.layerUpdates){const pe=oe.data.subarray(ne*J/oe.data.BYTES_PER_ELEMENT,(ne+1)*J/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ne,oe.width,oe.height,1,he,Oe,pe)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,he,Oe,oe.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Be,oe.width,oe.height,oe.depth,0,he,Oe,oe.data);else if(T.isData3DTexture)ze?(st&&t.texStorage3D(r.TEXTURE_3D,ge,Be,oe.width,oe.height,oe.depth),U&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,he,Oe,oe.data)):t.texImage3D(r.TEXTURE_3D,0,Be,oe.width,oe.height,oe.depth,0,he,Oe,oe.data);else if(T.isFramebufferTexture){if(st)if(ze)t.texStorage2D(r.TEXTURE_2D,ge,Be,oe.width,oe.height);else{let J=oe.width,ne=oe.height;for(let pe=0;pe<ge;pe++)t.texImage2D(r.TEXTURE_2D,pe,Be,J,ne,0,he,Oe,null),J>>=1,ne>>=1}}else if(Ke.length>0){if(ze&&st){const J=we(Ke[0]);t.texStorage2D(r.TEXTURE_2D,ge,Be,J.width,J.height)}for(let J=0,ne=Ke.length;J<ne;J++)Ce=Ke[J],ze?U&&t.texSubImage2D(r.TEXTURE_2D,J,0,0,he,Oe,Ce):t.texImage2D(r.TEXTURE_2D,J,Be,he,Oe,Ce);T.generateMipmaps=!1}else if(ze){if(st){const J=we(oe);t.texStorage2D(r.TEXTURE_2D,ge,Be,J.width,J.height)}U&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,he,Oe,oe)}else t.texImage2D(r.TEXTURE_2D,0,Be,he,Oe,oe);m(T)&&p(ie),me.__version=ee.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function H(C,T,G){if(T.image.length!==6)return;const ie=le(C,T),te=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+G);const ee=n.get(te);if(te.version!==ee.__version||ie===!0){t.activeTexture(r.TEXTURE0+G);const me=ot.getPrimaries(ot.workingColorSpace),de=T.colorSpace===$i?null:ot.getPrimaries(T.colorSpace),_e=T.colorSpace===$i||me===de?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ge=T.isCompressedTexture||T.image[0].isCompressedTexture,oe=T.image[0]&&T.image[0].isDataTexture,he=[];for(let ne=0;ne<6;ne++)!Ge&&!oe?he[ne]=_(T.image[ne],!0,i.maxCubemapSize):he[ne]=oe?T.image[ne].image:T.image[ne],he[ne]=Ye(T,he[ne]);const Oe=he[0],Be=s.convert(T.format,T.colorSpace),Ce=s.convert(T.type),Ke=S(T.internalFormat,Be,Ce,T.colorSpace),ze=T.isVideoTexture!==!0,st=ee.__version===void 0||ie===!0,U=te.dataReady;let ge=P(T,Oe);Q(r.TEXTURE_CUBE_MAP,T);let J;if(Ge){ze&&st&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ge,Ke,Oe.width,Oe.height);for(let ne=0;ne<6;ne++){J=he[ne].mipmaps;for(let pe=0;pe<J.length;pe++){const ve=J[pe];T.format!==si?Be!==null?ze?U&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,pe,0,0,ve.width,ve.height,Be,ve.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,pe,Ke,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,pe,0,0,ve.width,ve.height,Be,Ce,ve.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,pe,Ke,ve.width,ve.height,0,Be,Ce,ve.data)}}}else{if(J=T.mipmaps,ze&&st){J.length>0&&ge++;const ne=we(he[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ge,Ke,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(oe){ze?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,he[ne].width,he[ne].height,Be,Ce,he[ne].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ke,he[ne].width,he[ne].height,0,Be,Ce,he[ne].data);for(let pe=0;pe<J.length;pe++){const ke=J[pe].image[ne].image;ze?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,pe+1,0,0,ke.width,ke.height,Be,Ce,ke.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,pe+1,Ke,ke.width,ke.height,0,Be,Ce,ke.data)}}else{ze?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Be,Ce,he[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ke,Be,Ce,he[ne]);for(let pe=0;pe<J.length;pe++){const ve=J[pe];ze?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,pe+1,0,0,Be,Ce,ve.image[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,pe+1,Ke,Be,Ce,ve.image[ne])}}}m(T)&&p(r.TEXTURE_CUBE_MAP),ee.__version=te.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function re(C,T,G,ie,te,ee){const me=s.convert(G.format,G.colorSpace),de=s.convert(G.type),_e=S(G.internalFormat,me,de,G.colorSpace),Ge=n.get(T),oe=n.get(G);if(oe.__renderTarget=T,!Ge.__hasExternalTextures){const he=Math.max(1,T.width>>ee),Oe=Math.max(1,T.height>>ee);te===r.TEXTURE_3D||te===r.TEXTURE_2D_ARRAY?t.texImage3D(te,ee,_e,he,Oe,T.depth,0,me,de,null):t.texImage2D(te,ee,_e,he,Oe,0,me,de,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),k(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ie,te,oe.__webglTexture,0,Ue(T)):(te===r.TEXTURE_2D||te>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ie,te,oe.__webglTexture,ee),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Z(C,T,G){if(r.bindRenderbuffer(r.RENDERBUFFER,C),T.depthBuffer){const ie=T.depthTexture,te=ie&&ie.isDepthTexture?ie.type:null,ee=v(T.stencilBuffer,te),me=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=Ue(T);k(T)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,de,ee,T.width,T.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,de,ee,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ee,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,me,r.RENDERBUFFER,C)}else{const ie=T.textures;for(let te=0;te<ie.length;te++){const ee=ie[te],me=s.convert(ee.format,ee.colorSpace),de=s.convert(ee.type),_e=S(ee.internalFormat,me,de,ee.colorSpace),Ge=Ue(T);G&&k(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ge,_e,T.width,T.height):k(T)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ge,_e,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,_e,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ae(C,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ie=n.get(T.depthTexture);ie.__renderTarget=T,(!ie.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),j(T.depthTexture,0);const te=ie.__webglTexture,ee=Ue(T);if(T.depthTexture.format===gs)k(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,te,0,ee):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,te,0);else if(T.depthTexture.format===Ps)k(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,te,0,ee):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function ue(C){const T=n.get(C),G=C.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==C.depthTexture){const ie=C.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ie){const te=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ie.removeEventListener("dispose",te)};ie.addEventListener("dispose",te),T.__depthDisposeCallback=te}T.__boundDepthTexture=ie}if(C.depthTexture&&!T.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ae(T.__webglFramebuffer,C)}else if(G){T.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[ie]),T.__webglDepthbuffer[ie]===void 0)T.__webglDepthbuffer[ie]=r.createRenderbuffer(),Z(T.__webglDepthbuffer[ie],C,!1);else{const te=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ee=T.__webglDepthbuffer[ie];r.bindRenderbuffer(r.RENDERBUFFER,ee),r.framebufferRenderbuffer(r.FRAMEBUFFER,te,r.RENDERBUFFER,ee)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Z(T.__webglDepthbuffer,C,!1);else{const ie=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,te=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,te),r.framebufferRenderbuffer(r.FRAMEBUFFER,ie,r.RENDERBUFFER,te)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Me(C,T,G){const ie=n.get(C);T!==void 0&&re(ie.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&ue(C)}function Pe(C){const T=C.texture,G=n.get(C),ie=n.get(T);C.addEventListener("dispose",b);const te=C.textures,ee=C.isWebGLCubeRenderTarget===!0,me=te.length>1;if(me||(ie.__webglTexture===void 0&&(ie.__webglTexture=r.createTexture()),ie.__version=T.version,a.memory.textures++),ee){G.__webglFramebuffer=[];for(let de=0;de<6;de++)if(T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer[de]=[];for(let _e=0;_e<T.mipmaps.length;_e++)G.__webglFramebuffer[de][_e]=r.createFramebuffer()}else G.__webglFramebuffer[de]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer=[];for(let de=0;de<T.mipmaps.length;de++)G.__webglFramebuffer[de]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(me)for(let de=0,_e=te.length;de<_e;de++){const Ge=n.get(te[de]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&k(C)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let de=0;de<te.length;de++){const _e=te[de];G.__webglColorRenderbuffer[de]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[de]);const Ge=s.convert(_e.format,_e.colorSpace),oe=s.convert(_e.type),he=S(_e.internalFormat,Ge,oe,_e.colorSpace,C.isXRRenderTarget===!0),Oe=Ue(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Oe,he,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,G.__webglColorRenderbuffer[de])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),Z(G.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ee){t.bindTexture(r.TEXTURE_CUBE_MAP,ie.__webglTexture),Q(r.TEXTURE_CUBE_MAP,T);for(let de=0;de<6;de++)if(T.mipmaps&&T.mipmaps.length>0)for(let _e=0;_e<T.mipmaps.length;_e++)re(G.__webglFramebuffer[de][_e],C,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+de,_e);else re(G.__webglFramebuffer[de],C,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(T)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let de=0,_e=te.length;de<_e;de++){const Ge=te[de],oe=n.get(Ge);t.bindTexture(r.TEXTURE_2D,oe.__webglTexture),Q(r.TEXTURE_2D,Ge),re(G.__webglFramebuffer,C,Ge,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,0),m(Ge)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let de=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(de=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(de,ie.__webglTexture),Q(de,T),T.mipmaps&&T.mipmaps.length>0)for(let _e=0;_e<T.mipmaps.length;_e++)re(G.__webglFramebuffer[_e],C,T,r.COLOR_ATTACHMENT0,de,_e);else re(G.__webglFramebuffer,C,T,r.COLOR_ATTACHMENT0,de,0);m(T)&&p(de),t.unbindTexture()}C.depthBuffer&&ue(C)}function be(C){const T=C.textures;for(let G=0,ie=T.length;G<ie;G++){const te=T[G];if(m(te)){const ee=M(C),me=n.get(te).__webglTexture;t.bindTexture(ee,me),p(ee),t.unbindTexture()}}}const Ee=[],I=[];function $e(C){if(C.samples>0){if(k(C)===!1){const T=C.textures,G=C.width,ie=C.height;let te=r.COLOR_BUFFER_BIT;const ee=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,me=n.get(C),de=T.length>1;if(de)for(let _e=0;_e<T.length;_e++)t.bindFramebuffer(r.FRAMEBUFFER,me.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,me.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let _e=0;_e<T.length;_e++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(te|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(te|=r.STENCIL_BUFFER_BIT)),de){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,me.__webglColorRenderbuffer[_e]);const Ge=n.get(T[_e]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ge,0)}r.blitFramebuffer(0,0,G,ie,0,0,G,ie,te,r.NEAREST),l===!0&&(Ee.length=0,I.length=0,Ee.push(r.COLOR_ATTACHMENT0+_e),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ee.push(ee),I.push(ee),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,I)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ee))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),de)for(let _e=0;_e<T.length;_e++){t.bindFramebuffer(r.FRAMEBUFFER,me.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.RENDERBUFFER,me.__webglColorRenderbuffer[_e]);const Ge=n.get(T[_e]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,me.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.TEXTURE_2D,Ge,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const T=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function Ue(C){return Math.min(i.maxSamples,C.samples)}function k(C){const T=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Te(C){const T=a.render.frame;u.get(C)!==T&&(u.set(C,T),C.update())}function Ye(C,T){const G=C.colorSpace,ie=C.format,te=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==Bs&&G!==$i&&(ot.getTransfer(G)===gt?(ie!==si||te!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),T}function we(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=O,this.setTexture2D=j,this.setTexture2DArray=K,this.setTexture3D=$,this.setTextureCube=B,this.rebindTextures=Me,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=re,this.useMultisampledRTT=k}function Ox(r,e){function t(n,i=$i){let s;const a=ot.getTransfer(i);if(n===Ni)return r.UNSIGNED_BYTE;if(n===_u)return r.UNSIGNED_SHORT_4_4_4_4;if(n===gu)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Kh)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===qh)return r.BYTE;if(n===$h)return r.SHORT;if(n===Sa)return r.UNSIGNED_SHORT;if(n===mu)return r.INT;if(n===Br)return r.UNSIGNED_INT;if(n===Pi)return r.FLOAT;if(n===La)return r.HALF_FLOAT;if(n===Zh)return r.ALPHA;if(n===jh)return r.RGB;if(n===si)return r.RGBA;if(n===Jh)return r.LUMINANCE;if(n===Qh)return r.LUMINANCE_ALPHA;if(n===gs)return r.DEPTH_COMPONENT;if(n===Ps)return r.DEPTH_STENCIL;if(n===ed)return r.RED;if(n===vu)return r.RED_INTEGER;if(n===td)return r.RG;if(n===xu)return r.RG_INTEGER;if(n===Mu)return r.RGBA_INTEGER;if(n===bo||n===Ao||n===wo||n===Co)if(a===gt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===bo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ao)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===bo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ao)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Co)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pc||n===mc||n===_c||n===gc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===pc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===mc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_c)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===gc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vc||n===xc||n===Mc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===vc||n===xc)return a===gt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Mc)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Sc||n===yc||n===Ec||n===Tc||n===bc||n===Ac||n===wc||n===Cc||n===Rc||n===Pc||n===Dc||n===Lc||n===Ic||n===Uc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Sc)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===yc)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ec)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Tc)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bc)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ac)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wc)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Cc)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Rc)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pc)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Dc)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Lc)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ic)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Uc)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ro||n===Nc||n===Fc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ro)return a===gt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Nc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nd||n===Oc||n===Bc||n===zc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ro)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Oc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Bc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Rs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class Bx extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ao extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zx={type:"move"};class zl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ao,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ao,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ao,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zx)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ao;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const kx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vx=`
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

}`;class Hx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new pn,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ar({vertexShader:kx,fragmentShader:Vx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ai(new rl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Gx extends zs{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null;const _=new Hx,m=t.getContextAttributes();let p=null,M=null;const S=[],v=[],P=new mt;let w=null;const b=new Nn;b.viewport=new Nt;const D=new Nn;D.viewport=new Nt;const y=[b,D],x=new Bx;let L=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let H=S[N];return H===void 0&&(H=new zl,S[N]=H),H.getTargetRaySpace()},this.getControllerGrip=function(N){let H=S[N];return H===void 0&&(H=new zl,S[N]=H),H.getGripSpace()},this.getHand=function(N){let H=S[N];return H===void 0&&(H=new zl,S[N]=H),H.getHandSpace()};function V(N){const H=v.indexOf(N.inputSource);if(H===-1)return;const re=S[H];re!==void 0&&(re.update(N.inputSource,N.frame,c||a),re.dispatchEvent({type:N.type,data:N.inputSource}))}function q(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",j);for(let N=0;N<S.length;N++){const H=v[N];H!==null&&(v[N]=null,S[N].disconnect(H))}L=null,O=null,_.reset(),e.setRenderTarget(p),f=null,h=null,d=null,i=null,M=null,le.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){o=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(N){if(i=N,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",q),i.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(P),i.renderState.layers===void 0){const H={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,H),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new zr(f.framebufferWidth,f.framebufferHeight,{format:si,type:Ni,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let H=null,re=null,Z=null;m.depth&&(Z=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,H=m.stencil?Ps:gs,re=m.stencil?Rs:Br);const ae={colorFormat:t.RGBA8,depthFormat:Z,scaleFactor:s};d=new XRWebGLBinding(i,t),h=d.createProjectionLayer(ae),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new zr(h.textureWidth,h.textureHeight,{format:si,type:Ni,depthTexture:new _d(h.textureWidth,h.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),le.setContext(i),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j(N){for(let H=0;H<N.removed.length;H++){const re=N.removed[H],Z=v.indexOf(re);Z>=0&&(v[Z]=null,S[Z].disconnect(re))}for(let H=0;H<N.added.length;H++){const re=N.added[H];let Z=v.indexOf(re);if(Z===-1){for(let ue=0;ue<S.length;ue++)if(ue>=v.length){v.push(re),Z=ue;break}else if(v[ue]===null){v[ue]=re,Z=ue;break}if(Z===-1)break}const ae=S[Z];ae&&ae.connect(re)}}const K=new Y,$=new Y;function B(N,H,re){K.setFromMatrixPosition(H.matrixWorld),$.setFromMatrixPosition(re.matrixWorld);const Z=K.distanceTo($),ae=H.projectionMatrix.elements,ue=re.projectionMatrix.elements,Me=ae[14]/(ae[10]-1),Pe=ae[14]/(ae[10]+1),be=(ae[9]+1)/ae[5],Ee=(ae[9]-1)/ae[5],I=(ae[8]-1)/ae[0],$e=(ue[8]+1)/ue[0],Ue=Me*I,k=Me*$e,Te=Z/(-I+$e),Ye=Te*-I;if(H.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Ye),N.translateZ(Te),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert(),ae[10]===-1)N.projectionMatrix.copy(H.projectionMatrix),N.projectionMatrixInverse.copy(H.projectionMatrixInverse);else{const we=Me+Te,C=Pe+Te,T=Ue-Ye,G=k+(Z-Ye),ie=be*Pe/C*we,te=Ee*Pe/C*we;N.projectionMatrix.makePerspective(T,G,ie,te,we,C),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}}function se(N,H){H===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(H.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(i===null)return;let H=N.near,re=N.far;_.texture!==null&&(_.depthNear>0&&(H=_.depthNear),_.depthFar>0&&(re=_.depthFar)),x.near=D.near=b.near=H,x.far=D.far=b.far=re,(L!==x.near||O!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),L=x.near,O=x.far),b.layers.mask=N.layers.mask|2,D.layers.mask=N.layers.mask|4,x.layers.mask=b.layers.mask|D.layers.mask;const Z=N.parent,ae=x.cameras;se(x,Z);for(let ue=0;ue<ae.length;ue++)se(ae[ue],Z);ae.length===2?B(x,b,D):x.projectionMatrix.copy(b.projectionMatrix),E(N,x,Z)};function E(N,H,re){re===null?N.matrix.copy(H.matrixWorld):(N.matrix.copy(re.matrixWorld),N.matrix.invert(),N.matrix.multiply(H.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(H.projectionMatrix),N.projectionMatrixInverse.copy(H.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=kc*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(N){l=N,h!==null&&(h.fixedFoveation=N),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=N)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let R=null;function Q(N,H){if(u=H.getViewerPose(c||a),g=H,u!==null){const re=u.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Z=!1;re.length!==x.cameras.length&&(x.cameras.length=0,Z=!0);for(let ue=0;ue<re.length;ue++){const Me=re[ue];let Pe=null;if(f!==null)Pe=f.getViewport(Me);else{const Ee=d.getViewSubImage(h,Me);Pe=Ee.viewport,ue===0&&(e.setRenderTargetTextures(M,Ee.colorTexture,h.ignoreDepthValues?void 0:Ee.depthStencilTexture),e.setRenderTarget(M))}let be=y[ue];be===void 0&&(be=new Nn,be.layers.enable(ue),be.viewport=new Nt,y[ue]=be),be.matrix.fromArray(Me.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(Me.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),ue===0&&(x.matrix.copy(be.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),Z===!0&&x.cameras.push(be)}const ae=i.enabledFeatures;if(ae&&ae.includes("depth-sensing")){const ue=d.getDepthInformation(re[0]);ue&&ue.isValid&&ue.texture&&_.init(e,ue,i.renderState)}}for(let re=0;re<S.length;re++){const Z=v[re],ae=S[re];Z!==null&&ae!==void 0&&ae.update(Z,H,c||a)}R&&R(N,H),H.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:H}),g=null}const le=new md;le.setAnimationLoop(Q),this.setAnimationLoop=function(N){R=N},this.dispose=function(){}}}const gr=new Fi,Wx=new Lt;function Xx(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,fd(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,S,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),S=M.envMap,v=M.envMapRotation;S&&(m.envMap.value=S,gr.copy(v),gr.x*=-1,gr.y*=-1,gr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),m.envMapRotation.value.setFromMatrix4(Wx.makeRotationFromEuler(gr)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Sn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Yx(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,S){const v=S.program;n.uniformBlockBinding(M,v)}function c(M,S){let v=i[M.id];v===void 0&&(g(M),v=u(M),i[M.id]=v,M.addEventListener("dispose",m));const P=S.program;n.updateUBOMapping(M,P);const w=e.render.frame;s[M.id]!==w&&(h(M),s[M.id]=w)}function u(M){const S=d();M.__bindingPointIndex=S;const v=r.createBuffer(),P=M.__size,w=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,P,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,v),v}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const S=i[M.id],v=M.uniforms,P=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let w=0,b=v.length;w<b;w++){const D=Array.isArray(v[w])?v[w]:[v[w]];for(let y=0,x=D.length;y<x;y++){const L=D[y];if(f(L,w,y,P)===!0){const O=L.__offset,V=Array.isArray(L.value)?L.value:[L.value];let q=0;for(let j=0;j<V.length;j++){const K=V[j],$=_(K);typeof K=="number"||typeof K=="boolean"?(L.__data[0]=K,r.bufferSubData(r.UNIFORM_BUFFER,O+q,L.__data)):K.isMatrix3?(L.__data[0]=K.elements[0],L.__data[1]=K.elements[1],L.__data[2]=K.elements[2],L.__data[3]=0,L.__data[4]=K.elements[3],L.__data[5]=K.elements[4],L.__data[6]=K.elements[5],L.__data[7]=0,L.__data[8]=K.elements[6],L.__data[9]=K.elements[7],L.__data[10]=K.elements[8],L.__data[11]=0):(K.toArray(L.__data,q),q+=$.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,O,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(M,S,v,P){const w=M.value,b=S+"_"+v;if(P[b]===void 0)return typeof w=="number"||typeof w=="boolean"?P[b]=w:P[b]=w.clone(),!0;{const D=P[b];if(typeof w=="number"||typeof w=="boolean"){if(D!==w)return P[b]=w,!0}else if(D.equals(w)===!1)return D.copy(w),!0}return!1}function g(M){const S=M.uniforms;let v=0;const P=16;for(let b=0,D=S.length;b<D;b++){const y=Array.isArray(S[b])?S[b]:[S[b]];for(let x=0,L=y.length;x<L;x++){const O=y[x],V=Array.isArray(O.value)?O.value:[O.value];for(let q=0,j=V.length;q<j;q++){const K=V[q],$=_(K),B=v%P,se=B%$.boundary,E=B+se;v+=se,E!==0&&P-E<$.storage&&(v+=P-E),O.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=$.storage}}}const w=v%P;return w>0&&(v+=P-w),M.__size=v,M.__cache={},this}function _(M){const S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),S}function m(M){const S=M.target;S.removeEventListener("dispose",m);const v=a.indexOf(S.__bindingPointIndex);a.splice(v,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function p(){for(const M in i)r.deleteBuffer(i[M]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}class Sd{constructor(e={}){const{canvas:t=Um(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const M=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qn,this.toneMapping=tr,this.toneMappingExposure=1;const v=this;let P=!1,w=0,b=0,D=null,y=-1,x=null;const L=new Nt,O=new Nt;let V=null;const q=new at(0);let j=0,K=t.width,$=t.height,B=1,se=null,E=null;const R=new Nt(0,0,K,$),Q=new Nt(0,0,K,$);let le=!1;const N=new pd;let H=!1,re=!1;const Z=new Lt,ae=new Lt,ue=new Y,Me=new Nt,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let be=!1;function Ee(){return D===null?B:1}let I=n;function $e(A,F){return t.getContext(A,F)}try{const A={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${pu}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",ve,!1),I===null){const F="webgl2";if(I=$e(F,A),I===null)throw $e(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ue,k,Te,Ye,we,C,T,G,ie,te,ee,me,de,_e,Ge,oe,he,Oe,Be,Ce,Ke,ze,st,U;function ge(){Ue=new J0(I),Ue.init(),ze=new Ox(I,Ue),k=new X0(I,Ue,e,ze),Te=new Ux(I,Ue),k.reverseDepthBuffer&&h&&Te.buffers.depth.setReversed(!0),Ye=new tv(I),we=new xx,C=new Fx(I,Ue,Te,we,k,ze,Ye),T=new q0(v),G=new j0(v),ie=new o_(I),st=new G0(I,ie),te=new Q0(I,ie,Ye,st),ee=new iv(I,te,ie,Ye),Be=new nv(I,k,C),oe=new Y0(we),me=new vx(v,T,G,Ue,k,st,oe),de=new Xx(v,we),_e=new Sx,Ge=new wx(Ue),Oe=new H0(v,T,G,Te,ee,f,l),he=new Lx(v,ee,k),U=new Yx(I,Ye,k,Te),Ce=new W0(I,Ue,Ye),Ke=new ev(I,Ue,Ye),Ye.programs=me.programs,v.capabilities=k,v.extensions=Ue,v.properties=we,v.renderLists=_e,v.shadowMap=he,v.state=Te,v.info=Ye}ge();const J=new Gx(v,I);this.xr=J,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=Ue.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ue.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(A){A!==void 0&&(B=A,this.setSize(K,$,!1))},this.getSize=function(A){return A.set(K,$)},this.setSize=function(A,F,W=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=A,$=F,t.width=Math.floor(A*B),t.height=Math.floor(F*B),W===!0&&(t.style.width=A+"px",t.style.height=F+"px"),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(K*B,$*B).floor()},this.setDrawingBufferSize=function(A,F,W){K=A,$=F,B=W,t.width=Math.floor(A*W),t.height=Math.floor(F*W),this.setViewport(0,0,A,F)},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy(R)},this.setViewport=function(A,F,W,X){A.isVector4?R.set(A.x,A.y,A.z,A.w):R.set(A,F,W,X),Te.viewport(L.copy(R).multiplyScalar(B).round())},this.getScissor=function(A){return A.copy(Q)},this.setScissor=function(A,F,W,X){A.isVector4?Q.set(A.x,A.y,A.z,A.w):Q.set(A,F,W,X),Te.scissor(O.copy(Q).multiplyScalar(B).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(A){Te.setScissorTest(le=A)},this.setOpaqueSort=function(A){se=A},this.setTransparentSort=function(A){E=A},this.getClearColor=function(A){return A.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(A=!0,F=!0,W=!0){let X=0;if(A){let z=!1;if(D!==null){const ce=D.texture.format;z=ce===Mu||ce===xu||ce===vu}if(z){const ce=D.texture.type,fe=ce===Ni||ce===Br||ce===Sa||ce===Rs||ce===_u||ce===gu,xe=Oe.getClearColor(),Re=Oe.getClearAlpha(),Ve=xe.r,Xe=xe.g,Le=xe.b;fe?(g[0]=Ve,g[1]=Xe,g[2]=Le,g[3]=Re,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=Ve,_[1]=Xe,_[2]=Le,_[3]=Re,I.clearBufferiv(I.COLOR,0,_))}else X|=I.COLOR_BUFFER_BIT}F&&(X|=I.DEPTH_BUFFER_BIT),W&&(X|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),_e.dispose(),Ge.dispose(),we.dispose(),T.dispose(),G.dispose(),ee.dispose(),st.dispose(),U.dispose(),me.dispose(),J.dispose(),J.removeEventListener("sessionstart",Se),J.removeEventListener("sessionend",We),Ne.stop()};function ne(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const A=Ye.autoReset,F=he.enabled,W=he.autoUpdate,X=he.needsUpdate,z=he.type;ge(),Ye.autoReset=A,he.enabled=F,he.autoUpdate=W,he.needsUpdate=X,he.type=z}function ve(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ke(A){const F=A.target;F.removeEventListener("dispose",ke),lt(F)}function lt(A){Pt(A),we.remove(A)}function Pt(A){const F=we.get(A).programs;F!==void 0&&(F.forEach(function(W){me.releaseProgram(W)}),A.isShaderMaterial&&me.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,W,X,z,ce){F===null&&(F=Pe);const fe=z.isMesh&&z.matrixWorld.determinant()<0,xe=Cn(A,F,W,X,z);Te.setMaterial(X,fe);let Re=W.index,Ve=1;if(X.wireframe===!0){if(Re=te.getWireframeAttribute(W),Re===void 0)return;Ve=2}const Xe=W.drawRange,Le=W.attributes.position;let qe=Xe.start*Ve,ct=(Xe.start+Xe.count)*Ve;ce!==null&&(qe=Math.max(qe,ce.start*Ve),ct=Math.min(ct,(ce.start+ce.count)*Ve)),Re!==null?(qe=Math.max(qe,0),ct=Math.min(ct,Re.count)):Le!=null&&(qe=Math.max(qe,0),ct=Math.min(ct,Le.count));const ft=ct-qe;if(ft<0||ft===1/0)return;st.setup(z,X,xe,W,Re);let At,ht=Ce;if(Re!==null&&(At=ie.get(Re),ht=Ke,ht.setIndex(At)),z.isMesh)X.wireframe===!0?(Te.setLineWidth(X.wireframeLinewidth*Ee()),ht.setMode(I.LINES)):ht.setMode(I.TRIANGLES);else if(z.isLine){let Fe=X.linewidth;Fe===void 0&&(Fe=1),Te.setLineWidth(Fe*Ee()),z.isLineSegments?ht.setMode(I.LINES):z.isLineLoop?ht.setMode(I.LINE_LOOP):ht.setMode(I.LINE_STRIP)}else z.isPoints?ht.setMode(I.POINTS):z.isSprite&&ht.setMode(I.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)ht.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))ht.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Fe=z._multiDrawStarts,xi=z._multiDrawCounts,dt=z._multiDrawCount,Qn=Re?ie.get(Re).bytesPerElement:1,Wr=we.get(X).currentProgram.getUniforms();for(let Rn=0;Rn<dt;Rn++)Wr.setValue(I,"_gl_DrawID",Rn),ht.render(Fe[Rn]/Qn,xi[Rn])}else if(z.isInstancedMesh)ht.renderInstances(qe,ft,z.count);else if(W.isInstancedBufferGeometry){const Fe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,xi=Math.min(W.instanceCount,Fe);ht.renderInstances(qe,ft,xi)}else ht.render(qe,ft)};function Ae(A,F,W){A.transparent===!0&&A.side===Ci&&A.forceSinglePass===!1?(A.side=Sn,A.needsUpdate=!0,vt(A,F,W),A.side=sr,A.needsUpdate=!0,vt(A,F,W),A.side=Ci):vt(A,F,W)}this.compile=function(A,F,W=null){W===null&&(W=A),p=Ge.get(W),p.init(F),S.push(p),W.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),A!==W&&A.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const X=new Set;return A.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ce=z.material;if(ce)if(Array.isArray(ce))for(let fe=0;fe<ce.length;fe++){const xe=ce[fe];Ae(xe,W,z),X.add(xe)}else Ae(ce,W,z),X.add(ce)}),S.pop(),p=null,X},this.compileAsync=function(A,F,W=null){const X=this.compile(A,F,W);return new Promise(z=>{function ce(){if(X.forEach(function(fe){we.get(fe).currentProgram.isReady()&&X.delete(fe)}),X.size===0){z(A);return}setTimeout(ce,10)}Ue.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Ie=null;function Ze(A){Ie&&Ie(A)}function Se(){Ne.stop()}function We(){Ne.start()}const Ne=new md;Ne.setAnimationLoop(Ze),typeof self<"u"&&Ne.setContext(self),this.setAnimationLoop=function(A){Ie=A,J.setAnimationLoop(A),A===null?Ne.stop():Ne.start()},J.addEventListener("sessionstart",Se),J.addEventListener("sessionend",We),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(F),F=J.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,F,D),p=Ge.get(A,S.length),p.init(F),S.push(p),ae.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),N.setFromProjectionMatrix(ae),re=this.localClippingEnabled,H=oe.init(this.clippingPlanes,re),m=_e.get(A,M.length),m.init(),M.push(m),J.enabled===!0&&J.isPresenting===!0){const ce=v.xr.getDepthSensingMesh();ce!==null&&He(ce,F,-1/0,v.sortObjects)}He(A,F,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(se,E),be=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,be&&Oe.addToRenderList(m,A),this.info.render.frame++,H===!0&&oe.beginShadows();const W=p.state.shadowsArray;he.render(W,A,F),H===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,z=m.transmissive;if(p.setupLights(),F.isArrayCamera){const ce=F.cameras;if(z.length>0)for(let fe=0,xe=ce.length;fe<xe;fe++){const Re=ce[fe];tt(X,z,A,Re)}be&&Oe.render(A);for(let fe=0,xe=ce.length;fe<xe;fe++){const Re=ce[fe];It(m,A,Re,Re.viewport)}}else z.length>0&&tt(X,z,A,F),be&&Oe.render(A),It(m,A,F);D!==null&&(C.updateMultisampleRenderTarget(D),C.updateRenderTargetMipmap(D)),A.isScene===!0&&A.onAfterRender(v,A,F),st.resetDefaultState(),y=-1,x=null,S.pop(),S.length>0?(p=S[S.length-1],H===!0&&oe.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function He(A,F,W,X){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||N.intersectsSprite(A)){X&&Me.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ae);const fe=ee.update(A),xe=A.material;xe.visible&&m.push(A,fe,xe,W,Me.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||N.intersectsObject(A))){const fe=ee.update(A),xe=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Me.copy(A.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Me.copy(fe.boundingSphere.center)),Me.applyMatrix4(A.matrixWorld).applyMatrix4(ae)),Array.isArray(xe)){const Re=fe.groups;for(let Ve=0,Xe=Re.length;Ve<Xe;Ve++){const Le=Re[Ve],qe=xe[Le.materialIndex];qe&&qe.visible&&m.push(A,fe,qe,W,Me.z,Le)}}else xe.visible&&m.push(A,fe,xe,W,Me.z,null)}}const ce=A.children;for(let fe=0,xe=ce.length;fe<xe;fe++)He(ce[fe],F,W,X)}function It(A,F,W,X){const z=A.opaque,ce=A.transmissive,fe=A.transparent;p.setupLightsView(W),H===!0&&oe.setGlobalState(v.clippingPlanes,W),X&&Te.viewport(L.copy(X)),z.length>0&&yt(z,F,W),ce.length>0&&yt(ce,F,W),fe.length>0&&yt(fe,F,W),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function tt(A,F,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new zr(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float")?La:Ni,minFilter:Cr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const ce=p.state.transmissionRenderTarget[X.id],fe=X.viewport||L;ce.setSize(fe.z,fe.w);const xe=v.getRenderTarget();v.setRenderTarget(ce),v.getClearColor(q),j=v.getClearAlpha(),j<1&&v.setClearColor(16777215,.5),v.clear(),be&&Oe.render(W);const Re=v.toneMapping;v.toneMapping=tr;const Ve=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),H===!0&&oe.setGlobalState(v.clippingPlanes,X),yt(A,W,X),C.updateMultisampleRenderTarget(ce),C.updateRenderTargetMipmap(ce),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let Le=0,qe=F.length;Le<qe;Le++){const ct=F[Le],ft=ct.object,At=ct.geometry,ht=ct.material,Fe=ct.group;if(ht.side===Ci&&ft.layers.test(X.layers)){const xi=ht.side;ht.side=Sn,ht.needsUpdate=!0,kt(ft,W,X,At,ht,Fe),ht.side=xi,ht.needsUpdate=!0,Xe=!0}}Xe===!0&&(C.updateMultisampleRenderTarget(ce),C.updateRenderTargetMipmap(ce))}v.setRenderTarget(xe),v.setClearColor(q,j),Ve!==void 0&&(X.viewport=Ve),v.toneMapping=Re}function yt(A,F,W){const X=F.isScene===!0?F.overrideMaterial:null;for(let z=0,ce=A.length;z<ce;z++){const fe=A[z],xe=fe.object,Re=fe.geometry,Ve=X===null?fe.material:X,Xe=fe.group;xe.layers.test(W.layers)&&kt(xe,F,W,Re,Ve,Xe)}}function kt(A,F,W,X,z,ce){A.onBeforeRender(v,F,W,X,z,ce),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),z.onBeforeRender(v,F,W,X,A,ce),z.transparent===!0&&z.side===Ci&&z.forceSinglePass===!1?(z.side=Sn,z.needsUpdate=!0,v.renderBufferDirect(W,F,X,z,A,ce),z.side=sr,z.needsUpdate=!0,v.renderBufferDirect(W,F,X,z,A,ce),z.side=Ci):v.renderBufferDirect(W,F,X,z,A,ce),A.onAfterRender(v,F,W,X,z,ce)}function vt(A,F,W){F.isScene!==!0&&(F=Pe);const X=we.get(A),z=p.state.lights,ce=p.state.shadowsArray,fe=z.state.version,xe=me.getParameters(A,z.state,ce,F,W),Re=me.getProgramCacheKey(xe);let Ve=X.programs;X.environment=A.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(A.isMeshStandardMaterial?G:T).get(A.envMap||X.environment),X.envMapRotation=X.environment!==null&&A.envMap===null?F.environmentRotation:A.envMapRotation,Ve===void 0&&(A.addEventListener("dispose",ke),Ve=new Map,X.programs=Ve);let Xe=Ve.get(Re);if(Xe!==void 0){if(X.currentProgram===Xe&&X.lightsStateVersion===fe)return ut(A,xe),Xe}else xe.uniforms=me.getUniforms(A),A.onBeforeCompile(xe,v),Xe=me.acquireProgram(xe,Re),Ve.set(Re,Xe),X.uniforms=xe.uniforms;const Le=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Le.clippingPlanes=oe.uniform),ut(A,xe),X.needsLights=sn(A),X.lightsStateVersion=fe,X.needsLights&&(Le.ambientLightColor.value=z.state.ambient,Le.lightProbe.value=z.state.probe,Le.directionalLights.value=z.state.directional,Le.directionalLightShadows.value=z.state.directionalShadow,Le.spotLights.value=z.state.spot,Le.spotLightShadows.value=z.state.spotShadow,Le.rectAreaLights.value=z.state.rectArea,Le.ltc_1.value=z.state.rectAreaLTC1,Le.ltc_2.value=z.state.rectAreaLTC2,Le.pointLights.value=z.state.point,Le.pointLightShadows.value=z.state.pointShadow,Le.hemisphereLights.value=z.state.hemi,Le.directionalShadowMap.value=z.state.directionalShadowMap,Le.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Le.spotShadowMap.value=z.state.spotShadowMap,Le.spotLightMatrix.value=z.state.spotLightMatrix,Le.spotLightMap.value=z.state.spotLightMap,Le.pointShadowMap.value=z.state.pointShadowMap,Le.pointShadowMatrix.value=z.state.pointShadowMatrix),X.currentProgram=Xe,X.uniformsList=null,Xe}function xt(A){if(A.uniformsList===null){const F=A.currentProgram.getUniforms();A.uniformsList=Po.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function ut(A,F){const W=we.get(A);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function Cn(A,F,W,X,z){F.isScene!==!0&&(F=Pe),C.resetTextureUnits();const ce=F.fog,fe=X.isMeshStandardMaterial?F.environment:null,xe=D===null?v.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Bs,Re=(X.isMeshStandardMaterial?G:T).get(X.envMap||fe),Ve=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Xe=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Le=!!W.morphAttributes.position,qe=!!W.morphAttributes.normal,ct=!!W.morphAttributes.color;let ft=tr;X.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(ft=v.toneMapping);const At=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ht=At!==void 0?At.length:0,Fe=we.get(X),xi=p.state.lights;if(H===!0&&(re===!0||A!==x)){const Wn=A===x&&X.id===y;oe.setState(X,A,Wn)}let dt=!1;X.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==xi.state.version||Fe.outputColorSpace!==xe||z.isBatchedMesh&&Fe.batching===!1||!z.isBatchedMesh&&Fe.batching===!0||z.isBatchedMesh&&Fe.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Fe.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Fe.instancing===!1||!z.isInstancedMesh&&Fe.instancing===!0||z.isSkinnedMesh&&Fe.skinning===!1||!z.isSkinnedMesh&&Fe.skinning===!0||z.isInstancedMesh&&Fe.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Fe.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Fe.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Fe.instancingMorph===!1&&z.morphTexture!==null||Fe.envMap!==Re||X.fog===!0&&Fe.fog!==ce||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==oe.numPlanes||Fe.numIntersection!==oe.numIntersection)||Fe.vertexAlphas!==Ve||Fe.vertexTangents!==Xe||Fe.morphTargets!==Le||Fe.morphNormals!==qe||Fe.morphColors!==ct||Fe.toneMapping!==ft||Fe.morphTargetsCount!==ht)&&(dt=!0):(dt=!0,Fe.__version=X.version);let Qn=Fe.currentProgram;dt===!0&&(Qn=vt(X,F,z));let Wr=!1,Rn=!1,Hs=!1;const Tt=Qn.getUniforms(),li=Fe.uniforms;if(Te.useProgram(Qn.program)&&(Wr=!0,Rn=!0,Hs=!0),X.id!==y&&(y=X.id,Rn=!0),Wr||x!==A){Te.buffers.depth.getReversed()?(Z.copy(A.projectionMatrix),Fm(Z),Om(Z),Tt.setValue(I,"projectionMatrix",Z)):Tt.setValue(I,"projectionMatrix",A.projectionMatrix),Tt.setValue(I,"viewMatrix",A.matrixWorldInverse);const zi=Tt.map.cameraPosition;zi!==void 0&&zi.setValue(I,ue.setFromMatrixPosition(A.matrixWorld)),k.logarithmicDepthBuffer&&Tt.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Tt.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),x!==A&&(x=A,Rn=!0,Hs=!0)}if(z.isSkinnedMesh){Tt.setOptional(I,z,"bindMatrix"),Tt.setOptional(I,z,"bindMatrixInverse");const Wn=z.skeleton;Wn&&(Wn.boneTexture===null&&Wn.computeBoneTexture(),Tt.setValue(I,"boneTexture",Wn.boneTexture,C))}z.isBatchedMesh&&(Tt.setOptional(I,z,"batchingTexture"),Tt.setValue(I,"batchingTexture",z._matricesTexture,C),Tt.setOptional(I,z,"batchingIdTexture"),Tt.setValue(I,"batchingIdTexture",z._indirectTexture,C),Tt.setOptional(I,z,"batchingColorTexture"),z._colorsTexture!==null&&Tt.setValue(I,"batchingColorTexture",z._colorsTexture,C));const Gs=W.morphAttributes;if((Gs.position!==void 0||Gs.normal!==void 0||Gs.color!==void 0)&&Be.update(z,W,Qn),(Rn||Fe.receiveShadow!==z.receiveShadow)&&(Fe.receiveShadow=z.receiveShadow,Tt.setValue(I,"receiveShadow",z.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(li.envMap.value=Re,li.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&F.environment!==null&&(li.envMapIntensity.value=F.environmentIntensity),Rn&&(Tt.setValue(I,"toneMappingExposure",v.toneMappingExposure),Fe.needsLights&&Et(li,Hs),ce&&X.fog===!0&&de.refreshFogUniforms(li,ce),de.refreshMaterialUniforms(li,X,B,$,p.state.transmissionRenderTarget[A.id]),Po.upload(I,xt(Fe),li,C)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Po.upload(I,xt(Fe),li,C),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Tt.setValue(I,"center",z.center),Tt.setValue(I,"modelViewMatrix",z.modelViewMatrix),Tt.setValue(I,"normalMatrix",z.normalMatrix),Tt.setValue(I,"modelMatrix",z.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Wn=X.uniformsGroups;for(let zi=0,ki=Wn.length;zi<ki;zi++){const ef=Wn[zi];U.update(ef,Qn),U.bind(ef,Qn)}}return Qn}function Et(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function sn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(A,F,W){we.get(A.texture).__webglTexture=F,we.get(A.depthTexture).__webglTexture=W;const X=we.get(A);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,F){const W=we.get(A);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,W=0){D=A,w=F,b=W;let X=!0,z=null,ce=!1,fe=!1;if(A){const Re=we.get(A);if(Re.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(I.FRAMEBUFFER,null),X=!1;else if(Re.__webglFramebuffer===void 0)C.setupRenderTarget(A);else if(Re.__hasExternalTextures)C.rebindTextures(A,we.get(A.texture).__webglTexture,we.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Le=A.depthTexture;if(Re.__boundDepthTexture!==Le){if(Le!==null&&we.has(Le)&&(A.width!==Le.image.width||A.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(A)}}const Ve=A.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(fe=!0);const Xe=we.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Xe[F])?z=Xe[F][W]:z=Xe[F],ce=!0):A.samples>0&&C.useMultisampledRTT(A)===!1?z=we.get(A).__webglMultisampledFramebuffer:Array.isArray(Xe)?z=Xe[W]:z=Xe,L.copy(A.viewport),O.copy(A.scissor),V=A.scissorTest}else L.copy(R).multiplyScalar(B).floor(),O.copy(Q).multiplyScalar(B).floor(),V=le;if(Te.bindFramebuffer(I.FRAMEBUFFER,z)&&X&&Te.drawBuffers(A,z),Te.viewport(L),Te.scissor(O),Te.setScissorTest(V),ce){const Re=we.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,Re.__webglTexture,W)}else if(fe){const Re=we.get(A.texture),Ve=F||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Re.__webglTexture,W||0,Ve)}y=-1},this.readRenderTargetPixels=function(A,F,W,X,z,ce,fe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=we.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&fe!==void 0&&(xe=xe[fe]),xe){Te.bindFramebuffer(I.FRAMEBUFFER,xe);try{const Re=A.texture,Ve=Re.format,Xe=Re.type;if(!k.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!k.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-X&&W>=0&&W<=A.height-z&&I.readPixels(F,W,X,z,ze.convert(Ve),ze.convert(Xe),ce)}finally{const Re=D!==null?we.get(D).__webglFramebuffer:null;Te.bindFramebuffer(I.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(A,F,W,X,z,ce,fe){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=we.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&fe!==void 0&&(xe=xe[fe]),xe){const Re=A.texture,Ve=Re.format,Xe=Re.type;if(!k.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!k.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=A.width-X&&W>=0&&W<=A.height-z){Te.bindFramebuffer(I.FRAMEBUFFER,xe);const Le=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Le),I.bufferData(I.PIXEL_PACK_BUFFER,ce.byteLength,I.STREAM_READ),I.readPixels(F,W,X,z,ze.convert(Ve),ze.convert(Xe),0);const qe=D!==null?we.get(D).__webglFramebuffer:null;Te.bindFramebuffer(I.FRAMEBUFFER,qe);const ct=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Nm(I,ct,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Le),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ce),I.deleteBuffer(Le),I.deleteSync(ct),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,F=null,W=0){A.isTexture!==!0&&(Qs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,A=arguments[1]);const X=Math.pow(2,-W),z=Math.floor(A.image.width*X),ce=Math.floor(A.image.height*X),fe=F!==null?F.x:0,xe=F!==null?F.y:0;C.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,fe,xe,z,ce),Te.unbindTexture()},this.copyTextureToTexture=function(A,F,W=null,X=null,z=0){A.isTexture!==!0&&(Qs("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,A=arguments[1],F=arguments[2],z=arguments[3]||0,W=null);let ce,fe,xe,Re,Ve,Xe,Le,qe,ct;const ft=A.isCompressedTexture?A.mipmaps[z]:A.image;W!==null?(ce=W.max.x-W.min.x,fe=W.max.y-W.min.y,xe=W.isBox3?W.max.z-W.min.z:1,Re=W.min.x,Ve=W.min.y,Xe=W.isBox3?W.min.z:0):(ce=ft.width,fe=ft.height,xe=ft.depth||1,Re=0,Ve=0,Xe=0),X!==null?(Le=X.x,qe=X.y,ct=X.z):(Le=0,qe=0,ct=0);const At=ze.convert(F.format),ht=ze.convert(F.type);let Fe;F.isData3DTexture?(C.setTexture3D(F,0),Fe=I.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(C.setTexture2DArray(F,0),Fe=I.TEXTURE_2D_ARRAY):(C.setTexture2D(F,0),Fe=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);const xi=I.getParameter(I.UNPACK_ROW_LENGTH),dt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Qn=I.getParameter(I.UNPACK_SKIP_PIXELS),Wr=I.getParameter(I.UNPACK_SKIP_ROWS),Rn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ft.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ft.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Re),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ve),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Xe);const Hs=A.isDataArrayTexture||A.isData3DTexture,Tt=F.isDataArrayTexture||F.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const li=we.get(A),Gs=we.get(F),Wn=we.get(li.__renderTarget),zi=we.get(Gs.__renderTarget);Te.bindFramebuffer(I.READ_FRAMEBUFFER,Wn.__webglFramebuffer),Te.bindFramebuffer(I.DRAW_FRAMEBUFFER,zi.__webglFramebuffer);for(let ki=0;ki<xe;ki++)Hs&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,we.get(A).__webglTexture,z,Xe+ki),A.isDepthTexture?(Tt&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,we.get(F).__webglTexture,z,ct+ki),I.blitFramebuffer(Re,Ve,ce,fe,Le,qe,ce,fe,I.DEPTH_BUFFER_BIT,I.NEAREST)):Tt?I.copyTexSubImage3D(Fe,z,Le,qe,ct+ki,Re,Ve,ce,fe):I.copyTexSubImage2D(Fe,z,Le,qe,ct+ki,Re,Ve,ce,fe);Te.bindFramebuffer(I.READ_FRAMEBUFFER,null),Te.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Tt?A.isDataTexture||A.isData3DTexture?I.texSubImage3D(Fe,z,Le,qe,ct,ce,fe,xe,At,ht,ft.data):F.isCompressedArrayTexture?I.compressedTexSubImage3D(Fe,z,Le,qe,ct,ce,fe,xe,At,ft.data):I.texSubImage3D(Fe,z,Le,qe,ct,ce,fe,xe,At,ht,ft):A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,z,Le,qe,ce,fe,At,ht,ft.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,z,Le,qe,ft.width,ft.height,At,ft.data):I.texSubImage2D(I.TEXTURE_2D,z,Le,qe,ce,fe,At,ht,ft);I.pixelStorei(I.UNPACK_ROW_LENGTH,xi),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,dt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Qn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Wr),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Rn),z===0&&F.generateMipmaps&&I.generateMipmap(Fe),Te.unbindTexture()},this.copyTextureToTexture3D=function(A,F,W=null,X=null,z=0){return A.isTexture!==!0&&(Qs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,A=arguments[2],F=arguments[3],z=arguments[4]||0),Qs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,F,W,X,z)},this.initRenderTarget=function(A){we.get(A).__webglFramebuffer===void 0&&C.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),Te.unbindTexture()},this.resetState=function(){w=0,b=0,D=null,Te.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}}class Eu{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new at(e),this.density=t}clone(){return new Eu(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class yd extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fi,this.environmentIntensity=1,this.environmentRotation=new Fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ed extends ks{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new at(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Go=new Y,Wo=new Y,eh=new Lt,Ks=new Su,oo=new Fa,kl=new Y,th=new Y;class qx extends mn{constructor(e=new yn,t=new Ed){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Go.fromBufferAttribute(t,i-1),Wo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Go.distanceTo(Wo);e.setAttribute("lineDistance",new _n(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere),oo.applyMatrix4(i),oo.radius+=s,e.ray.intersectsSphere(oo)===!1)return;eh.copy(i).invert(),Ks.copy(e.ray).applyMatrix4(eh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=u.getX(_),M=u.getX(_+1),S=lo(this,e,Ks,l,p,M);S&&t.push(S)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=lo(this,e,Ks,l,_,m);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=lo(this,e,Ks,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=lo(this,e,Ks,l,g-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function lo(r,e,t,n,i,s){const a=r.geometry.attributes.position;if(Go.fromBufferAttribute(a,i),Wo.fromBufferAttribute(a,s),t.distanceSqToSegment(Go,Wo,kl,th)>n)return;kl.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(kl);if(!(l<e.near||l>e.far))return{distance:l,point:th.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const nh=new Y,ih=new Y;class $x extends qx{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)nh.fromBufferAttribute(t,i),ih.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+nh.distanceTo(ih);e.setAttribute("lineDistance",new _n(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Hc extends ks{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new at(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const rh=new Lt,Gc=new Su,co=new Fa,uo=new Y;class sh extends mn{constructor(e=new yn,t=new Hc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),co.copy(n.boundingSphere),co.applyMatrix4(i),co.radius+=s,e.ray.intersectsSphere(co)===!1)return;rh.copy(i).invert(),Gc.copy(e.ray).applyMatrix4(rh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=h,_=f;g<_;g++){const m=c.getX(g);uo.fromBufferAttribute(d,m),ah(uo,m,l,i,e,t,this)}}else{const h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=h,_=f;g<_;g++)uo.fromBufferAttribute(d,g),ah(uo,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ah(r,e,t,n,i,s,a){const o=Gc.distanceSqToPoint(r);if(o<t){const l=new Y;Gc.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Kx extends pn{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Tu extends yn{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],a=[];o(i),c(n),u(),this.setAttribute("position",new _n(s,3)),this.setAttribute("normal",new _n(s.slice(),3)),this.setAttribute("uv",new _n(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const S=new Y,v=new Y,P=new Y;for(let w=0;w<t.length;w+=3)f(t[w+0],S),f(t[w+1],v),f(t[w+2],P),l(S,v,P,M)}function l(M,S,v,P){const w=P+1,b=[];for(let D=0;D<=w;D++){b[D]=[];const y=M.clone().lerp(v,D/w),x=S.clone().lerp(v,D/w),L=w-D;for(let O=0;O<=L;O++)O===0&&D===w?b[D][O]=y:b[D][O]=y.clone().lerp(x,O/L)}for(let D=0;D<w;D++)for(let y=0;y<2*(w-D)-1;y++){const x=Math.floor(y/2);y%2===0?(h(b[D][x+1]),h(b[D+1][x]),h(b[D][x])):(h(b[D][x+1]),h(b[D+1][x+1]),h(b[D+1][x]))}}function c(M){const S=new Y;for(let v=0;v<s.length;v+=3)S.x=s[v+0],S.y=s[v+1],S.z=s[v+2],S.normalize().multiplyScalar(M),s[v+0]=S.x,s[v+1]=S.y,s[v+2]=S.z}function u(){const M=new Y;for(let S=0;S<s.length;S+=3){M.x=s[S+0],M.y=s[S+1],M.z=s[S+2];const v=m(M)/2/Math.PI+.5,P=p(M)/Math.PI+.5;a.push(v,1-P)}g(),d()}function d(){for(let M=0;M<a.length;M+=6){const S=a[M+0],v=a[M+2],P=a[M+4],w=Math.max(S,v,P),b=Math.min(S,v,P);w>.9&&b<.1&&(S<.2&&(a[M+0]+=1),v<.2&&(a[M+2]+=1),P<.2&&(a[M+4]+=1))}}function h(M){s.push(M.x,M.y,M.z)}function f(M,S){const v=M*3;S.x=e[v+0],S.y=e[v+1],S.z=e[v+2]}function g(){const M=new Y,S=new Y,v=new Y,P=new Y,w=new mt,b=new mt,D=new mt;for(let y=0,x=0;y<s.length;y+=9,x+=6){M.set(s[y+0],s[y+1],s[y+2]),S.set(s[y+3],s[y+4],s[y+5]),v.set(s[y+6],s[y+7],s[y+8]),w.set(a[x+0],a[x+1]),b.set(a[x+2],a[x+3]),D.set(a[x+4],a[x+5]),P.copy(M).add(S).add(v).divideScalar(3);const L=m(P);_(w,x+0,M,L),_(b,x+2,S,L),_(D,x+4,v,L)}}function _(M,S,v,P){P<0&&M.x===1&&(a[S]=M.x-1),v.x===0&&v.z===0&&(a[S]=P/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tu(e.vertices,e.indices,e.radius,e.details)}}class bu extends Tu{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new bu(e.radius,e.detail)}}class Au extends yn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new Y,h=new Y,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const M=[],S=p/n;let v=0;p===0&&a===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let P=0;P<=t;P++){const w=P/t;d.x=-e*Math.cos(i+w*s)*Math.sin(a+S*o),d.y=e*Math.cos(a+S*o),d.z=e*Math.sin(i+w*s)*Math.sin(a+S*o),g.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),m.push(w+v,1-S),M.push(c++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){const S=u[p][M+1],v=u[p][M],P=u[p+1][M],w=u[p+1][M+1];(p!==0||a>0)&&f.push(S,v,w),(p!==n-1||l<Math.PI)&&f.push(v,P,w)}this.setIndex(f),this.setAttribute("position",new _n(g,3)),this.setAttribute("normal",new _n(_,3)),this.setAttribute("uv",new _n(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Au(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Zx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=oh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=oh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function oh(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pu);function Ai(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Td(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Vn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ya={duration:.5,overwrite:!1,delay:0},wu,Zt,bt,Zn=1e8,St=1/Zn,Wc=Math.PI*2,jx=Wc/4,Jx=0,bd=Math.sqrt,Qx=Math.cos,eM=Math.sin,$t=function(e){return typeof e=="string"},Dt=function(e){return typeof e=="function"},Oi=function(e){return typeof e=="number"},Cu=function(e){return typeof e>"u"},vi=function(e){return typeof e=="object"},En=function(e){return e!==!1},Ru=function(){return typeof window<"u"},fo=function(e){return Dt(e)||$t(e)},Ad=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},rn=Array.isArray,tM=/random\([^)]+\)/g,nM=/,\s*/g,lh=/(?:-?\.?\d|\.)+/gi,wd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,hs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Vl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Cd=/[+-]=-?[.\d]+/,iM=/[^,'"\[\]\s]+/gi,rM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ct,ui,Xc,Pu,Hn={},Xo={},Rd,Pd=function(e){return(Xo=Ls(e,Hn))&&wn},Du=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ea=function(e,t){return!t&&console.warn(e)},Dd=function(e,t){return e&&(Hn[e]=t)&&Xo&&(Xo[e]=t)||Hn},Ta=function(){return 0},sM={suppressEvents:!0,isStart:!0,kill:!1},Do={suppressEvents:!0,kill:!1},aM={suppressEvents:!0},Lu={},nr=[],Yc={},Ld,Un={},Hl={},ch=30,Lo=[],Iu="",Uu=function(e){var t=e[0],n,i;if(vi(t)||Dt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Lo.length;i--&&!Lo[i].targetTest(t););n=Lo[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new ep(e[i],n)))||e.splice(i,1);return e},Dr=function(e){return e._gsap||Uu(jn(e))[0]._gsap},Id=function(e,t,n){return(n=e[t])&&Dt(n)?e[t]():Cu(n)&&e.getAttribute&&e.getAttribute(t)||n},Tn=function(e,t){return(e=e.split(",")).forEach(t)||e},Ut=function(e){return Math.round(e*1e5)/1e5||0},wt=function(e){return Math.round(e*1e7)/1e7||0},xs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},oM=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Yo=function(){var e=nr.length,t=nr.slice(0),n,i;for(Yc={},nr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Nu=function(e){return!!(e._initted||e._startAt||e.add)},Ud=function(e,t,n,i){nr.length&&!Zt&&Yo(),e.render(t,n,!!(Zt&&t<0&&Nu(e))),nr.length&&!Zt&&Yo()},Nd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(iM).length<2?t:$t(e)?e.trim():e},Fd=function(e){return e},Gn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},lM=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ls=function(e,t){for(var n in t)e[n]=t[n];return e},uh=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=vi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},qo=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ca=function(e){var t=e.parent||Ct,n=e.keyframes?lM(rn(e.keyframes)):Gn;if(En(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},cM=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Od=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},al=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},or=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Lr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},uM=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},qc=function(e,t,n,i){return e._startAt&&(Zt?e._startAt.revert(Do):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},fM=function r(e){return!e||e._ts&&r(e.parent)},fh=function(e){return e._repeat?Is(e._tTime,e=e.duration()+e._rDelay)*e:0},Is=function(e,t){var n=Math.floor(e=wt(e/t));return e&&n===e?n-1:n},$o=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ol=function(e){return e._end=wt(e._start+(e._tDur/Math.abs(e._ts||e._rts||St)||0))},ll=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=wt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ol(e),n._dirty||Lr(n,e)),e},Bd=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=$o(e.rawTime(),t),(!t._dur||Ba(0,t.totalDuration(),n)-t._tTime>St)&&t.render(n,!0)),Lr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-St}},di=function(e,t,n,i){return t.parent&&or(t),t._start=wt((Oi(n)?n:n||e!==Ct?Yn(e,n,t):e._time)+t._delay),t._end=wt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Od(e,t,"_first","_last",e._sort?"_start":0),$c(t)||(e._recent=t),i||Bd(e,t),e._ts<0&&ll(e,e._tTime),e},zd=function(e,t){return(Hn.ScrollTrigger||Du("scrollTrigger",t))&&Hn.ScrollTrigger.create(t,e)},kd=function(e,t,n,i,s){if(Ou(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Zt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Ld!==On.frame)return nr.push(e),e._lazy=[s,i],1},hM=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},$c=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},dM=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&hM(e)&&!(!e._initted&&$c(e))||(e._ts<0||e._dp._ts<0)&&!$c(e))?0:1,o=e._rDelay,l=0,c,u,d;if(o&&e._repeat&&(l=Ba(0,e._tDur,t),u=Is(l,o),e._yoyo&&u&1&&(a=1-a),u!==Is(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Zt||i||e._zTime===St||!t&&e._zTime){if(!e._initted&&kd(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?St:0),n||(n=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&qc(e,t,n,!0),e._onUpdate&&!n&&zn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&zn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&or(e,1),!n&&!Zt&&(zn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},pM=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Us=function(e,t,n,i){var s=e._repeat,a=wt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:wt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&ll(e,e._tTime=e._tDur*o),e.parent&&ol(e),n||Lr(e.parent,e),e},hh=function(e){return e instanceof Mn?Lr(e):Us(e,e._dur)},mM={_start:0,endTime:Ta,totalDuration:Ta},Yn=function r(e,t,n){var i=e.labels,s=e._recent||mM,a=e.duration()>=Zn?s.endTime(!1):e._dur,o,l,c;return $t(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(rn(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},ua=function(e,t,n){var i=Oi(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=En(l.vars.inherit)&&l.parent;a.immediateRender=En(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new zt(t[0],a,t[s+1])},fr=function(e,t){return e||e===0?t(e):t},Ba=function(e,t,n){return n<e?e:n>t?t:n},tn=function(e,t){return!$t(e)||!(t=rM.exec(e))?"":t[1]},_M=function(e,t,n){return fr(n,function(i){return Ba(e,t,i)})},Kc=[].slice,Vd=function(e,t){return e&&vi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&vi(e[0]))&&!e.nodeType&&e!==ui},gM=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return $t(i)&&!t||Vd(i,1)?(s=n).push.apply(s,jn(i)):n.push(i)})||n},jn=function(e,t,n){return bt&&!t&&bt.selector?bt.selector(e):$t(e)&&!n&&(Xc||!Ns())?Kc.call((t||Pu).querySelectorAll(e),0):rn(e)?gM(e,n):Vd(e)?Kc.call(e,0):e?[e]:[]},Zc=function(e){return e=jn(e)[0]||Ea("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return jn(t,n.querySelectorAll?n:n===e?Ea("Invalid scope")||Pu.createElement("div"):e)}},Hd=function(e){return e.sort(function(){return .5-Math.random()})},Gd=function(e){if(Dt(e))return e;var t=vi(e)?e:{each:e},n=Ir(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,d=i;return $t(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],d=i[1]),function(h,f,g){var _=(g||t).length,m=a[_],p,M,S,v,P,w,b,D,y;if(!m){if(y=t.grid==="auto"?0:(t.grid||[1,Zn])[1],!y){for(b=-Zn;b<(b=g[y++].getBoundingClientRect().left)&&y<_;);y<_&&y--}for(m=a[_]=[],p=l?Math.min(y,_)*u-.5:i%y,M=y===Zn?0:l?_*d/y-.5:i/y|0,b=0,D=Zn,w=0;w<_;w++)S=w%y-p,v=M-(w/y|0),m[w]=P=c?Math.abs(c==="y"?v:S):bd(S*S+v*v),P>b&&(b=P),P<D&&(D=P);i==="random"&&Hd(m),m.max=b-D,m.min=D,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(y>_?_-1:c?c==="y"?_/y:y:Math.max(y,_/y))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=tn(t.amount||t.each)||0,n=n&&_<0?PM(n):n}return _=(m[h]-m.min)/m.max||0,wt(m.b+(n?n(_):_)*m.v)+m.u}},jc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=wt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Oi(n)?0:tn(n))}},Wd=function(e,t){var n=rn(e),i,s;return!n&&vi(e)&&(i=n=e.radius||Zn,e.values?(e=jn(e.values),(s=!Oi(e[0]))&&(i*=i)):e=jc(e.increment)),fr(t,n?Dt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Zn,u=0,d=e.length,h,f;d--;)s?(h=e[d].x-o,f=e[d].y-l,h=h*h+f*f):h=Math.abs(e[d]-o),h<c&&(c=h,u=d);return u=!i||c<=i?e[u]:a,s||u===a||Oi(a)?u:u+tn(a)}:jc(e))},Xd=function(e,t,n,i){return fr(rn(e)?!t:n===!0?!!(n=0):!i,function(){return rn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},vM=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},xM=function(e,t){return function(n){return e(parseFloat(n))+(t||tn(n))}},MM=function(e,t,n){return qd(e,t,0,1,n)},Yd=function(e,t,n){return fr(n,function(i){return e[~~t(i)]})},SM=function r(e,t,n){var i=t-e;return rn(e)?Yd(e,r(0,e.length),t):fr(n,function(s){return(i+(s-e)%i)%i+e})},yM=function r(e,t,n){var i=t-e,s=i*2;return rn(e)?Yd(e,r(0,e.length-1),t):fr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},ba=function(e){return e.replace(tM,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(nM);return Xd(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},qd=function(e,t,n,i,s){var a=t-e,o=i-n;return fr(s,function(l){return n+((l-e)/a*o||0)})},EM=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var a=$t(e),o={},l,c,u,d,h;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(rn(e)&&!rn(t)){for(u=[],d=e.length,h=d-2,c=1;c<d;c++)u.push(r(e[c-1],e[c]));d--,s=function(g){g*=d;var _=Math.min(h,~~g);return u[_](g-_)},n=t}else i||(e=Ls(rn(e)?[]:{},e));if(!u){for(l in t)Fu.call(o,e,l,"get",t[l]);s=function(g){return ku(g,o)||(a?e.p:e)}}}return fr(n,s)},dh=function(e,t,n){var i=e.labels,s=Zn,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},zn=function(e,t,n){var i=e.vars,s=i[t],a=bt,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&nr.length&&Yo(),o&&(bt=o),u=l?s.apply(c,l):s.call(c),bt=a,u},ta=function(e){return or(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Zt),e.progress()<1&&zn(e,"onInterrupt"),e},ds,$d=[],Kd=function(e){if(e)if(e=!e.name&&e.default||e,Ru()||e.headless){var t=e.name,n=Dt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ta,render:ku,add:Fu,kill:kM,modifier:zM,rawVars:0},a={targetTest:0,get:0,getSetter:zu,aliases:{},register:0};if(Ns(),e!==i){if(Un[t])return;Gn(i,Gn(qo(e,s),a)),Ls(i.prototype,Ls(s,qo(e,a))),Un[i.prop=t]=i,e.targetTest&&(Lo.push(i),Lu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Dd(t,i),e.register&&e.register(wn,i,bn)}else $d.push(e)},Mt=255,na={aqua:[0,Mt,Mt],lime:[0,Mt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Mt],navy:[0,0,128],white:[Mt,Mt,Mt],olive:[128,128,0],yellow:[Mt,Mt,0],orange:[Mt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Mt,0,0],pink:[Mt,192,203],cyan:[0,Mt,Mt],transparent:[Mt,Mt,Mt,0]},Gl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Mt+.5|0},Zd=function(e,t,n){var i=e?Oi(e)?[e>>16,e>>8&Mt,e&Mt]:0:na.black,s,a,o,l,c,u,d,h,f,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),na[e])i=na[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Mt,i&Mt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Mt,e&Mt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(lh),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Gl(l+1/3,s,a),i[1]=Gl(l,s,a),i[2]=Gl(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(wd),n&&i.length<4&&(i[3]=1),i}else i=e.match(lh)||na.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/Mt,a=i[1]/Mt,o=i[2]/Mt,d=Math.max(s,a,o),h=Math.min(s,a,o),u=(d+h)/2,d===h?l=c=0:(f=d-h,c=u>.5?f/(2-d-h):f/(d+h),l=d===s?(a-o)/f+(a<o?6:0):d===a?(o-s)/f+2:(s-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},jd=function(e){var t=[],n=[],i=-1;return e.split(ir).forEach(function(s){var a=s.match(hs)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},ph=function(e,t,n){var i="",s=(e+i).match(ir),a=t?"hsla(":"rgba(",o=0,l,c,u,d;if(!s)return e;if(s=s.map(function(h){return(h=Zd(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=jd(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(ir,"1").split(hs),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(ir),d=c.length-1;o<d;o++)i+=c[o]+s[o];return i+c[d]},ir=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in na)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),TM=/hsl[a]?\(/,Jd=function(e){var t=e.join(" "),n;if(ir.lastIndex=0,ir.test(t))return n=TM.test(t),e[1]=ph(e[1],n),e[0]=ph(e[0],n,jd(e[1])),!0},Aa,On=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,d,h,f,g=function _(m){var p=r()-i,M=m===!0,S,v,P,w;if((p>e||p<0)&&(n+=p-t),i+=p,P=i-n,S=P-a,(S>0||M)&&(w=++d.frame,h=P-d.time*1e3,d.time=P=P/1e3,a+=S+(S>=s?4:s-S),v=1),M||(l=c(_)),v)for(f=0;f<o.length;f++)o[f](P,h,w,m)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){Rd&&(!Xc&&Ru()&&(ui=Xc=window,Pu=ui.document||{},Hn.gsap=wn,(ui.gsapVersions||(ui.gsapVersions=[])).push(wn.version),Pd(Xo||ui.GreenSockGlobals||!ui.gsap&&ui||{}),$d.forEach(Kd)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(m){return setTimeout(m,a-d.time*1e3+1|0)},Aa=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Aa=0,c=Ta},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=d.time*1e3+s},add:function(m,p,M){var S=p?function(v,P,w,b){m(v,P,w,b),d.remove(S)}:m;return d.remove(m),o[M?"unshift":"push"](S),Ns(),S},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},d}(),Ns=function(){return!Aa&&On.wake()},rt={},bM=/^[\d.\-M][\d.\-,\s]/,AM=/["']/g,wM=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(AM,"").trim():+c,i=l.substr(o+1).trim();return t},CM=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},RM=function(e){var t=(e+"").split("("),n=rt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[wM(t[1])]:CM(e).split(",").map(Nd)):rt._CE&&bM.test(e)?rt._CE("",e):n},PM=function(e){return function(t){return 1-e(1-t)}},Ir=function(e,t){return e&&(Dt(e)?e:rt[e]||RM(e))||t},Gr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Tn(e,function(o){rt[o]=Hn[o]=s,rt[a=o.toLowerCase()]=n;for(var l in s)rt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=rt[o+"."+l]=s[l]}),s},Qd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Wl=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Wc*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*eM((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Qd(o);return s=Wc/s,l.config=function(c,u){return r(e,c,u)},l},Xl=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Qd(n);return i.config=function(s){return r(e,s)},i};Tn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Gr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});rt.Linear.easeNone=rt.none=rt.Linear.easeIn;Gr("Elastic",Wl("in"),Wl("out"),Wl());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};Gr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Gr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Gr("Circ",function(r){return-(bd(1-r*r)-1)});Gr("Sine",function(r){return r===1?1:-Qx(r*jx)+1});Gr("Back",Xl("in"),Xl("out"),Xl());rt.SteppedEase=rt.steps=Hn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-St;return function(o){return((i*Ba(0,a,o)|0)+s)*n}}};ya.ease=rt["quad.out"];Tn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Iu+=r+","+r+"Params,"});var ep=function(e,t){this.id=Jx++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Id,this.set=t?t.getSetter:zu},wa=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Us(this,+t.duration,1,1),this.data=t.data,bt&&(this._ctx=bt,bt.data.push(this)),Aa||On.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Us(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ns(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ll(this,n),!s._dp||s.parent||Bd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&di(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===St||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Ud(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+fh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+fh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Is(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-St?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?$o(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-St?0:this._rts,this.totalTime(Ba(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),ol(this),uM(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ns(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==St&&(this._tTime-=St)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=wt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&di(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(En(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?$o(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=aM);var i=Zt;return Zt=n,Nu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Zt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,hh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,hh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Yn(this,n),En(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,En(i)),this._dur||(this._zTime=-St),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-St:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-St,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-St)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Dt(n)?n:Fd,l=function(){var u=i.then;i.then=null,s&&s(),Dt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){ta(this)},r}();Gn(wa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-St,_prom:0,_ps:!1,_rts:1});var Mn=function(r){Td(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=En(n.sortChildren),Ct&&di(n.parent||Ct,Ai(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&zd(Ai(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return ua(0,arguments,this),this},t.from=function(i,s,a){return ua(1,arguments,this),this},t.fromTo=function(i,s,a,o){return ua(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,ca(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new zt(i,s,Yn(this,a),1),this},t.call=function(i,s,a){return di(this,zt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new zt(i,a,Yn(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,ca(a).immediateRender=En(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,d){return o.startAt=a,ca(o).immediateRender=En(o.immediateRender),this.staggerTo(i,s,o,l,c,u,d)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:wt(i),d=this._zTime<0!=i<0&&(this._initted||!c),h,f,g,_,m,p,M,S,v,P,w,b;if(this!==Ct&&u>l&&i>=0&&(u=l),u!==this._tTime||a||d){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),h=u,v=this._start,S=this._ts,p=!S,d&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(h=wt(u%m),u===l?(_=this._repeat,h=c):(P=wt(u/m),_=~~P,_&&_===P&&(h=c,_--),h>c&&(h=c)),P=Is(this._tTime,m),!o&&this._tTime&&P!==_&&this._tTime-P*m-this._dur<=0&&(P=_),w&&_&1&&(h=c-h,b=1),_!==P&&!this._lock){var D=w&&P&1,y=D===(w&&_&1);if(_<P&&(D=!D),o=D?0:u%c?c:u,this._lock=1,this.render(o||(b?0:wt(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&zn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1,P=_),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,o=D?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=pM(this,wt(o),wt(h)),M&&(u-=h-(h=M._start))),this._tTime=u,this._time=h,this._act=!!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!P&&(zn(this,"onStart"),this._tTime!==u))return this;if(h>=o&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||h>=f._start)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(h-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(h-f._start)*f._ts,s,a),h!==this._time||!this._ts&&!p){M=0,g&&(u+=this._zTime=-St);break}}f=g}else{f=this._last;for(var x=i<0?i:h;f;){if(g=f._prev,(f._act||x<=f._end)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(x-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(x-f._start)*f._ts,s,a||Zt&&Nu(f)),h!==this._time||!this._ts&&!p){M=0,g&&(u+=this._zTime=x?-St:St);break}}f=g}}if(M&&!s&&(this.pause(),M.render(h>=o?0:-St)._zTime=h>=o?1:-1,this._ts))return this._start=v,ol(this),this.render(i,s,a);this._onUpdate&&!s&&zn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(v===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&or(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(zn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(Oi(s)||(s=Yn(this,s,i)),!(i instanceof wa)){if(rn(i))return i.forEach(function(o){return a.add(o,s)}),this;if($t(i))return this.addLabel(i,s);if(Dt(i))i=zt.delayedCall(0,i);else return this}return this!==i?di(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Zn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof zt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return $t(i)?this.removeLabel(i):Dt(i)?this.killTweensOf(i):(i.parent===this&&al(this,i),i===this._recent&&(this._recent=this._last),Lr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=wt(On.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Yn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=zt.delayedCall(0,s||Ta,a);return o.data="isPause",this._hasPause=1,di(this,o,Yn(this,i))},t.removePause=function(i){var s=this._first;for(i=Yn(this,i);s;)s._start===i&&s.data==="isPause"&&or(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Ki!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=jn(i),l=this._first,c=Oi(s),u;l;)l instanceof zt?oM(l._targets,o)&&(c?(!Ki||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=Yn(a,i),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,h=l.immediateRender,f,g=zt.to(a,Gn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||St,onStart:function(){if(a.pause(),!f){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&Us(g,m,0,1).render(g._time,!0,!0),f=1}u&&u.apply(g,d||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,Gn({startAt:{time:Yn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),dh(this,Yn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),dh(this,Yn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+St)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=wt(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Lr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Lr(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=Zn,c,u,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,di(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=wt(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Us(a,a===Ct&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Ct._ts&&(Ud(Ct,$o(i,Ct)),Ld=On.frame),On.frame>=ch){ch+=Vn.autoSleep||120;var s=Ct._first;if((!s||!s._ts)&&Vn.autoSleep&&On._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||On.sleep()}}},e}(wa);Gn(Mn.prototype,{_lock:0,_hasPause:0,_forcing:0});var DM=function(e,t,n,i,s,a,o){var l=new bn(this._pt,e,t,0,1,ap,null,s),c=0,u=0,d,h,f,g,_,m,p,M;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=ba(i)),a&&(M=[n,i],a(M,e,t),n=M[0],i=M[1]),h=n.match(Vl)||[];d=Vl.exec(i);)g=d[0],_=i.substring(c,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?xs(m,g)-m:parseFloat(g)-m,m:f&&f<4?Math.round:0},c=Vl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Cd.test(i)||p)&&(l.e=0),this._pt=l,l},Fu=function(e,t,n,i,s,a,o,l,c,u){Dt(i)&&(i=i(s||0,e,a));var d=e[t],h=n!=="get"?n:Dt(d)?c?e[t.indexOf("set")||!Dt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,f=Dt(d)?c?FM:rp:Bu,g;if($t(i)&&(~i.indexOf("random(")&&(i=ba(i)),i.charAt(1)==="="&&(g=xs(h,i)+(tn(h)||0),(g||g===0)&&(i=g))),!u||h!==i||Jc)return!isNaN(h*i)&&i!==""?(g=new bn(this._pt,e,t,+h||0,i-(h||0),typeof d=="boolean"?BM:sp,0,f),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!d&&!(t in e)&&Du(t,i),DM.call(this,e,t,h,i,f,l||Vn.stringFilter,c))},LM=function(e,t,n,i,s){if(Dt(e)&&(e=fa(e,s,t,n,i)),!vi(e)||e.style&&e.nodeType||rn(e)||Ad(e))return $t(e)?fa(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=fa(e[o],s,t,n,i);return a},tp=function(e,t,n,i,s,a){var o,l,c,u;if(Un[e]&&(o=new Un[e]).init(s,o.rawVars?t[e]:LM(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new bn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==ds))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Ki,Jc,Ou=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,h=i.keyframes,f=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,M=p&&p.data==="nested"?p.vars.targets:m,S=e._overwrite==="auto"&&!wu,v=e.timeline,P=i.easeReverse||d,w,b,D,y,x,L,O,V,q,j,K,$,B;if(v&&(!h||!s)&&(s="none"),e._ease=Ir(s,ya.ease),e._rEase=P&&(Ir(P)||e._ease),e._from=!v&&!!i.runBackwards,e._from&&(e.ratio=1),!v||h&&!i.stagger){if(V=m[0]?Dr(m[0]).harness:0,$=V&&i[V.prop],w=qo(i,Lu),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!f?_.render(-1,!0):_.revert(u&&g?Do:sM),_._lazy=0),a){if(or(e._startAt=zt.set(m,Gn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&En(l),startAt:null,delay:0,onUpdate:c&&function(){return zn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Zt||!o&&!f)&&e._startAt.revert(Do),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(o=!1),D=Gn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&En(l),immediateRender:o,stagger:0,parent:p},w),$&&(D[V.prop]=$),or(e._startAt=zt.set(m,D)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Zt?e._startAt.revert(Do):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,St,St);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&En(l)||l&&!g,b=0;b<m.length;b++){if(x=m[b],O=x._gsap||Uu(m)[b]._gsap,e._ptLookup[b]=j={},Yc[O.id]&&nr.length&&Yo(),K=M===m?b:M.indexOf(x),V&&(q=new V).init(x,$||w,e,K,M)!==!1&&(e._pt=y=new bn(e._pt,x,q.name,0,1,q.render,q,0,q.priority),q._props.forEach(function(se){j[se]=y}),q.priority&&(L=1)),!V||$)for(D in w)Un[D]&&(q=tp(D,w,e,K,x,M))?q.priority&&(L=1):j[D]=y=Fu.call(e,x,D,"get",w[D],K,M,0,i.stringFilter);e._op&&e._op[b]&&e.kill(x,e._op[b]),S&&e._pt&&(Ki=e,Ct.killTweensOf(x,j,e.globalTime(t)),B=!e.parent,Ki=0),e._pt&&l&&(Yc[O.id]=1)}L&&op(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!B,h&&t<=0&&v.render(Zn,!0,!0)},IM=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,h,f;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(u=h[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Jc=1,e.vars[t]="+=0",Ou(e,o),Jc=0,l?Ea(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(f=c.length;f--;)d=c[f],u=d._pt||d,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,d.e&&(d.e=Ut(n)+tn(d.e)),d.b&&(d.b=u.s+tn(d.b))},UM=function(e,t){var n=e[0]?Dr(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=Ls({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},NM=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(rn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},fa=function(e,t,n,i,s){return Dt(e)?e.call(t,n,i,s):$t(e)&&~e.indexOf("random(")?ba(e):e},np=Iu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",ip={};Tn(np+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return ip[r]=1});var zt=function(r){Td(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:ca(i))||this;var l=o.vars,c=l.duration,u=l.delay,d=l.immediateRender,h=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=i.parent||Ct,M=(rn(n)||Ad(n)?Oi(n[0]):"length"in i)?[n]:jn(n),S,v,P,w,b,D,y,x;if(o._targets=M.length?Uu(M):Ea("GSAP target "+n+" not found. https://gsap.com",!Vn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,g||h||fo(c)||fo(u)){i=o.vars;var L=i.easeReverse||i.yoyoEase;if(S=o.timeline=new Mn({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:M}),S.kill(),S.parent=S._dp=Ai(o),S._start=0,h||fo(c)||fo(u)){if(w=M.length,y=h&&Gd(h),vi(h))for(b in h)~np.indexOf(b)&&(x||(x={}),x[b]=h[b]);for(v=0;v<w;v++)P=qo(i,ip),P.stagger=0,L&&(P.easeReverse=L),x&&Ls(P,x),D=M[v],P.duration=+fa(c,Ai(o),v,D,M),P.delay=(+fa(u,Ai(o),v,D,M)||0)-o._delay,!h&&w===1&&P.delay&&(o._delay=u=P.delay,o._start+=u,P.delay=0),S.to(D,P,y?y(v,D,M):0),S._ease=rt.none;S.duration()?c=u=0:o.timeline=0}else if(g){ca(Gn(S.vars.defaults,{ease:"none"})),S._ease=Ir(g.ease||i.ease||"none");var O=0,V,q,j;if(rn(g))g.forEach(function(K){return S.to(M,K,">")}),S.duration();else{P={};for(b in g)b==="ease"||b==="easeEach"||NM(b,g[b],P,g.easeEach);for(b in P)for(V=P[b].sort(function(K,$){return K.t-$.t}),O=0,v=0;v<V.length;v++)q=V[v],j={ease:q.e,duration:(q.t-(v?V[v-1].t:0))/100*c},j[b]=q.v,S.to(M,j,O),O+=j.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||o.duration(c=S.duration())}else o.timeline=0;return f===!0&&!wu&&(Ki=Ai(o),Ct.killTweensOf(M),Ki=0),di(p,Ai(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!g&&o._start===wt(p._time)&&En(d)&&fM(Ai(o))&&p.data!=="nested")&&(o._tTime=-St,o.render(Math.max(0,-u)||0)),m&&zd(Ai(o),m),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-St&&!u?l:i<St?0:i,h,f,g,_,m,p,M,S;if(!c)dM(this,i,s,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=d,S=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(h=wt(d%_),d===l?(g=this._repeat,h=c):(m=wt(d/_),g=~~m,g&&g===m?(h=c,g--):h>c&&(h=c)),p=this._yoyo&&g&1,p&&(h=c-h),m=Is(this._tTime,_),h===o&&!a&&this._initted&&g===m)return this._tTime=d,this;g!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&h!==_&&this._initted&&(this._lock=a=1,this.render(wt(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(kd(this,u?i:h,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var v=h<o;if(v!==this._inv){var P=v?o:c-o;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=P?(v?-1:1)/P:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=M=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=M=this._ease(h/c);if(this._from&&(this.ratio=M=1-M),this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!m&&(zn(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(M,f.d),f=f._next;S&&S.render(i<0?i:S._dur*S._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&qc(this,i,s,a),zn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&zn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&qc(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&or(this,1),!s&&!(u&&!o)&&(d||o||p)&&(zn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){Aa||On.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Ou(this,c),u=this._ease(c/this._dur),IM(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(ll(this,0),this.parent||Od(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ta(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Zt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Ki&&Ki.vars.overwrite!==!0)._first||ta(this),this.parent&&a!==this.timeline.totalDuration()&&Us(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?jn(i):o,c=this._ptLookup,u=this._pt,d,h,f,g,_,m,p;if((!s||s==="all")&&cM(o,l))return s==="all"&&(this._pt=0),ta(this);for(d=this._op=this._op||[],s!=="all"&&($t(s)&&(_={},Tn(s,function(M){return _[M]=1}),s=_),s=UM(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){h=c[p],s==="all"?(d[p]=s,g=h,f={}):(f=d[p]=d[p]||{},g=s);for(_ in g)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&al(this,m,"_pt"),delete h[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&ta(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return ua(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return ua(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return Ct.killTweensOf(i,s,a)},e}(wa);Gn(zt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Tn("staggerTo,staggerFrom,staggerFromTo",function(r){zt[r]=function(){var e=new Mn,t=Kc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Bu=function(e,t,n){return e[t]=n},rp=function(e,t,n){return e[t](n)},FM=function(e,t,n,i){return e[t](i.fp,n)},OM=function(e,t,n){return e.setAttribute(t,n)},zu=function(e,t){return Dt(e[t])?rp:Cu(e[t])&&e.setAttribute?OM:Bu},sp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},BM=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},ap=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},ku=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},zM=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},kM=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?al(this,t,"_pt"):t.dep||(n=1),t=i;return!n},VM=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},op=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},bn=function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||sp,this.d=l||this,this.set=c||Bu,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=VM,this.m=n,this.mt=s,this.tween=i},r}();Tn(Iu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Lu[r]=1});Hn.TweenMax=Hn.TweenLite=zt;Hn.TimelineLite=Hn.TimelineMax=Mn;Ct=new Mn({sortChildren:!1,defaults:ya,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Vn.stringFilter=Jd;var Ur=[],Io={},HM=[],mh=0,GM=0,Yl=function(e){return(Io[e]||HM).map(function(t){return t()})},Qc=function(){var e=Date.now(),t=[];e-mh>2&&(Yl("matchMediaInit"),Ur.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=ui.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Yl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),mh=e,Yl("matchMedia"))},lp=function(){function r(t,n){this.selector=n&&Zc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=GM++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Dt(n)&&(s=i,i=n,n=Dt);var a=this,o=function(){var c=bt,u=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=Zc(s)),bt=a,d=i.apply(a,arguments),Dt(d)&&a._r.push(d),bt=c,a.selector=u,a.isReverted=!1,d};return a.last=o,n===Dt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=bt;bt=null,n(this),bt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof zt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Mn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof zt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Ur.length;a--;)Ur[a].id===this.id&&Ur.splice(a,1)},e.revert=function(n){this.kill(n||{})},r}(),WM=function(){function r(t){this.contexts=[],this.scope=t,bt&&bt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){vi(n)||(n={matches:n});var a=new lp(0,s||this.scope),o=a.conditions={},l,c,u;bt&&!a.selector&&(a.selector=bt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=ui.matchMedia(n[c]),l&&(Ur.indexOf(a)<0&&Ur.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Qc):l.addEventListener("change",Qc)));return u&&i(a,function(d){return a.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Ko={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Kd(i)})},timeline:function(e){return new Mn(e)},getTweensOf:function(e,t){return Ct.getTweensOf(e,t)},getProperty:function(e,t,n,i){$t(e)&&(e=jn(e)[0]);var s=Dr(e||{}).get,a=n?Fd:Nd;return n==="native"&&(n=""),e&&(t?a((Un[t]&&Un[t].get||s)(e,t,n,i)):function(o,l,c){return a((Un[o]&&Un[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=jn(e),e.length>1){var i=e.map(function(u){return wn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var d=s;d--;)i[d](u)}}e=e[0]||{};var a=Un[t],o=Dr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var d=new a;ds._pt=0,d.init(e,n?u+n:u,ds,0,[e]),d.render(1,d),ds._pt&&ku(1,ds)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=wn.to(e,Gn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Ct.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ir(e.ease,ya.ease)),uh(ya,e||{})},config:function(e){return uh(Vn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Un[o]&&!Hn[o]&&Ea(t+" effect requires "+o+" plugin.")}),Hl[t]=function(o,l,c){return n(jn(o),Gn(l||{},s),c)},a&&(Mn.prototype[t]=function(o,l,c){return this.add(Hl[t](o,vi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){rt[e]=Ir(t)},parseEase:function(e,t){return arguments.length?Ir(e,t):rt},getById:function(e){return Ct.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Mn(e),i,s;for(n.smoothChildTiming=En(e.smoothChildTiming),Ct.remove(n),n._dp=0,n._time=n._tTime=Ct._time,i=Ct._first;i;)s=i._next,(t||!(!i._dur&&i instanceof zt&&i.vars.onComplete===i._targets[0]))&&di(n,i,i._start-i._delay),i=s;return di(Ct,n,0),n},context:function(e,t){return e?new lp(e,t):bt},matchMedia:function(e){return new WM(e)},matchMediaRefresh:function(){return Ur.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Qc()},addEventListener:function(e,t){var n=Io[e]||(Io[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Io[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:SM,wrapYoyo:yM,distribute:Gd,random:Xd,snap:Wd,normalize:MM,getUnit:tn,clamp:_M,splitColor:Zd,toArray:jn,selector:Zc,mapRange:qd,pipe:vM,unitize:xM,interpolate:EM,shuffle:Hd},install:Pd,effects:Hl,ticker:On,updateRoot:Mn.updateRoot,plugins:Un,globalTimeline:Ct,core:{PropTween:bn,globals:Dd,Tween:zt,Timeline:Mn,Animation:wa,getCache:Dr,_removeLinkedListItem:al,reverting:function(){return Zt},context:function(e){return e&&bt&&(bt.data.push(e),e._ctx=bt),bt},suppressOverwrites:function(e){return wu=e}}};Tn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ko[r]=zt[r]});On.add(Mn.updateRoot);ds=Ko.to({},{duration:0});var XM=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},YM=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=XM(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},ql=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if($t(s)&&(l={},Tn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}YM(o,s)}}}},wn=Ko.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Zt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},ql("roundProps",jc),ql("modifiers"),ql("snap",Wd))||Ko;zt.version=Mn.version=wn.version="3.15.0";Rd=1;Ru()&&Ns();rt.Power0;rt.Power1;rt.Power2;rt.Power3;rt.Power4;rt.Linear;rt.Quad;rt.Cubic;rt.Quart;rt.Quint;rt.Strong;rt.Elastic;rt.Back;rt.SteppedEase;rt.Bounce;rt.Sine;rt.Expo;rt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var _h,Zi,Ms,Vu,Rr,gh,Hu,qM=function(){return typeof window<"u"},Bi={},yr=180/Math.PI,Ss=Math.PI/180,ss=Math.atan2,vh=1e8,Gu=/([A-Z])/g,$M=/(left|right|width|margin|padding|x)/i,KM=/[\s,\(]\S/,mi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},eu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ZM=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},jM=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},JM=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},QM=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},cp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},up=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},eS=function(e,t,n){return e.style[t]=n},tS=function(e,t,n){return e.style.setProperty(t,n)},nS=function(e,t,n){return e._gsap[t]=n},iS=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},rS=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},sS=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Rt="transform",An=Rt+"Origin",aS=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in Bi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=mi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=wi(i,o)}):this.tfm[e]=a.x?a[e]:wi(i,e),e===An&&(this.tfm.zOrigin=a.zOrigin);else return mi.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Rt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(An,t,"")),e=Rt}(s||t)&&this.props.push(e,t,s[e])},fp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},oS=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Gu,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Hu(),(!s||!s.isStart)&&!n[Rt]&&(fp(n),i.zOrigin&&n[An]&&(n[An]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},hp=function(e,t){var n={target:e,props:[],revert:oS,save:aS};return e._gsap||wn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},dp,tu=function(e,t){var n=Zi.createElementNS?Zi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Zi.createElement(e);return n&&n.style?n:Zi.createElement(e)},kn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Gu,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Fs(t)||t,1)||""},xh="O,Moz,ms,Ms,Webkit".split(","),Fs=function(e,t,n){var i=t||Rr,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(xh[a]+e in s););return a<0?null:(a===3?"ms":a>=0?xh[a]:"")+e},nu=function(){qM()&&window.document&&(_h=window,Zi=_h.document,Ms=Zi.documentElement,Rr=tu("div")||{style:{}},tu("div"),Rt=Fs(Rt),An=Rt+"Origin",Rr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",dp=!!Fs("perspective"),Hu=wn.core.reverting,Vu=1)},Mh=function(e){var t=e.ownerSVGElement,n=tu("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ms.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ms.removeChild(n),s},Sh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},pp=function(e){var t,n;try{t=e.getBBox()}catch{t=Mh(e),n=1}return t&&(t.width||t.height)||n||(t=Mh(e)),t&&!t.width&&!t.x&&!t.y?{x:+Sh(e,["x","cx","x1"])||0,y:+Sh(e,["y","cy","y1"])||0,width:0,height:0}:t},mp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&pp(e))},lr=function(e,t){if(t){var n=e.style,i;t in Bi&&t!==An&&(t=Rt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Gu,"-$1").toLowerCase())):n.removeAttribute(t)}},ji=function(e,t,n,i,s,a){var o=new bn(e._pt,t,n,0,1,a?up:cp);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},yh={deg:1,rad:1,turn:1},lS={grid:1,flex:1},cr=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Rr.style,l=$M.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,h=i==="px",f=i==="%",g,_,m,p;if(i===a||!s||yh[i]||yh[a])return s;if(a!=="px"&&!h&&(s=r(e,t,n,"px")),p=e.getCTM&&mp(e),(f||a==="%")&&(Bi[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],Ut(f?s/g*d:s/100*g);if(o[l?"width":"height"]=d+(h?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Zi||!_.appendChild)&&(_=Zi.body),m=_._gsap,m&&f&&m.width&&l&&m.time===On.time&&!m.uncache)return Ut(s/m.width*d);if(f&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=d+i,g=e[u],M?e.style[t]=M:lr(e,t)}else(f||a==="%")&&!lS[kn(_,"display")]&&(o.position=kn(e,"position")),_===e&&(o.position="static"),_.appendChild(Rr),g=Rr[u],_.removeChild(Rr),o.position="absolute";return l&&f&&(m=Dr(_),m.time=On.time,m.width=_[u]),Ut(h?g*s/d:g&&s?d/g*s:0)},wi=function(e,t,n,i){var s;return Vu||nu(),t in mi&&t!=="transform"&&(t=mi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Bi[t]&&t!=="transform"?(s=Ra(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:jo(kn(e,An))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Zo[t]&&Zo[t](e,t,n)||kn(e,t)||Id(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?cr(e,t,s,n)+n:s},cS=function(e,t,n,i){if(!n||n==="none"){var s=Fs(t,e,1),a=s&&kn(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=kn(e,"borderTopColor"))}var o=new bn(this._pt,e.style,t,0,1,ap),l=0,c=0,u,d,h,f,g,_,m,p,M,S,v,P;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=kn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=kn(e,t)||i,_?e.style[t]=_:lr(e,t)),u=[n,i],Jd(u),n=u[0],i=u[1],h=n.match(hs)||[],P=i.match(hs)||[],P.length){for(;d=hs.exec(i);)m=d[0],M=i.substring(l,d.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),m!==(_=h[c++]||"")&&(f=parseFloat(_)||0,v=_.substr((f+"").length),m.charAt(1)==="="&&(m=xs(f,m)+v),p=parseFloat(m),S=m.substr((p+"").length),l=hs.lastIndex-S.length,S||(S=S||Vn.units[t]||v,l===i.length&&(i+=S,o.e+=S)),v!==S&&(f=cr(e,t,_,S)||0),o._pt={_next:o._pt,p:M||c===1?M:",",s:f,c:p-f,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?up:cp;return Cd.test(i)&&(o.e=0),this._pt=o,o},Eh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},uS=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Eh[n]||n,t[1]=Eh[i]||i,t.join(" ")},fS=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Bi[o]&&(l=1,o=o==="transformOrigin"?An:Rt),lr(n,o);l&&(lr(n,Rt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ra(n,1),a.uncache=1,fp(i)))}},Zo={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new bn(e._pt,t,n,0,0,fS);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Ca=[1,0,0,1,0,0],_p={},gp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Th=function(e){var t=kn(e,Rt);return gp(t)?Ca:t.substr(7).match(wd).map(Ut)},Wu=function(e,t){var n=e._gsap||Dr(e),i=e.style,s=Th(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ca:s):(s===Ca&&!e.offsetParent&&e!==Ms&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Ms.appendChild(e)),s=Th(e),l?i.display=l:lr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Ms.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},iu=function(e,t,n,i,s,a){var o=e._gsap,l=s||Wu(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,d=o.xOffset||0,h=o.yOffset||0,f=l[0],g=l[1],_=l[2],m=l[3],p=l[4],M=l[5],S=t.split(" "),v=parseFloat(S[0])||0,P=parseFloat(S[1])||0,w,b,D,y;n?l!==Ca&&(b=f*m-g*_)&&(D=v*(m/b)+P*(-_/b)+(_*M-m*p)/b,y=v*(-g/b)+P*(f/b)-(f*M-g*p)/b,v=D,P=y):(w=pp(e),v=w.x+(~S[0].indexOf("%")?v/100*w.width:v),P=w.y+(~(S[1]||S[0]).indexOf("%")?P/100*w.height:P)),i||i!==!1&&o.smooth?(p=v-c,M=P-u,o.xOffset=d+(p*f+M*_)-p,o.yOffset=h+(p*g+M*m)-M):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=P,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[An]="0px 0px",a&&(ji(a,o,"xOrigin",c,v),ji(a,o,"yOrigin",u,P),ji(a,o,"xOffset",d,o.xOffset),ji(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",v+" "+P)},Ra=function(e,t){var n=e._gsap||new ep(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=kn(e,An)||"0",u,d,h,f,g,_,m,p,M,S,v,P,w,b,D,y,x,L,O,V,q,j,K,$,B,se,E,R,Q,le,N,H;return u=d=h=_=m=p=M=S=v=0,f=g=1,n.svg=!!(e.getCTM&&mp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Rt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Rt]!=="none"?l[Rt]:"")),i.scale=i.rotate=i.translate="none"),b=Wu(e,n.svg),n.svg&&(n.uncache?(B=e.getBBox(),c=n.xOrigin-B.x+"px "+(n.yOrigin-B.y)+"px",$=""):$=!t&&e.getAttribute("data-svg-origin"),iu(e,$||c,!!$||n.originIsAbsolute,n.smooth!==!1,b)),P=n.xOrigin||0,w=n.yOrigin||0,b!==Ca&&(L=b[0],O=b[1],V=b[2],q=b[3],u=j=b[4],d=K=b[5],b.length===6?(f=Math.sqrt(L*L+O*O),g=Math.sqrt(q*q+V*V),_=L||O?ss(O,L)*yr:0,M=V||q?ss(V,q)*yr+_:0,M&&(g*=Math.abs(Math.cos(M*Ss))),n.svg&&(u-=P-(P*L+w*V),d-=w-(P*O+w*q))):(H=b[6],le=b[7],E=b[8],R=b[9],Q=b[10],N=b[11],u=b[12],d=b[13],h=b[14],D=ss(H,Q),m=D*yr,D&&(y=Math.cos(-D),x=Math.sin(-D),$=j*y+E*x,B=K*y+R*x,se=H*y+Q*x,E=j*-x+E*y,R=K*-x+R*y,Q=H*-x+Q*y,N=le*-x+N*y,j=$,K=B,H=se),D=ss(-V,Q),p=D*yr,D&&(y=Math.cos(-D),x=Math.sin(-D),$=L*y-E*x,B=O*y-R*x,se=V*y-Q*x,N=q*x+N*y,L=$,O=B,V=se),D=ss(O,L),_=D*yr,D&&(y=Math.cos(D),x=Math.sin(D),$=L*y+O*x,B=j*y+K*x,O=O*y-L*x,K=K*y-j*x,L=$,j=B),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),f=Ut(Math.sqrt(L*L+O*O+V*V)),g=Ut(Math.sqrt(K*K+H*H)),D=ss(j,K),M=Math.abs(D)>2e-4?D*yr:0,v=N?1/(N<0?-N:N):0),n.svg&&($=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!gp(kn(e,Rt)),$&&e.setAttribute("transform",$))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(f*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=Ut(f),n.scaleY=Ut(g),n.rotation=Ut(_)+o,n.rotationX=Ut(m)+o,n.rotationY=Ut(p)+o,n.skewX=M+o,n.skewY=S+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[An]=jo(c)),n.xOffset=n.yOffset=0,n.force3D=Vn.force3D,n.renderTransform=n.svg?dS:dp?vp:hS,n.uncache=0,n},jo=function(e){return(e=e.split(" "))[0]+" "+e[1]},$l=function(e,t,n){var i=tn(t);return Ut(parseFloat(t)+parseFloat(cr(e,"x",n+"px",i)))+i},hS=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,vp(e,t)},vr="0deg",Zs="0px",xr=") ",vp=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,h=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,M=n.target,S=n.zOrigin,v="",P=p==="auto"&&e&&e!==1||p===!0;if(S&&(d!==vr||u!==vr)){var w=parseFloat(u)*Ss,b=Math.sin(w),D=Math.cos(w),y;w=parseFloat(d)*Ss,y=Math.cos(w),a=$l(M,a,b*y*-S),o=$l(M,o,-Math.sin(w)*-S),l=$l(M,l,D*y*-S+S)}m!==Zs&&(v+="perspective("+m+xr),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(P||a!==Zs||o!==Zs||l!==Zs)&&(v+=l!==Zs||P?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+xr),c!==vr&&(v+="rotate("+c+xr),u!==vr&&(v+="rotateY("+u+xr),d!==vr&&(v+="rotateX("+d+xr),(h!==vr||f!==vr)&&(v+="skew("+h+", "+f+xr),(g!==1||_!==1)&&(v+="scale("+g+", "+_+xr),M.style[Rt]=v||"translate(0, 0)"},dS=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,h=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,M=n.forceCSS,S=parseFloat(a),v=parseFloat(o),P,w,b,D,y;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ss,c*=Ss,P=Math.cos(l)*d,w=Math.sin(l)*d,b=Math.sin(l-c)*-h,D=Math.cos(l-c)*h,c&&(u*=Ss,y=Math.tan(c-u),y=Math.sqrt(1+y*y),b*=y,D*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),P*=y,w*=y)),P=Ut(P),w=Ut(w),b=Ut(b),D=Ut(D)):(P=d,D=h,w=b=0),(S&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(S=cr(f,"x",a,"px"),v=cr(f,"y",o,"px")),(g||_||m||p)&&(S=Ut(S+g-(g*P+_*b)+m),v=Ut(v+_-(g*w+_*D)+p)),(i||s)&&(y=f.getBBox(),S=Ut(S+i/100*y.width),v=Ut(v+s/100*y.height)),y="matrix("+P+","+w+","+b+","+D+","+S+","+v+")",f.setAttribute("transform",y),M&&(f.style[Rt]=y)},pS=function(e,t,n,i,s){var a=360,o=$t(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?yr:1),c=l-i,u=i+c+"deg",d,h;return o&&(d=s.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*vh)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*vh)%a-~~(c/a)*a)),e._pt=h=new bn(e._pt,t,n,i,c,ZM),h.e=u,h.u="deg",e._props.push(n),h},bh=function(e,t){for(var n in t)e[n]=t[n];return e},mS=function(e,t,n){var i=bh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,d,h,f,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Rt]=t,o=Ra(n,1),lr(n,Rt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Rt],a[Rt]=t,o=Ra(n,1),a[Rt]=c);for(l in Bi)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(f=tn(c),g=tn(u),d=f!==g?cr(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new bn(e._pt,o,l,d,h-d,eu),e._pt.u=g||0,e._props.push(l));bh(o,i)};Tn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});Zo[e>1?"border"+r:r]=function(o,l,c,u,d){var h,f;if(arguments.length<4)return h=a.map(function(g){return wi(o,g,c)}),f=h.join(" "),f.split(h[0]).length===5?h[0]:f;h=(u+"").split(" "),f={},a.forEach(function(g,_){return f[g]=h[_]=h[_]||h[(_-1)/2|0]}),o.init(l,f,d)}});var xp={name:"css",register:nu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,d,h,f,g,_,m,p,M,S,v,P,w,b,D,y;Vu||nu(),this.styles=this.styles||hp(e),D=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Un[_]&&tp(_,t,n,i,e,s)))){if(f=typeof u,g=Zo[_],f==="function"&&(u=u.call(n,i,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=ba(u)),g)g(this,e,_,u,n)&&(b=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",ir.lastIndex=0,ir.test(c)||(m=tn(c),p=tn(u),p?m!==p&&(c=cr(e,_,c,p)+p):m&&(u+=m)),this.add(o,"setProperty",c,u,i,s,0,0,_),a.push(_),D.push(_,0,o[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],$t(c)&&~c.indexOf("random(")&&(c=ba(c)),tn(c+"")||c==="auto"||(c+=Vn.units[_]||tn(wi(e,_))||""),(c+"").charAt(1)==="="&&(c=wi(e,_))):c=wi(e,_),h=parseFloat(c),M=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),d=parseFloat(u),_ in mi&&(_==="autoAlpha"&&(h===1&&wi(e,"visibility")==="hidden"&&d&&(h=0),D.push("visibility",0,o.visibility),ji(this,o,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=mi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),S=_ in Bi,S){if(this.styles.save(_),y=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=kn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var x=e.style.perspective;e.style.perspective=u,u=kn(e,"perspective"),x?e.style.perspective=x:lr(e,"perspective")}d=parseFloat(u)}if(v||(P=e._gsap,P.renderTransform&&!t.parseTransform||Ra(e,t.parseTransform),w=t.smoothOrigin!==!1&&P.smooth,v=this._pt=new bn(this._pt,o,Rt,0,1,P.renderTransform,P,0,-1),v.dep=1),_==="scale")this._pt=new bn(this._pt,P,"scaleY",P.scaleY,(M?xs(P.scaleY,M+d):d)-P.scaleY||0,eu),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){D.push(An,0,o[An]),u=uS(u),P.svg?iu(e,u,0,w,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==P.zOrigin&&ji(this,P,"zOrigin",P.zOrigin,p),ji(this,o,_,jo(c),jo(u)));continue}else if(_==="svgOrigin"){iu(e,u,1,w,0,this);continue}else if(_ in _p){pS(this,P,_,h,M?xs(h,M+u):u);continue}else if(_==="smoothOrigin"){ji(this,P,"smooth",P.smooth,u);continue}else if(_==="force3D"){P[_]=u;continue}else if(_==="transform"){mS(this,u,e);continue}}else _ in o||(_=Fs(_)||_);if(S||(d||d===0)&&(h||h===0)&&!KM.test(u)&&_ in o)m=(c+"").substr((h+"").length),d||(d=0),p=tn(u)||(_ in Vn.units?Vn.units[_]:m),m!==p&&(h=cr(e,_,c,p)),this._pt=new bn(this._pt,S?P:o,_,h,(M?xs(h,M+d):d)-h,!S&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?QM:eu),this._pt.u=p||0,S&&y!==u?(this._pt.b=c,this._pt.e=y,this._pt.r=JM):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=jM);else if(_ in o)cS.call(this,e,_,c,M?M+u:u);else if(_ in e)this.add(e,_,c||e[_],M?M+u:u,i,s);else if(_!=="parseTransform"){Du(_,u);continue}S||(_ in o?D.push(_,0,o[_]):typeof e[_]=="function"?D.push(_,2,e[_]()):D.push(_,1,c||e[_])),a.push(_)}}b&&op(this)},render:function(e,t){if(t.tween._time||!Hu())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:wi,aliases:mi,getSetter:function(e,t,n){var i=mi[t];return i&&i.indexOf(",")<0&&(t=i),t in Bi&&t!==An&&(e._gsap.x||wi(e,"x"))?n&&gh===n?t==="scale"?iS:nS:(gh=n||{})&&(t==="scale"?rS:sS):e.style&&!Cu(e.style[t])?eS:~t.indexOf("-")?tS:zu(e,t)},core:{_removeProperty:lr,_getMatrix:Wu}};wn.utils.checkPrefix=Fs;wn.core.getStyleSaver=hp;(function(r,e,t,n){var i=Tn(r+","+e+","+t,function(s){Bi[s]=1});Tn(e,function(s){Vn.units[s]="deg",_p[s]=1}),mi[i[13]]=r+","+e,Tn(n,function(s){var a=s.split(":");mi[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Tn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Vn.units[r]="px"});wn.registerPlugin(xp);var ci=wn.registerPlugin(xp)||wn;ci.core.Tween;function _S(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function gS(r,e,t){return e&&_S(r.prototype,e),r}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Kt,Uo,Bn,Ji,Qi,ys,Mp,Er,Es,Sp,Li,ii,yp,Ep=function(){return Kt||typeof window<"u"&&(Kt=window.gsap)&&Kt.registerPlugin&&Kt},Tp=1,ps=[],it=[],gi=[],ha=Date.now,ru=function(e,t){return t},vS=function(){var e=Es.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,it),i.push.apply(i,gi),it=n,gi=i,ru=function(a,o){return t[a](o)}},rr=function(e,t){return~gi.indexOf(e)&&gi[gi.indexOf(e)+1][t]},da=function(e){return!!~Sp.indexOf(e)},on=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},an=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ho="scrollLeft",po="scrollTop",su=function(){return Li&&Li.isPressed||it.cache++},Jo=function(e,t){var n=function i(s){if(s||s===0){Tp&&(Bn.history.scrollRestoration="manual");var a=Li&&Li.isPressed;s=i.v=Math.round(s)||(Li&&Li.iOS?1:0),e(s),i.cacheID=it.cache,a&&ru("ss",s)}else(t||it.cache!==i.cacheID||ru("ref"))&&(i.cacheID=it.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},dn={s:ho,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Jo(function(r){return arguments.length?Bn.scrollTo(r,Ht.sc()):Bn.pageXOffset||Ji[ho]||Qi[ho]||ys[ho]||0})},Ht={s:po,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:dn,sc:Jo(function(r){return arguments.length?Bn.scrollTo(dn.sc(),r):Bn.pageYOffset||Ji[po]||Qi[po]||ys[po]||0})},vn=function(e,t){return(t&&t._ctx&&t._ctx.selector||Kt.utils.toArray)(e)[0]||(typeof e=="string"&&Kt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},xS=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},ur=function(e,t){var n=t.s,i=t.sc;da(e)&&(e=Ji.scrollingElement||Qi);var s=it.indexOf(e),a=i===Ht.sc?1:2;!~s&&(s=it.push(e)-1),it[s+a]||on(e,"scroll",su);var o=it[s+a],l=o||(it[s+a]=Jo(rr(e,n),!0)||(da(e)?i:Jo(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=Kt.getProperty(e,"scrollBehavior")==="smooth"),l},au=function(e,t,n){var i=e,s=e,a=ha(),o=a,l=t||50,c=Math.max(500,l*3),u=function(g,_){var m=ha();_||m-a>l?(s=i,i=g,o=a,a=m):n?i+=g:i=s+(g-s)/(m-o)*(a-o)},d=function(){s=i=n?0:i,o=a=0},h=function(g){var _=o,m=s,p=ha();return(g||g===0)&&g!==i&&u(g),a===o||p-o>c?0:(i+(n?m:-m))/((n?p:a)-_)*1e3};return{update:u,reset:d,getVelocity:h}},js=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Ah=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},bp=function(){Es=Kt.core.globals().ScrollTrigger,Es&&Es.core&&vS()},Ap=function(e){return Kt=e||Ep(),!Uo&&Kt&&typeof document<"u"&&document.body&&(Bn=window,Ji=document,Qi=Ji.documentElement,ys=Ji.body,Sp=[Bn,Ji,Qi,ys],Kt.utils.clamp,yp=Kt.core.context||function(){},Er="onpointerenter"in ys?"pointer":"mouse",Mp=Ft.isTouch=Bn.matchMedia&&Bn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Bn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ii=Ft.eventTypes=("ontouchstart"in Qi?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Qi?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Tp=0},500),Uo=1),Es||bp(),Uo};dn.op=Ht;it.cache=0;var Ft=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Uo||Ap(Kt)||console.warn("Please gsap.registerPlugin(Observer)"),Es||bp();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,d=n.onStop,h=n.onStopDelay,f=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,M=n.onDrag,S=n.onPress,v=n.onRelease,P=n.onRight,w=n.onLeft,b=n.onUp,D=n.onDown,y=n.onChangeX,x=n.onChangeY,L=n.onChange,O=n.onToggleX,V=n.onToggleY,q=n.onHover,j=n.onHoverEnd,K=n.onMove,$=n.ignoreCheck,B=n.isNormalizer,se=n.onGestureStart,E=n.onGestureEnd,R=n.onWheel,Q=n.onEnable,le=n.onDisable,N=n.onClick,H=n.scrollSpeed,re=n.capture,Z=n.allowClicks,ae=n.lockAxis,ue=n.onLockAxis;this.target=o=vn(o)||Qi,this.vars=n,f&&(f=Kt.utils.toArray(f)),i=i||1e-9,s=s||0,g=g||1,H=H||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Bn.getComputedStyle(ys).lineHeight)||22);var Me,Pe,be,Ee,I,$e,Ue,k=this,Te=0,Ye=0,we=n.passive||!u&&n.passive!==!1,C=ur(o,dn),T=ur(o,Ht),G=C(),ie=T(),te=~a.indexOf("touch")&&!~a.indexOf("pointer")&&ii[0]==="pointerdown",ee=da(o),me=o.ownerDocument||Ji,de=[0,0,0],_e=[0,0,0],Ge=0,oe=function(){return Ge=ha()},he=function(Ie,Ze){return(k.event=Ie)&&f&&xS(Ie.target,f)||Ze&&te&&Ie.pointerType!=="touch"||$&&$(Ie,Ze)},Oe=function(){k._vx.reset(),k._vy.reset(),Pe.pause(),d&&d(k)},Be=function(){var Ie=k.deltaX=Ah(de),Ze=k.deltaY=Ah(_e),Se=Math.abs(Ie)>=i,We=Math.abs(Ze)>=i;L&&(Se||We)&&L(k,Ie,Ze,de,_e),Se&&(P&&k.deltaX>0&&P(k),w&&k.deltaX<0&&w(k),y&&y(k),O&&k.deltaX<0!=Te<0&&O(k),Te=k.deltaX,de[0]=de[1]=de[2]=0),We&&(D&&k.deltaY>0&&D(k),b&&k.deltaY<0&&b(k),x&&x(k),V&&k.deltaY<0!=Ye<0&&V(k),Ye=k.deltaY,_e[0]=_e[1]=_e[2]=0),(Ee||be)&&(K&&K(k),be&&(m&&be===1&&m(k),M&&M(k),be=0),Ee=!1),$e&&!($e=!1)&&ue&&ue(k),I&&(R(k),I=!1),Me=0},Ce=function(Ie,Ze,Se){de[Se]+=Ie,_e[Se]+=Ze,k._vx.update(Ie),k._vy.update(Ze),c?Me||(Me=requestAnimationFrame(Be)):Be()},Ke=function(Ie,Ze){ae&&!Ue&&(k.axis=Ue=Math.abs(Ie)>Math.abs(Ze)?"x":"y",$e=!0),Ue!=="y"&&(de[2]+=Ie,k._vx.update(Ie,!0)),Ue!=="x"&&(_e[2]+=Ze,k._vy.update(Ze,!0)),c?Me||(Me=requestAnimationFrame(Be)):Be()},ze=function(Ie){if(!he(Ie,1)){Ie=js(Ie,u);var Ze=Ie.clientX,Se=Ie.clientY,We=Ze-k.x,Ne=Se-k.y,He=k.isDragging;k.x=Ze,k.y=Se,(He||(We||Ne)&&(Math.abs(k.startX-Ze)>=s||Math.abs(k.startY-Se)>=s))&&(be||(be=He?2:1),He||(k.isDragging=!0),Ke(We,Ne))}},st=k.onPress=function(Ae){he(Ae,1)||Ae&&Ae.button||(k.axis=Ue=null,Pe.pause(),k.isPressed=!0,Ae=js(Ae),Te=Ye=0,k.startX=k.x=Ae.clientX,k.startY=k.y=Ae.clientY,k._vx.reset(),k._vy.reset(),on(B?o:me,ii[1],ze,we,!0),k.deltaX=k.deltaY=0,S&&S(k))},U=k.onRelease=function(Ae){if(!he(Ae,1)){an(B?o:me,ii[1],ze,!0);var Ie=!isNaN(k.y-k.startY),Ze=k.isDragging,Se=Ze&&(Math.abs(k.x-k.startX)>3||Math.abs(k.y-k.startY)>3),We=js(Ae);!Se&&Ie&&(k._vx.reset(),k._vy.reset(),u&&Z&&Kt.delayedCall(.08,function(){if(ha()-Ge>300&&!Ae.defaultPrevented){if(Ae.target.click)Ae.target.click();else if(me.createEvent){var Ne=me.createEvent("MouseEvents");Ne.initMouseEvent("click",!0,!0,Bn,1,We.screenX,We.screenY,We.clientX,We.clientY,!1,!1,!1,!1,0,null),Ae.target.dispatchEvent(Ne)}}})),k.isDragging=k.isGesturing=k.isPressed=!1,d&&Ze&&!B&&Pe.restart(!0),be&&Be(),p&&Ze&&p(k),v&&v(k,Se)}},ge=function(Ie){return Ie.touches&&Ie.touches.length>1&&(k.isGesturing=!0)&&se(Ie,k.isDragging)},J=function(){return(k.isGesturing=!1)||E(k)},ne=function(Ie){if(!he(Ie)){var Ze=C(),Se=T();Ce((Ze-G)*H,(Se-ie)*H,1),G=Ze,ie=Se,d&&Pe.restart(!0)}},pe=function(Ie){if(!he(Ie)){Ie=js(Ie,u),R&&(I=!0);var Ze=(Ie.deltaMode===1?l:Ie.deltaMode===2?Bn.innerHeight:1)*g;Ce(Ie.deltaX*Ze,Ie.deltaY*Ze,0),d&&!B&&Pe.restart(!0)}},ve=function(Ie){if(!he(Ie)){var Ze=Ie.clientX,Se=Ie.clientY,We=Ze-k.x,Ne=Se-k.y;k.x=Ze,k.y=Se,Ee=!0,d&&Pe.restart(!0),(We||Ne)&&Ke(We,Ne)}},ke=function(Ie){k.event=Ie,q(k)},lt=function(Ie){k.event=Ie,j(k)},Pt=function(Ie){return he(Ie)||js(Ie,u)&&N(k)};Pe=k._dc=Kt.delayedCall(h||.25,Oe).pause(),k.deltaX=k.deltaY=0,k._vx=au(0,50,!0),k._vy=au(0,50,!0),k.scrollX=C,k.scrollY=T,k.isDragging=k.isGesturing=k.isPressed=!1,yp(this),k.enable=function(Ae){return k.isEnabled||(on(ee?me:o,"scroll",su),a.indexOf("scroll")>=0&&on(ee?me:o,"scroll",ne,we,re),a.indexOf("wheel")>=0&&on(o,"wheel",pe,we,re),(a.indexOf("touch")>=0&&Mp||a.indexOf("pointer")>=0)&&(on(o,ii[0],st,we,re),on(me,ii[2],U),on(me,ii[3],U),Z&&on(o,"click",oe,!0,!0),N&&on(o,"click",Pt),se&&on(me,"gesturestart",ge),E&&on(me,"gestureend",J),q&&on(o,Er+"enter",ke),j&&on(o,Er+"leave",lt),K&&on(o,Er+"move",ve)),k.isEnabled=!0,k.isDragging=k.isGesturing=k.isPressed=Ee=be=!1,k._vx.reset(),k._vy.reset(),G=C(),ie=T(),Ae&&Ae.type&&st(Ae),Q&&Q(k)),k},k.disable=function(){k.isEnabled&&(ps.filter(function(Ae){return Ae!==k&&da(Ae.target)}).length||an(ee?me:o,"scroll",su),k.isPressed&&(k._vx.reset(),k._vy.reset(),an(B?o:me,ii[1],ze,!0)),an(ee?me:o,"scroll",ne,re),an(o,"wheel",pe,re),an(o,ii[0],st,re),an(me,ii[2],U),an(me,ii[3],U),an(o,"click",oe,!0),an(o,"click",Pt),an(me,"gesturestart",ge),an(me,"gestureend",J),an(o,Er+"enter",ke),an(o,Er+"leave",lt),an(o,Er+"move",ve),k.isEnabled=k.isPressed=k.isDragging=!1,le&&le(k))},k.kill=k.revert=function(){k.disable();var Ae=ps.indexOf(k);Ae>=0&&ps.splice(Ae,1),Li===k&&(Li=0)},ps.push(k),B&&da(o)&&(Li=k),k.enable(_)},gS(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Ft.version="3.15.0";Ft.create=function(r){return new Ft(r)};Ft.register=Ap;Ft.getAll=function(){return ps.slice()};Ft.getById=function(r){return ps.filter(function(e){return e.vars.id===r})[0]};Ep()&&Kt.registerPlugin(Ft);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var De,cs,nt,_t,Fn,pt,Xu,Qo,Pa,pa,ia,mo,Qt,cl,ou,un,wh,Ch,us,wp,Kl,Cp,cn,lu,Rp,Pp,qi,cu,Yu,Ts,qu,ma,uu,Zl,_o=1,en=Date.now,jl=en(),Jn=0,ra=0,Rh=function(e,t,n){var i=In(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Ph=function(e,t){return t&&(!In(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},MS=function r(){return ra&&requestAnimationFrame(r)},Dh=function(){return cl=1},Lh=function(){return cl=0},fi=function(e){return e},sa=function(e){return Math.round(e*1e5)/1e5||0},Dp=function(){return typeof window<"u"},Lp=function(){return De||Dp()&&(De=window.gsap)&&De.registerPlugin&&De},kr=function(e){return!!~Xu.indexOf(e)},Ip=function(e){return(e==="Height"?qu:nt["inner"+e])||Fn["client"+e]||pt["client"+e]},Up=function(e){return rr(e,"getBoundingClientRect")||(kr(e)?function(){return zo.width=nt.innerWidth,zo.height=qu,zo}:function(){return Ri(e)})},SS=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=rr(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?Ip(s):e["client"+s])||0}},yS=function(e,t){return!t||~gi.indexOf(e)?Up(e):function(){return zo}},_i=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=rr(e,n))?a()-Up(e)()[s]:kr(e)?(Fn[n]||pt[n])-Ip(i):e[n]-e["offset"+i])},go=function(e,t){for(var n=0;n<us.length;n+=3)(!t||~t.indexOf(us[n+1]))&&e(us[n],us[n+1],us[n+2])},In=function(e){return typeof e=="string"},nn=function(e){return typeof e=="function"},aa=function(e){return typeof e=="number"},Tr=function(e){return typeof e=="object"},Js=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},as=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},os=Math.abs,Np="left",Fp="top",$u="right",Ku="bottom",Nr="width",Fr="height",_a="Right",ga="Left",va="Top",xa="Bottom",Bt="padding",$n="margin",Os="Width",Zu="Height",Vt="px",Kn=function(e){return nt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},ES=function(e){var t=Kn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Ih=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ri=function(e,t){var n=t&&Kn(e)[ou]!=="matrix(1, 0, 0, 1, 0, 0)"&&De.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},el=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Op=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},TS=function(e){return function(t){return De.utils.snap(Op(e),t)}},ju=function(e){var t=De.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},bS=function(e){return function(t,n){return ju(Op(e))(t,n.direction)}},vo=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},qt=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Yt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},xo=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Uh={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Mo={toggleActions:"play",anticipatePin:0},tl={top:0,left:0,center:.5,bottom:1,right:1},No=function(e,t){if(In(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in tl?tl[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},So=function(e,t,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,d=s.fontSize,h=s.indent,f=s.fontWeight,g=_t.createElement("div"),_=kr(n)||rr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?pt:n.tagName==="IFRAME"?n.contentDocument.body:n,M=e.indexOf("start")!==-1,S=M?c:u,v="border-color:"+S+";font-size:"+d+";color:"+S+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(v+=(i===Ht?$u:Ku)+":"+(a+parseFloat(h))+"px;"),o&&(v+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=M,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=v,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],Fo(g,0,i,M),g},Fo=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+Os]=1,s["border"+o+Os]=0,s[n.p]=t+"px",De.set(e,s)},Qe=[],fu={},Da,Nh=function(){return en()-Jn>34&&(Da||(Da=requestAnimationFrame(Ui)))},ls=function(){(!cn||!cn.isPressed||cn.startX>pt.clientWidth)&&(it.cache++,cn?Da||(Da=requestAnimationFrame(Ui)):Ui(),Jn||Hr("scrollStart"),Jn=en())},Jl=function(){Pp=nt.innerWidth,Rp=nt.innerHeight},oa=function(e){it.cache++,(e===!0||!Qt&&!Cp&&!_t.fullscreenElement&&!_t.webkitFullscreenElement&&(!lu||Pp!==nt.innerWidth||Math.abs(nt.innerHeight-Rp)>nt.innerHeight*.25))&&Qo.restart(!0)},Vr={},AS=[],Bp=function r(){return Yt(et,"scrollEnd",r)||Pr(!0)},Hr=function(e){return Vr[e]&&Vr[e].map(function(t){return t()})||AS},Ln=[],zp=function(e){for(var t=0;t<Ln.length;t+=5)(!e||Ln[t+4]&&Ln[t+4].query===e)&&(Ln[t].style.cssText=Ln[t+1],Ln[t].getBBox&&Ln[t].setAttribute("transform",Ln[t+2]||""),Ln[t+3].uncache=1)},kp=function(){return it.forEach(function(e){return nn(e)&&++e.cacheID&&(e.rec=e())})},Ju=function(e,t){var n;for(un=0;un<Qe.length;un++)n=Qe[un],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));ma=!0,t&&zp(t),t||Hr("revert")},Vp=function(e,t){it.cache++,(t||!fn)&&it.forEach(function(n){return nn(n)&&n.cacheID++&&(n.rec=0)}),In(e)&&(nt.history.scrollRestoration=Yu=e)},fn,Or=0,Fh,wS=function(){if(Fh!==Or){var e=Fh=Or;requestAnimationFrame(function(){return e===Or&&Pr(!0)})}},Hp=function(){pt.appendChild(Ts),qu=!cn&&Ts.offsetHeight||nt.innerHeight,pt.removeChild(Ts)},Oh=function(e){return Pa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Pr=function(e,t){if(Fn=_t.documentElement,pt=_t.body,Xu=[nt,_t,Fn,pt],Jn&&!e&&!ma){qt(et,"scrollEnd",Bp);return}Hp(),fn=et.isRefreshing=!0,ma||kp();var n=Hr("refreshInit");wp&&et.sort(),t||Ju(),it.forEach(function(i){nn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Qe.slice(0).forEach(function(i){return i.refresh()}),ma=!1,Qe.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),uu=1,Oh(!0),Qe.forEach(function(i){var s=_i(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),Oh(!1),uu=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),it.forEach(function(i){nn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Vp(Yu,1),Qo.pause(),Or++,fn=2,Ui(2),Qe.forEach(function(i){return nn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),fn=et.isRefreshing=!1,Hr("refresh")},hu=0,Oo=1,Ma,Ui=function(e){if(e===2||!fn&&!ma){et.isUpdating=!0,Ma&&Ma.update(0);var t=Qe.length,n=en(),i=n-jl>=50,s=t&&Qe[0].scroll();if(Oo=hu>s?-1:1,fn||(hu=s),i&&(Jn&&!cl&&n-Jn>200&&(Jn=0,Hr("scrollEnd")),ia=jl,jl=n),Oo<0){for(un=t;un-- >0;)Qe[un]&&Qe[un].update(0,i);Oo=1}else for(un=0;un<t;un++)Qe[un]&&Qe[un].update(0,i);et.isUpdating=!1}Da=0},du=[Np,Fp,Ku,$u,$n+xa,$n+_a,$n+va,$n+ga,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Bo=du.concat([Nr,Fr,"boxSizing","max"+Os,"max"+Zu,"position",$n,Bt,Bt+va,Bt+_a,Bt+xa,Bt+ga]),CS=function(e,t,n){bs(n);var i=e._gsap;if(i.spacerIsNative)bs(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Ql=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=du.length,a=t.style,o=e.style,l;s--;)l=du[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Ku]=o[$u]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Nr]=el(e,dn)+Vt,a[Fr]=el(e,Ht)+Vt,a[Bt]=o[$n]=o[Fp]=o[Np]="0",bs(i),o[Nr]=o["max"+Os]=n[Nr],o[Fr]=o["max"+Zu]=n[Fr],o[Bt]=n[Bt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},RS=/([A-Z])/g,bs=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||De.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(RS,"-$1").toLowerCase())}},yo=function(e){for(var t=Bo.length,n=e.style,i=[],s=0;s<t;s++)i.push(Bo[s],n[Bo[s]]);return i.t=e,i},PS=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},zo={left:0,top:0},Bh=function(e,t,n,i,s,a,o,l,c,u,d,h,f,g){nn(e)&&(e=e(l)),In(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?No("0"+e.substr(3),n):0));var _=f?f.time():0,m,p,M;if(f&&f.seek(0),isNaN(e)||(e=+e),aa(e))f&&(e=De.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,h,e)),o&&Fo(o,n,i,!0);else{nn(t)&&(t=t(l));var S=(e||"0").split(" "),v,P,w,b;M=vn(t,l)||pt,v=Ri(M)||{},(!v||!v.left&&!v.top)&&Kn(M).display==="none"&&(b=M.style.display,M.style.display="block",v=Ri(M),b?M.style.display=b:M.style.removeProperty("display")),P=No(S[0],v[i.d]),w=No(S[1]||"0",n),e=v[i.p]-c[i.p]-u+P+s-w,o&&Fo(o,w,i,n-w<20||o._isStart&&w>20),n-=n-w}if(g&&(l[g]=e||-.001,e<0&&(e=0)),a){var D=e+n,y=a._isStart;m="scroll"+i.d2,Fo(a,D,i,y&&D>20||!y&&(d?Math.max(pt[m],Fn[m]):a.parentNode[m])<=D+1),d&&(c=Ri(o),d&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+Vt))}return f&&M&&(m=Ri(M),f.seek(h),p=Ri(M),f._caScrollDist=m[i.p]-p[i.p],e=e/f._caScrollDist*h),f&&f.seek(_),f?e:Math.round(e)},DS=/(webkit|moz|length|cssText|inset)/i,zh=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===pt){e._stOrig=s.cssText,o=Kn(e);for(a in o)!+a&&!DS.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;De.core.getCache(e).uncache=1,t.appendChild(e)}},Gp=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},Eo=function(e,t,n){var i={};i[t.p]="+="+n,De.set(e,i)},kh=function(e,t){var n=ur(e,t),i="_scroll"+t.p2,s=function a(o,l,c,u,d){var h=a.tween,f=l.onComplete,g={};c=c||n();var _=Gp(n,c,function(){h.kill(),a.tween=0});return d=u&&d||0,u=u||o-c,h&&h.kill(),l[i]=o,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*h.ratio+d*h.ratio*h.ratio)},l.onUpdate=function(){it.cache++,a.tween&&Ui()},l.onComplete=function(){a.tween=0,f&&f.call(h)},h=a.tween=De.to(e,l),h};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},qt(e,"wheel",n.wheelHandler),et.isTouch&&qt(e,"touchmove",n.wheelHandler),s},et=function(){function r(t,n){cs||r.register(De)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),cu(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ra){this.update=this.refresh=this.kill=fi;return}n=Ih(In(n)||aa(n)||n.nodeType?{trigger:n}:n,Mo);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,d=s.scrub,h=s.trigger,f=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,M=s.onSnapComplete,S=s.once,v=s.snap,P=s.pinReparent,w=s.pinSpacer,b=s.containerAnimation,D=s.fastScrollEnd,y=s.preventOverlaps,x=n.horizontal||n.containerAnimation&&n.horizontal!==!1?dn:Ht,L=!d&&d!==0,O=vn(n.scroller||nt),V=De.core.getCache(O),q=kr(O),j=("pinType"in n?n.pinType:rr(O,"pinType")||q&&"fixed")==="fixed",K=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],$=L&&n.toggleActions.split(" "),B="markers"in n?n.markers:Mo.markers,se=q?0:parseFloat(Kn(O)["border"+x.p2+Os])||0,E=this,R=n.onRefreshInit&&function(){return n.onRefreshInit(E)},Q=SS(O,q,x),le=yS(O,q),N=0,H=0,re=0,Z=ur(O,x),ae,ue,Me,Pe,be,Ee,I,$e,Ue,k,Te,Ye,we,C,T,G,ie,te,ee,me,de,_e,Ge,oe,he,Oe,Be,Ce,Ke,ze,st,U,ge,J,ne,pe,ve,ke,lt;if(E._startClamp=E._endClamp=!1,E._dir=x,m*=45,E.scroller=O,E.scroll=b?b.time.bind(b):Z,Pe=Z(),E.vars=n,i=i||n.animation,"refreshPriority"in n&&(wp=1,n.refreshPriority===-9999&&(Ma=E)),V.tweenScroll=V.tweenScroll||{top:kh(O,Ht),left:kh(O,dn)},E.tweenTo=ae=V.tweenScroll[x.p],E.scrubDuration=function(Se){ge=aa(Se)&&Se,ge?U?U.duration(Se):U=De.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ge,paused:!0,onComplete:function(){return p&&p(E)}}):(U&&U.progress(1).kill(),U=0)},i&&(i.vars.lazy=!1,i._initted&&!E.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),E.animation=i.pause(),i.scrollTrigger=E,E.scrubDuration(d),ze=0,l||(l=i.vars.id)),v&&((!Tr(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in pt.style&&De.set(q?[pt,Fn]:O,{scrollBehavior:"auto"}),it.forEach(function(Se){return nn(Se)&&Se.target===(q?_t.scrollingElement||Fn:O)&&(Se.smooth=!1)}),Me=nn(v.snapTo)?v.snapTo:v.snapTo==="labels"?TS(i):v.snapTo==="labelsDirectional"?bS(i):v.directional!==!1?function(Se,We){return ju(v.snapTo)(Se,en()-H<500?0:We.direction)}:De.utils.snap(v.snapTo),J=v.duration||{min:.1,max:2},J=Tr(J)?pa(J.min,J.max):pa(J,J),ne=De.delayedCall(v.delay||ge/2||.1,function(){var Se=Z(),We=en()-H<500,Ne=ae.tween;if((We||Math.abs(E.getVelocity())<10)&&!Ne&&!cl&&N!==Se){var He=(Se-Ee)/C,It=i&&!L?i.totalProgress():He,tt=We?0:(It-st)/(en()-ia)*1e3||0,yt=De.utils.clamp(-He,1-He,os(tt/2)*tt/.185),kt=He+(v.inertia===!1?0:yt),vt,xt,ut=v,Cn=ut.onStart,Et=ut.onInterrupt,sn=ut.onComplete;if(vt=Me(kt,E),aa(vt)||(vt=kt),xt=Math.max(0,Math.round(Ee+vt*C)),Se<=I&&Se>=Ee&&xt!==Se){if(Ne&&!Ne._initted&&Ne.data<=os(xt-Se))return;v.inertia===!1&&(yt=vt-He),ae(xt,{duration:J(os(Math.max(os(kt-It),os(vt-It))*.185/tt/.05||0)),ease:v.ease||"power3",data:os(xt-Se),onInterrupt:function(){return ne.restart(!0)&&Et&&as(E,Et)},onComplete:function(){E.update(),N=Z(),i&&!L&&(U?U.resetTo("totalProgress",vt,i._tTime/i._tDur):i.progress(vt)),ze=st=i&&!L?i.totalProgress():E.progress,M&&M(E),sn&&as(E,sn)}},Se,yt*C,xt-Se-yt*C),Cn&&as(E,Cn,ae.tween)}}else E.isActive&&N!==Se&&ne.restart(!0)}).pause()),l&&(fu[l]=E),h=E.trigger=vn(h||f!==!0&&f),lt=h&&h._gsap&&h._gsap.stRevert,lt&&(lt=lt(E)),f=f===!0?h:vn(f),In(o)&&(o={targets:h,className:o}),f&&(g===!1||g===$n||(g=!g&&f.parentNode&&f.parentNode.style&&Kn(f.parentNode).display==="flex"?!1:Bt),E.pin=f,ue=De.core.getCache(f),ue.spacer?T=ue.pinState:(w&&(w=vn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),ue.spacerIsNative=!!w,w&&(ue.spacerState=yo(w))),ue.spacer=te=w||_t.createElement("div"),te.classList.add("pin-spacer"),l&&te.classList.add("pin-spacer-"+l),ue.pinState=T=yo(f)),n.force3D!==!1&&De.set(f,{force3D:!0}),E.spacer=te=ue.spacer,Ke=Kn(f),oe=Ke[g+x.os2],me=De.getProperty(f),de=De.quickSetter(f,x.a,Vt),Ql(f,te,Ke),ie=yo(f)),B){Ye=Tr(B)?Ih(B,Uh):Uh,k=So("scroller-start",l,O,x,Ye,0),Te=So("scroller-end",l,O,x,Ye,0,k),ee=k["offset"+x.op.d2];var Pt=vn(rr(O,"content")||O);$e=this.markerStart=So("start",l,Pt,x,Ye,ee,0,b),Ue=this.markerEnd=So("end",l,Pt,x,Ye,ee,0,b),b&&(ke=De.quickSetter([$e,Ue],x.a,Vt)),!j&&!(gi.length&&rr(O,"fixedMarkers")===!0)&&(ES(q?pt:O),De.set([k,Te],{force3D:!0}),Oe=De.quickSetter(k,x.a,Vt),Ce=De.quickSetter(Te,x.a,Vt))}if(b){var Ae=b.vars.onUpdate,Ie=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){E.update(0,0,1),Ae&&Ae.apply(b,Ie||[])})}if(E.previous=function(){return Qe[Qe.indexOf(E)-1]},E.next=function(){return Qe[Qe.indexOf(E)+1]},E.revert=function(Se,We){if(!We)return E.kill(!0);var Ne=Se!==!1||!E.enabled,He=Qt;Ne!==E.isReverted&&(Ne&&(pe=Math.max(Z(),E.scroll.rec||0),re=E.progress,ve=i&&i.progress()),$e&&[$e,Ue,k,Te].forEach(function(It){return It.style.display=Ne?"none":"block"}),Ne&&(Qt=E,E.update(Ne)),f&&(!P||!E.isActive)&&(Ne?CS(f,te,T):Ql(f,te,Kn(f),he)),Ne||E.update(Ne),Qt=He,E.isReverted=Ne)},E.refresh=function(Se,We,Ne,He){if(!((Qt||!E.enabled)&&!We)){if(f&&Se&&Jn){qt(r,"scrollEnd",Bp);return}!fn&&R&&R(E),Qt=E,ae.tween&&!Ne&&(ae.tween.kill(),ae.tween=0),U&&U.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(At){return At.vars.immediateRender&&At.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),E.isReverted||E.revert(!0,!0),E._subPinOffset=!1;var It=Q(),tt=le(),yt=b?b.duration():_i(O,x),kt=C<=.01||!C,vt=0,xt=He||0,ut=Tr(Ne)?Ne.end:n.end,Cn=n.endTrigger||h,Et=Tr(Ne)?Ne.start:n.start||(n.start===0||!h?0:f?"0 0":"0 100%"),sn=E.pinnedContainer=n.pinnedContainer&&vn(n.pinnedContainer,E),A=h&&Math.max(0,Qe.indexOf(E))||0,F=A,W,X,z,ce,fe,xe,Re,Ve,Xe,Le,qe,ct,ft;for(B&&Tr(Ne)&&(ct=De.getProperty(k,x.p),ft=De.getProperty(Te,x.p));F-- >0;)xe=Qe[F],xe.end||xe.refresh(0,1)||(Qt=E),Re=xe.pin,Re&&(Re===h||Re===f||Re===sn)&&!xe.isReverted&&(Le||(Le=[]),Le.unshift(xe),xe.revert(!0,!0)),xe!==Qe[F]&&(A--,F--);for(nn(Et)&&(Et=Et(E)),Et=Rh(Et,"start",E),Ee=Bh(Et,h,It,x,Z(),$e,k,E,tt,se,j,yt,b,E._startClamp&&"_startClamp")||(f?-.001:0),nn(ut)&&(ut=ut(E)),In(ut)&&!ut.indexOf("+=")&&(~ut.indexOf(" ")?ut=(In(Et)?Et.split(" ")[0]:"")+ut:(vt=No(ut.substr(2),It),ut=In(Et)?Et:(b?De.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,Ee):Ee)+vt,Cn=h)),ut=Rh(ut,"end",E),I=Math.max(Ee,Bh(ut||(Cn?"100% 0":yt),Cn,It,x,Z()+vt,Ue,Te,E,tt,se,j,yt,b,E._endClamp&&"_endClamp"))||-.001,vt=0,F=A;F--;)xe=Qe[F]||{},Re=xe.pin,Re&&xe.start-xe._pinPush<=Ee&&!b&&xe.end>0&&(W=xe.end-(E._startClamp?Math.max(0,xe.start):xe.start),(Re===h&&xe.start-xe._pinPush<Ee||Re===sn)&&isNaN(Et)&&(vt+=W*(1-xe.progress)),Re===f&&(xt+=W));if(Ee+=vt,I+=vt,E._startClamp&&(E._startClamp+=vt),E._endClamp&&!fn&&(E._endClamp=I||-.001,I=Math.min(I,_i(O,x))),C=I-Ee||(Ee-=.01)&&.001,kt&&(re=De.utils.clamp(0,1,De.utils.normalize(Ee,I,pe))),E._pinPush=xt,$e&&vt&&(W={},W[x.a]="+="+vt,sn&&(W[x.p]="-="+Z()),De.set([$e,Ue],W)),f&&!(uu&&E.end>=_i(O,x)))W=Kn(f),ce=x===Ht,z=Z(),_e=parseFloat(me(x.a))+xt,!yt&&I>1&&(qe=(q?_t.scrollingElement||Fn:O).style,qe={style:qe,value:qe["overflow"+x.a.toUpperCase()]},q&&Kn(pt)["overflow"+x.a.toUpperCase()]!=="scroll"&&(qe.style["overflow"+x.a.toUpperCase()]="scroll")),Ql(f,te,W),ie=yo(f),X=Ri(f,!0),Ve=j&&ur(O,ce?dn:Ht)(),g?(he=[g+x.os2,C+xt+Vt],he.t=te,F=g===Bt?el(f,x)+C+xt:0,F&&(he.push(x.d,F+Vt),te.style.flexBasis!=="auto"&&(te.style.flexBasis=F+Vt)),bs(he),sn&&Qe.forEach(function(At){At.pin===sn&&At.vars.pinSpacing!==!1&&(At._subPinOffset=!0)}),j&&Z(pe)):(F=el(f,x),F&&te.style.flexBasis!=="auto"&&(te.style.flexBasis=F+Vt)),j&&(fe={top:X.top+(ce?z-Ee:Ve)+Vt,left:X.left+(ce?Ve:z-Ee)+Vt,boxSizing:"border-box",position:"fixed"},fe[Nr]=fe["max"+Os]=Math.ceil(X.width)+Vt,fe[Fr]=fe["max"+Zu]=Math.ceil(X.height)+Vt,fe[$n]=fe[$n+va]=fe[$n+_a]=fe[$n+xa]=fe[$n+ga]="0",fe[Bt]=W[Bt],fe[Bt+va]=W[Bt+va],fe[Bt+_a]=W[Bt+_a],fe[Bt+xa]=W[Bt+xa],fe[Bt+ga]=W[Bt+ga],G=PS(T,fe,P),fn&&Z(0)),i?(Xe=i._initted,Kl(1),i.render(i.duration(),!0,!0),Ge=me(x.a)-_e+C+xt,Be=Math.abs(C-Ge)>1,j&&Be&&G.splice(G.length-2,2),i.render(0,!0,!0),Xe||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Kl(0)):Ge=C,qe&&(qe.value?qe.style["overflow"+x.a.toUpperCase()]=qe.value:qe.style.removeProperty("overflow-"+x.a));else if(h&&Z()&&!b)for(X=h.parentNode;X&&X!==pt;)X._pinOffset&&(Ee-=X._pinOffset,I-=X._pinOffset),X=X.parentNode;Le&&Le.forEach(function(At){return At.revert(!1,!0)}),E.start=Ee,E.end=I,Pe=be=fn?pe:Z(),!b&&!fn&&(Pe<pe&&Z(pe),E.scroll.rec=0),E.revert(!1,!0),H=en(),ne&&(N=-1,ne.restart(!0)),Qt=0,i&&L&&(i._initted||ve)&&i.progress()!==ve&&i.progress(ve||0,!0).render(i.time(),!0,!0),(kt||re!==E.progress||b||_||i&&!i._initted)&&(i&&!L&&(i._initted||re||i.vars.immediateRender!==!1)&&i.totalProgress(b&&Ee<-.001&&!re?De.utils.normalize(Ee,I,0):re,!0),E.progress=kt||(Pe-Ee)/C===re?0:re),f&&g&&(te._pinOffset=Math.round(E.progress*Ge)),U&&U.invalidate(),isNaN(ct)||(ct-=De.getProperty(k,x.p),ft-=De.getProperty(Te,x.p),Eo(k,x,ct),Eo($e,x,ct-(He||0)),Eo(Te,x,ft),Eo(Ue,x,ft-(He||0))),kt&&!fn&&E.update(),u&&!fn&&!we&&(we=!0,u(E),we=!1)}},E.getVelocity=function(){return(Z()-be)/(en()-ia)*1e3||0},E.endAnimation=function(){Js(E.callbackAnimation),i&&(U?U.progress(1):i.paused()?L||Js(i,E.direction<0,1):Js(i,i.reversed()))},E.labelToScroll=function(Se){return i&&i.labels&&(Ee||E.refresh()||Ee)+i.labels[Se]/i.duration()*C||0},E.getTrailing=function(Se){var We=Qe.indexOf(E),Ne=E.direction>0?Qe.slice(0,We).reverse():Qe.slice(We+1);return(In(Se)?Ne.filter(function(He){return He.vars.preventOverlaps===Se}):Ne).filter(function(He){return E.direction>0?He.end<=Ee:He.start>=I})},E.update=function(Se,We,Ne){if(!(b&&!Ne&&!Se)){var He=fn===!0?pe:E.scroll(),It=Se?0:(He-Ee)/C,tt=It<0?0:It>1?1:It||0,yt=E.progress,kt,vt,xt,ut,Cn,Et,sn,A;if(We&&(be=Pe,Pe=b?Z():He,v&&(st=ze,ze=i&&!L?i.totalProgress():tt)),m&&f&&!Qt&&!_o&&Jn&&(!tt&&Ee<He+(He-be)/(en()-ia)*m?tt=1e-4:tt===1&&I>He+(He-be)/(en()-ia)*m&&(tt=.9999)),tt!==yt&&E.enabled){if(kt=E.isActive=!!tt&&tt<1,vt=!!yt&&yt<1,Et=kt!==vt,Cn=Et||!!tt!=!!yt,E.direction=tt>yt?1:-1,E.progress=tt,Cn&&!Qt&&(xt=tt&&!yt?0:tt===1?1:yt===1?2:3,L&&(ut=!Et&&$[xt+1]!=="none"&&$[xt+1]||$[xt],A=i&&(ut==="complete"||ut==="reset"||ut in i))),y&&(Et||A)&&(A||d||!i)&&(nn(y)?y(E):E.getTrailing(y).forEach(function(z){return z.endAnimation()})),L||(U&&!Qt&&!_o?(U._dp._time-U._start!==U._time&&U.render(U._dp._time-U._start),U.resetTo?U.resetTo("totalProgress",tt,i._tTime/i._tDur):(U.vars.totalProgress=tt,U.invalidate().restart())):i&&i.totalProgress(tt,!!(Qt&&(H||Se)))),f){if(Se&&g&&(te.style[g+x.os2]=oe),!j)de(sa(_e+Ge*tt));else if(Cn){if(sn=!Se&&tt>yt&&I+1>He&&He+1>=_i(O,x),P)if(!Se&&(kt||sn)){var F=Ri(f,!0),W=He-Ee;zh(f,pt,F.top+(x===Ht?W:0)+Vt,F.left+(x===Ht?0:W)+Vt)}else zh(f,te);bs(kt||sn?G:ie),Be&&tt<1&&kt||de(_e+(tt===1&&!sn?Ge:0))}}v&&!ae.tween&&!Qt&&!_o&&ne.restart(!0),o&&(Et||S&&tt&&(tt<1||!Zl))&&Pa(o.targets).forEach(function(z){return z.classList[kt||S?"add":"remove"](o.className)}),a&&!L&&!Se&&a(E),Cn&&!Qt?(L&&(A&&(ut==="complete"?i.pause().totalProgress(1):ut==="reset"?i.restart(!0).pause():ut==="restart"?i.restart(!0):i[ut]()),a&&a(E)),(Et||!Zl)&&(c&&Et&&as(E,c),K[xt]&&as(E,K[xt]),S&&(tt===1?E.kill(!1,1):K[xt]=0),Et||(xt=tt===1?1:3,K[xt]&&as(E,K[xt]))),D&&!kt&&Math.abs(E.getVelocity())>(aa(D)?D:2500)&&(Js(E.callbackAnimation),U?U.progress(1):Js(i,ut==="reverse"?1:!tt,1))):L&&a&&!Qt&&a(E)}if(Ce){var X=b?He/b.duration()*(b._caScrollDist||0):He;Oe(X+(k._isFlipped?1:0)),Ce(X)}ke&&ke(-He/b.duration()*(b._caScrollDist||0))}},E.enable=function(Se,We){E.enabled||(E.enabled=!0,qt(O,"resize",oa),q||qt(O,"scroll",ls),R&&qt(r,"refreshInit",R),Se!==!1&&(E.progress=re=0,Pe=be=N=Z()),We!==!1&&E.refresh())},E.getTween=function(Se){return Se&&ae?ae.tween:U},E.setPositions=function(Se,We,Ne,He){if(b){var It=b.scrollTrigger,tt=b.duration(),yt=It.end-It.start;Se=It.start+yt*Se/tt,We=It.start+yt*We/tt}E.refresh(!1,!1,{start:Ph(Se,Ne&&!!E._startClamp),end:Ph(We,Ne&&!!E._endClamp)},He),E.update()},E.adjustPinSpacing=function(Se){if(he&&Se){var We=he.indexOf(x.d)+1;he[We]=parseFloat(he[We])+Se+Vt,he[1]=parseFloat(he[1])+Se+Vt,bs(he)}},E.disable=function(Se,We){if(Se!==!1&&E.revert(!0,!0),E.enabled&&(E.enabled=E.isActive=!1,We||U&&U.pause(),pe=0,ue&&(ue.uncache=1),R&&Yt(r,"refreshInit",R),ne&&(ne.pause(),ae.tween&&ae.tween.kill()&&(ae.tween=0)),!q)){for(var Ne=Qe.length;Ne--;)if(Qe[Ne].scroller===O&&Qe[Ne]!==E)return;Yt(O,"resize",oa),q||Yt(O,"scroll",ls)}},E.kill=function(Se,We){E.disable(Se,We),U&&!We&&U.kill(),l&&delete fu[l];var Ne=Qe.indexOf(E);Ne>=0&&Qe.splice(Ne,1),Ne===un&&Oo>0&&un--,Ne=0,Qe.forEach(function(He){return He.scroller===E.scroller&&(Ne=1)}),Ne||fn||(E.scroll.rec=0),i&&(i.scrollTrigger=null,Se&&i.revert({kill:!1}),We||i.kill()),$e&&[$e,Ue,k,Te].forEach(function(He){return He.parentNode&&He.parentNode.removeChild(He)}),Ma===E&&(Ma=0),f&&(ue&&(ue.uncache=1),Ne=0,Qe.forEach(function(He){return He.pin===f&&Ne++}),Ne||(ue.spacer=0)),n.onKill&&n.onKill(E)},Qe.push(E),E.enable(!1,!1),lt&&lt(E),i&&i.add&&!C){var Ze=E.update;E.update=function(){E.update=Ze,it.cache++,Ee||I||E.refresh()},De.delayedCall(.01,E.update),C=.01,Ee=I=0}else E.refresh();f&&wS()},r.register=function(n){return cs||(De=n||Lp(),Dp()&&window.document&&r.enable(),cs=ra),cs},r.defaults=function(n){if(n)for(var i in n)Mo[i]=n[i];return Mo},r.disable=function(n,i){ra=0,Qe.forEach(function(a){return a[i?"kill":"disable"](n)}),Yt(nt,"wheel",ls),Yt(_t,"scroll",ls),clearInterval(mo),Yt(_t,"touchcancel",fi),Yt(pt,"touchstart",fi),vo(Yt,_t,"pointerdown,touchstart,mousedown",Dh),vo(Yt,_t,"pointerup,touchend,mouseup",Lh),Qo.kill(),go(Yt);for(var s=0;s<it.length;s+=3)xo(Yt,it[s],it[s+1]),xo(Yt,it[s],it[s+2])},r.enable=function(){if(nt=window,_t=document,Fn=_t.documentElement,pt=_t.body,De){if(Pa=De.utils.toArray,pa=De.utils.clamp,cu=De.core.context||fi,Kl=De.core.suppressOverwrites||fi,Yu=nt.history.scrollRestoration||"auto",hu=nt.pageYOffset||0,De.core.globals("ScrollTrigger",r),pt){ra=1,Ts=document.createElement("div"),Ts.style.height="100vh",Ts.style.position="absolute",Hp(),MS(),Ft.register(De),r.isTouch=Ft.isTouch,qi=Ft.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),lu=Ft.isTouch===1,qt(nt,"wheel",ls),Xu=[nt,_t,Fn,pt],De.matchMedia?(r.matchMedia=function(u){var d=De.matchMedia(),h;for(h in u)d.add(h,u[h]);return d},De.addEventListener("matchMediaInit",function(){kp(),Ju()}),De.addEventListener("matchMediaRevert",function(){return zp()}),De.addEventListener("matchMedia",function(){Pr(0,1),Hr("matchMedia")}),De.matchMedia().add("(orientation: portrait)",function(){return Jl(),Jl})):console.warn("Requires GSAP 3.11.0 or later"),Jl(),qt(_t,"scroll",ls);var n=pt.hasAttribute("style"),i=pt.style,s=i.borderTopStyle,a=De.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Ri(pt),Ht.m=Math.round(o.top+Ht.sc())||0,dn.m=Math.round(o.left+dn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(pt.setAttribute("style",""),pt.removeAttribute("style")),mo=setInterval(Nh,250),De.delayedCall(.5,function(){return _o=0}),qt(_t,"touchcancel",fi),qt(pt,"touchstart",fi),vo(qt,_t,"pointerdown,touchstart,mousedown",Dh),vo(qt,_t,"pointerup,touchend,mouseup",Lh),ou=De.utils.checkPrefix("transform"),Bo.push(ou),cs=en(),Qo=De.delayedCall(.2,Pr).pause(),us=[_t,"visibilitychange",function(){var u=nt.innerWidth,d=nt.innerHeight;_t.hidden?(wh=u,Ch=d):(wh!==u||Ch!==d)&&oa()},_t,"DOMContentLoaded",Pr,nt,"load",Pr,nt,"resize",oa],go(qt),Qe.forEach(function(u){return u.enable(0,1)}),l=0;l<it.length;l+=3)xo(Yt,it[l],it[l+1]),xo(Yt,it[l],it[l+2])}else if(_t){var c=function u(){r.enable(),_t.removeEventListener("DOMContentLoaded",u)};_t.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Zl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(mo)||(mo=i)&&setInterval(Nh,i),"ignoreMobileResize"in n&&(lu=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(go(Yt)||go(qt,n.autoRefreshEvents||"none"),Cp=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=vn(n),a=it.indexOf(s),o=kr(s);~a&&it.splice(a,o?6:2),i&&(o?gi.unshift(nt,i,pt,i,Fn,i):gi.unshift(s,i))},r.clearMatchMedia=function(n){Qe.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(In(n)?vn(n):n).getBoundingClientRect(),o=a[s?Nr:Fr]*i||0;return s?a.right-o>0&&a.left+o<nt.innerWidth:a.bottom-o>0&&a.top+o<nt.innerHeight},r.positionInViewport=function(n,i,s){In(n)&&(n=vn(n));var a=n.getBoundingClientRect(),o=a[s?Nr:Fr],l=i==null?o/2:i in tl?tl[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/nt.innerWidth:(a.top+l)/nt.innerHeight},r.killAll=function(n){if(Qe.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Vr.killAll||[];Vr={},i.forEach(function(s){return s()})}},r}();et.version="3.15.0";et.saveStyles=function(r){return r?Pa(r).forEach(function(e){if(e&&e.style){var t=Ln.indexOf(e);t>=0&&Ln.splice(t,5),Ln.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),De.core.getCache(e),cu())}}):Ln};et.revert=function(r,e){return Ju(!r,e)};et.create=function(r,e){return new et(r,e)};et.refresh=function(r){return r?oa(!0):(cs||et.register())&&Pr(!0)};et.update=function(r){return++it.cache&&Ui(r===!0?2:0)};et.clearScrollMemory=Vp;et.maxScroll=function(r,e){return _i(r,e?dn:Ht)};et.getScrollFunc=function(r,e){return ur(vn(r),e?dn:Ht)};et.getById=function(r){return fu[r]};et.getAll=function(){return Qe.filter(function(r){return r.vars.id!=="ScrollSmoother"})};et.isScrolling=function(){return!!Jn};et.snapDirectional=ju;et.addEventListener=function(r,e){var t=Vr[r]||(Vr[r]=[]);~t.indexOf(e)||t.push(e)};et.removeEventListener=function(r,e){var t=Vr[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};et.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var d=[],h=[],f=De.delayedCall(i,function(){u(d,h),d=[],h=[]}).pause();return function(g){d.length||f.restart(!0),d.push(g.trigger),h.push(g),s<=d.length&&f.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&nn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return nn(s)&&(s=s(),qt(et,"refresh",function(){return s=e.batchMax()})),Pa(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(et.create(c))}),t};var Vh=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},ec=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Ft.isTouch?" pinch-zoom":""):"none",e===Fn&&r(pt,t)},To={auto:1,scroll:1},LS=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||De.core.getCache(s),o=en(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==pt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(To[(l=Kn(s)).overflowY]||To[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!kr(s)&&(To[(l=Kn(s)).overflowY]||To[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Wp=function(e,t,n,i){return Ft.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&LS,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&qt(_t,Ft.eventTypes[0],Gh,!1,!0)},onDisable:function(){return Yt(_t,Ft.eventTypes[0],Gh,!0)}})},IS=/(input|label|select|textarea)/i,Hh,Gh=function(e){var t=IS.test(e.target.tagName);(t||Hh)&&(e._gsapAllow=!0,Hh=t)},US=function(e){Tr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=vn(e.target)||Fn,u=De.core.globals().ScrollSmoother,d=u&&u.get(),h=qi&&(e.content&&vn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),f=ur(c,Ht),g=ur(c,dn),_=1,m=(Ft.isTouch&&nt.visualViewport?nt.visualViewport.scale*nt.visualViewport.width:nt.outerWidth)/nt.innerWidth,p=0,M=nn(i)?function(){return i(o)}:function(){return i||2.8},S,v,P=Wp(c,e.type,!0,s),w=function(){return v=!1},b=fi,D=fi,y=function(){l=_i(c,Ht),D=pa(qi?1:0,l),n&&(b=pa(0,_i(c,dn))),S=Or},x=function(){h._gsap.y=sa(parseFloat(h._gsap.y)+f.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},L=function(){if(v){requestAnimationFrame(w);var B=sa(o.deltaY/2),se=D(f.v-B);if(h&&se!==f.v+f.offset){f.offset=se-f.v;var E=sa((parseFloat(h&&h._gsap.y)||0)-f.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+E+", 0, 1)",h._gsap.y=E+"px",f.cacheID=it.cache,Ui()}return!0}f.offset&&x(),v=!0},O,V,q,j,K=function(){y(),O.isActive()&&O.vars.scrollY>l&&(f()>l?O.progress(1)&&f(l):O.resetTo("scrollY",l))};return h&&De.set(h,{y:"+=0"}),e.ignoreCheck=function($){return qi&&$.type==="touchmove"&&L()||_>1.05&&$.type!=="touchstart"||o.isGesturing||$.touches&&$.touches.length>1},e.onPress=function(){v=!1;var $=_;_=sa((nt.visualViewport&&nt.visualViewport.scale||1)/m),O.pause(),$!==_&&ec(c,_>1.01?!0:n?!1:"x"),V=g(),q=f(),y(),S=Or},e.onRelease=e.onGestureStart=function($,B){if(f.offset&&x(),!B)j.restart(!0);else{it.cache++;var se=M(),E,R;n&&(E=g(),R=E+se*.05*-$.velocityX/.227,se*=Vh(g,E,R,_i(c,dn)),O.vars.scrollX=b(R)),E=f(),R=E+se*.05*-$.velocityY/.227,se*=Vh(f,E,R,_i(c,Ht)),O.vars.scrollY=D(R),O.invalidate().duration(se).play(.01),(qi&&O.vars.scrollY>=l||E>=l-1)&&De.to({},{onUpdate:K,duration:se})}a&&a($)},e.onWheel=function(){O._ts&&O.pause(),en()-p>1e3&&(S=0,p=en())},e.onChange=function($,B,se,E,R){if(Or!==S&&y(),B&&n&&g(b(E[2]===B?V+($.startX-$.x):g()+B-E[1])),se){f.offset&&x();var Q=R[2]===se,le=Q?q+$.startY-$.y:f()+se-R[1],N=D(le);Q&&le!==N&&(q+=N-le),f(N)}(se||B)&&Ui()},e.onEnable=function(){ec(c,n?!1:"x"),et.addEventListener("refresh",K),qt(nt,"resize",K),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=g.smooth=!1),P.enable()},e.onDisable=function(){ec(c,!0),Yt(nt,"resize",K),et.removeEventListener("refresh",K),P.kill()},e.lockAxis=e.lockAxis!==!1,o=new Ft(e),o.iOS=qi,qi&&!f()&&f(1),qi&&De.ticker.add(fi),j=o._dc,O=De.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Gp(f,f(),function(){return O.pause()})},onUpdate:Ui,onComplete:j.vars.onComplete}),o};et.sort=function(r){if(nn(r))return Qe.sort(r);var e=nt.pageYOffset||0;return et.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+nt.innerHeight}),Qe.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};et.observe=function(r){return new Ft(r)};et.normalizeScroll=function(r){if(typeof r>"u")return cn;if(r===!0&&cn)return cn.enable();if(r===!1){cn&&cn.kill(),cn=r;return}var e=r instanceof Ft?r:US(r);return cn&&cn.target===e.target&&cn.kill(),kr(e.target)&&(cn=e),e};et.core={_getVelocityProp:au,_inputObserver:Wp,_scrollers:it,_proxies:gi,bridge:{ss:function(){Jn||Hr("scrollStart"),Jn=en()},ref:function(){return Qt}}};Lp()&&De.registerPlugin(et);var Qu={};(function r(e,t,n,i){var s=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),a=typeof Path2D=="function"&&typeof DOMMatrix=="function",o=function(){if(!e.OffscreenCanvas)return!1;try{var E=new OffscreenCanvas(1,1),R=E.getContext("2d");R.fillRect(0,0,1,1);var Q=E.transferToImageBitmap();R.createPattern(Q,"no-repeat")}catch{return!1}return!0}();function l(){}function c(E){var R=t.exports.Promise,Q=R!==void 0?R:e.Promise;return typeof Q=="function"?new Q(E):(E(l,l),null)}var u=function(E,R){return{transform:function(Q){if(E)return Q;if(R.has(Q))return R.get(Q);var le=new OffscreenCanvas(Q.width,Q.height),N=le.getContext("2d");return N.drawImage(Q,0,0),R.set(Q,le),le},clear:function(){R.clear()}}}(o,new Map),d=function(){var E=Math.floor(16.666666666666668),R,Q,le={},N=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(R=function(H){var re=Math.random();return le[re]=requestAnimationFrame(function Z(ae){N===ae||N+E-1<ae?(N=ae,delete le[re],H()):le[re]=requestAnimationFrame(Z)}),re},Q=function(H){le[H]&&cancelAnimationFrame(le[H])}):(R=function(H){return setTimeout(H,E)},Q=function(H){return clearTimeout(H)}),{frame:R,cancel:Q}}(),h=function(){var E,R,Q={};function le(N){function H(re,Z){N.postMessage({options:re||{},callback:Z})}N.init=function(Z){var ae=Z.transferControlToOffscreen();N.postMessage({canvas:ae},[ae])},N.fire=function(Z,ae,ue){if(R)return H(Z,null),R;var Me=Math.random().toString(36).slice(2);return R=c(function(Pe){function be(Ee){Ee.data.callback===Me&&(delete Q[Me],N.removeEventListener("message",be),R=null,u.clear(),ue(),Pe())}N.addEventListener("message",be),H(Z,Me),Q[Me]=be.bind(null,{data:{callback:Me}})}),R},N.reset=function(){N.postMessage({reset:!0});for(var Z in Q)Q[Z](),delete Q[Z]}}return function(){if(E)return E;if(!n&&s){var N=["var CONFETTI, SIZE = {}, module = {};","("+r.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{E=new Worker(URL.createObjectURL(new Blob([N])))}catch(H){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",H),null}le(E)}return E}}(),f={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function g(E,R){return R?R(E):E}function _(E){return E!=null}function m(E,R,Q){return g(E&&_(E[R])?E[R]:f[R],Q)}function p(E){return E<0?0:Math.floor(E)}function M(E,R){return Math.floor(Math.random()*(R-E))+E}function S(E){return parseInt(E,16)}function v(E){return E.map(P)}function P(E){var R=String(E).replace(/[^0-9a-f]/gi,"");return R.length<6&&(R=R[0]+R[0]+R[1]+R[1]+R[2]+R[2]),{r:S(R.substring(0,2)),g:S(R.substring(2,4)),b:S(R.substring(4,6))}}function w(E){var R=m(E,"origin",Object);return R.x=m(R,"x",Number),R.y=m(R,"y",Number),R}function b(E){E.width=document.documentElement.clientWidth,E.height=document.documentElement.clientHeight}function D(E){var R=E.getBoundingClientRect();E.width=R.width,E.height=R.height}function y(E){var R=document.createElement("canvas");return R.style.position="fixed",R.style.top="0px",R.style.left="0px",R.style.pointerEvents="none",R.style.zIndex=E,R}function x(E,R,Q,le,N,H,re,Z,ae){E.save(),E.translate(R,Q),E.rotate(H),E.scale(le,N),E.arc(0,0,1,re,Z,ae),E.restore()}function L(E){var R=E.angle*(Math.PI/180),Q=E.spread*(Math.PI/180);return{x:E.x,y:E.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:E.startVelocity*.5+Math.random()*E.startVelocity,angle2D:-R+(.5*Q-Math.random()*Q),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:E.color,shape:E.shape,tick:0,totalTicks:E.ticks,decay:E.decay,drift:E.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:E.gravity*3,ovalScalar:.6,scalar:E.scalar,flat:E.flat}}function O(E,R){R.x+=Math.cos(R.angle2D)*R.velocity+R.drift,R.y+=Math.sin(R.angle2D)*R.velocity+R.gravity,R.velocity*=R.decay,R.flat?(R.wobble=0,R.wobbleX=R.x+10*R.scalar,R.wobbleY=R.y+10*R.scalar,R.tiltSin=0,R.tiltCos=0,R.random=1):(R.wobble+=R.wobbleSpeed,R.wobbleX=R.x+10*R.scalar*Math.cos(R.wobble),R.wobbleY=R.y+10*R.scalar*Math.sin(R.wobble),R.tiltAngle+=.1,R.tiltSin=Math.sin(R.tiltAngle),R.tiltCos=Math.cos(R.tiltAngle),R.random=Math.random()+2);var Q=R.tick++/R.totalTicks,le=R.x+R.random*R.tiltCos,N=R.y+R.random*R.tiltSin,H=R.wobbleX+R.random*R.tiltCos,re=R.wobbleY+R.random*R.tiltSin;if(E.fillStyle="rgba("+R.color.r+", "+R.color.g+", "+R.color.b+", "+(1-Q)+")",E.beginPath(),a&&R.shape.type==="path"&&typeof R.shape.path=="string"&&Array.isArray(R.shape.matrix))E.fill($(R.shape.path,R.shape.matrix,R.x,R.y,Math.abs(H-le)*.1,Math.abs(re-N)*.1,Math.PI/10*R.wobble));else if(R.shape.type==="bitmap"){var Z=Math.PI/10*R.wobble,ae=Math.abs(H-le)*.1,ue=Math.abs(re-N)*.1,Me=R.shape.bitmap.width*R.scalar,Pe=R.shape.bitmap.height*R.scalar,be=new DOMMatrix([Math.cos(Z)*ae,Math.sin(Z)*ae,-Math.sin(Z)*ue,Math.cos(Z)*ue,R.x,R.y]);be.multiplySelf(new DOMMatrix(R.shape.matrix));var Ee=E.createPattern(u.transform(R.shape.bitmap),"no-repeat");Ee.setTransform(be),E.globalAlpha=1-Q,E.fillStyle=Ee,E.fillRect(R.x-Me/2,R.y-Pe/2,Me,Pe),E.globalAlpha=1}else if(R.shape==="circle")E.ellipse?E.ellipse(R.x,R.y,Math.abs(H-le)*R.ovalScalar,Math.abs(re-N)*R.ovalScalar,Math.PI/10*R.wobble,0,2*Math.PI):x(E,R.x,R.y,Math.abs(H-le)*R.ovalScalar,Math.abs(re-N)*R.ovalScalar,Math.PI/10*R.wobble,0,2*Math.PI);else if(R.shape==="star")for(var I=Math.PI/2*3,$e=4*R.scalar,Ue=8*R.scalar,k=R.x,Te=R.y,Ye=5,we=Math.PI/Ye;Ye--;)k=R.x+Math.cos(I)*Ue,Te=R.y+Math.sin(I)*Ue,E.lineTo(k,Te),I+=we,k=R.x+Math.cos(I)*$e,Te=R.y+Math.sin(I)*$e,E.lineTo(k,Te),I+=we;else E.moveTo(Math.floor(R.x),Math.floor(R.y)),E.lineTo(Math.floor(R.wobbleX),Math.floor(N)),E.lineTo(Math.floor(H),Math.floor(re)),E.lineTo(Math.floor(le),Math.floor(R.wobbleY));return E.closePath(),E.fill(),R.tick<R.totalTicks}function V(E,R,Q,le,N){var H=R.slice(),re=E.getContext("2d"),Z,ae,ue=c(function(Me){function Pe(){Z=ae=null,re.clearRect(0,0,le.width,le.height),u.clear(),N(),Me()}function be(){n&&!(le.width===i.width&&le.height===i.height)&&(le.width=E.width=i.width,le.height=E.height=i.height),!le.width&&!le.height&&(Q(E),le.width=E.width,le.height=E.height),re.clearRect(0,0,le.width,le.height),H=H.filter(function(Ee){return O(re,Ee)}),H.length?Z=d.frame(be):Pe()}Z=d.frame(be),ae=Pe});return{addFettis:function(Me){return H=H.concat(Me),ue},canvas:E,promise:ue,reset:function(){Z&&d.cancel(Z),ae&&ae()}}}function q(E,R){var Q=!E,le=!!m(R||{},"resize"),N=!1,H=m(R,"disableForReducedMotion",Boolean),re=s&&!!m(R||{},"useWorker"),Z=re?h():null,ae=Q?b:D,ue=E&&Z?!!E.__confetti_initialized:!1,Me=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Pe;function be(I,$e,Ue){for(var k=m(I,"particleCount",p),Te=m(I,"angle",Number),Ye=m(I,"spread",Number),we=m(I,"startVelocity",Number),C=m(I,"decay",Number),T=m(I,"gravity",Number),G=m(I,"drift",Number),ie=m(I,"colors",v),te=m(I,"ticks",Number),ee=m(I,"shapes"),me=m(I,"scalar"),de=!!m(I,"flat"),_e=w(I),Ge=k,oe=[],he=E.width*_e.x,Oe=E.height*_e.y;Ge--;)oe.push(L({x:he,y:Oe,angle:Te,spread:Ye,startVelocity:we,color:ie[Ge%ie.length],shape:ee[M(0,ee.length)],ticks:te,decay:C,gravity:T,drift:G,scalar:me,flat:de}));return Pe?Pe.addFettis(oe):(Pe=V(E,oe,ae,$e,Ue),Pe.promise)}function Ee(I){var $e=H||m(I,"disableForReducedMotion",Boolean),Ue=m(I,"zIndex",Number);if($e&&Me)return c(function(we){we()});Q&&Pe?E=Pe.canvas:Q&&!E&&(E=y(Ue),document.body.appendChild(E)),le&&!ue&&ae(E);var k={width:E.width,height:E.height};Z&&!ue&&Z.init(E),ue=!0,Z&&(E.__confetti_initialized=!0);function Te(){if(Z){var we={getBoundingClientRect:function(){if(!Q)return E.getBoundingClientRect()}};ae(we),Z.postMessage({resize:{width:we.width,height:we.height}});return}k.width=k.height=null}function Ye(){Pe=null,le&&(N=!1,e.removeEventListener("resize",Te)),Q&&E&&(document.body.contains(E)&&document.body.removeChild(E),E=null,ue=!1)}return le&&!N&&(N=!0,e.addEventListener("resize",Te,!1)),Z?Z.fire(I,k,Ye):be(I,k,Ye)}return Ee.reset=function(){Z&&Z.reset(),Pe&&Pe.reset()},Ee}var j;function K(){return j||(j=q(null,{useWorker:!0,resize:!0})),j}function $(E,R,Q,le,N,H,re){var Z=new Path2D(E),ae=new Path2D;ae.addPath(Z,new DOMMatrix(R));var ue=new Path2D;return ue.addPath(ae,new DOMMatrix([Math.cos(re)*N,Math.sin(re)*N,-Math.sin(re)*H,Math.cos(re)*H,Q,le])),ue}function B(E){if(!a)throw new Error("path confetti are not supported in this browser");var R,Q;typeof E=="string"?R=E:(R=E.path,Q=E.matrix);var le=new Path2D(R),N=document.createElement("canvas"),H=N.getContext("2d");if(!Q){for(var re=1e3,Z=re,ae=re,ue=0,Me=0,Pe,be,Ee=0;Ee<re;Ee+=2)for(var I=0;I<re;I+=2)H.isPointInPath(le,Ee,I,"nonzero")&&(Z=Math.min(Z,Ee),ae=Math.min(ae,I),ue=Math.max(ue,Ee),Me=Math.max(Me,I));Pe=ue-Z,be=Me-ae;var $e=10,Ue=Math.min($e/Pe,$e/be);Q=[Ue,0,0,Ue,-Math.round(Pe/2+Z)*Ue,-Math.round(be/2+ae)*Ue]}return{type:"path",path:R,matrix:Q}}function se(E){var R,Q=1,le="#000000",N='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof E=="string"?R=E:(R=E.text,Q="scalar"in E?E.scalar:Q,N="fontFamily"in E?E.fontFamily:N,le="color"in E?E.color:le);var H=10*Q,re=""+H+"px "+N,Z=new OffscreenCanvas(H,H),ae=Z.getContext("2d");ae.font=re;var ue=ae.measureText(R),Me=Math.ceil(ue.actualBoundingBoxRight+ue.actualBoundingBoxLeft),Pe=Math.ceil(ue.actualBoundingBoxAscent+ue.actualBoundingBoxDescent),be=2,Ee=ue.actualBoundingBoxLeft+be,I=ue.actualBoundingBoxAscent+be;Me+=be+be,Pe+=be+be,Z=new OffscreenCanvas(Me,Pe),ae=Z.getContext("2d"),ae.font=re,ae.fillStyle=le,ae.fillText(R,Ee,I);var $e=1/Q;return{type:"bitmap",bitmap:Z.transferToImageBitmap(),matrix:[$e,0,0,$e,-Me*$e/2,-Pe*$e/2]}}t.exports=function(){return K().apply(this,arguments)},t.exports.reset=function(){K().reset()},t.exports.create=q,t.exports.shapeFromPath=B,t.exports.shapeFromText=se})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),Qu,!1);const NS=Qu.exports;Qu.exports.create;ci.registerPlugin(et);class FS{constructor(){this.ctx=null,this.isMuted=!0,this.ambientOsc=null,this.ambientGain=null,this.lfo=null,this.initListeners()}init(){if(this.ctx)return;const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}toggleSound(){this.init(),this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume(),this.isMuted=!this.isMuted;const e=document.getElementById("audio-state-text"),t=document.getElementById("audio-status");this.isMuted?(e&&(e.textContent="MUTED"),t&&t.classList.remove("audio-active"),this.stopAmbientHum()):(e&&(e.textContent="ONLINE"),t&&t.classList.add("audio-active"),this.startAmbientHum(),this.playBeep(880,.15,"sine"))}startAmbientHum(){if(!(!this.ctx||this.isMuted||this.ambientOsc))try{this.ambientOsc=this.ctx.createOscillator(),this.ambientGain=this.ctx.createGain();const e=this.ctx.createBiquadFilter();this.ambientOsc.type="sawtooth",this.ambientOsc.frequency.setValueAtTime(55,this.ctx.currentTime),e.type="lowpass",e.frequency.setValueAtTime(140,this.ctx.currentTime),this.ambientGain.gain.setValueAtTime(.025,this.ctx.currentTime),this.ambientOsc.connect(e),e.connect(this.ambientGain),this.ambientGain.connect(this.ctx.destination),this.ambientOsc.start()}catch(e){console.warn("Audio start error:",e)}}stopAmbientHum(){if(this.ambientOsc)try{this.ambientGain.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+.5),setTimeout(()=>{this.ambientOsc&&(this.ambientOsc.stop(),this.ambientOsc.disconnect(),this.ambientOsc=null)},500)}catch{this.ambientOsc=null}}playHover(){if(!(this.isMuted||!this.ctx))try{const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(1200,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(1800,this.ctx.currentTime+.04),t.gain.setValueAtTime(.02,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+.05),e.connect(t),t.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.05)}catch{}}playClick(){if(!(this.isMuted||!this.ctx))try{const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(440,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(140,this.ctx.currentTime+.08),t.gain.setValueAtTime(.08,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.08),e.connect(t),t.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.08)}catch{}}playSuccess(){if(!(this.isMuted||!this.ctx))try{[523.25,659.25,783.99,1046.5].forEach((t,n)=>{setTimeout(()=>{this.playBeep(t,.18,"sine")},n*90)})}catch{}}playBeep(e,t=.1,n="sine"){if(this.ctx)try{const i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type=n,i.frequency.setValueAtTime(e,this.ctx.currentTime),s.gain.setValueAtTime(.06,this.ctx.currentTime),s.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+t),i.connect(s),s.connect(this.ctx.destination),i.start(),i.stop(this.ctx.currentTime+t)}catch{}}initListeners(){const e=document.getElementById("audio-toggle-btn");e&&e.addEventListener("click",()=>this.toggleSound()),document.addEventListener("mouseover",t=>{const n=t.target.closest("[data-sound]");n&&n.getAttribute("data-sound")==="hover"&&this.playHover()}),document.addEventListener("click",t=>{t.target.closest("[data-sound]")&&this.playClick()})}}const ms=new FS;function OS(){const r=document.createElement("canvas");r.width=64,r.height=64;const e=r.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255, 255, 255, 1)"),t.addColorStop(.25,"rgba(255, 220, 235, 0.9)"),t.addColorStop(.55,"rgba(255, 43, 117, 0.35)"),t.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new Kx(r)}function BS(){const r=document.getElementById("bg-canvas");if(!r)return;const e=new yd;e.fog=new Eu(394761,.0075);const t=new Nn(60,window.innerWidth/window.innerHeight,.1,1e3);t.position.z=50;const n=new Sd({canvas:r,alpha:!0,antialias:!0,powerPreference:"high-performance"});n.setSize(window.innerWidth,window.innerHeight),n.setPixelRatio(Math.min(window.devicePixelRatio,2));const i=OS(),s=550,a=new yn,o=new Float32Array(s*3),l=new Float32Array(s*3),c=new Float32Array(s*3),u=new at(16722805),d=new at(10309341),h=new at(16777215);for(let B=0;B<s;B++){const se=(Math.random()-.5)*160,E=(Math.random()-.5)*120,R=(Math.random()-.5)*110;o[B*3]=se,o[B*3+1]=E,o[B*3+2]=R,c[B*3]=se,c[B*3+1]=E,c[B*3+2]=R;const Q=Math.random();let le=h;Q<.35?le=u:Q<.65&&(le=d),l[B*3]=le.r,l[B*3+1]=le.g,l[B*3+2]=le.b}a.setAttribute("position",new hn(o,3)),a.setAttribute("color",new hn(l,3));const f=new Hc({size:2,map:i,vertexColors:!0,transparent:!0,opacity:.65,blending:la,depthWrite:!1}),g=new sh(a,f);e.add(g);const _=45,m=new Float32Array(_*3),p=[];for(let B=0;B<_;B++)m[B*3]=(Math.random()-.5)*110,m[B*3+1]=(Math.random()-.5)*80,m[B*3+2]=(Math.random()-.5)*70,p.push({vx:(Math.random()-.5)*.04,vy:(Math.random()-.5)*.04,vz:(Math.random()-.5)*.04});const M=new yn;M.setAttribute("position",new hn(m,3));const S=new Hc({size:2.8,map:i,color:16722805,transparent:!0,opacity:.55,blending:la,depthWrite:!1}),v=new sh(M,S);e.add(v);const P=_*(_-1)/2,w=new Float32Array(P*6),b=new Float32Array(P*6),D=new yn;D.setAttribute("position",new hn(w,3).setUsage(of)),D.setAttribute("color",new hn(b,3).setUsage(of));const y=new Ed({vertexColors:!0,transparent:!0,opacity:.35,blending:la,depthWrite:!1}),x=new $x(D,y);e.add(x);let L=0,O=0,V=0,q=0;const j=document.getElementById("ambient-spotlight");window.addEventListener("mousemove",B=>{L=B.clientX/window.innerWidth*2-1,O=-(B.clientY/window.innerHeight)*2+1,j&&(j.style.transform="translate("+B.clientX+"px, "+B.clientY+"px) translate(-50%, -50%)")}),window.addEventListener("resize",()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)});const K=new Zx;function $(){requestAnimationFrame($);const B=K.getElapsedTime();V+=(L*7-V)*.035,q+=(O*5-q)*.035,t.position.x=V,t.position.y=q,t.lookAt(0,0,0);const se=a.attributes.position,E=se.array;for(let N=0;N<s;N++){const H=N*3;E[H+1]=c[H+1]+Math.sin(B*.4+c[H]*.05)*1.5}se.needsUpdate=!0,g.rotation.y=B*.012;const R=M.attributes.position.array;for(let N=0;N<_;N++){const H=N*3;R[H]+=p[N].vx,R[H+1]+=p[N].vy,R[H+2]+=p[N].vz,Math.abs(R[H])>55&&(p[N].vx*=-1),Math.abs(R[H+1])>40&&(p[N].vy*=-1),Math.abs(R[H+2])>35&&(p[N].vz*=-1)}M.attributes.position.needsUpdate=!0;let Q=0;const le=18;for(let N=0;N<_;N++)for(let H=N+1;H<_;H++){const re=R[N*3]-R[H*3],Z=R[N*3+1]-R[H*3+1],ae=R[N*3+2]-R[H*3+2],ue=Math.sqrt(re*re+Z*Z+ae*ae);if(ue<le){const Me=1-ue/le;w[Q*6]=R[N*3],w[Q*6+1]=R[N*3+1],w[Q*6+2]=R[N*3+2],w[Q*6+3]=R[H*3],w[Q*6+4]=R[H*3+1],w[Q*6+5]=R[H*3+2],b[Q*6]=1*Me,b[Q*6+1]=.17*Me,b[Q*6+2]=.46*Me,b[Q*6+3]=.61*Me,b[Q*6+4]=.3*Me,b[Q*6+5]=.86*Me,Q++}}D.setDrawRange(0,Q*2),D.attributes.position.needsUpdate=!0,D.attributes.color.needsUpdate=!0,n.render(e,t)}$()}function zS(){const r=document.getElementById("wireframe-sphere-canvas");if(!r)return;const e=new yd,t=new Nn(45,1,.1,100);t.position.z=5.2;const n=new Sd({canvas:r,alpha:!0,antialias:!0});n.setSize(80,80),n.setPixelRatio(Math.min(window.devicePixelRatio,2));const i=new Au(1.8,16,14),s=new Ho({color:16722805,wireframe:!0,transparent:!0,opacity:.85}),a=new ai(i,s);e.add(a);const o=new bu(.8,1),l=new Ho({color:16711765,wireframe:!0,transparent:!0,opacity:.5}),c=new ai(o,l);e.add(c);let u=.015;const d=document.getElementById("stat-card-prize");d&&(d.addEventListener("mouseenter",()=>{u=.055,s.opacity=1}),d.addEventListener("mouseleave",()=>{u=.015,s.opacity=.85}));function h(){requestAnimationFrame(h),a.rotation.y+=u,a.rotation.x+=u*.6,c.rotation.y-=u*1.5,n.render(e,t)}h()}function kS(){const r=document.getElementById("radar-canvas");if(!r)return;const e=r.getContext("2d");let t=0;const n=[{x:.28,y:.35,label:"JIT LIBRARY",ping:0},{x:.68,y:.42,label:"CS LABS",ping:0},{x:.45,y:.72,label:"MAIN ENTRANCE",ping:0},{x:.82,y:.25,label:"SERVER ROOM",ping:0}];function i(){const s=r.width,a=r.height,o=s/2,l=a/2,c=Math.min(s,a)*.45;e.clearRect(0,0,s,a),e.strokeStyle="rgba(255, 43, 117, 0.08)",e.lineWidth=1;const u=20;for(let g=0;g<s;g+=u)e.beginPath(),e.moveTo(g,0),e.lineTo(g,a),e.stroke();for(let g=0;g<a;g+=u)e.beginPath(),e.moveTo(0,g),e.lineTo(s,g),e.stroke();e.strokeStyle="rgba(255, 43, 117, 0.25)";for(let g=1;g<=3;g++)e.beginPath(),e.arc(o,l,c/3*g,0,Math.PI*2),e.stroke();e.strokeStyle="rgba(255, 43, 117, 0.2)",e.beginPath(),e.moveTo(o-c,l),e.lineTo(o+c,l),e.moveTo(o,l-c),e.lineTo(o,l+c),e.stroke(),t+=.035,t>Math.PI*2&&(t=0);const d=o+Math.cos(t)*c,h=l+Math.sin(t)*c,f=e.createRadialGradient(o,l,0,o,l,c);f.addColorStop(0,"rgba(255, 43, 117, 0.2)"),f.addColorStop(1,"rgba(255, 43, 117, 0.0)"),e.fillStyle=f,e.beginPath(),e.moveTo(o,l),e.arc(o,l,c,t-.4,t),e.closePath(),e.fill(),e.strokeStyle="#FF2B75",e.lineWidth=1.5,e.beginPath(),e.moveTo(o,l),e.lineTo(d,h),e.stroke(),n.forEach(g=>{const _=g.x*s,m=g.y*a,p=Math.atan2(m-l,_-o);let M=t-p;for(;M<0;)M+=Math.PI*2;for(;M>Math.PI*2;)M-=Math.PI*2;M<.2&&(g.ping=1),e.fillStyle="#10B981",e.beginPath(),e.arc(_,m,3,0,Math.PI*2),e.fill(),g.ping>.05&&(e.strokeStyle=`rgba(16, 185, 129, ${g.ping})`,e.beginPath(),e.arc(_,m,(1-g.ping)*16+3,0,Math.PI*2),e.stroke(),g.ping-=.015),e.font='8px "Chakra Petch", monospace',e.fillStyle="rgba(255, 255, 255, 0.6)",e.fillText(g.label,_+6,m+3)}),requestAnimationFrame(i)}i()}function VS(){const r=document.getElementById("hero"),e=document.getElementById("hero-character-wrap"),t=document.getElementById("giant-typography"),n=document.getElementById("hero-left-card"),i=document.getElementById("hero-right-card"),s=document.getElementById("hero-bloom");if(!r||!e)return;let a=0,o=0,l=0,c=0;window.addEventListener("mousemove",d=>{if(window.innerWidth<1024||window.matchMedia("(pointer: coarse)").matches)return;const h=r.getBoundingClientRect();if(d.clientY<h.top||d.clientY>h.bottom)return;const f=d.clientX/window.innerWidth*2-1,g=d.clientY/window.innerHeight*2-1;c=f*10,l=-g*6});function u(){if(requestAnimationFrame(u),window.innerWidth<1024||window.matchMedia("(pointer: coarse)").matches){e.style.transform&&(e.style.transform=""),t&&t.style.transform&&(t.style.transform=""),n&&n.style.transform&&(n.style.transform=""),i&&i.style.transform&&(i.style.transform=""),s&&s.style.transform&&(s.style.transform="");return}a+=(l-a)*.07,o+=(c-o)*.07,e.style.transform=`perspective(1000px) rotateX(${a}deg) rotateY(${o}deg) translateZ(30px)`,t&&(t.style.transform=`translate(-50%, -50%) translate3d(${-o*2}px, ${-a*1.5}px, 0)`),n&&(n.style.transform=`translate3d(${o*.6}px, ${a*.5}px, 15px)`),i&&(i.style.transform=`translate3d(${o*.6}px, ${a*.5}px, 15px)`),s&&(s.style.transform=`translate(-50%, -50%) translate3d(${o*1}px, ${a*.8}px, 0)`)}u()}function HS(){const r=document.getElementById("hero-char-img"),e=document.querySelector(".giant-display-header"),t=document.getElementById("bottom-dock");et.matchMedia({"(min-width: 1024px)":function(){r&&e&&(ci.to(r,{scrollTrigger:{trigger:"#hero",start:"top top",end:"bottom top",scrub:1.2},scale:1.18,yPercent:8,opacity:.9,filter:"drop-shadow(0 20px 60px rgba(0, 0, 0, 0.95)) drop-shadow(0 0 50px rgba(255, 43, 117, 0.8))"}),ci.to(e,{scrollTrigger:{trigger:"#hero",start:"top top",end:"bottom top",scrub:1.2},scale:.92,yPercent:-15,opacity:.2,filter:"blur(4px)"}),t&&ci.to(t,{scrollTrigger:{trigger:"#hero",start:"20% top",end:"80% top",scrub:.8},y:40,opacity:.3}))},"(max-width: 1023px)":function(){r&&e&&(ci.to(r,{scrollTrigger:{trigger:"#hero",start:"top top",end:"bottom 50%",scrub:1},scale:1.04,opacity:.95}),ci.to(e,{scrollTrigger:{trigger:"#hero",start:"top top",end:"bottom 50%",scrub:1},opacity:.25}))}});const n=document.querySelectorAll(".server-block-card");n.length&&ci.from(n,{scrollTrigger:{trigger:"#rules",start:"top 75%",toggleActions:"play none none none"},y:50,opacity:0,stagger:.15,duration:.8,ease:"power3.out"});const i=document.getElementById("spine-runner"),s=document.querySelectorAll(".timeline-node");i&&s.length&&(ci.to(i,{scrollTrigger:{trigger:".cyber-timeline-spine",start:"top 70%",end:"bottom 50%",scrub:1},top:"100%",ease:"none"}),s.forEach((h,f)=>{ci.from(h,{scrollTrigger:{trigger:h,start:"top 80%",toggleActions:"play none none none"},x:-30,opacity:0,duration:.6,delay:f*.1})}));const a=[{id:"hero",step:"01"},{id:"rules",step:"02"},{id:"tracks",step:"03"},{id:"schedule",step:"04"},{id:"prizes",step:"05"}],o=document.getElementById("active-step-num"),l=document.querySelectorAll(".mini-bar"),c=document.getElementById("scroll-thumb"),u=document.querySelectorAll(".nav-link");window.addEventListener("scroll",()=>{const h=window.scrollY+window.innerHeight*.35,f=document.documentElement.scrollHeight-window.innerHeight,g=f>0?window.scrollY/f*100:0;c&&(c.style.top=`${Math.min(g*.44,44)}px`),a.forEach((m,p)=>{const M=document.getElementById(m.id);if(M){const S=M.offsetTop,v=M.offsetHeight;h>=S&&h<S+v&&(o&&(o.textContent=m.step),l.forEach((P,w)=>{P.classList.toggle("active",w===p)}),u.forEach(P=>{const w=P.getAttribute("href");P.classList.toggle("active",w===`#${m.id}`)}))}});const _=document.getElementById("navbar");_&&(window.scrollY>40?_.classList.add("scrolled"):_.classList.remove("scrolled"))});const d=document.getElementById("counter-prize");if(d){let h=!1;et.create({trigger:"#hero",start:"top 80%",onEnter:()=>{if(h)return;h=!0;let f=0;const g=22e3,_=1800,m=performance.now();function p(M){const S=M-m,v=Math.min(S/_,1),P=1-Math.pow(1-v,3);f=Math.floor(P*g),d.textContent=f.toLocaleString("en-IN"),v<1?requestAnimationFrame(p):d.textContent="22,000"}requestAnimationFrame(p)}})}}function GS(){const r=document.getElementById("timer-days"),e=document.getElementById("timer-hours"),t=document.getElementById("timer-mins"),n=document.getElementById("timer-secs");let i=new Date("2026-11-25T09:00:00+05:30");(isNaN(i.getTime())||i.getTime()-new Date().getTime()<=0)&&(i=new Date,i.setDate(i.getDate()+31),i.setHours(9,0,0,0));function s(){const a=new Date().getTime(),o=i.getTime()-a;if(o<=0){r&&(r.textContent="00"),e&&(e.textContent="00"),t&&(t.textContent="00"),n&&(n.textContent="00");return}const l=Math.floor(o/(1e3*60*60*24)),c=Math.floor(o%(1e3*60*60*24)/(1e3*60*60)),u=Math.floor(o%(1e3*60*60)/(1e3*60)),d=Math.floor(o%(1e3*60)/1e3);r&&(r.textContent=String(l).padStart(2,"0")),e&&(e.textContent=String(c).padStart(2,"0")),t&&(t.textContent=String(u).padStart(2,"0")),n&&(n.textContent=String(d).padStart(2,"0"))}s(),setInterval(s,1e3)}function WS(){const r=document.getElementById("terminal-time");if(!r)return;function e(){const n=new Date().toLocaleTimeString("en-GB",{hour12:!1});r.textContent=`UTC+05:30 // ${n}`}e(),setInterval(e,1e3)}function XS(){const r=document.getElementById("reg-modal"),e=[document.getElementById("register-nav-btn"),document.getElementById("drawer-register-btn"),document.getElementById("teaser-reg-btn")],t=document.getElementById("modal-close"),n=document.getElementById("reg-form"),i=document.getElementById("ticket-success-view"),s=document.getElementById("ticket-done-btn");function a(){r&&(r.classList.add("open"),r.setAttribute("aria-hidden","false"),ms.playClick())}function o(){r&&(r.classList.remove("open"),r.setAttribute("aria-hidden","true"))}e.forEach(f=>{f&&f.addEventListener("click",a)}),t&&t.addEventListener("click",o),s&&s.addEventListener("click",()=>{o(),i&&i.classList.add("hidden"),n&&(n.style.display="block",n.reset())}),n&&n.addEventListener("submit",f=>{var v,P,w;f.preventDefault();const g=((v=document.getElementById("team-name"))==null?void 0:v.value)||"CYBER_SQUAD",_=((P=document.getElementById("lead-name"))==null?void 0:P.value)||"LEAD_OPERATOR",m=((w=document.getElementById("track-select"))==null?void 0:w.value)||"Healthcare & AI Innovation",p=document.getElementById("ticket-team-name"),M=document.getElementById("ticket-lead-name"),S=document.getElementById("ticket-track");p&&(p.textContent=g.toUpperCase()),M&&(M.textContent=_.toUpperCase()),S&&(S.textContent=m.toUpperCase()),NS({particleCount:90,spread:80,origin:{y:.6},colors:["#FF2B75","#FF0055","#FFFFFF","#00F0FF"]}),ms.playSuccess(),n.style.display="none",i&&i.classList.remove("hidden")});const l=document.getElementById("trailer-modal"),c=document.getElementById("watch-trailer-btn"),u=document.getElementById("trailer-close-btn");c&&l&&c.addEventListener("click",()=>{l.classList.add("open"),l.setAttribute("aria-hidden","false"),ms.playClick()}),u&&l&&u.addEventListener("click",()=>{l.classList.remove("open"),l.setAttribute("aria-hidden","true")});const d=document.getElementById("venue-radar-btn");d&&d.addEventListener("click",()=>{ms.playClick();const f=document.getElementById("venue");f&&f.scrollIntoView({behavior:"smooth"})}),[r,l].forEach(f=>{f&&f.addEventListener("click",g=>{g.target===f&&(f.classList.remove("open"),f.setAttribute("aria-hidden","true"))})});const h=document.getElementById("open-rules-checklist-btn");h&&h.addEventListener("click",()=>{a()})}function YS(){const r=document.getElementById("search-modal"),e=document.getElementById("search-trigger"),t=document.getElementById("command-search-input"),n=document.querySelectorAll(".search-item");function i(){r&&(r.classList.add("open"),t&&(t.value="",t.focus()),ms.playClick())}function s(){r&&r.classList.remove("open")}e&&e.addEventListener("click",i),window.addEventListener("keydown",a=>{if((a.metaKey||a.ctrlKey)&&a.key==="k"&&(a.preventDefault(),r&&r.classList.contains("open")?s():i()),a.key==="Escape"){s();const o=document.getElementById("reg-modal"),l=document.getElementById("trailer-modal");o&&o.classList.remove("open"),l&&l.classList.remove("open")}}),r&&r.addEventListener("click",a=>{a.target===r&&s()}),t&&t.addEventListener("input",a=>{const o=a.target.value.toLowerCase().trim();n.forEach(l=>{var d,h;const c=((d=l.querySelector(".item-title"))==null?void 0:d.textContent.toLowerCase())||"",u=((h=l.querySelector(".item-desc"))==null?void 0:h.textContent.toLowerCase())||"";c.includes(o)||u.includes(o)?l.style.display="flex":l.style.display="none"})}),n.forEach(a=>{a.addEventListener("click",()=>{s()})})}function qS(){const r=document.getElementById("mobile-toggle"),e=document.getElementById("mobile-drawer"),t=document.getElementById("drawer-close"),n=document.querySelectorAll(".drawer-link");r&&e&&r.addEventListener("click",()=>{e.classList.add("open"),ms.playClick()}),t&&e&&t.addEventListener("click",()=>{e.classList.remove("open")}),n.forEach(i=>{i.addEventListener("click",()=>{e&&e.classList.remove("open")})})}function $S(){const r=document.getElementById("cyber-cursor");if(!r)return;const e=r.querySelector(".cursor-crosshair");window.addEventListener("mousemove",t=>{r.style.left=`${t.clientX}px`,r.style.top=`${t.clientY}px`}),document.addEventListener("mouseover",t=>{t.target.closest("button, a, input, select, .dock-card, .server-block-card, .track-card, .prize-card")?e&&e.classList.add("cursor-hover"):e&&e.classList.remove("cursor-hover")})}document.addEventListener("DOMContentLoaded",()=>{BS(),zS(),kS(),VS(),HS(),GS(),WS(),XS(),YS(),qS(),$S(),console.log("%c [CLOCKIT 2026] // CODE AGAINST THE CLOCK // PROTOCOL INITIALIZED ","background: #FF2B75; color: #fff; font-size: 14px; font-weight: bold; padding: 4px 8px; border-radius: 4px;")});
