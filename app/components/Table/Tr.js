import styled from 'styled-components';

const Tr = styled.div`
  padding: 10px ${props => props.paddingLeft}px 12px;
  display: flex;
  color: #58454b;

  &.table__tr:hover {
    color: #1b367c;
  }
`;

export default Tr;
