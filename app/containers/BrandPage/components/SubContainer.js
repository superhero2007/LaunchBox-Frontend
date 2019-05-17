import styled from 'styled-components';
import ElementContainer from './ElementContainer';

const SubContainer = styled(ElementContainer)`
  width: ${props => props.width}%;
  flex-direction: column;
`;

export default SubContainer;
