import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ElementDownload from 'images/element-download.svg';
import ElementDownloadHover from 'images/element-download__hover.svg';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 12px 18px;
  border-radius: 7px;
  overflow: hidden;

  &:hover {
    .button_group {
      border: 0;
      display: flex;
    }
  }
`;

const DownloadButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 120px;
  height: 32px;
  border: 2px solid #d6dbe9;
  border-radius: 7px;
  background: white;
  text-decoration: none;
  color: #1b367c;

  span {
    font-family: Muli;
    font-style: normal;
    font-weight: 800;
    font-size: 13px;
    line-height: 16px;
    margin-left: 12px;
  }

  .hover {
    display: none;
  }

  &:hover {
    border: 0;
    background: #1b367c;
    color: #fff;

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
  flex-direction: column;

  div + div {
    margin-top: 8px;
  }
`;

const FontTitle = styled.div`
  font-family: ${props => props.font};
  font-weight: 600;
  font-size: 15px;
  line-height: 23px;
  color: #1b367c;
  margin-bottom: 2px;
`;

class Element extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <FontTitle font={this.props.value}>{this.props.value}</FontTitle>
        <ButtonGroup className="button_group">
          <DownloadButton href="#" download>
            <img className="origin" src={ElementDownload} alt="Input Edit" />
            <img
              className="hover"
              src={ElementDownloadHover}
              alt="Input Edit Hover"
            />
            <span>Download</span>
          </DownloadButton>
        </ButtonGroup>
      </Wrapper>
    );
  }
}

Element.propTypes = {
  value: PropTypes.string,
};

export default Element;
