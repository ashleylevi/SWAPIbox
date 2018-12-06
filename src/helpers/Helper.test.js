import * as Helper from './Helper';
import { mockData } from './mockData';

describe('Helper', () => {
  describe('cleanPeopleData', () => {
    //Test for inputs
    it('should return an array of people', async () => {
      const mockPeople = mockData.people.results;
      const expectedPerson1 = {
        name: 'Luke Skywalker',
        homeworld: 'Tatooine',
        homePop: '200000',
        species: 'Human',
        isFavorite: false
      };
      const expectedPerson2 = {
        name: 'C-3PO',
        homeworld: 'Tatooine',
        homePop: '200000',
        species: 'Droid',
        isFavorite: false
      };

      const cleanPeople = await Helper.cleanPeopleData(mockPeople);

      expect(cleanPeople[0]).toEqual(expectedPerson1);
      expect(cleanPeople[1]).toEqual(expectedPerson2);
    });
  });

  describe.skip('cleanVehicleData', () => {
    it('should be called with the correct params', () => {});

    it('should return an array of vehicles', () => {});
  });

  describe.skip('cleanPlanetData', () => {
    it('should be called with the correct params', () => {});

    it('should return an array of planets', () => {});
  });
});
