import styled from 'styled-components';

const Tr = styled.div`
  padding: 10px ${props => props.paddingLeft}px 12px;
  display: flex;
  color: #58454b;

  &:hover {
    color: #3166ed;
  }
`;

export default Tr;
