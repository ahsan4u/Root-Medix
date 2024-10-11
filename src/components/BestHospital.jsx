import React, { useEffect } from "react";

function BestHospital() {
    const items = [
        {name: 'Max Hospital, Saket',   img: '/max-saket.jpg',      place: 'New Delhi'},
        {name: 'BLK Max Hospital',      img: '/blk-max.jpg',        place: 'New Delhi'},
        {name: 'Max Hospital Dwarka',   img: '/max-dwarka.jpg',     place: 'New Delhi'},
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
        const scrollValue = document.querySelector('.bestHospital').offsetWidth + (2 * Number(document.querySelector('.bestHospital').style.marginLeft.replace('px', '')));
        let idx = 1;
        const intervalId = setInterval(()=>{
            document.querySelector('.hospital-container').scrollBy(-4, 0);
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
            <div className="border-b border-dotted border-gray-500 rounded-b-3xl mb-16 w-[98vw] m-auto">
                <div className="flex justify-between bg-gradient-to-r from-cyan-200 via-blue-300 to-blue-400 rounded-t-lg mt-9 mb-5 overflow-hidden items-center px-3">
                    <h2 className="text-3xl font-serif font-bold py-1" style={{fontFamily: `"Ubuntu", sans-serif`, fontWeight: '700', fontStyle: 'italic'}}>Best Hospitals</h2>
                    <div className={`${items.length > 4? 'block': 'hidden'}`}>
                        <button onClick={nextHospitalScroll} className="w-8 bg-cyan-200 text-xl font-bold shadow-inner shadow-slate-500 active:shadow-slate-700 rounded-full pb-1 mr-4">{'<'}</button>
                        <button onClick={prevHospitalScroll} className="w-8 bg-cyan-200 text-xl font-bold shadow-inner shadow-slate-500 active:shadow-slate-700 rounded-full pb-1 ">{'>'}</button>
                    </div>
                </div>

                <div className="hospital-container overflow-x-scroll">
                    <div className="scroll-hospital">
                    {
                        items.map((item, idx) => {
                            return (
                                <div key={idx} className="bestHospital inline-block w-64 shadow-[2px_2px_5px_gray] rounded-xl my-2 overflow-hidden cursor-pointer">
                                    <img src={item.img} alt="" className="w-[100%] aspect-[16/9] object-cover" />
                                    <div className="bestHospital-text font-bold m-1 px-1 pb-1 text-cyan-900 border rounded-lg transition-colors duration-[0.5s]">
                                        <p className="">{item.name}{'>'}</p>
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