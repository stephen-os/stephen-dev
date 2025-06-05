// src/pages/About.tsx
import Navbar from "../components/Navbar";

const About = () => {
    return (
        <body className="relative w-full min-h-screen bg-neutral-900 text-white overflow-hidden">
            <Navbar />
            <main className="max-w-screen-lg mx-auto pt-32 px-8">
                <h1 className="text-4xl font-bold mb-6">About Me</h1>
                <p className="text-stone-400 text-lg max-w-2xl">
                    I'm Stephen, a software engineer who thrives at the intersection of design, code, and systems. I love building tools that help others create, debug, and learn. My background blends low-level graphics, full-stack apps, and developer experience tooling.
                </p>
            </main>
        </body>
    );
};
export default About;