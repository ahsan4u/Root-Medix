import react from 'react';
import HomeIcon from '@mui/icons-material/Home';
function Navbar() {

    return (
        <>
            <ol className='flex gap-4 pl-4  my-2 font-serif text-lg'>
                <li className='bg-gradient-to-r from-blue-200 via-cyan-100 to-blue-200  hover:bg-gradient-to-r hover:from-blue-300 hover:via-cyan-200 hover:to-blue-300 border border-gray-400 rounded-full px-6 py-[3px] cursor-pointer'><HomeIcon className='text-blue-900'/></li>
                <li className='bg-gradient-to-r from-blue-200 via-cyan-100 to-blue-200  hover:bg-gradient-to-r hover:from-blue-300 hover:via-cyan-200 hover:to-blue-300 border border-gray-400 rounded-full px-4 py-1 cursor-pointer'>Doctor</li>
                <li className='bg-gradient-to-r from-blue-200 via-cyan-100 to-blue-200  hover:bg-gradient-to-r hover:from-blue-300 hover:via-cyan-200 hover:to-blue-300 border border-gray-400 rounded-full px-4 py-1 cursor-pointer'>Hospital</li>
                <li className='bg-gradient-to-r from-blue-200 via-cyan-100 to-blue-200  hover:bg-gradient-to-r hover:from-blue-300 hover:via-cyan-200 hover:to-blue-300 border border-gray-400 rounded-full px-4 py-1 cursor-pointer'>Treatment Cost</li>
                <li className='bg-gradient-to-r from-blue-200 via-cyan-100 to-blue-200  hover:bg-gradient-to-r hover:from-blue-300 hover:via-cyan-200 hover:to-blue-300 border border-gray-400 rounded-full px-4 py-1 cursor-pointer'>Medical Visa</li>
                <li className='bg-gradient-to-r from-blue-200 via-cyan-100 to-blue-200  hover:bg-gradient-to-r hover:from-blue-300 hover:via-cyan-200 hover:to-blue-300 border border-gray-400 rounded-full px-4 py-1 cursor-pointer'>Contact us</li>
                <li className='bg-gradient-to-r from-blue-200 via-cyan-100 to-blue-200  hover:bg-gradient-to-r hover:from-blue-300 hover:via-cyan-200 hover:to-blue-300 border border-gray-400 rounded-full px-4 py-1 cursor-pointer'>About us</li>
                <li className='bg-gradient-to-r from-blue-200 via-cyan-100 to-blue-200  hover:bg-gradient-to-r hover:from-blue-300 hover:via-cyan-200 hover:to-blue-300 border border-gray-400 rounded-full px-4 py-1 cursor-pointer'>Blog</li>
            </ol>
        </>
    )
}

export default Navbar;