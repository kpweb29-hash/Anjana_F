import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import Testimonials from "../components/Testimonials";
import AboutDirector from "../components/AboutDirector";
import TeamSection from "../components/TeamSection";
import ProgressRing from "../components/ProgressRing ";
import ProductCategories from "../components/ProductCategories";

const About = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("company-profile");

  useEffect(() => {
    if (location.hash) {
      setActiveSection(location.hash.replace("#", ""));
    }
  }, [location]);

  return (<>

    <Breadcrumb />

    <div className="py-10">

      {/* ---------- About page default ---------- */}
      {activeSection === "about-us" && (<>
       
          <section
      className="py-10 bg-white relative"
      style={{
        backgroundImage: "url('/images/about/city-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        opacity: 1,
      }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* TOP SMALL TITLE */}
        <p className="text-sm uppercase md:tracking-widest text-gray-500 mb-2" data-aos="fade-up">
          ── Learn About Anjana Enterprise ──
        </p>

        {/* MAIN HEADING */}
        <h2 className="text-3xl md:text-4xl font-vollkorn font-bold text-blue leading-snug" data-aos="fade-up" data-aos-delay="100">
          At Anjana Enterprise, We Take Immense Pride In  
          <br />Our Commitment To Excellence In Metal Fabrication  
          <br />And Customization.
        </h2>

        {/* DESCRIPTION */}
        <p className="my-8 text-gray-600 leading-relaxed text-sm md:text-base" data-aos="fade-up" data-aos-delay="200">
          With a rich history and a forward-looking vision, Anjana Enterprise has become a 
          trusted leader in the metal industry. Our team of skilled craftsmen, engineers, and 
          professionals bring exceptional expertise to every project. We specialize in metal 
          fabrication services and are committed to delivering solutions that exceed expectations 
          in quality, performance, and reliability.
        </p>

        {/* BUTTON */}
        <Link to="/about#company-profile" className=" px-8 py-3 bg-blue text-white rounded-md font-semibold 
        hover:bg-red transition" data-aos="fade-up" data-aos-delay="300">
          Company Profile
        </Link>

      </div>
    </section>

     <AboutDirector />


     <section className="py-10 bg-white text-center">
      <div className="max-w-4xl mx-auto px-6">

        {/* Small Title */}
        <div className="flex items-center justify-center gap-4 mb-3">
          <span className="w-16 h-[2px] bg-blue"></span>
          <p className="text-gray-600 font-semibold tracking-wide" data-aos="fade-down">
            OUR GOAL
          </p>
          <span className="w-16 h-[2px] bg-blue"></span>
        </div>

        {/* Main Heading */}
        <h2
          className="text-3xl md:text-4xl font-vollkorn font-bold text-blue mb-5"
          data-aos="fade-up"
        >
          Let’s Reach Our Goal Together
        </h2>

        {/* Description */}
        <p
          className="text-gray-600 leading-relaxed max-w-4xl mx-auto mb-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Our aim is to give industrial workers a safe, secure, and productive work environment
          together with the information and abilities they need to be successful in their
          positions. We work hard to make sure that workers have the assistance and resources
          they require to realise their full potential in addition to a happy, fulfilling, and
          fulfilling work environment. Our goal is to provide a respectful and cooperative work
          environment where staff members feel empowered to make significant contributions to
          the company’s success.
        </p>

         {/* BUTTON */}
        <Link to="/about#goals-values" className=" px-8 py-3 bg-blue text-white rounded-md font-semibold 
        hover:bg-red transition" data-aos="fade-up" data-aos-delay="300">
          Our Goals
        </Link>

      </div>
    </section>


     <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE CONTENT */}
        <div data-aos="fade-right">
          {/* Small heading */}
          <p className="text-gray-600 uppercase text-sm font-semibold tracking-wide border-l-4 border-red pl-3">
            About Our Quality
          </p>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-vollkorn font-bold text-blue mt-3">
            Quality Is The Bedrock Of Our Operations.
          </h2>

          {/* Paragraph */}
          <p className="text-gray-600 leading-relaxed mt-4">
            Every project we undertake, from the simplest to the most complex,
            is approached with an unwavering commitment to precision and durability.
            Our stringent quality control processes ensure that our work stands
            up to the most rigorous standards.
          </p>

          <p className="text-gray-600 leading-relaxed my-4 mb-6">
            We invest in the highest quality materials and state-of-the-art
            technology to ensure that every product we create is built to last.
            From material selection to the latest fabrication techniques, we
            utilize the best resources available to maintain our commitment to quality.
          </p>

           {/* BUTTON */}
        <Link to="/about#quality-infra" className=" px-8 py-3 bg-blue text-white rounded-md font-semibold 
        hover:bg-red transition" data-aos="fade-up" data-aos-delay="300">
         Quality & Infrastructure
        </Link>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative" data-aos="fade-left">
          <img
            src="/images/about/whychoose.jpg"
            alt="Quality"
            className="w-full rounded shadow-xl object-cover"
          />

          {/* Top-left blue box */}
          <div className="absolute top-0 left-0 bg-blue text-white px-6 py-6 w-48">
            <h3 className="text-4xl font-bold">15+</h3>
            <p className="text-xs uppercase tracking-wide leading-tight mt-1">
              Years of <br /> Working Experience
            </p>
          </div>
        </div>

      </div>
    </section>


      </>)}




      {/* ---------- COMPANY PROFILE ---------- */}
      {activeSection === "company-profile" && (
        <>
           <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Top Small Title */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="w-16 h-[2px] bg-blue"></span>
          <p className="text-gray-600 font-semibold uppercase text-sm tracking-wide" data-aos="fade-down">
            Learn About Anjana Enterprise
          </p>
          <span className="w-16 h-[2px] bg-blue"></span>
        </div>

        {/* Main Heading */}
        <h2
          className="text-3xl md:text-4xl font-vollkorn font-bold text-blue leading-snug"
          data-aos="fade-up"
        >
          At Anjana Enterprise, We Take Immense Pride In  
          <br />
          Our Commitment To Excellence In Metal Fabrication  
          <br />
          And Customization.
        </h2>

        {/* Paragraph */}
        <p
          className="text-gray-600 max-w-4xl mx-auto mt-6 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          With a rich history and a forward-looking vision, we have established ourselves as a trusted
          leader in the metal industry. Anjana Enterprise is known for its team of skilled craftsmen,
          engineers, and professionals who bring an impressive level of expertise to every project. We
          specialize in metal fabrication services and are committed to delivering solutions that exceed
          expectations in terms of quality and performance.
        </p>

        {/* IMAGE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">

          {/* Left Large Image with Play Button */}
          <div className="relative" data-aos="fade-right">
            <img
              src="/images/about/hero-about.png"
              alt="Metal Industry"
              className="w-full h-[330px] object-cover rounded-md shadow-md"
            />

            {/* Play Button */}
            <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue text-white w-14 h-14 rounded-full flex justify-center items-center text-3xl shadow-lg hover:bg-blue/90 transition">
              <i className="fa-solid fa-play"></i>
            </button>
          </div>

          {/* Middle Image */}
          <div className="relative" data-aos="fade-up">
            <img
              src="/images/about/profile1.jpg"
              alt="Safety & Ethics"
              className="w-full h-[330px] object-cover rounded-md shadow-md"
            />

            {/* Bottom Label Box */}
            <div className="absolute bottom-0 left-0 w-full bg-blue p-4 text-center text-white font-semibold tracking-wide">
              <i className="fa-solid fa-shield-halved mr-2"></i>
              SAFETY AND ETHICS
            </div>
          </div>

          {/* Right Image */}
          <div className="relative" data-aos="fade-left">
            <img
              src="/images/about/profile2.jpg"
              alt="Innovation"
              className="w-full h-[330px] object-cover rounded-md shadow-md"
            />

            {/* Bottom Label Box */}
            <div className="absolute bottom-0 left-0 w-full bg-blue p-4 text-center text-white font-semibold tracking-wide">
              <i className="fa-solid fa-gears mr-2"></i>
              INNOVATION
            </div>
          </div>

        </div>

      </div>
    </section>

     <section
      className="relative bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/images/home/carousel1.jpeg')" }}
    >
      {/* Overlay */}
      <div className="bg-black/80 w-full h-full">
        <div className="max-w-7xl mx-auto px-6 py-20">

          {/* CONTENT */}
          <div className="max-w-xl" data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-vollkorn font-bold text-white leading-snug">
              We’re Here To Meet Your Unique  
              <br /> Requirements.
            </h2>

            <p className="text-gray-200 my-4 mb-6 leading-relaxed">
              At Anjana Enterprise, we’re not just a supplier; we’re your trusted
              partner in metal excellence. Contact us today to start a conversation
              about how we can serve you better.
            </p>

             {/* BUTTON */}
        <Link to="/contact" className=" px-8 py-3 bg-blue text-white rounded-md font-semibold 
        hover:bg-red transition" data-aos="fade-up" data-aos-delay="300">
          Talk With Us
        </Link>
          </div>

        </div>
      </div>
    </section>

 <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE BLOCK */}
        <div className="relative" data-aos="fade-right">
          {/* Main Image */}
          <img
            src="/images/about/whychoose.jpg"
            alt="Why Choose Us"
            className="w-full h-[360px] object-cover rounded-md shadow-md"
          />

          {/* Left Blue Block */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-blue w-12 h-40"></div>

          {/* Right Blue Block */}
          <div className="absolute right-0 top-0 bg-blue w-16 h-40"></div>
        </div>

        {/* RIGHT CONTENT */}
        <div data-aos="fade-left">
          {/* Small Title */}
          <p className="text-gray-600 uppercase text-sm font-semibold tracking-wide border-l-4 border-red pl-3">
            Why Choose Anjana Enterprise
          </p>

          {/* Main Title */}
          <h2 className="text-3xl font-vollkorn font-bold text-blue mt-4 leading-snug">
            Why You Should Choose Us As Your Trusted Partner
          </h2>

          {/* Subheading */}
          <p className="text-gray-700 mt-4 font-medium">
            Our stringent quality control processes ensure that our work adheres to the highest industry standards.
          </p>

          {/* Horizontal Divider */}
          <div className="w-full h-[2px] bg-gray-300 mt-4 mb-4"></div>

          {/* Paragraph */}
          <p className="text-gray-600 leading-relaxed mb-4">
            We understand that one size does not fit all. We specialize in custom solutions,
            tailoring our services to meet the unique needs of each project. From intricate designs
            to unique specifications, we have the versatility to deliver on diverse requirements.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Our advanced facilities are equipped with state-of-the-art machinery and technology.
            We invest in the best tools available to ensure that your project requirements are
            met with precision and excellence.
          </p>
        </div>

      </div>
    </section>

    <Testimonials />

        </>
      )}




      {/* ---------- GOALS & VALUES ---------- */}
      {activeSection === "goals-values" && (
        <>
           <section className="py-10 bg-white text-center">
      <div className="max-w-4xl mx-auto px-6">

        {/* Small Title */}
        <div className="flex items-center justify-center gap-4 mb-3">
          <span className="w-16 h-[2px] bg-blue"></span>
          <p className="text-gray-600 font-semibold tracking-wide" data-aos="fade-down">
            OUR GOAL
          </p>
          <span className="w-16 h-[2px] bg-blue"></span>
        </div>

        {/* Main Heading */}
        <h2
          className="text-3xl md:text-4xl font-vollkorn font-bold text-blue mb-5"
          data-aos="fade-up"
        >
          Let’s Reach Our Goal Together
        </h2>

        {/* Description */}
        <p
          className="text-gray-600 leading-relaxed max-w-4xl mx-auto mb-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Our aim is to give industrial workers a safe, secure, and productive work environment
          together with the information and abilities they need to be successful in their
          positions. We work hard to make sure that workers have the assistance and resources
          they require to realise their full potential in addition to a happy, fulfilling, and
          fulfilling work environment. Our goal is to provide a respectful and cooperative work
          environment where staff members feel empowered to make significant contributions to
          the company’s success.
        </p>


      </div>
    </section>

     <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP 3 GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 rounded-2xl overflow-hidden">

          {/* Left Image */}
          <div data-aos="fade-right">
            <img
              src="/images/home/vision1.jpg"
              className="w-full h-[260px] object-cover"
              alt="Mission"
            />
          </div>

          {/* Center Vision Block */}
          <div
            className="bg-blue text-white flex flex-col justify-center items-center text-center px-6"
            data-aos="fade-up"
          >
            <div className="text-4xl mb-3">👁️</div>
            <h3 className="text-xl font-bold mb-2">OUR VISION</h3>
            <p className="text-sm leading-relaxed">
              Our vision for industrial employees is to provide a safe, secure, and fulfilling
              workplace where each employee can reach their full potential and make meaningful
              contributions to the organization and the industry.
            </p>
          </div>

          {/* Right Image */}
          <div data-aos="fade-left">
            <img
              src="/images/home/vision2.jpg"
              className="w-full h-[260px] object-cover"
              alt="Aim"
            />
          </div>
        </div>

        {/* BOTTOM 3 GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 rounded-2xl overflow-hidden">

          {/* Mission Block */}
          <div
            className="bg-white text-center px-6 py-10 shadow-sm rounded-2xl"
            data-aos="fade-right"
          >
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="text-lg font-bold text-blue mb-2">OUR MISSION</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Our mission is to provide employers and employees with a safe, secure,
              and easy-to-use platform for connecting and engaging in meaningful
              conversations about career advancement.
            </p>
          </div>

          {/* Middle Image */}
          <div data-aos="zoom-in">
            <img
              src="/images/about/hero-about.png"
              className="w-full h-[260px] object-cover"
              alt="Focus"
            />
          </div>

          {/* Aim Block */}
          <div
            className="bg-white text-center px-6 py-10 shadow-sm rounded-2xl"
            data-aos="fade-left"
          >
            <div className="text-3xl mb-3">📌</div>
            <h3 className="text-lg font-bold text-blue mb-2">OUR AIM</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Our aim is to provide industrial employees with the right tools and support to
              help them perform their jobs safely and effectively. We want to create an
              environment where they feel valued, empowered, and respected.
            </p>
          </div>

        </div>

      </div>
    </section>


        </>
      )}


      {/* ---------- MANAGEMENT ---------- */}
      {activeSection === "management" && (
       <>
       
      <AboutDirector />

      <TeamSection />

       </>
      )}


      {/* ---------- QUALITY & INFRA ---------- */}
      {activeSection === "quality-infra" && (
        <>
          <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE CONTENT */}
        <div data-aos="fade-right">
          {/* Small heading */}
          <p className="text-gray-600 uppercase text-sm font-semibold tracking-wide border-l-4 border-red pl-3">
            About Our Quality
          </p>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-vollkorn font-bold text-blue mt-3">
            Quality Is The Bedrock Of Our Operations.
          </h2>

          {/* Paragraph */}
          <p className="text-gray-600 leading-relaxed mt-4">
            Every project we undertake, from the simplest to the most complex,
            is approached with an unwavering commitment to precision and durability.
            Our stringent quality control processes ensure that our work stands
            up to the most rigorous standards.
          </p>

          <p className="text-gray-600 leading-relaxed my-4 mb-6">
            We invest in the highest quality materials and state-of-the-art
            technology to ensure that every product we create is built to last.
            From material selection to the latest fabrication techniques, we
            utilize the best resources available to maintain our commitment to quality.
          </p>

           {/* BUTTON */}
        <Link to="/about#quality-infra" className=" px-8 py-3 bg-blue text-white rounded-md font-semibold 
        hover:bg-red transition" data-aos="fade-up" data-aos-delay="300">
         Quality & Infrastructure
        </Link>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative" data-aos="fade-left">
          <img
            src="/images/about/whychoose.jpg"
            alt="Quality"
            className="w-full rounded shadow-xl object-cover"
          />

          {/* Top-left blue box */}
          <div className="absolute top-0 left-0 bg-blue text-white px-6 py-6 w-48">
            <h3 className="text-4xl font-bold">15+</h3>
            <p className="text-xs uppercase tracking-wide leading-tight mt-1">
              Years of <br /> Working Experience
            </p>
          </div>
        </div>

      </div>
    </section>

        
    <section
      className="
        bg-fixed bg-center bg-cover relative
        py-20
      "
      style={{
        backgroundImage: "url('/images/about/whychoose.jpg')",
      }}
    >
      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-[#022c53]/90"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-white">

        {/* TITLE */}
        <div className="text-center mb-12" >
          <p className="text-sm md:tracking-wide" data-aos="fade-up" >
            ——— <span className="font-semibold text-gray-200">
              WHY CHOOSE Anjana Enterprise
            </span>{" "}
            ———
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-4 leading-snug" data-aos="fade-up" data-aos-delay="100">
            We Are Committed To Earning And Maintaining That Trust <br />
            Through The Consistent Delivery Of High-Quality <br />
            Products And Services.
          </h2>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">

          {/* BLOCK 1 */}
          <div className="flex gap-4" data-aos="fade-right">
            <div className="border border-white px-4 pt-5 pb-2 rounded-md">
              <i class="fas fa-check-circle text-3xl"></i>
            </div>

            <div>
              <h3 className="font-semibold text-lg">COMMITMENT TO QUALITY</h3>
              <p className="text-sm mt-2 text-gray-300">
                Our dedication to maintaining the highest quality standards ensures you
                receive metal products that exceed benchmarks.
              </p>
            </div>
          </div>

          {/* BLOCK 2 */}
          <div className="flex gap-4" data-aos="fade-left">
            <div className="border border-white px-4 pt-5 pb-2 rounded-md">
              <i class="fas fa-tools text-3xl"></i>
            </div>

            <div>
              <h3 className="font-semibold text-lg">CUSTOMIZED SOLUTIONS</h3>
              <p className="text-sm mt-2 text-gray-300">
                We provide tailored solutions including fabrication to meet your exact
                project specifications.
              </p>
            </div>
          </div>

          {/* BLOCK 3 */}
          <div className="flex gap-4" data-aos="fade-right" data-aos-delay="200">
            <div className="border border-white px-4 pt-5 pb-2 rounded-md">
              <i class="fas fa-globe-americas text-3xl"></i>
            </div>

            <div>
              <h3 className="font-semibold text-lg">GLOBAL REACH</h3>
              <p className="text-sm mt-2 text-gray-300">
                Strategically located facilities allow us to deliver materials efficiently
                across the world.
              </p>
            </div>
          </div>

          {/* BLOCK 4 */}
          <div className="flex gap-4" data-aos="fade-left" data-aos-delay="200">
            <div className="border border-white px-4 pt-5 pb-2 rounded-md">
              <i class="fas fa-users-cog text-3xl"></i>
            </div>

            <div>
              <h3 className="font-semibold text-lg">EXPERIENCED WORKFORCE</h3>
              <p className="text-sm mt-2 text-gray-300">
                Our skilled team maintains exceptional quality through training and
                development.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>

     <section className="py-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center justify-between">

      {/* Left Text */}
      <div className="max-w-xl">
        <h2 className="text-3xl font-bold text-[#0A3B78] leading-snug" data-aos="fade-right">
          We Stand By Our Commitment To Quality
          And Invite You To Experience It For Yourself.
        </h2>

        <p className="mt-4 text-gray-600 leading-7" data-aos="fade-right" data-aos-delay="100">
          Your trust in our work is something we value deeply.
          We are committed to earning and maintaining that trust
          through the consistent delivery of high-quality products
          and services.
        </p>
      </div>

      {/* Right Progress Circles */}
      <div className="flex flex-col md:flex-row gap-10">
        <ProgressRing percentage={87} label="BUILD QUALITY"  />
        <ProgressRing percentage={90} label="TECHNOLOGY"  />
        <ProgressRing percentage={85} label="SUSTAINABILITY"  />
      </div>

    </section>

    <ProductCategories />


        </>
      )}

    </div>

  </>
  );
};

export default About;
