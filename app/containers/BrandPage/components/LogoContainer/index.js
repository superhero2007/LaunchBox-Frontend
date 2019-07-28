import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createLogo, deleteLogo } from 'containers/BrandPage/actions';
import Plus from 'images/plus.svg';
import PlusHover from 'images/plus__hover.svg';

import Modal from 'components/Modal';
import Wrapper from './Wrapper';
import Content from './Content';
import SubTitle from '../SubTitle';
import ElementCloser from '../ElementCloser';
import ElementWrapper from './ElementWrapper';
import Element from './Element';
import InputAdd from '../InputAdd';
import ModalDialog from './ModalDialog';

class LogoContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Logo',
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
    const { selectedBrand, onCreateLogo } = this.props;
    onCreateLogo({ brandId: selectedBrand, value });
    this.setState({ type: null });
  };

  onDelete = _id => {
    const { selectedBrand, onDeleteLogo } = this.props;
    onDeleteLogo({ brandId: selectedBrand, _id });
  };

  listElements = () =>
    this.props.logos.map(element => (
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
      </Wrapper>
    );
  }
}

LogoContainer.propTypes = {
  selectedBrand: PropTypes.string,
  logos: PropTypes.array,
  onCreateLogo: PropTypes.func,
  onDeleteLogo: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  onCreateLogo: value => dispatch(createLogo.request(value)),
  onDeleteLogo: value => dispatch(deleteLogo.request(value)),
});

export default connect(
  null,
  mapDispatchToProps,
)(LogoContainer);
