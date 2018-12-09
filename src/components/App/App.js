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
      people: [],
      planets: [],
      vehicles: [],
      filmCount: '',
      currentFilm: {},
      errorStatus: false,
      displayData: []
    };
  }

  async componentDidMount(buttonName) {
    this.getStoredData();
    const { films } = this.state;
    if (films.length === 0) {
      try {
        const films = await API.fetchFilms();
        this.loadFilmData(films.results);
      } catch (err) {
        console.log(err.message);
      }
    }
  }

  fetchData = async e => {
    const { people, planets, vehicles } = this.state;
    if (e.target.name === 'people') {
      this.setPeopleData(people);
    } else if (e.target.name === 'planets') {
      this.setPlanetsData(planets);
    } else if (e.target.name === 'vehicles') {
      this.setVehicleData(vehicles);
    }
  };

  setPeopleData = async peopleArray => {
    if (peopleArray.length === 0) {
      try {
        const people = await API.fetchPeople();
        this.loadPeopleData(people.results);
      } catch (err) {
        console.log(err.message);
      }
    } else {
      this.setState({
        displayData: peopleArray
      });
    }
  };

  setPlanetsData = async planetsArray => {
    if (planetsArray.length === 0) {
      try {
        const planets = await API.fetchPlanets();
        this.loadPlanetData(planets.results);
      } catch (err) {
        console.log(err.message);
      }
    } else {
      this.setState({
        displayData: planetsArray
      });
    }
  };

  setVehicleData = async vehicleArray => {
    if (vehicleArray.length === 0) {
      try {
        const vehicles = await API.fetchVehicles();
        this.loadVehicleData(vehicles.results);
      } catch (err) {
        console.log(err.message);
      }
    } else {
      this.setState({
        displayData: vehicleArray
      });
    }
  };

  loadFilmData = filmsArray => {
    const currentFilm = Helper.getRandomFilm(filmsArray);

    this.storeArrayData(filmsArray, 'films');
    this.setState({
      films: filmsArray.results,
      filmCount: filmsArray.count,
      currentFilm
    });
  };

  loadPeopleData = async peopleArray => {
    const displayData = await Helper.cleanPeopleData(peopleArray);

    this.storeArrayData(displayData, 'people');
    this.setState({
      displayData,
      people: displayData
    });
  };

  loadVehicleData = async vehiclesArray => {
    const displayData = await Helper.cleanVehicleData(vehiclesArray);

    this.storeArrayData(displayData, 'vehicles');
    this.setState({
      displayData,
      vehicles: displayData
    });
  };

  loadPlanetData = async planetsArray => {
    const displayData = await Helper.cleanPlanetsData(planetsArray);

    this.storeArrayData(displayData, 'planets');
    this.setState({
      displayData,
      planets: displayData
    });
  };

  storeArrayData = (array, key) => {
    localStorage.setItem(key, JSON.stringify(array));
  };

  getStoredData = () => {
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
      const array = localStorage.getItem(key);
      const data = JSON.parse(array);
      this.setState({
        [key]: data
      });
    });
  };

  toggleFavorite = card => {
    const category = card.category;
    const array = this.state[category].map(cardObject => {
      if (cardObject.name === card.name) {
        return { ...cardObject, isFavorite: !cardObject.isFavorite };
      } else {
        return cardObject;
      }
    });
    this.storeArrayData(array, category);
    this.setState({
      [category]: array
    });
  };

  displayFavorites = () => {
    const { people, planets, vehicles } = this.state;
    const favPeople = people.filter(person => person.isFavorite);
    const favPlanets = planets.filter(planet => planet.isFavorite);
    const favVehicles = vehicles.filter(vehicle => vehicle.isFavorite);

    const displayData = [...favPeople, ...favPlanets, ...favVehicles];
    this.setState({
      displayData
    });
  };

  render() {
    const { currentFilm, displayData } = this.state;

    if (displayData.length > 0) {
      return (
        <div>
          <Header />
          <Nav
            fetchData={this.fetchData}
            displayFavorites={this.displayFavorites}
          />
          <CardContainer
            displayData={displayData}
            toggleFavorite={this.toggleFavorite}
          />
        </div>
      );
    } else {
      return (
        <div>
          <Header />
          <Nav
            fetchData={this.fetchData}
            displayFavorites={this.displayFavorites}
          />
          <ScrollingText {...currentFilm} />
        </div>
      );
    }
  }
}

export default App;

//ADD LIGHTSABER FOR NAV
//ADD DARTH VADER SOUNDS
