import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero'
import Points from '../components/Points'
import Publi from '../components/Publi'



const Publication = () => {



  const topic2 = "International Conferences";
  const points2 = [
      "Sharma, A., Choudhary R., and Kumar, A. (2022). Stabilization of Open Graded Asphalt Friction Course Mixes with Plant-Based Natural Fibers. Second International Conference on Construction Materials and Structures (ICCMS-2022). NIT Calicut, Kerala, India.",
      "Sharma, A., Choudhary R., and Kumar, A. (2023). Evaluation of Draindown Characteristics of OGFC mixes with Natural Fibers from Waste Pineapple Leaves. 3rd International Conference on Recent Developments in Sustainable Infrastructure (ICRDSI-2023). KIIT Bhubaneswar, India.",
      "Sharma, A., Choudhary R., and Kumar, A. (2023). Laboratory Investigation on Draindown Behavior of Open-Graded Friction Course Mixtures Containing Banana and Sugarcane Bagasse Natural Fibers. Transportation Research Board (TRB) 102nd Annual Meeting, Washington, D.C., U.S.A., January 2023.",
      "Sharma, A., Choudhary R., Kumar A., Dash S.B. (2024). Characterization of Ravelling Potential of Natural Fiber-reinforced OGFC Mixes Under Various Environmental Conditions with Machine Learning Algorithms. Transportation Research Board (TRB) 103rd Annual Meeting, Washington, D.C., U.S.A., January 2024.",
      "Sharma, A., Choudhary, R., Kumar, A., and Dash, S.B. (2024). A Review of Maintenance Strategies for Open Graded Asphalt Friction Course, 21st Annual International Conference on Pavement Engineering, Asphalt Technology and Infrastructure, Liverpool John Moores University, Liverpool, UK, Feb 28-29, 2024",
    
      "Dash S.B., Choudhary R., Kumar A., Sharma, A. (2024). Characterization of Asphalt-Filler Mastics with Industrial By-Products as Fillers Under the Coupled Effect of Aging and Moisture. Transportation Research Board (TRB) 103rd Annual Meeting, Washington, D.C., U.S.A., January 2024.",
      "Sharma, S., Sharma, A., and Guleria, S.P. (2018). Stabilization of Soil Using Lime Gypsum and Jute Fiber. International Conference on Pavements and Computational Approaches (ICOPAC-2018). CSIR-Central Road Research Institute, New Delhi, India"
    
  
  ];

  const topic3 = "General Articles";
  const points3 = [
    "Sharma, A., Choudhary R., Kumar, A., and Dash, S.B. (2024). Application of Bio-waste Fibers in Bituminous Mixes. Civil Engineering and Construction Review (CE & CR).",
    "Dash, S.B., Choudhary R., Kumar, A. and Sharma, A. (2024). Application of Stone Matrix Asphalt Mixes as a Strong and Durable Wearing Course for Bituminous Pavements. Civil Engineering and Construction Review (CE & CR).",
    
  
  ];
  const topic4 = "Book Chapters";
  const points4 = [
    "Sharma, A., Choudhary R., and Kumar, A. (2024). Evaluation of Draindown Characteristics of OGFC mixes with Natural Fibers from Waste Pineapple Leaves. Recent Developments in Sustainable Infrastructure (ICRDSI-2023)-Structure and Construction Management, Lecture Notes in Civil Engineering, Springer. [Scopus]",
    
  
  ];



  return (
    <>
   <Navbar/>
  {/* <Hero tittle="Publication"/> */}
 <div className='bg-slate-900 text-gray-100 '>

 <div className="topic-points">
  <div className="flex justify-center p-2 ">

  
  <h1 className="text-5xl font-bold text-white mb-8">International Journals</h1>

            
        </div>
        <ul className="disc-bullets text-2xl font-sans">
        
            <li>
            Sharma, A., Choudhary, R., & Kumar, A. (2024). Laboratory Investigation of Draindown Behavior of Open-Graded Friction-Course Mixtures Containing Banana and Sugarcane Bagasse Natural Fibers. Transportation Research Record, 2678(1), 366-380. <a target="_blank" href="https://doi.org/10.1177/03611981231170875"><p className="text-blue-400">https://doi.org/10.</p></a>   [SCIE]
            </li>
        <li>
        Sharma, A., Choudhary, R., & Kumar, A. (2023). Stabilization of open-graded asphalt friction course mixes with plant-based natural fibers. Materials Today: Proceedings, <a href="https://doi.org/10.1016/j.matpr.2023.03.202" target="_blank"><p className='text-blue-400'>https://doi.org/10.</p> </a>  [SCOPUS]

        </li>
        <li>
        Sharma, A., Choudhary R., Kumar, A., Dash S.B. (2024). Mix design-based laboratory investigation of open-graded friction course mixes incorporating agro-waste derived natural fibers. Journal of Testing and Evaluation [SCIE], In Press
        </li>
        <li>
        Sharma, A., Choudhary R., Kumar, A., Dash S.B. (2024). A Study on Optimization of Agro-waste Derived Fiber Parameters for Application in Open-Graded Asphalt Friction Course Mixtures. Journal of Testing and Evaluation [SCIE] In Press
        </li>
        <li>
        Dash S.B., Choudhary R., Kumar A., Sharma, A. (2024). Characterization of Asphalt-Filler Mastics with Industrial By-Products as Fillers Under the Coupled Effect of Aging and Moisture. Transportation Research Record. <a href="https://doi.org/10.1177/03611981241240763 " target="_blank"><p className='text-blue-400'>https://doi.org/10.</p></a> [SCIE]
        </li>
        <li>
        Kumar, A., Verma, S., Choudhary, R., Bharat, T. V., Sharma, A., and Dash, B. (2024). Application of Bottom Ash with Hydrated Lime in Pavement Subgrade Construction. Current Engineering Letters and Reviews, Benthem Science Publisher. <a href="https://doi.org/10.2174/012666948x269902231204073418" target="_blank" ><p className='text-blue-400'>https://doi.org/10.</p></a>
        </li>
            
         
        </ul>
  </div>
 </div>

<div className='bg-slate-900'>

<Points topic={topic2} points={points2} />


</div>

<div className='bg-slate-900'>
<Points topic={topic3} points={points3} />


</div>
<div className='bg-slate-900'>
<Points topic={topic4} points={points4} />



</div>






    
    </>
  )
}

export default Publication
