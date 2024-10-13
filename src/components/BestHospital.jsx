import React, { useEffect } from "react";
import WestIcon from '@mui/icons-material/West';

function BestHospital() {
    const items = [
        {name: 'Max Hospital, Saket',   img: '/max-saket.jpg',      place: 'New Delhi'},
        {name: 'BLK Max Hospital',      img: '/blk-max.jpg',        place: 'New Delhi'},
        {name: 'Max Hospital Dwarka',   img: '/max-dwarka.jpg',     place: 'New Delhi'},
        {name: 'Aakash Hospital',       img: '/aakash-dwarka.jpg',  place: 'New Delhi'},
        {name: 'Aakash Hospital',       img: '/aakash-dwarka.jpg',  place: 'New Delhi'},
    ];

    useEffect(()=> {
        let cardSpace = 0;
        document.querySelectorAll('.bestHospital').forEach((treatmentCard)=> {
            const scrollCont = document.querySelector('.hospital-container').offsetWidth;
            let margin = 0;
            if(scrollCont < 800) {
                margin = (scrollCont - (treatmentCard.offsetWidth*2))/4;
            } else {
                margin = (scrollCont - (treatmentCard.offsetWidth*4))/8;
            }
            treatmentCard.style.marginLeft = `${margin}px`;
            treatmentCard.style.marginRight = `${margin}px`;
            cardSpace = treatmentCard.offsetWidth+(2*margin);
        });
        document.querySelector('.scroll-hospital').style.width = `${cardSpace * items.length}px`;
    }, [[items.length]])

    function nextHospitalScroll() {
        let idx = 1;
        const intervalId = setInterval(()=>{
            document.querySelector('.hospital-container').scrollBy(-4, 0);
        const scrollValue = document.querySelector('.bestHospital').offsetWidth + (2 * Number(document.querySelector('.bestHospital').style.marginLeft.replace('px', '')));
            idx +=4;
            if(idx >= scrollValue) clearInterval(intervalId);
        }, 1);
    }

    function prevHospitalScroll() {
        const scrollValue = document.querySelector('.bestHospital').offsetWidth + (2 * Number(document.querySelector('.bestHospital').style.marginLeft.replace('px', '')));
        let idx = 1;
        const intervalId = setInterval(()=>{
            document.querySelector('.hospital-container').scrollBy(4, 0);
            idx +=4;
            if(idx >= scrollValue) clearInterval(intervalId);
        }, 1);
    }

    return (
        <>
            <div className="border-b border-dotted border-gray-500 rounded-b-3xl mb-10 sm:mb-16 w-[98vw] m-auto">
                <div className="flex justify-between bg-gradient-to-r from-cyan-200 via-blue-300 to-blue-400 rounded-t-lg mt-9 mb-5 overflow-hidden items-center px-3">
                    <h2 className="text-xl sm:text-3xl font-serif font-bold py-1" style={{fontFamily: `"Ubuntu", sans-serif`, fontWeight: '700', fontStyle: 'italic'}}>Best Hospitals</h2>
                    <div className={`${items.length > 4? 'flex': 'hidden'}`}>
                        <button onClick={nextHospitalScroll} className="w-8 sm:w-11 h-6 sm:h-8 flex justify-center items-center bg-transparent text-xl font-bold shadow-3dUnclicked active:shadow-3dClicked rounded-md sm:rounded-full mr-4"><WestIcon className="text-white w-8 h-full" fontSize="small"/></button>
                        <button onClick={prevHospitalScroll} className="w-8 sm:w-11 h-6 sm:h-8 flex justify-center items-center bg-transparent text-xl font-bold shadow-3dUnclicked active:shadow-3dClicked rounded-md sm:rounded-full "><WestIcon className="w-8 text-white rotate-180" fontSize="small"/></button>
                    </div>
                </div>

                <div className="hospital-container overflow-x-scroll">
                    <div className="scroll-hospital">
                    {
                        items.map((item, idx) => {
                            return (
                                <div key={idx} className="bestHospital inline-block sm:w-64 w-[166px] shadow-[2px_2px_5px_gray] rounded-lg sm:rounded-xl my-2 overflow-hidden cursor-pointer">
                                    <img src={`img/${item.img}`} alt="" className="w-[100%] aspect-[16/9] object-cover" />
                                    <div className="bestHospital-text font-bold m-1 px-1 pb-1 text-cyan-900 border rounded-md sm:rounded-lg transition-colors duration-[0.5s]">
                                        <p className="text-xs">{item.name}{'>'}</p>
                                        <p className="font-normal text-xs">{item.place}</p>
                                    </div>
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

export default BestHospital;