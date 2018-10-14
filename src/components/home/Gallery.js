import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';


const settings = {
    infinite: true,
    speed: 500,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1
}

const showGallery = ({latestGallery}) =>{
    if(latestGallery){
        return(
            <Slider {...settings}>
                {latestGallery.map((item) =>{
                    return(
                        <Link to={`/galleries/${item.id}`} key={item.id} className="slider-item">
                            <div className="image"
                            style={{background: `url(/images/galleries/${item.images[0].img})`}}
                            >
                                <h3>{item.artist}</h3>
                            </div>
                        </Link>
                    )
                })}
            </Slider>
        )
    }
}


const Gallery = (props) => {
    return(
        <div className="home-gallery">
            <h2>Awesome gallery</h2>
            {showGallery(props)}
        </div>
    )
}


export default Gallery;