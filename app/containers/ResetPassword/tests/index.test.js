import React from 'react';
import { shallow } from 'enzyme';

import ResetPassword from '../index';

describe('<ResetPassword />', () => {
  it('should render the page message', () => {
    shallow(<ResetPassword />);
  });
});
