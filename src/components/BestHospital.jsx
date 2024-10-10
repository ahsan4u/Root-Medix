import React, { useEffect } from "react";

function BestHospital() {
    const items = [
        {name: 'Max Hospital, Saket',   img: '/max-saket.jpg',      place: 'New Delhi'},
        {name: 'BLK Max Hospital',      img: '/blk-max.jpg',        place: 'New Delhi'},
        {name: 'Max Hospital Dwarka',   img: '/max-dwarka.jpg',     place: 'New Delhi'},
        {name: 'Aakash Hospital',       img: '/aakash-dwarka.jpg',  place: 'New Delhi'},
    ];
    const cardWidth = 312;
    useEffect(()=> {
        document.querySelector('.scroll-hospital').style.width = `${cardWidth * items.length}px`;
    }, [[items.length]])

    function nextHospitalScroll() {
        let idx = 1;
        const intervalId = setInterval(()=>{
            document.querySelector('.hospital-container').scrollBy(-6, 0);
            idx +=6;
            if(idx >=cardWidth) clearInterval(intervalId);
        }, 1);
    }

    function prevHospitalScroll() {
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
                    <h2 className="text-3xl font-serif font-bold py-1" style={{fontFamily: `"Ubuntu", sans-serif`, fontWeight: '700', fontStyle: 'italic'}}>Best Hospitals</h2>
                    <div className={`${items.length > 4? 'block': 'hidden'}`}>
                        <button onClick={nextHospitalScroll} className="w-8 bg-cyan-200 text-xl font-bold shadow-inner shadow-slate-500 active:shadow-slate-700 rounded-full pb-1 mr-4">{'<'}</button>
                        <button onClick={prevHospitalScroll} className="w-8 bg-cyan-200 text-xl font-bold shadow-inner shadow-slate-500 active:shadow-slate-700 rounded-full pb-1 ">{'>'}</button>
                    </div>
                </div>

                <div className="hospital-container overflow-x-auto mb-4">
                    <div className="scroll-hospital flex gap-10 px-[22px]">
                    {
                        items.map((item, idx) => {
                            return (
                                <div key={idx} className="bestHospital block w-64 shadow-[2px_2px_5px_gray] rounded-xl m-2 overflow-hidden cursor-pointer">
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