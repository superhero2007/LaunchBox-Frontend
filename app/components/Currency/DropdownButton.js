import styled from 'styled-components';

const DropdownButton = styled.div`
  cursor: pointer;
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 84px;
  position: relative;

  &::after {
    content: '';
    right: 17px;
    top: ${props => (props.opened ? '40px' : '35px')};
    position: absolute;
    border: 5px solid transparent;
    border-top-color: ${props => (props.opened ? '#58454b' : 'transparent')};
    border-bottom-color: ${props => (props.opened ? 'transparent' : '#58454b')};
  }
`;

export default DropdownButton;
