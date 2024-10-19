import React from "react";
import Poster from '../components/Poster';
import Treatment from "../components/Treatment";
import BestHospital from "../components/BestHospital";
import OurServices from "../components/OurServices";
import UserInfo from "../components/UserInfo";
import treatmentCardData from '../data/treatmentCardData';
import doctorsData from '../data/doctorsData';
import OurDoctors from "../components/ourDoctors";

function Home() {
    const allTreatmentCard = Object.keys(treatmentCardData).flatMap(key=> treatmentCardData[key]);
    const allDoctors =  Object.keys(doctorsData).flatMap(key=> doctorsData[key]);
    return (
        <>
            <Poster/>
            <Treatment heading={'Browse by Specialist'} treatments = {allTreatmentCard}/>
            <BestHospital/>
            <OurServices/>
            <OurDoctors heading={'Our Doctors'} doctors={allDoctors}/>

            {window.innerWidth < 640 && (
            <div className="bg-gradient-to-b from-white via-blue-50 to-blue-300 overflow-hidden rounded-[20px] border border-dotted border-[#64748b] w-[100vw] sm:mt-2 sm:mb-0 mb-20 m-auto">
                <UserInfo/>
            </div>)}
        </>
    )
}

export default Home;