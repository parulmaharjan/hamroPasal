import React from 'react'
import CommonPages from '../commonPages/CommonPages'
import moreInfoImg from"../../assets/images/newLogo.png";


const MoreInfo = () => {
  return (
   <>
   <CommonPages  title="More-info" subTitle="Know" desc="Enjoy reliable shipping
services with options for standard and expedited delivery. Track your order online
once it's shipped. International orders may be subject to customs fees.
Returns and Refunds: We want you to be satisfied. Eligible items can be returned
within 1-2 days. Contact our support team to initiate the return process.
Refunds are provided in the original payment method or as store credits.
Certain items may be non-returnable.
privacy Policy: We value your privacy and protect your personal information.
 Our privacy policy outlines how we handle data, ensuring security and confidentiality. 
 We do not share your information with third parties for marketing purposes. Review our 
 privacy policy for more details.
 Discover a diverse selection of products at Nepa Shop. Our extensive catalog includes categories such as:

Electronics and Gadgets
Fashion and Clothing
Home and Kitchen Appliances
Beauty and Personal Care
Books and Stationery
Sports and Fitness Equipment
and much more!
Browse through our well-organized product listings, complete with detailed descriptions, high-quality images, and customer reviews. We curate our catalog to ensure you have access to the latest trends, top brands, and best-value products.
We want you to be completely satisfied with your purchase. If, for any reason, you need to return a product or request a refund, our hassle-free returns process makes it simple. Refer to our Returns and Refunds policy for detailed information on eligibility, timelines, and procedures.

Feel free to customize and adapt the sample to fit the specific features, offerings, and policies of your own e-commerce store."
 
              
              btnView="explore more service"
              imgAbout={moreInfoImg}
              visit=""
              
              
              />
   </>
  )
}

export default MoreInfo