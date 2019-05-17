import styled from 'styled-components';

const FontElement = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.width};
  font-size: ${props => props.size}px;
  font-family: ${props => props.family};
  font-weight: ${props => props.weight};
  line-height: normal;
`;

export default FontElement;
