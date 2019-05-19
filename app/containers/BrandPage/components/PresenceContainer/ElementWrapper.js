import styled from 'styled-components';

const ElementWrapper = styled.div`
  margin-left: 12px;
  margin-right: 12px;
  margin-bottom: 12px;
  position: relative;

  &:hover {
    .element_delete {
      display: flex;
    }
  }
`;

export default ElementWrapper;
