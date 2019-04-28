import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import moment from 'moment';
import styled from 'styled-components';
import {
  selectMonth,
  selecCurrency,
  updateVat,
} from 'containers/BizPage/actions';
import {
  makeSelectCurrencies,
  makeSelectCurrency,
  makeSelectMonth,
  makeSelectVAT,
} from 'containers/BizPage/selectors';
import Currency from 'components/Currency';
import Vat from 'components/Vat';
import FooterTotal from './FooterTotal';

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  height: 84px;
  width: 100%;
  padding-left: 26px;
  background: #ffffff;
  z-index: 5;
`;

const SubWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DateWrapper = styled.div`
  margin: 0 56px;
  cursor: pointer;
  font-family: Muli;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: normal;
  color: #58454b;

  i + span {
    margin-left: 12px;
  }

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

class Footer extends React.Component {
  constructor(props) {
    super(props);
    const month = {
      year: parseInt(props.month.split('-')[0], 10),
      month: parseInt(props.month.split('-')[1], 10),
    };
    this.state = {
      month,
    };
  }

  componentWillReceiveProps(nextProps) {
    const month = {
      year: parseInt(nextProps.month.split('-')[0], 10),
      month: parseInt(nextProps.month.split('-')[1], 10),
    };
    this.setState({
      month,
    });
  }

  prevMonth = () => {
    const { month } = this.state;
    if (month) {
      if (month.month === 1) {
        month.year -= 1;
        month.month = 12;
      } else {
        month.month -= 1;
      }
      this.setState({ month });
      const monthStr = `${month.year}-${`0${month.month}`.substr(-2, 2)}`;
      this.props.onSelectMonth(monthStr);
    }
  };

  nextMonth = () => {
    const { month } = this.state;
    if (month) {
      if (month.month === 12) {
        month.year += 1;
        month.month = 1;
      } else {
        month.month += 1;
      }
      this.setState({ month });
      const monthStr = `${month.year}-${`0${month.month}`.substr(-2, 2)}`;
      this.props.onSelectMonth(monthStr);
    }
  };

  render() {
    return (
      <Wrapper>
        <SubWrapper>
          <Currency
            selectedCash={this.props.currency}
            currencyList={this.props.currencies}
            onSelectCurrency={this.props.onSelectCurrency}
          />
          <Vat vat={this.props.vat} onUpdateVat={this.props.onUpdateVat} />
        </SubWrapper>
        <CenterWrapper>
          <Icon className="fas fa-arrow-left" onClick={this.prevMonth} />
          <DateWrapper>
            <Icon className="far fa-calendar" />
            <span>{moment(this.props.month).format('MMM YYYY')}</span>
          </DateWrapper>
          <Icon className="fas fa-arrow-right" onClick={this.nextMonth} />
        </CenterWrapper>
        <SubWrapper>
          <FooterTotal
            title="Balance"
            price={this.props.balance}
            color="#27C478"
          />
          <FooterTotal
            title="Available Cash"
            price={this.props.cash}
            color="#58454B"
          />
        </SubWrapper>
      </Wrapper>
    );
  }
}

Footer.propTypes = {
  balance: PropTypes.string,
  cash: PropTypes.string,
  currency: PropTypes.number,
  currencies: PropTypes.array,
  month: PropTypes.string,
  vat: PropTypes.number,
  onSelectMonth: PropTypes.func,
  onSelectCurrency: PropTypes.func,
  onUpdateVat: PropTypes.func,
};
const mapStateToProps = createStructuredSelector({
  month: makeSelectMonth(),
  currencies: makeSelectCurrencies(),
  currency: makeSelectCurrency(),
  vat: makeSelectVAT(),
});
export function mapDispatchToProps(dispatch) {
  return {
    onSelectMonth: month => dispatch(selectMonth(month)),
    onSelectCurrency: currency => dispatch(selecCurrency(currency)),
    onUpdateVat: vat => dispatch(updateVat(vat)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Footer);
