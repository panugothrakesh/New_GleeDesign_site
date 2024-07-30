import React, { useState } from "react";
import gmail from "../assets/gmail.svg";
import phone from "../assets/phone.svg";
import instagram from "../assets/instagram.svg";
import behance from "../assets/behance.svg";
import location from "../assets/Location.svg";
import Circles from "../assets/circles.svg";

function Contact() {
  const handleMouseMove = (e) => {
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;
    e.target.style.setProperty("--x", x + "px");
    e.target.style.setProperty("--y", y + "px");
  };

  const [formState, setFormState] = useState({});
  const changeHandler = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const config = {
      SecureToken: "85ffce2e-48db-4e2d-a616-15a03b73df8f",
      To: "support@gleedesignstudio.com",
      From: "rakeshpanugoth2003@gmail.com",
      Subject: `${formState.subject} | ${formState.firstname}`,
      Body: `Name: ${formState.firstname} ${formState.lastname}
            Phone: ${formState.phone}
            Email: ${formState.email}
            Message:
            ${formState.message}`,
    };
    if (window.Email) {
      window.Email.send(config)
        .then(() => {
          alert("Email sent successfully");
          document.getElementById("formm").reset(); // Reset the form on success
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          alert("Failed to send email. Please try again later.");
        });
    } else {
      console.error("EmailJS is not loaded");
      alert("Email service is not available. Please check your setup.");
    }
  };
  return (
    <>
      <div className="membership flex flex-col  justify-center items-center font-sf text-center text-black pt-12 pb-12 mb-24 mx-9 lg:mx-24">
        <span className="title font-semibold text-3xl">Contact Us</span>
        <p className="text-md mt-3">
          We have got all covered for you. Never turn back again, for unlimited designs.
        </p>
        <div className="w-full mt-12 overflow-hidden bg-white md:p-8 p-3 rounded-3xl flex md:flex-row flex-col gap-4 justify-between items-stretch">
          <div style={{backgroundImage: `url(${Circles})`}} className="bg-[#4E4AD0] bg-no-repeat bg-right-bottom text-white rounded-xl py-6 px-8 md:w-5/12 flex flex-col items-start justify-between">
            <div>
              <h1 className="title text-start font-semibold text-2xl lg:mt-10">
                Contact Information
              </h1>
              <p className="font-medium text-start text-sm opacity-60 mt-2">
                You can also contact us from here...
              </p>
            </div>
            <div>
              <div className="text-xs text-left lg:mt-6 mt-4 space-x-3 flex font-regular">
                <img src={gmail} alt="" />
                <p>gleedsgn.studio@gmail.com</p>
              </div>
              <div className="text-xs text-left mt-6 space-x-3 flex font-regular">
                <img src={phone} alt="" />
                <p>+91 94938 39696</p>
              </div>
              <div className="text-xs text-left mt-6 space-x-3 flex items-start font-regular">
                <img src={location} alt="" />
                <p className=" leading-relaxed">
                  Stanza Living Dijon, Hyderabad,
                  <br />
                  Telangana, India. 500075
                </p>
              </div>
            </div>
            <div>
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

          {/* -------x---------------x---------------x---------------x---------------x---------------x---------------x---------------x-------- */}

          <div className="rounded-md py-6 md:w-7/12 flex flex-col items-start">
            <form id="formm" className="md:px-6 md:grid text-left w-full md:grid-cols-2 flex flex-col md:gap-x-6 gap-x-3 gap-y-10 lg:mt-10" onSubmit={submitHandler}>
              <div className="flex flex-col space-y-5 border-b-[1.4px]">
                <span className="text-sm font-medium">First Name</span>
                <input
                  type="text"
                  className="border-transparent focus:ring-0 focus:border-transparent pl-2 text-base font-regular focus:outline-none pb-1"
                  placeholder="John"
                  name="firstname"
                  value={formState.firstname}
                  onChange={changeHandler}
                />
              </div>
              <div className="flex flex-col space-y-5 border-b-[1.4px]">
                <span className="text-sm font-medium">Last Name</span>
                <input
                  type="text"
                  className="border-transparent focus:ring-0 focus:border-transparent pl-2 text-base font-regular focus:outline-none pb-1"
                  placeholder="Doe"
                  name="lastname"
                  value={formState.lastname}
                  onChange={changeHandler}
                />
              </div>
              <div className="flex flex-col space-y-5 border-b-[1.4px]">
                <span className="text-sm font-medium">Email</span>
                <input
                  type="email"
                  className="border-transparent focus:ring-0 focus:border-transparent pl-2 text-base font-regular focus:outline-none pb-1"
                  placeholder="example@gmail.com"
                  value={formState.email}
                  name="email"
                  onChange={changeHandler}
                />
              </div>
              <div className="flex flex-col space-y-5 border-b-[1.4px]">
                <span className="text-sm font-medium">Phone Number</span>
                <input
                  type="number"
                  className="border-transparent focus:ring-0 focus:border-transparent pl-2 text-base font-regular focus:outline-none pb-1"
                  placeholder="+00 000 000 0000"
                  name="phone"
                  value={formState.phone}
                  onChange={changeHandler}
                />
              </div>
              <div className="flex col-span-2 flex-col space-y-5">
                <span className="text-sm font-medium">Subject</span>
                <div className="flex justify-start items-center">
                  <input
                    type="radio"
                    className=" text-[#4E4AD0] focus:ring-0 focus:ring-0-[#4E4AD0] mx-2"
                    name="subject"
                    value="Start a Project"
                  onChange={changeHandler}
                  />
                  <label htmlFor="subject" className="text-xs flex-wrap mr-1">
                    {" "}
                    Start a project?
                  </label>
                  <input
                    type="radio"
                    name="subject"
                    className="  text-[#4E4AD0] focus:ring-0 focus:ring-0-[#4E4AD0] mx-2"
                    value="General Enquiry"
                  onChange={changeHandler}
                  />
                  <label htmlFor="subject" className="text-xs flex-wrap mr-1">
                    {" "}
                    General Enquiry
                  </label>
                  <input
                    type="radio"
                    name="subject"
                    className=" text-[#4E4AD0] focus:ring-0 focus:ring-0-[#4E4AD0] mx-2"
                    value="Join the Team"
                  onChange={changeHandler}
                  />
                  <label htmlFor="subject" className="text-xs flex-wrap "> Join the Team</label>
                </div>
              </div>
              <div className="flex col-span-2 flex-col space-y-5 border-b-[1.4px]">
                <span className="text-sm font-medium">Message</span>
                <textarea
                  type="text"
                  className="border-transparent focus:ring-0 focus:border-transparent-regular focus:outline-none pb-1"
                  placeholder="Type your message here"
                  name="message"
                  value={formState.message}
                  onChange={changeHandler}
                />
              </div>
              <button className="font-pops font-semibold mt-6">
                <span
                  onMouseMove={handleMouseMove}
                  className="w-full btn2 text-white bg-[#4E4AD0] py-4 px-3 rounded-lg cursor-pointer"
                >
                  <span className="w-full">Submit</span>
                </span>
              </button>
              <div className="md:block hidden">
              <svg className="absolute liness translate-y-3 -translate-x-3" xmlns="http://www.w3.org/2000/svg" width="188" height="147" viewBox="0 0 188 147" fill="none">
                <path d="M34.3509 24.4979L35.2692 16.9189C35.3948 15.8816 34.283 15.1609 33.4434 15.7354L1.95983 37.28C1.15279 37.8323 1.30952 39.1076 2.22637 39.4489L38.6363 53.0026C39.6079 53.3643 40.5183 52.3566 40.1061 51.3757L33.4357 35.5017C33.2234 34.9964 33.1461 34.4423 33.2121 33.898L33.4212 32.1717" stroke="#222222" strokeWidth="2.4" strokeLinecap="round"/>
                <path d="M27.3719 34.7492L32.4226 34.7563" stroke="#222222" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M102.719 120.657C102.719 94.3448 184.781 98.1326 184.781 42.8307C184.781 14.8008 148.419 -17.774 102.719 14.8009C67.0986 40.1917 49.7143 34.7573 28.5122 34.7573" stroke="#222222" strokeWidth="2.4" strokeDasharray="7.8 7.8"/>
            </svg>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
