import types from './types';

const createProduct = ({ commit }, product) => {
  return commit(types.CREATE_PRODUCT, product);
};

const updateProduct = ({ commit }, params) => {
  return commit(types.UPDATE_PRODUCT, params);
};

const findProductById = ({ state }, id) => {
  return state.products.find(p => p.id === id) || null;
};

const deleteProduct = ({ commit }, id) => {
  return commit(types.DELETE_PRODUCT, id);
};

export default {
  deleteProduct,
  createProduct,
  updateProduct,
  findProductById
};
