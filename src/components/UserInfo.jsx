import React from "react";
import { useState } from "react";
import axios from "axios";
import Massage from "./massage";

function UserInfo() {
    const [formData, setFormData] = useState({name: '', email: '', country: '', contact: '', msg: ''});
    const [isLoading, setIsLoading] = useState(false);
    const [activeAlert, setActiveAlert] = useState(false);

    function setValue(e) {
        const {name, value} = e.target;
        setFormData((preVal)=> ({...preVal, [name]: value}));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if(formData.contact || formData.email) {
            setIsLoading(true);
            try{
                await axios.post('http://localhost:5000/user-details/send-mail', formData);
                setFormData({name: '', email: '', country: '', contact: '', msg: ''});
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
        <div className="w-[100%] rounded-md py-4 bg-gradient-to-b from-white via-blue-50 to-blue-300">
            <h1 className="text-center text-2xl font-serif mb-3">Get free Consultation</h1>
            <form onSubmit={handleSubmit}>
                <input type="text"
                autoComplete="off"
                value={formData.name}
                onChange={setValue}
                name="name"
                id="name"
                placeholder="Full Name"
                className="block m-auto w-[80%] mt-2 py-1 text-sm outline-none bg-transparent border-b-2 border-blue-400 placeholder-slate-500"/>
                
                <input type="text"
                autoComplete="off"
                value={formData.country}
                onChange={setValue}
                name="country"
                id="country"
                placeholder="Select Country"
                className="block m-auto w-[80%] mt-2 py-1 text-sm outline-none bg-transparent border-b-2 border-blue-400 placeholder-slate-500"/>
                
                <input type="text"
                autoComplete="off"
                value={formData.email}
                onChange={setValue}
                name="email"
                id="email"
                placeholder="Email Address"
                className="block m-auto w-[80%] mt-2 py-1 text-sm outline-none bg-transparent border-b-2 border-blue-400 placeholder-slate-500"/>
                
                <input type="text"
                autoComplete="off"
                value={formData.contact}
                onChange={setValue}
                name="contact"
                id="contact"
                placeholder="Contact Number"
                className="block m-auto w-[80%] mt-2 mb-6 py-1 text-sm outline-none bg-transparent border-b-2 border-blue-400 placeholder-slate-500"/>
                
                <textarea
                value={formData.msg}
                onChange={setValue}
                name="msg"
                rows="3"
                id="patientDetails"
                placeholder="Write your Medical Concern"
                className="w-[82%] block m-auto outline-none rounded-md px-1 text-sm placeholder-slate-500"/>
                
                <button type="submit"
                disabled={isLoading}
                className={`text-lg block m-auto w-[80%] mt-4 p-2 text-md text-white rounded-md transition-transform duration-300 ease-in-out hover:scale-[1.02]
                ${isLoading ? 'bg-gradient-to-r from-blue-800 via-cyan-700 to-blue-800' : 'bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-700'}`}
                >{isLoading ? 'Wait...' : 'Submit'}</button>
                
                <p className="w-[79%] text-center m-auto text-sm font-semibold mt-3">By submitting the form I agree to the Terms and Conditions and Privacy Policy of MedCare.</p>
            </form>
            <Massage open={activeAlert} alertMsg='We Will get in touch with you soon !'/>
        </div>
    )
}

export default UserInfo;