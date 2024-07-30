import {React, lazy, Suspense } from "react";
import Hero from '../components/hero';
import Projects from '../components/projects'
import ScrollToTop from "../components/ScrollToTop";
// import CTA from "../components/cta";

const AccordionCustomIcon = lazy(() => import("../components/Accordion"));
const Membership = lazy(()=> import('../components/membership'))
const Pricing = lazy(()=> import('../components/pricing'))
const Services = lazy(()=> import('../components/services'))
const CTA = lazy(()=> import('../components/cta'))
const Footer = lazy(()=> import('../components/footer'))

function Homepage() {
  return (
    <>
    <div className="font-pop bg-[#EDF0F4] iwant overflow-hidden" >
    <ScrollToTop>
        <Hero />
        <Projects/>
        <Suspense fallback="Please wait Loading...">
        <Membership/>
        <Pricing/>
        <Services/>
        <CTA/>
        <AccordionCustomIcon/>
        <Footer/>
        </Suspense>
        </ScrollToTop>
    </div>
    </>
  )
}

export default Homepage