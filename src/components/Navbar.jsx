import { useState, useEffect } from "react";
import { Link } from 'react-scroll';
import hamIcon from '../assets/more.png';
import exitIcon from '../assets/reject.png';
export default function Navbar() {
    const [click, setClick] = useState(false);
    // let hamburgerClasses = 'md:flex items-center gap-3 text-md hidden transition-all duration-500 ease-in-out text-[#F45D01]';
    let hamburgerClasses = 'hidden md:flex items-center gap-2 md:gap-4 lg:gap-6 text-sm md:text-lg text-[#F45D01] transition-all duration-500 ease-in-out';
    if (click) {
        hamburgerClasses = ' absolute top-[100px] bg-[#2d2d2d] right-0 shadow-lg text-md w-full flex flex-col justify-center items-center gap-[20px] py-[10px] rounded-md h-1/2 text-[#F45D01]';
    }
    // <nav className="w-full h-15 p-10 flex justify-center items-center gap-32"></nav>
    return(
        <nav className="w-full h-16 px-2 md:px-3 flex justify-center items-center gap-20 md:gap-10 lg:gap-32">

            <div className="logo">
                <h1 className="flex items-center gap-1"><span className="great-vibes-regular text-3xl text-[#B0B0B0]">&lt;</span><span className="great-vibes-regular text-3xl text-[#F5F5F5] cursor-pointer hover:text-[#FF7530] transition-all duration-500 ease-in-out">Obans Olasubomi</span><span className="great-vibes-regular text-3xl text-[#B0B0B0]">/&gt;</span></h1>
            </div>
            {click ? (<img src={exitIcon} className="w-[16px] h-[16px] transition-all duration-300 ease-in-out" onClick={() => setClick(!click)}/>): <img src={hamIcon} className="w-[16px] h-[16px] transition-all duration-300 ease-in-out md:hidden" onClick={() => setClick(!click)}/>}
            <div className={hamburgerClasses}>
                <Link to="proficiency" smooth={true} duration={500} className="inter-normal hover:text-[#FF7530] cursor-pointer transition-all duration-500 ease-in-out"  onClick={click ? () => setClick(!click) : undefined}>Proficiency</Link>
                <Link to="wid" smooth={true} duration={500} className="inter-normal hover:text-[#FF7530] cursor-pointer transition-all duration-500 ease-in-out"  onClick={click ? () => setClick(!click) : undefined}>What I do</Link>
                <Link to="resume" smooth={true} duration={500} className="inter-normal hover:text-[#FF7530] cursor-pointer transition-all duration-500 ease-in-out"  onClick={click ? () => setClick(!click) : undefined}>Resume</Link>
                <Link to="education" smooth={true} duration={500} className="inter-normal hover:text-[#FF7530] cursor-pointer transition-all duration-500 ease-in-out"  onClick={click ? () => setClick(!click) : undefined}>Education</Link>
                <Link to="contact" smooth={true} duration={500} className="inter-normal hover:text-[#FF7530] cursor-pointer transition-all duration-500 ease-in-out"  onClick={click ? () => setClick(!click) : undefined}>Contact me</Link>
            </div>
        </nav>
    );
}