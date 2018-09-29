require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([8],{27:function(t,e,s){"use strict";var a=n(s(2)),i=n(s(28));function n(t){return t&&t.__esModule?t:{default:t}}s(0).default;new a.default(i.default).$mount()},28:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(30),i=s.n(a),n=s(31),o=!1;var c=function(t){o||s(29)},r=s(1)(i.a,n.a,c,null,null);r.options.__file="..\\..\\..\\workspace\\uni-quickGo\\pages\\mine\\mine.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] mine.vue: functional components are not supported with templates, they should use render functions."),e.default=r.exports},29:function(t,e){},30:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(0).default;e.default={data:function(){return{src:""}},methods:{handleSet:function(){a.navigateTo({url:"/pages/set/set"})},changeHeadPic:function(){a.chooseImage({count:1,sizeType:["compressed "],success:function(t){t.tempFilePaths[0]}})},toAccount:function(){a.navigateTo({url:"/pages/account/account"})},toOrder:function(){a.navigateTo({url:"/pages/order/order"})},toFootPrint:function(){a.navigateTo({url:"/pages/footprint/footprint"})},toAboutUs:function(){a.navigateTo({url:"/pages/about-us/about-us"})},toFeedBack:function(){a.navigateTo({url:"/pages/feedback/feedback"})}}}},31:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"page"},[s("view",{staticClass:"header"},[s("image",{staticClass:"banner",attrs:{src:"../../static/image/mine-banner.jpg"}}),t._v(" "),s("image",{staticClass:"set-png",attrs:{src:"../../static/image/set.png",eventid:"0"},on:{click:t.handleSet}}),t._v(" "),s("image",{staticClass:"head-portrait",attrs:{src:t.src?t.src:"../../static/image/default-headPic.png",eventid:"1"},on:{click:t.changeHeadPic}}),t._v(" "),s("text",{staticClass:"nick-name"},[t._v("尤尼")])]),t._v(" "),s("view",{staticClass:"option first",attrs:{eventid:"2"},on:{click:t.toAccount}},[s("image",{staticClass:"option-img",attrs:{src:"../../static/image/count.png"}}),t._v(" "),s("text",{staticClass:"desc"},[t._v("我的账户")])]),t._v(" "),s("view",{staticClass:"option",attrs:{eventid:"3"},on:{click:t.toOrder}},[s("image",{staticClass:"option-img bigger",attrs:{src:"../../static/image/order.png"}}),t._v(" "),s("text",{staticClass:"desc"},[t._v("我的订单")])]),t._v(" "),s("view",{staticClass:"option",attrs:{eventid:"4"},on:{click:t.toFootPrint}},[s("image",{staticClass:"option-img bigger",attrs:{src:"../../static/image/foot.png"}}),t._v(" "),s("text",{staticClass:"desc"},[t._v("我的足迹")])]),t._v(" "),s("view",{staticClass:"option",attrs:{eventid:"5"},on:{click:t.toFeedBack}},[s("image",{staticClass:"option-img",attrs:{src:"../../static/image/advice.png"}}),t._v(" "),s("text",{staticClass:"desc"},[t._v("意见反馈")])]),t._v(" "),s("view",{staticClass:"option",attrs:{eventid:"6"},on:{click:t.toAboutUs}},[s("image",{staticClass:"option-img",attrs:{src:"../../static/image/about.png"}}),t._v(" "),s("text",{staticClass:"desc"},[t._v("关于我们")])])])};a._withStripped=!0;var i={render:a,staticRenderFns:[]};e.a=i}},[27]);
//# sourceMappingURL=../../.sourcemap/pages/mine/mine.js.map