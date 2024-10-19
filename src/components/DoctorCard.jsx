import react, { forwardRef } from 'react';

const DoctorCard = forwardRef(({doctor}, ref)=> {
    
    return(
        <div ref={ref} className='doctors_card sm:w-60 w-[170px] shadow-lg overflow-hidden rounded-3xl sm:mb-3 mb-2 mt-2'>
            <div className='doctors_sub_card aspect-[19/10] bg-blue-500 rounded-3xl flex justify-center items-end transition-colors duration-500'>
                <img src={doctor.img} alt={doctor.img} className='bg-cyan-400 aspect-[1/1] w-[45%] rounded-full border-[3px] border-white relative top-7'/>
            </div>
            <div className='text-center mt-7' style={{fontFamily: `"Convergence", sans-serif`}}>
                <h2 className='font-bold sm:text-lg text-xs'>{doctor.name}</h2>
                <p className='sm:text-sm text-xs mt-[-2px] sm:mt-[-5px] text-gray-500 sm:pb-3 pb-1 border-b-2 border-blue-700 w-[80%] m-auto'>{doctor.type}</p>
                <p className='text-left sm:text-sm text-[10px] w-[80%] m-auto mt-1'>{doctor.info}</p>
                <button className='hover:bg-blue-900 w-[85%] h-8 sm:text-sm text-xs bg-blue-700 text-white rounded-lg sm:my-4 my-2 transition-colors duration-500'>Book an Appointment</button>
            </div>
        </div>
    )  
})

export default DoctorCard;