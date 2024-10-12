import React from "react";
import UserInfo from "./UserInfo";

function Poster() {

    return (
        <>
            <div className="sm:aspect-[16/7.5] aspect-[16/9] bg-cover bg-center w-full bg-[url('/poster.jpg')] flex justify-end items-center">
                {window.innerWidth > 640 && (<div className="w-72 mr-32 mt-7">
                    <UserInfo/>
                </div>)}
            </div>
        </>
    )
}

export default Poster;