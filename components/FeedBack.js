import React from "react"
import feedbackOne from "../public/feedbackOne.png"
import feedbackTwo from "../public/feedbackTwo.png"
import feedbackThree from "../public/feedbackThree.png"
import Slider from "react-slick"
import Image from "next/image"

export const FeedBack = () => {
  const content = [
    {
      image: feedbackOne,
      desc: "Angel Investment Network provided a good opportunity to talk face to face with a range of potential investors who were interested in hearing more about my business. We have generated a couple of follow on meetings as a result",
      name: "Chris Brown @ Frudoo ",
    },
    {
      image: feedbackTwo,
      desc: "I have used Angel Investment Network on two occasions to successfully raise finance for my company. I have found both the process and the support offered by the team to be excellent and would not hesitate in recommending them to other early stage companies searching for business angel finance. ",
      name: "James Harwood @ StudentTenant.com",
    },
    {
      image: feedbackThree,
      desc: "Business advice, authentic and informative discussions, and inspiration for a new wave of new businesses were some of the benefits I observed. And the Investors? Well, they were a frank, no-frills bunch - professional, yet down-to-earth, with a wealth of wisdom on their side. Very professional, outstanding.",
      name: "Jacqui Mott",
    },
  ]

  return (
    <>
      <h1 className=" mt-[5px] text-center text-[35px] opacity-70 mb-[10px] ">
        What our customers say
      </h1>

      <div className="flex items-center  mt-[20px] justify-center">
        <Slider
          swipeToSlide={false}
          swipe={false}
          slidesToScroll={1}
          autoplay={true}
          infinite={true}
          autoplaySpeed={1000}
          className="w-[100%] md:w-[70%]"
        >
          {content.map((item, inx) => {
            return (
              <div
                key={inx}
                className="w-full flex flex-col  p-10 items-center justify-center"
              >
                <div className=" flex items-center justify-center mb-[25px] ">
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="rounded-full"
                  />
                </div>
                <p className="text-[28px] italic opacity-70 text-center ">&quot;{item.desc}&quot;</p>
                <h4 className="mt-[20px] text-right " >{item.name}</h4>
              </div>
            )
          })}
        </Slider>
      </div>
    </>
  )
}
