import React from 'react'
import Footer from '../components/footer'
import Contact from '../components/contact'
import ScrollToTop from '../components/ScrollToTop'

function ContactUs() {
  return (
    <>
      <div className="font-pop bg-[#EDF0F4] iwant" >
        <ScrollToTop>
          <Contact/>
          <Footer/>
        </ScrollToTop>
      </div>
    </>
  )
}

export default ContactUs