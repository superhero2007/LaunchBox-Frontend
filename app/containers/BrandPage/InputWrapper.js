import styled from 'styled-components';

const InputWrapper = styled.div`
  border: 2px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  padding: 10px 17px 11px;
  width: 328px;
  height: 56px;

  & + & {
    margin-left: 24px;
  }
`;

export default InputWrapper;
