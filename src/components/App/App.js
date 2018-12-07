import React, { Component } from 'react';

import './App.css';

import { ScrollingText } from '../ScrollingText/ScrollingText';
import { Nav } from '../Nav/Nav';
import { Header } from '../Header/Header';
import { CardContainer } from '../CardContainer/CardContainer';

import * as API from '../../helpers/apiCalls';
import * as Helper from '../../helpers/Helper';

class App extends Component {
  constructor() {
    super();
    this.state = {
      films: [],
      filmCount: '',
      currentFilm: {},
      errorStatus: false,
      displayData: [],
      storedCards: []
    };
  }

  async componentDidMount(buttonName) {
    try {
      const films = await API.fetchFilms();
      this.loadFilmData(films.results);
    } catch (err) {
      console.log(err.message);
    }
  }

  fetchData = async e => {
    if (e.target.name === 'people') {
      try {
        const people = await API.fetchPeople();
        this.loadPeopleData(people.results);
      } catch (err) {
        console.log(err.message);
      }
    } else if (e.target.name === 'planets') {
      try {
        const planets = await API.fetchPlanets();
        this.loadPlanetData(planets.results);
      } catch (err) {
        console.log(err.message);
      }
    } else if (e.target.name === 'vehicles') {
      try {
        const vehicles = await API.fetchVehicles();
        this.loadVehicleData(vehicles.results);
      } catch (err) {
        console.log(err.message);
      }
    }
  };

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

  storeCard = (id) => {

  }

  render() {
    const { currentFilm, displayData } = this.state;

    if (displayData.length > 0) {
      return (
        <div>
          <Header />
          <Nav fetchData={this.fetchData} />
          <CardContainer displayData={displayData} />
        </div>
      );
    } else {
      return (
        <div>
          <Header />
          <Nav fetchData={this.fetchData} />
          <ScrollingText {...currentFilm} />
        </div>
      );
    }
  }
}

export default App;
