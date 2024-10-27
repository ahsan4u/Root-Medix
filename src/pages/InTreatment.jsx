import {maxsaketDoctors, services} from '../../public/data/cardsData';
import {cardiology} from '../../public/data/intreatmentData';
import { Link } from 'react-router-dom';
import ScrollDiv from '../components/ScrollDiv';
import DoctorCard from '../components/DoctorCard';
import ServiceCard from '../components/ServiceCard';

function InTreatment({name}) {
    const items = cardiology;
    const maxDoctors = Object.keys(maxsaketDoctors).map(key=>maxsaketDoctors[key]).slice(0,6);

    return (
        <>
            <div className='grid grid-cols-[repeat(auto-fit,minmax(195px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-items-center w-full justify-around bg-[#faf6f6] pt-5 pb-12'>
                    {
                        items.map((item, idx)=>(
                            <Link key={idx} to="/treatment/cardiology/heart-transplant" className='w-[90%] hover:scale-105 transition-all duration-500'>
                            <div className='flex aspect-[16/10] rounded-2xl drop-shadow-xl overflow-hidden lg:mb-6 mb-3 relative'>
                                <div className='text-white w-[65%] flex flex-col justify-between pl-2 py-2 h-full bg-[url("/img/treatment-card.png")] bg-[length:100%_100%] z-20 rounded-l-2xl'>
                                    <h2 className='font-bold text-2xl lg:text-3xl'>{item.name}</h2>
                                    <p className='lg:text-xs font-serif text-[10px] w-[60%]'>{item.info}</p>
                                </div>
                                <img src={item.img} alt={item.img} className='w-[50%] h-full absolute right-0 object-cover rounded-r-2xl'/>
                            </div>
                            </Link>
                        ))
                    }
            </div>
            <ScrollDiv heading={'Best Doctors'} cardsData={maxDoctors} Card={DoctorCard} scroll={true}/>
            
            <div className="mt-12">
                <ScrollDiv heading={'Our Services'} cardsData={services} Card={ServiceCard}/>
            </div>
        </>
    )
}

export default InTreatment;