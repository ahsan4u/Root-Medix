import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function GivenCards({Card, data}) {
    const [newData, setData] = useState(null);
    useEffect(()=> {    
        if(data.content == 'treatments') {
            async function load() {
                await fetch(`data/cards/maxsaket/treatment.json`).then(res=> res.json()).then(data=>{ setData(data);});
            }load();
        } else if(data.content == 'doctors') {
            async function load() {
                await fetch(`data/cards/maxsaket/doctors.json`).then(res=> res.json()).then(data=> { setData(Object.keys(data).map(key=>data[key])); console.log(data); });
            }load();
        }
    },[])

    return(
        <div className={`grid ${data.content=='doctors'?'grid-cols-[repeat(auto-fit,minmax(160px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]':'grid-cols-[repeat(auto-fit,minmax(130px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]'} sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] w-full justify-items-center mb-12`}>
        {
            newData?.map((eachData, idx)=> (
                <Link  key={idx} to={data.content == 'treatments'?'/treatment/cardiology': eachData.link} className="w-full hover:scale-105 transition-transform duration-500 aspect-[1/1] flex justify-center items-center flex-shrink-0">
                    <Card data={eachData}/>
                </Link>
            ))
        }
        </div>
    )
}

export default GivenCards;