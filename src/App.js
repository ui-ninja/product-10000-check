import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts, addToCart, addToWishlist } from './actions';
import ProductCard from './components/ProductCard';
class App extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    const { productsIds } = this.props;
    return (
      <div>
        {productsIds.map(productId => (
          <ProductCard key={productId} productId={productId} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    productsIds: state.productIds
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
