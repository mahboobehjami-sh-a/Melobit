import '../css/Player.css';
import React, { useState, useEffect } from 'react'

import SliderHead from "../partialcomponents/SliderHead";
import TopTrendingArtist from "../partialcomponents/TopTrendingArtist";
import TopWeekSong from "../partialcomponents/TopWeekSong";
import TopDaySong from "../partialcomponents/TopDaySong";
import LatestSong from "../partialcomponents/LatestSong";
import Footer from "./Footer";



export default function Home() {

    useEffect(() => {

    })

    return (

        <div className="">
            <SliderHead />
            <TopTrendingArtist />
            <LatestSong />
            <TopDaySong />
            <TopWeekSong /> 
            <Footer />

        </div>
    );
}