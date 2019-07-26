import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 800;
  font-size: 21px;
  line-height: 26px;
  letter-spacing: -0.03em;
  color: #0d2665;
`;

export const SubTitle = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
  color: #1b367c;
  margin-top: 12px;
  margin-bottom: 32px;
`;

export const Button = styled.button`
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
  margin-top: 34px;

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

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  margin-top: 8px;
  margin-left: -8px;
  margin-right: -8px;
  margin-bottom: -8px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
export const ElementCloser = styled.div`
  position: absolute;
  right: -10px;
  top: -5px;
  width: 15px;
  height: 15px;
  font-size: 10px;
  background: #ec6689;
  color: #fff;
  cursor: pointer;
  border-radius: 50%;
  display: none;
  justify-content: center;
  align-items: center;
`;
export const ElementWrapper = styled.div`
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 8px;
  width: 160px;
  height: 160px;
  position: relative;

  &:hover {
    .element_delete {
      display: flex;
    }
  }
`;
export const Element = styled.div`
  position: relative;
  background: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 7px;
  overflow: hidden;

  &:hover {
    .button_group {
      display: flex;
    }
  }
`;
export const InputAdd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${props => props.width}px;
  height: ${props => props.height}px;

  border: 2px solid #1b367c;

  font-size: ${props => props.size}px;
  font-family: Muli;
  font-style: normal;
  font-weight: ${props => props.weight};
  line-height: normal;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #1b367c;
  border-radius: 7px;

  cursor: pointer;

  .hover {
    display: none;
  }

  img {
    width: ${props => props.imgWidth}px;
  }

  &:hover {
    background: #1b367c;
    color: white;
    border: 0;

    .origin {
      display: none;
    }

    .hover {
      display: inline;
    }
  }
`;
