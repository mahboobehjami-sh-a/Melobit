import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/Player.css';
import React, { useState, useEffect } from 'react'

import SliderHead from "./partialcomponents/SliderHead";
import NavbarHead from "./partialcomponents/Navbar";
import TopTrendingArtist from "./partialcomponents/TopTrendingArtist";
import TopWeekSong from "./partialcomponents/TopWeekSong";
import TopDaySong from "./partialcomponents/TopDaySong";
import LatestSong from "./partialcomponents/LatestSong";
import Player from "./partialcomponents/Player";


export default function App() {

  useEffect(() => {

  })

  return (

    <div className="App">
      <NavbarHead />
      {/* <SliderHead />
      <TopTrendingArtist />
      <LatestSong />
      <TopDaySong />
      <TopWeekSong /> */}
      <Player />

    </div>
  );
}