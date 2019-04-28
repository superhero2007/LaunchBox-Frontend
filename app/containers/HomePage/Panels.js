import styled from 'styled-components';

const Panels = styled.div`
  display: flex;
  transition: opacity 0.3s;
  width: 100%;
  overflow: hidden;
  position: absolute;
  top: 100px;
  bottom: 0;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
    .panel {
      opacity: 0.4;
    }
  }
`;

export default Panels;
