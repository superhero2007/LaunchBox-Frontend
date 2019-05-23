/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  position: relative;
  border-radius: 7px;
  overflow: hidden;
  width: 224px;
  height: 224px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    .button_group {
      display: flex;
    }
  }
`;

const DropzoneContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const DropzoneWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #1b367c;
  width: 100%;
  height: 100%;
  border: ${props => (props.border ? '2px' : 0)} solid #d6dbe9;
  border-radius: 7px;

  &:hover {
    background: #1b367c;
    color: white;

    .dropzone-icon {
      border-color: white;
    }
  }
`;

const DropzoneIcon = styled.div`
  width: 44px;
  height: 44px;
  margin-bottom: 23px;
  border-radius: 7px;
  border: 2px solid #1b367c;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DropzoneTitle = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 800;
  font-size: 17px;
  line-height: normal;
  text-align: center;
`;

const DropzoneImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const UploadButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 40px;
  background: #fff;
  border-radius: 7px;
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
  color: #1b367c;

  &:hover {
    background: #1b367c;
    color: #fff;
  }
`;

const DeleteButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 40px;
  background: #e37898;
  border-radius: 7px;
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
  color: #fff;
  margin-top: 8px;

  &:hover {
    background: #fff;
    color: #e37898;
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

/* eslint-disable react/prefer-stateless-function */
class Photo extends React.PureComponent {
  onDrop = files => {
    this.props.onUploadPhoto(files[0]);
  };

  onDeletePhoto = e => {
    e.preventDefault();
    this.props.onDeletePhoto();
  };

  render() {
    return (
      <Wrapper>
        <Dropzone onDrop={this.onDrop}>
          {({ getRootProps, getInputProps }) => (
            <DropzoneContainer {...getRootProps()}>
              <input {...getInputProps()} />
              {this.props.value ? (
                <DropzoneWrapper>
                  <DropzoneImage
                    src={`${process.env.API_ENTRY_PREFIX}${this.props.value}`}
                    alt="Uploaded File"
                  />
                  <ButtonGroup className="button_group">
                    <UploadButton>Upload</UploadButton>
                    <DeleteButton onClick={this.onDeletePhoto}>
                      Delete
                    </DeleteButton>
                  </ButtonGroup>
                </DropzoneWrapper>
              ) : (
                <DropzoneWrapper border>
                  <DropzoneIcon className="dropzone-icon">
                    <i className="fas fa-arrow-up" />
                  </DropzoneIcon>
                  <DropzoneTitle>Upload photo</DropzoneTitle>
                </DropzoneWrapper>
              )}
            </DropzoneContainer>
          )}
        </Dropzone>
      </Wrapper>
    );
  }
}

Photo.propTypes = {
  value: PropTypes.string,
  onUploadPhoto: PropTypes.func,
  onDeletePhoto: PropTypes.func,
};

export default Photo;
