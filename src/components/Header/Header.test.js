import React from 'react';
import { shallow } from 'enzyme';

import { Header } from './Header';
import { mockData } from '../../helpers/mockData';

describe('Header', () => {
  it('should match snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
