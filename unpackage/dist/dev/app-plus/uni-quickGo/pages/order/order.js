
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,1],".",[1],"page { width: 100%; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; flex-direction: row; -webkit-flex-wrap: wrap; flex-wrap: wrap; -webkit-align-content: flex-start; align-content: flex-start; }\n.",[1],"menu { width: 100%; height: ",[0,100],"; background: #B8B8B8; }\n.",[1],"item { display: inline-block; width: 33.3%; height: ",[0,100],"; text-align: center; line-height: ",[0,100],"; color: white; font-size: ",[0,32],"; }\n.",[1],"item:active { background: #EBEBEB; }\n.",[1],"item:hover { border-bottom: solid ",[0,8]," #66ffcc; box-sizing: border-box; color: #66FFCC; }\n.",[1],"activeClass { border-bottom: solid ",[0,8]," #66ffcc; box-sizing: border-box; color: #66FFCC; }\n",],undefined,{path:"./pages/order/order.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/order/order.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      