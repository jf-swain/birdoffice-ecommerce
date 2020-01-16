import Vue from 'vue';
import Vuex from 'vuex';

import product from './modules/product';
import shopping from './modules/shopping';

Vue.use(Vuex);

export default new Vuex.Store({
  modules : {
    product,
    shopping,
  },
});
