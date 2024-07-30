import React from 'react'

function Membership() {
  return (
    <>
    <div className=' bg-[#4E4AD0] py-16 rounded-3xl'>
        <div className='membership flex flex-col justify-center items-center font-sf text-center text-[#F7F7FF] pt-12 pb-4 mx-9 lg:mx-24'>
        <span className='py-4 title font-semibold text-3xl'>
        Membership Perks
        </span>
        <p className='text-md'>We have got all covered for you. Never turn back again for designs.</p>
        
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-8 lg:mt-6'>
        <div className='px-8 py-6 md:py-12 lg:py-16 flex flex-col justify-center items-center lg:space-y-2 space-y-4'>
        <svg id="stack" width="84" height="93" viewBox="0 0 84 93" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M58.4511 9.52887L51.8813 5.8377C45.7865 2.41348 38.3645 2.41347 32.2698 5.8377L5.99024 20.6024C1.86369 22.9208 1.86368 28.8979 5.99023 31.2163L32.2698 45.981C38.3645 49.4052 45.7865 49.4052 51.8812 45.981L78.1608 31.2164C82.2873 28.8979 82.2873 22.9208 78.1608 20.6024L71.5909 16.9112" stroke="#F7F7FF" strokeWidth="5" strokeLinecap="round"/>
            <path d="M79.4393 64.2168C81.621 66.9898 81.0506 71.3805 77.6358 73.299L51.8811 87.7687C45.7864 91.193 38.3644 91.193 32.2697 87.7687L6.89073 73.5101C3.37558 71.5351 2.88724 66.9646 5.2597 64.2168" stroke="#F7F7FF" strokeWidth="5" strokeLinecap="round"/>
            <path d="M78.1608 42.1318C82.2873 44.4503 82.2873 50.4274 78.1608 52.7458L51.8812 67.5105C45.7865 70.9347 38.3645 70.9347 32.2698 67.5105L5.99023 52.7458C1.86368 50.4274 1.86369 44.4503 5.99024 42.1318" stroke="#F7F7FF" strokeWidth="5" strokeLinecap="round"/>
        </svg>
            <h1 className='title font-bold text-lg lg:pt-10'>Unlimited Requests</h1>
            <p className='font-medium text-sm'>Add as many as Design requests you’d like,
            there are no limits..!</p>
        </div>
        <div className='px-8 py-6 md:py-12 lg:py-16 flex flex-col justify-center items-center lg:space-y-2 space-y-4'>
        <svg id="thunder" width="66" height="93" viewBox="0 0 66 93" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.6722 21.137L38.693 3.63745C39.2145 2.93654 40.3281 3.30539 40.3281 4.17904V38.7337C40.3281 39.2348 40.7343 39.641 41.2354 39.641H60.2399C62.105 39.641 63.1729 41.7668 62.0596 43.2631L27.3075 89.9693C26.7859 90.6702 25.6723 90.3013 25.6723 89.4277V54.873C25.6723 54.3719 25.2661 53.9657 24.765 53.9657H5.76055C3.89546 53.9657 2.82748 51.8399 3.94084 50.3436L15.9016 34.2685" stroke="#F7F7FF" strokeWidth="5" strokeLinecap="round"/>
        </svg>
            <h1 className='title font-bold text-lg lg:pt-10'>Fast Delivery</h1>
            <p className='font-medium text-sm'>Get your designs delivered with in average
            days from requested.</p>
        </div>
        <div className='px-8 py-6 md:py-12 lg:py-16 flex flex-col justify-center items-center lg:space-y-2 space-y-4'>
        <svg id='finger' width="79" height="98" viewBox="0 0 79 98" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M55.7947 67.4175C53.33 77.0586 49.5125 86.2025 44.4841 94.5088M41.9901 41.2207C42.0155 59.3974 36.2016 76.9813 25.6046 90.7781M13.5064 20.1983C9.80855 26.4308 7.84191 33.7444 7.8534 41.2208C7.86412 48.4029 6.04902 55.4409 2.61914 61.5164M23.1644 9.41776C28.3094 5.6195 34.2798 3.44882 40.4411 3.13641C46.6024 2.824 52.7244 4.38152 58.1565 7.64346C63.5886 10.9054 68.1278 15.7499 71.2918 21.6621C74.4559 27.5743 76.1264 34.3333 76.126 41.2209C76.126 56.0627 73.5953 70.2386 68.9892 83.2455M11.6722 79.6061C20.2155 69.1003 24.9403 55.412 24.9217 41.2207C24.9217 36.1655 26.72 31.3174 29.9209 27.7429C33.1218 24.1683 37.4632 22.1602 41.9899 22.1602C46.5167 22.1602 50.8581 24.1683 54.059 27.7429C57.2599 31.3174 59.0582 36.1655 59.0582 41.2207C59.0582 43.8993 58.9626 46.5526 58.7669 49.1753" stroke="#F7F7FF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
            <h1 className='title font-bold text-lg lg:pt-10'>Unique Designs</h1>
            <p className='font-medium text-sm'>Designs delivered are simply unique and
            are created for you.</p>
        </div>
        <div className='px-8 py-6 md:py-12 lg:py-16 flex flex-col justify-center items-center lg:space-y-2 space-y-4'>
        <svg id='gallery' width="92" height="88" viewBox="0 0 92 88" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M84.691 31.9341V62.7766C84.691 74.9269 74.8412 84.7766 62.691 84.7766H23.7189C12.4942 84.7766 3.39484 75.6772 3.39484 64.4526V64.4526V54.2906M60.3021 3.48047H23.7189C12.4942 3.48047 3.39484 12.5798 3.39484 23.8045V23.8045V33.9665" stroke="#F7F7FF" strokeWidth="5" strokeLinecap="round"/>
            <circle cx="8.12961" cy="8.12961" r="8.12961" transform="matrix(-1 0 0 1 88.756 3.48059)" stroke="#F7F7FF" strokeWidth="5"/>
            <path d="M21.6981 56.4182L37.3394 38.5425L50.7462 49.7148L66.3875 31.8391" stroke="#F7F7FF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
            <h1 className='title font-bold text-lg lg:pt-10'>Strategy-driver</h1>
            <p className='font-medium text-sm'>Each project is started with immersion and
            discovery phase in depth.</p>
        </div>
        <div className='px-8 py-6 md:py-12 lg:py-16 flex flex-col justify-center items-center lg:space-y-2 space-y-4'>
        <svg id='fire' width="74" height="93" viewBox="0 0 74 93" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M51.5108 20.0418C48.0485 15.1665 45.5055 9.80393 45.465 2.7666C45.4645 2.69035 45.3809 2.64224 45.3144 2.6797C26.9777 13.0242 28.3881 41.103 28.5258 43.2746C28.5303 43.3455 28.4664 43.3848 28.4 43.3596C27.3219 42.95 20.1445 39.8043 20.0708 28.6176C20.0703 28.5412 19.988 28.4896 19.9215 28.5272C9.90419 34.1972 3.14062 45.0035 3.14062 57.0122C3.14062 75.0443 18.2999 89.6621 36.9998 89.6621C55.6997 89.6621 70.8589 75.0443 70.8589 57.0122C70.8589 46.7132 67.0313 39.5924 62.3482 33.4208" stroke="#F7F7FF" strokeWidth="5" strokeLinecap="round"/>
        </svg>
            <h1 className='title font-bold text-lg lg:pt-10'>High Quality</h1>
            <p className='font-medium text-sm'>Great design quality and mighty detailing
            for your brand.</p>
        </div>
        <div className='px-8 py-6 md:py-12 lg:py-16 flex flex-col justify-center items-center lg:space-y-2 space-y-4'>
        <svg id='wallet' width="103" height="88" viewBox="0 0 103 88" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.8042 59.0339V59.6967C2.8042 73.5038 13.9971 84.6967 27.8042 84.6967H74.9404C88.7475 84.6967 99.9404 73.5038 99.9404 59.6967V41.96C99.9404 28.1528 88.7476 16.96 74.9404 16.96H27.8042C13.9971 16.96 2.8042 28.1528 2.8042 41.96V42.3612" stroke="#F7F7FF" strokeWidth="5" strokeLinecap="round"/>
            <path strokeLinecap="round" d="M85.37 17.6449V17.6449C85.37 8.4631 77.0654 1.51623 68.0281 3.13809L64.7285 3.73023L44.0871 7.43458L29.8895 9.9825C14.2134 12.7958 2.8042 26.4348 2.8042 42.3613V42.3613" stroke="#F7F7FF" strokeWidth="5"/>
            <path d="M22.2314 63.841H51.3723" stroke="#F7F7FF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M99.9403 57.9841V60.4841H102.44V57.9841H99.9403ZM82.9415 41.6235C84.3222 41.6235 85.4415 40.5042 85.4415 39.1235C85.4415 37.7428 84.3222 36.6235 82.9415 36.6235V41.6235ZM97.4403 41.3031V57.9841H102.44V41.3031H97.4403ZM99.9403 55.4841H75.3729V60.4841H99.9403V55.4841ZM75.3729 41.6235H82.9415V36.6235H75.3729V41.6235ZM75.3729 55.4841C71.5454 55.4841 68.4426 52.3813 68.4426 48.5538H63.4426C63.4426 55.1428 68.784 60.4841 75.3729 60.4841V55.4841ZM68.4426 48.5538C68.4426 44.7263 71.5454 41.6235 75.3729 41.6235V36.6235C68.784 36.6235 63.4426 41.9649 63.4426 48.5538H68.4426Z" fill="#F7F7FF"/>
            <path d="M78.0847 48.5537H79.0561" stroke="#F7F7FF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
            <h1 className='title font-bold text-lg lg:pt-10'>Flexible Subscription</h1>
            <p className='font-medium text-sm'>Pause or cancel subscription when no work is left. Pay for what you get!</p>
        </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Membership