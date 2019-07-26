/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import Plus from 'images/plus.svg';
import PlusHover from 'images/plus__hover.svg';
import Right from 'images/right.svg';
import RightDisable from 'images/right__disable.svg';
import Modal from 'components/Modal';
import {
  Wrapper,
  Title,
  SubTitle,
  Button,
  Container,
  Content,
  ElementCloser,
  ElementWrapper,
  Element,
  InputAdd,
} from './components';
import ModalDialog from './ModalDialog';

class Colors extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value.colors || [],
      type: null,
    };
  }

  closeModal = () => {
    this.setState({ type: null });
  };

  createModal = () => {
    this.setState({
      type: true,
    });
  };

  onAdd = newValue => {
    const { value } = this.state;
    value.push(newValue);
    this.setState({ type: null, value });
  };

  onDelete = index => {
    const { value } = this.state;
    value.splice(index, 1);
    this.setState({ type: null, value: value.slice(0) });
  };

  onNext = () => {
    const { onNext } = this.props;
    const { value } = this.state;
    onNext({ colors: value });
  };

  listElements = () =>
    this.state.value.map((element, index) => (
      <ElementWrapper key={`${element}${index + 1}`}>
        <Element color={element} />
        <ElementCloser
          onClick={() => this.onDelete(index)}
          className="element_delete"
        >
          <i className="fas fa-times" />
        </ElementCloser>
      </ElementWrapper>
    ));

  render() {
    const { value } = this.state;
    return (
      <Wrapper>
        <Title>Add brand colors</Title>
        <SubTitle>Add primary and secondary colors to your brand</SubTitle>
        <Container>
          {this.state.type && (
            <Modal onClose={this.closeModal}>
              <ModalDialog onAdd={this.onAdd} onClose={this.closeModal} />
            </Modal>
          )}
          <Content>
            {this.listElements()}
            <ElementWrapper>
              <InputAdd
                width={160}
                height={160}
                size={90}
                weight={100}
                imgWidth={46}
                onClick={this.createModal}
              >
                <img src={Plus} alt="Add" className="origin" />
                <img src={PlusHover} alt="Add" className="hover" />
              </InputAdd>
            </ElementWrapper>
          </Content>
        </Container>
        <Button onClick={this.onNext} disabled={!value.length}>
          Next
          <img src={Right} alt="Right" className="origin" />
          <img src={RightDisable} alt="Right Disable" className="disable" />
        </Button>
      </Wrapper>
    );
  }
}

Colors.propTypes = {
  onNext: PropTypes.func,
  value: PropTypes.object,
};

export default Colors;
