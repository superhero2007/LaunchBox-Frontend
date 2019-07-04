import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import {
  getBrandColors,
  createBrandColor,
  deleteBrandColor,
} from 'containers/BrandPage/actions';
import { makeSelectBrandColors } from 'containers/BrandPage/selectors';
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

class BrandColorContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Colors',
      type: null,
    };
  }

  componentDidMount() {
    this.props.onLoadBrandColors();
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
    this.props.onCreateBrandColor(value);
    this.setState({ type: null });
  };

  onDelete = _id => {
    this.props.onDeleteBrandColor(_id);
  };

  listElements = () =>
    this.props.brandColors.map(element => (
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

BrandColorContainer.propTypes = {
  brandColors: PropTypes.array,
  onLoadBrandColors: PropTypes.func,
  onCreateBrandColor: PropTypes.func,
  onDeleteBrandColor: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  brandColors: makeSelectBrandColors(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onLoadBrandColors: () => dispatch(getBrandColors.request()),
    onCreateBrandColor: value => dispatch(createBrandColor.request(value)),
    onDeleteBrandColor: value => dispatch(deleteBrandColor.request(value)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BrandColorContainer);
