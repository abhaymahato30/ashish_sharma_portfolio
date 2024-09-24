import React from 'react';

const Publi = ({ topic, points,publi_links }) => {
    return (
      <div className="topic-points">
        <h2>{topic}</h2>
        <ul className="disc-bullets text-2xl font-sans">
          {points.map((point, index) => (
            <li key={index}>{point} <a  key={index}  href={publi_links}>{publi_links}</a>
         
            </li>
            
          ))}
        </ul>
      </div>
    );
  };
  export default Publi