import React, { useContext } from "react";
import{Link} from "react-router-dom"

const Contact = () => {
  
  return (
     <div className="container mx-auto md:p-4">
       <div className="flex justify-normal">      
       <div className="bg-white shadow-lg rounded no-underline  px-4 pt-4 pb-4 w-50  h-50 mb-60 mt-6 ">
           <h4 className=" text-center text-sm" >Contact Details</h4>
           <h4 className="text-sm ">Name: NepaShop</h4>
           <h4 className="text-sm"> Contact: 05570976</h4>
         <h4 className="text-sm">Address: Dhapakhel</h4>
           <h4 className="text-sm">Email: Nep@gmail.com</h4>
         </div>
         <div className="w-50 md:w-1/2 p-4 mt-15 mb-1">
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14138.62008762118!2d85.31868998830599!3d27.63519907948029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb176b47f72e53%3A0x5075fb8e3638c5d7!2sDhapakhel%2C%20Lalitpur%2044700!5e0!3m2!1sen!2snp!4v1689848030889!5m2!1sen!2snp"
          width="100%"
          height="400"
           style={{border:0}} 
          allowfullscreen=""
            loading="lazy"
             referrerpolicy="no-referrer-when-downgrade"></iframe>
         </div>
       
         <div className="w-full md:w-1/2 p-4">
             <form className="bg-white shadow-lg rounded no-underline px-8 pt-6 pb-8 mb-1 ">
                 <h1 className="text-center text-red-700 no-underline">Contact Us</h1>
                 <div className="flext justify-normal">
                 <input type="text" placeholder="Name" className=" border border-2-red-700 rounded w-27 px-1 py-1 mx-1 my-2 "/>
                 <input type="text" placeholder="Email" className="border border-2-red-700 rounded w-27 px-1 py-1 mx-1 my-2 "/>
                 </div>
               
                 <input type="text" placeholder="Subject" className="border border-2-red-700 rounded w-full px-1 py-1 mx-1 my-2 "/>
               
                 <input type="textArea" placeholder="Message" className="border border-2-red-700 rounded w-full px-1 pt-1 pb-5 mx-1 my-1 "/>
                <div className="flex justify-start"> <Link className="no-underline"
                to="/"><button type="submit" className="border border-2-red-700 rounded  hover:bg-green-700 hover:text-white px-2 py-2 mx-1 my-1 ">send</button>
                </Link></div>


             </form>
         </div>
       </div>
     </div>
  );
};

export default Contact;
