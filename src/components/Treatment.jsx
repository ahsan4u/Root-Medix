import React from "react";
import { useEffect, useRef } from "react";
import WestIcon from '@mui/icons-material/West';


function Treatment() {
    const items = [
        {name: 'Cardiology',        img: '/img/T-cardiology.jpg'},
        {name: 'Spine',             img: '/img/T-spine.jpg'},
        {name: 'Gastroenterology',  img: '/img/T-gastroenterology.jpg'},
        {name: 'Orthopadic',        img: '/img/T-orthopadic.png'},
        {name: 'Urology',           img: '/img/T-urology.png'},
        {name: 'Urology',           img: '/img/T-urology.png'},
        {name: 'Urology',           img: '/img/T-urology.png'},
        {name: 'Urology',           img: '/img/T-urology.png'},
        {name: 'Urology',           img: '/img/T-urology.png'},
        {name: 'Urology',           img: '/img/T-urology.png'},
        {name: 'Urology',           img: '/img/T-urology.png'},
        {name: 'Urology',           img: '/img/T-urology.png'},
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
        <div className="border-b border-dotted border-gray-500 rounded-b-3xl mb-10 sm:mb-16 w-[98vw] m-auto">
            <div className="flex justify-between bg-gradient-to-r from-cyan-200 via-blue-300 to-blue-400 rounded-t-lg mt-9 sm:mb-5 mb-2 overflow-hidden items-center px-3">
                <h2 className="sm:text-3xl text-xl font-serif font-bold py-1" style={{fontFamily: `"Ubuntu", sans-serif`, fontWeight: '700', fontStyle: 'italic'}}>Browse by Specialist</h2>
                <div className={`${items.length > 6? 'flex': 'hidden'}`}>
                        <button onClick={nextTreatment} className="w-8 sm:w-11 h-6 sm:h-8 flex justify-center items-center bg-transparent text-xl font-bold shadow-3dUnclicked active:shadow-3dClicked rounded-md sm:rounded-full mr-4"><WestIcon className="text-white w-8 h-full" fontSize="small"/></button>
                        <button onClick={prevTreatment} className="w-8 sm:w-11 h-6 sm:h-8 flex justify-center items-center bg-transparent text-xl font-bold shadow-3dUnclicked active:shadow-3dClicked rounded-md sm:rounded-full "><WestIcon className="w-8 text-white rotate-180" fontSize="small"/></button>
                    </div>
            </div>

            <div className="treatment-container overflow-x-scroll">
                <div className="scroll-treatment">
                {
                    items.map((item, idx) => {
                        return (
                            <div key={idx} className="treatment inline-block sm:w-36 w-[105px] cursor-pointer shadow-[2px_2px_5px_gray] rounded-xl sm:p-2 p-1 my-2"> {/*total width: 152px */}
                                <img src={item.img} alt="" className="w-[100%] aspect-[16/17.5] object-cover rounded-lg shadow-[2px_2px_5px_gray]" />
                                <p className="treatment-name sm:text-[15px] text-[11px] text-center font-bold sm:mt-3 mt-2 mb-1 sm:p-0 p-1   text-cyan-900 border rounded-lg transition-colors duration-[0.5s]">{item.name}</p>
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