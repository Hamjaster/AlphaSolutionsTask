import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { useSwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import AOS from "aos";
import "aos/dist/aos.css";
// import required modules
import { Pagination } from "swiper/modules";

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0); // to track current slide
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="w-full bg-[#F5F5F5]">
        <div className="container  mx-auto px-10   py-8 ">
          <h1 className="text-5xl font-bold mb-16">About Us</h1>

          <div className="text-center mb-16">
            {/* <Home className="w-8 h-8 mx-auto mb-4 text-orange-400" /> */}
            <h2
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-3xl font-bold"
            >
              We Believe You're Bright
            </h2>
          </div>

          <div className="grid text-base md:grid-cols-2 gap-8 items-start">
            <div data-aos="fade-right" data-aos-duration="1500">
              <img
                src="https://alphaafin.com.au/wp-content/uploads/elementor/thumbs/img-section-02-min-1-qs6zngh4emk55ov1yrf78p7twwstj1uoysatsyplzc.jpg"
                alt="Family on a couch"
                width={600}
                height={400}
                className="rounded-2xl border-primary border-r-4 border-b-4"
              />
              <h3 className="text-lg font-bold mt-6 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                Our mission is to provide our clients with tailored financial
                solutions that cater to their unique needs. We strive to make
                the process of securing a mortgage as straightforward and
                stress-free as possible, guiding you through every step with
                transparency and integrity.
              </p>
            </div>

            <div data-aos="fade-left" data-aos-duration="1500">
              <h3 className="text-lg font-bold mb-4">
                Welcome To Alphaa Financial Solutions
              </h3>
              <p className="text-gray-600 mb-6">
                At Alphaa Financial Solutions, we believe in empowering your
                property dreams with our premium financial services. Established
                with a vision to provide seamless loan processing and financial
                advisory, we have grown to become a trusted name in the
                Australian mortgage industry.
              </p>

              <h3 className="text-lg font-bold mb-4">Our Story 🙂</h3>
              <p className="text-gray-600 mb-4">
                Alphaa Financial Solutions was born out of a desire to simplify
                the complexities of property financing. Our founder,
              </p>
              <p className="text-gray-600">
                Mr. Pawan Punjabi, envisioned a company where
                customer-centricity and financial expertise go hand in hand.
                Over the years, we have helped thousands of Australians achieve
                their dream of owning a home, thanks to our unwavering
                commitment to excellence and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Why Choose use */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div
              data-aos="fade-up"
              data-aos-duration="1200"
              className="w-full md:w-1/2"
            >
              <img
                src="https://alphaafin.com.au/wp-content/uploads/2024/08/national-cancer-institute-xDSD3Vmzh70-unsplash-scaled.jpg"
                alt="Family photo"
                className="rounded-2xl h-full border-primary border-b-8 border-l-8"
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1200"
              className="w-full md:w-1/2 space-y-6"
            >
              <h2 className="text-primary text-base font-bold">
                Why Choose Us
              </h2>
              <h3 className="text-4xl font-bold">Our Expertise</h3>
              <div className="space-y-4 text-lg">
                <p>
                  <strong>Expertise and Experience:</strong> With over 20 Years
                  of experience in the industry, our team of financial experts
                  brings a wealth of knowledge and expertise to the table.
                </p>
                <p>
                  <strong>Customer-Centric Approach:</strong> We put our clients
                  at the heart of everything we do, offering personalized advice
                  and support to help you make informed financial decisions.
                </p>
                <p>
                  <strong>Innovative Solutions:</strong> We leverage the latest
                  technology and financial products to provide innovative
                  solutions that meet the evolving needs of our clients.
                </p>
                <p>
                  <strong>Transparency and Integrity:</strong> We pride
                  ourselves on our ethical approach, ensuring transparency and
                  integrity in all our dealings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tetimonials */}
      <div className="flex flex-col bg-[#F5F5F5] items-center mx-auto p-6 py-24 ">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex justify-center space-x-6 mb-8"
        >
          <div className={`rounded-lg overflow-hidden `}>
            <img
              src={
                "https://alphaafin.com.au/wp-content/uploads/2024/08/testimonial-2-1.jpg"
              }
              width={100}
              height={100}
              className="object-cover rounded-2xl border-primary border-r-4 border-b-4"
            />
          </div>
          <div className={` overflow-hidden `}>
            <img
              src={
                "https://alphaafin.com.au/wp-content/uploads/2024/08/testimonial-1-1.jpg"
              }
              width={100}
              height={100}
              className="object-cover border-primary rounded-2xl border-b-4"
            />
          </div>
          <div className={` overflow-hidden `}>
            <img
              src={
                "https://alphaafin.com.au/wp-content/uploads/2024/08/testimonial-3-1.jpg"
              }
              width={100}
              height={100}
              className="object-cover rounded-2xl border-primary border-l-4 border-b-4"
            />
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="relative text-xl w-2/3  text-center"
        >
          <Swiper
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={30}
            grabCursor={true}
            pagination={{
              clickable: true,
              enabled: false,
            }}
            modules={[Pagination]}
            onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
            hashNavigation={false}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="relative bg-white py-8 px-10 mb-5">
                {/* Testimonial Text */}
                <p className="text-gray-700 font-semibold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
                {/* Arrow pointing down */}
                <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2">
                  <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white"></div>
                </div>
              </div>

              <div className="text-center">
                <p className="font-bold text-base">John Doe</p>
                <p className="text-gray-500 text-base font-semibold">CTO</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative bg-white py-8 px-10 mb-5">
                {/* Testimonial Text */}
                <p className="text-gray-700 font-semibold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
                {/* Arrow pointing down */}
                <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2">
                  <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white"></div>
                </div>
              </div>

              <div className="text-center">
                <p className="font-bold text-base">John Doe</p>
                <p className="text-gray-500 text-base font-semibold">CTO</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative bg-white py-8 px-10 mb-5">
                {/* Testimonial Text */}
                <p className="text-gray-700 font-semibold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
                {/* Arrow pointing down */}
                <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2">
                  <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white"></div>
                </div>
              </div>

              <div className="text-center">
                <p className="font-bold text-base">John Doe</p>
                <p className="text-gray-500 text-base font-semibold">CTO</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="mt-6 text-gray-400">{currentSlide + 1} / 3</div>
      </div>

      {/* Talk to Pawan */}
      <div
        style={{
          backgroundImage: `url(https://alphaafin.com.au/wp-content/uploads/2024/08/img-section-03-min-1.jpg)`,
        }}
        className="bg-cover bg-no-repeat flex items-center justify-center h-[27rem] text-center py-16 px-4 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-orange-400 opacity-50 rounded-full scale-150 blur-2xl"></div>
        <div className="relative z-10 space-y-10">
          <div>
            <div className="flex justify-center mb-4">
              <img
                src="https://alphaafin.com.au/wp-content/uploads/2024/08/img-icon-02-1.png"
                alt=""
                className="w-16"
              />
            </div>
            <h2
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-5xl font-bold text-secondary mb-4"
            >
              Talk To PAWAN Now!
            </h2>
          </div>
          <button
            data-aos="fade-up"
            data-aos-duration="1000"
            className=" hover:scale-110 bg-white text-sm uppercase text-secondary px-9 py-5 rounded-md font-bold transition duration-300"
          >
            Contact us
          </button>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="mt-6 text-lg text-secondary"
          >
            Feel Free to Get in Touch for a No Obligations{" "}
            <span className="font-bold">Call PAWAN !!!</span>
          </p>
        </div>
      </div>
    </>
  );
}
