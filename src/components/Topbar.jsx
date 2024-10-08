import react from 'react'
import SearchIcon from '@mui/icons-material/Search';

function Topbar() {
    
    return (
    <>
        <div className="bg-gradient-to-r from-cyan-200 via-blue-300 to-blue-400 border h-16 px-3 flex justify-between items-center">
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
    </>);
}

export default Topbar;