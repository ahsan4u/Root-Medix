import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ReorderIcon from '@mui/icons-material/Reorder';
import { useEffect } from 'react';

function Navbar() {
    // Scroll to hide Navbar in mobile view
    useEffect(()=> {
        if(window.innerWidth < 640) {
            document.querySelector('.topBar').style.width = '100vw';
            document.querySelector('.topBar').style.position = 'fixed';
            document.querySelector('.MobileSearchCont .inputDiv').style.background = 'transparent';    
            document.querySelector('.forMargin').style.marginTop = `${document.querySelector('.topBar').offsetHeight}px`
        }
    },[window.innerWidth]);

    window.onscroll = ()=> {
        const topBar = document.querySelector('.topBar');
        const navBar = document.querySelector('.navBar');
        const marginDiv = document.querySelector('.forMargin');
        
        if(window.innerWidth > 640) {
            if(window.scrollY >= topBar.offsetHeight) {
                marginDiv.style.marginTop = `${navBar.offsetHeight}px`;
                navBar.style.cssText = 'position: fixed; top: 0; background: rgba(255, 255, 255, 0.121); backdrop-filter: blur(6px);';
            } else {
                navBar.style.cssText = '';
                marginDiv.style.marginTop = `0`;
            }
        } else {
            
            if(document.querySelector('.navBarToggle').style.opacity == '1') {
                window.scrollTo(window.scrollX, window.scrollY);
            }
        }
    }
    
    function toggleNavbar(e) {
        if(!document.querySelector('.navBarToggle').style.opacity) {
            // First remove the search
            document.querySelector('.MobileSearchCont .inputDiv').style.width = '46px';
            document.querySelector('.MobileSearchCont .inputDiv').style.background = 'transparent';
            document.querySelector('.MobileSearchCont .inputDiv input').style.display = 'none';
            document.querySelector('.MobileSearchCont').style.cssText = 'top: 11px; right: 58px; transition: top 0.5s ease-in-out, right 0.2s ease-in-out;';
            document.querySelector('.langSidebarDiv').style.width = '188px';
            document.querySelector('.MobileSearchCont .inputDiv button').style.margin = null;
            document.querySelector('.inputDiv').style.border = null;
            
            document.querySelector('.navBarToggle').style.width= '80vw';
            document.querySelector('.navBarToggle').style.opacity= '1';
            e.currentTarget.style.background='lightblue';
        } else {
            document.querySelector('.navBarToggle').style.width= '0';
            document.querySelector('.navBarToggle').style.opacity= null;
            document.querySelector('.sidebarBtn').style.background='transparent';
        }
    }

    function MobileSearch() {
        const inputDiv = document.querySelector('.MobileSearchCont .inputDiv');
        const input = document.querySelector('.MobileSearchCont .inputDiv input');
        if(inputDiv.offsetWidth < 50) {
            // first remove sidebar if visible
            document.querySelector('.navBarToggle').style.width= '0';
            document.querySelector('.navBarToggle').style.opacity= null;
            document.querySelector('.sidebarBtn').style.background='transparent';

            inputDiv.style.width = '98vw';
            inputDiv.style.background = 'lightcyan';
            document.querySelector('.langSidebarDiv').style.width = '160px';
            document.querySelector('.MobileSearchCont').style.cssText = 'top: 68px; right: 1vw; transition: top 0.2s ease-in-out, right 0.5s ease-in-out;';
            document.querySelector('.MobileSearchCont .inputDiv button').style.margin = '4px';
            document.querySelector('.inputDiv').style.border = '1px solid black';
            setTimeout(()=> {
                input.style.display = 'block';
                input.focus();
            }, 500);
        } else if(inputDiv.offsetWidth > 50 && !input.value) {
            inputDiv.style.width = '46px';
            input.style.display = 'none';
            inputDiv.style.background = 'transparent';
            document.querySelector('.MobileSearchCont').style.cssText = 'top: 11px; right: 58px; transition: top 0.5s ease-in-out, right 0.2s ease-in-out;';
            document.querySelector('.langSidebarDiv').style.width = '188px';
            document.querySelector('.MobileSearchCont .inputDiv button').style.margin = null;
            document.querySelector('.inputDiv').style.border = null;
        }
    }
    
    return (
        <>
            <div className="topBar z-20 bg-gradient-to-r from-cyan-200 via-blue-300 to-blue-400 h-16 flex justify-between items-center">
                <img src="/logo.png" alt="Root-Medix" className=' h-10 ml-0  sm:hue-rotate-90 sm:h-14 sm:ml-2'/>
                <div className='langSidebarDiv flex justify-between items-center w-[188px] sm:w-[550px] transition-all duration-500'>
                    <select name="language" id="lang" className='shadow-inner shadow-slate-500 active:shadow-slate-700 outline-none sm:border-none text-center text-xs sm:text-[16px] sm:w-28 w-[75px] h-8 sm:h-10 w rounded-full bg-cyan-200 sm:bg-gradient-to-r sm:from-blue-100 sm:via-cyan-50 sm:to-blue-100'>
                        <option value="eng">English</option>
                        <option value="hin">Hindi</option>
                        <option value="arab">Arabic</option>
                    </select>
                    {window.innerWidth > 640 && (
                    <div className='bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-50 rounded-full overflow-hidden flex items-center'>
                        <input type="text"
                        name="search"
                        id="search"
                        placeholder="Search here..."
                        className='w-72 h-10 pl-3 outline-none text-md bg-transparent'/>
                        <button className='bg-blue-400 aspect-[1/1] mx-0.5 w-9 rounded-full'><SearchIcon className='text-white'/></button>
                    </div>)}

                    {window.innerWidth < 640 && (
                        <button onClick={toggleNavbar} className='sidebarBtn px-2 py-[6px] bg-[rgb(62,161,181)] mr-2 rounded-xl shadow-inner shadow-slate-500 active:shadow-slate-700 z-50 transition-colors duration-500'><ReorderIcon className= 'bg-transparent'/></button>
                    )}
                </div>
            </div>

            {window.innerWidth < 640 && (
            <div className='MobileSearchCont fixed top-[11px] right-[58px] z-20'>
                <div className='inputDiv bg-[lightcyan] rounded-full overflow-hidden w-[46px] flex justify-end items-center transition-all duration-500'>
                    <input type="text"
                    name="search"
                    id="search"
                    placeholder="Search here..."
                    className='w-[90%] h-12 pl-3 hidden outline-none text-md bg-transparent'/>
                    <button onClick={MobileSearch} className='border border-slate-500 shadow-inner shadow-slate-500 active:shadow-slate-700 bg-cyan-200 aspect-[1/1] w-11 rounded-full'><SearchIcon className='searchIcon'/></button>
                </div>
            </div>)}

            <ol className='navBar flex justify-end sm:justify-start w-full sm:transition-colors sm:duration-[0.5s]'>
            <div className='navBarToggle sm:flex bg-[rgb(82,82,82)] fixed z-10 top-16 sm:static w-0 overflow-hidden opacity-0 sm:opacity-100 sm:w-auto h-full sm:h-auto sm:gap-4 sm:pl-4  sm:py-1 font-serif text-lg sm:bg-[transparent] transition-all duration-500'>
                <li className='text-white sm:text-black sm:bg-gradient-to-r sm:from-blue-200 sm:via-cyan-100 sm:to-blue-200  sm:hover:bg-gradient-to-r sm:hover:from-blue-300 sm:hover:via-cyan-200 sm:hover:to-blue-300 border-b border-gray-300 sm:border sm:border-gray-400 sm:rounded-full px-6 py-4 sm:py-[3px] cursor-pointer'><HomeIcon className='sm:text-blue-900'/></li>
                <li className='text-white sm:text-black sm:bg-gradient-to-r sm:from-blue-200 sm:via-cyan-100 sm:to-blue-200  sm:hover:bg-gradient-to-r sm:hover:from-blue-300 sm:hover:via-cyan-200 sm:hover:to-blue-300 border-b border-gray-300 sm:border sm:border-gray-400 sm:rounded-full px-4 py-4 sm:py-1 cursor-pointer'>Doctor</li>
                <li className='text-white sm:text-black sm:bg-gradient-to-r sm:from-blue-200 sm:via-cyan-100 sm:to-blue-200  sm:hover:bg-gradient-to-r sm:hover:from-blue-300 sm:hover:via-cyan-200 sm:hover:to-blue-300 border-b border-gray-300 sm:border sm:border-gray-400 sm:rounded-full px-4 py-4 sm:py-1 cursor-pointer'>Hospital</li>
                <li className='text-white sm:text-black sm:bg-gradient-to-r sm:from-blue-200 sm:via-cyan-100 sm:to-blue-200  sm:hover:bg-gradient-to-r sm:hover:from-blue-300 sm:hover:via-cyan-200 sm:hover:to-blue-300 border-b border-gray-300 sm:border sm:border-gray-400 sm:rounded-full px-4 py-4 sm:py-1 cursor-pointer'>Treatment Cost</li>
                <li className='text-white sm:text-black sm:bg-gradient-to-r sm:from-blue-200 sm:via-cyan-100 sm:to-blue-200  sm:hover:bg-gradient-to-r sm:hover:from-blue-300 sm:hover:via-cyan-200 sm:hover:to-blue-300 border-b border-gray-300 sm:border sm:border-gray-400 sm:rounded-full px-4 py-4 sm:py-1 cursor-pointer'>Medical Visa</li>
                <li className='text-white sm:text-black sm:bg-gradient-to-r sm:from-blue-200 sm:via-cyan-100 sm:to-blue-200  sm:hover:bg-gradient-to-r sm:hover:from-blue-300 sm:hover:via-cyan-200 sm:hover:to-blue-300 border-b border-gray-300 sm:border sm:border-gray-400 sm:rounded-full px-4 py-4 sm:py-1 cursor-pointer'>Contact us</li>
                <li className='text-white sm:text-black sm:bg-gradient-to-r sm:from-blue-200 sm:via-cyan-100 sm:to-blue-200  sm:hover:bg-gradient-to-r sm:hover:from-blue-300 sm:hover:via-cyan-200 sm:hover:to-blue-300 border-b border-gray-300 sm:border sm:border-gray-400 sm:rounded-full px-4 py-4 sm:py-1 cursor-pointer'>About us</li>
                <li className='text-white sm:text-black sm:bg-gradient-to-r sm:from-blue-200 sm:via-cyan-100 sm:to-blue-200  sm:hover:bg-gradient-to-r sm:hover:from-blue-300 sm:hover:via-cyan-200 sm:hover:to-blue-300 border-b border-gray-300 sm:border sm:border-gray-400 sm:rounded-full px-4 py-4 sm:py-1 cursor-pointer'>Blogs</li>
            </div>
            </ol>

            <div className='forMargin'></div>
        </>
    )
}

export default Navbar;