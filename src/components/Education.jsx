import EduData from '../json/EduData.json' ;
export default function Education() {
    return(
        <section className="w-full p-10 h-fit mt-10" id='education'>
            <h1 className="poppins font text-[#F5F5F5] text-[clamp(1.5rem,4vw,2.5rem)] sm:text-[clamp(1.8rem,4vw,2.75rem)] ">Education</h1>
                {EduData.map((data) => {
                    return(
                        <div className="EduCard mt-6 hover:border-b-2 hover:border-b-[#F45D01] transition-all duration-700 ease-in-out rounded-[20px] customShadow p-5" key={data.id}>
                            <div className="img">
                                <img src={data.logo} alt="" className='w-[3rem]'/>
                            </div>
                            <h1 className='text-xl font-semibold poppins mt-2 text-[#B0B0B0]'>{data.name}</h1>
                            <p className='poppins text-[#B0B0B0] mt-1 font-semibold'>{data.Degree}</p>
                            <p className='text-[#B0B0B0] mt-1 poppins mb-3'>{data.DateStudied}</p>
                        </div>
                    );
                })}
        </section>
    );
}