import React, { Component } from 'react';

import './App.css';

import { ScrollingText } from '../ScrollingText/ScrollingText';
import { Nav } from '../Nav/Nav';


class App extends Component {
  constructor() {
    super();
    this.state = {
      films: [],
      filmCount: '',
      currentFilm: {}
    };
  }

  componentDidMount() {
    this.fetchFilm();
  }

  fetchFilm = async () => {
    const url = 'https://swapi.co/api/films/';
    const response = await fetch(url);
    const films = await response.json();
    this.setState({
      films: films.results,
      filmCount: films.count
    });
    //is calling this here bad?
    this.getRandomFilm();
  };

  getRandomFilm = () => {
    // update RNG to include 0
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    const currentFilm = this.state.films[randomNumber];
    console.log(currentFilm);
    this.setState({
      currentFilm
    });
  };

  render() {
    const { currentFilm } = this.state;
    return (
      <div>
        <Nav />
        {/* <ScrollingText {...currentFilm} /> */}
      </div>
    );
  }
}

export default App;
