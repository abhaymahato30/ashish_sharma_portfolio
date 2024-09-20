import React from "react";
import imageUrl from "../assets/prof.jpg";
import logo1 from "../assets/LinkedIn.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.jfif";
import logo4 from "../assets/logo4.svg";

const educationData = [
  {
    year: "B.Tech (2014-18)",
    point: "Department of Civil Engineering, Jawahar Lal Nehru Government Engineering College Sunder Nagar",
  },
  {
    year: "Masters Dissertation",
    point:
      "Prediction of Marshal Stability and Flow using Adaptive Neuro Fuzzy Inference System ",
  },
  {
    year: "M.Tech (2019-21)",
    point: "Transportation Engineering, Department of Civil Engineering,Indian Institute of Engineering Science and Technology, Shibpur",
  },
  {
    year: "Ph.D (2021-Pursuing)",
    point:
      "Transportation Systems Engineering, Department of Civil Engineering, Indian Institute of Technology Guwahati",
  },
  {
    year: "Year 12 (Post-Secondary)",
    point:
      "Pursuit of higher education or career training; emphasis on independence and self-directed learning.",
  },
];


const Info = () => {
  return (
    <>
      <div className="main-container">
        <div className="content ">
          
          <div className="image-container flex justify-center">
            <img src={imageUrl} alt="me" className="image" />
          </div>
  
         <div className=" font-sans p-10">
         <p >
            I am a Ph.D. research scholar at the Department of Civil
            Engineering, Indian Institute of Technology Guwahati, India.
            Currently, I am working under the supervision of Prof. Rajan
            Choudhary in the area of pavement materials and pavement
            engineering.
          </p>
         </div>


        

      <div className="container m-6  font-normal text-sm font-sans">
        <div className="flex justify-center">
      <h1 className="m-4 font-bold font-sans text-2xl">Education </h1>
            
        </div>
      <table>
       
        <tbody>
          {educationData.map((item, index) => (
            <tr key={index}>
              <td>{item.year}</td>
              <td>{item.point}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

 









        </div>





        <aside className="aside">
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
        </aside>
      </div>
    </>
  );
};

export default Info;
