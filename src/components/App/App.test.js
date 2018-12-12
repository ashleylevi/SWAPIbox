import React from 'react';
import { shallow, mount } from 'enzyme';

import App from './App';
import { mockData } from '../../helpers/mockData';
import * as Helper from '../../helpers/Helper';

describe('App', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('fetchData', () => {
    const wrapper = shallow(<App />);

    it('should setState of displayData to a string on button click', () => {
      const mockedEvent = { target: { name: 'favorites' } };
      const expected = 'favorites';

      wrapper.instance().fetchData(mockedEvent);
      expect(wrapper.state('displayData')).toEqual(expected);
    });
  });

  describe('setPeopleData', () => {
    const wrapper = shallow(<App />);

    it('should set state of displayData', () => {
      const mockPeople = mockData.people.results;

      wrapper.instance().setPeopleData(mockPeople);
      const expected = 'people';
      expect(wrapper.state('displayData')).toEqual(expected);
    });
  });

  describe('setPlanetsData', () => {
    const wrapper = shallow(<App />);

    it('should set state of displayData', () => {
      const mockPlanets = mockData.planets.results;

      wrapper.instance().setPlanetsData(mockPlanets);
      const expected = 'planets';
      expect(wrapper.state('displayData')).toEqual(expected);
    });
  });

  describe('setVehicleData', () => {
    const wrapper = shallow(<App />);

    it('should set state of displayData', () => {
      const mockVehicles = mockData.vehicles.results;

      wrapper.instance().setVehicleData(mockVehicles);
      const expected = 'vehicles';
      expect(wrapper.state('displayData')).toEqual(expected);
    });
  });

  describe('loadFilmData', () => {
    const wrapper = shallow(<App />);

    it('should set state to a current film', () => {
      const mockfilmsArray = mockData.films.results;
      wrapper.instance().loadFilmData(mockfilmsArray);
      expect(wrapper.state('currentFilm')).toHaveProperty(
        'title',
        'opening_crawl',
        'release_date'
      );
    });
  });

  describe('loadPeopleData', () => {
    const wrapper = shallow(<App />);

    it('should set state with array of clean people data', async () => {
      jest.setTimeout(30000);
      const mockPeople = mockData.people.results;
      await wrapper.instance().loadPeopleData(mockPeople);

      const expected1 = {
        category: 'people',
        homeworld: 'Tatooine',
        isFavorite: false,
        name: 'Luke Skywalker',
        population: '200000',
        species: 'Human'
      };

      const expected2 = {
        category: 'people',
        homeworld: 'Tatooine',
        isFavorite: false,
        name: 'C-3PO',
        population: '200000',
        species: 'Droid'
      };

      expect(wrapper.state('people')[0]).toEqual(expected1);
      expect(wrapper.state('people')[1]).toEqual(expected2);
    });
  });

  describe('loadVehicleData', () => {
    const wrapper = shallow(<App />);
    it('should set state with an array of clean vehicles', async () => {
      jest.setTimeout(30000);
      const mockVehicles = mockData.vehicles.results;
      await wrapper.instance().loadVehicleData(mockVehicles);

      const expected1 = {
        category: 'vehicles',
        class: 'wheeled',
        isFavorite: false,
        model: 'Digger Crawler',
        name: 'Sand Crawler',
        passengers: '30'
      };

      const expected2 = {
        category: 'vehicles',
        class: 'repulsorcraft',
        isFavorite: false,
        model: 'T-16 skyhopper',
        name: 'T-16 skyhopper',
        passengers: '1'
      };

      expect(wrapper.state('vehicles')[0]).toEqual(expected1);
      expect(wrapper.state('vehicles')[1]).toEqual(expected2);
    });
  });

  describe('loadPlanetData', () => {
    const wrapper = shallow(<App />);
    it('should set state with an array of clean planets', async () => {
      jest.setTimeout(30000);
      const mockPlanets = mockData.planets.results;
      await wrapper.instance().loadPlanetData(mockPlanets);

      const expected1 = {
        category: 'planets',
        climate: 'temperate',
        isFavorite: false,
        name: 'Alderaan',
        population: '2000000000',
        residents: ['Leia Organa', 'Bail Prestor Organa', 'Raymus Antilles'],
        terrain: 'grasslands, mountains'
      };

      const expected2 = {
        category: 'planets',
        climate: 'temperate, tropical',
        isFavorite: false,
        name: 'Yavin IV',
        population: '1000',
        residents: [],
        terrain: 'jungle, rainforests'
      };

      expect(wrapper.state('planets')[0]).toEqual(expected1);
      expect(wrapper.state('planets')[1]).toEqual(expected2);
    });
  });

  describe('storeArrayData', () => {
    it('should set item in localstorage', () => {
      localStorage.clear();
      const wrapper = shallow(<App />);
      const mockArray = ['tatooine', 'alderan'];
      const mockKey = 'planets';
      wrapper.instance().storeArrayData(mockArray, mockKey);

      expect(localStorage).toHaveProperty(mockKey, JSON.stringify(mockArray));
    });
  });

  describe('getStoredData', () => {
    it('should setState after retrieving from localstorage', () => {
      const expected = {
        planets: ['tatooine'],
        people: ['Luke Skywalker'],
        vehicle: ['sand crawler']
      };

      const wrapper = shallow(<App />);

      wrapper.instance().storeArrayData(['tatooine'], 'planets');

      wrapper.instance().storeArrayData(['Luke Skywalker'], 'people');

      wrapper.instance().storeArrayData(['Sand Crawler'], 'vehicles');

      wrapper.instance().getStoredData();

      expect(wrapper.state('people')).toEqual(['Luke Skywalker']);
      expect(wrapper.state('planets')).toEqual(['tatooine']);
      expect(wrapper.state('vehicles')).toEqual(['Sand Crawler']);
    });
  });

  describe('toggleFavorite', () => {
    it('should set state after calling toggleFavorite', () => {
      const wrapper = shallow(<App />);

      const mockCard = {
        category: 'people',
        homeworld: 'Tatooine',
        isFavorite: true,
        name: 'Luke Skywalker',
        population: '200000',
        species: 'Humannn'
      };

      const expected = [];

      wrapper.instance().toggleFavorite(mockCard, () => {
        expect(wrapper.state('people')).toEqual(expected);
      });
    });
  });

  describe('displayFavorites', () => {
    it('should filter by favorite cards and set state', () => {
      const mockFavCard = {
        category: 'people',
        homeworld: 'Tatooine',
        isFavorite: true,
        name: 'Luke Skywalker',
        population: '200000',
        species: 'Humannn'
      };

      const wrapper = shallow(<App />);
      const expected = [mockFavCard];

      wrapper.setState({ people: [mockFavCard] });

      wrapper.instance().displayFavorites();

      expect(wrapper.state('people')).toEqual(expected);
    });
  });
});
