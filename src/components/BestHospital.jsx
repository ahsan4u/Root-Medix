import React from "react";

function BestHospital() {
    const items = [
        {name: 'Fortis Hospital', img: '/hospital1.jpg', place: 'New Delhi'},
        {name: 'Fortis Escorts Heart', img: '/hospital2.jpg', place: 'New Delhi'},
        {name: 'Fortis Vasant Kunj', img: '/hospital3.jpg', place: 'New Delhi'},
        {name: 'Fortis Memorial Research', img: '/hospital4.jpg', place: 'New Delhi'},
    ]

    return (
        <>
            <div className="border-b border-dotted border-gray-500 rounded-b-3xl mb-16 w-[98vw] m-auto">
                <div className="flex justify-between bg-gradient-to-r from-cyan-200 via-blue-300 to-blue-400 rounded-t-lg mt-9 mb-5 overflow-hidden items-center px-3">
                    <h2 className="text-3xl font-serif font-bold py-1" style={{fontFamily: `"Ubuntu", sans-serif`, fontWeight: '700', fontStyle: 'italic'}}>Best Hospitals</h2>
                    <div>
                        {/* <button onClick={nextItem} className="w-8 bg-cyan-200 text-xl font-bold rounded-full pb-1 mr-4">{'<'}</button> */}
                        {/* <button onClick={prevItem} className="w-8 bg-cyan-200 text-xl font-bold rounded-full pb-1 ">{'>'}</button> */}
                    </div>
                </div>

                <div className="container overflow-x-auto mb-4 m-auto">
                    <div className="scroll-container flex gap-8 px-[30px]">
                    {
                        items.map((item, idx) => {
                            return (
                                <div key={idx} className="item block shadow-[2px_2px_5px_gray] rounded-xl m-2 overflow-hidden">
                                    <img src={item.img} alt="" className="w-80 aspect-[16/9] object-cover" />
                                    <p className="font-bold m-1 px-1 pb-1 text-cyan-900 border rounded-lg">{item.name} <span>{'>'}</span>
                                    <p className="text-slate-500 font-normal text-xs">{item.place}</p></p>
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