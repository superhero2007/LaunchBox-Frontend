import React from 'react';
import { shallow } from 'enzyme';

import RegisterConfirm from '../index';

describe('<RegisterConfirm />', () => {
  it('should render the page message', () => {
    shallow(<RegisterConfirm />);
  });
});
