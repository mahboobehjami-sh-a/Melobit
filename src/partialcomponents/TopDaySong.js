import React, { useState, useEffect } from 'react'
import { Carousel, Container, Row, Col } from 'react-bootstrap';



function TopDaySong() {
    const [songs, setSongs] = useState([])

    useEffect(() => {
    })

    const showTopDaySong = async () => {
        var resultTopWeekSong = await fetch('https://api-beta.melobit.com/v1/song/top/day/0/100')
            .then(Response =>
                Response.json())
            .then(data => {
                setSongs(data.results)
            })
    }
    showTopDaySong()


    return (
        <div className='container horizontal-scrollable'>
            <Row className=" justify-content-lg-center flex ">

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
        </div>
    );
}

export default TopDaySong;
