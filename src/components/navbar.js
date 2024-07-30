import {React, useState} from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { Link  as Scroll } from 'react-scroll'
import logoo from "../assets/logoup.svg";

function Navbar() {

  // let Links=[
  //   {name:"Shop",link:"/shop"},
  //   {name:"Why Membership?",link:"/membership"},
  //   {name:"Pricing",link:"/pricing"},
  //   {name:"Services",link:"/services"},
  // ]

  let [open,openState]=useState(false);
  const handleMouseMove = (e) => {
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;
    e.target.style.setProperty('--x', x + 'px');
    e.target.style.setProperty('--y', y + 'px');
  };

  
  return (
    <>
    <div className="md:flex flex bg-[#EDF0F4] justify-between items-center md:justify-between md:items-center px-9 lg:px-24 py-6 md:py-10 z-2">
      <div className="logo z-[2]">
        <NavLink to="/" className='cursor-pointer'><img src={logoo} alt="" /></NavLink>
      </div>

      <div onClick={()=>openState(!open)} className="z-[1] cursor-pointer absolute px-3 py-2 right-6 top-6 md:hidden">
      {open === true ? <FaTimes/> : <FaBars/>}
        </div>

      <div className="middle md:hidden block mt-8">
        <ul className={`md:hidden block transition-all pb-20 bg-[#EDF0F4] duration-800 ease left-0 w-full md:space-x-6 font-semibold text-[#726FBD] text-sm absolute md:static' ${open?'top-16 opacity-100 ease-out':'top-[-520px] opacity-0 ease-in'}`}>
        <NavLink to="/shop"><li className='px-12 py-3 rounded-xl cursor-pointer md:my-0 my-6'>
                shop
              </li></NavLink>
              <Scroll to="membership" smooth={true} spy={true} duration={1000}><li className='px-12 py-3 rounded-xl cursor-pointer md:my-0 my-6'>Membership</li> </Scroll>
                <Scroll to="pricing" smooth={true} spy={true} duration={1000}><li className='px-12 py-3 rounded-xl cursor-pointer md:my-0 my-6'> Pricing</li></Scroll>
                <Scroll to="services" smooth={true} spy={true} duration={1000}><li className='px-12 py-3 rounded-xl cursor-pointer md:my-0 my-6'> Services</li></Scroll>
      <div className="btn end left-12 mt-2 absolute md:static font-semibold text-white bg-[#4E4AD0] text-sm py-3 px-6 rounded-xl border cursor-pointer" onMouseMove={handleMouseMove}>
        <NavLink to="/contact_us">
          <span>
            Contact Us
          </span>
        </NavLink>
      </div>
        </ul>
      </div>
      
      <div className="middle md:block hidden">
        <ul className={'md:flex mx-6 transition-all duration-500 ease-in-out md:z-auto z-[-1] left-0 w-full md:space-x-6 font-semibold text-[#4E4AD0] text-sm absolute md:static'}>
              <li className='py-3 rounded-xl cursor-pointer md:my-0 my-3'>
                <NavLink className='lg:px-6 md:px-1' to="/shop">Shop</NavLink>
                <Scroll className='lg:px-6 md:px-1' to="membership" smooth={true} spy={true} duration={1000}>Membership</Scroll>
                <Scroll className='lg:px-6 md:px-1' to="pricing" smooth={true} spy={true} duration={1000}>Pricing</Scroll>
                <Scroll className='lg:px-6 md:px-1' to="services" smooth={true} spy={true} duration={1000}>Services</Scroll>
              </li>
        </ul>
      </div>

      <div className="end hidden md:block absolute md:static" onMouseMove={handleMouseMove}>
        <NavLink to="/contact_us" className='btn font-semibold text-[#4E4AD0] border-[#4E4AD0] border text-sm py-3 px-6 rounded-xl cursor-pointer'>
          <span>
            Contact Us
          </span>
        </NavLink>
      </div>
    </div>
    </>
  )
}

export default Navbar