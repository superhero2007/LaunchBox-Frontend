import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import rightArrow from 'images/right-arrow.svg';
import rightArrowHover from 'images/right-arrow__hover.svg';

const Wrapper = styled(Link)`
  width: 100%;
  height: 56px;
  background: #fff;
  position: relative;
  padding: 24px 18px;
  border-radius: 7px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 21px;
  color: #1b367c;
  cursor: pointer;
  text-decoration: none;

  .hover {
    display: none;
  }

  &:hover {
    background: #e37898;
    color: #fff;

    .hover {
      display: block;
    }
    .origin {
      display: none;
    }
  }
`;

class DeleteAccount extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
    };
  }

  render() {
    if (this.state.opened) {
      return <div />;
    }

    return (
      <Wrapper to="/delete-account">
        <div>Delete Account</div>
        <img className="origin" src={rightArrow} alt="Right Arrow" />
        <img className="hover" src={rightArrowHover} alt="Right Arrow Hover" />
      </Wrapper>
    );
  }
}

export default DeleteAccount;
