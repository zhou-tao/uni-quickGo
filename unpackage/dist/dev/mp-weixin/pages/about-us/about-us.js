require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([14],{32:function(t,e,s){"use strict";var n=o(s(2)),i=o(s(33));function o(t){return t&&t.__esModule?t:{default:t}}s(0).default;new n.default(i.default).$mount()},33:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(35),i=s.n(n),o=s(36),a=!1;var u=function(t){a||s(34)},c=s(1)(i.a,o.a,u,null,null);c.options.__file="..\\..\\..\\workspace\\uni-quickGo\\pages\\about-us\\about-us.vue",c.esModule&&Object.keys(c.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),c.options.functional&&console.error("[vue-loader] about-us.vue: functional components are not supported with templates, they should use render functions."),e.default=c.exports},34:function(t,e){},35:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(0).default;e.default={data:function(){return{}},methods:{checkVersion:function(){n.showLoading({title:"正在检测..."}),setTimeout(function(){n.hideLoading(),n.showToast({icon:"success",title:"当前为最新版本!"})},2e3)}}}},36:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"page"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("view",{staticClass:"option",attrs:{eventid:"0"},on:{click:t.checkVersion}},[s("text",{staticClass:"desc"},[t._v("检查更新")])]),t._v(" "),t._m(2)])};n._withStripped=!0;var i={render:n,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"header"},[e("image",{staticClass:"logo",attrs:{src:"../../static/image/logo.png"}}),this._v(" "),e("text",{staticClass:"title"},[this._v("尤尼快购 v1.0")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"option first"},[e("text",{staticClass:"desc"},[this._v("功能介绍")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"option"},[e("text",{staticClass:"desc"},[this._v("联系客服")])])}]};e.a=i}},[32]);
//# sourceMappingURL=../../.sourcemap/pages/about-us/about-us.js.map