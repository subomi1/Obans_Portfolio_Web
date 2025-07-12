import ProgressBar from "./ProgressBar";
export default function Proficiency() {

    return(
        <section className="p-10">
            <h1 className="poppins text-4xl poppins font text-[#F5F5F5]">Proficiency</h1>
            <ProgressBar name={"Frontend/Design"} toBeFilled={75}/>
            <ProgressBar name={"Problem Solving"} toBeFilled={60}/>
        </section>
    );
}