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
import SubHeader from './SubHeader';
import InputContainer from './InputContainer';
import Input from './Input';
import InputAdd from './InputAdd';
import ButtonContainer from './ButtonContainer';
import Button from './Button';
import Icon from './Icon';

/* eslint-disable react/prefer-stateless-function */
export default class BrandPage extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <SubHeader>Basics</SubHeader>
        <InputContainer>
          <Input label="Brand Name" value="Ketchup Creative" />
          <Input label="ID Number" value="420817-2580" />
          <InputAdd width={328} height={56} size={15} weight={900}>
            Add +
          </InputAdd>
        </InputContainer>
        <SubHeader>Online Presence</SubHeader>
        <ButtonContainer>
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
        </ButtonContainer>
      </Wrapper>
    );
  }
}
