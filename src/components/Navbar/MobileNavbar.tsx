import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { navLinks, socialLinks } from "./NavbarItems";
import profilePic from "../../assets/profile_pic.jpg";

const MobileNavbar = () => {
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (showNav && !target.closest(".navbar-container")) {
                setShowNav(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [showNav]);

    return (
        <div className="navbar-container">
            <div className="fixed top-0 left-0 w-full bg-neutral-900 flex justify-between items-center px-2 h-10 z-30 shadow-md">
                <Link to="/" className="flex items-center" onClick={() => setShowNav(false)}>
                    <img src={profilePic} alt="logo" className="w-6 rounded-full" />
                </Link>

                <button onClick={() => setShowNav(!showNav)} className="text-gray-500 hover:text-orange-400" aria-label={showNav ? "Close menu" : "Open menu"} >
                    {showNav ? <FaTimes size={20} /> : <FaBars size={20} />}
                </button>
            </div>

            {showNav && (
                <div className="fixed inset-0 top-9 bg-neutral-900 z-20 flex flex-col items-center pt-8">
                    <nav className="flex flex-col items-center space-y-6 mb-8">
                        {navLinks.map(({ name, to, icon: Icon }) => (
                            <NavLink key={name} to={to} className={({ isActive }) => `flex items-center space-x-2 ${isActive ? "text-orange-400" : "text-stone-500 hover:text-orange-400"}`} onClick={() => setShowNav(false)}>
                                <Icon />
                                <span>{name}</span>
                            </NavLink>
                        ))}
                    </nav>

                    <ul className="flex space-x-6">
                        {socialLinks.map(({ href, icon: Icon }, index) => (
                            <li key={index}>
                                <a href={href} target="_blank" rel="noreferrer" className="text-stone-500 hover:text-orange-400">
                                    <Icon />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default MobileNavbar;
