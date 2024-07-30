import React from "react";
import mail from "../assets/Mail.svg";
import botlogo from "../assets/botlogo.svg";
import gmail from "../assets/gmail.svg";
import phone from "../assets/phone.svg";
import instagram from "../assets/instagram.svg";
import behance from "../assets/behance.svg";

function Footer() {
  return (
    <>
      <div className="font-sf flex flex-col overflow-hidden pt-20 text-center px-9 lg:px-24 rounded-tl-3xl rounded-tr-3xl bg-[#4E4AD0]">
        <div className="hidden md:block">
          <div className="newsletter bg-[#EDF0F4] rounded-2xl flex justify-between items-center px-8 py-10">
            <div className="left text-left">
              <span className="title text-[#4E4AD0] text-2xl font-semibold">
                Join Newsletter
              </span>
              <p className="font-pops text-[#4E4AD0] text-sm font-regular">
                New Design updates straight to your inbox
              </p>
            </div>
            <div className="email-box right rounded-lg drop overflow-hidden flex">
              <div className="move flex justify-between bg-[#EDF0F4] rounded-tl-lg rounded-bl-lg overflow-hidden">
                <div className="flex items-center justify-between">
                  <img
                    src={mail}
                    className="px-3 h-5 bg-[#EDF0F4] rounded-lg"
                    alt=""
                  />
                  <input
                    type="email"
                    className="bg-[#EDF0F4] border-transparent focus:ring-transparent focus:border-transparent text-xs title text-gray-700 focus:outline-none px-2 -mx-2 py-3 font-medium"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="z-10 bg-[#EDF0F4] text-[#4E4AD0] hover:text-white">
                <button className="font-pops font-semibold w-full">
                  <div
                    className="w-full bg-[#EDF0F4] border-[#4E4AD0] border font-semibold duration-300 hover:bg-[#4E4AD0] py-3 px-5 rounded-lg"
                  >
                    <span className="w-full">Subscribe</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="block md:hidden">
          <div className="newsletter bg-[#EDF0F4] rounded-2xl flex flex-col justify-between items-start space-y-6 px-8 py-10">
            <div className="left text-left">
              <span className="title text-[#4E4AD0] text-xl font-semibold">
                Join Newsletter
              </span>
              <p className="font-pops text-[#4E4AD0] text-sm font-medium">
                New Design updates straight to your inbox
              </p>
            </div>
            <div className="right w-full flex drop rounded-md justify-start items-center bg-[#EDF0F4] text-left px-2">
              <img src={mail} className="h-5 bg-[#EDF0F4] rounded-lg" alt="" />
              <input
                type="text"
                className="py-3 w-full border-transparent focus:ring-transparent bg-[#EDF0F4] px-2 focus:outline-none text-xs text-gray-700 font-medium title"
                placeholder="Enter your email"
              />
            </div>
            <div className="z-10 bg-[#EDF0F4] text-[#4E4AD0] w-full hover:text-white">
              <button className="font-pops font-semibold w-full">
                <div
                  className="w-full bg-[#EDF0F4] border-[#4E4AD0] border font-semibold duration-300 hover:bg-[#4E4AD0] py-3 px-5 rounded-lg"
                >
                  <span className="w-full">Subscribe</span>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="h-[0.05rem] bg-white my-16"></div>
        <div className="flex md:flex-row flex-col font-pops text-white items-start justify-between text-left">
          <div>
            <img src={botlogo} alt="" className="h-10"/>
            <p className="text-xs text-left mt-4 font-regular">
              Choose a plan, Request designs
              <br /> and get them delivered.
            </p>
          </div>
          <div>
            <h1 className="text-lg title font-semibold">Resources</h1>
            <ul className="text-xs text-left md:mt-6 md:space-y-6 space-y-4 mt-7 font-regular">
              <li className="cursor-pointer">About Us</li>
              <li className="cursor-pointer">Contact Us</li>
              <li className="cursor-pointer">Shop</li>
              <li className="cursor-pointer">Membership</li>
            </ul>
          </div>
          <div>
            <h1 className="text-lg title font-semibold">Services</h1>
            <ul className="text-xs text-left md:mt-6 md:space-y-6 space-y-4 mt-7 font-regular">
              <li className="cursor-pointer">UI/UX Designing</li>
              <li className="cursor-pointer">Brand Identity</li>
              <li className="cursor-pointer">Web Development</li>
              <li className="cursor-pointer">Video Editing</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg title font-semibold">Contact Us</h1>
            <div className="text-xs text-left lg:mt-6 mt-4 space-x-3 flex font-regular">
              <img src={gmail} alt="" />
              <p>gleedsgn.studio@gmail.com</p>
            </div>
            <div className="text-xs text-left mt-6 space-x-3 flex font-regular">
              <img src={phone} alt="" />
              <p>+91 94938 39696</p>
            </div>
            <div className="mt-6 flex space-x-6">
              <div className="">
                <img src={instagram} alt="" />
              </div>
              <div className="">
                <img src={behance} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[0.05rem] bg-white mt-16"></div>
        <p className="text-white text-xs font-pops my-6 tracking-wide opacity-50 font-regular">
          © All rights are reserved by GleeStudio.
        </p>
      </div>
    </>
  );
}

export default Footer;
