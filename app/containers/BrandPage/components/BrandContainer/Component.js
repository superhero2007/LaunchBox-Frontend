import styled from 'styled-components';

export const RightArrowWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 7px;
  height: 13px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ItemClose = styled.div`
  opacity: 0.2;
  width: 10%;

  img {
    height: 10px;
    width: 10px;
  }

  &:hover {
    opacity: 1;
  }
`;

export const ModalItem = styled.div`
  border: 1px solid #d6dbe9;
  padding: 22px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
  color: #1b367c;
  position: relative;

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
