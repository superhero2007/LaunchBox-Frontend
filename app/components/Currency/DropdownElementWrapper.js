import styled from 'styled-components';

const DropdownElementWrapper = styled.div`
  width: 232px;
  height: 183px;
  padding-top: 4px;
  overflow: scroll;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(108, 72, 83, 0.3);
    border-radius: 24px;
  }
`;

export default DropdownElementWrapper;
