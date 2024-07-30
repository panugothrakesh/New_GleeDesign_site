import React from "react";
import { NavLink } from "react-router-dom";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
 
export default function AccordionCustomIcon() {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open !== value ? value : 0);
 
  return (
    <>
    <div className="font-sf rounded-xl flex flex-col justify-center items-center pb-32 mx-9 lg:mx-24">
    <span className="pt-12 pricing title font-semibold text-3xl">FAQ's</span>
    <p className="text-md pt-6 pb-12">
          Let's cover some of your common questions! Still have any questions <NavLink to="/contact_us"><span className="underline underline-offset-[5px] hover:text-[#373473] hover:underline-offset-[3px] duration-300 animate-bounce cursor-pointer text-[#4E4AD0]"> reach out</span></NavLink> to us!
        </p>
    <div className="bg-white rounded-xl py-2 space-y-2">
      <Accordion className="bg-white px-6 py-2 rounded-xl" open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>Why choose GleeDesign?</AccordionHeader>
        <AccordionBody>
          Glee Design Studio is a design and development agency that is based on subscription model. Pay once and get many in return. Unlimited design requests at your finger tips within hours. Book a call to know more!
        </AccordionBody>
      </Accordion>
      <Accordion className="bg-white px-6 py-2 rounded-xl" open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          How to choose a Subscription Plan?
        </AccordionHeader>
        <AccordionBody>
          There are 3 different plans to choose from, choose the one that suits your requirements. Are you some on who requires a designer with you always? Get the Annual subscription to save tons. Choose Quarterly for a mid-term plan. Choose out best choice Monthly Subscription to request designs and pause the plan when you don't want to. Still confused? Book a call.
        </AccordionBody>
      </Accordion>
      <Accordion className="bg-white px-6 py-2 rounded-xl" open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          How can I request for designs once I subscribe?
        </AccordionHeader>
        <AccordionBody>
          That's an easy question to answer. We connect through slack where you can request for unlimited designs and are delivered in promisable time. Slack in collaboration with Linear helps to mange requests easily and monitor.
        </AccordionBody>
      </Accordion>
      <Accordion className="bg-white px-6 py-2 rounded-xl" open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(4)}>
          Can I request for a simple / independent contract work?
        </AccordionHeader>
        <AccordionBody>
          Yes! We also work on contract based for companies. Click on get started to discuss the project and work together!
        </AccordionBody>
      </Accordion>
      </div>
      </div>
    </>
  );
}
