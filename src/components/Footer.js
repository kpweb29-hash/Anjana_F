import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="relative bg-blue text-white pt-20"
      style={{
        backgroundImage: "url('/images/home/vision2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-blue/90"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* LOGO + TAGLINE */}
        <div className="text-center mb-12">
          <img
            src="/images/logo/anjana-logo.png"
            alt="Logo"
            className="mx-auto w-36 mb-6 bg-white"
          />
          <h3 className="text-xl font-vollkorn font-semibold">
            Anjana Enterprise : Your Trusted Partner  In Metal Manufacturing
          </h3>
        </div>

        {/* 4-COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-10 pb-5">

          {/* LEFT MAP + TEXT */}
          <div>
            <img
              src="/images/about/map.png"
              alt="map"
              className="w-48 opacity-90 mb-4"
            />

            <p className="text-sm text-gray-300 leading-relaxed">
              India’s top supplier of Industrial Raw Materials including Ferrous &
              Non-Ferrous Metals. Trusted by industries for premium quality and
              reliable delivery.
            </p>
          </div>

          {/* MENU */}
          <div>
            <h4 className="font-bold text-lg mb-4 relative">
              MENU
              <div className="h-[1px] bg-white w-20 mt-1 opacity-40"></div>
            </h4>

            <ul className="space-y-2 text-gray-300 text-md">
              <li><Link to="/" className="hover:text-red"><span className="text-sm mr-2">*</span>Home</Link></li>
              <li><Link to="/about" className="hover:text-red"><span className="text-sm mr-2">*</span>About</Link></li>
              <li><Link to="/products" className="hover:text-red"><span className="text-sm mr-2">*</span>Products</Link></li>
              <li><Link to="/industries" className="hover:text-red"><span className="text-sm mr-2">*</span>Industries</Link></li>
              <li><Link to="/updates" className="hover:text-red"><span className="text-sm mr-2">*</span>Update</Link></li>
              <li><Link to="/contact" className="hover:text-red"><span className="text-sm mr-2">*</span>Contact Us</Link></li>
            </ul>
          </div>

          {/* OUR PRODUCTS */}
          <div className="">
            <h4 className="font-bold text-lg mb-4 relative ">
              OUR PRODUCTS
              <div className="h-[1px] bg-white w-28 mt-1 opacity-40"></div>
            </h4>

            <ul className="space-y-2 text-gray-300 text-md flex flex-col gap-0 ">
             <Link to="/" className="hover:text-red"> <li > <span className="text-sm mr-2">*</span>Ferrous Metal</li></Link>
              <Link to="/" className="hover:text-red"><li><span className="text-sm mr-2">*</span>Non-Ferrous Metal</li></Link>
             <Link to="/" className="hover:text-red"> <li><span className="text-sm mr-2">*</span>Industrial Flanges</li></Link>
             <Link to="/" className="hover:text-red"> <li><span className="text-sm mr-2">*</span>Industrial Valves</li></Link>
             <Link to="/" className="hover:text-red"> <li><span className="text-sm mr-2">*</span>Industrial Fittings</li></Link>
              <Link to="/" className="hover:text-red"><li><span className="text-sm mr-2">*</span>Dairy Fittings</li></Link>
             <Link to="/" className="hover:text-red"> <li><span className="text-sm mr-2">*</span>Fasteners</li></Link>
             <Link to="/" className="hover:text-red"> <li><span className="text-sm mr-2">*</span>Perforated Sheet</li></Link>
            </ul>
          </div>

          {/* ADDRESS */}
          <div>
            <h4 className="font-bold text-lg mb-4 relative">
              ADDRESS
              <div className="h-[1px] bg-white w-24 mt-1 opacity-40"></div>
            </h4>

            <ul className="space-y-3 text-sm text-gray-300 flex flex-col gap-0">

              <a href="tel:9998488480" target="_blank" rel="noreferrer" className="hover:text-red"> <li className="flex items-start gap-3">
                <i className="fa-solid fa-phone mt-1"></i>
                <div>
                  +91 9998488480 
                </div>
              </li></a>

              <a href="tel:9998488480" target="_blank" rel="noreferrer" className="hover:text-red"> <li className="flex items-start gap-3">
                <i className="fa-solid fa-phone mt-1"></i>
                <div>
                  +91 9998488480 
                </div>
              </li></a>

              <a href="mailto:support@apnawebx.com" target="_blank" rel="noreferrer" className="hover:text-red"><li className="flex items-start gap-3">
                <i className="fa-solid fa-envelope mt-1"></i>
                <div>
                  support@apnawebx.com
                </div>
              </li></a>

              <a href="https://maps.app.goo.gl/zNxoYHW8Eiv4fZbg8" target="_blank" rel="noreferrer" className="hover:text-red"> <li className="flex items-start gap-3">
                <i className="fa-solid fa-location-dot mt-1"></i>
                <div>
                  SUVAN BUSSINESS PARK, SOMA TEXTILE MILL COMPOUND, 109, Rakhial, Ahmedabad, Gujarat 380021
                </div>
              </li></a>
            </ul>

            {/* SOCIAL ICONS */}
            <p className="text-sm mt-6 mb-2">Follow us on:</p>
            <div className="flex gap-4 text-2xl">
              <a href="/" target="_blank" rel="noreferrer" > <i className="fa-brands fa-facebook hover:text-red cursor-pointer"></i> </a>
              <a href="/" target="_blank" rel="noreferrer" > <i className="fa-brands fa-instagram hover:text-red cursor-pointer"></i></a>
              <a href="/" target="_blank" rel="noreferrer" ><i className="fa-brands fa-twitter hover:text-red cursor-pointer"></i></a>
              <a href="/" target="_blank" rel="noreferrer" > <i className="fa-brands fa-linkedin hover:text-red cursor-pointer"></i></a>
            </div>
          </div>

        </div>

      </div>

      {/* BOTTOM COPYRIGHT BAR */}
      <div className="relative border-t border-red/30 py-4 text-center text-gray-300 text-sm flex flex-col md:flex-row justify-center md:justify-between gap-2 px-6 ">
      <span>  ©2024, All Rights Reserved By <strong>Anjana Enterprise</strong>.</span>
      <span>Developed By <a href="www.apnawebx.com" className="font-bold hover:text-red" target="_blank" rel="noreferrer" > APNAWEBX</a></span>
      </div>
    </footer>
  );
};

export default Footer;
