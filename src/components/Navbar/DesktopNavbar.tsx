import { Link, NavLink } from "react-router-dom";
import { navLinks, socialLinks } from "./NavbarItems";
import profilePic from "../../assets/profile_pic.jpg";

const DesktopNavbar = () => {
    return (
        <div className="bg-neutral-900 w-full h-14 fixed top-0 z-30 flex items-center justify-between px-6">
            {/* Left: Profile Picture */}
            <Link to="/" className="flex items-center">
                <img src={profilePic} alt="logo" className="w-8 h-8 rounded-full object-cover" />
            </Link>

            {/* Center: Navigation Links */}
            <nav className="flex space-x-6">
                {navLinks.map(({ name, to, icon: Icon }) => (
                    <NavLink key={name} to={to} className={({ isActive }) => isActive ?
                        "text-orange-400" : "text-stone-500 hover:text-orange-400"}>
                        <Icon />
                    </NavLink>
                ))}
            </nav>

            {/* Right: Social Icons */}
            <ul className="flex space-x-4">
                {socialLinks.map(({ href, icon: Icon }, index) => (
                    <li key={index}>
                        <a href={href} target="_blank" rel="noreferrer" className="text-stone-500 hover:text-orange-400" >
                            <Icon />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DesktopNavbar;
