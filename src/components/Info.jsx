import React, { useState } from "react";
import imageUrl from "../assets/prof.jpg";
import logo1 from "../assets/LinkedIn.png";
import logo2 from "../assets/logo2.png";
import logo7 from "../assets/gmail.jpg";
import logo8 from "../assets/phone.svg";
import bgvideo from "../assets/bgvideo.mp4";

import logo4 from "../assets/logo4.svg";




const Info = () => {
  return (
    <>


      {/* bg test */}
      
      
        
        <div className="main-container relative text-white text-center">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover  -z-10"
          autoPlay
          loop
          muted
        >
          <source src={bgvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content ">
          <div className="image-container">
            <img src={imageUrl} alt="me" className="image" />
            <div className="font-sans text-xl font-medium sm: heading">
              <ul className="flex flex-col list-none">
                <div class="header-container">
                  <h1 class="formal-heading">ASHISH_SHARMA</h1>
                </div>

                <li className="text-white flex justify-center">
                  Ph.D. research scholar{" "}
                </li>
                <br />
                <li className="text-white flex justify-center">
                  Department of Civil Engineering{" "}
                </li>
                <br />
                <li className="text-white flex justify-center">
                  {" "}
                  Indian Institute of Technology Guwahati, India{" "}
                </li>
                <br />
                <li className="flex justify-center">
                  <img src={logo7} className="h-4 " alt="#" />
                  <a
                    href="mailto:ashishsharma@iitg.ac.in"
                    className="flex justify-center items-center mx-4"
                  >
                    {" "}
                    ashishsharma@iitg.ac.in
                  </a>
                </li>
                <li className="flex justify-center">
                  <img src={logo8} className="h-6 w-6" alt="#" />
                  <a
                    href="tel:+91-701840-9325"
                    className="flex justify-center items-center"
                  >
                    {" "}
                    + 91 701840-9325
                  </a>
                </li>

                <li>
                  <div className="logo-container">
                    <a
                      href="https://www.linkedin.com/in/ashish-sharma-b49618139?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BNlOjwlprRb6rQ574Xsy15w%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={logo1} alt="Logo 1" className="logo" />
                    </a>
                    <a
                      href="https://scholar.google.com/citations?user=Ljzh7isAAAAJ&hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={logo2} alt="Logo 2" className="logo" />
                    </a>

                    <a
                      href="https://orcid.org/0000-0001-8955-8278"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={logo4} alt="Logo 4" className="logo" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
        

    </>
  );
};

export default Info;
