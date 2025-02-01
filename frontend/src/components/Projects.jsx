import movemate from "../assets/images/projects/movemate.png";
import yapper from "../assets/images/projects/yapper.png";

function Projects() {
    return (
        <>
            <section id="projects" className="relative pt-20 flex justify-center items-center min-h-screen px-4">
                <div className="w-full max-w-4xl p-6 flex flex-col gap-8">
                    <h1 className="text-4xl font-semibold text-center">Projects</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
                        <div className="flex flex-col gap-8 w-full sm:w-3/4 md:w-1/2 lg:w-[400px] mx-auto p-6 rounded-lg border-2 border-zinc-50/10 backdrop-blur-lg shadow-lg text-zinc-50/50 text-lg hover:scale-105 transition duration-300">
                        <img src={yapper} alt="Yapper" className="w-full h-auto max-w-full aspect-[4/3] object-contain rounded-lg shadow-lg" />
                            <div>
                                <p className="font-semibold text-xl text-white">Social Media App</p>
                                <p className="mt-2 text-zinc-50/50">Full-stack web app built with React, Express.js, MySQL, and Tailwind CSS.</p>
                                <div className="flex mt-4">
                                    <a 
                                        href="https://github.com/zackmartin12/Yapper"
                                        className="py-2 px-4 text-white border-white border-2 font-semibold rounded-md flex items-center gap-2 hover:scale-105 transition duration-200 md:text-lg"
                                    >
                                        Code
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-8 w-full sm:w-3/4 md:w-1/2 lg:w-[400px] mx-auto p-6 rounded-lg border-2 border-zinc-50/10 backdrop-blur-lg shadow-lg text-zinc-50/50 text-lg hover:scale-105 transition duration-300">
                        <img src={movemate} alt="MoveMate" className="w-full h-auto max-w-full aspect-[4/3] object-contain rounded-lg shadow-lg" />
                            <div>
                                <p className="font-semibold text-xl text-white">Health and Fitness App</p>
                                <p className="mt-2 text-zinc-50/50">Full-stack web app built with Express.js, MariaDB, and Bootstrap.</p>
                                <div className="flex mt-4">
                                    <a 
                                        href="https://github.com/zackmartin12/MoveMate"
                                        className="py-2 px-4 text-white border-white border-2 font-semibold rounded-md flex items-center gap-2 hover:scale-105 transition duration-200 md:text-lg"
                                    >
                                        Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Projects;
