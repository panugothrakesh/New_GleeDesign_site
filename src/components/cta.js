import {React} from "react";
import { NavLink } from "react-router-dom";
import { Link  as Scroll } from 'react-scroll'

function CTA() {
  const handleMouseMove = (e) => {
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;
    e.target.style.setProperty("--x", x + "px");
    e.target.style.setProperty("--y", y + "px");

  };
  return (
    <div className="font-sf md:mb-28 mt-2 mb-8 bg-white rounded-3xl overflow-hidden mx-9 lg:mx-24">
      <div className="ml-12 md:block hidden absolute">
        <svg
        className="ml-[2rem] leftdash"
          xmlns="http://www.w3.org/2000/svg"
          width="205"
          height="146"
          viewBox="0 0 205 146"
          fill="none"
        >
          <path
            d="M7.48214 144.195C5.29532 128.287 3.02914 113.364 19.9709 92.7301C56.3397 48.4348 125.367 101.266 171.444 65.155C196.611 45.4317 198.94 19.0685 198.94 0.407227"
            stroke="#9F9CF9"
            strokeWidth="12"
            strokeDasharray="12 12"
          />
        </svg>
        <div className="updo">
        <div className="-ml-20 -rotate-[10deg] py-6 px-10 shadow-lg bg-white flex flex-col justify-center items-start w-[140%] rounded-xl">
          <h1 className="text-2xl title font-semibold">Monthly</h1>
          <p className="md:text-xs text-xs pt-3 pb-5 font-medium">
          Our most popular plan for beginners.
          </p>
          <h2 className="title text-3xl font-bold pb-5">₹74,999/m</h2>
          <span className="title font-bold text-md text-[#5A5A5A]">
            What's Included:
          </span>
          <ul className="flex py-3 flex-col space-y-3 text-sm list-disc list-inside text-[#5A5A5A]">
            <li>Unlimited requests</li>
            <li>Unlimited deliverables</li>
            <li>Pause or cancel anytime</li>
          </ul>
          <button className="font-pops mt-5 font-semibold w-full">
            <NavLink
              to="/contact_us"
              onMouseMove={handleMouseMove}
              className="w-full btn1 text-white bg-[#8e8be5] py-4 px-3 rounded-lg cursor-pointer"
            >
              <span className="w-full">Get Started</span>
            </NavLink>
          </button>
        </div>
        </div>
      </div>

      <div className="right-12 mr-[6rem] md:block hidden absolute">
        <svg
        className="rightdash"
          xmlns="http://www.w3.org/2000/svg"
          width="206"
          height="146"
          viewBox="0 0 206 146"
          fill="none"
        >
          <path
            d="M198 144.195C200.187 128.287 202.453 113.364 185.511 92.7301C149.142 48.4348 80.1154 101.266 34.0384 65.155C8.87158 45.4317 6.54202 19.0685 6.54202 0.407227"
            stroke="#9F9CF9"
            strokeWidth="12"
            strokeDasharray="12 12"
          />
        </svg>
        <div className="updo">
        <div className="-mr-16 rotate-[10deg] py-6 px-10 shadow-lg bg-white flex flex-col justify-center items-start w-[140%] rounded-xl">
          <h1 className="text-2xl title font-semibold">Yearly</h1>
          <p className="md:text-xs text-xs pt-3 pb-5 font-medium">
          Our most popular plan for Enterprise.
          </p>
          <h2 className="title text-3xl font-bold pb-5">₹29,999/m</h2>
          <span className="title font-bold text-md text-[#5A5A5A]">
            What's Included:
          </span>
          <ul className="flex py-3 flex-col space-y-3 text-sm list-disc list-inside text-[#5A5A5A]">
            <li>Unlimited requests</li>
            <li>Unlimited deliverables</li>
            <li>Pause or cancel anytime</li>
          </ul>
          <button className="font-pops mt-5 font-semibold w-full">
            <NavLink
              to="/contact_us"
              onMouseMove={handleMouseMove}
              className="w-full btn1 text-white bg-[#8e8be5] py-4 px-3 rounded-lg cursor-pointer"
            >
              <span className="w-full">Get Started</span>
            </NavLink>
          </button>
          </div>
          </div>
      </div>
{/* ---------------------------x---------------------------x---------------------------x---------------------------x */}
      <div className="py-28  flex flex-col justify-center items-center text-center">
        <span className="pb-5 title font-semibold md:text-4xl text-2xl  md:leading-[3rem] w-[75%] tracking-wide md:w-[56%]">
          Start requesting by choosing the plan that suits you best.
        </span>
        <p className="md:w-[38%] w-60 leading-relaxed text-sm">
          Select from our finest subscription-based plans that suits the scale
          of your wants and start requesting now.
        </p>
        <button className="font-pops mt-5 font-semibold md:w-[30%] lg:w-[24%]">
            <Scroll
             smooth={true} spy={true} duration={1000}
              to="pricing"
              onMouseMove={handleMouseMove}
              className="w-full btn2 text-white bg-[#4E4AD0] py-4 px-4 rounded-lg cursor-pointer"
            >
              <span className="w-full">Get Started &nbsp;&nbsp; →</span>
            </Scroll>
          </button>
      </div>
    </div>
  );
}

export default CTA;
