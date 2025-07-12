import { useState, useEffect } from "react";
import imgIcon from '../assets/b.png';
const projects = [
  {
    id: 1,
    title: "developerFolio",
    description: "Software Developer Portfolio Template that helps you showcase your work and skills...",
    language: "JavaScript",
    stars: 2999,
    forks: 5588,
    size: "277 MB",
    tags: ["portfolio", "template"]
  },
  {
    id: 2,
    title: "awesome-web-components",
    description: "Awesome web components and snippets for every Front-End Developer",
    language: "JavaScript",
    stars: 31,
    forks: 72,
    size: "21 MB",
    tags: ["components", "frontend"]
  },
];

export default function Projects() {
    const [data, setData] = useState();
    useEffect(() => {
        async function fetchData() {
          
            try {
                const fetchingData = await fetch('https://api.github.com/users/subomi1/repos');
                const response = await fetchingData.json();
                setData(response);
            } catch (err) {
                console.error("Error fetching characters:", err);
            }
        }

        fetchData();
    }, []);
    if (data == []) {
        return
    }else{
        console.log(data);
    }
    let filteredData = data?.filter((Idata) => Idata.archived === false);
    console.log(filteredData);
    return(
        <section className="w-full lg:p-10 h-fit mt-10 sm:p-3">
            <h1 className="poppins font text-[#F5F5F5] text-[clamp(1.5rem,4vw,2.5rem)] sm:text-[clamp(1.8rem,4vw,2.75rem)]">Open Source Projects</h1>
            {filteredData?.map((data) => (
                <div className="flex justify-center" key={data.id}>
                <div className="projectCard mt-6 hover:border-b-2 hover:border-b-[#F45D01] transition-all duration-700 ease-in-out rounded-[20px] p-10 customShadow w-full">
                    <div className="flexIcon flex items-center gap-3">
                        <img src={imgIcon} alt="" className="w-6"/>
                        <h1 className="text-xl font-semibold poppins mt-2 text-[#B0B0B0]">{data.name}</h1>
                    </div>
                    <p className="poppins text-[#B0B0B0] mt-1 font-semibold">{data.description || "No Description Included"}</p>
                    <div className="repo-meta">
                        <p className="language poppins text-[#B0B0B0] mt-1 font-semibold">{data.language || 'Various'}</p>
                        <p className="stars poppins text-[#B0B0B0] mt-1 font-semibold">⭐ {data.stargazers_count}</p>
                        <p className="forks poppins text-[#B0B0B0] mt-1 font-semibold">⑂ {data.forks_count}</p>
                        <p className="size poppins text-[#B0B0B0] mt-1 font-semibold">{Math.round(data.size / 10) / 100} MB</p>
                    </div>
                    <a href={data.homepage} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline poppins mt-1">{data.homepage}</a>
                </div>
                </div>
            ))}
        </section>
    );
}