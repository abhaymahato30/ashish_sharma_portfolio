import React from 'react';

const Points = ({ topic, points }) => {
    return (
      <div className="topic-points">
   
        <div className="flex justify-center p-2 bg-slate-400">
        <h2>{topic}</h2>

            
        </div>
        <ul className="disc-bullets text-2xl font-sans">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    );
  };
  export default Points