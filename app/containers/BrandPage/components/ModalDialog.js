import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Dropzone from 'react-dropzone';
import IconElement from 'components/IconElement';

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
  ${props => (props.border ? 'border: 2px solid rgba(0, 0, 0, 0.2)' : '')};
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
  color: #6c4853;

  &:hover {
    color: #fff;
    background: #6c4853;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  & + & {
    margin-top: 16px;
  }
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

class ModalDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: props.type !== 'Font' && props.type !== 'Design',
      value: '',
    };
  }

  onDrop = files => {
    const file = files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const fileAsBinaryString = reader.result;
      this.setState({ files: fileAsBinaryString });
    };
    reader.readAsDataURL(file);
  };

  handleClickAdd = () => {
    if (this.props.type === 'Input') {
      this.props.onAdd({
        label: this.state.value,
        value: '',
      });
    }
  };

  render() {
    return (
      <Wrapper>
        {this.props.type === 'Icon' && (
          <ModalBody>
            <IconWrapper>
              <IconElement className="far fa-clock" color="black" />
              <IconElement className="far fa-calendar" color="black" />
              <IconElement className="fas fa-globe" color="black" />
            </IconWrapper>
            <IconWrapper>
              <IconElement className="fas fa-headset" color="black" />
              <IconElement className="far fa-heart" color="black" />
              <IconElement className="fas fa-home" color="black" />
            </IconWrapper>
            <IconWrapper>
              <IconElement className="far fa-image" color="black" />
              <IconElement />
              <IconElement />
            </IconWrapper>
          </ModalBody>
        )}
        {this.props.type === 'Design' && (
          <ModalBody border>
            <Dropzone onDrop={this.onDrop}>
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  {this.state.files ? (
                    <DropzoneWrapper>
                      <DropzoneImage
                        src={this.state.files}
                        alt="Uploaded File"
                      />
                    </DropzoneWrapper>
                  ) : (
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
                  )}
                </div>
              )}
            </Dropzone>
          </ModalBody>
        )}
        <ModalAction>
          <CancelButton onClick={this.props.onClose}>Cancel</CancelButton>
          {this.state.files && (
            <AddButton onClick={this.handleClickAdd}>Add</AddButton>
          )}
        </ModalAction>
      </Wrapper>
    );
  }
}

ModalDialog.propTypes = {
  type: PropTypes.string,
  onAdd: PropTypes.func,
  onClose: PropTypes.func,
};

export default ModalDialog;
