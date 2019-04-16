import styled from 'styled-components';

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #ffffff;
  min-width: 150px;
  z-index: 1;
  right: 0;
  padding: 10px 23px;

  .dropdown:hover & {
    display: block;
  }
`;

export default DropdownContent;
