import React, { useEffect } from "react";
import { Link } from "react-router-dom";
function OurServices() {
    const items = [
        {name: 'Talk To Expert',        img: './img/services/talkToExpert.png'},
        {name: 'Book Oppintment',       img: './img/services/appointment.png'},
        {name: 'Video Consultation',    img: './img/services/video-consultation.png'},
        {name: 'Second Opinion',        img: './img/services/second-openion.png'},
    ];
    useEffect(()=> {
        document.querySelectorAll('.ourServices').forEach((servicesCard)=> {
            const scrollCont = document.querySelector('.services-container').offsetWidth;
            let margin = 0
            if(scrollCont < 800) {
                margin = (scrollCont - (servicesCard.offsetWidth*2))/4;
            } else if(scrollCont < 1200){
                margin = (scrollCont - (servicesCard.offsetWidth*3))/6;
            } else {
                margin = (scrollCont - (servicesCard.offsetWidth*4))/8;
            }
            servicesCard.style.marginLeft = `${margin}px`;
            servicesCard.style.marginRight = `${margin}px`;
        });
    }, [[items.length]])

    return (
        <>
            <div className="border-b border-dotted border-gray-500 rounded-b-3xl mb-10 w-[98vw] m-auto">
                <div className="flex justify-between bg-gradient-to-r from-cyan-200 via-blue-300 to-blue-400 rounded-t-lg mt-9 mb-5 overflow-hidden items-center px-3">
                    <h2 className="text-xl sm:text-3xl font-serif font-bold py-1" style={{fontFamily: `"Ubuntu", sans-serif`, fontWeight: '700', fontStyle: 'italic'}}>Our Services</h2>
                </div>

                <div className="services-container overflow-x-scroll">
                    <div className="scroll-services flex">
                    {
                        items.map((item, idx) => {
                            return (
                                <Link key={idx} to='/'>
                                <div className="ourServices sm:w-64 w-[166px] shadow-[2px_2px_5px_gray] rounded-xl my-2 overflow-hidden cursor-pointer">
                                    <img src={item.img} alt="" className="w-[100%] aspect-[16/9] object-cover" />
                                    <p className="services-text text-center text-md sm:text-2xl font-bold m-1 py-1 rounded-lg text-cyan-900 transition-colors duration-[0.5s]">{item.name}</p>
                                </div>
                                </Link>
                            );
                        })
                    }
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurServices;