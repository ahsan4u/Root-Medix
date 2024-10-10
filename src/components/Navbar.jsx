import react from 'react';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';

function Navbar() {
    window.onscroll = ()=> {
        const topBar = document.querySelector('.topBar');
        const marginDiv = document.querySelector('.forMargin');
        const navBar = document.querySelector('.navBar');
        if(window.scrollY >= topBar.offsetHeight) {
            marginDiv.style.marginTop = `${navBar.offsetHeight}px`;
            navBar.style.cssText = 'position: fixed; top: 0; background: rgba(255, 255, 255, 0.121); backdrop-filter: blur(6px);';
        } else {
            navBar.style.cssText = '';
            marginDiv.style.marginTop = `0`;
        }
    }
    
    return (
        <>
            <div className="topBar bg-gradient-to-r from-cyan-200 via-blue-300 to-blue-400 border h-16 px-3 flex justify-between items-center">
                <img src="/logo.png" alt="Root-Medix" className='hue-rotate-90 h-14 ml-2'/>
                <div className='flex justify-between w-[550px]'>
                    <select name="language" id="lang" className='outline-none text-center w-28 h-10 rounded-full bg-gradient-to-r from-blue-100 via-cyan-50 to-blue-100'>
                        <option value="eng">English</option>
                        <option value="hin">Hindi</option>
                        <option value="arab">Arabic</option>
                    </select>
                    <div className='bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-50 rounded-full overflow-hidden flex items-center'>
                        <input type="text"
                        name="search"
                        id="search"
                        placeholder="Search here..."
                        className='w-72 h-10 pl-3 outline-none text-md bg-transparent'/>
                        <button className='bg-blue-600 h-[90%] mx-0.5 w-10 rounded-full'><SearchIcon className='text-white'/></button>
                    </div>
                </div>
            </div>

            <ol className='navBar flex gap-4 pl-4  py-1 font-serif text-lg bg-white w-full transition-colors duration-[0.5s] z-10'>
                <li className='bg-gradient-to-r from-blue-200 via-cyan-100 to-blue-200  hover:bg-gradient-to-r hover:from-blue-300 hover:via-cyan-200 hover:to-blue-300 border border-gray-400 rounded-full px-6 py-[3px] cursor-pointer'><HomeIcon className='text-blue-900'/></li>
                <li className='bg-gradient-to-r from-blue-200 via-cyan-100 to-blue-200  hover:bg-gradient-to-r hover:from-blue-300 hover:via-cyan-200 hover:to-blue-300 border border-gray-400 rounded-full px-4 py-1 cursor-pointer'>Doctor</li>
                <li className='bg-gradient-to-r from-blue-200 via-cyan-100 to-blue-200  hover:bg-gradient-to-r hover:from-blue-300 hover:via-cyan-200 hover:to-blue-300 border border-gray-400 rounded-full px-4 py-1 cursor-pointer'>Hospital</li>
                <li className='bg-gradient-to-r from-blue-200 via-cyan-100 to-blue-200  hover:bg-gradient-to-r hover:from-blue-300 hover:via-cyan-200 hover:to-blue-300 border border-gray-400 rounded-full px-4 py-1 cursor-pointer'>Treatment Cost</li>
                <li className='bg-gradient-to-r from-blue-200 via-cyan-100 to-blue-200  hover:bg-gradient-to-r hover:from-blue-300 hover:via-cyan-200 hover:to-blue-300 border border-gray-400 rounded-full px-4 py-1 cursor-pointer'>Medical Visa</li>
                <li className='bg-gradient-to-r from-blue-200 via-cyan-100 to-blue-200  hover:bg-gradient-to-r hover:from-blue-300 hover:via-cyan-200 hover:to-blue-300 border border-gray-400 rounded-full px-4 py-1 cursor-pointer'>Contact us</li>
                <li className='bg-gradient-to-r from-blue-200 via-cyan-100 to-blue-200  hover:bg-gradient-to-r hover:from-blue-300 hover:via-cyan-200 hover:to-blue-300 border border-gray-400 rounded-full px-4 py-1 cursor-pointer'>About us</li>
                <li className='bg-gradient-to-r from-blue-200 via-cyan-100 to-blue-200  hover:bg-gradient-to-r hover:from-blue-300 hover:via-cyan-200 hover:to-blue-300 border border-gray-400 rounded-full px-4 py-1 cursor-pointer'>Blogs</li>
            </ol>
            <div className='forMargin'></div>
        </>
    )
}

export default Navbar;