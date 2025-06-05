import { NavLink } from "react-router-dom";
import type { IconType } from "react-icons";

interface NavbarLinkProps {
    to: string;
    name: string;
    icon: IconType;
    onClick?: () => void;
    mobile?: boolean;
}

const NavbarLink = ({ to, name, icon: Icon, onClick, mobile = false }: NavbarLinkProps) => {
    const baseStyle = mobile ? "flex items-center space-x-2" : "";
    const activeStyle = "text-stone-500 hover:text-orange-400";
    const inactiveStyle = "text-stone-500";

    return (
        <NavLink
            to={to}
            className={({ isActive }) => `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`}
            onClick={onClick}
        >
            <Icon />
            {mobile && <span>{name}</span>}
        </NavLink>
    );
};

export default NavbarLink;