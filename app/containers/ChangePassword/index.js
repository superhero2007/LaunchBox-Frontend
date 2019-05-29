/* eslint-disable no-useless-escape */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { updatePassword } from 'services/api/actions';

import Header from 'components/Header';
import Password from 'components/Password';
import ExitSetings from '../../images/exit-settings.svg';
import ChangePasswordImg from '../../images/change-password.svg';

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
  height: 360px;
  max-width: 90%;
  padding: 32px 120px 48px;
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

const Button = styled(Link)`
  width: 210px;
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

class ChangePassword extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      oldPassword: '',
      newPassword: '',
      newPasswordConfirm: '',
      invalidPassword: false,
      step: 1,
    };
  }

  validatePassword = () =>
    this.state.newPassword === this.state.newPasswordConfirm;

  handleOldPasswordChange = e => {
    const { value } = e.target;
    this.setState({ oldPassword: value });
  };

  handleNewPasswordChange = e => {
    const { value } = e.target;
    this.setState({
      newPassword: value,
      invalidPassword: !this.validatePassword(),
    });
  };

  handleNewPasswordConfirmChange = e => {
    const { value } = e.target;
    this.setState({
      newPasswordConfirm: value,
      invalidPassword: !this.validatePassword(),
    });
  };

  handleSubmit = () => {
    this.setState({ step: 2 });
    this.props.onUpdatePassword({
      oldPassword: this.state.oldPassword,
      newPassword: this.state.newPassword,
    });
  };

  render() {
    const input =
      !!this.state.oldPassword &&
      !!this.state.newPassword &&
      !!this.state.newPasswordConfirm &&
      this.state.invalidPassword;

    return (
      <FullScreen>
        <Header />
        <BackToSettings to="/settings">
          <img src={ExitSetings} alt="Exit Settings" />
          <Back className="settings__exit-title">Back to Settings</Back>
        </BackToSettings>
        {this.state.step === 2 ? (
          <FormContent>
            <img src={ChangePasswordImg} alt="Registration Confirm" />
            <FormTitle>Password Changed</FormTitle>
            <SubHeader>Now, let’s get back to work!</SubHeader>
            <ResendAction>
              <Button to="/brand">GO TO BRAND PAGE</Button>
            </ResendAction>
          </FormContent>
        ) : (
          <Content>
            <Password
              label="Current Password"
              onChangePassword={this.handleOldPasswordChange}
            />
            <Password
              label="New Password"
              onChangePassword={this.handleNewPasswordChange}
            />
            <Password
              label="Confirm New Password"
              onChangePassword={this.handleNewPasswordConfirmChange}
            />
            <Action>
              <CancelButton to="/settings">BACK</CancelButton>
              <SubmitButton disabled={!input} onClick={this.handleSubmit}>
                Submit
              </SubmitButton>
            </Action>
          </Content>
        )}
      </FullScreen>
    );
  }
}

ChangePassword.propTypes = {
  onUpdatePassword: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  onUpdatePassword: value => dispatch(updatePassword.request(value)),
});

export default connect(
  null,
  mapDispatchToProps,
)(ChangePassword);
