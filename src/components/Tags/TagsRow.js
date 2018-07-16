import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import TagButton from './TagButton';
import './TagsRow.css';

const TagsRow = ({ activeIndicatedTags, tagOnClick }) => (
  <section className="tags-row">
    {
      activeIndicatedTags.map((tag, index) => {
        const { active, name, key } = tag;
        return (
          <TagButton
            tagName={name}
            key={key}
            index={index}
            active={active}
            tagOnClick={tagOnClick}
          />
        );
      })
    }
  </section>
);

TagsRow.propTypes = {
  activeIndicatedTags: PropTypes.arrayOf(PropTypes.object).isRequired,
  tagOnClick: PropTypes.func.isRequired,
};

export default TagsRow;
