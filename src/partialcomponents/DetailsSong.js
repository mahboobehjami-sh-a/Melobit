import { useParams } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import { Container, Row } from 'react-bootstrap';
import { BsCalendar, BsDownload, BsPlay } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";

function DetailsSong() {
    const parameters = useParams();
    const [songDetails, setSongDetails] = useState([])
    const audioref = useRef(null);

    useEffect(() => {
    }, [])
    const ShowSongDetails = async () => {
        var resultSongDetails = await fetch('https://api-beta.melobit.com/v1/song/' + parameters.id)
            .then(Response =>
                Response.json())
            .then(data => {
                setSongDetails(data)
            })
    }
    ShowSongDetails()


    return (
        <Container>
            {/* بنر تصویر بالا */}
            <Row className="justify-content-lg-center flex">
                {songDetails.image && <img className='w-100 detailes-banner' src={songDetails.image.slider.url} />}
            </Row>

            <div >
                {/* قسمت سمت راست پلیر موزیک و رنک موزیک */}
                <div className='music-player-card center'>
                    {songDetails.image && <img className='w-100 rounded-circle music-player-card-img' src={songDetails.image.cover.url} />}
                </div>
                <div className='seekbar-box'>
                    <div className='song-name'>
                        {songDetails.album && <p>{songDetails.album.name}</p>}
                    </div>
                    <div className='artist-name'>
                        {songDetails.artists && <p>{songDetails.artists[0].fullName}</p>}
                    </div>
                    <div className='center'>
                        {songDetails.audio &&
                            <audio src={songDetails.audio.high.url} controls ref={audioref} ></audio>
                        }
                    </div>
                </div>
                <div className='music-rank-col'>
                    <div className='text-light'>
                        <BsCalendar />{songDetails.releaseDate && <span className='text-rank'>{songDetails.releaseDate}</span>}
                    </div>

                    <div className='music-rank-row'>
                        <div className='text-light'>
                            <BsPlay />{songDetails.artists && <span className='text-rank'>{songDetails.artists[0].sumSongsDownloadsCount}</span>}
                        </div>
                        <div className='text-light'>
                            <BsDownload />{songDetails.downloadCount && <span className='text-rank'>{songDetails.downloadCount}</span>}
                        </div>
                        <div className='text-light'>
                            <MdFavoriteBorder />{songDetails.artists && <span className='text-rank'>{songDetails.artists[0].followersCount}</span>}
                        </div>
                    </div>

                </div>
            </div>

            <div className='music-rank-row'>
                <div className='row-between'>
                    <div className='column button-container mt-3'>
                        {/* دکمه های دانلود */}

                        {/* <button className='download-btn'>
                            <BsDownload /><span className='text-rank'>Download</span>
                        </button> */}
                        <button id='high' className='download-quality-btn text-light'>
                            {songDetails.audio && <a className='text-decoration-none' href={songDetails.audio.high.url} download>
                                <span className='text-rank'>Download with 320 quality</span>
                            </a>}
                        </button>
                        <button id='low' className='download-quality-btn text-light'>
                            {songDetails.audio && <a className='text-decoration-none' href={songDetails.audio.medium.url} download>
                                <span className='text-rank'>Download with 128 quality</span>
                            </a>}
                        </button>
                    </div>

                </div>


                {/* متن اهنگ */}
                <div className='lyrics'>
                    {songDetails.lyrics && <p>{songDetails.lyrics}</p>}
                </div>
            </div>
        </Container>
    );
}

export default DetailsSong;
