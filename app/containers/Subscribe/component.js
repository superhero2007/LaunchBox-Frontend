import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 0 20px;
`;

export const BackToSettings = styled(Link)`
  position: absolute;
  top: 140px;
  left: 26px;
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 3;
`;

export const Back = styled.span`
  font-family: Muli;
  font-style: normal;
  font-weight: 800;
  font-size: 27px;
  line-height: 34px;
  color: #1b367c;
  margin-left: 20px;
`;

export const Form = styled.div`
  width: 688px;
  background: #fff;
  max-width: 100%;
  text-align: center;
  margin-top: 100px;
  border-radius: 7px;
  overflow: hidden;
`;

export const SuccessForm = styled.div`
  width: 688px;
  background: #fff;
  max-width: 100%;
  text-align: center;
  margin-top: 100px;
  height: 368px;
  padding: 60px;
`;

export const ConfirmForm = styled.div`
  width: 688px;
  background: #fff;
  max-width: 100%;
  text-align: center;
  margin-top: 100px;
  height: 344px;
  padding: 80px;
`;

export const ConfirmSubHeader = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
  color: #1b367c;
  border-radius: 7px;
  margin: 36px 0;
`;

export const SuccessImg = styled.img`
  width: 120px;
  margin-bottom: 22px;
`;

// export const ButtonWrapper = styled.div`
//   display: flex;
// `;

export const FormTitle = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 900;
  font-size: 21px;
  line-height: 26px;
  letter-spacing: -0.03em;
  color: #1b367c;
`;

export const SubHeader = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
  color: #1b367c;
  opacity: 0.5;
  margin-top: 13px;
`;

export const Action = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 28px;
`;

export const FormButton = styled(Link)`
  width: 272px;
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

// export const Button = styled.button`
//   width: 344px;
//   height: 64px;
//   cursor: pointer;
//   font-family: Muli;
//   font-style: normal;
//   font-weight: 900;
//   font-size: 15px;
//   line-height: 19px;
//   text-align: center;
//   letter-spacing: 0.05em;
//   text-transform: uppercase;
//   border-bottom: 2px solid #dfe8ff;
//   color: #3166ed;
//
//   &:hover {
//     background: #dfe8ff;
//   }
//
//   &.active {
//     background: #1b367c;
//     color: #fff;
//     border: 0;
//   }
//
//   span {
//     margin-left: 13px;
//   }
// `;

export const FormContent = styled.div`
  padding: 40px;
`;

export const FormAction = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ConfirmBackButton = styled.button`
  border: 2px solid #d6dbe9;
  border-radius: 7px;
  width: 191px;
  height: 48px;
  font-family: Muli;
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #1b367c;
  background: #fff;
  border-radius: 7px;

  &:hover {
    background: #1b367c;
    color: #fff;
  }
`;

export const ConfirmSubmitButton = styled.button`
  background: #ec6689;
  border-radius: 7px;
  width: 208px;
  height: 48px;
  font-family: Muli;
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #fff;
  margin-left: 16px;

  &:hover {
    background: #fff;
    color: #ec6689;
    border: 2px solid #ec6689;
  }
`;

export const FormAddButton = styled.button`
  background: #1b367c;
  width: 288px;
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
  color: #fff;
  margin-left: 24px;

  &:hover {
    border: 2px solid #d6dbe9;
    background: white;
    color: #1b367c;
  }
`;

export const FormCancelButton = styled.button`
  width: 288px;
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
  background: white;
  color: #1b367c;
  border: 2px solid #d6dbe9;

  &:hover {
    background: #1b367c;
    color: #fff;
  }
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: space-between;

  & + & {
    margin-top: 16px;
  }
`;

export const FormRowContent = styled.div`
  ${props => props.opacity && 'opacity: 0.5;'};
  width: 100%;
  text-align: center;

  & + & {
    border-left: 1px solid rgba(27, 54, 124, 0.1);
  }
`;

export const Type = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 800;
  font-size: 21px;
  line-height: 26px;
  text-align: center;
  color: #1b367c;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Price = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 800;
  font-size: 47px;
  line-height: 59px;
  text-align: center;
  color: #1b367c;
  margin-top: 20px;
`;

export const SubTitle = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
  color: #1b367c;
  opacity: 0.5;
`;

export const Additional = styled.div`
  width: 50%;
  margin: 24px 0 44px;

  & + & {
    margin-left: 26px;
  }
`;

export const AdditionalTitle = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: rgba(27, 54, 124, 0.5);
  border-radius: 7px;
  text-align: left;
`;

export const AdditionalContent = styled.div`
  width: 100%;
  height: 56px;
  background: #f8f8ff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 7px;
  margin-top: 12px;
  border: 2px solid #f8f8ff;

  &:hover {
    border: 2px solid #d6dbe9;
    background: #fff;
  }
`;

export const AdditionalValue = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 23px;
  color: #1b367c;
  border-radius: 7px;
`;

export const AdditionalButton = styled.div`
  position: absolute;
  width: 12px;
  height: 12px;
  top: 18px;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${props => (props.type === 'minus' ? 'left: 20px;' : 'right: 20px;')};
  color: #1b367c;
  cursor: pointer;
  user-select: none;

  &:hover {
    color: #3166ed;
  }
`;

export const Description = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #1b367c;
  opacity: 0.5;
  border-radius: 7px;
  margin-top: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CancelSubscription = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;
