import React from 'react';
import { shallow } from 'enzyme';

import Confirmation from '../index';

describe('<Confirmation />', () => {
  it('should render the page message', () => {
    shallow(<Confirmation />);
  });
});
