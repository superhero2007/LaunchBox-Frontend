/* eslint-disable no-useless-escape */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import reducer from 'containers/BrandPage/reducer';
import saga from 'containers/BrandPage/saga';

import {
  getBrands,
  createBrand,
  updateBrand,
  deleteBrand,
} from 'containers/BrandPage/actions';
import { makeSelectBrands } from 'containers/BrandPage/selectors';

import { makeSelectCompany } from 'services/api/selectors';

import Header from 'components/Header';
import ExitSetings from 'images/exit-settings.svg';
import RemoveAccount from 'images/remove.svg';

const FullScreen = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: #f8f8ff;
  padding-top: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const BackToSettings = styled(Link)`
  position: absolute;
  top: 140px;
  left: 26px;
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 3;
`;

const Content = styled.div`
  margin-top: 150px;
  width: 688px;
  max-width: 90%;
  padding: 40px;
  text-align: center;
  border-radius: 7px;
`;

const Back = styled.span`
  font-family: Muli;
  font-style: normal;
  font-weight: 800;
  font-size: 27px;
  line-height: 34px;
  color: #1b367c;
  margin-left: 20px;
`;

const ContentCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 54px;
`;

const ContentCountItem = styled.div`
  width: 120px;
`;

const Title = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 800;
  font-size: 27px;
  line-height: 34px;
  color: #1b367c;
`;

const SubTitle = styled.div`
  margin-top: 12px;
  font-family: Muli;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #1b367c;
`;

const Table = styled.div`
  margin-bottom: 44px;
  background: #fff;
  border: 2px solid rgba(66, 77, 107, 0.2);
  box-sizing: border-box;
  border-radius: 7px;
`;

const TableItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 21px 35px;

  &:not(:last-child) {
    border-bottom: 2px solid #d6dbe9;
  }
`;

const ItemName = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
  color: #1b367c;
  border-radius: 7px;
  width: 60%;
  text-align: left;
`;

const ItemRole = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 800;
  font-size: 12px;
  line-height: 15px;
  color: #1b367c;
  border-radius: 7px;
  opacity: 0.2;
  width: 15%;
  text-align: left;

  &.active:not(.disabled) {
    opacity: 1;
  }

  &:not(.disabled):hover {
    color: #3166ed;
    opacity: 1;
  }
`;

const ItemClose = styled.div`
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

const ModalWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(10, 19, 41, 0.68);
  z-index: 6;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ModalContent = styled.div`
  background: #fff;
  border-radius: 7px;
  padding: 36px 40px;
  width: 424px;
`;

const ModalTitle = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 800;
  font-size: 17px;
  line-height: 21px;
  text-align: center;
  color: #1b367c;
`;

const ModalInput = styled.input`
  margin-top: 28px;
  width: 344px;
  height: 56px;
  border: 2px solid rgba(66, 77, 107, 0.2);
  border-radius: 7px;
  padding: 16px 18px;
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
  color: #1b367c;

  &::placeholder {
    color: rgba(66, 77, 107, 0.5);
  }
`;

const ModalDescription = styled.div`
  margin-top: 28px;
  font-family: Muli;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 19px;
  color: #1b367c;
  padding: 0 40px;

  span {
    color: #3166ed;
  }
`;

const ModalAction = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ModalCancel = styled.button`
  width: 164px;
  height: 40px;
  border: 2px solid #d6dbd9;
  border-radius: 7px;
  font-family: Muli;
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #1b367c;
  background: #fff;
  border-radius: 7px;

  &:hover {
    background: #1b367c;
    border: 0;
    color: #fff;
  }
`;

const ModalConfirm = styled.button`
  width: 164px;
  height: 40px;
  background: #ec6689;
  border-radius: 7px;

  font-family: Muli;
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #fff;

  &:hover {
    background: #fff;
    color: #ec6689;
    border: 1px solid #ec6689;
  }
`;

const AddButton = styled.button`
  width: 164px;
  height: 40px;
  background: #1b367c;
  border-radius: 7px;
  font-family: Muli;
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #fff;
  border-radius: 7px;

  &:hover:not(:disabled) {
    color: #1b367c;
    border: 2px solid #1b367c;
    background: #fff;
  }

  &:disabled {
    opacity: 0.2;
  }
`;

class EditBrands extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      type: null,
      selected: null,
    };
  }

  componentDidMount() {
    this.props.onLoadBrands();
  }

  handleDeleteBrand = selected => {
    this.setState({
      selected,
      type: 'Delete',
    });
  };

  handleBrand = (selected, type) => {
    this.setState({
      selected,
      type,
    });
  };

  handleClose = () => {
    this.setState({
      type: null,
    });
  };

  handleClick = () => {
    this.setState({
      type: 'Add',
    });
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleConfirm = () => {
    const { type, selected, value } = this.state;
    if (type === 'Add') {
      this.props.onCreateBrand({ value });
    } else if (type === 'Delete') {
      this.props.onDeleteBrand(selected._id);
    } else {
      this.props.onUpdateBrand({ role: type, _id: selected._id });
    }
    this.setState({
      value: '',
      type: null,
      selected: null,
    });
  };

  render() {
    const { company, brands } = this.props;
    const totalLength = company.subscription.brands + 1;
    const brandsLength = brands.length;
    const publicLength = brands.filter(brand => brand.role === 'Public').length;
    const privateLength = brandsLength - publicLength;
    const availableLength = totalLength - brandsLength;

    const addDisabled = totalLength <= brandsLength;

    const brandList = brands.map(brand => (
      <TableItem key={brand.value}>
        <ItemName>{brand.value}</ItemName>
        <ItemRole
          className={brand.role === 'Public' && 'active'}
          onClick={() => this.handleBrand(brand, 'Public')}
        >
          PUBLIC
        </ItemRole>
        <ItemRole
          className={brand.role === 'Private' && 'active'}
          onClick={() => this.handleBrand(brand, 'Private')}
        >
          PRIVATE
        </ItemRole>
        <ItemClose onClick={() => this.handleDeleteBrand(brand)}>
          <img src={RemoveAccount} alt="Delete Brand" />
        </ItemClose>
      </TableItem>
    ));

    const { type, selected, value } = this.state;

    let modal = '';

    if (type === 'Delete') {
      modal = (
        <ModalWrapper>
          <ModalContent>
            <ModalTitle>Remove Brand</ModalTitle>
            <ModalDescription>
              Are you sure you want to remove <span>{selected.value} </span>
              from <span>Company Brand</span>?<br />
              <br />
              All files and links will be permanently deleted from your account.
            </ModalDescription>
            <ModalAction>
              <ModalCancel onClick={this.handleClose}>Cancel</ModalCancel>
              <ModalConfirm onClick={this.handleConfirm}>Remove</ModalConfirm>
            </ModalAction>
          </ModalContent>
        </ModalWrapper>
      );
    }

    if (type === 'Private') {
      modal = (
        <ModalWrapper>
          <ModalContent>
            <ModalTitle>Edit Brand Privacy</ModalTitle>
            <ModalDescription>
              Are you sure you want to make the
              <span> {selected.value}</span> brand <span>private</span>?<br />
              <br />
              The brand will no longer be visible to all members of your company
              account. Only members invited directly from the
              <span> {selected.value}</span> brand page will have access.
            </ModalDescription>
            <ModalAction>
              <ModalCancel onClick={this.handleClose}>Cancel</ModalCancel>
              <ModalConfirm onClick={this.handleConfirm}>Confirm</ModalConfirm>
            </ModalAction>
          </ModalContent>
        </ModalWrapper>
      );
    }

    if (type === 'Public') {
      modal = (
        <ModalWrapper>
          <ModalContent>
            <ModalTitle>Edit Brand Access</ModalTitle>
            <ModalDescription>
              Are you sure you want to make the
              <span> {selected.value}</span> brand <span>public</span>?<br />
              <br />
              The brand will be visible to all members of your company account.
              Asset links can be shared with anyone without admin approval.
            </ModalDescription>
            <ModalAction>
              <ModalCancel onClick={this.handleClose}>Cancel</ModalCancel>
              <ModalConfirm onClick={this.handleConfirm}>Confirm</ModalConfirm>
            </ModalAction>
          </ModalContent>
        </ModalWrapper>
      );
    }

    if (type === 'Add') {
      modal = (
        <ModalWrapper>
          <ModalContent>
            <ModalTitle>Add New Brand</ModalTitle>
            <ModalInput
              value={value}
              type="text"
              placeholder="Name"
              onChange={this.handleChange}
            />
            <ModalAction>
              <ModalCancel onClick={this.handleClose}>Cancel</ModalCancel>
              <AddButton onClick={this.handleConfirm}>Add</AddButton>
            </ModalAction>
          </ModalContent>
        </ModalWrapper>
      );
    }

    return (
      <FullScreen>
        {modal}
        <Header />
        <BackToSettings to="/settings">
          <img src={ExitSetings} alt="Exit Settings" />
          <Back className="settings__exit-title">Back to Settings</Back>
        </BackToSettings>
        <Content>
          <ContentCount>
            <ContentCountItem>
              <Title>{brandsLength}</Title>
              <SubTitle>BRANDS</SubTitle>
            </ContentCountItem>

            <ContentCountItem>
              <Title>{publicLength}</Title>
              <SubTitle>PUBLIC</SubTitle>
            </ContentCountItem>

            <ContentCountItem>
              <Title>{privateLength}</Title>
              <SubTitle>PRIVATE</SubTitle>
            </ContentCountItem>

            <ContentCountItem>
              <Title>{availableLength}</Title>
              <SubTitle>SEATS AVAILABLE</SubTitle>
            </ContentCountItem>
          </ContentCount>
          {!!brands.length && <Table>{brandList}</Table>}
          <AddButton onClick={this.handleClick} disabled={addDisabled}>
            ADD NEW
          </AddButton>
        </Content>
      </FullScreen>
    );
  }
}

EditBrands.propTypes = {
  company: PropTypes.object,
  brands: PropTypes.array,
  onCreateBrand: PropTypes.func,
  onLoadBrands: PropTypes.func,
  onUpdateBrand: PropTypes.func,
  onDeleteBrand: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  company: makeSelectCompany(),
  brands: makeSelectBrands(),
});

const mapDispatchToProps = dispatch => ({
  onLoadBrands: () => dispatch(getBrands.request()),
  onCreateBrand: value => dispatch(createBrand.request(value)),
  onUpdateBrand: value => dispatch(updateBrand.request(value)),
  onDeleteBrand: value => dispatch(deleteBrand.request(value)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'brand', reducer });
const withSaga = injectSaga({ key: 'brand', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(EditBrands);
