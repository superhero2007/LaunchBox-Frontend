import styled from 'styled-components';

const ElementWrapper = styled.div`
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 16px;
  width: 220px;
  max-width: 100%;
  position: relative;

  &:hover {
    .element_delete {
      display: flex;
    }
  }
`;

export default ElementWrapper;
