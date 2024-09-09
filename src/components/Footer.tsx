import { Github, Mail, MapPin, Phone, Send, Twitter } from "lucide-react";
import React from "react";
import { FaGitlab, FaTelegram, FaWordpress } from "react-icons/fa";
import { IoLogoTwitter, IoLogoWhatsapp } from "react-icons/io";

export default function Footer() {
  return (
    <div>
      <div className="bg-[#2A2C38] text-white py-14 md:py-20 px-4">
        <div className=" mx-4 flex md:flex-row flex-col items-center justify-center space-y-8 md:space-x-8">
          <div className="w-full md:w-[50%]">
            <h3 className="text-2xl font-bold text-orange-400 mb-4">
              Quick Contact
            </h3>
            <p className="mb-6">
              At Alphaa Financial Solutions, we believe in empowering your
              property dreams with our premium financial services.
            </p>
            <div className="space-y-4 font-bold">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-orange-400 mr-2" />
                <span>Sydney, Austrailia</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-orange-400 mr-2" />
                <span>0468328227</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-orange-400 mr-2" />
                <span>contact@example.com</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[50%] bg-[#22232D] px-8 py-10 rounded-2xl">
            <h3 className="text-xl  font-bold text-white mb-4">
              Opening Hours
            </h3>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-primary font-bold text-sm  min-w-max">
                  MON TO FRI
                </span>
                {/* Dashed line */}
                <div className="border-b-2 border-dashed border-gray-500 mx-2  w-full"></div>

                <span className="min-w-max">9:00AM | 5:00PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-primary font-bold text-sm  min-w-max">
                  SAT TO SUN
                </span>
                {/* Dashed line */}
                <div className="border-b-2 border-dashed border-gray-500 mx-2  w-full"></div>

                <span className="min-w-max">Appointments Only</span>
              </div>
            </div>
            <button className="w-full text-sm bg-primary text-black hover:text-black hover:bg-white  font-bold py-3 px-4 rounded  transition duration-300">
              SCHEDULE A VISIT
            </button>
          </div>
        </div>
      </div>

      <footer className="flex md:flex-row flex-col space-y-5 md:space-y-0 items-center justify-between bg-secondary border-t-8 border-gray-900 text-white py-10 px-8">
        <div className=" flex space-x-4">
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
        <div className="text-sm text-gray-400">
          2024 © All Rights Reserved | Developed with{" "}
          <span className="text-red-500" aria-hidden="true">
            ❤
          </span>{" "}
          by{" "}
          <a
            href="https://hamzashah.me"
            className="text-orange-400 hover:underline"
          >
            Hamza Shah
          </a>
        </div>
      </footer>
    </div>
  );
}
