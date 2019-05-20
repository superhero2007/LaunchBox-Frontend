import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import {
  getInputElements,
  createInputElement,
  updateInputElement,
  deleteInputElement,
} from 'containers/BrandPage/actions';
import { makeSelectInputElements } from 'containers/BrandPage/selectors';

import Modal from 'components/Modal';
import Wrapper from './Wrapper';
import Content from './Content';
import Title from '../Title';
import ElementWrapper from './ElementWrapper';
import Element from './Element';
import InputAdd from '../InputAdd';
import ElementCloser from '../ElementCloser';
import ModalDialog from './ModalDialog';

class InputContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Basics',
      type: null,
    };
  }

  componentDidMount() {
    this.props.onLoadInputElements();
  }

  closeModal = () => {
    this.setState({ type: null });
  };

  createModal = () => {
    this.setState({
      type: 'Create',
      element: {
        _id: '',
        label: '',
        value: '',
      },
    });
  };

  onAdd = value => {
    if (this.state.type === 'Create') {
      this.props.onCreateInputElement(value);
    } else {
      this.props.onUpdateInputElement(value);
    }
    this.setState({ type: null });
  };

  onUpdate = (value, element) => {
    const updatedObj = Object.assign({}, element);
    updatedObj.value = value.target.value;
    this.props.onUpdateInputElement(updatedObj);
  };

  onDelete = _id => {
    this.props.onDeleteInputElement(_id);
  };

  updateModal = element => {
    this.setState({
      type: 'Update',
      element,
    });
  };

  onDuplicate = element => {
    this.props.onCreateInputElement(element);
  };

  listElements = () =>
    this.props.inputElements.map(element => (
      <ElementWrapper key={element._id}>
        <Element
          element={element}
          onChange={value => this.onUpdate(value, element)}
          onEdit={() => this.updateModal(element)}
          onDuplicate={() => this.onDuplicate(element)}
        />
        <ElementCloser
          onClick={() => this.onDelete(element._id)}
          className="element_delete"
        >
          <i className="fas fa-times" />
        </ElementCloser>
      </ElementWrapper>
    ));

  render() {
    return (
      <Wrapper>
        {this.state.type && (
          <Modal onClose={this.closeModal}>
            <ModalDialog
              onAdd={this.onAdd}
              onClose={this.closeModal}
              element={this.state.element}
            />
          </Modal>
        )}
        <Title>{this.state.title}</Title>
        <Content>
          {this.listElements()}
          <ElementWrapper>
            <InputAdd
              width={328}
              height={56}
              size={15}
              weight={900}
              onClick={this.createModal}
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
  inputElements: PropTypes.array,
  onLoadInputElements: PropTypes.func,
  onUpdateInputElement: PropTypes.func,
  onCreateInputElement: PropTypes.func,
  onDeleteInputElement: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  inputElements: makeSelectInputElements(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onLoadInputElements: () => dispatch(getInputElements.request()),
    onCreateInputElement: value => dispatch(createInputElement.request(value)),
    onUpdateInputElement: value => dispatch(updateInputElement.request(value)),
    onDeleteInputElement: value => dispatch(deleteInputElement.request(value)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InputContainer);