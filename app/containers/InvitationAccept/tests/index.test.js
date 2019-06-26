import React from 'react';
import { shallow } from 'enzyme';

import InvitationAccept from '../index';

describe('<InvitationAccept />', () => {
  it('should render the page message', () => {
    shallow(<InvitationAccept />);
  });
});
