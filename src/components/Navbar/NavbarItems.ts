import {
    FaHome,
    FaUser,
    FaBriefcase,
    FaFolderOpen,
    FaEnvelope,
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";
import type { IconType } from "react-icons";

export interface NavItem {
    name: string;
    to: string;
    icon: IconType;
}

export const navLinks: NavItem[] = [
    { name: "Home", to: "/", icon: FaHome },
    { name: "About", to: "/about", icon: FaUser },
    { name: "Experience", to: "/experience", icon: FaBriefcase },
    { name: "Portfolio", to: "/portfolio", icon: FaFolderOpen },
    { name: "Contact", to: "/contact", icon: FaEnvelope },
];

export const socialLinks: { href: string; icon: IconType }[] = [
    { href: "https://www.linkedin.com/in/stephen-os", icon: FaLinkedin },
    { href: "https://github.com/stephen-os", icon: FaGithub },
];
