import React from 'react';
import { shallow } from 'enzyme';

import EmailConfirmation from '../index';

describe('<EmailConfirmation />', () => {
  it('should render the page message', () => {
    shallow(<EmailConfirmation />);
  });
});
