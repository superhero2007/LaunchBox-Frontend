/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Wrapper from './Wrapper';
import Title from './Title';
import SubTitle from './SubTitle';
import ElementContainer from './ElementContainer';
import SubContainer from './SubContainer';
import Row from './Row';
import Icon from './Icon';
import IconElement from './IconElement';

import Input from './Input';
import InputAdd from './InputAdd';

import Button from './Button';

import Logo from './Logo';

import FontContainer from './FontContainer';
import FontRow from './FontRow';
import FontElement from './FontElement';
import FontColor from './FontColor';

/* eslint-disable react/prefer-stateless-function */
export default class BrandPage extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <Title>Basics</Title>
        <ElementContainer top={24} bottom={69}>
          <Input label="Brand Name" value="Ketchup Creative" />
          <Input label="ID Number" value="420817-2580" />
          <InputAdd width={328} height={56} size={15} weight={900}>
            Add +
          </InputAdd>
        </ElementContainer>

        <Title>Online Presence</Title>
        <ElementContainer top={24} bottom={82}>
          <Button icon="< / >" value="ketchupcreative.com" color="#3166ed" />
          <Button
            icon={<Icon className="fab fa-facebook-f" color="#ffffff" />}
            value="/tomatsosa"
            color="#3b5998"
          />
          <Button
            icon={<Icon className="fab fa-instagram" color="#ffffff" />}
            value="@therealketchupcreative"
            color="#e1306c"
          />
          <Button
            icon={<Icon className="fab fa-vimeo-v" color="#ffffff" />}
            value="/ketchupcreative"
            color="#1ab7ea"
          />
          <InputAdd width={48} height={48} size={30} weight={100}>
            +
          </InputAdd>
        </ElementContainer>

        <Title>Design</Title>
        <ElementContainer top={24} bottom={0}>
          <Row>
            <SubContainer width={50}>
              <SubTitle>LOGO</SubTitle>
              <ElementContainer top={0} bottom={0}>
                <Logo src="logo.png" color="#c4c4c4" />
                <InputAdd width={160} height={160} size={90} weight={100}>
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
                  <InputAdd width={158} height={46} size={15} weight={900}>
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
                <InputAdd width={150} height={150} size={90} weight={100}>
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
                <InputAdd width={150} height={150} size={90} weight={100}>
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
                <InputAdd width={82} height={82} size={45} weight={100}>
                  +
                </InputAdd>
              </ElementContainer>
            </SubContainer>
          </Row>
        </ElementContainer>
      </Wrapper>
    );
  }
}
