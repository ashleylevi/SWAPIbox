import React from 'react';
import { shallow } from 'enzyme';

import { Nav } from './Nav';
import { mockData } from '../../helpers/mockData';

describe('Nav', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const mockCardCount = 4;
    const wrapper = shallow(<Nav cardCount={mockCardCount} />);

    expect(wrapper).toMatchSnapshot();
  });
});
