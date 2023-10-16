import React from "react";
import AboutImg from "../../assets/images/aboutus.png";
import CommonPages from "../commonPages/CommonPages";
import MoreAbout from "./MoreAbout";

const About = () => {
  return (
    <>
      <CommonPages
        title="Nepa Shop"
        subTitle="About"
        desc="Welcome to Nepa Shop!

Nepa Shop is a trusted online platform that caters to businesses, 
providing a wide range of high-quality products and services. We 
understand the unique needs of businesses, and our mission is to 
support your success by offering a seamless and reliable e-comme-
-rce experience.

Our Commitment:
At Nepa Shop, we are committed to being your trusted partner in
business. We strive to exceed your expectations by delivering 
exceptional products and services while ensuring convenience,
reliability, and efficiency.Our products undergo rigorous testing and inspection
to ensure they meet your expectations for performance, durability,
and reliability."
        desc1="We value your privacy and prioritize the confidentiality and security
of your business information.Join the growing community of businesses that rely on Nepa Shop for their 
procurement needs. "
        btnView="Learn More"
        imgAbout={AboutImg}
        visit="/more-info"
      />
      <MoreAbout/>
    </>
  );
};

export default About;
