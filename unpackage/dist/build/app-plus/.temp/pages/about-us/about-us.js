require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([14],{32:function(t,e,s){"use strict";var i=a(s(1)),n=a(s(33));function a(t){return t&&t.__esModule?t:{default:t}}new i.default(n.default).$mount()},33:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(35),n=s.n(i),a=s(36);var c=function(t){s(34)},o=s(0)(n.a,a.a,c,null,null);e.default=o.exports},34:function(t,e){},35:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},methods:{checkVersion:function(){t.showLoading({title:"正在检测..."}),setTimeout(function(){t.hideLoading(),t.showToast({icon:"success",title:"当前为最新版本"})},2e3)}}}}).call(e,s(2).default)},36:function(t,e,s){"use strict";var i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"page"},[this._m(0),this._m(1),e("view",{staticClass:"option",attrs:{eventid:"1L1-0"},on:{click:this.checkVersion}},[e("text",{staticClass:"desc"},[this._v("检查更新")])]),this._m(2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"header"},[e("image",{staticClass:"logo",attrs:{src:"../../static/image/logo.png"}}),e("text",{staticClass:"title"},[this._v("尤尼快购 v1.0")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"option first"},[e("text",{staticClass:"desc"},[this._v("功能介绍")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"option"},[e("text",{staticClass:"desc"},[this._v("联系客服")])])}]};e.a=i}},[32]);