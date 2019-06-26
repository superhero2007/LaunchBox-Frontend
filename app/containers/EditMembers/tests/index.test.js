import React from 'react';
import { shallow } from 'enzyme';

import EditMembers from '../index';

describe('<EditMembers />', () => {
  it('should render the page message', () => {
    shallow(<EditMembers />);
  });
});
