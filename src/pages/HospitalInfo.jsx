import React from "react";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import UserInfo from "../components/UserInfo";
import hospitalsData from "../data/hospitalsData";
import OurServices from "../components/OurServices";
import BestHospital from "../components/BestHospital";
import Footer from "../components/footer";

function HospitalInfo({name}) {

  const hospitalInfo = hospitalsData[name];

  return (
    <>
      <Navbar />
        <div className="flex justify-between w-full px-10 py-5" >
            <div className="w-[73%] overflow-hidden rounded-lg drop-shadow-xl" style={{fontFamily: `"Convergence", sans-serif`}}>
              
              <div className="flex justify-between">
                <div className="bg-cyan-900 text-white w-[80%]">
                  <h1 className="text-2xl font-bold mt-5 ml-7" >{hospitalInfo.name}</h1>
                  <div className="mt-4 ml-7">
                    <p className="text-sm font-semibold">Location: <span className="font-normal text-xs">{hospitalInfo.location.address}</span></p>
                    <p className="text-sm font-semibold">Beds: <span className="font-normal text-xs">{hospitalInfo.location.beds}</span></p>
                    <p className="text-sm font-semibold">Airport: <span className="font-normal text-xs">{hospitalInfo.location.airport}</span></p>
                  </div>
                </div>
                <img src={hospitalInfo.img} alt=""  className="h-44"/>
              </div>

              <div className=" px-10 bg-[#faf6f6]">
                {hospitalInfo.contents.map((content, index) => (
                  <div key={index}>
                    {content.heading && <h2 className="text-xl font-bold pt-4" >{content.heading}</h2>}
                    {content.subHeading && <p className="text-justify text-sm font-semibold" >{content.subHeading}</p>}
                    {content.description && <p className="text-justify text-sm">{content.description}</p>}
                    {content.points && (
                      <ul className="list-disc px-7" >
                        {
                          content.points.map((point, idx)=> {
                            return(
                              <li className="text-sm">{point}</li>
                            )
                          })
                        }
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-[25%]">
              <div className="w-full min-w-72 drop-shadow-xl overflow-hidden rounded-xl sticky top-12 bg-gradient-to-b from-white via-violet-50 to-violet-300">
                <UserInfo/>
              </div>
            </div>
        </div>
        
        <div className=" mt-8 flex justify-center">
            <div className="w-[90%] border border-black rounded-lg p-4">
                <h2 className="text-xl font-bold">Contact Us</h2>
                <p className="text-sm">{hospitalInfo.name}</p>
                <p className="text-justify text-sm">{hospitalInfo.contactInfo}</p>
                <p className="text-sm">Phone: +918090124099</p>
                <p className="text-sm">Email: noman@gmail.com</p>
                <p className="text-sm">Website: www.rootmedix.com</p>
            </div>
        </div>
        <OurServices/>
        <BestHospital/>
        <Footer/>
    </>
  );
}

export default HospitalInfo;