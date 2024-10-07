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
        {name: 'Spine', img: '/Spine.jpg'},
        {name: 'Spine', img: '/Spine.jpg'},
        // {name: '', img: ''},
    ];
    
    useEffect(()=> {
        document.querySelector('.scroll-container').style.width = `${(document.querySelector('.item').offsetWidth+175) * items.length}px`;
    }, [[items.length]])

    function nextItem() {
        let idx = 1;
        const intervalId = setInterval(()=>{
            document.querySelector('.container').scrollBy(-4, 0);
            idx +=4;
            if(idx >=255) clearInterval(intervalId);
        }, 1);
    }

    function prevItem() {
        let idx = 1;
        const intervalId = setInterval(()=>{
            document.querySelector('.container').scrollBy(4, 0);
            idx +=4;
            if(idx >=255) clearInterval(intervalId);
        }, 1);
    }

    return (
        <div className="relative">
            <h2 className="text-center text-4xl text-cyan-900 font-serif font-bold my-9">Browse by Specialist</h2>
            <button onClick={nextItem} className="absolute left-4 top-[125px] bg-white text-xl font-bold border border-slate-800 rounded-md pb-1">{'<'}</button>
            <div className="container overflow-x-auto">
                <div className="scroll-container flex gap-28 px-[56px]">
                {
                    items.map((item, idx) => {
                        return (
                            <div key={idx} className="item block">
                                <img src={item.img} alt="" className="w-36 rounded-3xl" />
                                <p className="text-center font-bold">{item.name}</p>
                            </div>
                        );
                    })
                }
                </div>
            </div>
                <button onClick={prevItem} className="absolute left-[97vw] bottom-[92px] bg-white text-xl font-bold border border-slate-800 rounded-md pb-1">{'>'}</button>
        </div>
    )
}

export default Treatment;