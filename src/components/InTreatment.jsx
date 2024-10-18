import intreatmentData from '../data/intreatmentData';

function InTreatment({name}) {
    const items = intreatmentData[name];
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-4 sm:grid-cols-3 justify-items-center w-full justify-around bg-[#faf6f6] pt-5 pb-12'>
                    {
                        items.map((item, idx)=>(
                            <div key={idx} className='flex w-[85%] aspect-[16/10] rounded-2xl drop-shadow-xl overflow-hidden mb-6 relative'>
                                <div className='text-white w-[65%] h-full bg-[url("/img/treatment-card.png")] bg-[length:100%_100%] z-20 rounded-l-2xl'>
                                    <h2 className='font-bold ml-4 mt-4 text-3xl'>{item.name}</h2>
                                    <p className='text-xs mt-[40%] ml-3 pb-1 w-[60%]'>{item.info}</p>
                                </div>
                                <img src={item.img} alt={item.img} className='w-[50%] h-full absolute right-0 object-cover rounded-r-2xl'/>
                            </div>       
                        ))
                    }
            </div>
        </>
    )
}

export default InTreatment;