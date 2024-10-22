import React from "react";
import TreatmentCard from "../components/TreatmentCard";
import treatmentCardData from "../data/treatmentData";
import { Link } from "react-router-dom";
function GivenTreatments({type}) {
    let treatments = null;
    if(type == 'all') {
        treatments = Object.keys(treatmentCardData).flatMap((key)=>treatmentCardData[key]);
    }
    return(
        <div className="grid grid-cols-3 sm:grid-cols-6 items-center justify-items-center mb-12">
        {
            treatments.map((treatment, idx)=> (
                <Link  key={idx} to={`/treatment/cardiology`}>
                    <TreatmentCard data={treatment}/>
                </Link>
            ))
        }
        </div>
    )
}

export default GivenTreatments;