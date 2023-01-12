import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState, useEffect } from 'react'

import SliderHead from "./partialcomponents/SliderHead";
import NavbarHead from "./partialcomponents/Navbar";
import TopTrendingArtist from "./partialcomponents/TopTrendingArtist";
import TopWeekSong from "./partialcomponents/TopWeekSong";
import TopDaySong from "./partialcomponents/TopDaySong";
import LatestSong from "./partialcomponents/LatestSong";


export default function App() {

  useEffect(() => {

  })

  return (

    <div className="App">
      <NavbarHead />
      <SliderHead />
      {/* <LatestSong /> */}
      <TopTrendingArtist />
      {/* <TopDaySong /> */}
      {/* <TopWeekSong /> */}

    </div>
  );
}