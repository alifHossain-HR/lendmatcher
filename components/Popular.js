import React from 'react'

const Popular = () => {
  const content = [
    {
      image: "/popularOne.jpg",
      title: "Software",
    },
    {
      image: "/popularTwo.jpg",
      title: "Technology",
    },
    {
      image: "/popularThree.jpg",
      title: "Property",
    },
    {
      image: "/popularFour.jpg",
      title: "Food & Beverage",
    },
    {
      image: "/popularFive.jpg",
      title: "Product & Inventions",
    },
    {
      image: "/popularSix.jpg",
      title: "Medical & Science",
    },
  ]

  return (
    <>
      <h1 className=" mt-[5px] text-center text-[35px] opacity-70 mb-[10px] ">
        What&apos;s popular right now...
      </h1>

      <div className="w-full items-center flex-col flex-wrap lg:flex-row flex justify-center md:pl-20 md:pr-20 pl-[5px] pr-[5px] gap-5 mb-[50px] ">
        {content.map((item, inx) => {
          return (
            <React.Fragment key={inx}>
              <div className="w-full lg:w-[30%] border-2 cursor-pointer border-[#d1def3] rounded">
                <div
                  style={{ backgroundImage: `url(${item.image})` }}
                  className={`flex items-center justify-center pl-8 bg-cover bg-no-repeat h-[450px] bg-center w-full`}
                >
                  <h1 className="text-white text-[28px] ">{item.title}</h1>
                </div>
              </div>
            </React.Fragment>
          )
        })}

        <h4 className="text-center text-[16px] text-primary-light mt-[20px] mb-[20px] cursor-pointer">View All Categories...</h4>
      </div>
    </>
  )
}

export default Popular