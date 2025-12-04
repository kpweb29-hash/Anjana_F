import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const teamMembers = [
  {
    name: "MR. BHAVAR PATEL",
    role: "FOUNDER",
    img: "/images/about/team1.jpg",
  },
  {
    name: "MR. BHAVAR PATEL",
    role: "CO-FOUNDER",
    img: "/images/about/team2.jpg",
  },
  {
    name: "MR. BHAVAR PATEL",
    role: "SALES EXECUTIVE",
    img: "/images/about/team3.jpg",
  },
  {
    name: "MR. BHAVAR PATEL",
    role: "SALES EXECUTIVE",
    img: "/images/about/team4.jpg",
  },
];

const TeamSection = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section className="py-20 bg-[#f6f6f6]">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE SECTION */}
        <div className="text-center mb-12">
          <p className="text-sm tracking-wide text-gray-600">
            ———— <span className="text-blue font-semibold">MEET OUR TEAM</span> ————
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-blue mt-3 leading-snug">
            We're A Team Of Dedicated Professionals Who Take <br />
            Pride In Turning Your Visions Into Reality.
          </h2>
        </div>

        {/* TEAM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {teamMembers.map((member, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className="bg-white shadow-md rounded-xl p-4 pb-6 flex flex-col items-center"
            >
              {/* IMAGE CARD */}
              <div className="w-full h-[260px] overflow-hidden rounded-md shadow-sm">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* NAME BOX */}
              <div className="mt-4 text-center">
                <p className="font-bold text-blue text-sm">{member.name}</p>
                <p className="text-yellow-500 text-xs mt-1 tracking-wide">
                  {member.role}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default TeamSection;
