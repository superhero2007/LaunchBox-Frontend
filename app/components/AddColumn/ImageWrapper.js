import styled from 'styled-components';

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 27px;
  background: ${props => props.color};

  & + & {
    margin-left: 2px;
  }

  &:hover,
  &.active {
    background: ${props => props.hover};

    img {
      filter: brightness(0) invert(1);
    }
  }
`;

export default ImageWrapper;
