import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Employees from '../../images/Employees.svg';
import Contractors from '../../images/Contractors.svg';
import Subscriptions from '../../images/Subscriptions.svg';
import Business from '../../images/Business.svg';
import Recurring from '../../images/Recurring.svg';
import Project from '../../images/Project.svg';
import Vat from '../../images/Vat.svg';

const DialogWrapper = styled.div`
  padding-top: 84px;
  width: 100%;
  height: calc(100% - 84px);
  background: rgba(76, 76, 97, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 6;
`;

const DialogModalWrapper = styled.div`
  background: #fff;
  padding: 40px 36px;
  width: 100%;
  height: 100%;
  position: relative;
`;

const ModalHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
  cursor: pointer;
`;

const ModalText = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 800;
  font-size: 27px;
  line-height: 34px;
  color: #58454b;
  margin-left: 20px;

  &:hover {
    color: #6c4853;
  }
`;

const Icon = styled.i`
  cursor: pointer;
  color: #58454b;
  &:hover {
    color: #6c4853;
  }
`;

const ModalBody = styled.div`
  margin: 40px 0;
`;

const ModalBodyText = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 900;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: rgba(88, 69, 75, 0.5);
  margin-bottom: 12px;
`;

const ModalItemList = styled.div`
  display: flex;
`;

const ModalItem = styled.div`
  width: 208px;
  height: 208px;
  border: 2px solid rgba(0, 0, 0, 0.2);
  position: relative;
  cursor: pointer;
  color: #58454b;
  &:hover {
    color: #6c4853;
  }

  & + & {
    margin-left: 22px;
  }
`;

const ModalItemImage = styled.div`
  position: absolute;
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ModalItemText = styled.div`
  position: absolute;
  top: 160px;
  width: 100%;
  text-align: center;
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
`;

const ModalDialog = props => (
  <DialogWrapper>
    <DialogModalWrapper>
      <ModalHeader onClick={props.onClose}>
        <Icon className="fas fa-arrow-left" />
        <ModalText>
          <span>Add New Category</span>
        </ModalText>
      </ModalHeader>
      <ModalBody>
        <ModalBodyText>EXPENSES</ModalBodyText>
        <ModalItemList>
          <ModalItem onClick={() => props.onSelect('Employeees')}>
            <ModalItemImage>
              <img src={Employees} alt="Employees" />
            </ModalItemImage>
            <ModalItemText>Employeees</ModalItemText>
          </ModalItem>
          <ModalItem onClick={() => props.onSelect('Contractors')}>
            <ModalItemImage>
              <img src={Contractors} alt="Contractors" />
            </ModalItemImage>
            <ModalItemText>Contractors</ModalItemText>
          </ModalItem>
          <ModalItem onClick={() => props.onSelect('Subscriptions')}>
            <ModalItemImage>
              <img src={Subscriptions} alt="Subscriptions" />
            </ModalItemImage>
            <ModalItemText>Subscriptions</ModalItemText>
          </ModalItem>
          <ModalItem onClick={() => props.onSelect('Business Development')}>
            <ModalItemImage>
              <img src={Business} alt="Business" />
            </ModalItemImage>
            <ModalItemText>Business Development</ModalItemText>
          </ModalItem>
        </ModalItemList>
      </ModalBody>
      <ModalBody>
        <ModalBodyText>Income</ModalBodyText>
        <ModalItemList>
          <ModalItem onClick={() => props.onSelect('Recurring Payments')}>
            <ModalItemImage>
              <img src={Recurring} alt="Recurring" />
            </ModalItemImage>
            <ModalItemText>Recurring Payments</ModalItemText>
          </ModalItem>
          <ModalItem onClick={() => props.onSelect('Project Based')}>
            <ModalItemImage>
              <img src={Project} alt="Project" />
            </ModalItemImage>
            <ModalItemText>Project Based</ModalItemText>
          </ModalItem>
        </ModalItemList>
      </ModalBody>
      <ModalBody>
        <ModalBodyText>Automated categories</ModalBodyText>
        <ModalItemList>
          <ModalItem onClick={() => props.onSelect('VAT')}>
            <ModalItemImage>
              <img src={Vat} alt="Vat" />
            </ModalItemImage>
            <ModalItemText>VAT</ModalItemText>
          </ModalItem>
        </ModalItemList>
      </ModalBody>
    </DialogModalWrapper>
  </DialogWrapper>
);

ModalDialog.propTypes = {
  onClose: PropTypes.func,
  onSelect: PropTypes.func,
};

export default ModalDialog;
