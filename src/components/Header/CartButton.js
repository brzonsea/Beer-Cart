import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { shoppingCartIcon, shoppingCartIconGray } from '../../assets/icons';
import NotificationBadge from './NotificationBadge';
import './CartButton.css';

const CartButton = ({ active, badgeNumber }) => {
  const badgeShows = badgeNumber > 0;
  return (
    <div className="cart-button-container">
      <Link to="/cart" style={{ textDecoration: 'none' }}>
        <img
          src={active ? shoppingCartIcon : shoppingCartIconGray}
          className="cart-icon"
          alt="shopping list"
        />
      </Link>
      { badgeShows && <NotificationBadge badgeNumber={badgeNumber} /> }
    </div>
  );
};

CartButton.defaultProps = {
  active: false,
  badgeNumber: 0,
};

CartButton.propTypes = {
  active: PropTypes.bool,
  badgeNumber: PropTypes.number,
};

export default CartButton;
