webpackJsonp([5],{108:function(n,t,a){"use strict";var e=a(109),o=a(111),r=a(112),u=[{path:"/",component:e.a("Index"),children:[o.a(e.a),r.a(e.a)]}];t.a=function(n){return new n({routes:u,saveScrollPosition:!0})}},109:function(n,t,a){"use strict";t.a=function(n){return function(){return a(110)("./"+n+".vue")}}},110:function(n,t,a){function e(n){var t=o[n];return t?a.e(t[1]).then(function(){return a(t[0])}):Promise.reject(new Error("Cannot find module '"+n+"'."))}var o={"./Customer.vue":[115,0],"./Dashboard.vue":[116,3],"./Index.vue":[117,2]};e.keys=function(){return Object.keys(o)},n.exports=e,e.id=110},111:function(n,t,a){"use strict";t.a=function(n){return{path:"customer",name:"Customer",component:n("Customer")}}},112:function(n,t,a){"use strict";t.a=function(n){return{path:"dashboard",name:"Dashboard",component:n("Dashboard")}}},46:function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=a(30),o=a(48),r=a(49),u=a(50),c=(a.n(u),a(51)),i=a(76),s=a(108);e.default.config.productionTip=!1,c.a(e.default,o.a,r.a);var f=i.a(r.a),d=s.a(o.a);u.sync(f,d),new e.default({el:"#app",router:d,store:f,template:"<App/>",components:{App:function(){return a.e(1).then(a.bind(null,118))}}})},51:function(n,t,a){"use strict";var e=a(52),o=a.n(e),r=a(53),u=a.n(r),c=a(73),i=a.n(c),s=a(74);a.n(s);t.a=function(n,t,a){n.use(a),n.use(o.a),n.use(t),n.use(i.a,u.a)}},74:function(n,t){},76:function(n,t,a){"use strict";var e=a(77),o={modules:{channel:e.a},strict:!0};t.a=function(n){return new n.Store(o)}},77:function(n,t,a){"use strict";var e=a(78),o=a.n(e),r={adicionarCanal:function(n,t){t&&"object"===(void 0===t?"undefined":o.a(t))&&!t.hasOwnProperty("length")&&n.canais.unshift(t)}},u={adicionarCanal:function(n,t){(0,n.commit)("adicionarCanal",t)}},c={getCanais:function(n){return n.canais},getCabecalhoCanais:function(n){return n.cabecalhoCanais}},i={cabecalhoCanais:[],canais:[]};t.a={namespaced:!0,actions:u,getters:c,state:i,mutations:r}}},[46]);
//# sourceMappingURL=app.f535c5cce93af09627eb.js.map