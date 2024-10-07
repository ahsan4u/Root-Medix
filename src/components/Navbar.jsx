import react from 'react'
import STDcode from '../../public/STDcode';

function Navbar() {

    return (
        <>
            <ol className='flex gap-4 pl-4  my-2 font-serif text-lg'>
                <li className='bg-gradient-to-r from-blue-200 via-cyan-100 to-blue-200 border border-gray-400 rounded-full px-4 py-1 cursor-pointer'>Home</li>
                <li className='bg-gradient-to-r from-blue-200 via-cyan-100 to-blue-200 border border-gray-400 rounded-full px-4 py-1 cursor-pointer'>Doctor</li>
                <li className='bg-gradient-to-r from-blue-200 via-cyan-100 to-blue-200 border border-gray-400 rounded-full px-4 py-1 cursor-pointer'>Hospital</li>
                <li className='bg-gradient-to-r from-blue-200 via-cyan-100 to-blue-200 border border-gray-400 rounded-full px-4 py-1 cursor-pointer'>Treatment</li>
                <li className='bg-gradient-to-r from-blue-200 via-cyan-100 to-blue-200 border border-gray-400 rounded-full px-4 py-1 cursor-pointer'>Blog</li>
                <li className='bg-gradient-to-r from-blue-200 via-cyan-100 to-blue-200 border border-gray-400 rounded-full px-4 py-1 cursor-pointer'>Contact us</li>
                <span>🇧🇮</span>
            </ol>
        </>
    )
}

export default Navbar;