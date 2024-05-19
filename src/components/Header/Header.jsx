import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Card,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";


const Header = () => {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mt-2 me-96 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >

                <NavLink exact to="/" className={({ isActive }) =>
                    `nav-link ${isActive ? "bg-blue-600 px-2 py-1 rounded-md text-white" : ""}`
                }>
                    Home
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >

                <NavLink  to="/products" className={({ isActive }) =>
                    `nav-link ${isActive ? "bg-blue-600 px-2 py-1 rounded-md text-white" : ""}`
                }>
                    Products
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                 <NavLink  to="/about" className={({ isActive }) =>
                    `nav-link ${isActive ? "bg-blue-600 px-2 py-1 rounded-md text-white" : ""}`
                }>
                   About
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink  to="/posts" className={({ isActive }) =>
                    `nav-link ${isActive ? "bg-blue-600 px-2 py-1 rounded-md text-white" : ""}`
                }>
                 Posts
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink  to="/grandPa" className={({ isActive }) =>
                    `nav-link ${isActive ? "bg-blue-600 px-2 py-1 rounded-md text-white" : ""}`
                }>
                  GrandPa
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink  to="/users" className={({ isActive }) =>
                    `nav-link ${isActive ? "bg-blue-600 px-2 py-1 rounded-md text-white" : ""}`
                }>
                  Users
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink  to="/albums" className={({ isActive }) =>
                    `nav-link ${isActive ? "bg-blue-600 px-2 py-1 rounded-md text-white" : ""}`
                }>
                 Albums
                </NavLink>
            </Typography>
        </ul>
    );
    return (
        <div className=" h-[80px]">
            <Navbar className="fixed top-0 bg-deep-orange-200  z-10 w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Typography
                        as="a"
                        href="#"
                        className="mr-4 cursor-pointer py-1.5 font-medium"
                    >
                        Material Tailwind
                    </Typography>
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>
                        <div className="flex items-center gap-x-1">
                            {/* <Button
                                variant="text"
                                size="sm"
                                className="hidden lg:inline-block"
                            >
                                <span>Log In</span>
                            </Button>
                            <Button
                                variant="gradient"
                                size="sm"
                                className="hidden lg:inline-block"
                            >
                                <span>Sign in</span>
                            </Button> */}
                        </div>
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <MobileNav open={openNav}>
                    {navList}
                    <div className="flex items-center gap-x-1">
                        <Button fullWidth variant="text" size="sm" className="">
                            <span>Log In</span>
                        </Button>
                        <Button fullWidth variant="gradient" size="sm" className="">
                            <span>Sign in</span>
                        </Button>
                    </div>
                </MobileNav>
            </Navbar>

        </div>
    );
};

export default Header;