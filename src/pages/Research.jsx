import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero'
import Points from '../components/Points'




const Research = () => {
  const topic = "Achievments";
  const points = [
    "Best Paper Award for the paper: Sharma, A., Choudhary, R., and Kumar, A. (2022).Stabilization of open-graded asphalt friction course mixes with plant-based natural fibers In the Second International Conference on Construction Materials and Structures (ICCMS-2022), NIT Calicut, Kerala, India.",
    "Doctoral fellowship from the Ministry of Education, Government of India (2021-Present).",
    "Masters fellowship from the Ministry of Human Resource Development, Government of India (2019-2021).",
    "Awarded merit certificate from Himachal Pradesh Board of School Education Dharamshala for securing 39th position in the Matriculation examination",
    "Received a reward of Rs 75000/- as a one-time incentive from Govt. of Himachal Pradesh under the scheme titled “Mukhyamantri Protsahan Yojana Himachal Pradesh”."
  
  ];



  return (
    <>
    <Navbar/>
    <Hero tittle="Achievements"/>
    <Points topic={topic} points={points}  />

    
 </>
  )
}

export default Research


