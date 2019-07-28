import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createFont, deleteFont } from 'containers/BrandPage/actions';
import Plus from 'images/smaller-plus.svg';
import PlusHover from 'images/smaller-plus__hover.svg';

import Modal from 'components/Modal';
import Wrapper from './Wrapper';
import Content from './Content';
import SubTitle from '../SubTitle';
import ElementCloser from '../ElementCloser';
import ElementWrapper from './ElementWrapper';
import Element from './Element';
import InputAdd from '../InputAdd';
import ModalDialog from './ModalDialog';

class FontContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Fonts',
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
    const { selectedBrand, onCreateFont } = this.props;
    onCreateFont({ brandId: selectedBrand, value });
    this.setState({ type: null });
  };

  onDelete = _id => {
    const { selectedBrand, onDeleteFont } = this.props;
    onDeleteFont({ brandId: selectedBrand, _id });
  };

  listElements = () =>
    this.props.fonts.map(element => (
      <ElementWrapper key={element._id}>
        <Element value={element.value} name={element.name} />
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
              width={220}
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

FontContainer.propTypes = {
  selectedBrand: PropTypes.string,
  fonts: PropTypes.array,
  onCreateFont: PropTypes.func,
  onDeleteFont: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  onCreateFont: value => dispatch(createFont.request(value)),
  onDeleteFont: value => dispatch(deleteFont.request(value)),
});

export default connect(
  null,
  mapDispatchToProps,
)(FontContainer);
