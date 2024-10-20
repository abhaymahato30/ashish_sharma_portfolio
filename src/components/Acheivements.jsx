import React from "react";
import acheive from "../assets/acheive.jpg"
const Acheivements = () => {
  return (

        <div>
        <section>
          <div className="bg-slate-700 text-white py-8">
            <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
              <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
                <p className="ml-2 text-yellow-300 uppercase tracking-loose">
                  Working Process
                </p>
                <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
                My Achievements
                </p>
                <p className="text-sm md:text-base text-gray-50 mb-4">
                Charting My Path: A Showcase of My Achievements and Experiences
                </p>
                <img src={acheive} alt="" className="rounded-full" />
                <a
                  href="#"
                  className="bg-transparent m-4 flex justify-center hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
                >
                 Connect Now
                </a>
              </div>
              <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
                <div className="container mx-auto w-full h-full">
                  <div className="relative wrap overflow-hidden p-10 h-full">
                    <div
                      className="border-2-2 border-yellow-555 absolute h-full border"
                      // style="right: 50%; border: 2px solid #FFC100; border-radius: 1%;"
                    ></div>
                    <div
                      className="border-2-2 border-yellow-555 absolute h-full border"
                      // style="left: 50%; border: 2px solid #FFC100; border-radius: 1%;"
                    ></div>
                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                      <div className="order-1 w-5/12"></div>
                      <div className="order-1 w-5/12 px-1 py-4 text-right">
                        <p className="mb-3 text-base text-yellow-300">
                          1-6 May, 2021
                        </p>
                        <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Best Paper Award for the paper
                        </h4>
                        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Sharma, A., Choudhary, R., and Kumar, A. (2022).Stabilization of open-graded asphalt friction course mixes with plant-based natural fibers In the Second International Conference on Construction Materials and Structures (ICCMS-2022), NIT Calicut, Kerala, India.
                        </p>
                      </div>
                    </div>
                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                      <div className="order-1 w-5/12"></div>
                      <div className="order-1  w-5/12 px-1 py-4 text-left">
                        <p className="mb-3 text-base text-yellow-300">
                          6-9 May, 2021
                        </p>
                        <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Doctoral fellowship
                        </h4>
                        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Doctoral fellowship from the Ministry of Education, Government of India (2021-Present).
                        </p>
                      </div>
                    </div>
                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                      <div className="order-1 w-5/12"></div>
                      <div className="order-1 w-5/12 px-1 py-4 text-right">
                        <p className="mb-3 text-base text-yellow-300">
                          {" "}
                          10 May, 2021
                        </p>
                        <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Masters fellowship
                        </h4>
                        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Masters fellowship from the Ministry of Human Resource Development, Government of India (2019-2021).
                        </p>
                      </div>
                    </div>
  
                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                      <div className="order-1 w-5/12"></div>
  
                      <div className="order-1  w-5/12 px-1 py-4">
                        <p className="mb-3 text-base text-yellow-300">12 May, 2021</p>
                        <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">
                        39th position in the Matriculation examination
                        </h4>
                        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Awarded merit certificate from Himachal Pradesh Board of School Education Dharamshala for securing 39th position in the Matriculation examination
                        </p>
                      </div>
                    </div>
                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                      <div className="order-1 w-5/12"></div>
                      <div className="order-1 w-5/12 px-1 py-4 text-right">
                        <p className="mb-3 text-base text-yellow-300">
                          {" "}
                          10 May, 2021
                        </p>
                        <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Received a reward of Rs 75000/-
                        </h4>
                        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Received a reward of Rs 75000/- as a one-time incentive from Govt. of Himachal Pradesh under the scheme titled “Mukhyamantri Protsahan Yojana Himachal Pradesh
                        </p>
                      </div>
                    </div>
                  </div>
                  <img
                    className="mx-auto "
                    src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Acheivements;
