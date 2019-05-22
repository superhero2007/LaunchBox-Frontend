import React from 'react';
import { shallow } from 'enzyme';

import ResetPasswordRequest from '../index';

describe('<ResetPasswordRequest />', () => {
  it('should render the page message', () => {
    shallow(<ResetPasswordRequest />);
  });
});
