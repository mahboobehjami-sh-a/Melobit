import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import NavbarHead from "./partialcomponents/Navbar";
import Home from "./partialcomponents/Home";
import Search from "./partialcomponents/Search";
import DetailsSong from "./partialcomponents/DetailsSong";
// import { useRoutes } from 'react-router-dom';


export default function App() {

  return (

    <div className="App">
      <NavbarHead />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detailsong/:id" element={<DetailsSong />} />
        <Route path="search/detailsong/:id" element={<DetailsSong />} />
      </Routes>
    </div>
  );
}