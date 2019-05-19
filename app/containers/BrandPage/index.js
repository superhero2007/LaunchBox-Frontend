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

import Wrapper from './components/Wrapper';

import Title from './components/Title';
import SubTitle from './components/SubTitle';
import ElementContainer from './components/ElementContainer';
import SubContainer from './components/SubContainer';
import Row from './components/Row';

import InputAdd from './components/InputAdd';
import Logo from './components/Logo';
import FontContainer from './components/FontContainer';
import FontRow from './components/FontRow';
import FontElement from './components/FontElement';
import FontColor from './components/FontColor';

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
          <ElementContainer top={24} bottom={0}>
            <Row>
              <SubContainer width={50}>
                <SubTitle>LOGO</SubTitle>
                <ElementContainer top={0} bottom={0}>
                  <Logo src="logo.png" color="#c4c4c4" />
                  <InputAdd
                    width={160}
                    height={160}
                    size={90}
                    weight={100}
                    onClick={() => this.add('Design')}
                  >
                    +
                  </InputAdd>
                </ElementContainer>
              </SubContainer>
              <SubContainer width={50}>
                <SubTitle>FONTS</SubTitle>
                <ElementContainer>
                  <FontContainer>
                    <FontRow>
                      <FontElement
                        size={21}
                        family="Helvetica Neue"
                        weight={900}
                        width="100%"
                      >
                        Helvetica Neue
                      </FontElement>
                    </FontRow>
                    <FontRow>
                      <FontElement
                        size={13}
                        family="Helvetica Neue"
                        weight={100}
                        width="50%"
                      >
                        Ultra Light
                      </FontElement>
                      <FontElement
                        size={13}
                        family="Helvetica Neue"
                        weight={100}
                        width="50%"
                      >
                        Ultra Light Italic
                      </FontElement>
                    </FontRow>
                    <FontRow>
                      <FontElement
                        size={13}
                        family="Helvetica Neue"
                        weight={200}
                        width="50%"
                      >
                        Thin
                      </FontElement>
                      <FontElement
                        size={13}
                        family="Helvetica Neue"
                        weight={200}
                        width="50%"
                      >
                        Thin Italic
                      </FontElement>
                    </FontRow>
                    <FontRow>
                      <FontElement
                        size={13}
                        family="Helvetica Neue"
                        weight={300}
                        width="50%"
                      >
                        Light
                      </FontElement>
                      <FontElement
                        size={13}
                        family="Helvetica Neue"
                        weight={300}
                        width="50%"
                      >
                        Light Italic
                      </FontElement>
                    </FontRow>
                    <FontRow>
                      <FontElement
                        size={13}
                        family="Helvetica Neue"
                        weight={400}
                        width="50%"
                      >
                        Regular
                      </FontElement>
                      <FontElement
                        size={13}
                        family="Helvetica Neue"
                        weight={400}
                        width="50%"
                      >
                        Italic
                      </FontElement>
                    </FontRow>
                    <FontRow>
                      <FontElement
                        size={13}
                        family="Helvetica Neue"
                        weight={600}
                        width="50%"
                      >
                        Medium
                      </FontElement>
                      <FontElement
                        size={13}
                        family="Helvetica Neue"
                        weight={600}
                        width="50%"
                      >
                        Medium Italic
                      </FontElement>
                    </FontRow>
                    <FontRow>
                      <FontElement
                        size={13}
                        family="Helvetica Neue"
                        weight={900}
                        width="50%"
                      >
                        Bold
                      </FontElement>
                      <FontElement
                        size={13}
                        family="Helvetica Neue"
                        weight={900}
                        width="50%"
                      >
                        Bold Italic
                      </FontElement>
                    </FontRow>
                  </FontContainer>
                  <FontContainer>
                    <FontRow>
                      <FontElement
                        size={21}
                        family="Museo Sans Cyrl"
                        weight={900}
                        width="100%"
                      >
                        Museo Sans
                      </FontElement>
                    </FontRow>
                    <FontRow>
                      <FontElement
                        size={13}
                        family="Museo Sans Cyrl"
                        weight={100}
                        width="50%"
                      >
                        Ultra Light
                      </FontElement>
                      <FontElement
                        size={13}
                        family="Museo Sans Cyrl"
                        weight={100}
                        width="50%"
                      >
                        Ultra Light Italic
                      </FontElement>
                    </FontRow>
                    <FontRow>
                      <FontElement
                        size={13}
                        family="Museo Sans Cyrl"
                        weight={200}
                        width="50%"
                      >
                        Thin
                      </FontElement>
                      <FontElement
                        size={13}
                        family="Museo Sans Cyrl"
                        weight={200}
                        width="50%"
                      >
                        Thin Italic
                      </FontElement>
                    </FontRow>
                    <FontRow>
                      <FontElement
                        size={13}
                        family="Museo Sans Cyrl"
                        weight={300}
                        width="50%"
                      >
                        Light
                      </FontElement>
                      <FontElement
                        size={13}
                        family="Museo Sans Cyrl"
                        weight={300}
                        width="50%"
                      >
                        Light Italic
                      </FontElement>
                    </FontRow>
                    <FontRow>
                      <FontElement
                        size={13}
                        family="Museo Sans Cyrl"
                        weight={400}
                        width="50%"
                      >
                        Regular
                      </FontElement>
                      <FontElement
                        size={13}
                        family="Museo Sans Cyrl"
                        weight={400}
                        width="50%"
                      >
                        Italic
                      </FontElement>
                    </FontRow>
                    <FontRow>
                      <FontElement
                        size={13}
                        family="Museo Sans Cyrl"
                        weight={600}
                        width="50%"
                      >
                        Medium
                      </FontElement>
                      <FontElement
                        size={13}
                        family="Museo Sans Cyrl"
                        weight={600}
                        width="50%"
                      >
                        Medium Italic
                      </FontElement>
                    </FontRow>
                    <FontRow>
                      <FontElement
                        size={13}
                        family="Museo Sans Cyrl"
                        weight={900}
                        width="50%"
                      >
                        Bold
                      </FontElement>
                      <FontElement
                        size={13}
                        family="Museo Sans Cyrl"
                        weight={900}
                        width="50%"
                      >
                        Bold Italic
                      </FontElement>
                    </FontRow>
                  </FontContainer>
                  <ElementContainer>
                    <InputAdd
                      width={158}
                      height={46}
                      size={15}
                      weight={900}
                      onClick={() => this.add('Font')}
                    >
                      ADD FONT +
                    </InputAdd>
                  </ElementContainer>
                </ElementContainer>
              </SubContainer>
            </Row>
            <Row>
              <SubContainer width={50}>
                <SubTitle>Font Colors</SubTitle>
                <ElementContainer top={0} bottom={0}>
                  <FontColor color="#ffffff" />
                  <FontColor color="#ffdf5d" />
                  <FontColor color="#88afaf" />
                  <InputAdd
                    width={150}
                    height={150}
                    size={90}
                    weight={100}
                    onClick={() => this.add('Color')}
                  >
                    +
                  </InputAdd>
                </ElementContainer>
              </SubContainer>
              <SubContainer width={50}>
                <SubTitle>Brand Colors</SubTitle>
                <ElementContainer top={0} bottom={0}>
                  <FontColor color="#99258d" />
                  <FontColor color="#ffdf5d" />
                  <FontColor color="#ffffff" />
                  <InputAdd
                    width={150}
                    height={150}
                    size={90}
                    weight={100}
                    onClick={() => this.add('Color')}
                  >
                    +
                  </InputAdd>
                </ElementContainer>
              </SubContainer>
            </Row>
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
