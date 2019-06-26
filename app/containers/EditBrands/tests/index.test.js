import React from 'react';
import { shallow } from 'enzyme';

import EditBrands from '../index';

describe('<EditBrands />', () => {
  it('should render the page message', () => {
    shallow(<EditBrands />);
  });
});
