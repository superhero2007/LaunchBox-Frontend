import React from 'react';
import { shallow } from 'enzyme';

import Register from '../index';

describe('<Register />', () => {
  it('should render the page message', () => {
    shallow(<Register />);
  });
});
