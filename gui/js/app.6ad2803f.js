(function(e){function t(t){for(var r,i,u=t[0],c=t[1],s=t[2],l=0,p=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var f=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.candebug?n("div",{staticStyle:{"text-align":"center",color:"blue"}},[e._m(0)]):e._e()},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" Hello this is Benjamin4k I18N "),n("br"),e._v(" This server using Leak Script, XD "),n("br"),e._v(" Dont try to leak This "),n("br"),e._v(" I hope you die soon "),n("br"),e._v(" press f for respect to Benjamin4k "),n("br"),e._v(" Buy this script in Nakaaaa#8558 (Discord) ")])}],i=(n("d3b7"),n("e9c4"),{components:{},data:function(){return{candebug:!1}},methods:{receiveLua:function(e){if(e&&e.data){var t=e.data;"NKCore:language:get"===t.type&&(this.NameResource=t.resource,this.LangData())}},LangData:function(){var e=this.NameResource;"naka-i18n"===!e&&(this.candebug=!0),fetch("https://".concat(e,"/NKCore:language:get"),{method:"POST",headers:{},body:JSON.stringify(window.nuiSystemLanguages)})}},created:function(){window.addEventListener("message",this.receiveLua)},destroyed:function(){window.removeEventListener("message",this.receiveLua)}}),u=i,c=(n("034f"),n("2877")),s=Object(c["a"])(u,o,a,!1,null,null,null),f=s.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(f)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.6ad2803f.js.map