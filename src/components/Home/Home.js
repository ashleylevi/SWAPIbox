import React from 'react';
import { Header } from '../Header/Header';
import { Nav } from '../Nav/Nav';
import { ScrollingText } from '../ScrollingText/ScrollingText';


export const Home = (props) => {
  const { fetchData, displayFavorites, currentFilm } = props

  return (
    <div className="home">
      <Header />
      <Nav fetchData={fetchData}
            displayFavorites={displayFavorites} />
      <ScrollingText {...currentFilm} />
    </div>
  )
}
