import React from 'react';
import { shallow } from 'enzyme';

import LandingPage from '../index';

describe('<LandingPage />', () => {
  it('should render the page message', () => {
    shallow(<LandingPage />);
  });
});
