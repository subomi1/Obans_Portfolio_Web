import { useState, useEffect } from "react";
import hamIcon from '../assets/more.png';
import exitIcon from '../assets/reject.png'
export default function Navbar() {
    const [click, setClick] = useState(false);
    let hamburgerClasses = 'md:flex items-center gap-3 text-sm hidden transition-all duration-500 ease-in-out text-[#F45D01]';
    if (click) {
        hamburgerClasses = ' absolute top-[100px] bg-[#2d2d2d] right-0 shadow-lg text-md w-full flex flex-col justify-center items-center gap-[20px] py-[10px] rounded-md h-1/2 text-[#F45D01]';
    }
    return(
        <nav className="w-full h-15 p-10 flex gap-10 items-center justify-between">
            <div className="logo">
                <h1 className="flex items-center gap-1"><span className="great-vibes-regular text-3xl text-[#B0B0B0]">&lt;</span><span className="great-vibes-regular text-3xl text-[#F5F5F5] cursor-pointer hover:text-[#FF7530] transition-all duration-500 ease-in-out">Obans Olasubomi</span><span className="great-vibes-regular text-3xl text-[#B0B0B0]">/&gt;</span></h1>
            </div>
            {click ? (<img src={exitIcon} className="w-[16px] h-[16px] transition-all duration-300 ease-in-out" onClick={() => setClick(!click)}/>): <img src={hamIcon} className="w-[16px] h-[16px] transition-all duration-300 ease-in-out md:hidden" onClick={() => setClick(!click)}/>}
            <div className={hamburgerClasses}>
                <h1 className="inter-normal hover:text-[#FF7530] cursor-pointer transition-all duration-500 ease-in-out">Skills</h1>
                <h1 className="inter-normal hover:text-[#FF7530] cursor-pointer transition-all duration-500 ease-in-out">Proficiency</h1>
                <h1 className="inter-normal hover:text-[#FF7530] cursor-pointer transition-all duration-500 ease-in-out">What I do</h1>
                <h1 className="inter-normal hover:text-[#FF7530] cursor-pointer transition-all duration-500 ease-in-out">Resume</h1>
                <h1 className="inter-normal hover:text-[#FF7530] cursor-pointer transition-all duration-500 ease-in-out">Contact me</h1>
            </div>
        </nav>
    );
}