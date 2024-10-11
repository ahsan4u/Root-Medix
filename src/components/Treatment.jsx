import React from "react";
import { useEffect, useRef } from "react";

function Treatment() {
    const items = [
        {name: 'Cardiology',        img: '/T-cardiology.jpg'},
        {name: 'Spine',             img: '/T-spine.jpg'},
        {name: 'Gastroenterology',  img: '/T-gastroenterology.jpg'},
        {name: 'Orthopadic',        img: '/T-orthopadic.png'},
        {name: 'Urology',           img: '/T-urology.png'},
        {name: 'Urology',           img: '/T-urology.png'},
        {name: 'Urology',           img: '/T-urology.png'},
        {name: 'Urology',           img: '/T-urology.png'},
        {name: 'Urology',           img: '/T-urology.png'},
        {name: 'Urology',           img: '/T-urology.png'},
        {name: 'Urology',           img: '/T-urology.png'},
        {name: 'Urology',           img: '/T-urology.png'},
    ];

/* 
    card total width: 152px
    margin for 7 card is 322
    margin for 8 card is 368
    card width for 7 is 1064 min total 1386
    card width for 8 is 1216 min total 1584
*/

    useEffect(()=> {
        let cardSpace = 0;
        document.querySelectorAll('.treatment').forEach((treatmentCard)=> {
            const scrollCont = document.querySelector('.treatment-container').offsetWidth;
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
            cardSpace = treatmentCard.offsetWidth+(2*margin);
        });
        document.querySelector('.scroll-treatment').style.width = `${cardSpace * items.length}px`;
    }, [[items.length]])

    function nextTreatment() {
        const scrollValue = document.querySelector('.treatment').offsetWidth + (2 * Number(document.querySelector('.treatment').style.marginLeft.replace('px', '')));
        let idx = 1;
        const intervalId = setInterval(()=>{
            document.querySelector('.treatment-container').scrollBy(-4, 0);
            idx +=4;
            if(idx >= scrollValue) clearInterval(intervalId);
        }, 1);
    }
    
    function prevTreatment() {
        const scrollValue = document.querySelector('.treatment').offsetWidth + (2 * Number(document.querySelector('.treatment').style.marginLeft.replace('px', '')));
        let idx = 1;
        const intervalId = setInterval(()=>{
            document.querySelector('.treatment-container').scrollBy(4, 0);
            idx +=4;
            if(idx >= scrollValue) clearInterval(intervalId);
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

            <div className="treatment-container overflow-x-scroll">
                <div className="scroll-treatment">
                {
                    items.map((item, idx) => {
                        return (
                            <div key={idx} className="treatment inline-block w-36 cursor-pointer shadow-[2px_2px_5px_gray] rounded-xl p-2 my-2"> {/*total width: 152px */}
                                <img src={item.img} alt="" className="w-[100%] aspect-[16/17.5] object-cover rounded-lg shadow-[2px_2px_5px_gray]" />
                                <p className="treatment-name text-[15px] text-center font-bold mt-3 mb-1 pb-1 text-cyan-900 border rounded-lg transition-colors duration-[0.5s]">{item.name}</p>
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