import React, { useState, useEffect } from 'react';
import { NAVBAR_LIST } from '../utils/helper';

import { useNavigate } from 'react-router-dom';
import { SEARCH_ICON } from '../utils/icons';
const Header = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(!open)
    const navigate = useNavigate
    const toggleNavigate = (link) => {
        navigate(link)
    }
    useEffect(() => {
        const handleOverflow = () => {
            if (open && window.innerWidth < 1024) {
                document.body.classList.add("overflow-hidden");
            } else {
                document.body.classList.remove("overflow-hidden");
            }
        };
        handleOverflow();
        window.addEventListener("resize", handleOverflow);
        return () => {
            window.removeEventListener("resize", handleOverflow);
        };
    }, [open]);

    return (
        <>
            <div className='flex w-full justify-between lg:bg-offBlue max-xl:pl-5 max-xl:pr-3 max-lg:hidden'>
                <div className="container lg:flex lg:w-full lg:justify-between items-center ">
                    <img className='max-w-[115px] pointer-events-none max-h-6 max-md:max-w-20' src="./assets/images/webp/logo.webp" alt="logo-img" />
                    <img className='max-w-[427px] pointer-events-none max-lg:hidden' src="./assets/images/webp/header-img.webp" alt="logo-img" />
                </div>
            </div>
            <div className='container'>
            <nav className="flex items-center justify-between pt-11 pb-[22px] max-md:py-6">
                <a href="/" className='text-5xl font-normal lg:hidden'><img src="/assets/images/webp/logo.webp" alt="logo"  className='w-full max-w-[75px] h-[17px]'/></a>
            <div className={` z-40 flex gap-10 max-lg:flex-col max-lg:fixed max-lg:top-0 max-lg:w-full max-lg:h-screen max-lg:justify-center max-lg:items-center max-lg:bg-darkBlue max-lg:transition-all max-lg:duration-300 ${open ? 'bg-darkBlue max-lg:left-0' : 'left-full'}`}>
                {NAVBAR_LIST.map((obj, i) => (
                    <a onClick={() => toggleNavigate(obj.links)} href={obj.links} className="text-white text-[13px] font-normal relative after:absolute after:w-0 after:transition-all after:duration-300 after:hover:w-full after:bottom-0 after:h-0.5 after:bg-white pb-0.5 after:left-0" key={i}>{obj.name}
                    </a>
                ))}
                    <div className='lg:hidden flex items-center py-2 px-[14px] border border-solid border-white rounded-[5px] min-w-[257px] justify-between'>
                        <input type="text" placeholder='Search by Keyword' className='text-[13px] placeholder:text-[13px] placeholder:font-normal font-normal bg-transparent placeholder:text-white text-white outline-none' />
                        <SEARCH_ICON/>
               </div>
            </div>
                <div className='max-lg:hidden flex items-center py-2 px-[14px] border border-solid border-white rounded-[5px] min-w-[257px] justify-between'>
                    <input type="text" placeholder='Search by Keyword' className='text-[13px] placeholder:text-[13px] placeholder:font-normal font-normal bg-transparent placeholder:text-white text-white outline-none' />
                    <SEARCH_ICON />
                    </div>
                    <div className='flex items-center flex-col lg:hidden'>
            <button
                onClick={handleOpen}
                className={`hidden size-6 justify-center relative z-50 max-lg:flex flex-col overflow-hidden`}
            >
                <span
                    className={`w-6 transition-all duration-300 h-0.5 bg-white mb-1 rounded-md ${open ? 'translate-x-10' : ''}`}
                ></span>
                <span
                    className={`w-6 transition-all duration-300 h-0.5 bg-white mb-1 rounded-md relative after:w-full after:h-full after:bg-white after:absolute after:top-0 after:left-0 after:rounded-md ${open ? 'rotate-45 after:rotate-90' : ''}`}
                ></span>
                <span
                    className={`w-6 transition-all duration-300 h-0.5 bg-white rounded-md ${open ? '-translate-x-10' : ''}`}
                        ></span>
                        </button>
                        <p className='text-white font-normal uppercase text-xs '>menu</p>
                        </div>
                </nav>
                </div>
</>
    );
};




export default Header;
