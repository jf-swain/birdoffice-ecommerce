const state = {
  shoppingAmount   : 0,
  shoppingQuantity : 0,
};

const getters = {
  getTotalPrice    : (state) => {
    return state.shoppingAmount;
  },
  getTotalQuantity : (state) => {
    return state.shoppingQuantity;
  },
};

const mutations = {
  ADD_PRODUCT(state, { productPrice, quantity }) {
    state.shoppingAmount += productPrice * quantity;
    state.shoppingQuantity += quantity;
  },
};

const actions = {
  addProduct : ({ commit }, order) => {
    commit('ADD_PRODUCT', order);
  },
};

export default {
  actions,
  getters,
  mutations,
  state,
};
