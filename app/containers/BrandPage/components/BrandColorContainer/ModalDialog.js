import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SketchPicker } from 'react-color';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

const ModalText = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 800;
  font-size: 17px;
  line-height: normal;
  text-align: center;
  color: #1b367c;
  margin-bottom: 28px;
`;

const ModalBody = styled.div`
  flex-direction: column;
  background: #f8f8f8;
  margin-bottom: 16px;
  width: 348px;
  height: 348px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #d6dbe9;
  border-radius: 7px;
`;

const ModalAction = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  font-family: Muli;
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: normal;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 7px;
`;

const AddButton = styled(Button)`
  border: 2px solid #1b367c;
  background: #1b367c;
  color: #fff;
  margin-left: 1rem;

  &:hover {
    color: #1b367c;
    background: #fff;
  }
`;

const CancelButton = styled(Button)`
  border: 2px solid #ececf6;
  color: #1b367c;

  &:hover {
    color: #fff;
    background: #1b367c;
  }
`;

const ColorPicker = styled(SketchPicker)`
  box-shadow: none !important;
`;

class ModalDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '#FFFFFF',
    };
  }

  handleChangeColor = color => {
    this.setState({ value: color.hex });
  };

  handleClickAdd = () => {
    this.props.onAdd({
      value: this.state.value,
    });
  };

  render() {
    return (
      <Wrapper>
        <ModalHeader>
          <ModalText>Add Color</ModalText>
        </ModalHeader>
        <ModalBody>
          <ColorPicker
            color={this.state.value}
            onChangeComplete={this.handleChangeColor}
            width="100%"
            presetColors={[]}
          />
        </ModalBody>
        <ModalAction>
          <CancelButton onClick={this.props.onClose}>Cancel</CancelButton>
          {this.state.value && (
            <AddButton onClick={this.handleClickAdd}>Add</AddButton>
          )}
        </ModalAction>
      </Wrapper>
    );
  }
}

ModalDialog.propTypes = {
  onAdd: PropTypes.func,
  onClose: PropTypes.func,
};

export default ModalDialog;
