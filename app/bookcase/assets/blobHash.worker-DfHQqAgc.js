(function(){"use strict";function o(r){return r.arrayBuffer().then(t=>crypto.subtle.digest("SHA-256",t).then(e=>Array.from(new Uint8Array(e)).map(n=>n.toString(16).padStart(2,"0")).join("")))}self.onmessage=r=>{const{buffer:t,type:e}=r.data,n=new Blob([t],{type:e});o(n).then(s=>{self.postMessage({buffer:t,type:e,hash:s},[t])})}})();
//# sourceMappingURL=blobHash.worker-DfHQqAgc.js.map
