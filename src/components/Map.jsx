import React from 'react'
import logo6 from "../assets/gmail.jpg"
import logo7 from "../assets/email.jpg"
import logo8 from "../assets/phone.svg"


const Map = () => {
  return (
    
     
      <div className="address-container ">
        <div className='flex justify-center'>
                 <h1 className='text-2xl'>Get In Touch</h1>

        </div>
        <ul className='flex flex-col justify-center items-center'>
          <li className='flex p-6'><img src={logo6} alt="#" /><a href="mailto:ashish996sharma@gmail.com" className='flex justify-center items-center p-6'>ashish996sharma@gmail.com </a></li>
          <li className='flex p-6'><img src={logo7} alt="#" /><a href="mailto:ashishsharma@iitg.ac.in" className='flex justify-center items-center p-6'> ashishsharma@iitg.ac.in</a></li>
          <li className='flex p-6'><img src={logo8} alt="#" /><a href="tel:+91-701840-9325" className='flex justify-center items-center p-6'> + 91 701840-9325</a></li>
    
        </ul>
        
      </div>

  )
}

export default Map
