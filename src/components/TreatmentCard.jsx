import React, { forwardRef } from "react";
import { useRef } from "react";

const TreatmentCard = forwardRef(({name, img}, ref)=> {

    return(
        <div ref={ref} className="treatment inline-block sm:w-36 w-[105px] cursor-pointer shadow-[2px_2px_5px_gray] rounded-xl sm:p-2 p-1 my-2">
            <img src={img} alt={img} className="w-[100%] aspect-[16/17.5] object-cover rounded-lg shadow-[2px_2px_5px_gray]" />
            <p className="treatment-name sm:text-[15px] text-[11px] text-center font-bold sm:mt-3 mt-2 mb-1 sm:p-0 p-1   text-cyan-900 border rounded-lg transition-colors duration-[0.5s]">{name}</p>
        </div>
    )
})


export default TreatmentCard;