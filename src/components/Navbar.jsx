import { useState, useEffect } from "react";
export default function Navbar() {
    const [click, setClick] = useState(true);
    let hamburgerClasses = 'md:flex items-center gap-3 text-sm hidden transition-all duration-300 ease-in-out text-[#F45D01]';
    if (click) {
        hamburgerClasses = ' absolute top-[50px] bg-[#2d2d2d] right-0 shadow-lg text-sm w-[200px] flex flex-col justify-center items-center gap-[20px] py-[10px] rounded-md';
    }
    return(
        <nav className="w-full h-15 p-10 flex gap-10 items-center justify-between">
            <div className="logo">
                <h1 className="flex items-center gap-1"><span className="great-vibes-regular text-3xl text-[#B0B0B0]">&lt;</span><span className="great-vibes-regular text-3xl text-[#F5F5F5] cursor-pointer hover:text-[#FF7530] transition-all duration-500 ease-in-out">Obans Olasubomi</span><span className="great-vibes-regular text-3xl text-[#B0B0B0]">/&gt;</span></h1>
            </div>
            {click ? (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="[#F5F5F5]" className="bi bi-x" viewBox="0 0 16 16" onClick={() => setClick(!click)}>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>):(<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-list font-bold transition-all duration-300 ease-in-out md:hidden bg-[#F5F5F5]" viewBox="0 0 16 16" onClick={() => setClick(!click)}>
                        <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>) }
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