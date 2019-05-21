import React from 'react';
import { shallow } from 'enzyme';

import BrandLandingPage from '../index';

describe('<BrandLandingPage />', () => {
  it('should render the page message', () => {
    shallow(<BrandLandingPage />);
  });
});
