import React, { useEffect } from "react";

function OurServices() {
    const items = [
        {name: 'Talk To Expert',        img: '/talkToExpert.png'},
        {name: 'Book Oppintment',       img: '/appointment.png'},
        {name: 'Video Consultation',    img: '/video-consultation.png'},
        {name: 'Second Opinion',        img: '/second-openion.png'},
    ];
    const cardWidth = 312;
    useEffect(()=> {
        document.querySelector('.scroll-hospital').style.width = `${cardWidth * items.length}px`;
    }, [[items.length]])

    function nextOurServicesScroll() {
        let idx = 1;
        const intervalId = setInterval(()=>{
            document.querySelector('.hospital-container').scrollBy(-6, 0);
            idx +=6;
            if(idx >=cardWidth) clearInterval(intervalId);
        }, 1);
    }

    function prevOurServicesScroll() {
        let idx = 1;
        const intervalId = setInterval(()=>{
            document.querySelector('.hospital-container').scrollBy(6, 0);
            idx +=6;
            if(idx >=cardWidth) clearInterval(intervalId);
        }, 1);
    }

    return (
        <>
            <div className="border-b border-dotted border-gray-500 rounded-b-3xl mb-16 w-[98vw] m-auto">
                <div className="flex justify-between bg-gradient-to-r from-cyan-200 via-blue-300 to-blue-400 rounded-t-lg mt-9 mb-5 overflow-hidden items-center px-3">
                    <h2 className="text-3xl font-serif font-bold py-1" style={{fontFamily: `"Ubuntu", sans-serif`, fontWeight: '700', fontStyle: 'italic'}}>Our Services</h2>
                    <div className={`${items.length > 4? 'block': 'hidden'}`}>
                        <button onClick={nextOurServicesScroll} className="w-8 bg-cyan-200 text-xl font-bold shadow-inner shadow-slate-500 active:shadow-slate-700 rounded-full pb-1 mr-4">{'<'}</button>
                        <button onClick={prevOurServicesScroll} className="w-8 bg-cyan-200 text-xl font-bold shadow-inner shadow-slate-500 active:shadow-slate-700 rounded-full pb-1 ">{'>'}</button>
                    </div>
                </div>

                <div className="hospital-container overflow-x-auto mb-4">
                    <div className="scroll-hospital flex gap-10 px-[22px]">
                    {
                        items.map((item, idx) => {
                            return (
                                <div key={idx} className="bestHospital block w-64 shadow-[2px_2px_5px_gray] rounded-xl m-2 overflow-hidden cursor-pointer">
                                    <img src={item.img} alt="" className="w-[100%] aspect-[16/9] object-cover" />
                                    <p className="bestHospital-text text-center text-2xl font-bold m-1 py-1 rounded-xl text-cyan-900 transition-colors duration-[0.5s]">{item.name}</p>
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