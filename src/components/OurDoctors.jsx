import React from "react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import DoctorCard from "./DoctorCard";

function OurDoctors({heading, doctors}) {
    const doctorsRef = useRef([]);
    const scrollDoctorsRef = useRef(null);
    const doctorsContainer = useRef(null);

    useEffect(()=> {
        doctorsRef.current.forEach((doctorCard)=> {
            const scrollCont = doctorsContainer.current.offsetWidth;
            let margin = 0;
            if(scrollCont < 700) {
                margin = (scrollCont - (doctorCard.offsetWidth*2))/4;
            } else if(scrollCont < 1240) {
                margin = (scrollCont - (doctorCard.offsetWidth*3))/6;
            } else {
                margin = (scrollCont - (doctorCard.offsetWidth*4))/8;
            }
            doctorCard.style.marginLeft = `${margin}px`;
            doctorCard.style.marginRight = `${margin}px`;
        });
    }, [doctors.length])

    return (
        <div className="border-b border-dotted border-gray-500 rounded-b-3xl mb-10 sm:mb-16 w-[98vw] m-auto">
            <div className="flex justify-between bg-gradient-to-r from-cyan-200 via-blue-300 to-blue-400 rounded-t-lg mt-9 sm:mb-5 mb-2 overflow-hidden items-center px-3">
                <h2 className="sm:text-3xl text-xl font-serif font-bold py-1" style={{fontFamily: `"Ubuntu", sans-serif`, fontWeight: '700', fontStyle: 'italic'}}>{heading}</h2>
                {/* <Link to='/giventreatments' className="font-bold">See More...</Link> */}
            </div>

            <div ref={doctorsContainer} className="doctor-container overflow-x-scroll">
                <div ref={scrollDoctorsRef} className="scroll-doctor flex flex-nowrap">
                {
                    doctors.map((doctor, idx) => {
                        return (
                            <Link key={idx} to={`/treatment/cardiology`}>
                            <DoctorCard
                                doctor={doctor}
                                ref={elmnt=>doctorsRef.current[idx]=elmnt}/>
                            </Link>
                        );
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default OurDoctors;