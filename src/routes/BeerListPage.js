import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Header from '../components/Header/Header';
import LoadingSpinner from '../components/LoadingSpinner';
import TagsRow from '../components/Tags/TagsRow';
import BeerCard from '../components/BeerCard/BeerCard';
import { beerCommonTagCount } from '../utils';
import './BeerListPage.css';

class BeerListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      beers: [],
      tags: [],
      activeIndicatedTags: [],
      renderNumber: 5,
    };
    this.tagOnClick = this.tagOnClick.bind(this);
  }

  componentDidMount() {
    this.propsHandler(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.propsHandler(nextProps);
  }

  propsHandler(props) {
    const { beers, tags, cart } = props;
    const beersEmpty = _.isEmpty(beers);
    const tagsEmpty = _.isEmpty(tags);
    if (beersEmpty || tagsEmpty) {
      // beers와 tags 모두 fetch 되기 전까지는 loading spinner 를 보여준다.
      this.setState({ isLoading: true });
    }
    if (!beersEmpty) {
      this.setState({ beers: Object.values(beers) });
    }
    if (!tagsEmpty) {
      const allTags = Object.values(tags);
      const activeIndicatedTags = allTags.map(tag => ({ ...tag, active: true }));
      this.setState({ tags: allTags, activeIndicatedTags: activeIndicatedTags });
    }
    if (!beersEmpty && !tagsEmpty) {
      this.setState({ isLoading: false });
    }
  }

  tagOnClick(index) {
    const { activeIndicatedTags } = this.state;
    console.log(activeIndicatedTags);
    const tagObject = activeIndicatedTags[index];
    const { key, name, active } = tagObject;
    const replacement = {
      key,
      name,
      active: !active
    }
    activeIndicatedTags.splice(index, 1, replacement);
    console.log(activeIndicatedTags);
    this.setState({ activeIndicatedTags });
  }

  render() {
    const { isLoading, beers, activeIndicatedTags } = this.state;
    const onlyActiveTagNames = activeIndicatedTags.filter(tag => tag.active).map(obj => (obj.name));
    const processedBeers = beers.map((beer) => {
      const tagCount = beerCommonTagCount(beer, onlyActiveTagNames);
      return ({
        ...beer,
        tagCount
      })
    });
    const filteredBeers = processedBeers.filter(beer => (beer.tagCount > 0))
      .sort((a, b) => (a.tagCount < b.tagCount));
    return (
      <div>
        <Header
          activateList
        />
        {
          isLoading
            ? <LoadingSpinner />
            : (
              <div>
                <TagsRow
                  activeIndicatedTags={activeIndicatedTags}
                  tagOnClick={this.tagOnClick}
                />
                {
                  filteredBeers.map((beer) => {
                    const {
                      name, image, tags, price, stock
                    } = beer;
                    return (
                      <BeerCard
                        name={name}
                        image={image}
                        tags={tags}
                        price={price}
                        stock={stock}
                      />
                    );
                  })
                }
              </div>
            )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    beers: state.beers,
    tags: state.tags,
  };
};

export default connect(mapStateToProps)(BeerListPage);
