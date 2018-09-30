
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,1],],undefined,{path:"./pages/set/set-address/set-address.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/set/set-address/set-address.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      