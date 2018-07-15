import React from 'react';
import PropTypes from 'prop-types';
import './TagButton.css';

const TagButton = ({
  tagName, active, index, tagOnClick,
}) => (
  <div
    className={active ? 'tag-container-active' : 'tag-container'}
    onClick={() => tagOnClick(index)}
  >
    <div className={active ? 'tag-text-active' : 'tag-text'}>
      {tagName}
    </div>
  </div>
);

TagButton.propTypes = {
  tagName: PropTypes.string.isRequired,
  tagOnClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
};

export default TagButton;
