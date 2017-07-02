import MuseUI from 'muse-ui';
import axios from 'axios';
import VueAxios from 'vue-axios';
// import Axios from 'axios';
import 'muse-ui/dist/muse-ui.css';

export default (Vue, VueRouter, Vuex) => {
  Vue.use(Vuex);
  Vue.use(MuseUI);
  Vue.use(VueRouter);
  Vue.use(VueAxios, axios);
};
