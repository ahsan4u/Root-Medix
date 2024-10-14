import React from "react";
import { useState, useRef } from "react";
import axios from "axios";
import Massage from "./massage";
import STDcode from "../data/STDcode";
import Lottie from 'lottie-react';
import loadingEffect from '../animated Icon/loading.json';


function UserInfo() {
    const suggestRef = useRef(null);
    const emailRef = useRef(null);
    const [formData, setFormData] = useState({name: '', email: '', country: '', contact: '', std: '', msg: ''});
    const [isLoading, setIsLoading] = useState(false);
    const [activeAlert, setActiveAlert] = useState(false);

    function setValue(e) {
        const {name, value} = e.target;
        setFormData((preVal)=> ({...preVal, [name]: value}));
        
        if(name == 'country') {
            if(value == '') {
                suggestRef.current.innerHTML = '';
                setFormData((preVal)=> ({...preVal, std: ''}));
                return
            }
            const filterd = STDcode.filter(code=> code.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())).slice(0, 5);
            suggestRef.current.innerHTML = '';
            filterd.forEach((code)=> {
                const option = document.createElement('div');
                option.textContent = `⨀ ${code.name}`;
                option.className = 'text-[14px] px-2 py-[4px] border-b border-[#64748b] hover:bg-[gray]';
                suggestRef.current.style.width = `${emailRef.current.offsetWidth}px`;
                if(window.innerWidth < 640) {
                    option.style.cssText = 'text-[20px] py-[5px] px-2 border-b border-[#64748b] hover:bg-[gray]'
                }
                option.onclick = ()=> {
                    setFormData((preVal)=> ({...preVal, [name]: code.name, std: code.code}));
                    suggestRef.current.innerHTML = '';
                    emailRef.current.focus();
                }
                suggestRef.current.appendChild(option);
            })
        }
    }


    async function handleSubmit(e) {
        e.preventDefault();
        if(formData.contact || formData.email) {
            setIsLoading(true);
            try{
                await axios.post('http://localhost:5000/user-details/send-mail', formData);
                setFormData({name: '', email: '', country: '', contact: '', std: '', msg: ''});
                setActiveAlert(true);

                setTimeout(()=>{
                    setActiveAlert(false);
                }, 5000)
                
            }
            catch(err) {
                console.log(`error send mail- ${err}`);
            } finally {
                setIsLoading(false);
            }
        }
    }
    

    return (
        <div className="w-[100%] py-4 bg-transparent">
            <h1 className="text-center text-2xl font-serif mb-3">Get free Consultation</h1>
            <form onSubmit={handleSubmit}>
                <input type="text"
                autoComplete="off"
                value={formData.name}
                onChange={setValue}
                name="name"
                id="name"
                placeholder="Full Name"
                className="block m-auto w-[80%] sm:mt-2 mt-5 py-1 text-lg sm:text-sm outline-none bg-transparent border-b-2 border-blue-400 placeholder-slate-500"/>
                
                <div className="relative w-[80%] m-auto">
                    <input
                    value={formData.country}
                    placeholder="Select Country"
                    autoComplete="off"
                    onChange={setValue}
                    name="country"
                    className="block w-[100%] sm:mt-2 mt-5 py-1 text-lg sm:text-sm outline-none bg-transparent border-b-2 border-blue-400 placeholder-slate-500"
                    id="country"/>
                    
                    <div ref={suggestRef} className="options overflow-hidden rounded-b-xl absolute bg-[#4d5a6b] text-white"></div>
                </div>
                
                <input type="text"
                ref={emailRef}  // this is just use for get there width in px to assign it to Option element
                value={formData.email}
                autoComplete="off"
                onChange={setValue}
                name="email"
                id="email"
                placeholder="Email Address"
                className="block m-auto w-[80%] sm:mt-2 mt-5 py-1 text-lg sm:text-sm outline-none bg-transparent border-b-2 border-blue-400 placeholder-slate-500"/>
                
                <div className="m-auto w-[80%] flex sm:mt-2 mt-5 mb-6">
                    <p className="std border-b-2 border-blue-400 mr-1 w-[18%] text-lg sm:text-sm py-1">{formData.std}</p>
                    <input type="number"
                    autoComplete="off"
                    value={formData.contact}
                    onChange={setValue}
                    name="contact"
                    id="contact"
                    placeholder="Contact Number"
                    className="block w-[80%] py-1 pl-1 text-lg sm:text-sm outline-none bg-transparent border-b-2 border-blue-400 placeholder-slate-500"/>
                </div>

                <textarea
                value={formData.msg}
                onChange={setValue}
                name="msg"
                rows= {window.innerWidth > 640? "3": "4"}
                id="patientDetails"
                placeholder="Write your Medical Concern"
                className="w-[82%] block m-auto outline-none rounded-md px-1 text-lg sm:text-sm placeholder-slate-500"/>
                
                <button type="submit"
                disabled={isLoading}
                style={{fontFamily: `"Ubuntu", sans-serif`, fontWeight: '500'}}
                className={`flex justify-center items-center text-lg m-auto w-[80%] mt-4 p-2 text-md text-white rounded-md transition-transform duration-300 ease-in-out hover:scale-[1.02]
                ${isLoading ? 'bg-gradient-to-r from-blue-800 via-cyan-700 to-blue-800' : 'bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-700'}`}
                >{ isLoading && (
                    <Lottie animationData={loadingEffect} className="w-7 mr-1"/>)
                }
                    {isLoading ? 'Sending...' : 'Submit'}</button>
                
                <p className="w-[79%] text-center m-auto text-sm font-semibold sm:mt-3 mt-6">By submitting this form,<br/> I agree to Root Medix's Terms & Privacy Policy.</p>
            </form>
            <Massage open={activeAlert} alertMsg='We Will get in touch with you soon !'/>
        </div>
    )
}
export default UserInfo;