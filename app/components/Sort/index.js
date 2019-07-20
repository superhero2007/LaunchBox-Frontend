import React from 'react';
import PropTypes from 'prop-types';
import SortUp from 'images/sort-up.svg';
import SortDown from 'images/sort-down.svg';
import SortUpActive from 'images/sort-up__active.svg';
import SortDownActive from 'images/sort-down__active.svg';
import Wrapper from './Wrapper';

const Sort = props => (
  <Wrapper>
    {props.value === 0 && <img src={SortUp} alt="Sort Up" />}
    {props.value === 0 && <img src={SortDown} alt="Sort Down" />}
    {props.value === 1 && <img src={SortUpActive} alt="Sort Up Active" />}
    {props.value === -1 && <img src={SortDownActive} alt="Sort Down Active" />}
  </Wrapper>
);

Sort.propTypes = {
  value: PropTypes.number,
};

export default Sort;
