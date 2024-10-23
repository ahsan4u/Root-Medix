import React from "react";
import Poster from '../components/Poster';
import UserInfo from "../components/UserInfo";
import TreatmentCard from "../components/TreatmentCard";
import treatmentData from '../data/treatmentData';
import HospitalCard from "../components/HospitalCard";
import hospitalsData from "../data/hospitalsCardData";
import DoctorCard from "../components/DoctorCard";
import doctorsData from '../data/doctorsData';
import ServiceCard from '../components/ServiceCard';
import servicesData from '../data/servicesCardData';
import ScrollDiv from "../components/ScrollDiv";

function Home() {
    const allTreatmentCard = Object.keys(treatmentData).flatMap(key=> treatmentData[key]);
    const allDoctors =  Object.keys(doctorsData['maxsaket']).flatMap(key=> doctorsData['maxsaket'][key]);
    return (
        <>
            <Poster/>
            <div className="mt-1 mb-6 lg:mt-10 lg:mb-14">
               <ScrollDiv heading={'Browse by Specialist'} cardsData={allTreatmentCard} Card={TreatmentCard} count={6} seeMore={true} scroll={true}/>    
            </div>
            <div className="mt-4 mb-6 lg:mt-10 lg:mb-14">
                <ScrollDiv heading={'Best Hospitals'} cardsData={hospitalsData} Card={HospitalCard} count={4}/>
            </div>
            <div className="mt-4 mb-6 lg:mt-10 lg:mb-14">
                <ScrollDiv heading={'Our Services'} cardsData={servicesData} Card={ServiceCard} count={4}/>
            </div>
            <div className="mt-4 mb-6 lg:mt-10 lg:mb-14">
                <ScrollDiv heading={'Best Doctors'} cardsData={allDoctors} Card={DoctorCard} count={4} scroll={true}/>
            </div>

            {window.innerWidth < 640 && (
            <div className="my-7 bg-gradient-to-b from-white via-blue-50 to-blue-300 overflow-hidden rounded-3xl border-t border-dotted border-[#dddfe2] w-[95vw] shadow-xl m-auto">
                <UserInfo/>
            </div>)}
        </>
    )
}

export default Home;