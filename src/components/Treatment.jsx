import React from "react";
import { useEffect, useRef } from "react";

function Treatment() {
    const items = [
        {name: 'Cardiology',        img: '/T-cardiology.jpg'},
        {name: 'Spine',             img: '/T-spine.jpg'},
        {name: 'Spine',             img: '/T-spine2.png'},
        {name: 'Gastroenterology',  img: '/T-gastroenterology.jpg'},
        {name: 'Orthopadic',        img: '/T-spine.png'},
        {name: 'Urology',           img: '/T-urology.png'},
    ];

    useEffect(()=> {
        document.querySelector('.scroll-treatment').style.width = `${208 * items.length}px`;
    }, [[items.length]])

    function nextTreatment() {
        let idx = 1;
        const intervalId = setInterval(()=>{
            document.querySelector('.treatment-container').scrollBy(-6, 0);
            idx +=6;
            if(idx >=205.2) clearInterval(intervalId);
        }, 1);
    }

    function prevTreatment() {
        let idx = 1;
        const intervalId = setInterval(()=>{
            document.querySelector('.treatment-container').scrollBy(4, 0);
            idx +=4;
            if(idx >=205.2) clearInterval(intervalId);
        }, 1);
    }

    return (
        <div className="border-b border-dotted border-gray-500 rounded-b-3xl mb-16 w-[98vw] m-auto">
            <div className="flex justify-between bg-gradient-to-r from-cyan-200 via-blue-300 to-blue-400 rounded-t-lg mt-9 mb-5 overflow-hidden items-center px-3">
                <h2 className="text-3xl font-serif font-bold py-1" style={{fontFamily: `"Ubuntu", sans-serif`, fontWeight: '700', fontStyle: 'italic'}}>Browse by Specialist</h2>
                <div className={`${items.length > 6? 'block': 'hidden'}`}>
                    <button onClick={nextTreatment} className="w-8 bg-cyan-200 text-xl font-bold shadow-inner shadow-slate-500 active:shadow-slate-700 rounded-full pb-1 mr-4">{'<'}</button>
                    <button onClick={prevTreatment} className="w-8 bg-cyan-200 text-xl font-bold shadow-inner shadow-slate-500 active:shadow-slate-700 rounded-full pb-1 ">{'>'}</button>
                </div>
            </div>

            <div className="treatment-container overflow-x-auto mb-4">
                <div className="scroll-treatment flex gap-8 px-[20px]">
                {
                    items.map((item, idx) => {
                        return (
                            <div key={idx} className="treatment cursor-pointer block shadow-[2px_2px_5px_gray] rounded-xl p-2 m-2">
                                <img src={item.img} alt="" className="w-36 aspect-[16/17.5] object-cover rounded-lg shadow-[2px_2px_5px_gray]" />
                                <p className="treatment-name text-center font-bold mt-3 mb-1 pb-1 text-cyan-900 border rounded-lg transition-colors duration-[0.5s]">{item.name}</p>
                            </div>
                        );
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default Treatment;