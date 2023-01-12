import React, { useState, useEffect } from 'react'
import { Carousel, Container, Row, Col } from 'react-bootstrap';



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
        <Container>
            <Row className="justify-content-lg-center flex">

                {
                    artists.map((artist, i) => (
                        <img
                            className='col-1'
                            key={i}
                            src={artist.image.cover_small.url}
                            alt={artist.fullName}

                        />
                    ))
                }

            </Row>
        </Container>
    );
}

export default TopTrendingArtist;
