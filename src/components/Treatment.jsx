import React from "react";
import { useEffect, useRef } from "react";

function Treatment() {
    const items = [
        {name: 'Cardiology', img: '/Cardiology.jpg'},
        {name: 'Spine', img: '/Spine.jpg'},
        {name: 'Spine', img: '/Spine.jpg'},
        {name: 'Spine', img: '/Spine.jpg'},
        {name: 'Spine', img: '/Spine.jpg'},
        {name: 'Spine', img: '/Spine.jpg'},
        {name: 'Spine', img: '/Spine.jpg'},
        {name: 'Spine', img: '/Spine.jpg'},
        {name: 'Spine', img: '/Spine.jpg'},
        {name: 'Spine', img: '/Spine.jpg'},
        // {name: '', img: ''},
    ];

    useEffect(()=> {
        document.querySelector('.scroll-container').style.width = `${(document.querySelector('.item').offsetWidth+155) * items.length}px`;
    }, [[items.length]])

    function nextItem() {
        let idx = 1;
        const intervalId = setInterval(()=>{
            document.querySelector('.container').scrollBy(-6, 0);
            idx +=6;
            if(idx >=255) clearInterval(intervalId);
        }, 1);
    }

    function prevItem() {
        let idx = 1;
        const intervalId = setInterval(()=>{
            document.querySelector('.container').scrollBy(6, 0);
            idx +=6;
            if(idx >=255) clearInterval(intervalId);
        }, 1);
    }

    return (
        <div className="border-b border-dotted border-gray-500 rounded-b-3xl mb-16 w-[98vw] m-auto">
            <div className="flex justify-between bg-gradient-to-r from-cyan-200 via-blue-300 to-blue-400 rounded-t-lg mt-9 mb-5 overflow-hidden items-center px-3">
                <h2 className="text-3xl font-serif font-bold py-1" style={{fontFamily: `"Ubuntu", sans-serif`, fontWeight: '700', fontStyle: 'italic'}}>Browse by Specialist</h2>
                <div>
                    <button onClick={nextItem} className="w-8 bg-cyan-200 text-xl font-bold shadow-inner shadow-slate-600 active:shadow-none transition duration-200 rounded-full pb-1 mr-4">{'<'}</button>
                    <button onClick={prevItem} className="w-8 bg-cyan-200 text-xl font-bold shadow-inner shadow-slate-600 active:shadow-none transition duration-200 rounded-full pb-1 ">{'>'}</button>
                </div>
            </div>

            <div className="container overflow-x-auto m-auto">
                <div className="scroll-container flex gap-20 px-[30px]">
                {
                    items.map((item, idx) => {
                        return (
                            <div key={idx} className="item block shadow-[2px_2px_5px_gray] rounded-xl p-2 m-2">
                                <img src={item.img} alt="" className="w-36 aspect-[16/17.5] object-cover rounded-lg shadow-[2px_2px_5px_gray]" />
                                <p className="text-center font-bold mt-3 mb-1 pb-1 text-cyan-900 border rounded-lg">{item.name}</p>
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