import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LoadingSpinner from '../components/LoadingSpinner';
import BeerListPage from './BeerListPage';
import ShoppingCartPage from './ShoppingCartPage';
import { beersFetch, tagsFetch } from '../redux/actions';

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.props.beersFetch();
    this.props.tagsFetch();
    this.setState({ isLoading: false });
  }

  render() {
    const { isLoading } = this.state;
    return (
      isLoading ? <LoadingSpinner />
        : (
          <Switch>
            <Route exact path="/" component={BeerListPage} />
            <Route exact path="/beers" component={BeerListPage} />
            <Route exact path="/cart" component={ShoppingCartPage} />
          </Switch>
        ));
  }
}

Routes.propTypes = {
  beersFetch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  console.log('mapStateToProps', state);
  return {
    beers: state.beers,
    tags: state.tags,
  };
};

export default withRouter(connect(mapStateToProps, { beersFetch, tagsFetch })(Routes));
