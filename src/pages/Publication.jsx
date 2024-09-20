import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero'
import Points from '../components/Points'



const Publication = () => {

  const topic = "International Journals";
  const points = [
    "Sharma, A., Choudhary, R., & Kumar, A. (2024). Laboratory Investigation of Draindown Behavior of Open-Graded Friction-Course Mixtures Containing Banana and Sugarcane Bagasse Natural Fibers. Transportation Research Record, 2678(1), 366-380. https://doi.org/10.1177/03611981231170875   [SCIE]",
    "Sharma, A., Choudhary, R., & Kumar, A. (2023). Stabilization of open-graded asphalt friction course mixes with plant-based natural fibers. Materials Today: Proceedings, https://doi.org/10.1016/j.matpr.2023.03.202  [SCOPUS]",
    "Sharma, A., Choudhary R., Kumar, A., Dash S.B. (2024). Mix design-based laboratory investigation of open-graded friction course mixes incorporating agro-waste derived natural fibers. Journal of Testing and Evaluation [SCIE], In Press",
    "Sharma, A., Choudhary R., Kumar, A., Dash S.B. (2024). A Study on Optimization of Agro-waste Derived Fiber Parameters for Application in Open-Graded Asphalt Friction Course Mixtures. Journal of Testing and Evaluation [SCIE] In Press",
    "Dash S.B., Choudhary R., Kumar A., Sharma, A. (2024). Characterization of Asphalt-Filler Mastics with Industrial By-Products as Fillers Under the Coupled Effect of Aging and Moisture. Transportation Research Record. https://doi.org/10.1177/03611981241240763  [SCIE]",
  
    "Kumar, A., Verma, S., Choudhary, R., Bharat, T. V., Sharma, A., and Dash, B. (2024). Application of Bottom Ash with Hydrated Lime in Pavement Subgrade Construction. Current Engineering Letters and Reviews, Benthem Science Publisher. https://doi.org/10.2174/012666948x269902231204073418"
  ];

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
  <Hero tittle="Publication"/>
  <Points topic={topic} points={points}  />
  <Points topic={topic2} points={points2} />
  <Points topic={topic3} points={points3} />
  <Points topic={topic4} points={points4} />




    
    </>
  )
}

export default Publication