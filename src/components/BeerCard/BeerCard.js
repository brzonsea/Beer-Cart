import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { pickBeer, unpickBeer } from '../../redux/actions';
import {
 addString, minusString, cancelString, stockString, countString,
} from '../../config/strings';
import './BeerCard.css';

class BeerCard extends Component {
  render() {
    const {
      name, image, tags, price, stock, pickBeer, unpickBeer, cart, fromShopCart
    } = this.props;
    const pickedBeerCount = cart[name] ? cart[name] : 0;
    const availableStock = stock - pickedBeerCount;
    let beerTagString = '';
    tags.map((tag, index) => {
      if (tags.length - 1 === index) {
        beerTagString += tag.name;
      } else {
        beerTagString += `${tag.name}, `;
      }
    });
    return (
      <div className="beer-card">
        <div className="beer-info-container">
          <div className="beer-image-container">
            <img
              src={require(`../../assets/images/${image}`)}
              alt={name}
            />
          </div>
          <div className="beer-info">
            <div className="beer-name">
              {name}
            </div>
            <div className="beer-tags">
              {beerTagString}
            </div>
            <div className="beer-price">
              {price}
              <div className="won">
                원
              </div>
            </div>
            <div className="beer-count-row">
              <div className="beer-count-label">
                {stockString}
                <div className="beer-stock">
                  {availableStock}
                </div>
              </div>
              {
                pickedBeerCount > 0 &&
                <div className="beer-count-label">
                  {countString}
                  <div className="beer-stock">
                    {pickedBeerCount}
                  </div>
                </div>

              }
            </div>
          </div>
        </div>
        <div className="button-row">
          {
            pickedBeerCount > 0 &&
            <button
              onClick={() => unpickBeer(name)}
              type="button"
              className="unpick-button"
            >
              {fromShopCart ? cancelString : minusString}
            </button>
          }
          {
            !fromShopCart &&
            <button
              onClick={availableStock < 1 ? () => null : () => pickBeer(name)}
              type="button"
              className={availableStock < 1 ? "pick-button-deactivate" : "pick-button"}
            >
              {addString}
            </button>
          }
        </div>
      </div>
    );
  }
}

BeerCard.defaultProps = {
  fromShopCart: false,
};

BeerCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
  price: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
  fromShopCart: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    beers: state.beers,
    cart: state.cart,
  };
};

export default connect(mapStateToProps, { pickBeer, unpickBeer })(BeerCard);
