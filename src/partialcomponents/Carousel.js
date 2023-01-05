import { useState, useEffect } from 'react'

export default function Carousel() {
    const [sliders, setSliders] = useState([])

    useEffect(() => {
    })

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
        <div>

            {
                sliders.map((slide, i) => {
                    <img src={slide.album.image.cover.url} alt='carousellllllll'></img>
                })
            }
        </div>
    );
}

