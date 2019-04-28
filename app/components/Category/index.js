import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { createCategory, deleteCategory } from 'containers/BizPage/actions';
import {
  makeSelectCurrencies,
  makeSelectCurrency,
} from 'containers/BizPage/selectors';
import Dropdown from 'components/Dropdown';
import Table from 'components/Table';
import Modal from 'components/Modal';
import Wrapper from './Wrapper';
import Title from './Title';
import ModalDialog from './ModalDialog';

class Category extends React.Component {
  constructor(props) {
    super(props);
    const currency = props.currencies.find(
      element => element.id === props.currency,
    );
    const currencyLabel = currency.label.slice(-1);
    this.state = {
      opened: props.opened,
      modal: false,
      selectedItem: null,
      currencyLabel,
    };
  }

  componentWillReceiveProps(nextProps) {
    const currency = nextProps.currencies.find(
      element => element.id === nextProps.currency,
    );
    const currencyLabel = currency.label.slice(-1);
    this.setState({ currencyLabel });
  }

  toggle = () => {
    this.setState(state => ({
      opened: !state.opened,
    }));
  };

  total = () => {
    let value = 0;
    for (let i = 0; i < this.props.body.length; i += 1) {
      value += this.props.body[i].salary + this.props.body[i].other;
    }
    return this.format(value);
  };

  format = defaultValue => {
    if (defaultValue === 0) {
      return this.state.currencyLabel + 0;
    }
    let value = defaultValue;
    const staticValue = Math.abs(value)
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    value =
      value > 0
        ? `${this.state.currencyLabel}${staticValue}`
        : `-${this.state.currencyLabel}${staticValue}`;
    return value;
  };

  duplicateCategory = () => {
    this.props.onCreateCategory(this.props.category);
  };

  deleteCategory = () => {
    this.props.onDeleteCategory(this.props.category.id);
  };

  showModal = () => {
    this.setState({
      modal: true,
      selectedItem: this.props.category,
    });
  };

  closeModal = () => {
    this.setState({
      modal: false,
      selectedItem: null,
    });
  };

  render() {
    const dropdownList = [
      {
        label: 'Duplicate',
        func: this.duplicateCategory,
      },
      {
        label: 'Delete',
        func: this.showModal,
      },
    ];
    return (
      <div>
        {this.state.modal && (
          <Modal onClose={this.closeModal}>
            <ModalDialog
              element={this.state.selectedItem}
              onDelete={this.deleteCategory}
              onClose={this.closeModal}
            />
          </Modal>
        )}
        <Wrapper>
          <Title opened={this.state.opened} onClick={this.toggle}>
            {this.props.category.title}
          </Title>
          <Dropdown
            value={this.total()}
            color={this.props.category.color}
            dropdownList={dropdownList}
          />
        </Wrapper>
        {this.state.opened && (
          <Table
            header={this.props.header}
            body={this.props.body}
            categoryId={this.props.category.id}
            currencyLabel={this.state.currencyLabel}
          />
        )}
      </div>
    );
  }
}

Category.propTypes = {
  category: PropTypes.object,
  opened: PropTypes.bool,
  header: PropTypes.array,
  body: PropTypes.array,
  onCreateCategory: PropTypes.func,
  onDeleteCategory: PropTypes.func,
  currency: PropTypes.number,
  currencies: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  currencies: makeSelectCurrencies(),
  currency: makeSelectCurrency(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onCreateCategory: category => dispatch(createCategory.request(category)),
    onDeleteCategory: id => dispatch(deleteCategory.request(id)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Category);
