
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,1],],undefined,{path:"./pages/footprint/footprint.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/footprint/footprint.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      