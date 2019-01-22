(function(t){function e(e){for(var n,a,s=e[0],d=e[1],u=e[2],c=0,p=[];c<s.length;c++)a=s[c],r[a]&&p.push(r[a][0]),r[a]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(t[n]=d[n]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,s=1;s<o.length;s++){var d=o[s];0!==r[d]&&(n=!1)}n&&(i.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},r={app:0},i=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/Vue.js-To-do-App/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=d;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("64a9"),r=o.n(n);r.a},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("097d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",staticStyle:{"border-radius":"10px"},attrs:{id:"app"}},[n("img",{attrs:{alt:"Vue logo",src:o("cf05")}}),n("todo",{attrs:{msg:"To-do App in Vue"}})],1)},i=[],a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo"},[o("h1",[t._v(t._s(t.msg))]),o("br"),o("div",{staticClass:"input-group mb-3 input-app"},[o("input",{staticClass:"form-control",attrs:{type:"text","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default",placeholder:"Enter your To-do",id:"todo"},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.addTodo(e):null}}}),o("div",{staticClass:"input-group-append"},[o("button",{staticClass:"btn btn-success",attrs:{type:"button",id:"button-addon2"},on:{click:t.addTodo}},[t._v("Add")])])]),o("transition-group",{attrs:{name:"list",tag:"p"}},t._l(t.posts,function(e){return o("span",{key:e.id,staticClass:"list-item input-group mb-3 input-app"},[e.edit?o("input",{staticClass:"form-control text-center",attrs:{type:"text",id:e.id},domProps:{value:e.title},on:{blur:t.noEditTodo}}):o("div",{staticClass:"form-control",class:{completed:e.completed},attrs:{id:e.id},on:{click:t.completedTodo,dblclick:t.editTodo}},[t._v(t._s(e.title)+" ")]),o("div",{staticClass:"input-group-append"},[o("button",{staticClass:"btn starButton",class:{starred:e.starred},attrs:{type:"button",id:e.id},on:{click:t.starTodo}},[o("i",{staticClass:"fa fa-star",attrs:{id:e.id,"aria-hidden":"true"}})]),o("button",{staticClass:"btn btn-danger",attrs:{type:"button",id:e.id},on:{click:t.deleteTodo}},[o("i",{staticClass:"fa fa-times",attrs:{id:e.id,"aria-hidden":"true"}})])])])}),0)],1)},s=[],d={name:"Todo",props:{msg:String},data:function(){return{posts:[{id:1,title:"Learn Vue",completed:!1,edit:!1,starred:!1},{id:2,title:"Have a good time",completed:!1,edit:!1,starred:!1},{id:3,title:"Conquer the World",completed:!1,edit:!1,starred:!1}],valor:"samuel"}},methods:{starTodo:function(t){var e=this.posts.map(function(e){return e.id==t.target.id&&(e.starred=!e.starred),e});this.posts=e},addTodo:function(){var t=document.querySelector("#todo"),e=100*Math.random(),o=this.posts.some(function(t){return t.id==e});while(o)e=100*Math.random(),o=this.posts.some(function(t){return t.id==e});t.value?(this.posts.push({id:e,title:t.value,completed:!1,edit:!1,starred:!1}),t.value=""):alert("Can't add empty todo!")},deleteTodo:function(t){var e=this.posts.filter(function(e){return e.id==t.target.id});if(!e[0].starred){var o=this.posts.filter(function(e){return e.id!=t.target.id});this.posts=o}},completedTodo:function(t){var e=this.posts.filter(function(e){return e.id==t.target.id});e[0].completed=!e[0].completed},editTodo:function(t){var e=this.posts.filter(function(e){return e.id==t.target.id});e[0].edit=!0},noEditTodo:function(t){var e=this.posts.filter(function(e){return e.id==t.target.id});e[0].title!=t.target.value&&""!=t.target.value&&(e[0].title=t.target.value),e[0].edit=!1}}},u=d,l=(o("687c"),o("2877")),c=Object(l["a"])(u,a,s,!1,null,"7047f850",null);c.options.__file="Todo.vue";var p=c.exports,f={name:"app",components:{todo:p}},v=f,m=(o("034f"),Object(l["a"])(v,r,i,!1,null,null,null));m.options.__file="App.vue";var b=m.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(b)}}).$mount("#app")},"64a9":function(t,e,o){},"687c":function(t,e,o){"use strict";var n=o("9bc7"),r=o.n(n);r.a},"9bc7":function(t,e,o){},cf05:function(t,e,o){t.exports=o.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.4d3c6503.js.map