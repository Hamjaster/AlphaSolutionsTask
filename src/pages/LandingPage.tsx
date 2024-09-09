import React, { CSSProperties, useEffect } from "react";
import image from "../assets/image.png";
import image2 from "../assets/image2.png";
import house from "../assets/house.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import FadeUp from "../components/FadeUp";
import { ServiceCard } from "../components/ServiceCard";
import {
  CreditCard,
  Home,
  RefreshCcw,
  Building2,
  PiggyBank,
  Briefcase,
  User,
  Users,
  HandHeart,
  Mail,
  Send,
  DivideSquareIcon,
} from "lucide-react";
import {
  Phone,
  Clock,
  MapPin,
  Github,
  Twitter,
  Facebook,
  Linkedin,
  Instagram,
} from "lucide-react";
import CountUp from "react-countup";
import { MdLocationPin, MdOutlineNavigateNext } from "react-icons/md";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FaClock } from "react-icons/fa6";
import { FaGitlab, FaPhoneAlt, FaTelegram, FaWordpress } from "react-icons/fa";
import { IoLogoTwitter, IoLogoWhatsapp } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

export const services = [
  {
    icon: <Home strokeWidth={1} className="w-10 h-10 text-orange-500" />,
    title: "Home Loans",
    description: (
      <>
        At Alphaa Financial Solutions, we specialize in guiding you through
        every step of your home loan journey.
        <br />
        <br />
        Whether youre a first-time homebuyer eager to find your dream home,
        looking to refinance for better rates and terms, or investing in
        property to build your portfolio, our expert team is here to provide
        personalized solutions tailored to your financial goals
      </>
    ),
  },
  {
    icon: <CreditCard strokeWidth={1} className="w-10 h-10 text-orange-500" />,
    title: "First Home Buyer",
    description:
      "A first-time homebuyer is an individual or household purchasing a home for the first time. \n\n First-time homebuyers may be eligible for various incentives, such as lower down payment requirements, grants, or tax credits, which aim to make homeownership more accessible.",
  },
  {
    icon: <RefreshCcw strokeWidth={1} className="w-10 h-10 text-orange-500" />,
    title: "Refinancing",
    description:
      "Refinancing is the process of replacing an existing loan with a new one, typically to take advantage of better terms, such as a lower interest rate, a different loan term, or to switch from an adjustable-rate mortgage to a fixed-rate mortgage. Homeowners often refinance to reduce their monthly mortgage payments, pay off their loan more quickly, or access equity in their home through a cash-out refinance. ",
  },
  {
    icon: <Building2 strokeWidth={1} className="w-10 h-10 text-orange-500" />,
    title: "Investment Property",
    description:
      "An investment property is a real estate asset purchased with the intention of generating income or profit, rather than being used as a primary residence. These properties can include residential homes, apartment buildings, commercial spaces, or land. Investors typically buy these properties to earn rental income, benefit from property appreciation over time",
  },
  {
    icon: <PiggyBank strokeWidth={1} className="w-10 h-10 text-orange-500" />,
    title: "Self Managed Super Fund",
    description: (
      <>
        At Alphaa Financial Solutions, we offer expert guidance on Self-Managed
        Super Fund (SMSF) loans to help you maximize your investment potential.
        <br />
        <br />
        Whether you’re looking to acquire residential or commercial property
        through your SMSF, our team provides tailored advice and innovative
        financing solutions to suit your needs.
      </>
    ),
  },
  {
    icon: <Briefcase strokeWidth={1} className="w-10 h-10 text-orange-500" />,
    title: "Asset Finance",
    description: (
      <>
        At Alphaa Financial Solutions, we offer tailored asset and vehicle
        finance solutions to help you acquire the equipment or vehicle you need
        with ease.
        <br />
        <br />
        Whether you’re looking to purchase a new car, upgrade your business
        equipment, or finance a fleet, our team provides expert advice and
        customized financing options.
      </>
    ),
  },
  {
    icon: <User strokeWidth={1} className="w-10 h-10 text-orange-500" />,
    title: "Personal Loans",
    description: (
      <>
        At Alphaa Financial Solutions, we offer tailored asset and vehicle
        finance solutions to help you acquire the equipment or vehicle you need
        with ease.
        <br />
        <br />
        Whether you’re looking to purchase a new car, upgrade your business
        equipment, or finance a fleet, our team provides expert advice and
        customized financing options.
      </>
    ),
  },
  {
    icon: <Users strokeWidth={1} className="w-10 h-10 text-orange-500" />,
    title: "Expat Loans",
    description: (
      <>
        At Alphaa Financial Solutions, we offer tailored asset and vehicle
        finance solutions to help you acquire the equipment or vehicle you need
        with ease.
        <br />
        <br />
        Whether you’re looking to purchase a new car, upgrade your business
        equipment, or finance a fleet, our team provides expert advice and
        customized financing options.
      </>
    ),
  },
];
const arrowStyles: CSSProperties = {
  position: "absolute",
  zIndex: 2,
  top: "calc(50% - 15px)",
  width: 30,
  height: 30,
  cursor: "pointer",
};
export default function LandingPage() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="overflow-x-hidden">
      <Carousel
        showArrows={true}
        showIndicators={false}
        showStatus={false}
        animationHandler="fade"
        swipeable={false}
        interval={5000}
        showThumbs={false}
        transitionTime={1000}
        infiniteLoop={true}
        autoPlay={true}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <div
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, left: 15 }}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-[rgba(0,0,0,0.5)]"
            >
              <GrFormPrevious width={100} className="text-white " />
            </div>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <div
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, right: 15 }}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-[rgba(0,0,0,0.5)]"
            >
              <GrFormNext width={100} className="text-white " />
            </div>
          )
        }
      >
        <div className="relative h-screen w-full flex items-center overflow-hidden justify-center">
          <div
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(255, 255, 255, 0)), url(https://alphaafin.com.au/wp-content/uploads/2024/08/national-cancer-institute-xDSD3Vmzh70-unsplash-scaled.jpg)`,
            }}
            className="bg-cover bg-no-repeat animate-zoomInOut bg-center absolute right-0 left-0 bottom-0 top-0 h-full w-full banner-Image"
          ></div>
          <FadeUp
            delay={0.8}
            text={
              <div className="relative w-[80%] mx-auto text-white  z-50 space-y-10">
                <div className="text-5xl  font-[400] font-calistoga">
                  Empowering Financial Security for Everyone
                </div>
                <div className="text-base font-normal">
                  We are committed to providing accessible and reliable
                  financial services to help individuals families.
                </div>
              </div>
            }
          />
        </div>
        <div className="relative h-screen w-full flex items-center overflow-hidden justify-center">
          <div
            style={{
              backgroundImage: `url(https://alphaafin.com.au/wp-content/uploads/2024/08/outdoor-portrait-of-cheerful-indian-family-sitting-2024-02-13-02-17-57-utc-11.jpeg-scaled.jpg)`,
            }}
            className="bg-cover h-screen bg-center bg-no-repeat animate-zoomInOut  absolute right-0 left-0 bottom-0 top-0 w-full banner-Image"
          ></div>
          <FadeUp
            delay={0.8}
            text={
              <div className="relative w-[80%] mx-auto text-white  z-50 space-y-10">
                <div className="text-5xl  font-[400] font-calistoga">
                  Empowering Financial Security for Everyone
                </div>
                <div className="text-base font-normal">
                  We are committed to providing accessible and reliable
                  financial services to help individuals families.
                </div>
              </div>
            }
          />
        </div>
      </Carousel>

      {/* Lower */}
      <div className="border-t-8 border-primary bg-secondary p-8 pb-12 mt-5 ">
        <FadeUp
          text={
            <div className=" grid md:grid-cols-2 gap-6">
              <div className="bg-white border-primary border-b-4 px-10 py-12 rounded-3xl overflow-hidden  shadow-md relative">
                <h2 className="text-3xl text-secondary font-bold mb-6">
                  Our Story
                </h2>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  Alpha Financial Solutions provides bespoke mortgage and
                  finance services. We believe that financial freedom is not
                  just a goal but a journey, and we are here to guide you every
                  step of the way.
                </p>
                <button className="text-secondary text-sm font-bold hover:text-primary hover:translate-x-3 transition-all duration-500">
                  KNOW MORE
                </button>
              </div>
              <div className="bg-white border-primary border-b-4 px-10 py-12 rounded-3xl overflow-hidden  shadow-md relative">
                <h2 className="text-3xl text-secondary font-bold mb-6">
                  Our Mission
                </h2>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  At Alpha Financial Solutions, our mission is to empower
                  individuals and businesses to achieve their financial
                  aspirations through tailored solutions, expert advice, and
                  exceptional service. We strive to build lasting relationships
                  based on trust, integrity, and mutual success.
                </p>
              </div>
            </div>
          }
        />
      </div>

      {/* Services */}
      <section className="bg-gray-100 py-24">
        <div className="container mx-auto px-4">
          <img
            src="https://alphaafin.com.au/wp-content/uploads/2024/08/img-shape-02-1.png"
            alt=""
            className="mx-auto w-16 mb-12"
          />
          <h2 className="text-4xl font-bold text-center mb-20">Our Services</h2>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-[65%] grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
            <div className="lg:w-[35%] rounded-lg overflow-hidden relative">
              <img
                src={
                  "https://alphaafin.com.au/wp-content/uploads/2024/08/national-cancer-institute-xDSD3Vmzh70-unsplash-scaled.jpg"
                }
                alt="Financial advisors"
                className="object-cover w-full h-full"
              />
              <div className=" absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  At Alphas Financial Solutions, We Offer A Comprehensive Range
                  Of Financial Services
                </h3>
                <p className="mb-4 text-sm">
                  We have the expertise to guide you through the process.
                </p>
                <div className="flex items-center justify-center">
                  <div>
                    <p className="font-bold text-3xl">
                      <CountUp
                        start={0}
                        duration={2}
                        enableScrollSpy={true}
                        end={100}
                      />
                      +
                    </p>
                    <p className="text-sm">Simplify the loan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lower Service */}
      <div className="grid overflow-x-hidden grid-cols-1 md:grid-cols-2 gap-20 p-20">
        <div className=" relative">
          <img
            className="w-10/12 rounded-3xl float-end"
            src={
              "https://alphaafin.com.au/wp-content/uploads/2024/08/national-cancer-institute-xDSD3Vmzh70-unsplash-scaled.jpg"
            }
            alt=""
          />
          {/* House image */}
          <img
            data-aos="fade-right"
            data-aos-duration="1000"
            className=" w-[20rem] absolute -bottom-10 left-0"
            src={
              "https://alphaafin.com.au/wp-content/uploads/2024/08/img-home-02-min-1.png"
            }
            alt=""
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="bg-gray-100 hidden md:block rounded-3xl h-full w-full"
        ></div>
      </div>

      {/* WE Believe Bright */}
      <div className="bg-black  w-full h-[30rem]">
        <section className="bg-gray-900  mb-10 md:w-[95%] float-end rounded-br-3xl rounded-bl-3xl text-white">
          <div className=" mx-auto  ">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 w-full p-14 mb-8 md:mb-0">
                <div className="flex flex-col items-start justify-start">
                  <img
                    src="https://alphaafin.com.au/wp-content/uploads/2024/08/img-shape-02-1.png"
                    alt=""
                    className="mb-5 w-44 float-start "
                  />
                  <h1 className="text-5xl font-bold ">
                    We Believe You're Bright
                  </h1>
                </div>
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="1000"
                className="md:w-1/2 w-full relative"
              >
                <div
                  style={{
                    backgroundImage: `url(https://alphaafin.com.au/wp-content/uploads/2024/08/outdoor-portrait-of-cheerful-indian-family-sitting-2024-02-13-02-17-57-utc-11.jpeg-scaled.jpg)`,
                  }}
                  className="rounded-br-3xl rounded-bl-3xl bg-cover bg-center h-[35rem] w-full -mb-36"
                ></div>
                <div className="w-full flex justify-evenly py-10 ">
                  <div
                    className="w-[40%] h-52 p-4
                 bg-white text-secondary rounded-2xl hover:-translate-y-4 cursor-pointer hover:border-opacity-5 transition-all duration-500 border-b-8 border-primary flex flex-col items-center justify-center shadow-lg space-y-3"
                  >
                    <p className="text-5xl font-bold">320+</p>
                    <p className="text-xl font-bold ">Leaders</p>
                  </div>
                  <div
                    className="w-[40%] h-52 p-4 mt-16
                 bg-white text-secondary rounded-2xl hover:-translate-y-4 cursor-pointer hover:border-opacity-5 transition-all duration-500 border-b-8 border-primary flex flex-col items-center justify-center shadow-lg space-y-3"
                  >
                    <p className="text-5xl font-bold">20+</p>
                    <p className="text-xl font-bold ">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Meet our founder + Contact US */}
      <div className=" mt-96 mb-10 mx-auto px-4 py-8">
        <section className="mb-32 text-center">
          <div className="mb-4">
            <HandHeart
              className="w-12 h-12 text-orange-500 mx-auto"
              strokeWidth={1}
            />
          </div>
          <h2 className="text-4xl font-bold mb-8">Meet Our Founder</h2>
          <div className="max-w-xs mx-auto ">
            <img
              src={
                "https://alphaafin.com.au/wp-content/uploads/2024/08/Pawan-panjabi-e1724242619180.jpg"
              }
              alt="Founder"
              width={300}
              height={300}
              className="rounded-lg mb-4"
            />
            <div className="border-b-4 w-3/4 mx-auto rounded-xl py-4 border-primary">
              <h3 className="text-xl font-bold">Mr. Pawan Punjabi</h3>
              <p className="text-gray-500">Founder</p>
            </div>
          </div>
        </section>

        <section
          data-aos="fade-up"
          data-aos-duration="1000"
          className="grid mx-4 w-[95%] md:grid-cols-2 gap-8"
        >
          <div>
            <h2 className="text-4xl font-bold mb-5">Contact Us</h2>
            <p className="mb-5 text-gray-600">
              Please feel free to ask if you have any further questions.
            </p>
            <ul className="space-y-3 font-bold">
              <li className="flex space-x-2 items-center">
                <MdLocationPin className="text-primary text-xl mr-1.5" />
                <span>Sydney, Australia</span>
              </li>
              <li className="flex space-x-2 items-center">
                <FaPhoneAlt className="text-primary w-4 h-4 mr-1.5" />
                <span>0468328227</span>
              </li>
              <li className="flex space-x-2 items-center">
                <FaClock className="text-primary w-4 h-4 mr-1.5" />
                <span>Mon - Fri: 9:00am - 5:00pm</span>
              </li>
              <li className="flex space-x-2 items-center">
                <FaClock className="text-primary w-4 h-4 mr-1.5" />
                <span>Weekend Appointments Only</span>
              </li>
            </ul>
            <div className="mt-7 flex space-x-4">
              <div className="bg-primary text-secondary p-2 rounded text-xl">
                <FaGitlab />
              </div>
              <div className="bg-primary text-secondary p-2 rounded text-xl">
                <IoLogoTwitter />
              </div>
              <div className="bg-primary text-secondary p-2 rounded text-xl">
                <FaTelegram />
              </div>
              <div className="bg-primary text-secondary p-2 rounded text-xl">
                <FaWordpress />
              </div>
              <div className="bg-primary text-secondary p-2 rounded text-xl">
                <IoLogoWhatsapp />
              </div>
            </div>
          </div>
          <div>
            <img
              src={
                "https://alphaafin.com.au/wp-content/uploads/2024/08/close-up-person-working-call-center-1024x683.jpg"
              }
              alt="Contact"
              className="rounded-lg w-[30rem] md:float-end  mx-auto shadow-xl "
            />
          </div>
        </section>
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
                srcset=""
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
            className="hover:scale-110 bg-white text-sm uppercase text-secondary px-9 py-5 rounded-md font-bold transition duration-300"
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
    </div>
  );
}
