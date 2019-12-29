import types from "./types";

const mutations = {
  [types.CREATE_PRODUCT]: (state, product) => {
    state.products = state.products.length > 0 ? [...state.products, product] : [product];
  },
  [types.UPDATE_PRODUCT]: (state, data) => {
    const { id } = data;
    state.products = state.products.map(product => {
      if(product.id === id) {
        product = { ...data };
      }
      return product;
    })
  },
  [types.DELETE_PRODUCT]: (state, id) => {
    state.products = state.products.filter(product => product.id !== id);
  }
};


export default mutations;
