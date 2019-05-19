import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import {
  getPresences,
  createPresence,
  updatePresence,
  deletePresence,
} from 'containers/BrandPage/actions';
import { makeSelectPresences } from 'containers/BrandPage/selectors';

import Modal from 'components/Modal';
import Wrapper from './Wrapper';
import Content from './Content';
import Title from '../Title';
import ElementWrapper from './ElementWrapper';
import Element from './Element';
import InputAdd from '../InputAdd';
import ElementCloser from '../ElementCloser';
import ModalDialog from './ModalDialog';

class PresenceContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Online Presence',
      type: null,
    };
  }

  componentDidMount() {
    this.props.onLoadPresences();
  }

  closeModal = () => {
    this.setState({ type: null });
  };

  createModal = () => {
    this.setState({
      type: 'Create',
      element: {
        _id: '',
        value: '',
      },
    });
  };

  onAdd = value => {
    if (this.state.type === 'Create') {
      this.props.onCreatePresence(value);
    } else {
      this.props.onUpdatePresence(value);
    }
    this.setState({ type: null });
  };

  onUpdate = (value, element) => {
    const updatedObj = Object.assign({}, element);
    updatedObj.value = value.target.value;
    this.props.onUpdatePresence(updatedObj);
  };

  onDelete = _id => {
    this.props.onDeletePresence(_id);
  };

  updateModal = element => {
    this.setState({
      type: 'Update',
      element,
    });
  };

  onDuplicate = element => {
    this.props.onCreatePresence(element);
  };

  listElements = () =>
    this.props.presences.map(element => (
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

PresenceContainer.propTypes = {
  presences: PropTypes.array,
  onLoadPresences: PropTypes.func,
  onUpdatePresence: PropTypes.func,
  onCreatePresence: PropTypes.func,
  onDeletePresence: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  presences: makeSelectPresences(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onLoadPresences: () => dispatch(getPresences.request()),
    onCreatePresence: value => dispatch(createPresence.request(value)),
    onUpdatePresence: value => dispatch(updatePresence.request(value)),
    onDeletePresence: value => dispatch(deletePresence.request(value)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PresenceContainer);
