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

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import reducer from 'containers/BrandPage/reducer';
import saga from 'containers/BrandPage/saga';

import Header from 'components/Header';

import Modal from 'components/Modal';
import IconElement from 'components/IconElement';

import InputContainer from './components/InputContainer';
import PresenceContainer from './components/PresenceContainer';
import LogoContainer from './components/LogoContainer';
import FontContainer from './components/FontContainer';
import FontColorContainer from './components/FontColorContainer';
import BrandColorContainer from './components/BrandColorContainer';

import Wrapper from './components/Wrapper';
import Title from './components/Title';
import SubTitle from './components/SubTitle';
import Containers from './components/Containers';

import ElementContainer from './components/ElementContainer';
import SubContainer from './components/SubContainer';
import Row from './components/Row';

import InputAdd from './components/InputAdd';

import ModalDialog from './components/ModalDialog';

/* eslint-disable react/prefer-stateless-function */
class BrandPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      type: null,
    };
  }

  add = type => {
    this.setState({ type });
  };

  addElement = () => {
    this.setState({ type: null });
  };

  closeModal = () => {
    this.setState({ type: null });
  };

  render() {
    if (this.state.type) {
      return (
        <Modal onClose={this.closeModal}>
          <ModalDialog
            type={this.state.type}
            onAdd={this.addElement}
            onClose={this.closeModal}
          />
        </Modal>
      );
    }

    return (
      <div>
        <Header route={this.props.location.pathname} />
        <Wrapper>
          <InputContainer />
          <PresenceContainer />

          <Title>Design</Title>
          <Containers>
            <LogoContainer />
            <FontContainer />
            <FontColorContainer />
            <BrandColorContainer />
          </Containers>

          <ElementContainer top={24} bottom={0}>
            <Row>
              <SubContainer width={100}>
                <SubTitle>Icons</SubTitle>
                <ElementContainer top={0} bottom={0}>
                  <IconElement className="far fa-clock" color="black" />
                  <IconElement className="far fa-calendar" color="black" />
                  <IconElement className="fas fa-globe" color="black" />
                  <IconElement className="fas fa-headset" color="black" />
                  <IconElement className="far fa-heart" color="black" />
                  <IconElement className="fas fa-home" color="black" />
                  <IconElement className="far fa-image" color="black" />
                  <InputAdd
                    width={82}
                    height={82}
                    size={45}
                    weight={100}
                    onClick={() => this.add('Icon')}
                  >
                    +
                  </InputAdd>
                </ElementContainer>
              </SubContainer>
            </Row>
          </ElementContainer>
        </Wrapper>
      </div>
    );
  }
}

BrandPage.propTypes = {
  location: PropTypes.object,
};

const withReducer = injectReducer({ key: 'brand', reducer });
const withSaga = injectSaga({ key: 'brand', saga });

export default compose(
  withReducer,
  withSaga,
)(BrandPage);
