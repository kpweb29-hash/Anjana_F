import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="relative mb-14 md:mb-0" >
                {/* ⭐ TOP INFO BAR */}
                <div className=" w-full bg-blue text-white  text-sm py-2 pb-8">
                    <div className="max-w-7xl mx-auto px-6 flex justify-between items-center ">

                        {/* LEFT TEXT */}
                        <span>An ISO 9001:2015 Certified Company</span>

                        {/* RIGHT CONTACT */}
                        <div className="flex items-center gap-6">

                            <a href="tel:97248 47466" className="hover:text-red" ><div className="hidden md:flex items-center gap-2">
                                <i className="fa-solid fa-phone"></i>
                                <span>+91 97248 47466 | +91 90812 77795</span>
                            </div></a>

                            <a href="mailto:anjanaenterprise117@gmail.com" className="hover:text-red" target="_blank" rel="noreferrer"><div className="hidden lg:flex items-center gap-2">
                                <i className="fa-solid fa-envelope"></i>
                                <span>anjanaenterprise117@gmail.com</span>
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




                                {/* ABOUT DROPDOWN */}
                                <div className="relative group cursor-pointer">
                                    <NavLink to="/about#about-us" className={({ isActive }) =>
                                        `hover:text-red  ${isActive ? "text-red border-red" : "border-white"
                                        }`
                                    } >ABOUT US</NavLink>

                                    {/* Dropdown */}
                                    <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg p-4 rounded-lg w-56">

                                        <Link to="/about#company-profile" className="block hover:text-red py-1">
                                           • Company Profile
                                        </Link>

                                        <Link to="/about#goals-values" className="block hover:text-red py-1">
                                           • Our Goals & Values
                                        </Link>

                                        <Link to="/about#management" className="block hover:text-red py-1">
                                            • Our Management
                                        </Link>

                                        <Link to="/about#quality-infra" className="block hover:text-red py-1">
                                            • Quality & Infrastructure
                                        </Link>

                                    </div>
                                </div>

                                {/* Products DROPDOWN */}
                                <div className="relative group cursor-pointer">
                                    <NavLink to="/products" className={({ isActive }) =>
                                        `hover:text-red  ${isActive ? "text-red border-red" : "border-white"
                                        }`
                                    } >PRODUCTS</NavLink>

                                    {/* Dropdown */}
                                    <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg p-4 rounded-lg w-56">

                                        <Link to="/products/ferrous" className="block py-1 hover:text-red">
                                            • Ferrous Metal
                                        </Link>

                                        <Link to="/products/nonFerrous" className="block py-1 hover:text-red">
                                            • Non-Ferrous Metal
                                        </Link>

                                        <Link to="/products/industrialFlanges" className="block py-1 hover:text-red">
                                            • Industrial Flanges
                                        </Link>

                                        <Link to="/products/industrialValves" className="block py-1 hover:text-red">
                                            • Industrial Valves
                                        </Link>

                                        <Link to="/products/industrialFittings" className="block py-1 hover:text-red">
                                            • Industrial Fittings
                                        </Link>

                                        <Link to="/products/dairyFittings" className="block py-1 hover:text-red">
                                            • Dairy Fittings
                                        </Link>

                                        <Link to="/products/fasteners" className="block py-1 hover:text-red">
                                            • Fasteners
                                        </Link>

                                        <Link to="/products/perforatedSheet" className="block py-1 hover:text-red">
                                            • Perforated Sheet
                                        </Link>

                                    </div>
                                </div>

                                <NavLink
                                    to="/industries"
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
                <div className="md:hidden bg-white shadow-lg p-6 space-y-6 text-lg font-vollkorn font-bold  text-blue flex flex-col ">
                    <NavLink to="/" onClick={() => setOpen(false)} className={({ isActive }) =>
                        `hover:text-red  ${isActive ? "text-red border-red" : "border-white"
                        }`
                    }><span className="text-sm mr-2">*</span>HOME</NavLink>

                    <div className="relative group cursor-pointer">
                        <NavLink to="/about#about-us" onClick={() => setOpen(false)} className={({ isActive }) =>
                            `hover:text-red  ${isActive ? "text-red border-red" : "border-white"
                            }`
                        } ><span className="text-sm mr-2">*</span>ABOUT US</NavLink>

                        {/* Dropdown */}
                        <div className="absolute z-20 left-0 hidden group-hover:block bg-white shadow-lg p-4 rounded-lg w-full">

                            <Link to="/about#company-profile" onClick={() => setOpen(false)} className="block hover:text-red py-1">
                                <span className="text-sm mr-2">*</span> Company Profile
                            </Link>

                            <Link to="/about#goals-values" onClick={() => setOpen(false)} className="block hover:text-red py-1">
                                <span className="text-sm mr-2">*</span> Our Goals & Values
                            </Link>

                            <Link to="/about#management" onClick={() => setOpen(false)} className="block hover:text-red py-1">
                                <span className="text-sm mr-2">*</span> Our Management
                            </Link>

                            <Link to="/about#quality-infra" onClick={() => setOpen(false)} className="block hover:text-red py-1">
                                <span className="text-sm mr-2">*</span> Quality & Infrastructure
                            </Link>

                        </div>
                    </div>

                    <div className="relative group cursor-pointer">
                        <NavLink to="/products" onClick={() => setOpen(false)} className={({ isActive }) =>
                            `hover:text-red  ${isActive ? "text-red border-red" : "border-white"
                            }`
                        } ><span className="text-sm mr-2">*</span>PRODUCTS</NavLink>

                        {/* Dropdown */}
                        <div className="absolute z-20 left-0 hidden group-hover:block bg-white shadow-lg p-4 rounded-lg w-full">

                            <Link to="/about#company-profile" onClick={() => setOpen(false)} className="block hover:text-red py-1">
                                <span className="text-sm mr-2">*</span> Ferrous Metal
                            </Link>

                            <Link to="/about#company-profile" onClick={() => setOpen(false)} className="block hover:text-red py-1">
                                <span className="text-sm mr-2">*</span> Non-Ferrous Metal
                            </Link>

                            <Link to="/about#goals-values" onClick={() => setOpen(false)} className="block hover:text-red py-1">
                                <span className="text-sm mr-2">*</span> Industrial Flanges
                            </Link>

                            <Link to="/about#management" onClick={() => setOpen(false)} className="block hover:text-red py-1">
                                <span className="text-sm mr-2">*</span> Industrial Valves
                            </Link>

                            <Link to="/about#quality-infra" onClick={() => setOpen(false)} className="block hover:text-red py-1">
                                <span className="text-sm mr-2">*</span> Industrial Fittings
                            </Link>

                            <Link to="/about#quality-infra" onClick={() => setOpen(false)} className="block hover:text-red py-1">
                                <span className="text-sm mr-2">*</span> Dairy Fittings
                            </Link>

                            <Link to="/about#quality-infra" onClick={() => setOpen(false)} className="block hover:text-red py-1">
                                <span className="text-sm mr-2">*</span> Fasteners
                            </Link>

                            <Link to="/about#quality-infra" onClick={() => setOpen(false)} className="block hover:text-red py-1">
                                <span className="text-sm mr-2">*</span> Perforated Sheet
                            </Link>

                        </div>
                    </div>





                    <NavLink to="/industries" onClick={() => setOpen(false)} className={({ isActive }) =>
                        `hover:text-red   ${isActive ? "text-red border-red" : "border-white"
                        }`
                    }><span className="text-sm mr-2">*</span>INDUSTRIES</NavLink>

                    <NavLink to="/updates" onClick={() => setOpen(false)} className={({ isActive }) =>
                        `hover:text-red  ${isActive ? "text-red border-red" : "border-white"
                        }`
                    }><span className="text-sm mr-2">*</span>UPDATES</NavLink>

                    <NavLink to="/contact" onClick={() => setOpen(false)} className={({ isActive }) =>
                        `hover:text-red  ${isActive ? "text-red border-red" : "border-white"
                        }`
                    }><span className="text-sm mr-2">*</span>CONTACT US</NavLink>


                    <hr />

                    <h1 className="text-2xl font-mons text-red">Contact Us :</h1>

                    <a href="tel:9998488480" className="hover:text-red font-montserrat" ><div className="flex items-center gap-2 my-2">
                        <i className="fa-solid fa-phone icon"></i>
                        <span>+91 9998488480</span>
                    </div></a>

                    <a href="mailto:anjanaenterprise117@gmail.com" className="hover:text-red" target="_blank" rel="noreferrer"><div className="flex items-center gap-2 my-2">
                        <i className="fa-solid fa-envelope icon"></i>
                        <span>anjanaenterprise117@gmail.com</span>
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
