import React from 'react';
import { shallow } from 'enzyme';

import BizPage from '../index';

describe('<BizPage />', () => {
  it('should render the page message', () => {
    shallow(<BizPage />);
  });
});
