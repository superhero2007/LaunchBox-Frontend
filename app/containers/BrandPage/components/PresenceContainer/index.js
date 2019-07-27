import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  createPresence,
  updatePresence,
  deletePresence,
} from 'containers/BrandPage/actions';
import Plus from 'images/smaller-plus.svg';
import PlusHover from 'images/smaller-plus__hover.svg';

import Modal from 'components/Modal';
import Wrapper from './Wrapper';
import Content from './Content';
import Title from '../Title';
import ElementWrapper from './ElementWrapper';
import Element from './Element';
import ElementCloser from '../ElementCloser';
import InputAdd from '../InputAdd';
import ModalDialog from './ModalDialog';

class PresenceContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Online Presence',
      type: null,
    };
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
        type: 1,
      },
    });
  };

  onAdd = value => {
    const { selectedBrand, onCreatePresence, onUpdatePresence } = this.props;
    if (this.state.type === 'Create') {
      onCreatePresence({ brandId: selectedBrand, value });
    } else {
      onUpdatePresence({ brandId: selectedBrand, value });
    }
    this.setState({ type: null });
  };

  onDelete = _id => {
    const { selectedBrand, onDeletePresence } = this.props;
    onDeletePresence({ brandId: selectedBrand, _id });
  };

  onDuplicate = element => {
    this.props.onCreatePresence(element);
  };

  listElements = () =>
    this.props.presences.map(element => (
      <ElementWrapper key={element._id}>
        <Element value={element.value} type={element.type} />
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
              width={48}
              height={48}
              size={30}
              weight={100}
              imgWidth={21}
              onClick={this.createModal}
            >
              <img src={Plus} alt="Add" className="origin" />
              <img src={PlusHover} alt="Add" className="hover" />
            </InputAdd>
          </ElementWrapper>
        </Content>
      </Wrapper>
    );
  }
}

PresenceContainer.propTypes = {
  selectedBrand: PropTypes.string,
  presences: PropTypes.array,
  onUpdatePresence: PropTypes.func,
  onCreatePresence: PropTypes.func,
  onDeletePresence: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onCreatePresence: value => dispatch(createPresence.request(value)),
    onUpdatePresence: value => dispatch(updatePresence.request(value)),
    onDeletePresence: value => dispatch(deletePresence.request(value)),
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(PresenceContainer);
