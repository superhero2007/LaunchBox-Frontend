import styled from 'styled-components';

const Tf = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 800;
  font-size: 15px;
  line-height: normal;
  text-transform: uppercase;
  justify-content: ${props =>
    props.align === 'right' ? 'flex-end' : props.align};
  width: ${props => props.width};
  color: #58454b;
  height: 19px;
  display: flex;
  align-items: center;
  padding: 0 4px;
`;

export default Tf;
