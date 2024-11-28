import Image from "next/image";
import Poster from "@/components/Poster";
import ScrollDiv from "@/components/ScrollDiv";
import TreatmentCard from "@/components/TreatmentCard";
import HospitalCard from "@/components/HospitalCard";
import DoctorCard from "@/components/DoctorCard";
import ServiceCard from "@/components/ServiceCard";
export default async function Home() {
  const host = process.env.NEXT_PUBLIC_HOST || 'http://localhost:3000';
  const data = await (await fetch(`${host}/data/cards.json`)).json();
  const bestTreatments = data['treatments'];
  const bestHospitals = data['hospitals'];
  const services = data['services'];
  const bestDoctors = Object.keys(data['doctors']).map(key=> data['doctors'][key]);

  return (<>
    <Poster/>

    <div className="mt-1 mb-6 lg:mt-10 lg:mb-14">
      { bestTreatments && (<ScrollDiv heading={'Browse by Specialist'} cardsData={bestTreatments} link={'/treatments'} Card={TreatmentCard} count={6} seeMore={true} scroll={true}/>)}
    </div>

    <div className="mt-1 mb-6 lg:mt-10 lg:mb-14">
      <ScrollDiv heading={'Best Hospitals'} cardsData={bestHospitals} Card={HospitalCard} count={4}/>
    </div>

    <div className="mt-1 mb-6 lg:mt-10 lg:mb-14">
      <ScrollDiv heading={'Our Services'} cardsData={services} Card={ServiceCard} count={4}/>
    </div>

    <div className="mt-1 mb-6 lg:mt-10 lg:mb-14">
      <ScrollDiv heading={'Best Doctors'} cardsData={bestDoctors} Card={DoctorCard} link={'/doctors'} count={4} seeMore={true} scroll={true}/>
    </div>

  </>);
}
