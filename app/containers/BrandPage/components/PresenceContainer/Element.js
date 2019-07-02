import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ElementLink from 'images/link.svg';
import InputDuplicate from 'images/input-duplicate.svg';
import ElementLinkHover from 'images/link__hover.svg';
import InputDuplicateHover from 'images/input-duplicate__hover.svg';
import facebook from 'images/facebook.svg';
import twitter from 'images/twitter.svg';
import instagram from 'images/instagram.svg';
import youtube from 'images/play.svg';

const Wrapper = styled.div`
  height: 48px;
  background: ${props => props.color};
  font-family: Muli;
  font-style: normal;
  font-weight: 800;
  font-size: 13px;
  line-height: normal;
  text-align: center;
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

const LinkButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border: 2px solid #d6dbe9;
  background: white;

  .hover {
    display: none;
  }

  &:hover {
    background: #1b367c;

    .origin {
      display: none;
    }

    .hover {
      display: inline;
    }
  }
`;

const DuplicateButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border: 2px solid #d6dbe9;
  background: white;

  .hover {
    display: none;
  }

  &:hover {
    background: #1b367c;

    .origin {
      display: none;
    }

    .hover {
      display: inline;
    }
  }
`;

const ButtonGroup = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(10, 19, 41, 0.85);
  display: none;
  align-items: center;
  justify-content: center;

  div + div {
    margin-left: 8px;
  }
`;

class Element extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          id: 1,
          img: <img src={facebook} alt="Facebook" />,
          color: '#3B5998',
        },
        {
          id: 2,
          img: <img src={twitter} alt="Twitter" />,
          color: '#1CA1F1',
        },
        {
          id: 3,
          img: <img src={instagram} alt="Instagram" />,
          color: '#E1306C',
        },
        {
          id: 4,
          img: <img src={youtube} alt="Youtube" />,
          color: '#F61C0D',
        },
        {
          id: 5,
          img: null,
          color: '#1CA1F2',
        },
        {
          id: 6,
          img: <span>{'</>'}</span>,
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
        <ButtonGroup className="button_group">
          <DuplicateButton onClick={this.props.onDuplicate}>
            <img
              className="origin"
              src={InputDuplicate}
              alt="Input Duplicate"
            />
            <img
              className="hover"
              src={InputDuplicateHover}
              alt="Input Duplicate Hover"
            />
          </DuplicateButton>
          <LinkButton onClick={this.props.onDuplicate}>
            <img className="origin" src={ElementLink} alt="Input Edit" />
            <img
              className="hover"
              src={ElementLinkHover}
              alt="Input Edit Hover"
            />
          </LinkButton>
        </ButtonGroup>
      </Wrapper>
    );
  }
}

Element.propTypes = {
  type: PropTypes.number,
  value: PropTypes.string,
  onDuplicate: PropTypes.func,
};

export default Element;
