import{R as u}from"./index-f80c8c95.js";import{c as E}from"./index-495e5f6b.js";var z=["children","className","innerRef","x","y","width","height","radius","all","top","bottom","left","right","topLeft","topRight","bottomLeft","bottomRight"];function c(){return c=Object.assign?Object.assign.bind():function(t){for(var i=1;i<arguments.length;i++){var e=arguments[i];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},c.apply(this,arguments)}function F(t,i){if(t==null)return{};var e={},a=Object.keys(t),h,n;for(n=0;n<a.length;n++)h=a[n],!(i.indexOf(h)>=0)&&(e[h]=t[h]);return e}function K(t){var i=t.all,e=t.bottom,a=t.bottomLeft,h=t.bottomRight,n=t.height,p=t.left,o=t.radius,g=t.right,s=t.top,m=t.topLeft,r=t.topRight,d=t.width,b=t.x,f=t.y;r=i||s||g||r,h=i||e||g||h,a=i||e||p||a,m=i||s||p||m,o=Math.max(1,Math.min(o,Math.min(d,n)/2));var l=2*o,v=("M"+(b+o)+","+f+" h"+(d-l)+`
 `+(r?"a"+o+","+o+" 0 0 1 "+o+","+o:"h"+o+"v"+o)+`
 v`+(n-l)+`
 `+(h?"a"+o+","+o+" 0 0 1 "+-o+","+o:"v"+o+"h"+-o)+`
 h`+(l-d)+`
 `+(a?"a"+o+","+o+" 0 0 1 "+-o+","+-o:"h"+-o+"v"+-o)+`
 v`+(l-n)+`
 `+(m?"a"+o+","+o+" 0 0 1 "+o+","+-o:"v"+-o+"h"+o)+`
z`).split(`
`).join("");return v}function q(t){var i=t.children,e=t.className,a=t.innerRef,h=t.x,n=t.y,p=t.width,o=t.height,g=t.radius,s=t.all,m=s===void 0?!1:s,r=t.top,d=r===void 0?!1:r,b=t.bottom,f=b===void 0?!1:b,l=t.left,v=l===void 0?!1:l,R=t.right,j=R===void 0?!1:R,L=t.topLeft,O=L===void 0?!1:L,x=t.topRight,M=x===void 0?!1:x,y=t.bottomLeft,N=y===void 0?!1:y,$=t.bottomRight,P=$===void 0?!1:$,B=F(t,z),w=K({x:h,y:n,width:p,height:o,radius:g,all:m,top:d,bottom:f,left:v,right:j,topLeft:O,topRight:M,bottomLeft:N,bottomRight:P});return i?u.createElement(u.Fragment,null,i({path:w})):u.createElement("path",c({ref:a,className:E("visx-bar-rounded",e),d:w},B))}export{q as B};
