import React from 'react';
import { shallow } from 'enzyme';

import Signup from '../index';

describe('<SignUp />', () => {
  it('should render the page message', () => {
    shallow(<Signup />);
  });
});
