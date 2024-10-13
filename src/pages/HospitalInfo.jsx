import React from "react";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import UserInfo from "../components/UserInfo";
import hospitalsData from "../data/hospitalsData";

function HospitalInfo({name}) {

    const hospitalInfo = hospitalsData[name];

    useEffect(() => {
        document.querySelector('body').style.background = '#f7f0f0';
    }, []);

  return (
    <>
      <Navbar />
        <div className="flex justify-between w-full px-4 py-5 font-mono z-0" style={{ fontFamily: 'Ubuntu, sans-serif', fontWeight: 500 }}>
            <div className="w-[48%] z-0">
              <img
                src={hospitalInfo.img}
                alt={hospitalInfo.name}
                className="block sticky top-12 z-0 aspect-[16/11] w-full object-cover rounded-[30px_0_30px_0]"
              />
            </div>

            <div className="w-[50%] overflow-hidden rounded-lg bg-white">
              <h1 className="text-3xl text-center text-white font-serif px-1 py-2 mb-4 bg-violet-500">About Hospital</h1>
              <div className="mx-3">
                <h1 className="text-2xl font-bold">{hospitalInfo.name}</h1>
                <p className="text-sm font-semibold">{hospitalInfo.location}</p>
                {hospitalInfo.contents.map((content, index) => (
                  <div key={index}>
                    {content.heading && <h2 className="text-xl font-bold mt-4">{content.heading}</h2>}
                    {content.subHeading && <p className="text-sm font-semibold">{content.subHeading}</p>}
                    {content.description && <p className="text-sm">{content.description}</p>}
                  </div>
                ))}
              </div>
            </div>
        </div>
        
        <div className="flex justify-center items-center my-28">
            <div className="w-[50%]">
                <h2 className="text-xl font-bold mt-4">Contact Us</h2>
                <p className="text-sm">{hospitalInfo.name}</p>
                <p className="text-sm">{hospitalInfo.contactInfo}</p>
                <p className="text-sm">Phone: +918090124099</p>
                <p className="text-sm">Email: noman@gmail.com</p>
                <p className="text-sm">Website: www.rootmedix.com</p>
            </div>
            <div className="w-[25%] overflow-hidden rounded-xl">
                <UserInfo/>
            </div>
        </div>
    </>
  );
}

export default HospitalInfo;