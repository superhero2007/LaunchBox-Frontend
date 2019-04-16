import React from 'react';
import { shallow } from 'enzyme';

import BrandPage from '../index';

describe('<BrandPage />', () => {
  it('should render the page message', () => {
    shallow(<BrandPage />);
  });
});
