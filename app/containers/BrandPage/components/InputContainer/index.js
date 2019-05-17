import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import Content from './Content';
import Title from '../Title';
import ElementWrapper from './ElementWrapper';
import Element from './Element';
import InputAdd from '../InputAdd';

class InputContainer extends React.PureComponent {
  listElements = () =>
    this.props.elements.map(element => (
      <ElementWrapper key={element.id}>
        <Element
          value={element.value}
          label={element.label}
          onChange={() => {}}
        />
      </ElementWrapper>
    ));

  render() {
    return (
      <Wrapper>
        <Title>{this.props.title}</Title>
        <Content>
          {this.listElements()}
          <ElementWrapper>
            <InputAdd
              width={328}
              height={56}
              size={15}
              weight={900}
              onClick={this.props.onCreate}
            >
              Add +
            </InputAdd>
          </ElementWrapper>
        </Content>
      </Wrapper>
    );
  }
}

InputContainer.propTypes = {
  title: PropTypes.string,
  elements: PropTypes.array,
  onCreate: PropTypes.func,
};

export default InputContainer;
