import React, { useState, useEffect } from 'react'
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import shape from '../images/shape.svg'



function TopTrendingArtist() {
    const [artists, setArtists] = useState([])

    useEffect(() => {
    })

    const showTrendingArtist = async () => {
        var resultTrendingArtist = await fetch('https://api-beta.melobit.com/v1/artist/trending/0/4')
            .then(Response =>
                Response.json())
            .then(data => {
                setArtists(data.results)
            })
    }
    showTrendingArtist()


    return (
        <div className='container-fluid'>
            <Row className="bg-cards-darkblue justify-content-between flex wrap-touch mt-5">

                <img src={shape}
                    className='shape'
                />
                <div className='text-show-top text-light'>Top<br />Trending<br /> <span className='text-pink'>Artist</span></div>
                {
                    artists.map((artist, i) => (
                        <img
                            className='col-2 img-holder  rounded-circle'
                            key={i}
                            src={artist.image.cover_small.url}
                            alt={artist.fullName}

                        />
                    ))
                }

            </Row>
        </div>
    );
}

export default TopTrendingArtist;
