import React from "react";
import BackVideo from "../assets/ef72b0a4-efe2-4973-ba90-fa39c0a8bf9e.webm";
import { Link  as Scroll } from 'react-scroll';
function BOTTOM() {
  return (
    <>
      <div className="font-sf justify-center items-center mx-9 lg:mx-24">
        <div className="grid grid-cols-1 gap-2 grid-rows-[minmax(50px,_1fr)_100px] md:grid-rows-[minmax(80px,_1fr)_10px] lg:grid-cols-3 lg:gap-4 lg:grid-rows-3">
          <div className="font-semibold flex justify-center items-center font-sf p-7 row-span-2 lg:row-span-2 text-md rounded-2xl border border-[#4E4AD0]">
            <div>
            We Provide the best service, without{" "}
            <span className="italic text-[#868686]">
              {" "}
              Revision Restrictions
            </span>{" "}
            out of the box.
            <br />
            <br />
            Choose a finest{" "}
            <span className="text-[#4E4AD0]"> Subscription model </span>or get
            our Products!
            </div>
          </div>
          <div className="lg:col-span-2  row-span-2 lg:row-span-2 lg:max-h-[24vh] font-semibold flex justify-center items-center rounded-2xl overflow-hidden">
              <video src={BackVideo} autoPlay loop muted className=""></video>
          </div>
          <div className="logos flex justify-center items-stretch lg:col-span-2 row-span-1 border border-[#4E4AD0] text-[#4E4AD0] overflow-hidden rounded-2xl">
            <div className="w-max box-content lg:py-6 items-center flex" id="hell">
                <div className="animate flex">
                <div className="flex">
                <div className="title px-4 text-md whitespace-nowrap select-none font-bold">Brand Identity</div>
                <span className="text-md whitespace-nowrap select-none" alt="">|</span>
                <div className="title px-4 text-md whitespace-nowrap select-none font-bold">UI/UX Designing</div>
                <span className="text-md whitespace-nowrap select-none" alt="">|</span>
                <div className="title px-4 text-md whitespace-nowrap select-none font-bold">Video Editing</div>
                <span className="text-md whitespace-nowrap select-none" alt="">|</span>
                <div className="title px-4 text-md whitespace-nowrap select-none font-bold">Web Development</div>
                <span className="text-md whitespace-nowrap select-none" alt="">|</span>
                </div>
                </div>
                <div className="animate flex">
                <div className="title px-4 text-md whitespace-nowrap select-none font-bold">Brand Identity</div>
                <span className="text-md whitespace-nowrap select-none" alt="">|</span>
                <div className="title px-4 text-md whitespace-nowrap select-none font-bold">UI/UX Designing</div>
                <span className="text-md whitespace-nowrap select-none" alt="">|</span>
                <div className="title px-4 text-md whitespace-nowrap select-none font-bold">Video Editing</div>
                <span className="text-md whitespace-nowrap select-none" alt="">|</span>
                <div className="title px-4 text-md whitespace-nowrap select-none font-bold">Web Development</div>
                <span className="text-md whitespace-nowrap select-none" alt="">|</span>
                </div>
                <div className="animate flex">
                <div className="title px-4 text-md whitespace-nowrap select-none font-bold">Brand Identity</div>
                <span className="text-md whitespace-nowrap select-none" alt="">|</span>
                <div className="title px-4 text-md whitespace-nowrap select-none font-bold">UI/UX Designing</div>
                <span className="text-md whitespace-nowrap select-none" alt="">|</span>
                <div className="title px-4 text-md whitespace-nowrap select-none font-bold">Video Editing</div>
                <span className="text-md whitespace-nowrap select-none" alt="">|</span>
                <div className="title px-4 text-md whitespace-nowrap select-none font-bold">Web Development</div>
                <span className="text-md whitespace-nowrap select-none" alt="">|</span>
                </div>
            </div>
          </div>
          <button className="text-base text-md row-span-1 duration-500 hover:bg-[#4E4AD0] hover:text-[#EDF0F4] text-[#4E4AD0] bg-[#E8E8FF] rounded-2xl border border-[#4E4AD0]">
          <Scroll className="h-[5rem] flex space-x-5 items-center justify-center " smooth={true} spy={true} duration={1000} to="pricing">
                <div className="font-pops font-semibold">Know More </div>
                <span className="text-4xl pb-3">&#10230;</span>
          </Scroll>
          </button>
        </div>
      </div>
    </>
  );
}

export default BOTTOM;
