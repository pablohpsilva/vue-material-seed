import channel from './modules/channel';

const store = {
  modules: {
    channel,
  },
  strict: true,
};

export default Vuex => new Vuex.Store(store);
