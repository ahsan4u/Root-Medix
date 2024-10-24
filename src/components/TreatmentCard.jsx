import React from "react";

const TreatmentCard = ({data})=> 
    (<div className="treatment_card_div sm:w-36 w-[105px] cursor-pointer shadow-[2px_2px_5px_gray] rounded-xl sm:p-2 p-1 my-3">
        <img src={data.img} alt={data.img} className="w-[100%] aspect-[16/17.5] object-cover rounded-lg shadow-[2px_2px_5px_gray]" />
        <p className="treatment_name sm:text-[15px] text-[11px] text-center font-bold sm:mt-3 mt-2 mb-1 sm:p-0 p-1   text-cyan-900 border rounded-lg transition-colors duration-[0.5s]">{data.name}</p>
    </div>)
export default TreatmentCard;