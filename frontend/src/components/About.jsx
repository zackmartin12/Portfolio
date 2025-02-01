import { FaFilePdf, FaLinkedin } from "react-icons/fa";
import profile from "../assets/images/about/profile.jpg";

function About() {
    return (
        <section id="about" className="relative pt-20 flex justify-center items-center min-h-screen px-4">
            <div className="w-full max-w-4xl p-6 flex flex-col gap-8">
                <h1 className="text-4xl font-bold text-center">About</h1>

                {/* Container for Image and Content */}
                <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-6">
                    
                    {/* Left: Profile Image (50% width) */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img 
                            src={profile} 
                            alt="profile" 
                            className="w-full rounded-lg shadow-lg object-cover"
                        />
                    </div>

                    {/* Right: Content (50% width) */}
                    <div className="w-full md:w-1/2 min-w-0">
                        <div className="flex flex-col gap-4 p-4 rounded-lg border-2 border-zinc-50/10 backdrop-blur-lg shadow-lg text-zinc-50/50 text-lg">
                            <p className="mb-4">
                                Hi, I'm Zack Martin and I'm from Asheville, North Carolina. I've developed a strong passion
                                for <span className="text-white font-semibold"> full-stack development </span> and have 
                                honed skills that have fueled the projects showcased below. Beyond coding, I enjoy fishing 
                                and spending time with friends and family.
                            </p>
                            <div>
                                <p className="text-xl font-semibold text-white">Experience</p>
                                <p className="text-white">Volvo Group</p>
                                <div className="flex gap-4 justify-between">
                                    <p>Software Developer Intern</p>
                                    <p className="text-right">May - December 2024</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-xl font-semibold text-white">Education</p>
                                <p className="text-white">North Carolina State University</p>
                                <div className="flex gap-2 justify-between">
                                    <p>Computer Science B.S.</p>
                                    <p className="text-right">May 2025</p>
                                </div>
                            </div>
                        </div>

                        {/* Resume & LinkedIn Buttons */}
                        <div className="flex gap-4">
                            <a 
                                href="./Zack Martin Resume.pdf" 
                                download 
                                className="mt-4 w-max p-2 bg-white text-zinc-900 font-semibold rounded-md flex items-center gap-2 hover:scale-105 transition duration-200 md:text-lg"
                            >
                                Resume <FaFilePdf className="text-lg" />
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/zack-martin12/"
                                className="mt-4 w-max p-2 border border-white text-white font-semibold rounded-md flex items-center gap-2 hover:scale-105 transition duration-200 md:text-lg"
                            >
                                LinkedIn <FaLinkedin className="text-lg" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
