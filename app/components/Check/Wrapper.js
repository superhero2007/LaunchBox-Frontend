import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 9px 12px 7px;

  .hover {
    display: none;
  }

  &:hover {
    color: #1b367c;

    .origin {
      display: none;
    }

    .hover {
      display: flex;
    }
  }
`;

export default Wrapper;
