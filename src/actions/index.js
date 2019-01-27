import axios from 'axios';

export const fetchProducts = () => {
  return {
    type: 'RECIEVE_PRODUCTS'
  };
};

export const addToWishlist = id => {
  return {
    type: 'ADD_TO_WISHLIST',
    id
  };
};

export const addToCart = id => {
  return {
    type: 'ADD_TO_CART',
    id
  };
};
