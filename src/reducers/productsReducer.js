import Utils from '../utils';

function createCards() {
  return new Array(1000).fill(null).map((_, id) => ({
    id,
    product_name: `product ${id}`,
    inWishlist: id % 2
  }));
}

export default (state = { productIds: [] }, action) => {
  switch (action.type) {
    case 'RECIEVE_PRODUCTS':
      const cards = createCards();
      return {
        productsById: cards,
        productIds: Object.keys(cards).map(i => cards[i].id)
      };
    case 'ADD_TO_WISHLIST':
      const { id } = action;
      const product = state.productsById[id];
      return {
        ...state,
        productsById: {
          ...state.productsById,
          [id]: { ...product, inWishlist: !product.inWishlist }
        }
      };
    default:
      return state;
  }
};
