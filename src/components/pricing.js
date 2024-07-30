import {React} from 'react'
import { NavLink } from 'react-router-dom';

function Pricing() {

  const handleMouseMove = (e) => {
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;
    e.target.style.setProperty('--x', x + 'px');
    e.target.style.setProperty('--y', y + 'px');
  };

  return (
    <>
      <div className=" font-sf flex flex-col justify-center items-center py-14 text-center mx-9 lg:mx-24">
        <span className="py-12 pricing title font-semibold text-3xl">Membership Pricing</span>
        <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 w-full lg:gap-5 gap-4">
          <div className="month text-left px-8 py-12 bg-[#F7F7FF] flex flex-col justify-between rounded-xl">
            <div>
            <h1 className="text-3xl title font-semibold -mt-7">Monthly</h1>
            <p className="md:text-xs text-sm pt-3 pb-12 font-medium py-3 h-20">Subscribe monthly and pause or cancel at any time.</p>
            <span className="title font-bold text-md text-[#5A5A5A]">What's Included:</span>
            <ul className="flex py-3 flex-col space-y-6 text-sm list-disc list-inside text-[#5A5A5A]">
                <li>Unlimited requests</li>
                <li>Unlimited deliverables</li>
                <li>Pause or cancel anytime</li>
            </ul>
            </div>
            <div className='mt-24'>
            <h2 className="title text-3xl font-bold">₹74,999/m</h2>
            <p className="md:text-xs text-sm pt-3 pb-8 font-mediumpy-3 text-[#969696]">Pause or cancel anytime.</p>
            <button className="font-pops font-semibold w-full">
            <NavLink to="/contact_us" onMouseMove={handleMouseMove} className='w-full btn1 text-white bg-[#4E4AD0] py-4 px-3 rounded-lg cursor-pointer'>
            <span className='w-full'>
                  Get Started
                </span>
                </NavLink>
            </button>
            <p className="md:text-xs text-sm font-medium text-center underline-offset-4 underline pt-4">Book a call</p>
            </div>
          </div>
          <div className=" text-left px-8 py-12 bg-[#F7F7FF] flex flex-col justify-between rounded-xl">
            <div>
            <h1 className="text-3xl title font-semibold">Quarterly</h1>
            <p className="md:text-xs text-sm pt-3 pb-12 font-medium py-3 h-20">Save total of ₹1,50,000.</p>
            <span className="title font-bold text-md text-[#5A5A5A]">What's Included:</span>
            <ul className="flex py-3 flex-col space-y-6 text-sm list-disc list-inside text-[#5A5A5A]">
                <li>Unlimited requests</li>
                <li>Unlimited deliverables</li>
                <li>Unlimited brands</li>
            </ul>
            </div>
            <div className='mt-24 lg:mt-0'>
            <h2 className="title text-3xl font-bold">₹49,999/m</h2>
            <p className="md:text-xs text-sm pt-3 pb-8 font-medium py-3 text-[#969696]">Paid Quarterly.</p>

            <button className="font-pops font-semibold w-full">
            <NavLink to="/contact_us" onMouseMove={handleMouseMove} className='w-full btn1 text-white bg-[#4E4AD0] py-4 px-3 rounded-lg cursor-pointer'>
            <span className='w-full'>
                  Get Started
                </span>
                </NavLink>
            </button>
            <p className="md:text-xs text-sm font-medium text-center underline-offset-4 underline pt-4">Book a call</p>
            </div>
          </div>

          <div className=" text-left px-8 py-12 bg-[#F7F7FF] flex flex-col justify-between rounded-xl">
            <div>
            <h1 className="text-3xl title font-semibold">Annually</h1>
            <p className="md:text-xs text-sm pt-3 pb-12 font-medium py-3 h-20">Save total of ₹5,40,000.</p>
            <span className="title font-bold text-md text-[#5A5A5A]">What's Included:</span>
            <ul className="flex py-3 flex-col space-y-6 text-sm list-disc list-inside text-[#5A5A5A]">
                <li>Unlimited requests</li>
                <li>Unlimited deliverables</li>
                <li>Unlimited brands</li>
            </ul>
            </div>
            <div className='mt-24 lg:mt-0'>
            <h2 className="title text-3xl font-bold">₹29,999/m</h2>
            <p className="md:text-xs text-sm pt-3 pb-8 font-medium py-3 text-[#969696]">Paid yearly.</p>

            <button className="font-pops font-semibold w-full">
            <NavLink to="https://buy.stripe.com/dR6aF8a6pfm4gzC289" onMouseMove={handleMouseMove} className='w-full btn1 text-white bg-[#4E4AD0] py-4 px-3 rounded-lg cursor-pointer'>
            <span className='w-full'>
                  Get Started
                </span>
                </NavLink>
            </button>
            <p className="md:text-xs text-sm font-medium text-center underline-offset-4 underline pt-4">Book a call</p>
            </div>
          </div>
          <div className="text-left px-8 py-12 bg-[#F7F7FF] flex flex-col justify-between rounded-xl">
            <div>
                <h1 className="text-3xl title font-semibold">Contract Based</h1>
                <p className="md:text-xs text-sm pt-3 pb-12 font-medium py-3 h-20">Not sure to choose a plan?
                    No worries, let’s work on a project untill you figure out.</p>
            </div>
            <div className='mt-16 lg:mt-0'>
                <button className="font-pops font-semibold w-full">
                    <NavLink to="/contact_us" onMouseMove={handleMouseMove} className='w-full btn text-[#4E4AD0] border border-[#4E4AD0] py-4 px-3 rounded-lg cursor-pointer'>
                      <span className='w-full'>
                        Get Started
                      </span>
                    </NavLink>
                </button>
                <p className="text-xs font-medium text-center underline-offset-4 underline pt-4">Book a call</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
