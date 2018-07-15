import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { bulletListIcon, bulletListIconGray } from '../../assets/icons';
import './ListButton.css';

const ListButton = ({ active }) => (
  <div className="list-button-container">
    <Link to="/beers" style={{ textDecoration: 'none' }}>
      <img
        src={active ? bulletListIcon : bulletListIconGray}
        className="list-icon"
        alt="beers list"
      />
    </Link>
  </div>
);

ListButton.defaultProps = {
  active: false,
};

ListButton.propTypes = {
  active: PropTypes.bool,
};

export default ListButton;
