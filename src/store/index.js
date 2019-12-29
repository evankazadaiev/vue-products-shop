import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

import productsModule from './modules/products';

Vue.use(Vuex);

const vuexLocal = new VuexPersist({
  key: 'vuex',
  storage: window.localStorage
});

const store = new Vuex.Store({
  modules: {
    products: productsModule
  },
  plugins: [vuexLocal.plugin],
});

export default store;
