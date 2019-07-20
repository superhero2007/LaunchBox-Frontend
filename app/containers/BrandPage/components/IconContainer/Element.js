import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ElementDownload from 'images/element-download.svg';
import ElementDownloadHover from 'images/element-download__hover.svg';
import InputDuplicate from 'images/input-duplicate.svg';
import InputDuplicateHover from 'images/input-duplicate__hover.svg';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 7px;
  overflow: hidden;

  &:hover {
    .button_group {
      display: flex;
    }
  }
`;

const Icon = styled.img`
  max-width: 80px;
  max-height: 80px;
`;

const DownloadButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;
  border: 2px solid #d6dbe9;
  border-radius: 7px;
  background: white;
  text-decoration: none;

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

const CopyButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;
  border: 2px solid #d6dbe9;
  border-radius: 7px;
  background: white;
  margin-left: 4px;

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
    margin-top: 8px;
  }
`;

class Element extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <Icon
          src={`${process.env.API_ENTRY_PREFIX}${this.props.value}`}
          alt="Icon Element"
        />
        <ButtonGroup className="button_group">
          <DownloadButton
            href={`${process.env.API_ENTRY_PREFIX}${this.props.value}`}
            download
          >
            <img className="origin" src={ElementDownload} alt="Input Edit" />
            <img
              className="hover"
              src={ElementDownloadHover}
              alt="Input Edit Hover"
            />
          </DownloadButton>
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
          </CopyButton>
        </ButtonGroup>
      </Wrapper>
    );
  }
}

Element.propTypes = {
  value: PropTypes.string,
};

export default Element;
