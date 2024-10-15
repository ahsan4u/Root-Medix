import React from "react";
import Poster from '../components/Poster';
import Treatment from "../components/Treatment";
import BestHospital from "../components/BestHospital";
import OurServices from "../components/OurServices";
import UserInfo from "../components/UserInfo";

function Home() {

    return (
        <>
            <Poster/>
            <Treatment/>
            <BestHospital/>
            <OurServices/>

            {window.innerWidth < 640 && (
            <div className="overflow-hidden rounded-[20px] border border-dotted border-[#64748b] w-[100vw] sm:mt-2 sm:mb-0 mb-20 m-auto">
                <UserInfo/>
            </div>)}

        </>
    )
}

export default Home;