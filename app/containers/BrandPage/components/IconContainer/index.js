import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createIcon, deleteIcon } from 'containers/BrandPage/actions';
import Plus from 'images/small-plus.svg';
import PlusHover from 'images/small-plus__hover.svg';

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

  closeModal = () => {
    this.setState({ type: null });
  };

  createModal = () => {
    this.setState({
      type: true,
    });
  };

  onAdd = value => {
    const { selectedBrand, onCreateIcon } = this.props;
    onCreateIcon({ brandId: selectedBrand, value });
    this.setState({ type: null });
  };

  onDelete = _id => {
    const { selectedBrand, onDeleteIcon } = this.props;
    onDeleteIcon({ brandId: selectedBrand, _id });
  };

  listElements = () =>
    this.props.icons.map(element => (
      <ElementWrapper key={element.value}>
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
              imgWidth={30}
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

IconContainer.propTypes = {
  selectedBrand: PropTypes.string,
  icons: PropTypes.array,
  onCreateIcon: PropTypes.func,
  onDeleteIcon: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  onCreateIcon: value => dispatch(createIcon.request(value)),
  onDeleteIcon: value => dispatch(deleteIcon.request(value)),
});

export default connect(
  null,
  mapDispatchToProps,
)(IconContainer);
