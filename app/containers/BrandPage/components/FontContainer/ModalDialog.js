import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Dropzone from 'react-dropzone';
import Remove from 'images/remove.svg';

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

const DropzoneList = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px;
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

class ModalDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
    };
  }

  handleClickAdd = () => {
    this.props.onAdd({
      value: this.state.value,
    });
  };

  onDrop = files => {
    this.setState({ value: files });
  };

  onDelete = index => {
    const { value } = this.state;
    value.splice(index, 1);
    this.setState({ value: value.slice(0) });
  };

  render() {
    const { value } = this.state;
    return (
      <Wrapper>
        <ModalBody>
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
