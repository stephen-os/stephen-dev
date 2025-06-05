import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    FaBars, FaTimes, FaHome, FaUser, FaBriefcase, FaFolderOpen, FaEnvelope, FaLinkedin, FaGithub, FaCode, FaTools
} from "react-icons/fa";

import profilePic from "../assets/profile_pic.jpg";
import type { IconType } from "react-icons";
import NavbarLink from "./NavbarLink";

const navbarLinks: { name: string; to: string; icon: IconType }[] = [
    { name: "Home", to: "/", icon: FaHome },
    { name: "About", to: "/about", icon: FaUser },
    { name: "Skills", to: "/skills", icon: FaTools },
    { name: "Experience", to: "/experience", icon: FaBriefcase },
    { name: "Projects", to: "/projects", icon: FaCode },
    { name: "Blog", to: "/blog", icon: FaFolderOpen },
    { name: "Contact", to: "/contact", icon: FaEnvelope },
];

const socialLinks: { href: string; icon: IconType }[] = [
    { href: "https://www.linkedin.com/in/stephen-os", icon: FaLinkedin },
    { href: "https://github.com/stephen-os", icon: FaGithub },
];

const Navbar = () => {
    const [showMobileNav, setShowMobileNav] = useState(false);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (showMobileNav && !target.closest(".navbar-container")) {
                setShowMobileNav(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [showMobileNav]);

    return (
        <div className="navbar-container">
            {/* Top Bar */}
            <div className="fixed top-0 left-0 w-full bg-neutral-900 h-14 z-30 shadow-md">
                <div className="flex justify-between items-center px-4 h-full">
                    {/* Logo */}
                    <Link to="/" className="flex items-center z-10" onClick={() => setShowMobileNav(false)}>
                        <img src={profilePic} alt="logo" className="w-8 h-8 rounded-full object-cover" />
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-gray-500 hover:text-orange-400 z-10"
                        onClick={() => setShowMobileNav(prev => !prev)}
                        aria-label={showMobileNav ? "Close menu" : "Open menu"}
                    >
                        {showMobileNav ? <FaTimes size={20} /> : <FaBars size={20} />}
                    </button>
                </div>

                {/* Centered Nav Links */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 space-x-6">
                    {navbarLinks.map(({ name, to, icon }) => (
                        <NavbarLink key={name} to={to} name={name} icon={icon} />
                    ))}
                </div>

                {/* Right-Aligned Social Links */}
                <div className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 space-x-4">
                    {socialLinks.map(({ href, icon: Icon }, index) => (
                        <a
                            key={index}
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-stone-500 hover:text-orange-400"
                        >
                            <Icon />
                        </a>
                    ))}
                </div>
            </div>

            {/* Mobile Nav Menu */}
            {showMobileNav && (
                <div className="fixed inset-0 top-14 bg-neutral-900 z-20 flex flex-col items-center pt-8 md:hidden">
                    <nav className="flex flex-col items-center space-y-6 mb-8">
                        {navbarLinks.map(({ name, to, icon }) => (
                            <NavbarLink
                                key={name}
                                to={to}
                                name={name}
                                icon={icon}
                                onClick={() => setShowMobileNav(false)}
                                mobile
                            />
                        ))}
                    </nav>

                    <ul className="flex space-x-6">
                        {socialLinks.map(({ href, icon: Icon }, index) => (
                            <li key={index}>
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-stone-500 hover:text-orange-400"
                                >
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

export default Navbar;
