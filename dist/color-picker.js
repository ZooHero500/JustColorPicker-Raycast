"use strict";var J=Object.defineProperty;var tn=Object.getOwnPropertyDescriptor;var nn=Object.getOwnPropertyNames;var rn=Object.prototype.hasOwnProperty;var en=(t,n)=>{for(var r in n)J(t,r,{get:n[r],enumerable:!0})},an=(t,n,r,e)=>{if(n&&typeof n=="object"||typeof n=="function")for(let a of nn(n))!rn.call(t,a)&&a!==r&&J(t,a,{get:()=>n[a],enumerable:!(e=tn(n,a))||e.enumerable});return t};var on=t=>an(J({},"__esModule",{value:!0}),t);var Pn={};en(Pn,{default:()=>Jt});module.exports=on(Pn);var j=require("react"),y=require("@raycast/api");var un={grad:.9,turn:360,rad:360/(2*Math.PI)},g=function(t){return typeof t=="string"?t.length>0:typeof t=="number"},l=function(t,n,r){return n===void 0&&(n=0),r===void 0&&(r=Math.pow(10,n)),Math.round(r*t)/r+0},c=function(t,n,r){return n===void 0&&(n=0),r===void 0&&(r=1),t>r?r:t>n?t:n},zt=function(t){return(t=isFinite(t)?t%360:0)>0?t:t+360},yt=function(t){return{r:c(t.r,0,255),g:c(t.g,0,255),b:c(t.b,0,255),a:c(t.a)}},K=function(t){return{r:l(t.r),g:l(t.g),b:l(t.b),a:l(t.a,3)}},sn=/^#([0-9a-f]{3,8})$/i,W=function(t){var n=t.toString(16);return n.length<2?"0"+n:n},It=function(t){var n=t.r,r=t.g,e=t.b,a=t.a,u=Math.max(n,r,e),o=u-Math.min(n,r,e),i=o?u===n?(r-e)/o:u===r?2+(e-n)/o:4+(n-r)/o:0;return{h:60*(i<0?i+6:i),s:u?o/u*100:0,v:u/255*100,a}},Ct=function(t){var n=t.h,r=t.s,e=t.v,a=t.a;n=n/360*6,r/=100,e/=100;var u=Math.floor(n),o=e*(1-r),i=e*(1-(n-u)*r),s=e*(1-(1-n+u)*r),h=u%6;return{r:255*[e,i,o,o,s,e][h],g:255*[s,e,e,i,o,o][h],b:255*[o,o,s,e,e,i][h],a}},Mt=function(t){return{h:zt(t.h),s:c(t.s,0,100),l:c(t.l,0,100),a:c(t.a)}},wt=function(t){return{h:l(t.h),s:l(t.s),l:l(t.l),a:l(t.a,3)}},xt=function(t){return Ct((r=(n=t).s,{h:n.h,s:(r*=((e=n.l)<50?e:100-e)/100)>0?2*r/(e+r)*100:0,v:e+r,a:n.a}));var n,r,e},F=function(t){return{h:(n=It(t)).h,s:(a=(200-(r=n.s))*(e=n.v)/100)>0&&a<200?r*e/100/(a<=100?a:200-a)*100:0,l:a/2,a:n.a};var n,r,e,a},hn=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,ln=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,cn=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,bn=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Y={string:[[function(t){var n=sn.exec(t);return n?(t=n[1]).length<=4?{r:parseInt(t[0]+t[0],16),g:parseInt(t[1]+t[1],16),b:parseInt(t[2]+t[2],16),a:t.length===4?l(parseInt(t[3]+t[3],16)/255,2):1}:t.length===6||t.length===8?{r:parseInt(t.substr(0,2),16),g:parseInt(t.substr(2,2),16),b:parseInt(t.substr(4,2),16),a:t.length===8?l(parseInt(t.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(t){var n=cn.exec(t)||bn.exec(t);return n?n[2]!==n[4]||n[4]!==n[6]?null:yt({r:Number(n[1])/(n[2]?100/255:1),g:Number(n[3])/(n[4]?100/255:1),b:Number(n[5])/(n[6]?100/255:1),a:n[7]===void 0?1:Number(n[7])/(n[8]?100:1)}):null},"rgb"],[function(t){var n=hn.exec(t)||ln.exec(t);if(!n)return null;var r,e,a=Mt({h:(r=n[1],e=n[2],e===void 0&&(e="deg"),Number(r)*(un[e]||1)),s:Number(n[3]),l:Number(n[4]),a:n[5]===void 0?1:Number(n[5])/(n[6]?100:1)});return xt(a)},"hsl"]],object:[[function(t){var n=t.r,r=t.g,e=t.b,a=t.a,u=a===void 0?1:a;return g(n)&&g(r)&&g(e)?yt({r:Number(n),g:Number(r),b:Number(e),a:Number(u)}):null},"rgb"],[function(t){var n=t.h,r=t.s,e=t.l,a=t.a,u=a===void 0?1:a;if(!g(n)||!g(r)||!g(e))return null;var o=Mt({h:Number(n),s:Number(r),l:Number(e),a:Number(u)});return xt(o)},"hsl"],[function(t){var n=t.h,r=t.s,e=t.v,a=t.a,u=a===void 0?1:a;if(!g(n)||!g(r)||!g(e))return null;var o=function(i){return{h:zt(i.h),s:c(i.s,0,100),v:c(i.v,0,100),a:c(i.a)}}({h:Number(n),s:Number(r),v:Number(e),a:Number(u)});return Ct(o)},"hsv"]]},Nt=function(t,n){for(var r=0;r<n.length;r++){var e=n[r][0](t);if(e)return[e,n[r][1]]}return[null,void 0]},fn=function(t){return typeof t=="string"?Nt(t.trim(),Y.string):typeof t=="object"&&t!==null?Nt(t,Y.object):[null,void 0]};var U=function(t,n){var r=F(t);return{h:r.h,s:c(r.s+100*n,0,100),l:r.l,a:r.a}},X=function(t){return(299*t.r+587*t.g+114*t.b)/1e3/255},$t=function(t,n){var r=F(t);return{h:r.h,s:r.s,l:c(r.l+100*n,0,100),a:r.a}},Q=function(){function t(n){this.parsed=fn(n)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return t.prototype.isValid=function(){return this.parsed!==null},t.prototype.brightness=function(){return l(X(this.rgba),2)},t.prototype.isDark=function(){return X(this.rgba)<.5},t.prototype.isLight=function(){return X(this.rgba)>=.5},t.prototype.toHex=function(){return n=K(this.rgba),r=n.r,e=n.g,a=n.b,o=(u=n.a)<1?W(l(255*u)):"","#"+W(r)+W(e)+W(a)+o;var n,r,e,a,u,o},t.prototype.toRgb=function(){return K(this.rgba)},t.prototype.toRgbString=function(){return n=K(this.rgba),r=n.r,e=n.g,a=n.b,(u=n.a)<1?"rgba("+r+", "+e+", "+a+", "+u+")":"rgb("+r+", "+e+", "+a+")";var n,r,e,a,u},t.prototype.toHsl=function(){return wt(F(this.rgba))},t.prototype.toHslString=function(){return n=wt(F(this.rgba)),r=n.h,e=n.s,a=n.l,(u=n.a)<1?"hsla("+r+", "+e+"%, "+a+"%, "+u+")":"hsl("+r+", "+e+"%, "+a+"%)";var n,r,e,a,u},t.prototype.toHsv=function(){return n=It(this.rgba),{h:l(n.h),s:l(n.s),v:l(n.v),a:l(n.a,3)};var n},t.prototype.invert=function(){return f({r:255-(n=this.rgba).r,g:255-n.g,b:255-n.b,a:n.a});var n},t.prototype.saturate=function(n){return n===void 0&&(n=.1),f(U(this.rgba,n))},t.prototype.desaturate=function(n){return n===void 0&&(n=.1),f(U(this.rgba,-n))},t.prototype.grayscale=function(){return f(U(this.rgba,-1))},t.prototype.lighten=function(n){return n===void 0&&(n=.1),f($t(this.rgba,n))},t.prototype.darken=function(n){return n===void 0&&(n=.1),f($t(this.rgba,-n))},t.prototype.rotate=function(n){return n===void 0&&(n=15),this.hue(this.hue()+n)},t.prototype.alpha=function(n){return typeof n=="number"?f({r:(r=this.rgba).r,g:r.g,b:r.b,a:n}):l(this.rgba.a,3);var r},t.prototype.hue=function(n){var r=F(this.rgba);return typeof n=="number"?f({h:n,s:r.s,l:r.l,a:r.a}):l(r.h)},t.prototype.isEqual=function(n){return this.toHex()===f(n).toHex()},t}(),f=function(t){return t instanceof Q?t:new Q(t)},kt=[],Ft=function(t){t.forEach(function(n){kt.indexOf(n)<0&&(n(Q,Y),kt.push(n))})};var B=function(t){return typeof t=="string"?t.length>0:typeof t=="number"},b=function(t,n,r){return n===void 0&&(n=0),r===void 0&&(r=Math.pow(10,n)),Math.round(r*t)/r+0},S=function(t,n,r){return n===void 0&&(n=0),r===void 0&&(r=1),t>r?r:t>n?t:n},Lt=function(t){return{c:S(t.c,0,100),m:S(t.m,0,100),y:S(t.y,0,100),k:S(t.k,0,100),a:S(t.a)}},St=function(t){return{c:b(t.c,2),m:b(t.m,2),y:b(t.y,2),k:b(t.k,2),a:b(t.a,3)}};function Pt(t){return{r:b(255*(1-t.c/100)*(1-t.k/100)),g:b(255*(1-t.m/100)*(1-t.k/100)),b:b(255*(1-t.y/100)*(1-t.k/100)),a:t.a}}function Ht(t){var n=1-Math.max(t.r/255,t.g/255,t.b/255),r=(1-t.r/255-n)/(1-n),e=(1-t.g/255-n)/(1-n),a=(1-t.b/255-n)/(1-n);return{c:isNaN(r)?0:b(100*r),m:isNaN(e)?0:b(100*e),y:isNaN(a)?0:b(100*a),k:b(100*n),a:t.a}}function pn(t){var n=t.c,r=t.m,e=t.y,a=t.k,u=t.a,o=u===void 0?1:u;return B(n)&&B(r)&&B(e)&&B(a)?Pt(Lt({c:Number(n),m:Number(r),y:Number(e),k:Number(a),a:Number(o)})):null}var dn=/^device-cmyk\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,gn=function(t){var n=dn.exec(t);return n?Pt(Lt({c:Number(n[1])*(n[2]?1:100),m:Number(n[3])*(n[4]?1:100),y:Number(n[5])*(n[6]?1:100),k:Number(n[7])*(n[8]?1:100),a:n[9]===void 0?1:Number(n[9])/(n[10]?100:1)})):null};function jt(t,n){t.prototype.toCmyk=function(){return St(Ht(this.rgba))},t.prototype.toCmykString=function(){return r=St(Ht(this.rgba)),e=r.c,a=r.m,u=r.y,o=r.k,(i=r.a)<1?"device-cmyk("+e+"% "+a+"% "+u+"% "+o+"% / "+i+")":"device-cmyk("+e+"% "+a+"% "+u+"% "+o+"%)";var r,e,a,u,o,i},n.object.push([pn,"cmyk"]),n.string.push([gn,"cmyk"])}var Z=function(t){return typeof t=="string"?t.length>0:typeof t=="number"},H=function(t,n,r){return n===void 0&&(n=0),r===void 0&&(r=Math.pow(10,n)),Math.round(r*t)/r+0},p=function(t,n,r){return n===void 0&&(n=0),r===void 0&&(r=1),t>r?r:t>n?t:n},_=function(t){var n=t/255;return n<.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)},tt=function(t){return 255*(t>.0031308?1.055*Math.pow(t,.4166666666666667)-.055:12.92*t)},nt=96.422,rt=100,et=82.521,vn=function(t){var n,r,e={x:.9555766*(n=t).x+-.0230393*n.y+.0631636*n.z,y:-.0282895*n.x+1.0099416*n.y+.0210077*n.z,z:.0122982*n.x+-.020483*n.y+1.3299098*n.z};return r={r:tt(.032404542*e.x-.015371385*e.y-.004985314*e.z),g:tt(-.00969266*e.x+.018760108*e.y+41556e-8*e.z),b:tt(556434e-9*e.x-.002040259*e.y+.010572252*e.z),a:t.a},{r:p(r.r,0,255),g:p(r.g,0,255),b:p(r.b,0,255),a:p(r.a)}},mn=function(t){var n=_(t.r),r=_(t.g),e=_(t.b);return function(a){return{x:p(a.x,0,nt),y:p(a.y,0,rt),z:p(a.z,0,et),a:p(a.a)}}(function(a){return{x:1.0478112*a.x+.0228866*a.y+-.050127*a.z,y:.0295424*a.x+.9904844*a.y+-.0170491*a.z,z:-.0092345*a.x+.0150436*a.y+.7521316*a.z,a:a.a}}({x:100*(.4124564*n+.3575761*r+.1804375*e),y:100*(.2126729*n+.7151522*r+.072175*e),z:100*(.0193339*n+.119192*r+.9503041*e),a:t.a}))},L=216/24389,z=24389/27,yn=function(t){var n=t.l,r=t.a,e=t.b,a=t.alpha,u=a===void 0?1:a;if(!Z(n)||!Z(r)||!Z(e))return null;var o=function(i){return{l:p(i.l,0,400),a:i.a,b:i.b,alpha:p(i.alpha)}}({l:Number(n),a:Number(r),b:Number(e),alpha:Number(u)});return Mn(o)},Mn=function(t){var n=(t.l+16)/116,r=t.a/500+n,e=n-t.b/200;return vn({x:(Math.pow(r,3)>L?Math.pow(r,3):(116*r-16)/z)*nt,y:(t.l>8?Math.pow((t.l+16)/116,3):t.l/z)*rt,z:(Math.pow(e,3)>L?Math.pow(e,3):(116*e-16)/z)*et,a:t.alpha})};function At(t,n){t.prototype.toLab=function(){return e=mn(this.rgba),u=e.y/rt,o=e.z/et,a=(a=e.x/nt)>L?Math.cbrt(a):(z*a+16)/116,r={l:116*(u=u>L?Math.cbrt(u):(z*u+16)/116)-16,a:500*(a-u),b:200*(u-(o=o>L?Math.cbrt(o):(z*o+16)/116)),alpha:e.a},{l:H(r.l,2),a:H(r.a,2),b:H(r.b,2),alpha:H(r.alpha,3)};var r,e,a,u,o},t.prototype.delta=function(r){r===void 0&&(r="#FFF");var e=r instanceof t?r:new t(r),a=function(u,o){var i=u.l,s=u.a,h=u.b,M=o.l,N=o.a,$=o.b,A=180/Math.PI,k=Math.PI/180,Kt=Math.pow(Math.pow(s,2)+Math.pow(h,2),.5),Ut=Math.pow(Math.pow(N,2)+Math.pow($,2),.5),bt=(i+M)/2,R=Math.pow((Kt+Ut)/2,7),ft=.5*(1-Math.pow(R/(R+Math.pow(25,7)),.5)),O=s*(1+ft),T=N*(1+ft),q=Math.pow(Math.pow(O,2)+Math.pow(h,2),.5),D=Math.pow(Math.pow(T,2)+Math.pow($,2),.5),pt=(q+D)/2,w=O===0&&h===0?0:Math.atan2(h,O)*A,x=T===0&&$===0?0:Math.atan2($,T)*A;w<0&&(w+=360),x<0&&(x+=360);var V=x-w,G=Math.abs(x-w);G>180&&x<=w?V+=360:G>180&&x>w&&(V-=360);var d=w+x;G<=180?d/=2:d=(w+x<360?d+360:d-360)/2;var Xt=1-.17*Math.cos(k*(d-30))+.24*Math.cos(2*k*d)+.32*Math.cos(k*(3*d+6))-.2*Math.cos(k*(4*d-63)),Yt=M-i,dt=D-q,gt=2*Math.sin(k*V/2)*Math.pow(q*D,.5),Qt=1+.015*Math.pow(bt-50,2)/Math.pow(20+Math.pow(bt-50,2),.5),vt=1+.045*pt,mt=1+.015*pt*Xt,Zt=30*Math.exp(-1*Math.pow((d-275)/25,2)),_t=-2*Math.pow(R/(R+Math.pow(25,7)),.5)*Math.sin(2*k*Zt);return Math.pow(Math.pow(Yt/1/Qt,2)+Math.pow(dt/1/vt,2)+Math.pow(gt/1/mt,2)+_t*dt*gt/(1*vt*1*mt),.5)}(this.toLab(),e.toLab())/100;return p(H(a,3))},n.object.push([yn,"lab"])}var wn={grad:.9,turn:360,rad:360/(2*Math.PI)},at=function(t){return typeof t=="string"?t.length>0:typeof t=="number"},I=function(t,n,r){return n===void 0&&(n=0),r===void 0&&(r=Math.pow(10,n)),Math.round(r*t)/r+0},v=function(t,n,r){return n===void 0&&(n=0),r===void 0&&(r=1),t>r?r:t>n?t:n},ot=function(t){var n=t/255;return n<.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)},ut=function(t){return 255*(t>.0031308?1.055*Math.pow(t,1/2.4)-.055:12.92*t)},it=96.422,st=100,ht=82.521,xn=function(t){var n,r,e={x:.9555766*(n=t).x+-.0230393*n.y+.0631636*n.z,y:-.0282895*n.x+1.0099416*n.y+.0210077*n.z,z:.0122982*n.x+-.020483*n.y+1.3299098*n.z};return r={r:ut(.032404542*e.x-.015371385*e.y-.004985314*e.z),g:ut(-.00969266*e.x+.018760108*e.y+41556e-8*e.z),b:ut(556434e-9*e.x-.002040259*e.y+.010572252*e.z),a:t.a},{r:v(r.r,0,255),g:v(r.g,0,255),b:v(r.b,0,255),a:v(r.a)}},Nn=function(t){var n=ot(t.r),r=ot(t.g),e=ot(t.b);return function(a){return{x:v(a.x,0,it),y:v(a.y,0,st),z:v(a.z,0,ht),a:v(a.a)}}(function(a){return{x:1.0478112*a.x+.0228866*a.y+-.050127*a.z,y:.0295424*a.x+.9904844*a.y+-.0170491*a.z,z:-.0092345*a.x+.0150436*a.y+.7521316*a.z,a:a.a}}({x:100*(.4124564*n+.3575761*r+.1804375*e),y:100*(.2126729*n+.7151522*r+.072175*e),z:100*(.0193339*n+.119192*r+.9503041*e),a:t.a}))},P=216/24389,C=24389/27,Bt=function(t){return{l:v(t.l,0,100),c:t.c,h:(n=t.h,(n=isFinite(n)?n%360:0)>0?n:n+360),a:t.a};var n},Rt=function(t){return{l:I(t.l,2),c:I(t.c,2),h:I(t.h,2),a:I(t.a,3)}},$n=function(t){var n=t.l,r=t.c,e=t.h,a=t.a,u=a===void 0?1:a;if(!at(n)||!at(r)||!at(e))return null;var o=Bt({l:Number(n),c:Number(r),h:Number(e),a:Number(u)});return Et(o)},Wt=function(t){var n=function(u){var o=Nn(u),i=o.x/it,s=o.y/st,h=o.z/ht;return i=i>P?Math.cbrt(i):(C*i+16)/116,{l:116*(s=s>P?Math.cbrt(s):(C*s+16)/116)-16,a:500*(i-s),b:200*(s-(h=h>P?Math.cbrt(h):(C*h+16)/116)),alpha:o.a}}(t),r=I(n.a,3),e=I(n.b,3),a=Math.atan2(e,r)/Math.PI*180;return{l:n.l,c:Math.sqrt(r*r+e*e),h:a<0?a+360:a,a:n.alpha}},Et=function(t){return n={l:t.l,a:t.c*Math.cos(t.h*Math.PI/180),b:t.c*Math.sin(t.h*Math.PI/180),alpha:t.a},e=n.a/500+(r=(n.l+16)/116),a=r-n.b/200,xn({x:(Math.pow(e,3)>P?Math.pow(e,3):(116*e-16)/C)*it,y:(n.l>8?Math.pow((n.l+16)/116,3):n.l/C)*st,z:(Math.pow(a,3)>P?Math.pow(a,3):(116*a-16)/C)*ht,a:n.alpha});var n,r,e,a},kn=/^lch\(\s*([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)\s+([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,zn=function(t){var n=kn.exec(t);if(!n)return null;var r,e,a=Bt({l:Number(n[1]),c:Number(n[2]),h:(r=n[3],e=n[4],e===void 0&&(e="deg"),Number(r)*(wn[e]||1)),a:n[5]===void 0?1:Number(n[5])/(n[6]?100:1)});return Et(a)};function Ot(t,n){t.prototype.toLch=function(){return Rt(Wt(this.rgba))},t.prototype.toLchString=function(){return r=Rt(Wt(this.rgba)),e=r.l,a=r.c,u=r.h,(o=r.a)<1?"lch("+e+"% "+a+" "+u+" / "+o+")":"lch("+e+"% "+a+" "+u+")";var r,e,a,u,o},n.string.push([zn,"lch"]),n.object.push([$n,"lch"])}var In={grad:.9,turn:360,rad:360/(2*Math.PI)},lt=function(t){return typeof t=="string"?t.length>0:typeof t=="number"},E=function(t,n,r){return n===void 0&&(n=0),r===void 0&&(r=Math.pow(10,n)),Math.round(r*t)/r+0},ct=function(t,n,r){return n===void 0&&(n=0),r===void 0&&(r=1),t>r?r:t>n?t:n},Dt=function(t){return{h:(n=t.h,(n=isFinite(n)?n%360:0)>0?n:n+360),w:ct(t.w,0,100),b:ct(t.b,0,100),a:ct(t.a)};var n},Tt=function(t){return{h:E(t.h),w:E(t.w),b:E(t.b),a:E(t.a,3)}},qt=function(t){return{h:function(n){var r=n.r,e=n.g,a=n.b,u=n.a,o=Math.max(r,e,a),i=o-Math.min(r,e,a),s=i?o===r?(e-a)/i:o===e?2+(a-r)/i:4+(r-e)/i:0;return{h:60*(s<0?s+6:s),s:o?i/o*100:0,v:o/255*100,a:u}}(t).h,w:Math.min(t.r,t.g,t.b)/255*100,b:100-Math.max(t.r,t.g,t.b)/255*100,a:t.a}},Vt=function(t){return function(n){var r=n.h,e=n.s,a=n.v,u=n.a;r=r/360*6,e/=100,a/=100;var o=Math.floor(r),i=a*(1-e),s=a*(1-(r-o)*e),h=a*(1-(1-r+o)*e),M=o%6;return{r:255*[a,s,i,i,h,a][M],g:255*[h,a,a,s,i,i][M],b:255*[i,i,h,a,a,s][M],a:u}}({h:t.h,s:t.b===100?0:100-t.w/(100-t.b)*100,v:100-t.b,a:t.a})},Cn=function(t){var n=t.h,r=t.w,e=t.b,a=t.a,u=a===void 0?1:a;if(!lt(n)||!lt(r)||!lt(e))return null;var o=Dt({h:Number(n),w:Number(r),b:Number(e),a:Number(u)});return Vt(o)},Fn=/^hwb\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Sn=function(t){var n=Fn.exec(t);if(!n)return null;var r,e,a=Dt({h:(r=n[1],e=n[2],e===void 0&&(e="deg"),Number(r)*(In[e]||1)),w:Number(n[3]),b:Number(n[4]),a:n[5]===void 0?1:Number(n[5])/(n[6]?100:1)});return Vt(a)};function Gt(t,n){t.prototype.toHwb=function(){return Tt(qt(this.rgba))},t.prototype.toHwbString=function(){return r=Tt(qt(this.rgba)),e=r.h,a=r.w,u=r.b,(o=r.a)<1?"hwb("+e+" "+a+"% "+u+"% / "+o+")":"hwb("+e+" "+a+"% "+u+"%)";var r,e,a,u,o},n.string.push([Sn,"hwb"]),n.object.push([Cn,"hwb"])}var m=require("react/jsx-runtime");Ft([jt,At,Ot,Gt]);function Hn(t){if(!t||t.trim()==="")return"#000000";let n=t.trim().replace(/\s+/g," ");if(/^(hsl|hwb|rgb|rgba|lab|lch|device-cmyk)\s*\(/i.test(n)){let o=n.split(/\s*\(/)[0].toLowerCase(),i=n.replace(/^[^\\(]+\(|\)$/g,"");return`${o}(${i})`}let e=n.split(/[\s,/]+/).filter(o=>o!==""),a;try{if(e.length===3||e.length===4){let[o,i,s]=e;if(e.every(h=>h.endsWith("%")))a=e.length===4?"device-cmyk":"hwb";else if(o.includes("\xB0")||!isNaN(parseFloat(o))&&parseFloat(o)<=360&&i.endsWith("%")&&s.endsWith("%"))a="hsl";else if(e.every(h=>!isNaN(parseFloat(h))&&parseFloat(h)<=255))a=e.length===4?"rgba":"rgb";else if(e.length===3)e[0].includes("%")?a="lch":a="lab";else return"#000000"}else if(e.length===1&&/^#?[0-9A-Fa-f]{3,8}$/.test(e[0]))a="hex";else return"#000000"}catch{return"#000000"}let u;switch(a){case"rgb":case"rgba":u=`${a}(${e.join(", ")})`;break;case"hsl":e.length===4?u=`hsl(${e[0]} ${e[1]} ${e[2]} / ${e[3]})`:u=`hsl(${e.join(" ")})`;break;case"hex":u=e[0].startsWith("#")?e[0]:`#${e[0]}`;break;default:u=`${a}(${e.join(" ")})`}return u}function Jt(){let[t,n]=(0,j.useState)(""),[r,e]=(0,j.useState)([]);(0,j.useEffect)(()=>{a(t)},[t]);function a(o){o=o.trim();let i=null;if(o.startsWith("#")||/^[0-9A-Fa-f]{3}$|^[0-9A-Fa-f]{6}$/.test(o)?o.length===3||o.length===4?i=`#${o.slice(o.startsWith("#")?1:0).split("").map(s=>s+s).join("")}`:i=o.startsWith("#")?o:`#${o}`:i=Hn(o),console.log("parsedColor",i),i){let s=f(i);s.isValid()&&u(s)}}function u(o){let i=o.alpha()<1,s=o.toLab(),h=`${s.l} ${s.a} ${s.b}`,M=i?`lab(${h} / ${s.alpha})`:`lab(${h})`,N=o.toHsl(),$=i?`hsl(${N.h} ${N.s}% ${N.l}% / ${N.a})`:o.toHslString().replace(/,/g,""),A=[{format:"HEX",value:o.toHex()},{format:"RGB",value:o.toRgbString()},{format:"HSL",value:$},{format:"HWB",value:o.toHwbString()},{format:"CMYK",value:o.toCmykString()},{format:"LAB",value:M},{format:"LCH",value:o.toLchString()}];e(A)}return(0,m.jsx)(y.List,{onSearchTextChange:n,searchBarPlaceholder:"Enter color value (e.g., #fff, rgb(255,0,0))",isShowingDetail:!0,children:r.map(o=>(0,m.jsx)(Ln,{item:o,hex:r[0].value},o.format))})}function Ln({item:t,hex:n}){return(0,m.jsx)(y.List.Item,{title:t.format,subtitle:t.value,detail:(0,m.jsx)(y.List.Item.Detail,{markdown:`![${n}](http://localhost:3000/api/colorpng?raycast-width=350&raycast-height=350&c=${n.replace("#","")})`}),actions:(0,m.jsxs)(y.ActionPanel,{children:[(0,m.jsx)(y.Action.CopyToClipboard,{title:"Copy",content:t.value}),(0,m.jsx)(y.Action.OpenInBrowser,{title:"Open in Justcolorpicker",shortcut:{modifiers:["cmd","shift"],key:"enter"},url:`http://localhost:3000/en?c=${encodeURIComponent(n)}`})]})})}
