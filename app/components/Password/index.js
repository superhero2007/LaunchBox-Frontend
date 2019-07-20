import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PasswordText from 'images/password-text.svg';
import PasswordTextHover from 'images/password-text__hover.svg';
import PasswordHash from 'images/password-hash.svg';
import PasswordHashHover from 'images/password-hash__hover.svg';
import PasswordHint from 'images/password-hint.svg';
import PasswordHintHover from 'images/password-hint__hover.svg';

const Input = styled.div`
  border: 2px solid rgba(66, 77, 107, 0.2);
  margin: 16px 0;
  width: 100%;
  height: 56px;
  border-radius: 7px;
  position: relative;

  &.invalid {
    border-color: #f74d6c;
  }
`;

const Label = styled.label`
  position: absolute;
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
  color: rgba(66, 77, 107, 0.5);
  padding: 0 18px;
  top: 17px;
  left: 0;
  transition: top 0.2s;
  transition: font-size 0.2s;

  input:focus + &,
  input.focus + & {
    font-size: 11px;
    line-height: 14px;
    top: 10px;
  }
`;

const InputElement = styled.input`
  border: none;
  width: 100%;
  padding: 17px 18px;
  color: #424d6b;
  font-size: 15px;
  line-height: 19px;

  &:focus,
  &.focus {
    padding: 26px 18px 6px;
  }
`;

const PasswordHintImg = styled.img`
  position: absolute;
  top: 17px;
  right: 57px;
  width: 20px;
  height: 20px;
`;

const PasswordIconImg = styled.img`
  position: absolute;
  top: 17px;
  right: 17px;
  width: 20px;
  height: 20px;
`;

const PasswordParam = styled.div`
  position: absolute;
  top: 17px;
  right: -60px;
  color: ${props => props.color};
`;

const PasswordLength = styled.div`
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 100%;
  height: 2px;
  display: flex;
`;

const PasswordLengthElement = styled.div`
  background: ${props => props.color};
  width: 100%;

  & + & {
    margin-left: 12px;
  }
`;

const PasswordHintTooltip = styled.div`
  position: absolute;
  top: -75px;
  left: 340px;
  width: 285px;
  height: 83px;
`;

const PasswordHintTooltipContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 17px;
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  color: #424d6b;
  background: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.09);
  position: relative;

  &:before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    position: absolute;

    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid white;
    bottom: -8px;
    left: 25px;
  }
`;

class Password extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      showPassword: false,
      passwordHover: false,
      passwordHoverHint: false,
    };
  }

  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
    this.props.onChangePassword(e);
  };

  togglePassword = () => {
    this.setState(state => ({
      showPassword: !state.showPassword,
    }));
  };

  hoverInPassword = () => {
    this.setState({ passwordHover: true });
  };

  hoverOutPassword = () => {
    this.setState({ passwordHover: false });
  };

  hoverInPasswordHint = () => {
    this.setState({ passwordHoverHint: true });
  };

  hoverOutPasswordHint = () => {
    this.setState({ passwordHoverHint: false });
  };

  render() {
    let passwordIcon;
    if (this.state.showPassword) {
      if (this.state.passwordHover) {
        passwordIcon = PasswordTextHover;
      } else {
        passwordIcon = PasswordText;
      }
    } else if (this.state.passwordHover) {
      passwordIcon = PasswordHashHover;
    } else {
      passwordIcon = PasswordHash;
    }
    let passwordHintIcon;
    if (this.state.passwordHoverHint) {
      passwordHintIcon = PasswordHintHover;
    } else {
      passwordHintIcon = PasswordHint;
    }

    let passwordParam = {
      text: '',
      color: '#fff',
      weak: ['transparent', 'transparent', 'transparent', 'transparent'],
    };
    const passwordWeakLength = [
      {
        text: 'Worst',
        color: '#B3B8C4',
        weak: ['#D9DBE1', '#D9DBE1', '#D9DBE1', '#D9DBE1'],
      },
      {
        text: 'Bad',
        color: '#E37898',
        weak: ['#E37898', '#D9DBE1', '#D9DBE1', '#D9DBE1'],
      },
      {
        text: 'Weak',
        color: '#FEB765',
        weak: ['#FEB765', '#FEB765', '#D9DBE1', '#D9DBE1'],
      },
      {
        text: 'Good',
        color: '#0BDF6D',
        weak: ['#0BDF6D', '#0BDF6D', '#0BDF6D', '#D9DBE1'],
      },
      {
        text: 'Strong',
        color: '#0BDF6D',
        weak: ['#0BDF6D', '#0BDF6D', '#0BDF6D', '#0BDF6D'],
      },
    ];

    if (this.state.password) {
      const passwordWeak = Math.floor(this.state.password.length / 4);
      if (passwordWeak >= 5) {
        passwordParam = {
          text: 'Strong',
          color: '#0BDF6D',
          weak: ['#0BDF6D', '#0BDF6D', '#0BDF6D', '#0BDF6D'],
        };
      } else {
        passwordParam = passwordWeakLength[passwordWeak];
      }
    }

    return (
      <Input>
        <InputElement
          type={this.state.showPassword ? 'text' : 'password'}
          value={this.state.password}
          onChange={this.handlePasswordChange}
          className={this.state.password ? 'focus' : ''}
        />
        <Label>{this.props.label ? this.props.label : 'Password'}</Label>
        <PasswordHintImg
          src={passwordHintIcon}
          alt="Password Hint"
          onMouseEnter={this.hoverInPasswordHint}
          onMouseLeave={this.hoverOutPasswordHint}
        />
        <PasswordIconImg
          src={passwordIcon}
          alt="Password Text"
          onClick={this.togglePassword}
          onMouseEnter={this.hoverInPassword}
          onMouseLeave={this.hoverOutPassword}
        />
        <PasswordParam color={passwordParam.color}>
          {passwordParam.text}
        </PasswordParam>
        <PasswordLength>
          <PasswordLengthElement color={passwordParam.weak[0]} />
          <PasswordLengthElement color={passwordParam.weak[1]} />
          <PasswordLengthElement color={passwordParam.weak[2]} />
          <PasswordLengthElement color={passwordParam.weak[3]} />
        </PasswordLength>
        {this.state.passwordHoverHint && (
          <PasswordHintTooltip>
            <PasswordHintTooltipContent>
              Use 8 or more characters with a mix of letters, numbers & symbols
            </PasswordHintTooltipContent>
          </PasswordHintTooltip>
        )}
      </Input>
    );
  }
}

Password.propTypes = {
  onChangePassword: PropTypes.func,
  label: PropTypes.string,
};

export default Password;
