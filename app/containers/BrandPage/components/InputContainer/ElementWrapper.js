import styled from 'styled-components';

const ElementWrapper = styled.div`
  & + & {
    margin-left: 24px;
  }
`;

export default ElementWrapper;
