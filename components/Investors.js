import React from 'react'
import Image from 'next/image'
import {MdOutlineLocationOn} from 'react-icons/md'
import investorOne from '../public/investorOne.png'
import investorTwo from '../public/investorTwo.png'
import investorThree from '../public/investorThree.png'

const Investors = () => {

    const content = [
      {
        top: investorOne,
        location: "Nashville, TN, USA",
        desc: "I've worked for two of the major global manufacturers of energy infrastructure - GE and Schneider Electric - and today lead our pivot from hardware to soft...",
        expertise: "Energy Management, Product Management, Sales,...",
        money: "US$10,000 - US$25,000",
      },
      {
        top: investorTwo,
        location: "Lafayette, LA, USA",
        desc: "Independent Trader (day & swing) for 3 years. Emergency room nurse for 3 years. Drilling and Completion Fluid Engineer for 10 years. Airborne",
        expertise: "Energy Management, Product Management, Sales,...",
        money: "US$1 - US$100,000",
      },
      {
        top: investorThree,
        location: "Austin, TX, USA",
        desc: "I have worked in Construction for 12 years, with expertise in the design-build projects. At the moment, I am looking for ambitious and upcoming businesses",
        money: "US$1 - US$50,000",
      },
    ]


  return (
    <div className="mt-[50px]">
      <h1 className="text-[28px] opacity-80 text-center">
        We help investors and entrepreneurs build lasting and profitable
        relationships.
      </h1>
      <div className="w-full items-center flex-col mt-[25px]  lg:flex-row flex justify-center md:pl-20 md:pr-20 pl-[5px] pr-[5px] gap-5 mb-[50px] ">
        {content.map((item, inx) => {
          return (
            <React.Fragment key={inx}>
              <div className="w-full lg:w-[33%] border-2 relative border-[#d1def3] rounded-[15px]">
                <div
                  className={`flex flex-col items-center justify-center mb-[40px] overflow-visible bg-[#d1def3] pl-8 h-[100px] w-full`}
                >
                  <div className="translate-y-10">
                    <Image
                      src={item.top}
                      alt="investment1"
                      className="rounded-full"
                    />
                  </div>

                  <div className="bg-primary-light text-white pt-2 translate-y-5 pl-6 pr-6 rounded-full ">
                    {item.money}
                  </div>
                </div>

                {/* content */}

                <div className="w-full flex flex-col items-center justify-center p-5 ">
                  <h4 className="text-[14px] flex gap-1">
                    <MdOutlineLocationOn /> {item.location}
                  </h4>

                  <p className="text-[15px] opacity-90 mt-5 text-center ">
                    {item.desc}
                  </p>

                  <h1 className="mt-[10px] text-[20px] text-center ">
                    Areas of Expertise
                  </h1>
                  <h4 className=" text-center text-[14px] mt-[4px] mb-[8px] ">
                    {item.expertise}
                  </h4>

                  <button className="text-[16px] opacity-90 bg-primary-light w-[140px] p-[4px] rounded mt-5 mb-[15px] ">
                    Read More
                  </button>
                </div>
              </div>
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default Investors