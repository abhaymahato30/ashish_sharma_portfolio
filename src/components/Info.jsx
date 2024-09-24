import React,{useState} from "react";
import imageUrl from "../assets/prof.jpg";
import logo1 from "../assets/LinkedIn.png";
import logo2 from "../assets/logo2.png";
import logo7 from "../assets/gmail.jpg"
import logo8 from "../assets/phone.svg"


import logo4 from "../assets/logo4.svg";
import Points from "./Points";


const educationData = [
  {
    year: "B.Tech (2014-18)",
    point: "Department of Civil Engineering, Jawahar Lal Nehru Government Engineering College Sunder Nagar",
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
  
];
const topic = "Achievments";
const points = [
  "Best Paper Award for the paper: Sharma, A., Choudhary, R., and Kumar, A. (2022).Stabilization of open-graded asphalt friction course mixes with plant-based natural fibers In the Second International Conference on Construction Materials and Structures (ICCMS-2022), NIT Calicut, Kerala, India.",
  "Doctoral fellowship from the Ministry of Education, Government of India (2021-Present).",
  "Masters fellowship from the Ministry of Human Resource Development, Government of India (2019-2021).",
  "Awarded merit certificate from Himachal Pradesh Board of School Education Dharamshala for securing 39th position in the Matriculation examination",
  "Received a reward of Rs 75000/- as a one-time incentive from Govt. of Himachal Pradesh under the scheme titled “Mukhyamantri Protsahan Yojana Himachal Pradesh”."

];
const topic2 = "Research Interests";
const intrestPoints = [
  "Pavement Materials Characterization",
  "Asphalt Binder Rheology",
  "Bio-Asphalt",
  "Asphalt Binder Chemistry",
  "Warm Mix Asphalt",
  "Open-Graded Friction Courses",
  "Stone Matrix Asphalt",
  "Alternative Pavement Materials",
  "Recycled Asphalt Pavement",
  "Sustainability in Pavement Engineering",
  "Sustainable Road Design",
  "Soil Stabilization",
  "Rural Roads",
  "Pyrolysis"
];
const topic3 = "Reviewer";

const Reviewer = [
  "Advances in Materials Science and Engineering, Hindawi",
  "Case Studies in Construction Materials, Elsevier",
  "Cleaner Material, Elsevier",
  "Cleaner Engineering and Technology, Elsevier",
  "Construction and Building Materials, Elsevier",
  "Discover Applied Sciences, Springer Nature",
  "Discover Civil Engineering, Springer Nature",
  "Discover Sustainability, Springer Nature",
  "Iranian Journal of Science and Technology",
  "Transactions of Civil Engineering, Springer Nature",
  "Journal of Materials in Civil Engineering, ASCE",
  "Polymer Bulletin, Springer Nature",
  "Results in Engineering, Elsevier",
  "Scientific Reports, Springer Nature",
  "Transportation Research Board (TRB)"
];

const topic4 = "Teaching Assistant";

const TechingAssit = [
  "CE-582 Pavement Materials, IIT Guwahati [Theory and Lab Class]",
  "CE-623 Pavement Evaluation, Rehabilitation, and Maintenance, IIT Guwahati"
];
const topic5 = "Software Expertise";

const softwareTools = [
  "MATLAB",
  "Image J",
  "Origin Lab",
  "SPSS",
  "MS Word/Excel/PowerPoint"
];


const Info = () => {
 
  return (
    <>
      <div className="main-container">
        <div className="content ">
          
          <div className="image-container">
            <img src={imageUrl} alt="me" className="image" />
            <div className="font-sans text-xl font-medium sm: heading">
         <ul className="flex flex-col list-none">

        
         <div class="header-container">
        <h1 class="formal-heading">ASHISH_SHARMA</h1>
        </div>
            
            <li className="text-slate-600  flex justify-center">Ph.D. research scholar </li><br />
            <li className="text-slate-600  flex justify-center">Department of Civil Engineering </li><br />
            <li className="text-slate-600  flex justify-center"> Indian Institute of Technology Guwahati, India </li><br />
            <li className='flex justify-center'><img src={logo7} className="h-4 " alt="#" /><a href="mailto:ashishsharma@iitg.ac.in" className='flex justify-center items-center mx-4'> ashishsharma@iitg.ac.in</a></li>
            <li className='flex justify-center'><img src={logo8} className="h-6 w-6" alt="#" /><a href="tel:+91-701840-9325" className='flex justify-center items-center'> + 91 701840-9325</a></li>
        
            <li><div className="logo-container">
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
          </div></li>
          
          </ul>
         </div>
          </div>
  
    


        

      <div className="topic-points">
        <div className="flex justify-center p-2 bg-slate-400">
           <h2 >Education</h2>
            
        </div>
      <table>
       
        <tbody className="disc-bullets text-2xl font-sans">
          {educationData.map((item, index) => (
            <tr key={index}>
              <td>{item.year}</td>
              <td>{item.point}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <Points topic={topic} points={points}  />


    <div class="container-intrest">
        <div class="list-container">
        <Points topic={topic2} points={intrestPoints}  />

        </div>
        <div class="divider"></div>
        <div class="list-container">
        <Points topic={topic3} points={Reviewer}  />

        </div>
    </div>
    <div class="list-container">
        <Points topic={topic4} points={TechingAssit}  />

 </div>
 <div class="list-container">
        <Points topic={topic5} points={softwareTools}  />

 </div>


 









       
 </div>





       
         
      
      </div>
    </>
  );
};

export default Info;
