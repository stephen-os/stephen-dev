// src/pages/Contact.tsx
import Navbar from "../components/Navbar";

const Contact = () => {
    return (
        <body className="relative w-full min-h-screen bg-neutral-900 text-white overflow-hidden">
            <Navbar />
            <main className="max-w-screen-lg mx-auto pt-32 px-8">
                <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
                <p className="text-stone-400 text-lg max-w-2xl mb-6">
                    If you'd like to get in touch for freelance work, questions, or collaborations:
                </p>
                <ul className="text-stone-300 text-lg">
                    <li>Email: <a href="mailto:your@email.com" className="text-orange-400 hover:underline">your@email.com</a></li>
                    <li>LinkedIn: <a href="https://linkedin.com/in/yourlinkedin" target="_blank" className="text-orange-400 hover:underline">yourlinkedin</a></li>
                    <li>GitHub: <a href="https://github.com/yourgithub" target="_blank" className="text-orange-400 hover:underline">yourgithub</a></li>
                </ul>
            </main>
        </body>
    );
};
export default Contact;
