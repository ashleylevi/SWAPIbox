import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import { mockData } from '../../helpers/mockData';
import * as Helper from '../../helpers/Helper';

describe('App', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('fetchData', () => {
    it('should setState of displayData to a string on button click', () => {
      const mockedEvent = { target: { name: 'people' } };
      const expected = 'people';

      const wrapper = shallow(<App />);
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
    it('should log error message if people not fetched', () => {
      //ADD TEST
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
    it('should log error message if planets not fetched', () => {
      //ADD TEST
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
    it('should log error message if vehicles not fetched', () => {
      //ADD TEST
    });
  });
});

// describe('', () => {
//   it('', () => {});
// });
