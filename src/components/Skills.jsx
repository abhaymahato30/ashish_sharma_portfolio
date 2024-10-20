import React from 'react';
import word from "../assets/word.png";
import spss from "../assets/spss.png";
import matlab from "../assets/matlab.png";
import powerpoint from "../assets/powerpoint.png";
import excel2 from "../assets/excel2.png";
import originlab from "../assets/originlab.jfif";

const skillsData = [
  { src: word, alt: "Microsoft Word", label: "Word" },
  { src: matlab, alt: "MATLAB", label: "MATLAB" },
  { src: excel2, alt: "Microsoft Excel", label: "EXCEL" },
  { src: spss, alt: "SPSS", label: "SPSS" },
  { src: originlab, alt: "OriginLab", label: "ORIGINLAB" },
  { src: powerpoint, alt: "Microsoft PowerPoint", label: "POWERPOINT" },
];

const Skills = () => {
  return (
    <div className="flex flex-col h-[130vh] md:h-screen items-center justify-center bg-slate-800 px-6 md:px-60">
      <h1 className="text-5xl font-bold text-white mb-8">MY SKILLSET</h1>
      <ul className="container flex flex-wrap justify-center gap-10">
        {skillsData.map(({ src, alt, label }) => (
          <li
            key={label}
            className='flex flex-col justify-center items-center text-white text-3xl transition-transform duration-200 hover:scale-110'
          >
            <img 
              src={src} 
              alt={alt} 
              className='rounded-full w-16 h-16 sm:w-20 sm:h-20' 
            />
            <p>{label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
