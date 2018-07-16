import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import Header from '../components/Header/Header';
import BeerCard from '../components/BeerCard/BeerCard';
import { shoppingBagIcon } from '../assets/icons';
import { buyAllBeer } from '../redux/actions';
import { cartEmptyString, suggestionString, goToListString, buyString } from '../config/strings';
import './ShoppingCartPage.css';

class ShoppingCartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const { cart, beers, buyAllBeer } = this.props;
    const cartList = Object.keys(cart);
    const beerCountList = Object.values(cart);
    const totalBeerCount = _.sum(beerCountList);
    let total = 0;
    return (
      <div>
        <Header
          activateCart
        />
        <div style={{ marginBottom: 16 }}/>
        {
          cartList.length > 0 ?
            <div>
            {
              cartList.map((beername, index) => {
              console.log(beername);
              const beerObj = _.find(beers, ['name', beername]);
              const { name, image, tags, price, stock } = beerObj;
              total += price * beerCountList[index];
              return (
                <BeerCard
                  name={name}
                  image={image}
                  tags={tags}
                  price={price}
                  stock={stock}
                  fromShopCart
                />
              );
            })}
              <div className="total-text">
                총 구매수량
                <div className="total-number">{totalBeerCount}</div>개
              </div>
              <div className="total-text">
                총 결제금액
                <div className="total-number">{total}</div>원
              </div>
              <div
                onClick={() => buyAllBeer(totalBeerCount, total)}
                className="buy-button"
              >
                {buyString}
              </div>
            </div>
             :
            <div className="empty-cart-container">
              <img
                src={shoppingBagIcon}
                className="shopping-bag-icon"
                tag="No items in cart"
              />
              <div
                className="cart-empty-message"
              >{cartEmptyString}
              </div>
              <div
                className="cart-empty-suggestion"
              >{suggestionString}
              </div>
              <Link to="/beers" style={{ textDecoration: 'none' }}>
                <div
                  className="go-to-list-button"
                >{goToListString}
                </div>
              </Link>
            </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    beers: state.beers,
  };
};

export default connect(mapStateToProps, { buyAllBeer })(ShoppingCartPage);
