import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ElementDownload from '../../../../images/element-download.svg';
import ElementDownloadHover from '../../../../images/element-download__hover.svg';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 20px;
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
  font-size: 21px;
  line-height: 26px;
  color: #465347;
  font-weight: 900;
  margin-bottom: 2px;
`;

const FontRow = styled.div`
  display: flex;
  margin-top: 10px;
`;

const FontElement = styled.div`
  width: 50%;
  font-size: ${props => props.size}px;
  font-family: ${props => props.family};
  font-weight: ${props => props.weight};
  line-height: normal;
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
`;

class Element extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <div>
          <FontTitle font={this.props.value}>{this.props.value}</FontTitle>
          <FontRow>
            <FontElement size={13} family={this.props.value} weight={100}>
              Ultra Light
            </FontElement>
            <FontElement
              size={13}
              family={this.props.value}
              weight={100}
              italic
            >
              Ultra Light Italic
            </FontElement>
          </FontRow>
          <FontRow>
            <FontElement size={13} family={this.props.value} weight={200}>
              Thin
            </FontElement>
            <FontElement
              size={13}
              family={this.props.value}
              weight={200}
              italic
            >
              Thin Italic
            </FontElement>
          </FontRow>
          <FontRow>
            <FontElement size={13} family={this.props.value} weight={300}>
              Light
            </FontElement>
            <FontElement
              size={13}
              family={this.props.value}
              weight={300}
              italic
            >
              Light Italic
            </FontElement>
          </FontRow>
          <FontRow>
            <FontElement size={13} family={this.props.value} weight={400}>
              Regular
            </FontElement>
            <FontElement
              size={13}
              family={this.props.value}
              weight={400}
              italic
            >
              Italic
            </FontElement>
          </FontRow>
          <FontRow>
            <FontElement size={13} family={this.props.value} weight={600}>
              Medium
            </FontElement>
            <FontElement
              size={13}
              family={this.props.value}
              weight={600}
              italic
            >
              Medium Italic
            </FontElement>
          </FontRow>
          <FontRow>
            <FontElement size={13} family={this.props.value} weight={900}>
              Bold
            </FontElement>
            <FontElement
              size={13}
              family={this.props.value}
              weight={900}
              italic
            >
              Bold Italic
            </FontElement>
          </FontRow>
        </div>
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
