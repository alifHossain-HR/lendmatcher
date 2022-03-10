import React from 'react'
import logo from "../public/favicon.ico"
import Image from 'next/image'
import {FaCcPaypal} from 'react-icons/fa'
import { FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi"
const Footer = () => {
  return (
    <div className="text-white pt-[100px] pl-[20px] pr-[20px] pb-[48px] bg-[#121824] ">
      <div className="flex justify-between flex-wrap gap-15 items-center">
        <div className="pl-4 pr-2 flex items-center gap-10  ">
          <Image src={logo} height={49} width={150} alt="logo" />

          <FaCcPaypal size={70} />
        </div>

        <div className="flex items-center pr-[15px] justify-center gap-5">
          <FiFacebook size={25} />
          <FiTwitter size={25} />
          <FiLinkedin size={25} />
        </div>
      </div>

      <hr className="w-full border-[#333] mt-[60px]" />

      <div className="flex flex-col  md:flex-row md:flex-wrap mt-[40px] items-start justify-between">
        <div className="flex flex-col mb-[20px] w-[180px]">
          <h1 className="mb-[10px]">Latest Tweets</h1>
          <p>
            • RT @AngelNews: #EdTech #startup @vygoapp raises £1.5m supported by
            @angel__network https://t.co/qOKnhpq0yY https://t.co/pRE3J275x5
          </p>

          <p>Follow us on Twitter</p>
        </div>

        <div className="flex mb-[20px] flex-col">
          <h1 className="mb-[10px]">More Information About:</h1>
          <ul>
            <li>Angel Investment in Seattle</li>
            <li>Angel Investment in Dallas</li>
            <li>Angel Investors in Chicago</li>
            <li>Angel Investors in San Francisco & Bay Area</li>
            <li>Funding Startups</li>
            <li>Business Partnerships</li>
            <li>Small Business Debt Relief</li>
            <li>Angel Investors in Texas</li>
          </ul>
        </div>

        <div className="flex mb-[20px] flex-col">
          <h1 className="mb-[10px]">Navigation</h1>
          <ul>
            <li>How It Works</li>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Testimonials</li>
            <li>In the Press</li>
            <li>Company Info</li>
            <li>Affiliates</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className="flex mb-[20px] flex-col">
          <h1 className="mb-[10px]">Entrepreneur Pages</h1>
          <ul>
            <li>Add a Pitch</li>
            <li>Our Rates</li>
            <li>Entrepreneur FAQ</li>
          </ul>
        </div>

        <div className="flex mb-[20px] flex-col">
          <h1 className="mb-[10px]">Investor Pages</h1>
          <ul>
            <li>Register</li>
            <li>Business Proposal</li>
            <li>Investors FAQ</li>
            <li>SeedTribe - Impact Investment</li>
            <li>BrickTribe - Property Investments</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer