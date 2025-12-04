import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import AboutSection from "../components/AboutSection";
import WhyChooseUs from "../components/WhyChooseUs ";
import Testimonials from "../components/Testimonials";
import ContactCTA from "../components/ContactCTA";
import VisionMissionValues from "../components/VisionMissionValues ";
import CategoriesFullSection from "../components/CategoriesFullSection";

const Home = () => {


  return (
    <>

      <div className="w-full relative ">
        <Swiper
          modules={[Navigation, Autoplay, EffectFade]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
          loop={true}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          className="w-full h-[550px] md:h-[93vh] "
        >
          {/* <-- custom arrows here */}
          <div className="custom-prev"><i className="fa-solid fa-chevron-left"></i></div>
          <div className="custom-next"><i className="fa-solid fa-chevron-right"></i></div>


          {/* 1st Slide */}
          <SwiperSlide>
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat "
              style={{ backgroundImage: `url(/images/home/carousel1.jpeg)` }}
            >
              <div className="w-full h-full bg-black/70">
                <div className="max-w-7xl mx-auto h-full pt-8 pb-14 md:pt-12 md:pb-0 px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-2 md:gap-8">

                  {/* LEFT CONTENT */}
                  <div className="hero-fade-up text-white space-y-4">
                    <h1 className="text-2xl md:text-5xl font-vollkorn font-semibold leading-tight">
                      We Offering Complete Range in
                    </h1>

                    <p className="text-3xl text-gray-200 pb-5">
                      <span className="font-bold">Ferrous & Non-Ferrous Metal</span> Across India
                    </p>

                    <button className="bg-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red/80 transition">
                      Explore Products
                    </button>
                  </div>

                  {/* RIGHT IMAGE */}
                  <div className="flex justify-center md:justify-end">
                    <img
                      src="/images/home/carousel-human.png"
                      alt="Hero"
                      className="hero-zoom max-w-[380px] h-[300px] md:mt-12 md:h-[520px] w-full object-contain drop-shadow-xl" data-aos="zoom-in" data-aos-duration="1000"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* 2nd Slide */}
          <SwiperSlide>
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(/images/home/carousel2.jpeg)` }}
            >
              <div className="w-full h-full bg-black/70 ">
                <div className="max-w-7xl mx-auto h-full pt-8 pb-14 md:pt-12 md:pb-0 px-6 grid grid-cols-1 md:grid-cols-2 items-center  gap-2 md:gap-8">

                  <div className="hero-fade-up text-white space-y-4">
                    <h1 className="text-2xl md:text-5xl font-vollkorn font-semibold leading-tight">
                      We Offering Complete Range in
                    </h1>

                    <p className="text-3xl text-gray-200 pb-5">
                      <span className="font-bold">Ferrous & Non-Ferrous Metal</span> Across India
                    </p>

                    <button className="bg-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red/80 transition">
                      Explore Products
                    </button>
                  </div>

                  <div className="grid grid-cols-2 justify-center md:justify-end gap-2">
                    <div className="bg-blue text-white text-center border-4 border-blue">
                      <img
                        src="/images/products/angle-channel.webp"
                        alt="Hero"
                        className="hero-zoom max-w-[380px] h-[100px] md:h-[220px] w-full object-cover drop-shadow-xl"
                      />
                      <span className="py-1">Angle Channel</span>
                    </div>

                    <div className="bg-blue text-white text-center border-4 border-blue">
                      <img
                        src="/images/products/ms-pipes.webp"
                        alt="Hero"
                        className="hero-zoom max-w-[380px] h-[100px] md:h-[220px] w-full object-cover drop-shadow-xl"
                      />
                      <span className="py-1">MS Pipes</span>
                    </div>

                    <div className="bg-blue text-white text-center border-4 border-blue">
                      <img
                        src="/images/products/ms-sheet.webp"
                        alt="Hero"
                        className="hero-zoom max-w-[380px] h-[100px] md:h-[220px] w-full object-cover drop-shadow-xl"
                      />
                      <span className="py-1">MS Sheet</span>
                    </div>

                    <div className="bg-blue text-white text-center border-4 border-blue">
                      <img
                        src="/images/products/ms-rods.png"
                        alt="Hero"
                        className="hero-zoom max-w-[380px] h-[100px] md:h-[220px] w-full object-cover drop-shadow-xl"
                      />
                      <span className="py-1">MS Rods</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* 3rd Slide */}
          <SwiperSlide>
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat "
              style={{ backgroundImage: `url(/images/home/carousel3.webp)` }}
            >
              <div className="w-full h-full bg-black/70 ">
                <div className="max-w-7xl mx-auto h-full pt-8 pb-14md:pt-12 md:pb-0 px-6 grid grid-cols-1 md:grid-cols-2 items-center  gap-2 md:gap-8">

                  <div className="hero-fade-up text-white space-y-4">
                    <h1 className="text-2xl md:text-5xl font-vollkorn font-semibold leading-tight">
                      We Offering Complete Range in
                    </h1>

                    <p className="text-3xl text-gray-200 pb-5">
                      <span className="font-bold">Ferrous & Non-Ferrous Metal</span> Across India
                    </p>

                    <button className="bg-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red/80 transition">
                      Explore Products
                    </button>
                  </div>

                  <div className="flex justify-center md:justify-end">
                    <img
                      src="/images/home/carousel2.jpeg"
                      alt="Hero"
                      className="hero-zoom max-w-[380px] h-[200px] md:h-[320px] w-full object-cover drop-shadow-xl"
                    />
                  </div>

                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* 4th Slide */}
          {/* <SwiperSlide>
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(/images/home/carousel4.webp)` }}
            >
              <div className="w-full h-full bg-black/70">
                <div className="max-w-7xl mx-auto h-full pt-8 pb-14 md:py-0 px-6 grid grid-cols-1 md:grid-cols-2 items-center  gap-0 md:gap-8">

                  <div className="hero-fade-up text-white space-y-4">
                    <h1 className="text-2xl md:text-5xl font-vollkorn font-semibold leading-tight">
                      We Offering Complete Range in
                    </h1>

                    <p className="text-3xl text-gray-200 pb-5">
                      <span className="font-bold">Ferrous & Non-Ferrous Metal</span> Across India
                    </p>

                    <button className="bg-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red/80 transition">
                      Explore Products
                    </button>
                  </div>

                  <div className="flex justify-center md:justify-end">
                    <img
                      src="/images/home/carousel1.jpeg"
                      alt="Hero"
                      className="hero-zoom max-w-[380px] h-[200px] md:h-[320px] w-full object-cover drop-shadow-xl"
                    />
                  </div>

                </div>
              </div>
            </div>
          </SwiperSlide> */}

        </Swiper>
      </div>


      <AboutSection />

      <VisionMissionValues />

      <CategoriesFullSection />


      <Testimonials />

      <WhyChooseUs />

      <ContactCTA />

      {/* <FeaturedProducts /> */}



    </>
  )
}

export default Home