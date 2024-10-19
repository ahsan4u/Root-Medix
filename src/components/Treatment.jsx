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

    // function nextTreatment() {
    //     const scrollValue = treatmentsRef.current[0].offsetWidth +1 + (2 * Number(treatmentsRef.current[0].style.marginLeft.replace('px', '')));
    //     console.log(scrollValue)
    //     let idx = 2;
    //     const intervalId = setInterval(()=>{
    //         treatmentContainer.current.scrollBy(-2, 0);
    //         idx +=2;
    //         if(idx >= scrollValue+0.9) clearInterval(intervalId);
    //     }, 1);
    // }
    // useEffect(()=>{
    //     // function prevTreatment() {
    //     const intervalId = setInterval(()=>{

    //         const scrollValue = treatmentsRef.current[0].offsetWidth + (2 * (treatmentsRef.current[0].style.marginLeft.replace('px', '')));
    //         let idx = 2;
    //         const intervalId = setInterval(()=>{
    //             treatmentContainer.current.scrollBy(2, 0);
    //             idx +=2;
    //             if(idx >= scrollValue+0.9) clearInterval(intervalId);
    //         }, 1);
    //     }, 5000)

    //     // }
    // })

    return (
        <div className="border-b border-dotted border-gray-500 rounded-b-3xl mb-10 sm:mb-16 w-[98vw] m-auto">
            <div className="flex justify-between bg-gradient-to-r from-cyan-200 via-blue-300 to-blue-400 rounded-t-lg mt-9 sm:mb-5 mb-2 overflow-hidden items-center px-3">
                <h2 className="sm:text-3xl text-xl font-serif font-bold py-1" style={{fontFamily: `"Ubuntu", sans-serif`, fontWeight: '700', fontStyle: 'italic'}}>{heading}</h2>
                {/* <div className={`${treatments.length > 6? 'flex': 'hidden'}`}>
                        <button onClick={nextTreatment} className="w-8 sm:w-11 h-6 sm:h-8 flex justify-center items-center bg-transparent text-xl font-bold shadow-3dUnclicked active:shadow-3dClicked rounded-md sm:rounded-full mr-4"><WestIcon className="text-white w-8 h-full" fontSize="small"/></button>
                        <button onClick={prevTreatment} className="w-8 sm:w-11 h-6 sm:h-8 flex justify-center items-center bg-transparent text-xl font-bold shadow-3dUnclicked active:shadow-3dClicked rounded-md sm:rounded-full "><WestIcon className="w-8 text-white rotate-180" fontSize="small"/></button>
                </div> */}
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