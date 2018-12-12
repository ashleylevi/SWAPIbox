import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import { CardContainer } from '../CardContainer/CardContainer';
import { Home } from '../Home/Home';

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
      displayData: ''
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
    } else if (e.target.name === 'favorites') {
      this.setState({
        displayData: 'favorites'
      });
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
        displayData: 'people'
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
        displayData: 'planets'
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
        displayData: 'vehicles'
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
      people: displayData
    });
  };

  loadVehicleData = async vehiclesArray => {
    const displayData = await Helper.cleanVehicleData(vehiclesArray);

    this.storeArrayData(displayData, 'vehicles');
    this.setState({
      vehicles: displayData
    });
  };

  loadPlanetData = async planetsArray => {
    const displayData = await Helper.cleanPlanetsData(planetsArray);

    this.storeArrayData(displayData, 'planets');
    this.setState({
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

    return [...favPeople, ...favPlanets, ...favVehicles];
  };

  render() {
    const { currentFilm, displayData } = this.state;
    let data = [];
    let favorites = this.displayFavorites();

    if (displayData.length > 0) {
      return (
        <div className="App">
          <Route
            path={'/:category'}
            render={({ match }) => {
              const { category } = match.params;
              let data;
              if (category === 'favorites') {
                data = this.displayFavorites();
              } else {
                data = this.state[category];
              }

              if (category === 'home') {
                return (
                  <Home
                    fetchData={this.fetchData}
                    displayFavorites={this.displayFavorites}
                    cardCount={favorites.length}
                    currentFilm={currentFilm}
                  />
                );
              } else {
                return (
                  <div>
                    <Home
                      fetchData={this.fetchData}
                      displayFavorites={this.displayFavorites}
                      cardCount={favorites.length}
                    />
                    <CardContainer
                      displayData={data}
                      toggleFavorite={this.toggleFavorite}
                      cardCount={data.length}
                    />
                  </div>
                );
              }
            }}
          />
        </div>
      );
    } else {
      return (
        <div className="App">
          <Home
            fetchData={this.fetchData}
            displayFavorites={this.displayFavorites}
            currentFilm={currentFilm}
            cardCount={data.length}
          />
        </div>
      );
    }
  }
}

export default App;
