import React from 'react'
import next from '../assets/arrowdiag.svg'

function Services() {
  return (
    <>
    <div className="services font-sf flex flex-col pt-14 pb-28 text-center px-9 lg:px-24">
        <span className="pb-12 title font-semibold text-3xl">Our Services</span>
        <div className='overflow-x-auto flex flex-row lg:space-x-8 md:space-x-6 space-x-4 pb-4'>
            <div className='box overflow-hidden hover:bg-[#4E4AD0] hover:text-[#F7F7FF] lg:h-[22rem] h-[22rem] md:h-[20rem] md:min-w-[20rem] min-w-[16rem] lg:min-w-[22rem] border rounded-3xl bg-[#F7F7FF] border-[#4E4AD0] text-left lg:px-8 lg:pt-8 lg:pb-10 px-6 pt-7 pb-6 flex flex-col justify-between'>
              <div className='border w-12 h-12 border-white bg-[#4E4AD0] hover:bg-[#3b37bd] duration-300 ease-out cursor-pointer rounded-full flex justify-center items-center ml-auto'>
                <img src={next} alt="" className='h-4'/>
              </div>
              <div className='bot flex flex-col space-y-4'>
                <span className='font-pops font-semibold text-xl'>UI/UX Design</span>
                <p className='font-regular text-sm'>Crafting large & small scale design solutions for web products and WOW-websites of any purpose!</p>
              </div>
              </div>
              
              <div className='box overflow-hidden hover:bg-[#4E4AD0] hover:text-[#F7F7FF] lg:h-[22rem] h-[22rem] md:h-[20rem] md:min-w-[20rem] min-w-[16rem] lg:min-w-[22rem] border rounded-3xl bg-[#F7F7FF] border-[#4E4AD0] text-left lg:px-8 lg:pt-8 lg:pb-10 px-6 pt-7 pb-6 flex flex-col justify-between'>
              <div className='border w-12 h-12 border-white bg-[#4E4AD0] hover:bg-[#3b37bd] duration-300 ease-out cursor-pointer rounded-full flex justify-center items-center ml-auto'>
                <img src={next} alt="" className='h-4'/>
              </div>
              <div className='bot flex flex-col space-y-4'>
                <span className='font-pops font-semibold text-xl pt-10'>Web Development</span>
                <p className='font-regular text-sm'>We create custom websites that not only look great but also drive's traffic and increase conversions.</p>
              </div>
              </div>

              <div className='box overflow-hidden hover:bg-[#4E4AD0] hover:text-[#F7F7FF] lg:h-[22rem] h-[22rem] md:h-[20rem] md:min-w-[20rem] min-w-[16rem] lg:min-w-[22rem] border rounded-3xl bg-[#F7F7FF] border-[#4E4AD0] text-left lg:px-8 lg:pt-8 lg:pb-10 px-6 pt-7 pb-6 flex flex-col justify-between'>
              <div className='border w-12 h-12 border-white bg-[#4E4AD0] hover:bg-[#3b37bd] duration-300 ease-out cursor-pointer rounded-full flex justify-center items-center ml-auto'>
                <img src={next} alt="" className='h-4'/>
              </div>
              <div className='bot flex flex-col space-y-4'>
                <span className='font-pops font-semibold text-xl pt-10'>Brand Identity</span>
                <p className='font-regular text-sm'>Elevate your brand identity design and we ensure consistency, while outstanding your competitors.</p>
              </div>
              </div>

              <div className='box overflow-hidden hover:bg-[#4E4AD0] hover:text-[#F7F7FF] lg:h-[22rem] h-[22rem] md:h-[20rem] md:min-w-[20rem] min-w-[16rem] lg:min-w-[22rem] border rounded-3xl bg-[#F7F7FF] border-[#4E4AD0] text-left lg:px-8 lg:pt-8 lg:pb-10 px-6 pt-7 pb-6 flex flex-col justify-between'>
              <div className='border w-12 h-12 border-white bg-[#4E4AD0] hover:bg-[#3b37bd] duration-300 ease-out cursor-pointer rounded-full flex justify-center items-center ml-auto'>
                <img src={next} alt="" className='h-4'/>
              </div>
              <div className='bot flex flex-col space-y-4'>
                <span className='font-pops font-semibold text-xl pt-10'>Video Editing</span>
                <p className='font-regular text-sm'>Let’s edit your raw footage into a video with a distinctive visual story telling perception.</p>
              </div>
              </div>
        </div>
    </div>
    </>
  )
}

export default Services