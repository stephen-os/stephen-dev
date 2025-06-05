// src/pages/Projects.tsx
import Navbar from "../components/Navbar";

const Projects = () => {
    return (
        <body className="relative w-full min-h-screen bg-neutral-900 text-white overflow-hidden">
            <Navbar />
            <main className="max-w-screen-lg mx-auto pt-32 px-8">
                <h1 className="text-4xl font-bold mb-6">Projects</h1>
                <ul className="space-y-6 text-stone-400 text-lg">
                    <li>
                        <strong className="text-white">Lumina Renderer</strong> — OpenGL-based rendering engine with modern abstractions.
                    </li>
                    <li>
                        <strong className="text-white">Key Recorder</strong> — A desktop app for recording and playing input macros.
                    </li>
                    <li>
                        <strong className="text-white">Stephen.dev</strong> — Personal website and portfolio built with React and Tailwind.
                    </li>
                </ul>
            </main>
        </body>
    );
};
export default Projects;