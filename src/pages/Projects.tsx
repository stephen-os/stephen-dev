import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ReactMarkdown from "react-markdown";

const projectRepos = [
    { name: "Tiles", repo: "tiles" },
    { name: "Lumina", repo: "lumina" },
    { name: "Key Actions", repo: "key-actions" },
];

const Projects = () => {
    const [readmes, setReadmes] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        projectRepos.forEach(async ({ repo }) => {
            try {
                const res = await fetch(`https://api.github.com/repos/stephen-os/${repo}/readme`, {
                    headers: {
                        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
                        Accept: "application/vnd.github.v3.raw",
                    },
                });
                const text = await res.text();
                setReadmes(prev => ({ ...prev, [repo]: text }));
            } catch (err) {
                console.error(`Error fetching README for ${repo}`, err);
            }
        });
    }, []);

    return (
        <div className="relative w-full min-h-screen bg-neutral-900 text-white overflow-y-auto">
            <Navbar />
            <main className="max-w-screen-lg mx-auto pt-32 px-8">
                <h1 className="text-4xl font-bold mb-6">Projects</h1>
                <div className="space-y-12 text-stone-400 text-lg">
                    {projectRepos.map(({ name, repo }) => (
                        <div key={repo}>
                            <h2 className="text-2xl font-semibold text-white mb-2">{name}</h2>
                            <div className="prose prose-invert max-w-none">
                                <ReactMarkdown>{readmes[repo] || "Loading..."}</ReactMarkdown>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Projects;