import styled from 'styled-components';

const Title = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 800;
  font-size: 27px;
  line-height: normal;
  color: #58454b;
  position: relative;
  cursor: pointer;

  &::before {
    content: '';
    left: -20px;
    top: 13px;
    position: absolute;
    border: 5px solid transparent;
    border-top-color: ${props => (props.opened ? '#58454b' : 'transparent')};
    border-left-color: ${props => (props.opened ? 'transparent' : '#58454b')};
  }
`;

export default Title;
