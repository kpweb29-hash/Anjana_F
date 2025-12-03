import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="relative mb-16 md:mb-0" >
                {/* ⭐ TOP INFO BAR */}
                <div className=" w-full bg-blue text-white  text-sm py-2 pb-8">
                    <div className="max-w-7xl mx-auto px-6 flex justify-between items-center ">

                        {/* LEFT TEXT */}
                        <span>An ISO 9001:2015 Certified Company</span>

                        {/* RIGHT CONTACT */}
                        <div className="flex items-center gap-6">

                            <a href="tel:9998488480" className="hover:text-red" ><div className="hidden md:flex items-center gap-2">
                                <i className="fa-solid fa-phone"></i>
                                <span>+91 9998488480 | +91 9998488480</span>
                            </div></a>

                            <a href="mailto:support@apnawebx.com" className="hover:text-red" target="_blank" rel="noreferrer"><div className="hidden lg:flex items-center gap-2">
                                <i className="fa-solid fa-envelope"></i>
                                <span>support@apnawebx.com</span>
                            </div></a>

                            {/* SOCIAL ICONS */}
                            <div className="hidden sm:flex gap-3 text-xl">
                                <a href="/" className="hover:text-red"><i className="fa-brands fa-facebook"></i></a>
                                <a href="/" className="hover:text-red"><i className="fa-brands fa-instagram"></i></a>
                                <a href="/" className="hover:text-red"><i className="fa-brands fa-twitter"></i></a>
                                <a href="/" className="hover:text-red"><i className="fa-brands fa-linkedin"></i></a>
                            </div>

                        </div>

                    </div>
                </div>

                {/* ⭐ MAIN NAVBAR */}
                <div className="absolute -bottom-[60px] md:-bottom-[75px] left-1/2 -translate-x-1/2 z-[9999]">
                    <nav className="w-[100vw] md:w-[90vw] shadow-lg bg-white sticky top-0 rounded-none md:rounded-xl">
                        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-2 md:py-4">

                            {/* LOGO */}
                            <Link to="/">
                                <img
                                    src="/images/logo/anjana-logo.png"
                                    alt="Logo"
                                    className="h-16"
                                />
                            </Link>

                            {/* DESKTOP MENU */}
                            <div className="hidden md:flex gap-4 lg:gap-10 items-center font-semibold font-vollkorn text-dark text-md">

                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `hover:text-red  ${isActive ? "text-red border-red" : "border-white"
                                        }`
                                    }
                                >
                                    HOME
                                </NavLink>

                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `hover:text-red  ${isActive ? "text-red border-red" : "border-white"
                                        }`
                                    }
                                >
                                    ABOUT US
                                </NavLink>

                                {/* PRODUCTS DROPDOWN */}
                                <div className="relative group cursor-pointer">
                                    <span className="hover:text-red">PRODUCTS</span>

                                    {/* Dropdown */}
                                    <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg p-4 rounded-lg w-44">
                                        <Link to="/products" className="block hover:text-red py-1">All Products</Link>
                                        <Link to="/category/tools" className="block hover:text-red py-1">Tools</Link>
                                        <Link to="/category/machinery" className="block hover:text-red py-1">Machinery</Link>
                                        <Link to="/category/safety" className="block hover:text-red py-1">Safety</Link>
                                    </div>
                                </div>

                                <NavLink
                                    to="/industry"
                                    className={({ isActive }) =>
                                        `hover:text-red  ${isActive ? "text-red border-red" : "border-white"
                                        }`
                                    }
                                >
                                    INDUSTRIES
                                </NavLink>

                                <NavLink
                                    to="/updates"
                                    className={({ isActive }) =>
                                        `hover:text-red  ${isActive ? "text-red border-red" : "border-white"
                                        }`
                                    }
                                >
                                    UPDATES
                                </NavLink>

                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `hover:text-red  ${isActive ? "text-red border-red" : "border-white"
                                        }`
                                    }
                                >
                                    CONTACT US
                                </NavLink>
                            </div>

                            {/* MOBILE MENU BUTTON */}
                            <button
                                onClick={() => setOpen(!open)}
                                className="md:hidden bg-blue text-white p-3 rounded-full text-2xl"
                            >
                                <i className="fa-solid fa-list"></i>
                            </button>
                        </div>


                    </nav>
                </div>

            </div>

            {/* ⭐ MOBILE MENU */}
            {open && (
                <div className="md:hidden bg-white shadow-lg p-6 space-y-6 text-lg font-vollkorn font-bold  text-blue">
                    <NavLink to="/" onClick={() => setOpen(false)} className="block hover:text-red"><span className="text-sm mr-2">*</span>HOME</NavLink>
                    <NavLink to="/about" onClick={() => setOpen(false)} className="block hover:text-red"><span className="text-sm mr-2">*</span>ABOUT US</NavLink>
                    <NavLink to="/products" onClick={() => setOpen(false)} className="block hover:text-red"><span className="text-sm mr-2">*</span>PRODUCTS</NavLink>
                    <NavLink to="/industry" onClick={() => setOpen(false)} className="block hover:text-red"><span className="text-sm mr-2">*</span>INDUSTRIES</NavLink>
                    <NavLink to="/updates" onClick={() => setOpen(false)} className="block hover:text-red"><span className="text-sm mr-2">*</span>UPDATES</NavLink>
                    <NavLink to="/contact" onClick={() => setOpen(false)} className="block hover:text-red"><span className="text-sm mr-2">*</span>CONTACT US</NavLink>

                    <hr />

                    <h1 className="text-2xl font-mons text-red">Contact Us :</h1>

                    <a href="tel:9998488480" className="hover:text-red font-montserrat" ><div className="flex items-center gap-2 my-2">
                        <i className="fa-solid fa-phone icon"></i>
                        <span>+91 9998488480</span>
                    </div></a>

                    <a href="mailto:support@apnawebx.com" className="hover:text-red" target="_blank" rel="noreferrer"><div className="flex items-center gap-2 my-2">
                        <i className="fa-solid fa-envelope icon"></i>
                        <span>support@apnawebx.com</span>
                    </div></a>

                    <a href="https://maps.app.goo.gl/zNxoYHW8Eiv4fZbg8" className="hover:text-red" target="_blank" rel="noreferrer"><div className="flex items-center gap-2">
                        <i className="fa-solid fa-location-dot icon"></i>
                        <span>Rakhial, Ahmedabad</span>
                    </div></a>

                </div>
            )}
        </>
    );
};

export default Navbar;
