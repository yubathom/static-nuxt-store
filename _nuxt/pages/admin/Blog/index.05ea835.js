(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{258:function(t,e,r){"use strict";r.r(e);r(28),r(13),r(14),r(8),r(24);var n=r(10),o=(r(4),r(0)),c=r(55),l=r(44),d=r.n(l);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var f={name:"BlogIndex",layout:"admin",components:{},filters:{},props:{},data:function(){return{}},fetch:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,t.params,e.next=3,r.dispatch("BlogStore/list");case 3:case"end":return e.stop()}}),e)})))()},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.params,t.error;case 1:case"end":return e.stop()}}),e)})))()},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)({list:function(t){return t.BlogStore.list}})),watch:{},created:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},mounted:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},methods:{toDate:function(t){return d()(t).format("DD/MM/YYYY hh:mm:ss")}},head:function(){return{title:"Page title",meta:[{hid:"description",name:"description",content:"My custom description"}]}}},v=r(3),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pt-2 pb-6 md:py-6"},[t._m(0),t._v(" "),r("div",{staticClass:"max-w-7xl mx-auto px-4 sm:px-6 md:px-8"},[r("div",{staticClass:"bg-white px-4 py-5 border-b border-gray-200 sm:px-6"},[r("div",{staticClass:"-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-no-wrap"},[t._m(1),t._v(" "),r("div",{staticClass:"ml-4 mt-2 flex-shrink-0"},[r("span",{staticClass:"inline-flex rounded-md shadow-sm"},[r("nuxt-link",{staticClass:"relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700",attrs:{to:"/admin/Blog/New",type:"button"}},[t._v("Criar nova postagem")])],1)])])]),t._v(" "),r("div",{staticClass:"bg-white shadow overflow-hidden sm:rounded-md"},[r("ul",t._l(t.list,(function(e){return r("li",{key:e._id},[r("nuxt-link",{staticClass:"block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out",attrs:{to:"/admin/Blog/"+e._id}},[r("div",{staticClass:"px-4 py-4 flex items-center sm:px-6"},[r("div",{staticClass:"min-w-0 flex-1 sm:flex sm:items-center sm:justify-between"},[r("div",[r("div",{staticClass:"text-sm leading-5 font-medium text-indigo-600 truncate"},[t._v("\n                    "+t._s(e.title)+"\n                    "),r("span",{staticClass:"ml-1 font-normal text-gray-500"},[t._v("Publicado")])]),t._v(" "),r("div",{staticClass:"mt-2 flex"},[r("div",{staticClass:"flex items-center text-sm leading-5 text-gray-500"},[r("svg",{staticClass:"flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400",attrs:{viewBox:"0 0 20 20",fill:"currentColor"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z","clip-rule":"evenodd"}})]),t._v(" "),r("span",[t._v(t._s(t.toDate(e._createDate)))])])])])]),t._v(" "),r("div",{staticClass:"ml-5 flex-shrink-0"},[r("svg",{staticClass:"h-5 w-5 text-gray-400",attrs:{viewBox:"0 0 20 20",fill:"currentColor"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})])])])])],1)})),0)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-8"},[e("h1",{staticClass:"text-2xl font-semibold text-gray-900"},[this._v("Blog")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ml-4 mt-2"},[e("h3",{staticClass:"text-lg leading-6 font-medium text-gray-900"},[this._v("Seus posts")])])}],!1,null,null,null);e.default=component.exports}}]);