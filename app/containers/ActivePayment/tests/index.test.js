import React from 'react';
import { shallow } from 'enzyme';

import AccountActive from '../index';

describe('<AccountActive />', () => {
  it('should render the page message', () => {
    shallow(<AccountActive />);
  });
});
