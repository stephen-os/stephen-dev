// src/pages/Blog.tsx
import Navbar from "../components/Navbar";

const Blog = () => {
    return (
        <body className="relative w-full min-h-screen bg-neutral-900 text-white overflow-hidden">
            <Navbar />
            <main className="max-w-screen-lg mx-auto pt-32 px-8">
                <h1 className="text-4xl font-bold mb-6">Blog</h1>
                <p className="text-stone-400 text-lg max-w-2xl">
                    Check back soon for technical articles, project breakdowns, and tutorials.
                </p>
            </main>
        </body>
    );
};
export default Blog;
