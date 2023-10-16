import React, { useState } from "react";
import Images from "../../assets/images/ourHistory.png";
import { Link } from "react-router-dom";
import DetailsInfo from "./DetailsInfo";

const MoreAbout = () => {
  const[showMore, setShowMore]=useState(false)
  const handleDetails=()=>{

    setShowMore(true)
  }
  return (
    <div className="sans-serif px-4 py-16 mx-auto mt-1 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="flex justify-center">
          <img
            src={Images}
            alt="Nepa Shop"
            className="w-full h-75 max-w-md object-contain animate-moveUpDown"
          />
        </div>
        <div>
          <h2 className="mb-4 mt-1 text-3xl font-bold leading-none sm:text-4xl">
            Learn <span className="text-red-700"> our history</span>
          </h2>
          <p className="mb-4 text-gray-700"></p>
          <>
            <p className="mb-4 text-gray-700">
              Our Founding Story: In the bustling streets of Nepal, a group of
              passionate entrepreneurs came together with a common goal: to
              revolutionize the way Nepalese shop online. They envisioned a
              platform that would not only provide convenience but also
              celebrate the heritage and uniqueness of Nepal's culture and
              craftsmanship. And so, on that historic day of July 12, 2023, Nepa
              Shop was born.
              <br/>
              <p>
              <b>The Journey So Far:</b>
              Since our inception, Nepa Shop has grown exponentially, fueled by
              the love and support of our cherished customers. We started small
              but mighty, with a curated collection of local handicrafts,
              traditional garments, and authentic Nepali products. As word
              spread about our commitment to quality and authenticity, our
              offerings expanded to encompass a wide array of categories,
              catering to the diverse needs and tastes of our growing customer
              base.</p>
              <p>
              <b>Preserving Tradition, Embracing Innovation:</b>
              At Nepa Shop, we are committed to preserving Nepal's rich cultural
              heritage while embracing the latest technological advancements in
              the world of e-commerce. We work closely with local artisans and
              craftsmen, supporting their craftsmanship, and bringing their
              creations to the global stage. Each product on our platform
              reflects the spirit of Nepal, woven with love, passion, and
              centuries-old traditions.</p>
              <p> <b>Our Vision:</b>
               As we continue our journey,
              our vision remains clear and steadfast. We strive to become the
              premier online shopping destination for Nepali products,
              showcasing the best of Nepal's art, culture, and innovation to the
              world. With a customer-centric approach, we aim to nurture
              long-lasting relationships, built on trust, reliability, and
              exceptional service.</p>
            </p>
          </>
          <Link
            to=""
            className="inline-block py-2 px-4 text-white bg-red-700 no-underline hover:bg-blue-700 rounded-lg"
            onClick={handleDetails}
          >
            Know our history
          </Link>
        </div>
      </div>
      {showMore ? <DetailsInfo/> : ""}
    </div>
  );
};

export default MoreAbout;
