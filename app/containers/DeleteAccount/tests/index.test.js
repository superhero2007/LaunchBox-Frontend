import React from 'react';
import { shallow } from 'enzyme';

import DeleteAccount from '../index';

describe('<DeleteAccount />', () => {
  it('should render the page message', () => {
    shallow(<DeleteAccount />);
  });
});
