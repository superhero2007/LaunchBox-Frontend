import styled from 'styled-components';

const Hover = styled.span`
  font-family: Muli;
  font-style: normal;
  font-weight: 800;
  font-size: 12px;
  line-height: normal;
  text-align: center;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: #ffffff;
  height: 23px;
  align-items: center;
  justify-content: center;
  width: ${props => (props.value ? '66px' : '86px')};
  background: ${props => (props.value ? '#3166ed' : '#e37898')};
`;

export default Hover;
