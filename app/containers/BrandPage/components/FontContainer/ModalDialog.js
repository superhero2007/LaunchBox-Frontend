import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

const ModalInput = styled.input`
  border: 2px solid #d6dbe9;
  border-radius: 7px;
  box-sizing: border-box;
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: normal;
  width: 344px;
  height: 56px;
  padding: 19px 17px 18px;
  margin-bottom: 21px;
  color: #1b367c;

  &::placeholder {
    color: rgba(27, 54, 114, 0.5);
  }
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
    border: 0;
    color: #fff;
    background: #1b367c;
  }
`;

class ModalDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.element.value,
    };
  }

  handleClickAdd = () => {
    this.props.onAdd({
      _id: this.props.element._id,
      value: this.state.value,
    });
  };

  handleChangeInput = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <Wrapper>
        <ModalHeader>
          <ModalText>
            {this.props.element._id ? 'Edit Font' : 'Add Font'}
          </ModalText>
          <ModalInput
            placeholder="URL"
            value={this.state.value}
            onChange={this.handleChangeInput}
          />
        </ModalHeader>
        <ModalAction>
          <CancelButton onClick={this.props.onClose}>Cancel</CancelButton>
          <AddButton onClick={this.handleClickAdd}>
            {this.props.element._id ? 'Update' : 'Add'}
          </AddButton>
        </ModalAction>
      </Wrapper>
    );
  }
}

ModalDialog.propTypes = {
  onAdd: PropTypes.func,
  onClose: PropTypes.func,
  element: PropTypes.object,
};

export default ModalDialog;
