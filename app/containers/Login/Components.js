import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Check from 'images/check-white.png';

export const Wrapper = styled.div`
  display: flex;
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.div`
  position: fixed;
  left: 0;
  top: 0;
`;

export const Logo = styled.img`
  position: absolute;
  left: 43px;
  top: 34px;
`;

export const Form = styled.div`
  width: 445px;
  max-width: 100%;
  margin: 20px;
`;

export const FormTitle = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 900;
  font-size: 35px;
  line-height: 44px;
  letter-spacing: -0.03em;
  color: #1b367c;
  padding-bottom: 28px;
`;

export const Input = styled.div`
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

export const Label = styled.label`
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

export const InputElement = styled.input`
  border: none;
  width: 100%;
  padding: 17px 18px;
  color: #1b367c;
  font-size: 15px;
  line-height: 19px;

  &:focus,
  &.focus {
    padding: 26px 18px 6px;
  }
`;

export const ForgotWrapper = styled.div`
  margin: 24px 0;
  display: flex;
  justify-content: space-between;
`;

export const Remember = styled.div`
  display: flex;
  align-items: center;
  user-select: none;

  .remember-label {
    font-family: Muli;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 19px;
    color: #7d8291;
    margin-left: 16px;
  }

  .remember-checkbox {
    width: 24px;
    height: 24px;
    border: 2px solid rgba(125, 130, 144, 0.5);
  }

  &:hover {
    .remember-label {
      color: #596898;
    }

    .remember-checkbox {
      background: url(${Check}) #c0d1fc;
      background-position: center;
      background-repeat: no-repeat;
      border-color: #c0d1fc;
    }
  }

  &.checked {
    .remember-label {
      color: #1b367c;
    }

    .remember-checkbox {
      background: url(${Check}) #1b367c;
      background-position: center;
      background-repeat: no-repeat;
      border-color: #1b367c;
    }
  }
`;

export const ForgotLink = styled(Link)`
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
  color: #7d8291;
  cursor: pointer;
  border-bottom: 1px solid #d9dbe1;
  text-decoration: none;

  &:hover {
    color: #1b367c;
    border-color: #1b367c;
  }
`;

export const Action = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LoginButton = styled.button`
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

  &:disabled {
    background: #dfe8ff;
    color: #92aae6;
    cursor: not-allowed;
  }
`;

export const CreateAccount = styled(Link)`
  width: 210px;
  height: 48px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Muli;
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;
  border: 2px solid #dfe8ff;
  color: #1b367c;
  text-decoration: none;

  &:hover {
    background: #1b367c;
    color: #fff;
    border: 0;
  }
`;

export const Social = styled.div`
  display: flex;
  margin-top: 78px;
`;

export const SocialText = styled.span`
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
  color: rgba(66, 77, 107, 0.5);
`;

export const FacebookLink = styled(Link)`
  font-family: Muli;
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 19px;
  text-align: right;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #3b5998;
  margin-left: 47px;
  border-bottom: 2px solid #3b5998;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    border: 0;
  }
`;

export const GoogleLink = styled(Link)`
  font-family: Muli;
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 19px;
  text-align: right;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #4285f4;
  margin-left: 47px;
  border-bottom: 2px solid #4285f4;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    border: 0;
  }
`;

export const InvalidEmail = styled.div`
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

export const FormError = styled.div`
  width: 100%;
  height: 56px;
  background: rgba(236, 102, 137, 0.1);
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
  color: #ec6689;

  span {
    margin-left: 12px;
  }
`;
