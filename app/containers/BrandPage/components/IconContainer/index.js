import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { getIcons, createIcon, deleteIcon } from 'containers/BrandPage/actions';
import { makeSelectIcons } from 'containers/BrandPage/selectors';

import Modal from 'components/Modal';
import Wrapper from './Wrapper';
import Content from './Content';
import SubTitle from '../SubTitle';
import ElementCloser from '../ElementCloser';
import ElementWrapper from './ElementWrapper';
import Element from './Element';
import InputAdd from '../InputAdd';
import ModalDialog from './ModalDialog';

class IconContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Icons',
      type: null,
    };
  }

  componentDidMount() {
    this.props.onLoadIcons();
  }

  closeModal = () => {
    this.setState({ type: null });
  };

  createModal = () => {
    this.setState({
      type: true,
    });
  };

  onAdd = value => {
    this.props.onCreateIcon(value);
    this.setState({ type: null });
  };

  onDelete = _id => {
    this.props.onDeleteIcon(_id);
  };

  listElements = () =>
    this.props.icons.map(element => (
      <ElementWrapper key={element._id}>
        <Element value={element.value} />
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
            <ModalDialog onAdd={this.onAdd} onClose={this.closeModal} />
          </Modal>
        )}
        <SubTitle>{this.state.title}</SubTitle>
        <Content>
          {this.listElements()}
          <ElementWrapper>
            <InputAdd
              width={80}
              height={80}
              size={45}
              weight={100}
              onClick={this.createModal}
            >
              +
            </InputAdd>
          </ElementWrapper>
        </Content>
      </Wrapper>
    );
  }
}

IconContainer.propTypes = {
  icons: PropTypes.array,
  onLoadIcons: PropTypes.func,
  onCreateIcon: PropTypes.func,
  onDeleteIcon: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  icons: makeSelectIcons(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onLoadIcons: () => dispatch(getIcons.request()),
    onCreateIcon: value => dispatch(createIcon.request(value)),
    onDeleteIcon: value => dispatch(deleteIcon.request(value)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(IconContainer);
