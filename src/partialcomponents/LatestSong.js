import React, { useState, useEffect } from 'react'
import { Carousel, Container, Row, Col } from 'react-bootstrap';



function LatestSong() {
    const [songs, setSongs] = useState([])

    useEffect(() => {
    })

    const showLatestSong = async () => {
        var resultLatestSong = await fetch('https://api-beta.melobit.com/v1/song/new/0/11')
            .then(Response =>
                Response.json())
            .then(data => {
                setSongs(data.results)
            })
    }
    showLatestSong()


    return (
        <Container>
            <Row className="justify-content-lg-center flex">

                {
                    songs.map((song, i) => (
                        <img
                            className='col-1'
                            key={i}
                            src={song.album.image.cover_small.url}
                            alt={song.album.name}
                        />
                    ))
                }

            </Row>
        </Container>
    );
}

export default LatestSong;
