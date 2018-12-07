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
      displayData: [],
      favoriteCards: []
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
    const { people, planets, vehicles } = this.state;
    if (e.target.name === 'people') {
      this.setPeopleData(people)
    } else if (e.target.name === 'planets') {
      this.setPlanetsData(planets)
    } else if (e.target.name === 'vehicles') {
      this.setVehicleData(vehicles)
    }
  };

  setPeopleData = async (peopleArray) => {
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
      })
    }
  }

  setPlanetsData = async (planetsArray) => {
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
        })
    }
  }

  setVehicleData = async (vehicleArray) => {
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
      })
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
      displayData,
      people: displayData
    });
  };

  loadVehicleData = async vehiclesArray => {
    const displayData = await Helper.cleanVehicleData(vehiclesArray);
    this.setState({
      displayData,
      vehicles: displayData
    });
  };

  loadPlanetData = async planetsArray => {
    const displayData = await Helper.cleanPlanetsData(planetsArray);
    this.setState({
      displayData,
      planets: displayData

    });
  };

  storeCard = (card) => {
    const id = card.name
    if (!localStorage.hasOwnProperty(id)) {
      localStorage.setItem(id, JSON.stringify(card))
    }
    const faveCards = this.state.favoriteCards
    this.setState({
      favoriteCards: [card, ...faveCards]
    })
  }



  render() {
    const { currentFilm, displayData, favoriteCards } = this.state;

    if (displayData.length > 0) {
      return (
        <div>
          <Header />
          <Nav fetchData={this.fetchData} />
          <CardContainer displayData={displayData} storeCard={this.storeCard} />
        </div>
      );
    } else {
      return (
        <div>
          <Header />
          <Nav fetchData={this.fetchData} favoriteCards={favoriteCards} />
          <ScrollingText {...currentFilm} />
        </div>
      );
    }
  }
}

export default App;
