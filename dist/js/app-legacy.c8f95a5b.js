(function(e){function t(t){for(var n,a,l=t[0],c=t[1],u=t[2],h=0,d=[];h<l.length;h++)a=l[h],s[a]&&d.push(s[a][0]),s[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);o&&o(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],n=!0,l=1;l<i.length;l++){var c=i[l];0!==s[c]&&(n=!1)}n&&(r.splice(t--,1),e=a(a.s=i[0]))}return e}var n={},s={app:0},r=[];function a(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=n,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(i,n,function(t){return e[t]}.bind(null,n));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="https://unpkg.com/datocms-plugin-better-links@0.0.6/dist/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var o=c;r.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},1947:function(e,t,i){"use strict";var n=i("5f4b"),s=i.n(n);s.a},"37df":function(e,t,i){"use strict";var n=i("9441"),s=i.n(n);s.a},"56d7":function(e,t,i){"use strict";i.r(t);i("cadf"),i("551c"),i("097d"),i("b107");var n=i("2b0e"),s=i("8d6e"),r=i.n(s),a=i("d619"),l=function(e){var t=e.url,i=e.token;return new a["GraphQLClient"](t,{headers:{Authorization:i}})},c=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"BetterLinks",attrs:{id:"app"}},[i("Selecty",{attrs:{items:e.items,"item-height":34,"scroller-max-height":136,searchValue:e.searchValue,loading:e.loading,placeholder:"Select..."},on:{"update:searchValue":function(t){e.searchValue=t}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),i("div",{staticClass:"BetterLinks__action",on:{click:function(t){return t.preventDefault(),e.triggerAction(t)}}},[i("a",{staticClass:"flex items-center",attrs:{href:"#"}},[e._m(0),e._v("\n      Create New "+e._s(e.fieldName)+"\n    ")])])],1)},u=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"h-6 w-6 relative mr-2"},[i("div",{staticClass:"bar horizontal"}),i("div",{staticClass:"bar vertical"})])}],o=(i("ac6a"),i("8615"),i("133d")),h=(i("96cf"),i("3040")),d=(i("28a5"),i("874f")),f=i("c67b"),m=i("070e"),p=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"Selecty",on:{mouseleave:e.hideSearchResults,blur:e.hideSearchResults,keydown:[function(t){return"button"in t||!e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?e.downItem(t):null},function(t){return"button"in t||!e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?e.upItem(t):null}],keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.setSelectedItem(e.highlightedItem)}}},[i("div",{staticClass:"Selecty__container"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.searchValue,expression:"searchValue"}],staticClass:"Selecty__input",attrs:{placeholder:e.placeholder,type:"text"},domProps:{value:e.searchValue},on:{click:e.showSearchResults,keydown:function(){e.clearSelectedItem(),e.showSearchResults()},input:function(t){t.target.composing||(e.searchValue=t.target.value)}}}),i("div",{staticClass:"Selecty__actions",on:{click:e.toggleSearchResults}},[e.searchResultsVisible?e._t("upArrow",[i("div",{staticClass:"Selecty__arrow Selecty__arrow--up"})]):e._t("downArrow",[i("div",{staticClass:"Selecty__arrow Selecty__arrow--down"})])],2)]),e.searchResultsVisible?i("div",{staticClass:"Selecty__list"},[e.hasSearchResults?i("DynamicScroller",{ref:"scroller",staticClass:"Selecty__scroller",style:{maxHeight:e.scrollerMaxHeight+"px"},attrs:{items:e.searchResults,"min-item-height":e.itemHeight,"item-height":e.itemHeight,buffer:0},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.item,s=t.index,r=t.active;return[i("DynamicScrollerItem",{attrs:{item:n,active:r,"size-dependencies":[n.display],"data-index":s}},[i("div",{key:n.id,ref:"input",class:{Selecty__list__item:!0,selected:e.selectedItem&&n.id===e.selectedItem.id||e.highlightedItem&&n.id===e.highlightedItem.id},style:{height:(n.height||e.itemHeight)+"px"},attrs:{id:"bl-item-"+s},on:{click:function(t){e.setSelectedItem(n)},mouseenter:function(t){e.setHighlightedItem(n)}}},[e._t("item",[e._v("\n              "+e._s(n.display)+"\n            ")],{data:n})],2)])]}}])}):e.loading?e._t("loading",[i("div",{staticClass:"Selecty__message Selecty__message--loading"},[e._v("\n        Loading...\n      ")])]):e._t("noResults",[i("div",{staticClass:"Selecty__message Selecty__message--no-results"},[e._v("\n        No results found\n      ")])])],2):e._e()])},g=[],v=(i("6762"),i("2fdb"),i("8afe")),b=(i("20d6"),i("7514"),i("c5f6"),i("e508")),_=i("85b1"),y=i("e133"),S={name:"Selecty",props:{value:[String,Number],items:Array,placeholder:String,itemHeight:Number,scrollerMaxHeight:Number,loading:Boolean},components:{DynamicScroller:b["a"],DynamicScrollerItem:b["b"]},data:function(){return{searchValue:"",searchResultsVisible:!1,selectedItem:null,highlightedItem:null}},watch:{items:function(e,t){e!==t&&this.setSelectedItem()},selectedItem:function(e){this.$emit("input",e?e.value:e)},searchValue:Object(_["a"])(function(e){this.$emit("update:searchValue",e)},200)},methods:{showSearchResults:function(){this.searchResultsVisible=!0},hideSearchResults:function(){this.searchResultsVisible=!1,this.highlightedItem=null},toggleSearchResults:function(){this.searchResultsVisible?(this.searchResultsVisible=!1,this.highlightedItem=null):this.searchResultsVisible=!0},setSelectedItem:function(e){var t=this;e?(this.searchValue=e.display,this.selectedItem=e,this.hideSearchResults()):this.value&&this.setSelectedItem(this.items.find(function(e){return e.value===t.value}))},setHighlightedItem:function(e){this.highlightedItem=e},clearSelectedItem:function(){this.hasSelectedItem&&(this.selectedItem=null)},nextItem:function(e){var t=this.highlightedItem,i=this.searchResults,n=t?i.findIndex(function(e){return e.id===t.id}):-1;if(n="down"===e?n+1:n-1,n!==i.length){this.setHighlightedItem(i[n]);var s=this.$refs.scroller;if(s){var r=document.getElementById("bl-item-".concat(n));r||(s.$el.scrollTop+="down"===e?this.itemHeight:-this.itemHeight)}}},downItem:function(){this.nextItem("down")},upItem:function(){this.nextItem("up")}},computed:{searchResults:function(){var e=this.searchValue.toLowerCase();if(""===e)return this.items;if(this.hasSelectedItem){var t=this.selectedItem,i=Object(y["a"])(Object(v["a"])(this.items),t);return i.unshift(t),i}return this.items.filter(function(t){var i=t.value.toLowerCase(),n=t.display.toLowerCase();return i.includes(e)||n.includes(e)})},hasSearchResults:function(){return 0!==this.searchResults.length},hasSearchValue:function(){return 0!==this.searchValue.length},hasSelectedItem:function(){return null!==this.selectedItem}},mounted:function(){this.setSelectedItem()}},w=S,I=(i("37df"),i("2877")),k=Object(I["a"])(w,p,g,!1,null,null,null);k.options.__file="index.vue";var x=k.exports,R={props:{plugin:Object},components:{Selecty:x},data:function(){var e=this.plugin,t=e.field.attributes,i=t.label,n=t.api_key,s=t.validators,r=e.parameters,a=r.instance.fields;return{items:[],selected:null,loading:!1,fieldName:i,fieldLinkId:s.item_item_type.item_types[0],fieldApiKey:n,searchValue:"",searchFields:a.split(",").map(function(e){return e.trim()})}},methods:{triggerAction:function(){this.plugin.createNewItem(this.fieldLinkId)},searchItems:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t){var i,n,s,r,a,l,c,u,h;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return i="",n=this.fieldName,s=this.searchFields,r="".concat(Object(d["a"])(Object(f["a"])(n)),"s"),a=s.map(function(e){return Object(f["a"])(e)}),l="all".concat(r),c=function(e){return"{\n        ".concat(e,': {\n          matches: {\n            pattern: "').concat(t,'"\n          }\n        }\n      }')},""!==t&&(i="OR: [".concat(a.map(function(e){return c(e)}),"]")),u="query All".concat(r,"{\n        ").concat(l,"(").concat(i,") {\n          id\n          ").concat(a.join("\n"),"\n        }\n      }"),e.next=10,this.$graphql.request(u);case 10:return h=e.sent,e.abrupt("return",h[l].map(function(e){var t=e.id,i=Object(o["a"])(e,["id"]);return{id:t,value:t,display:Object.values(Object(m["a"])(i,a)).join(" ")}}));case 12:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},watch:{selected:function(e){var t=this.plugin;t.setFieldValue(t.fieldPath,e)}},mounted:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(){var t,i,n,s=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this.plugin,i=this.searchItems,n=this.searchValue,this.selected=t.getFieldValue(t.fieldPath),this.unsubscribe=t.addFieldChangeListener(t.fieldPath,function(){s.selected=t.getFieldValue(t.fieldPath)}),this.loading=!0,e.next=6,i(n);case 6:this.items=e.sent,this.loading=!1;case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),beforeDestroy:function(){this.unsubscribe&&this.unsubscribe()}},V=R,C=(i("1947"),Object(I["a"])(V,c,u,!1,null,null,null));C.options.__file="index.vue";var j=C.exports;n["a"].config.productionTip=!1,n["a"].prototype.$moo="cow",r.a.init(function(e){e.startAutoResizer();var t=e.parameters.global.apiToken;n["a"].prototype.$graphql=l({url:"https://graphql.datocms.com",token:t}),new n["a"]({render:function(t){return t(j,{props:{plugin:e}})}}).$mount("#app")})},"5f4b":function(e,t,i){},9441:function(e,t,i){},b107:function(e,t,i){}});