require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([3],{57:function(t,e,s){"use strict";var a=i(s(1)),n=i(s(58));function i(t){return t&&t.__esModule?t:{default:t}}new a.default(n.default).$mount()},58:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(60),n=s.n(a),i=s(61);var c=function(t){s(59)},o=s(0)(n.a,i.a,c,null,null);e.default=o.exports},59:function(t,e){},60:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{nickName:"尤尼",gender:1,phone:"18688886666"}},methods:{changeName:function(){t.navigateTo({url:"/pages/set/set-name/set-name?name="+this.nickName})},setGender:function(){var e=this;t.showActionSheet({itemList:["男","女"],success:function(t){var s=t.tapIndex;e.gender=0==s?1:0}})},changePhone:function(){t.navigateTo({url:"/pages/set/set-phone/set-phone?phone="+this.phone})},pickAddress:function(){t.navigateTo({url:"/pages/set/set-address/set-address"})}}}}).call(e,s(2).default)},61:function(t,e,s){"use strict";var a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"page"},[s("view",{staticClass:"option",attrs:{eventid:"slq-0"},on:{click:t.changeName}},[s("text",{staticClass:"desc"},[t._v("昵称")]),s("text",{staticClass:"info"},[t._v(t._s(t.nickName))]),s("image",{staticClass:"more",attrs:{src:"../../static/image/more.png"}})]),s("view",{staticClass:"option",attrs:{eventid:"miL-1"},on:{click:t.setGender}},[s("text",{staticClass:"desc"},[t._v("性别")]),s("text",{staticClass:"info"},[t._v(t._s(1==t.gender?"男":"女"))]),s("image",{staticClass:"more",attrs:{src:"../../static/image/more.png"}})]),s("view",{staticClass:"option end",attrs:{eventid:"N6x-2"},on:{click:t.changePhone}},[s("text",{staticClass:"desc"},[t._v("手机号码")]),s("text",{staticClass:"info"},[t._v(t._s(t.phone))]),s("image",{staticClass:"more",attrs:{src:"../../static/image/more.png"}})]),s("view",{staticClass:"option",attrs:{eventid:"ycr-3"},on:{click:t.pickAddress}},[s("text",{staticClass:"desc"},[t._v("收货地址")]),s("text",{staticClass:"info"},[t._v("已设置")]),s("image",{staticClass:"more",attrs:{src:"../../static/image/more.png"}})])])},staticRenderFns:[]};e.a=a}},[57]);