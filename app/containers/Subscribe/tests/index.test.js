import React from 'react';
import { shallow } from 'enzyme';

import Subscribe from '../index';

describe('<Subscribe />', () => {
  it('should render the page message', () => {
    shallow(<Subscribe />);
  });
});
