/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Dropzone from 'react-dropzone';

import Remove from 'images/remove.svg';
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
  min-height: 348px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #d6dbe9;
  border-radius: 7px;
  padding: 16px;
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

const DropzoneList = styled.div`
  width: 100%;
  height: 100%;
`;

const DropzoneItem = styled.div`
  background: #fff;
  border-radius: 7px;
  padding: 12px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 16px;
  }
`;

const DropzoneItemValue = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 23px;
  color: #1b367c;
`;

const DropzoneItemIcon = styled.img`
  width: 12px;
  height: 12px;
`;

class Fonts extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value.fonts || [],
    };
  }

  onDrop = files => {
    this.setState({ value: files });
  };

  onDelete = index => {
    const { value } = this.state;
    value.splice(index, 1);
    this.setState({ value: value.slice(0) });
  };

  onNext = () => {
    const { onNext } = this.props;
    const { value } = this.state;
    onNext({ fonts: value });
  };

  render() {
    const { value } = this.state;
    return (
      <Wrapper>
        <Title>Add brand fonts</Title>
        <SubTitle>Upload the fonts that are used in your brand</SubTitle>
        <DropzoneContainer>
          {value.length ? (
            <DropzoneList>
              {value.map((element, index) => (
                <DropzoneItem key={element.name}>
                  <DropzoneItemValue>{element.name}</DropzoneItemValue>
                  <DropzoneItemIcon
                    src={Remove}
                    alt="Delete"
                    onClick={() => this.onDelete(index)}
                  />
                </DropzoneItem>
              ))}
            </DropzoneList>
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
                      Drag & Drop to upload your fonts
                    </DropzoneTitle>
                    <DropzoneSubtitle>
                      or <span>browse</span> to choose a files
                    </DropzoneSubtitle>
                    <DropzoneDescription>
                      (only .otf and .ttf file formats are supported)
                    </DropzoneDescription>
                  </DropzoneWrapper>
                </div>
              )}
            </Dropzone>
          )}
        </DropzoneContainer>
        <Button onClick={this.onNext} disabled={!value.length}>
          Next
          <img src={Right} alt="Right" className="origin" />
          <img src={RightDisable} alt="Right Disable" className="disable" />
        </Button>
      </Wrapper>
    );
  }
}

Fonts.propTypes = {
  onNext: PropTypes.func,
  value: PropTypes.object,
};

export default Fonts;
