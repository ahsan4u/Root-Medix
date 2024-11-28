"use client"

import React, { useEffect, useRef, useState } from "react";
import UserInfo from "./UserInfo";

export default function PopupForm() {
    const popupForm = useRef(null);

    function popupWindow() {
        if(!popupForm.current.style.opacity) {
            popupForm.current.style.opacity= '1';
            popupForm.current.style.left= (window.innerWidth < 600)? '55%':'50%';
            document.querySelector('html').style.overflow= 'hidden';
        } else {
            popupForm.current.style.opacity= null;
            popupForm.current.style.left= '-200px';
            document.querySelector('html').style.overflow= 'scroll';
        }
    }
    
    function removeWindow() {
        popupForm.current.style.opacity= null;
        popupForm.current.style.left= '-200px';
        document.querySelector('html').style.overflow= 'scroll';
    }

    <div ref={popupForm} className="opacity-0 flex z-50 fixed top-1/2 left-[-200px] lg:w-auto w-[100vw] translate-x-[-50%] translate-y-[-50%] transition-all duration-500" >
        <div className="lg:scale-110 lg:w-auto w-[100vw] shadow-2xl bg-gradient-to-b from-white via-white to-blue-300 overflow-hidden rounded-[10px]">
            <UserInfo/>
        </div>
        <button onClick={removeWindow} className="h-10 w-10 text-2xl pb-1 lg:scale-100 scale-150 rounded-full relative lg:right-6 lg:bottom-6 right-10 bottom-[-4px] hover:text-red-500">×</button>
    </div>

}