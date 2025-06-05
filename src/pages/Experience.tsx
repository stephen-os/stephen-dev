// src/pages/WorkHistory.tsx
import Navbar from "../components/Navbar";

const Experience = () => {
    return (
        <body className="relative w-full min-h-screen bg-neutral-900 text-white overflow-hidden">
            <Navbar />
            <main className="max-w-screen-lg mx-auto pt-32 px-8">
                <h1 className="text-4xl font-bold mb-6">Work History</h1>
                <ul className="space-y-6 text-stone-400 text-lg">
                    <li>
                        <strong className="text-white">Software Engineer</strong> @ XYZ Corp — 2023–2025
                        <br />Worked on internal tooling and rendering engine improvements.
                    </li>
                    <li>
                        <strong className="text-white">IT Technician</strong> @ ABC Co — 2022–2023
                        <br />Maintained systems infrastructure and automated admin tasks.
                    </li>
                </ul>
            </main>
        </body>
    );
};
export default Experience;