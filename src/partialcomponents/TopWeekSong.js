import React, { useState, useEffect } from 'react'
import { Carousel, Container, Row, Col } from 'react-bootstrap';



function TopWeekSong() {
    const [songs, setSongs] = useState([])

    useEffect(() => {
    })

    // const showArtists = async () => {
    //     var resultArtists = await fetch('https://api-beta.melobit.com/v1/artist/trending/0/4')
    //         .then(Response =>
    //             Response.json())
    //         .then(data => {
    //             setArtists(data.results)
    //         })
    // }
    // setArtists()

    const showTopWeekSong = async () => {
        var resultTopWeekSong = await fetch('https://api-beta.melobit.com/v1/song/top/week/0/100')
            .then(Response =>
                Response.json())
            .then(data => {
                setSongs(data.results)
            })
    }
    showTopWeekSong()


    return (
        <Container>
            <Row className="justify-content-lg-center flex">

                {
                    songs.map((song, i) => (
                        <img
                            className='col-1'
                            key={i}
                            src={song.album.image.cover_small.url}
                            alt="song"
                        />
                    ))
                }

            </Row>
        </Container>
    );
}

export default TopWeekSong;
