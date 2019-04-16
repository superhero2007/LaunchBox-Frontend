import styled from 'styled-components';

const Td = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: normal;
  text-align: ${props => props.align};
  width: ${props => props.width};
  height: 35px;
  padding: 0 4px;
  position: relative;
`;

export default Td;
