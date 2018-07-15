import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { pickBeer } from '../../redux/actions';
import './BeerCard.css';

class BeerCard extends Component {
  componentDidMount() {
    console.log('props', this.props);
  }
  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps);
  }
  render() {
    const {
      name, image, tags, price, stock, pickBeer, cart
    } = this.props;
    const pickedBeerCount = cart[name] ? cart[name] : 0;
    console.log('This Beer name', name, cart);
    const availableStock = stock - pickedBeerCount;
    let beerTagString = '';
    tags.map((tag, index) => {
      if (tags.length - 1 === index) {
        beerTagString += tag.name;
      } else {
        beerTagString += `${tag.name}, `;
      }
    });
    console.log(beerTagString);
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
                재고
                <div className="beer-stock">
                  {availableStock}
                </div>
              </div>
              {
                pickedBeerCount > 0 &&
                <div className="beer-count-label">
                  수량
                  <div className="beer-stock">
                    {pickedBeerCount}
                  </div>
                </div>

              }
            </div>
          </div>
        </div>
        <div className="button-row">
          <button
            onClick={availableStock < 1 ? () => null : () => pickBeer(name)}
            type="button"
            className="pick-button"
          >
            담기
          </button>
        </div>
      </div>
    );
  }
}

BeerCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
  price: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
  console.log('mapStateToProps BeerCard', state);
  return {
    beers: state.beers,
    cart: state.cart,
  };
};

export default connect(mapStateToProps, { pickBeer })(BeerCard);
