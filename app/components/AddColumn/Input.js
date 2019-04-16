import styled from 'styled-components';

const Input = styled.input`
  padding: 9px ${props => props.paddingLeft}px 7px;
  width: 100%;
  text-align: ${props => props.align};
  border: 1px solid rgba(152, 178, 246, 0.2);
  height: 35px;

  &:focus {
    color: #3166ed;
  }

  &::placeholder {
    text-transform: capitalize;
  }
`;

export default Input;
