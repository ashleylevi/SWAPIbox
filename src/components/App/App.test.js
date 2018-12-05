import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';

import App from './App';
import { mockData } from '../../mockData';

describe('App', ()=> {

  it('should match the snapshot with all data passed in correctly', ()=> {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot();
  })

  // it('should set state to hold all of the films on page load', () => {
  //   const wrapper = mount(<App />)
  //   wrapper.instance().componentDidMount();
  //   expect(wrapper.state()).toEqual(1)

  // })

  it('getRandomFilm should setState to a random film', () => {
    const mockState = {
      films: mockData.films.results,
      filmCount: mockData.films.count,
      currentFilm: {}
    }
    const wrapper = mount(<App />)
    

  })

});

