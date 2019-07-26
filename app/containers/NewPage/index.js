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
import { compose } from 'redux';
import PropTypes from 'prop-types';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import reducer from 'containers/NewPage/reducer';
import saga from 'containers/NewPage/saga';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { getBrands, createBrand } from 'containers/BrandPage/actions';
import { makeSelectBrands } from 'containers/BrandPage/selectors';

import Header from 'components/Header';
import Container from './components/Container';
import Wrapper from './components/Wrapper';
import Content from './components/Content';
import StartScreen from './components/StartScreen';
import LastScreen from './components/LastScreen';
import Sidebar from './components/Sidebar';
import BrandInfo from './components/BrandInfo';
import LogoType from './components/LogoType';
import Colors from './components/Colors';
import Fonts from './components/Fonts';
import SocialMedia from './components/SocialMedia';

class NewPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      value: {},
    };
  }

  componentDidMount() {
    this.props.onLoadBrands();
  }

  onNext = newValue => {
    const { value, step } = this.state;
    const updatedValue = Object.assign({}, value, newValue);
    this.setState({
      step: (step + 1) % 7,
      value: updatedValue,
    });

    if (step === 5) {
      const { onCreateBrand } = this.props;
      onCreateBrand(updatedValue);
    }
  };

  onGoTo = step => {
    this.setState({ step });
  };

  render() {
    const { step, value } = this.state;
    const { brands } = this.props;

    let screen;
    if (!step) {
      screen = <StartScreen onNext={this.onNext} />;
    } else if (step === 6) {
      screen = brands.length && (
        <LastScreen onNext={this.onNext} brand={brands[brands.length - 1]} />
      );
    } else {
      screen = (
        <Wrapper>
          <Sidebar step={step} onGoTo={this.onGoTo} />
          <Content>
            {step === 1 && <BrandInfo onNext={this.onNext} value={value} />}
            {step === 2 && <LogoType onNext={this.onNext} value={value} />}
            {step === 3 && <Colors onNext={this.onNext} value={value} />}
            {step === 4 && <Fonts onNext={this.onNext} value={value} />}
            {step === 5 && <SocialMedia onNext={this.onNext} value={value} />}
          </Content>
        </Wrapper>
      );
    }

    return (
      <Container>
        <Header isSmall />
        {screen}
      </Container>
    );
  }
}

NewPage.propTypes = {
  brands: PropTypes.array,
  onLoadBrands: PropTypes.func,
  onCreateBrand: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  brands: makeSelectBrands(),
});

export const mapDispatchToProps = dispatch => ({
  onLoadBrands: () => dispatch(getBrands.request()),
  onCreateBrand: value => dispatch(createBrand.request(value)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'new', reducer });
const withSaga = injectSaga({ key: 'new', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(NewPage);
