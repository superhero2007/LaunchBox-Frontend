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
  border: 2px solid rgba(0, 0, 0, 0.2);
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
  color: #3d2f3d;
`;

const DropzoneIcon = styled.div`
  width: 44px;
  height: 44px;
  margin-bottom: 23px;
  border: 2px solid #3d2f3d;
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
  color: rgba(61, 47, 61, 0.3);
  margin-top: 24px;
`;

const DropzoneImage = styled.img`
  max-width: 348px;
  max-height: 348px;
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
    background: #1b367c;
  }
`;

class ModalDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      file: '',
    };
  }

  handleClickAdd = () => {
    this.props.onAdd({
      value: this.state.value,
    });
  };

  onDrop = files => {
    const file = files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const fileAsBinaryString = reader.result;
      this.setState({ file: fileAsBinaryString });
    };
    reader.readAsDataURL(file);
    this.setState({ value: file });
  };

  render() {
    return (
      <Wrapper>
        <ModalBody>
          <Dropzone onDrop={this.onDrop}>
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                {this.state.value ? (
                  <DropzoneWrapper>
                    <DropzoneImage src={this.state.file} alt="Uploaded File" />
                  </DropzoneWrapper>
                ) : (
                  <DropzoneWrapper>
                    <DropzoneIcon>
                      <i className="fas fa-arrow-up" />
                    </DropzoneIcon>
                    <DropzoneTitle>
                      Drag & Drop to upload your logos
                    </DropzoneTitle>
                    <DropzoneSubtitle>
                      or <span>browse</span> to choose a files
                    </DropzoneSubtitle>
                    <DropzoneDescription>
                      (only png, min 800x800px, max 10MB)
                    </DropzoneDescription>
                  </DropzoneWrapper>
                )}
              </div>
            )}
          </Dropzone>
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
