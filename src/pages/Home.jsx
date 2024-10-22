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
            <ScrollDiv heading={'Browse by Specialist'} cardsData = {allTreatmentCard} Card={TreatmentCard} count={6} seeMore={true} scroll={true}/>
            <ScrollDiv heading={'Best Hospitals'} cardsData = {hospitalsData} Card={HospitalCard} count={4}/>
            <ScrollDiv heading={'Our Services'} cardsData = {servicesData} Card={ServiceCard} count={4}/>
            <ScrollDiv heading={'Best Doctors'} cardsData={allDoctors} Card={DoctorCard} count={4}/>

            {window.innerWidth < 640 && (
            <div className="bg-gradient-to-b from-white via-blue-50 to-blue-300 overflow-hidden rounded-[20px] border border-dotted border-[#64748b] w-[100vw] sm:mt-2 sm:mb-0 mb-20 m-auto">
                <UserInfo/>
            </div>)}
        </>
    )
}

export default Home;