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

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import reducer from 'containers/BrandPage/reducer';
import saga from 'containers/BrandPage/saga';

import Header from 'components/Header';

import InputContainer from './components/InputContainer';
import PresenceContainer from './components/PresenceContainer';
import LogoContainer from './components/LogoContainer';
import FontContainer from './components/FontContainer';
import FontColorContainer from './components/FontColorContainer';
import BrandColorContainer from './components/BrandColorContainer';
import IconContainer from './components/IconContainer';

import Wrapper from './components/Wrapper';
import Title from './components/Title';
import Containers from './components/Containers';

/* eslint-disable react/prefer-stateless-function */
class BrandPage extends React.PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Wrapper>
          <InputContainer />
          <PresenceContainer />

          <Title>Design</Title>
          <Containers>
            <LogoContainer />
            <FontContainer />
            <FontColorContainer />
            <BrandColorContainer />
            <IconContainer />
          </Containers>
        </Wrapper>
      </div>
    );
  }
}

const withReducer = injectReducer({ key: 'brand', reducer });
const withSaga = injectSaga({ key: 'brand', saga });

export default compose(
  withReducer,
  withSaga,
)(BrandPage);
