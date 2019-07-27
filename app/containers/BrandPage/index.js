/*
 * BrandPage
 *
 * This is the first thing users see of our App, at the '/brand' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import reducer from 'containers/BrandPage/reducer';
import saga from 'containers/BrandPage/saga';
import { getBrands } from 'containers/BrandPage/actions';
import {
  makeSelectBrands,
  makeSelectLoading,
} from 'containers/BrandPage/selectors';

import Header from 'components/Header';

import BrandContainer from './components/BrandContainer';
import PresenceContainer from './components/PresenceContainer';
import LogoContainer from './components/LogoContainer';
import FontContainer from './components/FontContainer';
import BrandColorContainer from './components/BrandColorContainer';
import IconContainer from './components/IconContainer';

import Wrapper from './components/Wrapper';
import Title from './components/Title';
import Containers from './components/Containers';

/* eslint-disable react/prefer-stateless-function */
class BrandPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedBrand: props.brands.length ? props.brands[0]._id : '',
    };
  }

  componentDidMount() {
    this.props.onLoadBrands();
  }

  componentWillReceiveProps(newProps) {
    const selectBrand = newProps.brands.find(
      brand => brand._id === this.state.selectedBrand,
    );
    if (!selectBrand) {
      this.setState({
        selectedBrand: newProps.brands.length ? newProps.brands[0]._id : '',
      });
    }
    if (this.props.loading && !newProps.loading && !newProps.brands.length) {
      this.props.history.push('/new');
    }
  }

  onSelectBrand = selectedBrand => {
    this.setState({ selectedBrand });
  };

  render() {
    const { selectedBrand } = this.state;
    const { history, brands } = this.props;
    const selectBrand = brands.find(brand => brand._id === selectedBrand);
    return (
      <div>
        <Header />
        <Wrapper>
          <BrandContainer
            history={history}
            selectedBrand={selectedBrand}
            onSelectBrand={this.onSelectBrand}
          />
          <PresenceContainer
            selectedBrand={selectedBrand}
            presences={selectBrand ? selectBrand.social : []}
          />

          <Title>Design</Title>
          <Containers>
            <LogoContainer
              selectedBrand={selectedBrand}
              logos={selectBrand ? selectBrand.logo : []}
            />
            <FontContainer
              selectedBrand={selectedBrand}
              fonts={selectBrand ? selectBrand.fonts : []}
            />
            <BrandColorContainer
              selectedBrand={selectedBrand}
              brandColors={selectBrand ? selectBrand.colors : []}
            />
            <IconContainer
              selectedBrand={selectedBrand}
              icons={selectBrand ? selectBrand.icons : []}
            />
          </Containers>
        </Wrapper>
      </div>
    );
  }
}

BrandPage.propTypes = {
  history: PropTypes.object,
  loading: PropTypes.bool,
  brands: PropTypes.array,
  onLoadBrands: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  brands: makeSelectBrands(),
  loading: makeSelectLoading(),
});

const mapDispatchToProps = dispatch => ({
  onLoadBrands: () => dispatch(getBrands.request()),
});

const withReducer = injectReducer({ key: 'brand', reducer });
const withSaga = injectSaga({ key: 'brand', saga });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(BrandPage);
