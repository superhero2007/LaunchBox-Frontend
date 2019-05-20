import styled from 'styled-components';

const ElementWrapper = styled.div`
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 20px;
  width: 45%;
  position: relative;

  &:hover {
    .element_delete {
      display: flex;
    }
  }
`;

export default ElementWrapper;
