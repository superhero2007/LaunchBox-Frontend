import React from 'react';
import { shallow } from 'enzyme';

import ActivePayment from '../index';

describe('<ActivePayment />', () => {
  it('should render the page message', () => {
    shallow(<ActivePayment />);
  });
});
