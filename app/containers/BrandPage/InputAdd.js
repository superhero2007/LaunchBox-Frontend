import styled from 'styled-components';

const InputAdd = styled.button`
  padding-top: 0;
  border: 2px solid #1b367c;
  box-sizing: border-box;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  margin-left: 16px;
  font-family: Muli;
  font-style: normal;
  font-weight: ${props => props.weight};
  line-height: normal;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #1b367c;
  cursor: pointer;
  font-size: ${props => props.size}px;

  &:hover {
    background: #1b367c;
    color: white;
  }
`;

export default InputAdd;
