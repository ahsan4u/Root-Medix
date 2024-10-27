import React from "react";

function ServiceCard({data}) {
    return(
        <div className="ourServices sm:w-64 w-[166px] shadow-[2px_2px_5px_gray] rounded-xl my-3 overflow-hidden">
            <img src={data.img} alt="" className="w-[100%] aspect-[16/9] object-cover" />
            <p className="services-text text-center text-md sm:text-2xl font-bold m-1 py-1 rounded-lg text-cyan-900 transition-colors duration-[0.5s]">{data.name}</p>
        </div>
    )
}

export default ServiceCard;