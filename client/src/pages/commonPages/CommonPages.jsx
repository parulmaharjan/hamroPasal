import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Services from '../moreInfo/services/Services';


const CommonPages = (prop) => {
  const [showMore,setShowMore] = useState(false)
  const handleViewServices=()=>{
    setShowMore(true)
  }
  return (
   <>
   
   <div className="sans-serif px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold leading-none sm:text-4xl">
              {prop.subTitle} <span className="text-red-700">{prop.title}</span>
            </h2>
            <p className="mb-4 text-gray-700">
              {prop.desc}
            </p>
            <>
              <p className="mb-4 text-gray-700">
              {prop.desc1}

              </p>
            </>
            <Link
              to={prop.visit}
              className="inline-block py-2 px-4 text-white bg-red-700 no-underline hover:bg-blue-700 rounded-lg"
              onClick={handleViewServices}
            >
              {prop.btnView}
            </Link>
          </div>
          <div className="flex justify-center">
            <img
              src={prop.imgAbout}
              alt="Nepa Shop"
              className="w-full h-75 max-w-md object-contain animate-moveUpDown"
            />
          </div>
        </div>
      </div>
      {showMore ? 
      <Services/> :""}
   </>
  )
}

export default CommonPages