import React from 'react'
import Navbar from '../components/Navbar/Navbar'

import Points from '../components/Points'
import Footer from '../components/Footer/Footer'
import micperson from  "../assets/micperson.webp"



const Research = () => {
  const topic = "Invited Lecture";
  const points = [
    "Invited lecture on 'Distresses in Flexible Pavements: Cause and Identification' in the training programme on 'Design, Construction, and Maintenance of Flexible Pavement' on 14th & 15th November 2022, at Rural Connectivity Training & Research Centre, Assam.",
    "Invited lecture on 'Distresses in Rigid Pavements: Cause and Identification' in the training programme on 'Design, Construction, and Maintenance of Rigid Pavement' on 22nd & 23rd December 2022, at Rural Connectivity Training & Research Centre, Assam.",
    "Invited lecture on 'Open-Graded Friction Courses for Enhanced Safety in High Rainfall Regions of India' in the 'Road Safety Auditing' training program on 30th May 2023 at Rural Connectivity Training & Research Centre, Assam."
];
  
 



  return (
    <>
    <Navbar/>
    {/* <Hero tittle="Invited Lecture"/> */}
    <div className='bg-slate-800  md:h-screen p-4 flex justify-center items-center flex-col'>
      <img src={micperson} alt=""  className=' h-40 w-40 md:h-72 md:w-72 rounded-full'/>

    <Points topic={topic} points={points}/>

    </div>
    <Footer/>

    
 </>
  )
}

export default Research


