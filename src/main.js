// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import { sync } from 'vuex-router-sync';

import installPlugins from './config/plugins';
import installVuexStore from './vuex';
import installVueRouter from './config/router';

Vue.config.productionTip = false;
installPlugins(Vue, VueRouter, Vuex);

const store = installVuexStore(Vuex);
const router = installVueRouter(VueRouter);
sync(store, router);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App: () => System.import('./App.vue') },
});
