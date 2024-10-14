import React, { useEffect } from "react";
import WestIcon from '@mui/icons-material/West';

function OurServices() {
    const items = [
        {name: 'Talk To Expert',        img: '/img/talkToExpert.png'},
        {name: 'Book Oppintment',       img: '/img/appointment.png'},
        {name: 'Video Consultation',    img: '/img/video-consultation.png'},
        {name: 'Second Opinion',        img: '/img/second-openion.png'},
    ];
    const cardWidth = 312;
    useEffect(()=> {
        let cardSpace = 0;
        document.querySelectorAll('.ourServices').forEach((treatmentCard)=> {
            const scrollCont = document.querySelector('.services-container').offsetWidth;
            let margin = 0
            if(scrollCont < 800) {
                margin = (scrollCont - (treatmentCard.offsetWidth*2))/4;
            } else {
                margin = (scrollCont - (treatmentCard.offsetWidth*4))/8;
            }
            treatmentCard.style.marginLeft = `${margin}px`;
            treatmentCard.style.marginRight = `${margin}px`;
            cardSpace = treatmentCard.offsetWidth+(2*margin);
        });
        document.querySelector('.scroll-services').style.width = `${cardSpace * items.length}px`;
    }, [[items.length]])

    function nextOurServicesScroll() {
        const scrollValue = document.querySelector('.ourServices').offsetWidth + (2 * Number(document.querySelector('.ourServices').style.marginLeft.replace('px', '')));
        let idx = 1;
        const intervalId = setInterval(()=>{
            document.querySelector('.services-container').scrollBy(-4, 0);
            idx +=4;
            if(idx >= scrollValue) clearInterval(intervalId);
        }, 1);
    }

    function prevOurServicesScroll() {
        const scrollValue = document.querySelector('.ourServices').offsetWidth + (2 * Number(document.querySelector('.ourServices').style.marginLeft.replace('px', '')));
        let idx = 1;
        const intervalId = setInterval(()=>{
            document.querySelector('.services-container').scrollBy(4, 0);
            idx +=4;
            if(idx >= scrollValue) clearInterval(intervalId);
        }, 1);
    }

    return (
        <>
            <div className="border-b border-dotted border-gray-500 rounded-b-3xl mb-10 pb-4 w-[98vw] m-auto">
                <div className="flex justify-between bg-gradient-to-r from-cyan-200 via-blue-300 to-blue-400 rounded-t-lg mt-9 mb-5 overflow-hidden items-center px-3">
                    <h2 className="text-xl sm:text-3xl font-serif font-bold py-1" style={{fontFamily: `"Ubuntu", sans-serif`, fontWeight: '700', fontStyle: 'italic'}}>Our Services</h2>
                    <div className={`${items.length > 4? 'flex': 'hidden'}`}>
                        <button onClick={nextOurServicesScroll} className="w-8 sm:w-11 h-6 sm:h-8 flex justify-center items-center bg-transparent text-xl font-bold shadow-3dUnclicked active:shadow-3dClicked rounded-md sm:rounded-full mr-4"><WestIcon className="text-white w-8 h-full" fontSize="small"/></button>
                        <button onClick={prevOurServicesScroll} className="w-8 sm:w-11 h-6 sm:h-8 flex justify-center items-center bg-transparent text-xl font-bold shadow-3dUnclicked active:shadow-3dClicked rounded-md sm:rounded-full "><WestIcon className="w-8 text-white rotate-180" fontSize="small"/></button>
                    </div>
                </div>

                <div className="services-container overflow-x-auto">
                    <div className="scroll-services">
                    {
                        items.map((item, idx) => {
                            return (
                                <div key={idx} className="ourServices inline-block sm:w-64 w-[166px] shadow-[2px_2px_5px_gray] rounded-xl my-2 overflow-hidden cursor-pointer">
                                    <img src={item.img} alt="" className="w-[100%] aspect-[16/9] object-cover" />
                                    <p className="services-text text-center text-md font-bold m-1 py-1 rounded-lg text-cyan-900 transition-colors duration-[0.5s]">{item.name}</p>
                                </div>
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