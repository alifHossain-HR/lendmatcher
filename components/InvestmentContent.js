import React from 'react'
import Image from 'next/image'
import investment1 from '../public/investment1.png'
import investment2 from '../public/investment2.png'
import investment3 from '../public/investment3.jpg'
import { MdOutlineLocationOn } from "react-icons/md"

const InvestmentContent = () => {

  const content = [
    {
      bg: "/investmentOne.jpeg",
      top: investment1,
      name: "Illuminate & Co.",
      location: "Midwest, USA",
      desc: "I am looking for an equity deal or partnership. The business requires a $1,000,000 investment, a majority of which will go towards advertising. Our main target is to sell the latest, and most exciting lighting products on the market.",
      plan: [
        "Our partnership with the social media advertising giant Social Media 55.",
        "Our partnerships with twelve of the most advanced companies in the industry",
      ],
      target: "1,000,000",
      invest: "100,000",
    },
    {
      bg: "/investmentTwo.jpeg",
      top: investment2,
      name: "MAS World Suite",
      location: "North East, USA",
      desc: "A cloud-based ERP & Point of Sale aimed at small to midsize businesses that are looking to streamline their in-house production & sales process; A more affordable version of NetSuite or SAP; Working prototype ready; Already signed up small businesses",
      plan: [
        "Already have a live working prototype in use",
        "Income from license fees, transaction fees, commission fees and more",
        "Already signing up small businesses for our ...",
      ],
      target: "1,000,000",
      invest: "10,000",
    },
    {
      bg: "/investmentThree.jpeg",
      top: investment3,
      name: "Mariposa Technology",
      location: "South East, USA",
      desc: "Mariposa Technology provides a cutting-edge service to hemp farmers. Through the use of a handheld RS spectrometer, our technology provides hemp farmers with analytical information about their crops in the ground.",
      plan: [
        "We have a working MVP with scans underway being analyzed at Texas A&M",
        "We have a COO and CSO working hard to further our enterprise",
      ],
      target: "2,000,000",
      invest: "25,000",
    },
  ]


  return (
    <>
      <h1 className=" mt-[5px] text-center text-[35px] opacity-70 mb-[10px] ">
        Find an investment opportunity that&apos;s right for you.
      </h1>

      <div className="w-full items-center flex-col  lg:flex-row flex justify-center md:pl-20 md:pr-20 pl-[5px] pr-[5px] gap-5 mb-[50px] ">
      
        {content.map((item, inx) => {
          return (
            <React.Fragment key={inx}>
              <div className="w-full lg:w-[33%] border-2 border-[#d1def3] rounded-[15px]overflow-hidden">
                <div
                  style={{ backgroundImage: `url(${item.bg})` }}
                  className={`flex items-center  pl-8 bg-cover bg-no-repeat bg-center h-[150px] w-full`}
                >
                    <Image
                      src={item.top}
                      alt="investment1"
                    />
                </div>
                <div className="w-full bg-[#d1def3] h-[8px] "></div>

                {/* content */}

                <div className="w-full p-5 ">
                  <h1 className="text-[22px] opacity-80">{item.name}</h1>
                  <h4 className="text-[12px] flex gap-1">
                    <MdOutlineLocationOn /> {item.location}
                  </h4>

                  <p className="text-[15px] opacity-90 mt-5">{item.desc}</p>

                  <ul className="list-disc font-bold m-[5px] mt-[15px]">
                    {item.plan.map((item, inx) => {
                      return <li key={inx}> {item} </li>
                    })}
                  </ul>

                  <div className="flex items-center justify-between p-[10px] ">
                    <div>
                      <h1>US$ {item.target}</h1>
                      <h4 className={"opacity-80 text-[14px]"}>Target</h4>
                    </div>

                    <div>
                      <h1>US$ {item.invest}</h1>
                      <h4 className={"opacity-80 text-[14px]"}>
                        Min per Investor
                      </h4>
                    </div>
                  </div>

                  <button className="text-[16px] opacity-90 bg-primary-light w-[140px] p-[4px] rounded mt-5 ">
                    Find Out More
                  </button>
                </div>
              </div>
            </React.Fragment>
          )
          
        })}

      </div>
    </>
  )
}

export default InvestmentContent