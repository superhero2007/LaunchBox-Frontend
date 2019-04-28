import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled(Link)`
  position: relative;
  width: 20%;
  left: 0;
  top: 0;
  bottom: 0;
  text-decoration: none;
  transition: background-color 0.35s, color 0.35s, margin 0.45s, transform 0.5s;
  background: ${props => props.background};
  color: ${props => props.color};
  display: block;
  padding: 28px 38px 28px 24px;

  &:hover {
    opacity: 1 !important;
  }
`;

export default Wrapper;
