import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Header from '../components/Header/Header';
import LoadingSpinner from '../components/LoadingSpinner';
import TagsRow from '../components/Tags/TagsRow';
import BeerCard from '../components/BeerCard/BeerCard';
import './BeerListPage.css';

class BeerListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      beers: [],
      tags: [],
      activeIndicatedTags: [],
    };
    this.tagOnClick = this.tagOnClick.bind(this);
  }

  componentDidMount() {
    console.log('BeerListPage props', this.props);
    this.propsHandler(this.props);
  }

  componentWillReceiveProps(nextProps) {
    console.log('BeerListPage nextProps', nextProps);
    this.propsHandler(nextProps);
  }

  propsHandler(props) {
    const { beers, tags } = props;
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
    console.log('clicked tagObject', tagObject);
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
    console.log('BeerListPage state', beers, activeIndicatedTags);
    return (
      <div>
        <Header
          activateList
          badgeNumber={99}
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
                  beers.map((beer) => {
                    console.log('beer', beer);
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
  console.log('mapStateToProps', state);
  return {
    beers: state.beers,
    tags: state.tags,
  };
};

export default connect(mapStateToProps)(BeerListPage);
