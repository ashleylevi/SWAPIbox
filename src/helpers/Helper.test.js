import * as Helper from './Helper';
import { mockData } from './mockData';

describe('Helper', () => {
  describe('cleanPeopleData', () => {
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

  describe('cleanVehicleData', () => {
    it('should return an array of vehicles', async () => {
      const mockVehicles = mockData.vehicles.results;
      const expectedVehicle1 = {
        name: 'Sand Crawler',
        model: 'Digger Crawler',
        class: 'wheeled',
        passengers: '30',
        isFavorite: false
      };
      const expectedVehicle2 = {
        name: 'T-16 skyhopper',
        model: 'T-16 skyhopper',
        class: 'repulsorcraft',
        passengers: '1',
        isFavorite: false
      };

      const cleanVehicles = await Helper.cleanVehicleData(mockVehicles);

      expect(cleanVehicles[0]).toEqual(expectedVehicle1);
      expect(cleanVehicles[1]).toEqual(expectedVehicle2);
    });
  });

  describe('cleanPlanetData', () => {
    it('should return an array of planets', async () => {
      const mockPlanets = mockData.planets.results;
      const expectedPlanet1 = {
        climate: 'temperate',
        isFavorite: false,
        name: 'Alderaan',
        population: '2000000000',
        residents: [
          {
            birth_year: '19BBY',
            created: '2014-12-10T15:20:09.791000Z',
            edited: '2014-12-20T21:17:50.315000Z',
            eye_color: 'brown',
            films: [
              'https://swapi.co/api/films/2/',
              'https://swapi.co/api/films/6/',
              'https://swapi.co/api/films/3/',
              'https://swapi.co/api/films/1/',
              'https://swapi.co/api/films/7/'
            ],
            gender: 'female',
            hair_color: 'brown',
            height: '150',
            homeworld: 'https://swapi.co/api/planets/2/',
            mass: '49',
            name: 'Leia Organa',
            skin_color: 'light',
            species: ['https://swapi.co/api/species/1/'],
            starships: [],
            url: 'https://swapi.co/api/people/5/',
            vehicles: ['https://swapi.co/api/vehicles/30/']
          },
          {
            birth_year: '67BBY',
            created: '2014-12-20T16:53:08.575000Z',
            edited: '2014-12-20T21:17:50.463000Z',
            eye_color: 'brown',
            films: [
              'https://swapi.co/api/films/5/',
              'https://swapi.co/api/films/6/'
            ],
            gender: 'male',
            hair_color: 'black',
            height: '191',
            homeworld: 'https://swapi.co/api/planets/2/',
            mass: 'unknown',
            name: 'Bail Prestor Organa',
            skin_color: 'tan',
            species: ['https://swapi.co/api/species/1/'],
            starships: [],
            url: 'https://swapi.co/api/people/68/',
            vehicles: []
          },
          {
            birth_year: 'unknown',
            created: '2014-12-20T19:49:35.583000Z',
            edited: '2014-12-20T21:17:50.493000Z',
            eye_color: 'brown',
            films: [
              'https://swapi.co/api/films/6/',
              'https://swapi.co/api/films/1/'
            ],
            gender: 'male',
            hair_color: 'brown',
            height: '188',
            homeworld: 'https://swapi.co/api/planets/2/',
            mass: '79',
            name: 'Raymus Antilles',
            skin_color: 'light',
            species: ['https://swapi.co/api/species/1/'],
            starships: [],
            url: 'https://swapi.co/api/people/81/',
            vehicles: []
          }
        ],
        terrain: 'grasslands, mountains'
      };
      const expectedPlanet2 = {
        climate: 'temperate, tropical',
        isFavorite: false,
        name: 'Yavin IV',
        population: '1000',
        residents: [],
        terrain: 'jungle, rainforests'
      };
      const cleanPlanets = await Helper.cleanPlanetsData(mockPlanets);
      expect(cleanPlanets[0]).toEqual(expectedPlanet1);
      expect(cleanPlanets[1]).toEqual(expectedPlanet2);
    });
  });
});
