import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts, addToCart, addToWishlist } from '../actions';

const ProductCard = React.memo(({ product, addToWishlist }) => {
  return (
    <div
      style={{
        color: product.inWishlist ? 'green' : 'red'
      }}
    >
      <span>{product.product_name}</span>
      <button onClick={() => addToWishlist(product.id)}>
        <span role="img" aria-label="Add to wishlist">
          ❤️‍
        </span>
      </button>
    </div>
  );
});

const mapStateToProps = (state, ownProps) => {
  const { productId } = ownProps;
  const product = state.productsById[productId];
  return {
    product
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addToWishlist: id => dispatch(addToWishlist(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCard);
