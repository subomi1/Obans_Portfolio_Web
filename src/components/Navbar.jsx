export default function Navbar() {
    return(
        <nav className="w-full h-15 p-10 flex gap-30 items-center justify-around">
            <div className="logo">
                <h1 className="flex items-center gap-1"><span className="great-vibes-regular text-3xl text-[#B0B0B0]">&lt;</span><span className="great-vibes-regular text-3xl text-[#F5F5F5] cursor-pointer hover:text-[#FF7530] transition-all duration-500 ease-in-out">Obans Olasubomi</span><span className="great-vibes-regular text-3xl text-[#B0B0B0]">/&gt;</span></h1>
            </div>
            <div className="links flex items-center gap-10 text-[#F45D01]">
                <h1 className="inter-normal hover:text-[#FF7530] cursor-pointer transition-all duration-500 ease-in-out">Skills</h1>
                <h1 className="inter-normal hover:text-[#FF7530] cursor-pointer transition-all duration-500 ease-in-out">Proficiency</h1>
                <h1 className="inter-normal hover:text-[#FF7530] cursor-pointer transition-all duration-500 ease-in-out">What I do</h1>
                <h1 className="inter-normal hover:text-[#FF7530] cursor-pointer transition-all duration-500 ease-in-out">Resume</h1>
                <h1 className="inter-normal hover:text-[#FF7530] cursor-pointer transition-all duration-500 ease-in-out">Contact me</h1>
            </div>
        </nav>
    );
}