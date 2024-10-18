import React from "react";
import TreatmentCard from "./TreatmentCard";
import treatmentCard from "../data/treatmentCard";
import { Link } from "react-router-dom";
function GivenTreatments({type}) {
    let treatments = null;
    if(type == 'all') {
        treatments = Object.keys(treatmentCard).flatMap((key)=>treatmentCard[key]);
    }
    return(
        <div className="grid grid-cols-3 sm:grid-cols-6 items-center justify-items-center mb-12">
        {
            treatments.map((treatment, idx)=> (
                <Link  key={idx} to={`/treatment/cardiology`}>
                    <TreatmentCard 
                        name={treatment.name}
                        img={treatment.img} 
                    />
                </Link>
            ))
        }
        </div>
    )
}

export default GivenTreatments;