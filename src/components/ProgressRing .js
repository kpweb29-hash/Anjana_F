import React, { useEffect, useState } from "react";

const ProgressRing = ({ percentage, label }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setProgress(percentage), 300);
    return () => clearTimeout(timeout);
  }, [percentage]);

  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center" data-aos="fade-right" data-aos-delay="200">
      <svg width="150" height="150" className="transform -rotate-90">
        {/* Background Circle */}
        <circle
          cx="75"
          cy="75"
          r={radius}
          stroke="#D9E6F7"
          strokeWidth="12"
          fill="none"
        />

        {/* Animated Circle */}
        <circle
          cx="75"
          cy="75"
          r={radius}
          stroke="#0A3B78"
          strokeWidth="12"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 1s ease-out" }}
        />
      </svg>

      {/* Text */}
      <div className="-mt-[85px] rotate-0 text-2xl font-bold text-[#0A3B78]">
        {percentage}%
      </div>
      <p className="mt-16 font-semibold text-sm tracking-wide text-[#0A3B78]">
        {label}
      </p>
    </div>
  );
};

export default ProgressRing;
