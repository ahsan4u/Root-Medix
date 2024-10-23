import React from "react";

function HospitalCard({data}) {
    return (
        <div className="bestHospital sm:w-64 w-[166px] shadow-[2px_2px_5px_gray] rounded-lg sm:rounded-xl my-3 overflow-hidden cursor-pointer">
            <img src={data.img} alt="" className="w-[100%] aspect-[16/9] object-cover" />
            <div className="bestHospital-text font-bold m-1 px-1 pb-1 text-cyan-900 border rounded-md sm:rounded-lg transition-colors duration-[0.5s]">
                <p className="text-xs sm:text-sm">{data.name}{'>'}</p>
                <p className="font-normal text-xs">{data.place}</p>
            </div>
        </div>
    )
}

export default HospitalCard;