import React from 'react';
import { shallow, mount } from 'enzyme';

import { Home } from './Home';
import { mockData } from '../../helpers/mockData';

describe('Home', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const mockFunc = jest.fn();
    const mockCardCount = 4;
    const mockFilm = mockData.films.results[0].opening_crawl;
    const wrapper = shallow(
      <Home
        fetchData={mockFunc}
        displayFavorites={mockFunc}
        currentFilm={mockFilm}
        cardCount={mockCardCount}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
