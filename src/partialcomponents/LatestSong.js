import React, { useState, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap';



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
        <div className='container-fluid m-0 p-0 bg-cards'>
            <Container>

                <Row className=" justify-content-between flex flex-nowrap overflow-scroll mt-5 w-100">
                    <div className=' text-light text-title'>Latest Song</div>


                    {
                        songs.map((song, i) => (
                            <figure className="figure figure-latest-song">
                                <img
                                    className=" mt-5 p-5 pb-2 figure-img img-fluid rounded"
                                    key={i}
                                    src={song.album.image.cover.url}
                                    alt={song.album.name} />
                                <figcaption className='figure-caption text-center text-light'>{song.album.name}</figcaption>
                                <figcaption className='figure-caption text-center text-light'>{song.album.artists[0].fullName}</figcaption>
                            </figure>
                        ))
                    }
                </Row>
            </Container>

        </div>

    );
}

export default LatestSong;
