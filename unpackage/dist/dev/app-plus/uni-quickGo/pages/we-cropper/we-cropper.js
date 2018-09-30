
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,1],".",[1],"page { -webkit-user-select: none; user-select: none; background-color: black; font-family: Arial, Helvetica, sans-serif; overflow-x: hidden; }\n.",[1],"flex { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; align-items: center; }\n.",[1],"cropper { position: absolute; top: 0; left: 0; }\n.",[1],"cropper-buttons { background-color: rgba(0, 0, 0, 0.95); color: white; }\n.",[1],"cropper-wrapper { position: relative; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; height: 100%; background-color: #e5e5e5; }\n.",[1],"cropper-buttons { position: fixed; display: -webkit-box; display: -webkit-flex; display: flex; bottom: 0; width: 100%; height: ",[0,100],"; line-height: ",[0,100],"; background-color: #68838B; }\n.",[1],"cropper-buttons .",[1],"upload, .",[1],"cropper-buttons .",[1],"getCropperImage { width: 50%; text-align: center; }\n",],undefined,{path:"./pages/we-cropper/we-cropper.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/we-cropper/we-cropper.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      