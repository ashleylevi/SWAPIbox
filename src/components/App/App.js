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
      people: [],
      vehicles: [],
      planets: [],
      errorStatus: false
    };
  }

  async componentDidMount() {
    //include try...catch... blocks
    //change to make calls only when needed
    try {
      const films = await API.fetchFilms();
      this.loadFilmData(films.results);

      const people = await API.fetchPeople();
      await this.loadPeopleData(people.results);

      const vehicles = await API.fetchVehicles();
      await this.loadVehicleData(vehicles.results);

      const planets = await API.fetchPlanets();
      await this.loadPlanetData(planets.results);
    } catch (err) {
      console.log(err.message);
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
    const people = await Helper.cleanPeopleData(peopleArray);
    this.setState({
      people
    });
  };

  loadVehicleData = async vehiclesArray => {
    const vehicles = await Helper.cleanVehicleData(vehiclesArray);
    this.setState({
      vehicles
    });
  };

  loadPlanetData = async planetsArray => {
    const planets = await Helper.cleanPlanetsData(planetsArray);
    this.setState({
      planets
    });
  };

  render() {
    const { currentFilm } = this.state;
    return (
      <div>
        <Header />
        <Nav />
        <ScrollingText {...currentFilm} />
      </div>
    );
  }
}

export default App;

//Test for inputs, test for state being set and test for error status
