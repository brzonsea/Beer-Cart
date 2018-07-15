import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header/Header';

class BeerListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    console.log('BeerListPage props', this.props);
  }

  render() {
    return (
      <Header
        activateList
        badgeNumber={99}
      />
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
