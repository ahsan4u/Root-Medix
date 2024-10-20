import React, { useEffect, useRef } from "react";
import doctorsProfileData from '../data/doctorsProfileData';
import OurServices from "./OurServices";
import UserInfo from "./UserInfo";

export default function DoctorsProfile({doctor}) {
    const popupForm = useRef(null);
    const aboutRef = useRef(null);
    const doctorImgRef = useRef(null);
    const doctors = doctorsProfileData[doctor.hospital][doctor.name];

    useEffect(()=> {
        if(window.innerWidth < 1000) {
            aboutRef.current.style.marginTop = `${doctorImgRef.current.offsetWidth-60}px`;            
        }
    },[])

    function popupWindow() {
        if(!popupForm.current.style.opacity) {
            popupForm.current.style.opacity= '1';
            popupForm.current.style.left= '50%';
        } else {
            popupForm.current.style.opacity= null;
            popupForm.current.style.left= '0';
        }
    }
    function removeWindow() {
        popupForm.current.style.opacity= null;
        popupForm.current.style.left= '0';
    }

    window.onscroll = ()=>{
        if(window.scrollY > 500) {
            doctorImgRef.current.classList.add('hidden');
        } else {
            doctorImgRef.current.classList.remove('hidden');
        }
    }
    return(
        <>
            {(window.innerWidth > 1000) && (
                <div ref={popupForm} className="opacity-0 flex z-50 fixed top-1/2 left-0 translate-x-[-50%] translate-y-[-50%] transition-all duration-500" >
                    <div className="scale-110 shadow-2xl bg-gradient-to-b from-white via-purple-50 to-purple-300 overflow-hidden rounded-[20px]">
                        <UserInfo/>
                    </div>
                    <button onClick={removeWindow} className="h-10 w-10 text-2xl pb-1 rounded-full relative right-6 font-bold bottom-6 hover:text-red-500">×</button>
                </div>
            )}
            <div style={{fontFamily: `convergence, sans-serif`}} className="mb-20 lg:px-4 lg:flex justify-around w-[98vw] rounded-lg m-auto shadow-lg lg:bg-gradient-to-r from-purple-300 via-purple-50 to-[#f3feff] ">
                
                <div className="lg:sticky lg:w-[28%] lg:h-[70vh] top-[35vh] bg-white rounded-t-3xl flex flex-col items-center">
                    <img ref={doctorImgRef} className="lg:rounded-full lg:block lg:relative lg:bottom-[90px] fixed lg:w-[60%] w-full bg-violet-300 border-[6px] border-white" src={doctors.about.img} alt={doctors.about.name} />
                    <div className="text-[15px] lg:mt-[-80px] w-[78%] m-auto">
                        <h2 className="text-center font-bold text-xl">{doctors.about.name}</h2>
                        {(window.innerWidth > 1000) && (<>
                        <p className="text-center text-sm text-cyan-900">{doctors.about.type}</p>

                        <p className="mt-3 pt-2 px-1 border-t-2 border-orange-500">• {doctors.about.speciality}</p>
                        <p className="mt-1 px-1">• {doctors.about.experiance}</p>
                        <p className="mt-1 px-1">• {doctors.about.hospital}</p>
                        <button onClick={popupWindow} className="hover:scale-110 transition-all duration-500 block h-12 w-[90%] rounded-xl mt-7 m-auto bg-cyan-700 active:bg-cyan-950 text-white">Book an Appointment</button>
                        </>)}
                    </div>
                </div>

                <div ref={aboutRef} className="lg:w-[55%] min-h-[100vh] lg:mt-[8vh] overflow-hidden rounded-t-3xl lg:rounded-none pb-5 relative z-10 bg-[#fffcfd] lg:bg-transparent">
                    {window.innerWidth < 1000 && (
                        <div className="mb-1 py-2 text-2xl font-bold text-white bg-cyan-600 rounded-3xl">
                            <h1 className="text-center">{doctors.about.name}</h1>
                            <p className="text-[15px] mt-[-4px] text-center font-thin text-gray-200">• {doctors.about.type}</p>
                            
                            <p className="text-lg font-thin w-[82%] m-auto border-t-2 border-orange-400 pt-2 px-[1%] mt-2">• {doctors.about.speciality}</p>
                            <p className="text-lg font-thin w-[82%] m-auto px-[1%]">• {doctors.about.experiance}</p>
                            <p className="text-lg font-thin w-[82%] m-auto px-[1%]">• {doctors.about.hospital}</p>
                        </div>
                    )}
                    
                    {
                        doctors.profile.map((details, idx)=>(
                            <div key={idx} className="text-green-950 px-2 lg:px-0">
                                {details.heading && (<h1 className="mb-1 mt-3 text-4xl text-cyan-900 font-bold border-b-4 border-dashed border-cyan-500 inline-block pr-4 pb-2">{details.heading}</h1>)}
                                {details.subheading && (<h2 className="text-xl lg:text-2xl text-cyan-900 font-semibold mt-5 border-b-4 border-dashed border-cyan-500 inline-block pr-4 pb-1">{details.subheading}</h2>)}
                                {details.description && (<p className="mt-3">{details.description}</p>)}
                                {details.list && ( <ol className={`mt-1 ml-5 list-disc ${!details.description && ('mt-3')}`}>
                                    {
                                        details.list.map((data, idx)=>(
                                            <li key={idx} className="mb-1">
                                                {data.name && (<span className="font-semibold mr-2">{data.name}:</span>)}
                                                {data.content}
                                            </li>
                                        ))
                                    }
                                </ol>)}
                            </div>
                        ))
                    }
                </div>
            </div>

            {window.innerWidth < 640 && (
            <div className="bg-gradient-to-b from-white via-blue-50 to-blue-300 overflow-hidden rounded-[20px] border border-dotted border-[#64748b] w-[100vw] sm:mt-2 sm:mb-0 mb-20 m-auto">
                <UserInfo/>
            </div>)}

            <OurServices/>
        </>
    )
}