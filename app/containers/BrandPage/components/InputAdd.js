import styled from 'styled-components';

const InputAdd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${props => props.width}px;
  height: ${props => props.height}px;

  border: 2px solid #1b367c;

  font-size: ${props => props.size}px;
  font-family: Muli;
  font-style: normal;
  font-weight: ${props => props.weight};
  line-height: normal;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #1b367c;
  border-radius: 7px;

  cursor: pointer;

  .hover {
    display: none;
  }

  img {
    width: ${props => props.imgWidth}px;
  }

  &:hover {
    background: #1b367c;
    color: white;
    border: 0;

    .origin {
      display: none;
    }

    .hover {
      display: inline;
    }
  }
`;

export default InputAdd;
