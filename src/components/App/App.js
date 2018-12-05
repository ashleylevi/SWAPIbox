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
      people: []
    };
  }

  async componentDidMount() {
    const films = await API.fetchFilms();
    this.loadFilmData(films.results);

    const people = await API.fetchPeople();
    await this.loadPeopleData(people.results);
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
