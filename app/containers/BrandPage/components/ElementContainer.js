import styled from 'styled-components';

const ElementContainer = styled.div`
  margin-top: ${props => props.top}px;
  margin-bottom: ${props => props.bottom}px;
  display: flex;
  flex-wrap: wrap;
`;

export default ElementContainer;
