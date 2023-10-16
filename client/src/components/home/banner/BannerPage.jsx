import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import BannerImg from'../../../assets/images/Banner.png';
import { BannerData } from './Data';

const BannerPage = () => {
  return (
    <>
    <div className="">
    <Carousel data-bs-theme="dark">
        {BannerData.map((banner)=>(
            <Carousel.Item>
            <img
              className="d-block w-100"
              src={banner.banner_url}
              alt="First slide"
            />
            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>

        ))}
      
      
    </Carousel>



        </div>


    </>
  )
}

export default BannerPage