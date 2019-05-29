import React from 'react';
import { shallow } from 'enzyme';

import ChangeEmail from '../index';

describe('<ChangeEmail />', () => {
  it('should render the page message', () => {
    shallow(<ChangeEmail />);
  });
});
