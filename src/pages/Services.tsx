import { ChevronDown } from "lucide-react";
import React from "react";
import { services } from "./LandingPage";
import { ServiceCard } from "../components/ServiceCard";
import { FaAngleDown } from "react-icons/fa";
import CountUp from "react-countup";

export default function Services() {
  return (
    <div>
      <main className="flex-grow">
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(https://alphaafin.com.au/wp-content/uploads/2024/08/national-cancer-institute-xDSD3Vmzh70-unsplash-scaled.jpg)`,
          }}
          className="relative bg-cover bg-center h-[80vh]"
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h1 className="text-6xl font-bold mb-4">Services</h1>
            <div className="flex flex-col -space-y-10 animate-smoothBounce duration-1000">
              <FaAngleDown className="text-primary text-6xl" />
              <FaAngleDown className="text-primary text-6xl" />
              <FaAngleDown className="text-primary text-6xl" />
            </div>
          </div>
        </div>
      </main>

      {/* SERVICES */}
      <section className="bg-gray-100 py-24">
        <div className="container mx-auto px-4">
          <img
            src="https://alphaafin.com.au/wp-content/uploads/2024/08/img-shape-02-1.png"
            alt=""
            className="mx-auto w-16 mb-12"
          />
          <h2 className="text-4xl font-bold text-center mb-20">
            Find the Right Home For Your Budget
          </h2>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-[65%] grid grid-cols-2 gap-4">
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
    </div>
  );
}
