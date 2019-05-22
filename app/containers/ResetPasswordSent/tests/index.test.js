import React from 'react';
import { shallow } from 'enzyme';

import ResetPasswordSent from '../index';

describe('<ResetPasswordSent />', () => {
  it('should render the page message', () => {
    shallow(<ResetPasswordSent />);
  });
});
