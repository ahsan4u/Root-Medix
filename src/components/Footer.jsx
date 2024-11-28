function Footer() {

    return(
        <>
            <div className="footer-container text-white bg-[#3d3d3d] mt-20">
                <button className='block m-auto text-xl rounded-full bg-[rgb(62,161,181)] px-8 py-2 relative bottom-5' style={{fontFamily: `"Ubuntu", sans-serif`, fontWeight: '500'}}>Consultant</button>
                <div style={{fontFamily: `convergence, 'sans-serif`}} className="link-column grid sm:grid-cols-4 grid-cols-1 pb-10 justify-items-center">
                    <div className="important-links w-[70%]  sm:mb-0 mb-8">
                        <h3 className='border-b-2 border-[rgb(255,118,60)] text-2xl pr-3 pb-1 mt-1 mb-5 font-mono' style={{fontFamily: `"Ubuntu", sans-serif`, fontWeight: '500'}}>Important Links</h3>
                        <p className='my-1 sm:text-[16px] text-[20px] text-slate-300'><span className='text-white'>•</span> Top Doctor</p>
                        <p className='my-1 sm:text-[16px] text-[20px] text-slate-300'><span className='text-white'>•</span> Top Hospital</p>
                        <p className='my-1 sm:text-[16px] text-[20px] text-slate-300'><span className='text-white'>•</span> Treatment Cost</p>
                        <p className='my-1 sm:text-[16px] text-[20px] text-slate-300'><span className='text-white'>•</span> Medical Visa</p>
                        <p className='my-1 sm:text-[16px] text-[20px] text-slate-300'><span className='text-white'>•</span> About Us</p>
                    </div>

                    <div className="important-links w-[70%]  sm:mb-0 mb-8">
                        <h3 className='border-b-2 border-[rgb(255,118,60)] text-2xl pr-3 pb-1 mt-1 mb-5 font-mono' style={{fontFamily: `"Ubuntu", sans-serif`, fontWeight: '500'}}>Treatment</h3>
                        <p className='my-1 sm:text-[16px] text-[20px] text-slate-300'><span className='text-white'>•</span> Cardiology</p>
                        <p className='my-1 sm:text-[16px] text-[20px] text-slate-300'><span className='text-white'>•</span> Spine</p>
                        <p className='my-1 sm:text-[16px] text-[20px] text-slate-300'><span className='text-white'>•</span> Gastroenterology</p>
                        <p className='my-1 sm:text-[16px] text-[20px] text-slate-300'><span className='text-white'>•</span> Orthopadic</p>
                        <p className='my-1 sm:text-[16px] text-[20px] text-slate-300'><span className='text-white'>•</span> Urology</p>
                    </div>

                    <div className="important-links w-[70%]  sm:mb-0 mb-8">
                        <h3 className='border-b-2 border-[rgb(255,118,60)] text-2xl pr-3 pb-1 mt-1 mb-5 font-mono' style={{fontFamily: `"Ubuntu", sans-serif`, fontWeight: '500'}}>Our Hospital</h3>
                        <p className='my-2 sm:text-[16px] text-[20px] text-slate-300'><span className='text-white'>•</span> Max Hospital, Saket</p>
                        <p className='my-2 sm:text-[16px] text-[20px] text-slate-300'><span className='text-white'>•</span> BLK Max Hospital</p>
                        <p className='my-2 sm:text-[16px] text-[20px] text-slate-300'><span className='text-white'>•</span> Max Hospital, Dwarka</p>
                        <p className='my-2 sm:text-[16px] text-[20px] text-slate-300'><span className='text-white'>•</span> Aakash Hospital Dwarka</p>
                    </div>

                    <div className="important-links w-[70%]  sm:mb-0 mb-8">
                        <h3 className='border-b-2 border-[rgb(255,118,60)] text-2xl pr-3 pb-1 mt-1 mb-5 font-mono' style={{fontFamily: `"Ubuntu", sans-serif`, fontWeight: '500'}}>Contact Us</h3>
                        <p className='my-1 sm:text-[16px] text-[20px] text-slate-300 border border-slate-500 p-1 rounded-lg mb-2'>Mob.: +918957510221 <br/> Email: noman@gmail.com</p>
                        <p className='my-1 sm:text-[16px] text-[20px] text-slate-300 border border-slate-500 p-1 rounded-lg mb-2'>Mob.: +918957510221 <br/> Email: noman@gmail.com</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;