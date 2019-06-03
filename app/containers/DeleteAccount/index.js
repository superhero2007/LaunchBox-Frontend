/* eslint-disable no-useless-escape */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { makeSelectLoading, makeSelectError } from 'services/api/selectors';
import { deleteUser } from 'services/api/actions';

import Header from 'components/Header';
import Password from 'components/Password';
import ExitSetings from '../../images/exit-settings.svg';
import DeleteAccountImg from '../../images/delete-account.svg';

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

const Content1 = styled.div`
  width: 688px;
  height: 432px;
  max-width: 90%;
  padding: 40px;
  text-align: left;
  background: #fff;
  border-radius: 7px;
`;

const Content2 = styled.div`
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
  height: 384px;
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
  text-align: left;
  color: #1b367c;
  margin-bottom: 24px;
`;

const PasswordTitle = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 800;
  font-size: 21px;
  line-height: 26px;
  text-align: center;
  color: #1b367c;
  margin-bottom: 46px;
`;

const SubTitle = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  text-align: left;
  color: #1b367c;
  margin-bottom: 40px;

  a {
    color: #3166ed;

    &:hover {
      font-weight: bold;
    }
  }
`;

const CancelButton = styled.button`
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
  background: #ec6689;
  color: #fff;
  border: 0;

  &:hover {
    color: #ec6689;
    background: #fff;
    border: 2px solid #ec6689;
  }

  &:disabled {
    background: #ec6689;
    color: #fff;
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

const FormAction = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 60px;
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

class DeleteAccount extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      step: 1,
    };
  }

  componentWillReceiveProps(newProps) {
    if (!newProps.loading && !newProps.error) {
      this.setState({
        step: 3,
      });
    }
  }

  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = () => {
    if (this.state.step === 1) {
      this.setState({ step: 2 });
    } else {
      this.props.onDeleteUser();
    }
  };

  handleCancel = () => {
    this.props.history.goBack();
  };

  handleBack = () => {
    this.setState({ step: 1 });
  };

  render() {
    const input = !this.state.password;

    let inputContainer;

    if (this.state.step === 1) {
      inputContainer = (
        <Content1>
          <Title>This will delete your account</Title>
          <SubTitle>
            After you delete your account, all your Brandguide data will be
            permanently deleted and you will not be able to recover your data.
          </SubTitle>
          <Title>You might want to know</Title>
          <SubTitle>
            To change the password, you may change it on the page&nbsp;
            <Link to="change-password">Change Password</Link>
            <br />
            Change email, you can change it on the page&nbsp;
            <Link to="change-email">Change Email</Link>
            <br />
            Clear account of all data, this can be done on the page&nbsp;
            <Link to="clear-account">Clear Account</Link>
          </SubTitle>
          <FormAction>
            <CancelButton onClick={this.handleCancel}>CANCEL</CancelButton>
            <SubmitButton onClick={this.handleSubmit}>
              Delete account
            </SubmitButton>
          </FormAction>
        </Content1>
      );
    }

    if (this.state.step === 2) {
      inputContainer = (
        <Content2>
          <PasswordTitle>Enter your password</PasswordTitle>
          <Password onChangePassword={this.handlePasswordChange} />
          <Action>
            <CancelButton onClick={this.handleBack}>BACK</CancelButton>
            <SubmitButton disabled={input} onClick={this.handleSubmit}>
              Submit
            </SubmitButton>
          </Action>
        </Content2>
      );
    }

    if (this.state.step === 3) {
      return (
        <FullScreen>
          <Header />
          <FormContent>
            <img src={DeleteAccountImg} alt="Registration Confirm" />
            <FormTitle>Your account has been deleted</FormTitle>
            <SubHeader>Sorry to see you go...</SubHeader>
            <ResendAction>
              <Button to="/">Go to Home Page</Button>
            </ResendAction>
          </FormContent>
        </FullScreen>
      );
    }

    return (
      <FullScreen>
        <Header />
        <BackToSettings to="/settings">
          <img src={ExitSetings} alt="Exit Settings" />
          <Back className="settings__exit-title">Back to Settings</Back>
        </BackToSettings>
        {inputContainer}
        <ForgotPassword>
          {this.state.step === 2 ? 'Forgot password?' : ''}
        </ForgotPassword>
      </FullScreen>
    );
  }
}

DeleteAccount.propTypes = {
  history: PropTypes.object,
  onDeleteUser: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const mapDispatchToProps = dispatch => ({
  onDeleteUser: value => dispatch(deleteUser.request(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeleteAccount);
