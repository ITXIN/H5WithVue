(()=>{var e,r,t={},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var a=o[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.m=t,n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((r,t)=>(n.f[t](e,r),r)),[])),n.u=e=>({650:"detailChunk",672:"homeChunk"}[e]+".js"),n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="webpack-project:",n.l=(t,o,a,i)=>{if(e[t])e[t].push(o);else{var c,l;if(void 0!==a)for(var u=document.getElementsByTagName("script"),p=0;p<u.length;p++){var s=u[p];if(s.getAttribute("src")==t||s.getAttribute("data-webpack")==r+a){c=s;break}}c||(l=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",r+a),c.src=t),e[t]=[o];var d=(r,o)=>{c.onerror=c.onload=null,clearTimeout(f);var n=e[t];if(delete e[t],c.parentNode&&c.parentNode.removeChild(c),n&&n.forEach((e=>e(o))),r)return r(o)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),l&&document.head.appendChild(c)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var r=n.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&!e;)e=t[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e={179:0};n.f.j=(r,t)=>{var o=n.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else{var a=new Promise(((t,n)=>o=e[r]=[t,n]));t.push(o[2]=a);var i=n.p+n.u(r),c=new Error;n.l(i,(t=>{if(n.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;c.message="Loading chunk "+r+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,o[1](c)}}),"chunk-"+r,r)}};var r=(r,t)=>{var o,a,[i,c,l]=t,u=0;if(i.some((r=>0!==e[r]))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);l&&l(n)}for(r&&r(t);u<i.length;u++)a=i[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0},t=self.webpackChunkwebpack_project=self.webpackChunkwebpack_project||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),console.log(2),n.e(672).then(n.bind(n,258)).then((function(e){e.home()}))})();