import React from 'react';
import { shallow } from 'enzyme';

import ChangePassword from '../index';

describe('<ChangePassword />', () => {
  it('should render the page message', () => {
    shallow(<ChangePassword />);
  });
});
