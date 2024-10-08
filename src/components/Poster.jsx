import React from "react";
import UserInfo from "./UserInfo";

function Poster() {

    return (
        <>
            <div className="aspect-[16/7.5] w-full bg-[url('/poster.jpg')] flex justify-end items-center" style={{backgroundSize: '100% 100%'}}>
                
                <div className="w-72 mr-32 mt-7">
                    <UserInfo/>
                </div>
            </div>
        </>
    )
}

export default Poster;