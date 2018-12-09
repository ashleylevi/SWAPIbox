import React from 'react';
import { shallow } from 'enzyme';

import Card from './Card';
import { mockData } from '../../helpers/mockData';

describe('Card', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const mockCardData = {
      name: 'Luke Skywalker',
      homeworld: 'Tatooine',
      population: '200000',
      species: 'Human',
      isFavorite: false,
      category: 'people'
    };

    const mockFunc = jest.fn();
    const wrapper = shallow(
      <Card cardData={mockCardData} toggleFavorite={mockFunc} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
