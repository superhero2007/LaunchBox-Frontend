import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  width: 100%;

  & + & {
    margin-top: 46px;
  }
`;

export default Row;
