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
    return(
        <section className="w-full p-10 h-fit mt-10">
            <h1 className="text-4xl poppins font text-[#F5F5F5]">Open Source Projects</h1>
        </section>
    );
}