import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import facebook from 'images/facebook.svg';
import twitter from 'images/twitter.svg';
import instagram from 'images/instagram.svg';
import youtube from 'images/play.svg';
import linkedin from 'images/linkedin.svg';
import linkicon from 'images/link-icon.svg';

const Wrapper = styled.div`
  height: 48px;
  background: ${props => props.color};
  font-family: Muli;
  font-style: normal;
  font-weight: 800;
  font-size: 17px;
  line-height: 21px;
  text-align: center;
  color: #fff;
  color: #ffffff;
  padding: 15px;
  cursor: pointer;
  position: relative;
  border-radius: 7px;
  overflow: hidden;

  span + span {
    margin-left: 12px;
  }

  &:hover {
    .button_group {
      display: flex;
    }
  }
`;

class Element extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          id: 1,
          link: 'https://www.facebook.com',
          img: <img src={facebook} alt="Facebook" />,
          color: '#3B5998',
        },
        {
          id: 2,
          link: 'https://www.twitter.com',
          img: <img src={twitter} alt="Twitter" />,
          color: '#1CA1F1',
        },
        {
          id: 3,
          link: 'https://www.instagram.com',
          img: <img src={instagram} alt="Instagram" />,
          color: '#E1306C',
        },
        {
          id: 4,
          link: 'https://www.youtube.com',
          img: <img src={youtube} alt="Youtube" />,
          color: '#F61C0D',
        },
        {
          id: 5,
          link: 'https://www.linkedin.com',
          img: <img src={linkedin} alt="Youtube" />,
          color: '#1CA1F2',
        },
        {
          id: 6,
          link: 'http://ketchupcreative.com',
          img: <img src={linkicon} alt="Youtube" />,
          color: '#3166ED',
        },
      ],
    };
  }

  render() {
    const value = this.state.list.find(
      element => element.id === this.props.type,
    );
    const color = value ? value.color : '#3B5998';
    const icon = value ? value.img : '';

    return (
      <Wrapper color={color}>
        {icon && <span>{icon}</span>}
        <span>{this.props.value}</span>
      </Wrapper>
    );
  }
}

Element.propTypes = {
  type: PropTypes.number,
  value: PropTypes.string,
};

export default Element;
