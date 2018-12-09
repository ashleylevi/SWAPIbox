import React from 'react';
import { shallow } from 'enzyme';

import { CardContainer } from './CardContainer';
import Card from '../Card/Card';
import { mockData } from '../../helpers/mockData';

describe('CardContainer', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const mockDisplayData = [
      {
        name: 'Luke Skywalker',
        homeworld: 'Tatooine',
        population: '200000',
        species: 'Human',
        isFavorite: false,
        category: 'people'
      },
      {
        name: 'C-3PO',
        homeworld: 'Tatooine',
        population: '200000',
        species: 'Droid',
        isFavorite: false,
        category: 'people'
      },
      {
        name: 'R2-D2',
        homeworld: 'Naboo',
        population: '4500000000',
        species: 'Droid',
        isFavorite: false,
        category: 'people'
      },
      {
        name: 'Darth Vader',
        homeworld: 'Tatooine',
        population: '200000',
        species: 'Human',
        isFavorite: false,
        category: 'people'
      },
      {
        name: 'Leia Organa',
        homeworld: 'Alderaan',
        population: '2000000000',
        species: 'Human',
        isFavorite: false,
        category: 'people'
      },
      {
        name: 'Owen Lars',
        homeworld: 'Tatooine',
        population: '200000',
        species: 'Human',
        isFavorite: false,
        category: 'people'
      },
      {
        name: 'Beru Whitesun lars',
        homeworld: 'Tatooine',
        population: '200000',
        species: 'Human',
        isFavorite: false,
        category: 'people'
      },
      {
        name: 'R5-D4',
        homeworld: 'Tatooine',
        population: '200000',
        species: 'Droid',
        isFavorite: false,
        category: 'people'
      },
      {
        name: 'Biggs Darklighter',
        homeworld: 'Tatooine',
        population: '200000',
        species: 'Human',
        isFavorite: false,
        category: 'people'
      },
      {
        name: 'Obi-Wan Kenobi',
        homeworld: 'Stewjon',
        population: 'unknown',
        species: 'Human',
        isFavorite: false,
        category: 'people'
      }
    ];

    const mockFunc = jest.fn();

    const wrappper = shallow(
      <CardContainer displayData={mockDisplayData} toggleFavorite={mockFunc} />
    );
  });
});
