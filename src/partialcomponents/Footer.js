import React, { useState, useEffect } from 'react'
import { AiFillGithub } from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.min.css'


function Footer() {



    return (
        <div className='row d-flex justify-content-center w-100 fixed-bottom footer-bottom footer-text '>
            <div className='col-3'>
                <a href='https://github.com/LayaArianpour' className='text-light text-github'><AiFillGithub className=' text-pink' /> Laya Arianpour</a>

            </div>
            <div className='col-3'>
                <a href='https://github.com/mahboobehjami-sh-a' className=' text-light text-github'><AiFillGithub className='text-pink' /> Mahboobeh Jami</a>

            </div>
        </div>
    );
}

export default Footer;
