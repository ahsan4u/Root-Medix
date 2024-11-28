"use client"

import { useEffect, useRef, useState } from "react";
// import UserInfo from "./UserInfo";

function Poster() {
    const [isMobile, setMobile] = useState(false);
    useEffect(()=>{
        setMobile(window.innerWidth > 740? true: false);
    })

    return (
        <>
            <div className="sm:aspect-[16/7.5] aspect-[16/9] bg-cover bg-center w-full bg-[url('/img/poster.jpg')] flex justify-end items-center">
                {isMobile && (
                <div className="w-72 lg:mr-32 mr-20 lg:mt-7 overflow-hidden rounded-md bg-gradient-to-b from-white via-white to-blue-300">
                    {/* <UserInfo/> */}
                </div>)}
            </div>
        </>
    )
}

export default Poster;