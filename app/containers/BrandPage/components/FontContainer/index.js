import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import {
  getFonts,
  createFont,
  updateFont,
  deleteFont,
} from 'containers/BrandPage/actions';
import { makeSelectFonts } from 'containers/BrandPage/selectors';
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

class FontContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Fonts',
      type: null,
    };
  }

  componentDidMount() {
    this.props.onLoadFonts();
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
      this.props.onCreateFont(value);
    } else {
      this.props.onUpdateFont(value);
    }
    this.setState({ type: null });
  };

  onDelete = _id => {
    this.props.onDeleteFont(_id);
  };

  listElements = () =>
    this.props.fonts.map(element => (
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
            <ModalDialog
              element={this.state.element}
              onAdd={this.onAdd}
              onClose={this.closeModal}
            />
          </Modal>
        )}
        <SubTitle>{this.state.title}</SubTitle>
        <Content>
          {this.listElements()}
          <ElementWrapper>
            <InputAdd
              width={221}
              height={221}
              size={90}
              weight={100}
              imgWidth={64}
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
  fonts: PropTypes.array,
  onLoadFonts: PropTypes.func,
  onUpdateFont: PropTypes.func,
  onCreateFont: PropTypes.func,
  onDeleteFont: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  fonts: makeSelectFonts(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onLoadFonts: () => dispatch(getFonts.request()),
    onCreateFont: value => dispatch(createFont.request(value)),
    onUpdateFont: value => dispatch(updateFont.request(value)),
    onDeleteFont: value => dispatch(deleteFont.request(value)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FontContainer);
