import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import close from '../../../images/close.svg';

const Wrapper = styled.div`
  width: 100%;
  height: 48px;
  background: #fff;
  border: 2px solid #dfe8ff;
  border-radius: 7px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;

  font-family: Muli;
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${props => props.color};

  .icon {
    font-size: 20px;
    margin-top: -3px;
  }

  span + span {
    margin-left: 8px;
  }

  &:hover,
  &.focus {
    background: ${props => props.color};
    border-color: ${props => props.color};
    color: #fff;
    border: 0;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .social-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-family: Muli;
    font-style: normal;
    font-weight: 900;
    font-size: 15px;
    line-height: 19px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #fff;
    border-radius: 7px;

    img {
      width: 48px;
      height: 48px;
      margin-right: 24px;
    }
  }
`;

const CloseButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 0px 7px 7px 0px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #e37898;
  }
`;

const AddButton = styled.div`
  width: 100%;
`;

class Social extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
      value: props.value,
    };
  }

  handleClick = () => {
    this.setState({
      opened: true,
      value: {
        name: 'Mark Zuckerberg',
        img:
          'https://s3-alpha-sig.figma.com/img/0786/16e1/a215b51ab2a22751f61ce6a393e62ea0?Expires=1559520000&Signature=DwTfLO~S0Uyrw95cGpSZpGv35aryxlv8B~3CiPVt0e7KbuoDq98WRViT-gEKrbBIOG9FGhGF~wt1MHqV0N~2JdjgwQIjoLUInJuFM-Vou4JQun0MUnGL5W-ExFHJrRYG34WHALeIS-QY~av-Rf48LeAjenvgC3Ht3BXljpR0dVdaYQCDsb~DI4uW-1-GNtiRvInYGF4RYN7ELG79gM-D05bOEqzleweyUuwPpGhJc3~m2Ee0ACPf420t37aGQ4axD3T4s87cHoNotyBVfpSQJSPk0h3eWtIrdNugbCYcShB0A~qEzevAB4Rt6k8OOamDiMfAaSLwwuZJA-oxGxP03g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      },
    });
    this.props.onAdd();
  };

  handleClose = () => {
    this.setState(state => ({
      opened: !state.opened,
      value: null,
    }));
    this.props.onDelete();
  };

  render() {
    let color;
    if (this.props.type === 'facebook') {
      color = '#3B5998';
    }
    if (this.props.type === 'twitter') {
      color = '#1DA1F2';
    }

    let content;
    if (this.state.value && this.state.opened) {
      content = (
        <Content>
          <div className="social-content">
            <img src={this.state.value.img} alt="Social" />
            <div>{this.state.value.name}</div>
          </div>
          <CloseButton onClick={this.handleClose}>
            <img src={close} alt="Delete Social" />
          </CloseButton>
        </Content>
      );
    } else {
      content = (
        <AddButton onClick={this.handleClick}>
          <span className="icon">+</span>
          <span>{this.props.type}</span>
        </AddButton>
      );
    }

    return (
      <Wrapper className={this.state.opened ? 'focus' : ''} color={color}>
        {content}
      </Wrapper>
    );
  }
}

Social.propTypes = {
  type: PropTypes.string,
  value: PropTypes.object,
  onAdd: PropTypes.func,
  onDelete: PropTypes.func,
};

export default Social;
