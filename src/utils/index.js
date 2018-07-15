import _ from 'lodash';

export const beerCommonTagCount = (beer, tagNames) => {
  const { tags } = beer;
  let commonTagCount = 0;
  tags.map((tag) => {
    if (_.includes(tagNames, tag.name)) {
      commonTagCount += 1;
    }
  });
  return commonTagCount;
};
