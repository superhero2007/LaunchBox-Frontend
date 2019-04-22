import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Empty = styled.div`
  width: 80px;
  height: 80px;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 20px;
  background: transparent;

  & + div {
    margin-left: 16px;
  }
`;

const Wrapper = styled(Empty)`
  color: ${props => props.color};
  background: #fff;
  position: relative;

  &:hover {
    cursor: pointer;

    .icon__closer {
      display: flex;
    }
  }
`;

const IconCloser = styled.div`
  position: absolute;
  right: -10px;
  top: -5px;
  width: 15px;
  height: 15px;
  font-size: 10px;
  background: #f14040;
  color: #fff;
  cursor: pointer;
  border-radius: 50%;
  display: none;
  justify-content: center;
  align-items: center;
`;

const IconElement = props =>
  props.className ? (
    <Wrapper color={props.color}>
      <IconCloser className="icon__closer">
        <i className="fas fa-times" />
      </IconCloser>
      <i className={props.className} />
    </Wrapper>
  ) : (
    <Empty />
  );

IconElement.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};

export default IconElement;
