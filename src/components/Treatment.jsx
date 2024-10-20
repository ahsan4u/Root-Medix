import React from "react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import TreatmentCard from "./TreatmentCard";

function Treatment({heading, treatments}) {
    const treatmentsRef = useRef([]);
    const scrollTreatmentRef = useRef(null);
    const treatmentContainer = useRef(null);

    useEffect(()=> {
        treatmentsRef.current.forEach((treatmentCard)=> {
            const scrollCont = treatmentContainer.current.offsetWidth;
            let margin = 0;
            if(scrollCont < 700) {
                margin = (scrollCont - (treatmentCard.offsetWidth*3))/6;
            } else if(scrollCont < 1000) {
                margin = (scrollCont - (treatmentCard.offsetWidth*4))/8;
            } else if(scrollCont < 1240) {
                margin = (scrollCont - (treatmentCard.offsetWidth*6))/12;
            } else if(scrollCont < 1584) {
                margin = (scrollCont - (treatmentCard.offsetWidth*7))/14;
            } else {
                margin = (scrollCont - (treatmentCard.offsetWidth*9))/18;
            }
            treatmentCard.style.marginLeft = `${margin}px`;
            treatmentCard.style.marginRight = `${margin}px`;
        });
    }, [treatments.length])

    return (
        <div className="border-b border-dotted border-gray-500 rounded-b-3xl mb-10 sm:mb-16 w-[98vw] m-auto">
            <div className="flex justify-between bg-gradient-to-r from-cyan-200 via-blue-300 to-blue-400 rounded-t-lg mt-9 sm:mb-5 mb-2 overflow-hidden items-center px-3">
                <h2 className="sm:text-3xl text-xl font-serif font-bold py-1" style={{fontFamily: `"Ubuntu", sans-serif`, fontWeight: '700', fontStyle: 'italic'}}>{heading}</h2>
                <Link to='/giventreatments' className="font-bold">See More...</Link>
            </div>

            <div ref={treatmentContainer} className="treatment-container overflow-x-scroll">
                <div ref={scrollTreatmentRef} className="scroll-treatment flex flex-nowrap">
                {
                    treatments.map((treatment, idx) => {
                        return (
                            <Link key={idx} to={`/treatment/cardiology`}>
                            <TreatmentCard
                                name={treatment.name}
                                img={treatment.img} 
                                ref={elmnt=>treatmentsRef.current[idx]=elmnt}/>
                            </Link>
                        );
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default Treatment;