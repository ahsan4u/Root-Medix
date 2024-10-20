import React, { useEffect, useRef } from "react";
import doctorsProfileData from '../data/doctorsProfileData';
import OurServices from "./OurServices";
import UserInfo from "./UserInfo";

export default function DoctorsProfile({name}) {
    const popupForm = useRef(null);
    const aboutRef = useRef(null);
    const doctorImgRef = useRef(null);
    const doctor = doctorsProfileData[name];

    useEffect(()=> {
        if(window.innerWidth < 1000) {
            aboutRef.current.style.marginTop = `${doctorImgRef.current.offsetWidth-90}px`;            
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
                    <div className="shadow-2xl bg-gradient-to-b from-white via-blue-50 to-blue-300 overflow-hidden rounded-[20px]">
                        <UserInfo/>
                    </div>
                    <button onClick={removeWindow} className="h-10 w-10 text-2xl pb-1 rounded-full ml-3 bg-red-600 hover:bg-red-700 text-white">×</button>
                </div>
            )}
            <div style={{fontFamily: `convergence, sans-serif`}} className="mb-20 lg:px-4 lg:flex justify-around w-[98vw] rounded-lg m-auto shadow-lg lg:bg-gradient-to-r from-purple-300 via-purple-50 to-[#f3feff] ">
                
                <div className="lg:sticky lg:w-[28%] lg:h-[77vh] top-[33vh] bg-white rounded-t-3xl flex flex-col items-center">
                    <img ref={doctorImgRef} className="lg:rounded-full lg:block lg:relative lg:bottom-[105px] fixed lg:w-[65%] bg-violet-300 border-[6px] border-white" src={doctor.about.img} alt={doctor.about.name} />
                    <div>
                        <div className=" lg:mt-[-80px] w-[78%] m-auto">
                            <h2 className="text-center font-bold text-3xl text-violet-900">{doctor.about.name}</h2>
                            {(window.innerWidth > 1000) && (<>
                            <p className="text-center mt-1 text-xl text-violet-900">{doctor.about.type}</p>
                            <p className="mt-5 pt-4 border-t-2 border-orange-500">{doctor.about.info}</p>
                            <button onClick={popupWindow} className="hover:scale-110 transition-all duration-500 block h-12 w-[90%] rounded-xl mt-10 m-auto bg-cyan-700 active:bg-cyan-950 text-white">Book an Appointment</button>
                            </>)}
                        </div>
                    </div>
                </div>

                <div ref={aboutRef} className="lg:w-[55%] min-h-[100vh] lg:mt-[8vh] overflow-hidden rounded-t-3xl lg:rounded-none pb-5 relative z-10 bg-[#fffcfd] lg:bg-transparent">
                    {window.innerWidth < 1000 && (<h1 className="mb-1 py-2 text-4xl text-blue-900 font-bold text-center bg-cyan-100">{doctor.about.name}</h1>)}
                    {
                        doctor.profile.map((details, idx)=>(
                            <div key={idx} className="text-green-950 px-2 lg:px-0">
                                {details.heading && (<h1 className="mb-1 mt-3 text-4xl text-blue-900 font-bold border-b-4 border-dashed border-cyan-500 inline-block pr-4 pb-2">{details.heading}</h1>)}
                                {details.subheading && (<h2 className="text-2xl text-cyan-900 font-semibold mt-5 border-b-4 border-dashed border-cyan-500 inline-block pr-4 pb-1">{details.subheading}</h2>)}
                                {details.description && (<p className="mt-3">{details.description}</p>)}
                                {details.list && ( <ol className="mt-1 ml-4 list-disc">
                                    {
                                        details.list.map((data, idx)=>(
                                            <li key={idx}>
                                                {data.name && (<span className="font-semibold text-blue-900 mr-2">{data.name}:</span>)}
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