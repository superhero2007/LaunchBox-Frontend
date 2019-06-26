import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import facebook from '../../../../images/facebook.svg';
import twitter from '../../../../images/twitter.svg';
import instagram from '../../../../images/instagram.svg';
import youtube from '../../../../images/play.svg';

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
  border: 2px solid rgba(0, 0, 0, 0.2);
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
  border-radius: 7px;

  &::placeholder {
    color: rgba(66, 77, 107, 0.5);
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
    color: #fff;
    background: #1b367c;
  }
`;

const ModalPresences = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 23px;
`;

const ModalPresence = styled.div`
  width: 38px;
  height: 38px;
  background: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  color: #fff;
  opacity: ${props => (props.active ? 1 : 0.5)};

  &:hover {
    opacity: 1;
  }

  & + & {
    margin-left: 19px;
  }
`;

class ModalDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.element.value,
      list: [
        {
          id: 1,
          img: <img src={facebook} alt="Facebook" />,
          color: '#3B5998',
        },
        {
          id: 2,
          img: <img src={twitter} alt="Twitter" />,
          color: '#1CA1F1',
        },
        {
          id: 3,
          img: <img src={instagram} alt="Instagram" />,
          color: '#E1306C',
        },
        {
          id: 4,
          img: <img src={youtube} alt="Youtube" />,
          color: '#F61C0D',
        },
        {
          id: 5,
          img: null,
          color: '#1CA1F2',
        },
        {
          id: 6,
          img: <span>{'</>'}</span>,
          color: '#3166ED',
        },
      ],
      type: props.element.type,
    };
  }

  handleClickAdd = () => {
    this.props.onAdd({
      _id: this.props.element._id,
      value: this.state.value,
      type: this.state.type,
    });
  };

  handleChangeInput = e => {
    this.setState({ value: e.target.value });
  };

  handleTypeClick = id => {
    this.setState({ type: id });
  };

  render() {
    const { list, type } = this.state;
    const presences = list.map(presence => (
      <ModalPresence
        key={presence.color}
        color={presence.color}
        active={presence.id === type}
        onClick={() => this.handleTypeClick(presence.id)}
      >
        {presence.img}
      </ModalPresence>
    ));

    return (
      <Wrapper>
        <ModalHeader>
          <ModalText>
            {this.props.element._id
              ? 'Edit Online Presence'
              : 'Add New Online Presence'}
          </ModalText>
          <ModalPresences>{presences}</ModalPresences>
          <ModalInput
            placeholder="Type username or paste link"
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
