/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Dropzone from 'react-dropzone';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ModalBody = styled.div`
  flex-direction: column;
  background: #f8f8f8;
  margin-bottom: 16px;
  width: 348px;
  height: 348px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #d6dbe9;
  border-radius: 7px;
`;

const ModalAction = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  font-family: Muli;
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: normal;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 7px;
`;

const DropzoneWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #1b367c;
`;

const DropzoneIcon = styled.div`
  width: 44px;
  height: 44px;
  margin-bottom: 23px;
  border: 2px solid #1b367c;
  border-radius: 7px;
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

const DropzoneSubtitle = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: normal;
  text-align: center;
  margin-top: 6px;

  span {
    color: #1b367c;
    cursor: pointer;
  }
`;

const DropzoneDescription = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: normal;
  text-align: center;
  color: rgba(27, 54, 114, 0.3);
  margin-top: 24px;
`;

const IconContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 12px 16px;
  background: #f8f8f8;
  width: 100%;
  height: 100%;
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 12px 12px;
  background: #fff;
`;

const Icon = styled.img`
  max-width: 80px;
  max-height: 80px;
`;

const AddButton = styled(Button)`
  border: 2px solid #1b367c;
  background: #1b367c;
  color: #fff;
  margin-left: 1rem;

  &:hover {
    color: #1b367c;
    background: #fff;
  }
`;

const CancelButton = styled(Button)`
  border: 2px solid #ececf6;
  color: #1b367c;

  &:hover {
    color: #fff;
    border: 0;
    background: #1b367c;
  }
`;

class ModalDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      files: [],
    };
  }

  handleClickAdd = () => {
    this.props.onAdd({
      value: this.state.value,
    });
  };

  onDrop = files => {
    this.setState({ files: [] });

    files.map(file => {
      const reader = new FileReader();
      reader.onload = () => {
        const fileAsBinaryString = reader.result;
        this.setState(state => {
          const oldFiles = state.files;
          oldFiles.push(fileAsBinaryString);
          return {
            files: oldFiles,
          };
        });
      };
      reader.readAsDataURL(file);
      return 0;
    });
    this.setState({ value: files });
  };

  fileList = files =>
    files.map((file, index) => (
      <IconWrapper key={`file ${index}`}>
        <Icon src={file} alt="Uploaded File" />
      </IconWrapper>
    ));

  render() {
    return (
      <Wrapper>
        <ModalBody>
          {this.state.value ? (
            <IconContent>{this.fileList(this.state.files)}</IconContent>
          ) : (
            <Dropzone onDrop={this.onDrop}>
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <DropzoneWrapper>
                    <DropzoneIcon>
                      <i className="fas fa-arrow-up" />
                    </DropzoneIcon>
                    <DropzoneTitle>
                      Drag & Drop to upload your icons
                    </DropzoneTitle>
                    <DropzoneSubtitle>
                      or <span>browse</span> to choose a files
                    </DropzoneSubtitle>
                    <DropzoneDescription>
                      (only png, min 800x800px, max 10MB)
                    </DropzoneDescription>
                  </DropzoneWrapper>
                </div>
              )}
            </Dropzone>
          )}
        </ModalBody>
        <ModalAction>
          <CancelButton onClick={this.props.onClose}>Cancel</CancelButton>
          {this.state.value && (
            <AddButton onClick={this.handleClickAdd}>Add</AddButton>
          )}
        </ModalAction>
      </Wrapper>
    );
  }
}

ModalDialog.propTypes = {
  onAdd: PropTypes.func,
  onClose: PropTypes.func,
};

export default ModalDialog;
