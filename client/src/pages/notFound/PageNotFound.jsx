import React from 'react'
import pagesNotFound from "../../assets/images/PageNotFound.png";
import { Link } from 'react-router-dom';


const PageNotFound = () => {
  return (
    <div>
    <div className="flex justify-center items-center h-50vh">
    <img src={pagesNotFound} alt="pageNotFound" className="h-30 w-200 ml-30 mt-2" />
    <Link to="" className='no-underline'><button className='bg-red-700 hover:bg-blue-800 text-white border-black-700 mt-20 p-3 h-7 flex justify-end items-center'>Go Back</button></Link>

  </div>
</div>
   
    
    
  )
}

export default PageNotFound