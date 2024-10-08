import React from "react";
import { useState } from "react";
import axios from "axios";
import Massage from "./massage";
import STDcode from "../../public/STDcode";

function UserInfo() {
    const [formData, setFormData] = useState({name: '', email: '', country: '', contact: '', std: '', msg: ''});
    const [isLoading, setIsLoading] = useState(false);
    const [activeAlert, setActiveAlert] = useState(false);

    function setValue(e) {
        const {name, value} = e.target;
        setFormData((preVal)=> ({...preVal, [name]: value}));
        if(document.querySelector('#email').textContent.includes('.com')) document.querySelector('#contact').focus();
        
        if(name == 'country') {
            if(value == '') {
                document.querySelector('.options').innerHTML = '';
                setFormData((preVal)=> ({...preVal, std: ''}));
                return
            }
            const filterd = STDcode.filter(code=> code.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())).slice(0, 5);
            document.querySelector('.options').innerHTML = '';
            filterd.forEach((code)=> {
                const option = document.createElement('div');
                option.textContent = `⨀ ${code.name}`;
                option.onmouseover = ()=> { option.style.background = 'darkcyan'; option.style.color = 'white'; }
                option.onmouseout = ()=> { option.style.background = 'transparent'; option.style.color = 'black'; }
                option.style.cssText = 'font-size: 14px; padding: 4px 0; border-bottom: 1px solid darkcyan; width: 230px';
                option.onclick = ()=> {
                    setFormData((preVal)=> ({...preVal, [name]: code.name, std: code.code}));
                    document.querySelector('.options').innerHTML = '';
                    document.querySelector('#email').focus();
                }
                document.querySelector('.options').appendChild(option);
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
                
                <div className="relative w-[80%] m-auto">
                    <input
                    value={formData.country}
                    placeholder="Select Country"
                    autoComplete="off"
                    onChange={setValue}
                    name="country"
                    className="block w-[100%] mt-2 py-1 text-sm outline-none bg-transparent border-b-2 border-blue-400 placeholder-slate-500"
                    id="country"/>
                    
                    <div className="options absolute bg-gradient-to-b from-white via-blue-100 to-blue-100"></div>
                </div>
                
                <input type="text"
                autoComplete="off"
                value={formData.email}
                onChange={setValue}
                name="email"
                id="email"
                placeholder="Email Address"
                className="block m-auto w-[80%] mt-2 py-1 text-sm outline-none bg-transparent border-b-2 border-blue-400 placeholder-slate-500"/>
                
                <div className="m-auto w-[80%] flex mt-2 mb-6">
                    <p className="std border-b-2 border-blue-400 mr-1 w-[18%] text-sm py-1">{formData.std}</p>
                    <input type="number"
                    autoComplete="off"
                    value={formData.contact}
                    onChange={setValue}
                    name="contact"
                    id="contact"
                    placeholder="Contact Number"
                    className="block w-[80%] py-1 pl-1 text-sm outline-none bg-transparent border-b-2 border-blue-400 placeholder-slate-500"/>
                </div>

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
                >{isLoading ? 'Sending...' : 'Submit'}</button>
                
                <p className="w-[79%] text-center m-auto text-sm font-semibold mt-3">By submitting this form,<br/> I agree to Root Medix's Terms & Privacy Policy.</p>
            </form>
            <Massage open={activeAlert} alertMsg='We Will get in touch with you soon !'/>
        </div>
    )
}
export default UserInfo;