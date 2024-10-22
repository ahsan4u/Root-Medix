import React from "react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function ScrollDiv({heading, cardsData, Card, count}) {
    const treatmentsRef = useRef([]);
    const treatmentContainer = useRef(null);

    useEffect(()=> {
        treatmentsRef.current.forEach((treatmentCard)=> {
            const scrollCont = treatmentContainer.current.offsetWidth;
            let margin = 0;
            if(scrollCont < 700) {
                margin = (scrollCont - (treatmentCard.offsetWidth* ((count >= 6)? 3: 2)))/ ((count == 6)? 6: 4);
            } else if(scrollCont < 1000) {
                margin = (scrollCont - (treatmentCard.offsetWidth* ((count >= 6)? 4: 3)))/ ((count == 6)? 8: 6);
            } else {
                margin = (scrollCont - (treatmentCard.offsetWidth* ((count >= 6)? 6: 4)))/ ((count == 6)? 12: 8);
            }
            treatmentCard.style.paddingLeft = `${margin}px`;
            treatmentCard.style.paddingRight = `${margin}px`;
        });

    }, [cardsData.length, window.innerWidth])

    
    let idx = 100;
    setInterval(() => {
        let upperHeight = treatmentContainer.current.getBoundingClientRect().top -100;
        (window.innerWidth< 600) && (upperHeight -= (window.innerHeight/2)+200)
        if(window.scrollY > upperHeight) {
            treatmentContainer.current.scrollBy({
                top: 0,
                left: treatmentsRef.current[0].offsetWidth,
                behavior: 'smooth'
            })
        }
        idx++;
    }, 4000);

    return (
        <div className="border-b border-dotted border-gray-500 rounded-b-3xl sm:mb-16 w-[98vw] m-auto">
            <div className="flex justify-between bg-gradient-to-r from-cyan-200 via-blue-300 to-blue-400 rounded-t-lg mt-9 sm:mb-5 mb-2 overflow-hidden items-center px-3">
                <h2 className="sm:text-3xl text-xl font-serif font-bold py-1" style={{fontFamily: `"Ubuntu", sans-serif`, fontWeight: '700', fontStyle: 'italic'}}>{heading}</h2>
                <Link to='/giventreatments' className="font-bold">See More...</Link>
            </div>

            <div ref={treatmentContainer} className="treatment-container overflow-x-scroll mb-3 flex flex-nowrap snap-x snap-proximity">
                {
                    cardsData.map((cardData, idx) => {
                        return (
                            <Link 
                                key={idx}
                                to={cardData.link}
                                ref={elmnt=>treatmentsRef.current[idx]=elmnt}
                                className="snap-start"
                            >

                            <Card data={cardData}/>

                            </Link>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default ScrollDiv;