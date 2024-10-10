import react from 'react';

function Footer() {

    return(
        <>
            <div className="footer-container text-white bg-[rgb(82,82,82)]">
                <button className='block m-auto text-xl rounded-full bg-[rgb(62,161,181)] px-8 py-2 relative bottom-5'     style={{fontFamily: `"Ubuntu", sans-serif`, fontWeight: '500'}}>Consultant</button>
                <div className="link-column grid grid-cols-4 pb-10 justify-items-center">
                    <div className="important-links w-[70%]">
                        <h3 className='border-b-2 border-[rgb(255,118,60)] text-2xl pr-3 pb-1 mt-1 mb-5 font-mono' style={{fontFamily: `"Ubuntu", sans-serif`, fontWeight: '500'}}>Important Links</h3>
                        <p className='my-1'>• Top Doctor</p>
                        <p className='my-1'>• Top Hospital</p>
                        <p className='my-1'>• Treatment Cost</p>
                        <p className='my-1'>• Medical Visa</p>
                        <p className='my-1'>• About Us</p>
                    </div>

                    <div className="important-links w-[70%]">
                        <h3 className='border-b-2 border-[rgb(255,118,60)] text-2xl pr-3 pb-1 mt-1 mb-5 font-mono' style={{fontFamily: `"Ubuntu", sans-serif`, fontWeight: '500'}}>Treatment</h3>
                        <p className='my-1'>• Cardiology</p>
                        <p className='my-1'>• Spine</p>
                        <p className='my-1'>• Gastroenterology</p>
                        <p className='my-1'>• Orthopadic</p>
                        <p className='my-1'>• Urology</p>
                    </div>

                    <div className="important-links w-[70%]">
                        <h3 className='border-b-2 border-[rgb(255,118,60)] text-2xl pr-3 pb-1 mt-1 mb-5 font-mono' style={{fontFamily: `"Ubuntu", sans-serif`, fontWeight: '500'}}>Our Hospital</h3>
                        <p className='my-2'>• Max Hospital, Saket</p>
                        <p className='my-2'>• BLK Max Hospital</p>
                        <p className='my-2'>• Max Hospital, Dwarka</p>
                        <p className='my-2'>• Aakash Hospital Dwarka</p>
                    </div>

                    <div className="important-links w-[70%]">
                        <h3 className='border-b-2 border-[rgb(255,118,60)] text-2xl pr-3 pb-1 mt-1 mb-5 font-mono' style={{fontFamily: `"Ubuntu", sans-serif`, fontWeight: '500'}}>Contact Us</h3>
                        <p className='my-1 border border-slate-500 p-1 rounded-lg mb-2'>Mob.: +918957510221 <br/> Email: noman@gmail.com</p>
                        <p className='my-1 border border-slate-500 p-1 rounded-lg mb-2'>Mob.: +918957510221 <br/> Email: noman@gmail.com</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;