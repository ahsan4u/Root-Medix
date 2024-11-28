"use client" 

import UserInfo from "./UserInfo";

function MobileForm(){
    return (
        <>
            {window.innerWidth<600 && (
                <div className="w-[98vw] mt-1 mb-6 bg-gradient-to-b from-white via-white to-blue-300 overflow-hidden rounded-2xl m-auto border-t border-dotted border-gray-400" >
                    <UserInfo/>
                </div>
            )}
        </>
    )
}

export default MobileForm;