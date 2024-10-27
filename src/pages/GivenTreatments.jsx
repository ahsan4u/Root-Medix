import React from "react";
import TreatmentCard from "../components/TreatmentCard";
import {maxsaketTreatments, blkmaxTreatments, maxdwarkaTreatments, aakashTreatments} from "../../public/data/cardsData";
import { Link } from "react-router-dom";
function GivenTreatments({type}) {
    let treatments = null;
    if(type == 'all') {
        treatments = [...maxsaketTreatments, ...blkmaxTreatments, ...maxdwarkaTreatments, ...aakashTreatments];
    }
    return(
        <div className="grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] w-full justify-items-center mb-12">
        {
            treatments.map((treatment, idx)=> (
                <Link  key={idx} to={`/treatment/cardiology`} className="w-full aspect-[1/1] flex justify-center items-center flex-shrink-0">
                    <TreatmentCard data={treatment}/>
                </Link>
            ))
        }
        </div>
    )
}

export default GivenTreatments;