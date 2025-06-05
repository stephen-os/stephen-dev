// src/pages/Skills.tsx
import Navbar from "../components/Navbar";

const Skills = () => {
    return (
        <body className="relative w-full min-h-screen bg-neutral-900 text-white overflow-hidden">
            <Navbar />
            <main className="max-w-screen-lg mx-auto pt-32 px-8">
                <h1 className="text-4xl font-bold mb-6">Skills</h1>
                <p className="text-stone-400 text-lg max-w-2xl">
                    I specialize in graphics programming, full-stack development, and systems engineering. I work with technologies like React, TypeScript, WebGL, OpenGL, and Node.js. I also have experience with C++, Rust, and low-level system tools.
                </p>
            </main>
        </body>
    );
};
export default Skills;