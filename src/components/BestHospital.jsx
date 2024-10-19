import React, { useEffect } from "react";
import { Link } from "react-router-dom";


function BestHospital() {
    const items = [
        {name: 'Max Hospital, Saket',   img: './img/hospital/max-saket.jpg',      place: 'New Delhi', link: '/hospital/maxsaket'},
        {name: 'BLK Max Hospital',      img: './img/hospital/blk-max.jpg',        place: 'New Delhi', link: '/hospital/blkmax'},
        {name: 'Max Hospital Dwarka',   img: './img/hospital/max-dwarka.jpg',     place: 'New Delhi', link: '/hospital/maxdwarka'},
        {name: 'Aakash Hospital',       img: './img/hospital/aakash-dwarka.jpg',  place: 'New Delhi', link: '/hospital/aakash'},
    ];

    useEffect(()=> {
        document.querySelectorAll('.bestHospital').forEach((hospitalCard)=> {
            const scrollCont = document.querySelector('.hospital-container').offsetWidth;
            let margin = 0
            if(scrollCont < 800) {
                margin = (scrollCont - (hospitalCard.offsetWidth*2))/4;
            } else if(scrollCont < 1200){
                margin = (scrollCont - (hospitalCard.offsetWidth*3))/6;
            } else {
                margin = (scrollCont - (hospitalCard.offsetWidth*4))/8;
            }
            hospitalCard.style.marginLeft = `${margin}px`;
            hospitalCard.style.marginRight = `${margin}px`;
        });
    }, [[items.length]])

    return (
        <div className="border-b border-dotted border-gray-500 rounded-b-3xl mb-10 sm:mb-16 w-[98vw] m-auto">
            <div className="flex justify-between bg-gradient-to-r from-cyan-200 via-blue-300 to-blue-400 rounded-t-lg mt-9 mb-5 overflow-hidden items-center px-3">
                <h2 className="text-xl sm:text-3xl font-serif font-bold py-1" style={{fontFamily: `"Ubuntu", sans-serif`, fontWeight: '700', fontStyle: 'italic'}}>Best Hospitals</h2>
            </div>
            <div className="hospital-container overflow-x-scroll">
                <div className="scroll-hospital flex flex-nowrap">
                {items.map((item, idx) => {
                    return (
                        <Link to={item.link} key={idx}>
                            <div className="bestHospital sm:w-64 w-[166px] shadow-[2px_2px_5px_gray] rounded-lg sm:rounded-xl my-2 overflow-hidden cursor-pointer">
                                <img src={item.img} alt="" className="w-[100%] aspect-[16/9] object-cover" />
                                <div className="bestHospital-text font-bold m-1 px-1 pb-1 text-cyan-900 border rounded-md sm:rounded-lg transition-colors duration-[0.5s]">
                                    <p className="text-xs sm:text-sm">{item.name}{'>'}</p>
                                    <p className="font-normal text-xs">{item.place}</p>
                                </div>
                            </div>
                        </Link>
                    );
                })}
                </div>
            </div>
        </div>
    )
}

export default BestHospital;