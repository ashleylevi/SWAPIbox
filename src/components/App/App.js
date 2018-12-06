import React, { Component } from 'react';

import './App.css';

import { ScrollingText } from '../ScrollingText/ScrollingText';
import { Nav } from '../Nav/Nav';
import { Header } from '../Header/Header';

import * as API from '../../helpers/apiCalls';
import * as Helper from '../../helpers/Helper';

class App extends Component {
  constructor() {
    super();
    this.state = {
      films: [],
      filmCount: '',
      currentFilm: {},
      // people: [],
      // vehicles: [],
      // planets: [],
      errorStatus: false,
      displayData: []
    };
  }

  async componentDidMount(buttonName) {
    //include try...catch... blocks
    //change to make calls only when needed
    try {
      const films = await API.fetchFilms();
      this.loadFilmData(films.results);

      // const people = await API.fetchPeople();
      // await this.loadPeopleData(people.results);

      // const vehicles = await API.fetchVehicles();
      // await this.loadVehicleData(vehicles.results);

      // const planets = await API.fetchPlanets();
      // await this.loadPlanetData(planets.results);
    } catch (err) {
      console.log(err.message);
    }
  }

  fetchData = async (e) => {
    console.log('is running')
    if (e.target.name === 'people') {
      console.log('event', e.target)
      console.log('people pressed')
      const people = await API.fetchPeople();
      this.loadPeopleData(people.results);
    } else if (e.target.name === 'planets') {
      const planets = await API.fetchPlanets();
      this.loadPlanetData(planets.results);
    } else if (e.target.name === 'vehicles') {
      const vehicles = await API.fetchVehicles();
      this.loadVehicleData(vehicles.results);
    }

  }

  loadFilmData = filmsArray => {
    const currentFilm = Helper.getRandomFilm(filmsArray);
    this.setState({
      films: filmsArray.results,
      filmCount: filmsArray.count,
      currentFilm
    });
  };

  loadPeopleData = async peopleArray => {
    const displayData = await Helper.cleanPeopleData(peopleArray);
    this.setState({
      displayData
    });
  };

  loadVehicleData = async vehiclesArray => {
    const displayData = await Helper.cleanVehicleData(vehiclesArray);
    this.setState({
      displayData
    });
  };

  loadPlanetData = async planetsArray => {
    const displayData = await Helper.cleanPlanetsData(planetsArray);
    this.setState({
      displayData
    });
  };

  render() {
    const { currentFilm } = this.state;
    return (
      <div>
        <Header />
        <Nav fetchData={this.fetchData} />
        <ScrollingText {...currentFilm} />
      </div>
    );
  }
}

export default App;

//Test for inputs, test for state being set and test for error status
