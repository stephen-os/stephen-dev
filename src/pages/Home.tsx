import Navbar from "../components/Navbar/Navbar";
import profilePic from "../assets/profile_pic.jpg";
import AnimatedName from "../components/AnimatedName";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { HiDocumentDownload } from "react-icons/hi";

import { GitHubContributionHistory } from "../components/GitHubContributionHistory";
import { GitHubStatsBar } from "../components/GitHubStatsBar";

const Home = () => {
    /**
     * The home page of the website, which displays a hero section with animated
     * name, intro text, CTA buttons, and a profile picture. It also displays a
     * floating stats bar with various stats such as years of experience, number of
     * GitHub repos, contributions, and LeetCode problems solved.
     *
     * @return {JSX.Element} The home page component.
     */
    return (
        <body className="relative w-full min-h-screen bg-neutral-900 text-white overflow-hidden">

            <Navbar />

            {/* Main container */}
            <main className="sm:pt-16 md:pt-32">

                <section className="max-w-screen-lg mx-auto flex sm:flex-col md:flex-row sm:items-center md:items-start sm:gap-10 md:gap-16 pl-8 pr-8">

                    {/* Left: Intro */}
                    <section className="sm:flex flex-col md:flex-row sm:text-center md:text-left">
                        <div className="space-y-6">
                            <AnimatedName />
                            <p className="text-stone-400 sm:text-base md:text-lg sm:max-w-sm md:max-w-md sm:mx-auto md:mx-0">
                                I'm a software engineer passionate about building graphics tools, full-stack systems, and exploring low-level design.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex space-x-6 sm:flex-col md:flex-row sm:items-center md:items-start sm:space-y-4 md:space-y-0">
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
                    </section>

                    <section className="flex-1"></section>

                    {/* Right: Profile Picture */}
                    <section className="flexsm:justify-center md:justify-end">
                        <img
                            src={profilePic}
                            alt="Profile"
                            className="w-40 h-40 md:w-72 md:h-72 object-cover rounded-full shadow-xl border-4 border-white"
                        />
                    </section>
                </section>

                {/* Floating Stats Bar */}
                <div className="mt-16 md:mt-24 max-w-screen-lg mx-auto px-8">
                    <GitHubStatsBar username="stephen-os" token={import.meta.env.VITE_GITHUB_TOKEN} />
                </div>

                {/* GitHub Contributions */}
                <div className="mt-16 md:mt-24 max-w-screen-lg mx-auto px-8">
                    <GitHubContributionHistory username="stephen-os" token={import.meta.env.VITE_GITHUB_TOKEN} />
                </div>
            </main>
        </body >
    );
};

const Stat = ({ title, value }: { title: string; value: string }) => (
    <div className="text-center">
        <p className="text-2xl font-bold text-orange-400">{value}</p>
        <p className="text-stone-400 text-sm">{title}</p>
    </div>
);

export default Home;
