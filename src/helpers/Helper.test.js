import * as Helper from './Helper';
import { mockData } from './mockData';

describe('Helper', () => {
  describe('getRandomFilm', () => {
    it('should return a random film', () => {
      const mockFilms = mockData.films.results;
      const expected = {
        title: 'The Phantom Menace',
        episode_id: 1,
        opening_crawl:
          'Turmoil has engulfed the\r\nGalactic Republic. The taxation\r\nof trade routes to outlying star\r\nsystems is in dispute.\r\n\r\nHoping to resolve the matter\r\nwith a blockade of deadly\r\nbattleships, the greedy Trade\r\nFederation has stopped all\r\nshipping to the small planet\r\nof Naboo.\r\n\r\nWhile the Congress of the\r\nRepublic endlessly debates\r\nthis alarming chain of events,\r\nthe Supreme Chancellor has\r\nsecretly dispatched two Jedi\r\nKnights, the guardians of\r\npeace and justice in the\r\ngalaxy, to settle the conflict....',
        director: 'George Lucas',
        producer: 'Rick McCallum',
        release_date: '1999-05-19',
        characters: [
          'https://swapi.co/api/people/2/',
          'https://swapi.co/api/people/3/',
          'https://swapi.co/api/people/10/',
          'https://swapi.co/api/people/11/',
          'https://swapi.co/api/people/16/',
          'https://swapi.co/api/people/20/',
          'https://swapi.co/api/people/21/',
          'https://swapi.co/api/people/32/',
          'https://swapi.co/api/people/33/',
          'https://swapi.co/api/people/34/',
          'https://swapi.co/api/people/36/',
          'https://swapi.co/api/people/37/',
          'https://swapi.co/api/people/38/',
          'https://swapi.co/api/people/39/',
          'https://swapi.co/api/people/40/',
          'https://swapi.co/api/people/41/',
          'https://swapi.co/api/people/42/',
          'https://swapi.co/api/people/43/',
          'https://swapi.co/api/people/44/',
          'https://swapi.co/api/people/46/',
          'https://swapi.co/api/people/48/',
          'https://swapi.co/api/people/49/',
          'https://swapi.co/api/people/50/',
          'https://swapi.co/api/people/51/',
          'https://swapi.co/api/people/52/',
          'https://swapi.co/api/people/53/',
          'https://swapi.co/api/people/54/',
          'https://swapi.co/api/people/55/',
          'https://swapi.co/api/people/56/',
          'https://swapi.co/api/people/57/',
          'https://swapi.co/api/people/58/',
          'https://swapi.co/api/people/59/',
          'https://swapi.co/api/people/47/',
          'https://swapi.co/api/people/35/'
        ],
        planets: [
          'https://swapi.co/api/planets/8/',
          'https://swapi.co/api/planets/9/',
          'https://swapi.co/api/planets/1/'
        ],
        starships: [
          'https://swapi.co/api/starships/40/',
          'https://swapi.co/api/starships/41/',
          'https://swapi.co/api/starships/31/',
          'https://swapi.co/api/starships/32/',
          'https://swapi.co/api/starships/39/'
        ],
        vehicles: [
          'https://swapi.co/api/vehicles/33/',
          'https://swapi.co/api/vehicles/34/',
          'https://swapi.co/api/vehicles/35/',
          'https://swapi.co/api/vehicles/36/',
          'https://swapi.co/api/vehicles/37/',
          'https://swapi.co/api/vehicles/38/',
          'https://swapi.co/api/vehicles/42/'
        ],
        species: [
          'https://swapi.co/api/species/1/',
          'https://swapi.co/api/species/2/',
          'https://swapi.co/api/species/6/',
          'https://swapi.co/api/species/11/',
          'https://swapi.co/api/species/12/',
          'https://swapi.co/api/species/13/',
          'https://swapi.co/api/species/14/',
          'https://swapi.co/api/species/15/',
          'https://swapi.co/api/species/16/',
          'https://swapi.co/api/species/17/',
          'https://swapi.co/api/species/18/',
          'https://swapi.co/api/species/19/',
          'https://swapi.co/api/species/20/',
          'https://swapi.co/api/species/21/',
          'https://swapi.co/api/species/22/',
          'https://swapi.co/api/species/23/',
          'https://swapi.co/api/species/24/',
          'https://swapi.co/api/species/25/',
          'https://swapi.co/api/species/26/',
          'https://swapi.co/api/species/27/'
        ],
        created: '2014-12-19T16:52:55.740000Z',
        edited: '2015-04-11T09:45:18.689301Z',
        url: 'https://swapi.co/api/films/4/'
      };

      const randomFilm = Helper.getRandomFilm(mockFilms);
      expect(randomFilm).toHaveProperty(
        'title',
        'opening_crawl',
        'release_date'
      );
    });
  });

  describe('cleanPeopleData', () => {
    it('should return an array of people', async () => {
      jest.setTimeout(30000);
      const mockPeople = mockData.people.results;
      const expectedPerson1 = {
        name: 'Luke Skywalker',
        homeworld: 'Tatooine',
        population: '200000',
        species: 'Human',
        isFavorite: false,
        category: 'people'
      };
      const expectedPerson2 = {
        name: 'C-3PO',
        homeworld: 'Tatooine',
        population: '200000',
        species: 'Droid',
        isFavorite: false,
        category: 'people'
      };

      const cleanPeople = await Helper.cleanPeopleData(mockPeople);

      expect(cleanPeople[0]).toEqual(expectedPerson1);
      expect(cleanPeople[1]).toEqual(expectedPerson2);
    });
  });

  describe('cleanVehicleData', () => {
    it('should return an array of vehicles', async () => {
      jest.setTimeout(30000);
      const mockVehicles = mockData.vehicles.results;
      const expectedVehicle1 = {
        name: 'Sand Crawler',
        model: 'Digger Crawler',
        class: 'wheeled',
        passengers: '30',
        isFavorite: false,
        category: 'vehicles'
      };
      const expectedVehicle2 = {
        name: 'T-16 skyhopper',
        model: 'T-16 skyhopper',
        class: 'repulsorcraft',
        passengers: '1',
        isFavorite: false,
        category: 'vehicles'
      };

      const cleanVehicles = await Helper.cleanVehicleData(mockVehicles);

      expect(cleanVehicles[0]).toEqual(expectedVehicle1);
      expect(cleanVehicles[1]).toEqual(expectedVehicle2);
    });
  });

  describe('cleanPlanetData', () => {
    it('should return an array of planets', async () => {
      jest.setTimeout(30000);
      const mockPlanets = mockData.planets.results;
      const expectedPlanet1 = {
        climate: 'temperate',
        isFavorite: false,
        name: 'Alderaan',
        population: '2000000000',
        residents: ['Leia Organa', 'Bail Prestor Organa', 'Raymus Antilles'],
        terrain: 'grasslands, mountains',
        category: 'planets'
      };
      const expectedPlanet2 = {
        climate: 'temperate, tropical',
        isFavorite: false,
        name: 'Yavin IV',
        population: '1000',
        residents: [],
        terrain: 'jungle, rainforests',
        category: 'planets'
      };
      const cleanPlanets = await Helper.cleanPlanetsData(mockPlanets);
      expect(cleanPlanets[0]).toEqual(expectedPlanet1);
      expect(cleanPlanets[1]).toEqual(expectedPlanet2);
    });
  });
});
