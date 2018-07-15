import React from 'react';
import PropTypes from 'prop-types';
import './NotificationBadge.css';

const NotificationBadge = ({ badgeNumber }) => {
  let visibleBadgeCount = badgeNumber
  if (badgeNumber > 99) {
    visibleBadgeCount = '99+'
  }
  return (
    <div className="badge-container">
      <div className="badge-number">
        {visibleBadgeCount}
      </div>
    </div>
  );
}

NotificationBadge.propTypes = {
  badgeNumber: PropTypes.number.isRequired,
};

export default NotificationBadge;
