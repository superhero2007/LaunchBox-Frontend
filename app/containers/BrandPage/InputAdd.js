import styled from 'styled-components';

const InputAdd = styled.button`
  border: 2px solid #3166ed;
  box-sizing: border-box;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  margin-left: 24px;
  font-family: Muli;
  font-style: normal;
  font-weight: ${props => props.weight};
  line-height: normal;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #3166ed;
  cursor: pointer;
  font-size: ${props => props.size}px;

  &:hover {
    background: #3166ed;
    color: white;
  }
`;

export default InputAdd;
