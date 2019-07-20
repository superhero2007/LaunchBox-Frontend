/* eslint-disable no-useless-escape */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import {
  makeSelectUser,
  makeSelectLoading,
  makeSelectError,
} from 'services/api/selectors';
import { getUser, updateEmail } from 'services/api/actions';

import Header from 'components/Header';
import Password from 'components/Password';
import ExitSetings from 'images/exit-settings.svg';
import ChangeEmailImg from 'images/change-email.svg';

const FullScreen = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: #f8f8ff;
  padding-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const BackToSettings = styled(Link)`
  position: absolute;
  top: 140px;
  left: 26px;
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 3;
`;

const Content = styled.div`
  width: 688px;
  height: 312px;
  max-width: 90%;
  padding: 48px 120px 64px;
  text-align: center;
  background: #fff;
  border-radius: 7px;
`;

const FormContent = styled.div`
  width: 688px;
  height: 368px;
  max-width: 90%;
  padding: 60px 120px 40px;
  text-align: center;
  background: #fff;
  border-radius: 7px;
`;

const Title = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 800;
  font-size: 21px;
  line-height: 26px;
  text-align: center;
  color: #1b367c;
  margin-bottom: 46px;
`;

const CancelButton = styled(Link)`
  width: 210px;
  height: 48px;
  border: 2px solid #d6dbe9;
  border-radius: 7px;
  font-family: Muli;
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #1b367c;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border: 0;
    background: #1b367c;
    color: #fff;
  }
`;

const SubmitButton = styled.button`
  width: 210px;
  height: 48px;
  border-radius: 7px;
  font-family: Muli;
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  background: #1b367c;
  color: #fff;
  border: 0;

  &:hover {
    color: #1b367c;
    background: #fff;
    border: 2px solid #d6dbe9;
  }

  &:disabled {
    background: #dfe8ff;
    color: #92aae6;
    cursor: not-allowed;
  }
`;

const Action = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`;

const ForgotPassword = styled.button`
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
  color: #7d8291;
  margin-top: 30px;
  border-radius: 7px;
`;

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

const InputBox = styled.input`
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

const InvalidEmail = styled.div`
  position: absolute;
  right: 21px;
  top: 19px;
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
  text-align: right;
  color: #f64d6c;
`;

const Back = styled.span`
  font-family: Muli;
  font-style: normal;
  font-weight: 800;
  font-size: 27px;
  line-height: 34px;
  color: #1b367c;
  margin-left: 20px;
`;

const FormTitle = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 900;
  font-size: 21px;
  line-height: 26px;
  letter-spacing: -0.03em;
  color: #1b367c;
  margin-top: 20px;
`;

const SubHeader = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
  color: #1b367c;
  opacity: 0.5;
  margin-top: 13px;
`;

const ResendAction = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 36px;
`;

const Button = styled.button`
  width: 177px;
  height: 48px;
  border-radius: 7px;
  background: #1b367c;
  font-family: Muli;
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class ChangeEmail extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      value: props.user.email,
      step: 1,
    };
  }

  componentDidMount = () => {
    const token = localStorage.getItem('token');
    if (token && !this.props.user) {
      this.props.OnGetUser();
    }
  };

  componentWillReceiveProps(newProps) {
    if (!newProps.loading && !newProps.error) {
      this.setState({
        step: 3,
      });
    }
  }

  validateEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email === '') {
      return true;
    }
    return re.test(String(email).toLowerCase());
  };

  handleValueChange = e => {
    const { value } = e.target;
    this.setState({ value });
  };

  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = () => {
    if (this.state.step === 1) {
      this.setState({ step: 2 });
    } else {
      this.props.onUpdateEmail({
        email: this.state.value,
        password: this.state.password,
      });
    }
  };

  handleResend = () => {
    this.props.onUpdateEmail({
      email: this.state.value,
      password: this.state.password,
    });
  };

  handleEmailChange = e => {
    this.setState({ value: e.target.value });
  };

  handleEmailFocus = () => {
    this.setState({ invalidEmail: false });
  };

  handleEmailBlur = () => {
    this.setState(state => ({
      invalidEmail: !this.validateEmail(state.value),
    }));
  };

  render() {
    const input =
      this.state.step === 1
        ? !!this.state.password
        : !!this.state.value && !this.state.invalidEmail;

    let inputContainer;
    if (this.state.step === 1) {
      inputContainer = (
        <Password onChangePassword={this.handlePasswordChange} />
      );
    } else if (this.state.step === 2) {
      inputContainer = (
        <Input className={this.state.invalidEmail ? 'invalid' : ''}>
          <InputBox
            type="text"
            value={this.state.value}
            onChange={this.handleValueChange}
            id="email"
            className={this.state.value ? 'focus' : ''}
            onFocus={this.handleEmailFocus}
            onBlur={this.handleEmailBlur}
          />
          <Label htmlFor="email">Email</Label>
          {this.state.invalidEmail && (
            <InvalidEmail>Invalid Address</InvalidEmail>
          )}
        </Input>
      );
    }

    return (
      <FullScreen>
        <Header />
        <BackToSettings to="/settings">
          <img src={ExitSetings} alt="Exit Settings" />
          <Back className="settings__exit-title">Back to Settings</Back>
        </BackToSettings>
        {this.state.step === 3 ? (
          <FormContent>
            <img src={ChangeEmailImg} alt="Registration Confirm" />
            <FormTitle>Thank you!</FormTitle>
            <SubHeader>
              We just sent an email to {this.props.user.email}. Click the link
              to confirm the changes.
            </SubHeader>
            <ResendAction>
              <Button onClick={this.handleResend}>RESEND</Button>
            </ResendAction>
          </FormContent>
        ) : (
          <Content>
            <Title>
              {this.state.step === 1
                ? 'Enter your password'
                : 'Enter new email'}
            </Title>
            {inputContainer}
            <Action>
              <CancelButton to="/settings">BACK</CancelButton>
              <SubmitButton disabled={!input} onClick={this.handleSubmit}>
                Submit
              </SubmitButton>
            </Action>
          </Content>
        )}
        <ForgotPassword>
          {this.state.step === 1 ? 'Forgot password?' : ''}
        </ForgotPassword>
      </FullScreen>
    );
  }
}

ChangeEmail.propTypes = {
  user: PropTypes.object,
  OnGetUser: PropTypes.func,
  onUpdateEmail: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const mapDispatchToProps = dispatch => ({
  OnGetUser: () => dispatch(getUser.request()),
  onUpdateEmail: value => dispatch(updateEmail.request(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChangeEmail);
