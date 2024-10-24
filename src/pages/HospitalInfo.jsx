import React from "react";
import UserInfo from "../components/UserInfo";
import hospitalsData from "../data/hospitalsData";
import treatmentData from '../data/treatmentData';
import TreatmentCard from "../components/TreatmentCard";
import ScrollDiv from "../components/ScrollDiv";
import ServiceCard from '../components/ServiceCard';
import servicesData from '../data/servicesCardData';


function HospitalInfo({ name }) {

  const hospitalInfo = hospitalsData[name];
  const newTreatment = treatmentData[name];

  return (
    <>
      <div className="sm:flex justify-between px-2 sm:px-5 py-3 bg-[#f7ffff]" >
        
        <div className="overflow-hidden rounded-lg shadow-xl" style={{ fontFamily: `"Convergence", sans-serif` }}>
          <div className="flex flex-col-reverse sm:flex-row sm:justify-between overflow-hidden sm:bg-gradient-to-b from-cyan-800 via-[#15495c] to-[#0e323f]">
            <div className="text-white bg-gradient-to-b from-cyan-800 via-[#15495c] to-[#0f3542] sm:bg-none sm:p-5 py-2 my-2 px-1 rounded-lg">
              <h1 className="text-lg sm:text-2xl font-bold truncate">{hospitalInfo.name}</h1>
              <div className="mt-1 sm:mt-4 ml-1">
                <div className="flex mb-1">
                  <p className="text-sm font-semibold sm:truncate">Location:</p>
                  <span className="font-normal text-slate-300 text-xs ml-2 mt-[3px]">{hospitalInfo.location.address}</span>
                </div>
                <div className="flex mb-1">
                  <p className="text-sm font-semibold sm:truncate">Airport:</p>
                  <span className="font-normal text-slate-300 text-xs ml-2 mt-[3px]">{hospitalInfo.location.airport}</span>
                </div>
                <div className="flex mb-1">
                  <p className="text-sm font-semibold sm:truncate">Beds:</p>
                  <span className="font-normal text-slate-300 text-xs ml-2 mt-[3px]">{hospitalInfo.location.beds}</span>
                </div>
              </div>
            </div>
            <img src={hospitalInfo.img} alt="Hospital" className="aspect-[16/9] rounded-lg sm:rounded-none sm:aspect-[16/12] w-full sm:w-56 object-cover" />
          </div>

          <div className=" px-2 sm:px-10 bg-white">
            {hospitalInfo.contents.map((content, index) => (
              <div key={index}>
                {content.heading && <h2 className="text-sm sm:text-xl font-bold pt-4 sm:pt-8 text-blue-950">{content.heading}</h2>}
                {content.subHeading && <p className="sm:text-justify text-sm sm:text-sm pl-1 pt-1" >{content.subHeading}</p>}
                {content.description && <p className={`sm:text-justify text-sm sm:text-sm pl-1 pt-1 ${!content.subHeading && !content.heading &&('pt-3')}`}>{content.description}</p>}
                {content.points && (
                  <ul className="list-disc pl-5 mt-2" >
                    {
                      content.points.map((point, idx) => {
                        return (
                          <li key={idx} className="sm:text-justify text-sm sm:text-sm text-[#1f1209]">{point}</li>
                        )
                      })
                    }
                  </ul>
                )}
              </div>
            ))}

            <div className="w-[85%] py-6">
              <h2 className="text-xl font-bold text-[#111b3d]">Contact Us</h2>
              <p className="ml-1 text-sm">{hospitalInfo.name}</p>
              <p className="ml-1 text-sm text-justify">{hospitalInfo.location.address}</p>
              <p className="ml-1 text-sm">Phone: <span className="text-blue-950">+918090124099</span></p>
              <p className="ml-1 text-sm">Email: <span className="text-blue-950">noman@gmail.com</span></p>
              <p className="ml-1 text-sm">Website: <span className="text-blue-950">www.rootmedix.com</span></p>
            </div>
          </div>
        </div>
        
        <div className="w-72 flex-shrink-0 self-start sm:border-none mt-12 border-t border-dotted border-[#b6c0ce] sm:mt-0 sm:ml-5 shadow-xl overflow-hidden rounded-xl sticky top-12 bg-gradient-to-b from-white via-white to-blue-300">
          <UserInfo />
        </div>
      </div>

      <div className="mt-10">
        <ScrollDiv heading={'Browse by Specialist'} cardsData = {newTreatment} Card={TreatmentCard} count={6}/>          
      </div>

      <div className="mt-12">
        <ScrollDiv heading={'Our Services'} cardsData={servicesData} Card={ServiceCard}/>
      </div>
    </>
  );
}

export default HospitalInfo;