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

const ModalAction = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top 38px;
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

const ModalInput = styled.input`
  width: 100%;
  border: 2px solid rgba(66, 77, 107, 0.2);
  border-radius: 7px;
  padding: 19px 17px;
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
  color: #1b367c;
  &::placeholder {
    color: rgba(66, 77, 107, 0.5);
  }
`;

class AddDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleClickAdd = () => {
    const { value } = this.state;
    this.props.onAdd({ value });
  };

  render() {
    const { type } = this.props;
    const { value } = this.state;
    const title =
      type === 'AddBrand' ? 'Brand Name' : 'Add New Member to Brand';
    return (
      <Wrapper>
        <ModalHeader>
          <ModalText>{title}</ModalText>
        </ModalHeader>
        <ModalInput
          type="input"
          value={value}
          onChange={this.handleChange}
          placeholder={
            type === 'AddBrand'
              ? 'Name'
              : 'Type name or invite new member by email'
          }
        />
        <ModalAction>
          <CancelButton onClick={this.props.onClose}>CANCEL</CancelButton>
          <AddButton onClick={this.handleClickAdd}>ADD NEW</AddButton>
        </ModalAction>
      </Wrapper>
    );
  }
}

AddDialog.propTypes = {
  type: PropTypes.string,
  onClose: PropTypes.func,
  onAdd: PropTypes.func,
};

export default AddDialog;
