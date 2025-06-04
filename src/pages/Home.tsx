import Navbar from "../components/Navbar/Navbar";
import profilePic from "../assets/profile_pic.jpg";
import AnimatedName from "../components/AnimatedName";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { HiDocumentDownload } from "react-icons/hi";

const Home = () => {
    return (
        <div className="relative w-full min-h-screen bg-neutral-900 text-white overflow-hidden pb-32">
            <Navbar />

            {/* Main container */}
            <div className="relative z-10 pt-24 md:pt-32 px-6">
                <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">

                    {/* Left: Intro */}
                    <div className="flex-1 text-center md:text-left">
                        <div className="space-y-6">
                            <AnimatedName />
                            <p className="text-base md:text-lg text-stone-400 max-w-sm md:max-w-md mx-auto md:mx-0">
                                I'm a software engineer passionate about building graphics tools, full-stack systems, and exploring low-level design.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                                <a
                                    href="/resume.pdf"
                                    download
                                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium flex items-center space-x-2 shadow-lg transition"
                                >
                                    <HiDocumentDownload size={20} />
                                    <span>Download Resume</span>
                                </a>

                                <div className="flex space-x-4">
                                    <a
                                        href="https://github.com/yourgithub"
                                        target="_blank"
                                        className="w-10 h-10 bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-orange-400 rounded-full flex items-center justify-center shadow-md transition"
                                    >
                                        <FaGithub size={18} />
                                    </a>
                                    <a
                                        href="https://leetcode.com/yourleetcode"
                                        target="_blank"
                                        className="w-10 h-10 bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-orange-400 rounded-full flex items-center justify-center shadow-md transition"
                                    >
                                        <FaCode size={18} />
                                    </a>
                                    <a
                                        href="https://linkedin.com/in/yourlinkedin"
                                        target="_blank"
                                        className="w-10 h-10 bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-orange-400 rounded-full flex items-center justify-center shadow-md transition"
                                    >
                                        <FaLinkedin size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Profile Picture */}
                    <div className="flex justify-center flex-1">
                        <img
                            src={profilePic}
                            alt="Profile"
                            className="w-40 h-40 md:w-72 md:h-72 object-cover rounded-full shadow-xl border-4 border-white"
                        />
                    </div>
                </div>

                {/* Floating Stats Bar */}
                <div className="mt-16 md:mt-24 w-full flex justify-center">
                    <div className="w-full max-w-screen-md bg-neutral-800 border border-stone-700 rounded-2xl shadow-lg px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-6">
                        <Stat title="Years of Experience" value="3+" />
                        <Stat title="GitHub Repos" value="40+" />
                        <Stat title="Contributions" value="1,200+" />
                        <Stat title="LeetCode Solved" value="350+" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const Stat = ({ title, value }: { title: string; value: string }) => (
    <div className="text-center">
        <p className="text-2xl font-bold text-orange-400">{value}</p>
        <p className="text-stone-400 text-sm">{title}</p>
    </div>
);

export default Home;
