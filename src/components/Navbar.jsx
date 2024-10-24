import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import Lottie from 'lottie-react';
import menuEffect from '../animated Icon/menuV2.json';
import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const menubarRef = useRef(null);

    useEffect(()=> {
        if(document.querySelector('.navBarToggle').style.opacity) {
            document.querySelector('.navBarToggle').style.width= '0';
            document.querySelector('.navBarToggle').style.opacity= null;
            document.querySelector('html').style.overflow = 'scroll';
            menubarRef.current.playSegments([40, 0], true);
        }
    },[useLocation()])
    
    useEffect(()=> {
        document.querySelector('.navBarToggle').addEventListener('touchmove', ()=> {
            if(document.querySelector('.navBarToggle').style.opacity) {
                document.querySelector('.navBarToggle').style.width= '0';
                document.querySelector('.navBarToggle').style.opacity= null;
                document.querySelector('html').style.overflow = 'scroll';
                menubarRef.current.playSegments([40, 0], true);
            }
        })
    },[]);

    function toggleNavbar(e) {
        menubarRef.current.setSpeed(2);
        if(!document.querySelector('.navBarToggle').style.opacity) {
            // First remove the search
            document.querySelector('.MobileSearchCont .inputDiv').style.width = '46px';
            document.querySelector('.MobileSearchCont .inputDiv').style.background = 'transparent';
            document.querySelector('.MobileSearchCont .inputDiv input').style.display = 'none';
            document.querySelector('.MobileSearchCont').style.cssText = 'top: 11px; right: 62px; transition: top 0.5s ease-in-out, right 0.2s ease-in-out;';
            document.querySelector('.langSidebarDiv').style.width = '188px';
            document.querySelector('.MobileSearchCont .inputDiv button').style.margin = null;
            document.querySelector('.MobileSearchCont .inputDiv button').style.background = 'transparent';
            
            document.querySelector('.navBarToggle').style.width= '80vw';
            document.querySelector('.navBarToggle').style.opacity= '1';
            document.querySelector('html').style.overflow = 'hidden';
            
            menubarRef.current.play();
            menubarRef.current.playSegments([0, 60], true);
        } else {
            document.querySelector('.navBarToggle').style.width= '0';
            document.querySelector('.navBarToggle').style.opacity= null;
            document.querySelector('html').style.overflow = 'scroll';
            menubarRef.current.playSegments([40, 0], true);
        }
    }
    
    function MobileSearch() {
        const inputDiv = document.querySelector('.MobileSearchCont .inputDiv');
        const input = document.querySelector('.MobileSearchCont .inputDiv input');
        if(inputDiv.offsetWidth < 50) {
            // first remove sidebar if visible
            if(document.querySelector('.navBarToggle').style.opacity) {
                document.querySelector('.navBarToggle').style.width= '0';
                document.querySelector('.navBarToggle').style.opacity= null;
                document.querySelector('.sidebarBtn').style.background='transparent';
                document.querySelector('html').style.overflow = 'scroll';
                menubarRef.current.playSegments([40, 0], true);
            }
            
            inputDiv.style.width = '98vw';
            inputDiv.style.background = 'rgb(82,82,82)';
            document.querySelector('.langSidebarDiv').style.width = '140px';
            document.querySelector('.MobileSearchCont').style.cssText = 'top: 68px; right: 1vw; transition: top 0.2s ease-in-out, right 0.5s ease-in-out;';
            document.querySelector('.MobileSearchCont .inputDiv button').style.margin = '4px';
            document.querySelector('.MobileSearchCont .inputDiv button').style.background = 'white';
            setTimeout(()=> {
                input.style.display = 'block';
                input.focus();
            }, 500);
        } else if(inputDiv.offsetWidth > 50 && !input.value) {
            inputDiv.style.width = '46px';
            input.style.display = 'none';
            inputDiv.style.background = 'transparent';
            document.querySelector('.MobileSearchCont').style.cssText = 'top: 11px; right: 62px; transition: top 0.5s ease-in-out, right 0.2s ease-in-out;';
            document.querySelector('.langSidebarDiv').style.width = '188px';
            document.querySelector('.MobileSearchCont .inputDiv button').style.margin = null;
            document.querySelector('.MobileSearchCont .inputDiv button').style.background = 'transparent';
        }
    }
    
    return (
        <>
            <div className="topBar sticky top-0 lg:static z-20 bg-gradient-to-r from-cyan-50 via-blue-100 to-blue-200 h-16 flex justify-between items-center lg:pr-3">
                <Link to='/'><img src="./img/logo2.png" alt="Root-Medix" className=' h-12 ml-1 lg:h-14 lg:ml-2'/></Link>
                <div className='langSidebarDiv flex justify-between items-center w-[188px] lg:w-[550px] transition-all duration-500'>
                    <select name="language" id="lang" style={{fontFamily: `convergence, 'sans-serif`}} className='lg:shadow-none shadow-3dUnclicked active:shadow-3dClicked outline-none lg:border-none text-center text-sm lg:text-[16px] lg:w-28 w-[75px] h-10 lg:h-10 w rounded-xl bg-transparent lg:bg-gradient-to-r lg:from-blue-100 lg:via-cyan-50 lg:to-blue-100'>
                        <option value="eng">English</option>
                        <option value="hin">Hindi</option>
                        <option value="arab">Arabic</option>
                    </select>
                    {window.innerWidth > 1020 && (
                    <div className='bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-50 rounded-full overflow-hidden flex items-center'>
                        <input type="text"
                        name="search"
                        id="search"
                        placeholder="Search here..."
                        className='w-72 h-10 pl-3 outline-none text-md bg-transparent'/>
                        <button className='bg-blue-400 aspect-[1/1] mx-0.5 w-9 rounded-full'><SearchIcon className='text-white'/></button>
                    </div>)}

                    {window.innerWidth < 1020 && (
                        <button onClick={toggleNavbar} className='sidebarBtn p-[9px] bg-transparent mr-2 rounded-full shadow-3dUnclicked active:shadow-3dClicked z-50 transition-colors duration-500'>
                            <Lottie lottieRef={menubarRef} animationData={menuEffect} loop={false} autoplay={false} className='w-7 h-7'/>
                        </button>
                    )}
                </div>
            </div>

            {window.innerWidth < 1020 && (
                <div className='MobileSearchCont fixed top-[11px] right-[62px] z-20'>
                <div className='inputDiv rounded-full overflow-hidden w-[46px] flex justify-end items-center transition-all duration-500'>
                    <input type="text"
                    name="search"
                    id="search"
                    placeholder="Search here..."
                    className='w-[90%] text-white h-12 pl-3 hidden outline-none text-md bg-transparent'/>
                    <button onClick={MobileSearch} className='shadow-3dUnclicked active:shadow-3dClicked bg-transparent aspect-[1/1] w-11 rounded-full transition-colors duration-500'><SearchIcon className='searchIcon'/></button>
                </div>
            </div>)}

            <ol className='navBar lg:sticky md:sticky lg:top-0 z-50 flex justify-end lg:justify-start w-full'>
            <div  style={{backdropFilter: 'blur(6px)'}} className='navBarToggle  lg:flex bg-[rgb(82,82,82)] fixed z-50 top-16 lg:static w-0 overflow-hidden opacity-0 lg:opacity-100 lg:w-full h-full lg:h-auto lg:gap-4 lg:pl-4  lg:py-1 font-serif text-md lg:text-lg lg:bg-[transparent] transition-all duration-500'>
                <Link to='/'><li className='text-white lg:text-black lg:bg-gradient-to-r lg:from-blue-200 lg:via-cyan-100 lg:to-blue-200  lg:hover:bg-gradient-to-r lg:hover:from-blue-300 lg:hover:via-cyan-200 lg:hover:to-blue-300 hover:bg-gray-500 border-b border-gray-500 lg:border lg:border-gray-400 lg:rounded-full px-6 py-4 lg:py-[3px] cursor-pointer'><HomeIcon className='lg:text-blue-900'/></li></Link>
                <Link to='/'><li className='text-white lg:text-black lg:bg-gradient-to-r lg:from-blue-200 lg:via-cyan-100 lg:to-blue-200  lg:hover:bg-gradient-to-r lg:hover:from-blue-300 lg:hover:via-cyan-200 lg:hover:to-blue-300 hover:bg-gray-500 border-b border-gray-500 lg:border lg:border-gray-400 lg:rounded-full px-4 py-4 lg:py-1 cursor-pointer'>Doctors</li></Link>
                <Link to='/'><li className='text-white lg:text-black lg:bg-gradient-to-r lg:from-blue-200 lg:via-cyan-100 lg:to-blue-200  lg:hover:bg-gradient-to-r lg:hover:from-blue-300 lg:hover:via-cyan-200 lg:hover:to-blue-300 hover:bg-gray-500 border-b border-gray-500 lg:border lg:border-gray-400 lg:rounded-full px-4 py-4 lg:py-1 cursor-pointer'>Hospitals</li></Link>
                <Link to='/'><li className='text-white lg:text-black lg:bg-gradient-to-r lg:from-blue-200 lg:via-cyan-100 lg:to-blue-200  lg:hover:bg-gradient-to-r lg:hover:from-blue-300 lg:hover:via-cyan-200 lg:hover:to-blue-300 hover:bg-gray-500 border-b border-gray-500 lg:border lg:border-gray-400 lg:rounded-full px-4 py-4 lg:py-1 cursor-pointer'>Treatment Cost</li></Link>
                <Link to='/'><li className='text-white lg:text-black lg:bg-gradient-to-r lg:from-blue-200 lg:via-cyan-100 lg:to-blue-200  lg:hover:bg-gradient-to-r lg:hover:from-blue-300 lg:hover:via-cyan-200 lg:hover:to-blue-300 hover:bg-gray-500 border-b border-gray-500 lg:border lg:border-gray-400 lg:rounded-full px-4 py-4 lg:py-1 cursor-pointer'>Medical Visa</li></Link>
                <Link to='/'><li className='text-white lg:text-black lg:bg-gradient-to-r lg:from-blue-200 lg:via-cyan-100 lg:to-blue-200  lg:hover:bg-gradient-to-r lg:hover:from-blue-300 lg:hover:via-cyan-200 lg:hover:to-blue-300 hover:bg-gray-500 border-b border-gray-500 lg:border lg:border-gray-400 lg:rounded-full px-4 py-4 lg:py-1 cursor-pointer'>Contact us</li></Link>
                <Link to='/'><li className='text-white lg:text-black lg:bg-gradient-to-r lg:from-blue-200 lg:via-cyan-100 lg:to-blue-200  lg:hover:bg-gradient-to-r lg:hover:from-blue-300 lg:hover:via-cyan-200 lg:hover:to-blue-300 hover:bg-gray-500 border-b border-gray-500 lg:border lg:border-gray-400 lg:rounded-full px-4 py-4 lg:py-1 cursor-pointer'>About us</li></Link>
                <Link to='/'><li className='text-white lg:text-black lg:bg-gradient-to-r lg:from-blue-200 lg:via-cyan-100 lg:to-blue-200  lg:hover:bg-gradient-to-r lg:hover:from-blue-300 lg:hover:via-cyan-200 lg:hover:to-blue-300 hover:bg-gray-500 border-b border-gray-500 lg:border lg:border-gray-400 lg:rounded-full px-4 py-4 lg:py-1 cursor-pointer'>Blogs</li></Link>
            </div>
            </ol>
        </>
    )
}

export default Navbar;