import '../css/Player.css';
import React, { useState, useEffect } from 'react'

import SliderHead from "../partialcomponents/SliderHead";
import NavbarHead from "../partialcomponents/Navbar";
import TopTrendingArtist from "../partialcomponents/TopTrendingArtist";
import TopWeekSong from "../partialcomponents/TopWeekSong";
import TopDaySong from "../partialcomponents/TopDaySong";
import LatestSong from "../partialcomponents/LatestSong";
import Player from "../partialcomponents/Player";
import Search from "../partialcomponents/Search";


export default function Home() {

    useEffect(() => {

    })

    return (

        <div className="">
            <NavbarHead />
            {/* <SliderHead />
            <TopTrendingArtist />
            <LatestSong />
            <TopDaySong />
            <TopWeekSong /> */}
            <Search />
            {/* <Player /> */}

        </div>
    );
}