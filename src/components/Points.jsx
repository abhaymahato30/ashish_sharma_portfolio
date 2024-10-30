import React from 'react';

const Points = ({ topic, points }) => {
    return (
      <div className="topic-points">
   
        <div className="flex justify-center p-2 text-white">
    
        <h1 className="text-5xl font-bold text-white mb-8">{topic}</h1>

            
        </div>
        <ul className="disc-bullets text-xl md:text-2xl font-sans text-white">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    );
  };
  export default Points