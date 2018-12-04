import React, { Component } from 'react';
import './App.css';

import { ScrollingText } from '../ScrollingText/ScrollingText';

class App extends Component {
  constructor() {
    super();
    this.state = {
      films: [],
      filmCount: ''
    };
  }

  componentDidMount() {
    this.fetchFilm();
  }

  fetchFilm = async () => {
    // const randomNumber = Math.floor(Math.random() * 7) + 1;
    const url = 'https://swapi.co/api/films/';
    const response = await fetch(url);
    const films = await response.json();
    this.setState({
      films: films.results,
      filmCount: films.count
    });
  };

  render() {
    return (
      <div>
        <h1>SWAPIBOX</h1>
        <ScrollingText />
      </div>
    );
  }
}

export default App;
