import { createSelector } from 'reselect';

const getProducts = state => {
  return state.products.productsList.productsById;
};
const getWishlistIds = state => state.products.wishlistIds;
//const getCartIds = state => state.products.cartIds;

const getWishlistProducts = (products, wishlistIds) => {
  if (!products) {
    const wishlistProds = wishlistIds.map(id => products[id]);
    return wishlistProds;
  }
  return null;
};

export default createSelector(
  getProducts,
  getWishlistIds,
  getWishlistProducts
);
