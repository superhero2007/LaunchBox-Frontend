import styled from 'styled-components';

const ButtonWrapper = styled.button`
  background: ${props => props.color};
  font-family: Muli;
  font-style: normal;
  font-weight: 800;
  font-size: 13px;
  line-height: normal;
  text-align: center;
  color: #ffffff;
  padding: 15px;
  cursor: pointer;
  position: relative;

  span + span {
    margin-left: 12px;
  }

  & + & {
    margin-left: 16px;
  }

  &:hover {
    .button__closer {
      display: flex;
    }
  }
`;

export default ButtonWrapper;
