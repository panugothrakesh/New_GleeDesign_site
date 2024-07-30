import React from 'react'
import BOTTOM from './botdiv';

function Hero() {
  return (
    <>
    <div className="font-sf justify-center items-center py-[3rem] lg:pb-[6rem] lg:pt-[5rem] space-y-10">
      <div className='mx-9 lg:mx-24'>
        <div className="title font-bold lg:text-7xl text-5xl lg:text-center leading-snug lg:leading-tight">
            Design <span className='text-[#4E4AD0]'> Studio</span><br />
            Packed In One Grant
        </div>
      </div>
      <BOTTOM/>
    </div>
    </>
  )
}

export default Hero