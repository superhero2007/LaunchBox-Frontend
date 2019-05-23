import React from 'react';
import { shallow } from 'enzyme';

import SettingsPage from '../index';

describe('<SettingsPage />', () => {
  it('should render the page message', () => {
    shallow(<SettingsPage />);
  });
});
