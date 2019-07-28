import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ElementDownload from 'images/element-download.svg';
import ElementDownloadHover from 'images/element-download__hover.svg';
import InputDuplicate from 'images/input-duplicate.svg';
import InputDuplicateHover from 'images/input-duplicate__hover.svg';
import Logo from '../Logo';

const Wrapper = styled.div`
  position: relative;
  border-radius: 7px;
  overflow: hidden;

  &:hover {
    .button_group {
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

const CopyButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 120px;
  height: 32px;
  border: 2px solid #d6dbe9;
  border-radius: 7px;
  background: white;
  color: #1b367c;
  margin-top: 8px;

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

class Element extends React.PureComponent {
  render() {
    const { value } = this.props;
    return (
      <Wrapper>
        <Logo
          src={`${process.env.API_ENTRY_PREFIX}${value}`}
          alt="Logo Element"
        />
        <ButtonGroup className="button_group">
          <DownloadButton
            href={`${process.env.API_ENTRY_PREFIX}${value}`}
            download
          >
            <img className="origin" src={ElementDownload} alt="Input Edit" />
            <img
              className="hover"
              src={ElementDownloadHover}
              alt="Input Edit Hover"
            />
            <span>Download</span>
          </DownloadButton>
          <CopyToClipboard text={`${process.env.API_ENTRY_PREFIX}${value}`}>
            <CopyButton>
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
              <span>Copy Link</span>
            </CopyButton>
          </CopyToClipboard>
        </ButtonGroup>
      </Wrapper>
    );
  }
}

Element.propTypes = {
  value: PropTypes.string,
};

export default Element;
