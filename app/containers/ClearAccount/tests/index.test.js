import React from 'react';
import { shallow } from 'enzyme';

import ClearAccount from '../index';

describe('<ClearAccount />', () => {
  it('should render the page message', () => {
    shallow(<ClearAccount />);
  });
});
