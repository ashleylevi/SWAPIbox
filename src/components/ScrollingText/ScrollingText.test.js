import React from 'react';
import { shallow } from 'enzyme';

import { ScrollingText } from './ScrollingText';

import { mockData } from '../../helpers/mockData';

describe('ScrollingText', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const mockFilm = mockData.films.results[0];
    const wrapper = shallow(<ScrollingText {...mockFilm} />);

    expect(wrapper).toMatchSnapshot();
  });
});
