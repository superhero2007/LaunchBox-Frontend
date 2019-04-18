import styled from 'styled-components';

const IconElement = styled.i`
  width: 80px;
  height: 80px;
  align-items: center;
  justify-content: center;
  display: flex;
  color: ${props => props.color};
  font-size: 20px;

  & + & {
    margin-left: 16px;
  }
`;

export default IconElement;
