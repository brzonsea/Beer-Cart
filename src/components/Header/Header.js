import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ListButton from './ListButton';
import CartButton from './CartButton';
import { beerAddString } from '../../config/strings';

import './Header.css';

const Header = ({ activateList, activateCart, badgeNumber }) => {
  console.log(activateList, activateCart, badgeNumber);
  return (
    <div className="header-container">
      <div className="header-text">
        {beerAddString}
      </div>
      <div className="header-icons">
        <ListButton active={activateList} />
        <CartButton active={activateCart} badgeNumber={badgeNumber} />
      </div>
    </div>
  );
};

Header.defaultProps = {
  activateList: false,
  activateCart: false,
  badgeNumber: 0,
};

Header.propTypes = {
  activateList: PropTypes.bool,
  activateCart: PropTypes.bool,
  badgeNumber: PropTypes.number,
};

const mapStateToProps = (state) => {
  console.log('mapStateToProps BeerCard', state);
  const { pickedBeers } = state.cart;
  const badgeNumber = Object.keys(pickedBeers).length;
  return {
    badgeNumber,
  };
};

export default connect(mapStateToProps)(Header);
