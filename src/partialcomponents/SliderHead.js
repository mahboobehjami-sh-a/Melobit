import React, { useState } from 'react'
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import streamblue from '../images/streamblue.svg'
import streamwhite from '../images/streamwhite.svg'
import { BsPlayFill } from "react-icons/bs";

function SliderHead() {
    const [sliders, setSliders] = useState([])
    const showSlider = async () => {
        var resultSlider = await fetch('https://api-beta.melobit.com/v1/song/slider/latest')
            .then(Response =>
                Response.json())
            .then(data => {
                setSliders(data.results)
            })
    }
    showSlider()

    return (
        <Container>
            <Row className="justify-content-lg-center flex">
                <Col className='col-2 p-0 '>
                    <img src={streamblue} className='mr-0 stream-blue stream-mt' />
                </Col>
                <Carousel className='col-md-8 p-0' indicators={false} controls={false}>
                    {
                        sliders.map((slide, i) => (
                            <Carousel.Item interval={3000} className=''>
                                <img
                                    key={i}
                                    className="d-block w-100 carousel-img"
                                    src={slide.image.slider.url}
                                    alt="slide"
                                />
                                <Carousel.Caption className=''>
                                    <Link to={`detailsong/${slide.id}`}
                                        className='text-decoration-none'>
                                        <button className='listen-now'>
                                            <div>Listen now</div>
                                            <div className='circle-play'>
                                                <BsPlayFill className='icon-size' />
                                            </div>
                                        </button>
                                    </Link>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))
                    }
                </Carousel>
                <Col className='col-2 p-0'>
                    <img src={streamwhite} className='stream-mt'></img>
                </Col>
            </Row>
        </Container>
    );
}

export default SliderHead;
