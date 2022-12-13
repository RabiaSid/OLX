import React,{useState} from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

  
import { dataDigitalBestSeller } from '../components/Item/data'
import imgGirl from '../assets/watch.jpg';
import Product_cards from '../components/cards/product_cards';
import baseColors from '../constants/colors';

const Style =  {
    background: baseColors.lightGrey,
}

function Card_carousel() {
    
    const [defaultImage, setDefaultImage] = useState({});
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  
    const handleErrorImage = (data) => {
      setDefaultImage((prev) => ({
        ...prev,
        [data.target.alt]: data.target.alt,
        linkDefault: imgGirl,
      }));
    };
  
    return (
        <div className='d-flex row m-0  justify-content-center align-items-center '>
      <div className="App_slider container p-2 " style={Style}>
        <Slider {...settings}>
          {dataDigitalBestSeller.map((item) => (
            <Product_cards />
          ))}
        </Slider>
      </div>
      </div>
    );
  }
export default Card_carousel