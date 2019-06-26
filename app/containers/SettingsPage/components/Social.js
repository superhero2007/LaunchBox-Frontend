import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100%;
  height: 48px;
  background: #fff;
  border: 2px solid #dfe8ff;
  border-radius: 7px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;

  font-family: Muli;
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

const AddButton = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #3166ed;

  &:hover {
    background: #3166ed;
    border-color: #3166ed;
    color: #fff;
    border: 0;
  }
`;

class Social extends React.PureComponent {
  render() {
    const { type, link, enabled } = this.props;
    return (
      <Wrapper>
        <AddButton to={enabled ? link : '/settings'}>
          <span>{type}</span>
        </AddButton>
      </Wrapper>
    );
  }
}

Social.propTypes = {
  type: PropTypes.string,
  link: PropTypes.string,
  enabled: PropTypes.bool,
};

export default Social;
