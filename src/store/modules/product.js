import Data from '@/data/data';

const state = {
  products : [],
};

const mutations = {
  SET_PRODUCT(state, products) {
    state.products = products;
  },
};

const actions = {
  initProduct : ({ commit }) => {
    commit('SET_PRODUCT', Data);
  },
};

const getters = {
  products : (state) => {
    return state.products;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
