import styled from 'styled-components';

const Th = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 900;
  font-size: 13px;
  line-height: normal;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  justify-content: ${props =>
    props.align === 'right' ? 'flex-end' : props.align};
  width: ${props => props.width};
  height: 19px;
  display: flex;
  align-items: center;
  padding: 0 4px;

  &:hover {
    color: #1b367c;
  }
`;

export default Th;
