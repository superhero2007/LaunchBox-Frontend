/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import Plus from 'images/smaller-plus.svg';
import PlusHover from 'images/smaller-plus__hover.svg';
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
  InputAdd,
} from './components';
import ModalDialog from './ModalDialog';
import Element from './Element';

class SocialMedia extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      type: null,
      element: null,
    };
  }

  closeModal = () => {
    this.setState({ type: null, element: null });
  };

  createModal = () => {
    this.setState({
      type: 'Create',
      element: {
        value: '',
        type: 1,
      },
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
    this.setState({ value: value.slice(0) });
  };

  listElements = () =>
    this.state.value.map((element, index) => (
      <ElementWrapper key={`${element.value}${index + 1}`}>
        <Element value={element.value} type={element.type} />
        <ElementCloser
          onClick={() => this.onDelete(index)}
          className="element_delete"
        >
          <i className="fas fa-times" />
        </ElementCloser>
      </ElementWrapper>
    ));

  onNext = () => {
    const { onNext } = this.props;
    const { value } = this.state;
    onNext({ social: value });
  };

  render() {
    const { value } = this.state;
    return (
      <Wrapper>
        <Title>Add links to social networks</Title>
        <SubTitle>Add links to your brand's social media accounts</SubTitle>
        <Container>
          {this.state.type && (
            <Modal onClose={this.closeModal}>
              <ModalDialog
                onAdd={this.onAdd}
                onClose={this.closeModal}
                element={this.state.element}
              />
            </Modal>
          )}
          <Content>
            {this.listElements()}
            <ElementWrapper>
              <InputAdd imgWidth={12} onClick={this.createModal}>
                <img src={Plus} alt="Add" className="origin" />
                <img src={PlusHover} alt="Add" className="hover" />
                <span>Add link</span>
              </InputAdd>
            </ElementWrapper>
          </Content>
        </Container>
        <Button onClick={this.onNext} disabled={!value.length}>
          Finish
        </Button>
      </Wrapper>
    );
  }
}

SocialMedia.propTypes = {
  onNext: PropTypes.func,
};

export default SocialMedia;
