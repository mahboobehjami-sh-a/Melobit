import '../css/CustomizeStyle.css';
import React, { useState, useEffect } from 'react'
import melobit from '../images/melobit.svg'
import melobitlogo from '../images/melobitlogo.svg'

function NavbarHead() {
    return (

        <nav className="navbar navbar-light navbar-expand-md bg-faded justify-content-center">
            <a href="/" className="navbar-brand d-flex w-50 mr-auto">
                <img src={melobitlogo} className='p-2 melobit-icon'></img>
                <img src={melobit} className='melobit-text'></img>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">

                <ul className="navbar-nav w-100 justify-content-center">
                    <li className="nav-item activee ">
                        <a className="nav-link text-light font-weight-bold " href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light font-weight-bold" href="#">Playlist</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light font-weight-bold"  href="#">Favorite</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light font-weight-bold" href="#">History</a>
                    </li>
                </ul>

                <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Right</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Right</a>
                    </li>
                </ul>
            </div>
        </nav>

    );
}

export default NavbarHead;
