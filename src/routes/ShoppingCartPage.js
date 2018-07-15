import React, { Component } from 'react';
import Header from '../components/Header/Header';

class ShoppingCartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <Header
        activateCart
      />
    );
  }
}

export default ShoppingCartPage;
