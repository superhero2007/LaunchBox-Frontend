/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Dropzone from 'react-dropzone';
import Right from 'images/right.svg';
import RightDisable from 'images/right__disable.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 800;
  font-size: 21px;
  line-height: 26px;
  letter-spacing: -0.03em;
  color: #0d2665;
`;

const SubTitle = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
  color: #1b367c;
  margin-top: 12px;
  margin-bottom: 22px;
`;

const Button = styled.button`
  width: 164px;
  height: 48px;
  background: #1877f2;
  border-radius: 7px;
  font-family: Muli;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #fff;
  margin-top: 32px;

  img {
    margin-left: 10px;
  }

  .disable {
    display: none;
  }

  &:disabled {
    background: #d2e5fd;
    color: #93b4de;
    .origin {
      display: none;
    }
    .disable {
      display: inline;
    }
  }
`;

const DropzoneContainer = styled.div`
  flex-direction: column;
  background: #f8f8f8;
  width: 348px;
  height: 348px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #d6dbe9;
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

const DropzoneImage = styled.img`
  max-width: 348px;
  max-height: 348px;
`;

class LogoType extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value.logo || '',
      file: '',
    };
  }

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

  onNext = () => {
    const { onNext } = this.props;
    const { value } = this.state;
    onNext({ logo: value });
  };

  render() {
    const { value, file } = this.state;
    return (
      <Wrapper>
        <Title>Upload your logo</Title>
        <SubTitle>Upload the main logo of your brand</SubTitle>
        <DropzoneContainer>
          <Dropzone onDrop={this.onDrop}>
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                {value ? (
                  <DropzoneWrapper>
                    <DropzoneImage src={file} alt="Uploaded File" />
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
        </DropzoneContainer>
        <Button onClick={this.onNext} disabled={!value}>
          Next
          <img src={Right} alt="Right" className="origin" />
          <img src={RightDisable} alt="Right Disable" className="disable" />
        </Button>
      </Wrapper>
    );
  }
}

LogoType.propTypes = {
  onNext: PropTypes.func,
  value: PropTypes.object,
};

export default LogoType;
