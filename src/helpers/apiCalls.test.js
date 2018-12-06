import * as API from './apiCalls';
// import { promises } from 'fs';
import { mockData } from './mockData';

describe('API', () => {
  const { films, people, planets, vehicles } = mockData;
  beforeEach(() => {
  })

  describe('fetch films', () => {
    it('should call fetch with the correct params', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        Promise.resolve({json: () => {films}})

      })

    // setup
      const expected = 'https://swapi.co/api/films/';
      // execution
      API.fetchFilms();

      // expectation
      expect(window.fetch).toHaveBeenCalledWith(expected)
    })



    it('should throw an error if everything is not ok', () => {
        
    })



  })

  describe.skip('fetch people', () => {
    it('should call fetch with the correct params', () => {
    
    })

    it('should throw an error if everything is not ok', () => {
        
    })

  })

  describe.skip('fetch vehicles', () => {
    it('should call fetch with the correct params', () => {
    
    })

    it('should throw an error if everything is not ok', () => {
        
    })

  })

  describe.skip('fetch planets', () => {
    it('should call fetch with the correct params', () => {
    
    })

    it('should throw an error if everything is not ok', () => {
        
    })

  })

})


