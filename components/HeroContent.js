import React from 'react'

const HeroContent = () => {
    const secondContent = "I'm looking to..."
  return (
    <div className='w-[100%] items-center justify-center bg-[url("/hero_image.jpg")] bg-cover bg-no-repeat bg-center p-[60px] flex flex-col pb-[14px] mb-[30px] gap-y-5 '>
      <h1 className="text-[46px] lg:w-[60%] leading-[1.1]  text-center text-white">
        Connecting US Entrepreneurs and Angel Investors
      </h1>

      <h2 className="text-[22px]  md:w-[70%] text-center text-white">
        Where great businesses and great people meet. We bring together
        businesses looking for investment and investors with the capital,
        contacts and knowledge to help them succeed.
      </h2>

      <div className="flex items-center mb-4  justify-center gap-5 ">
        <h1 className="md:text-[26px] text-[22px]  mt-[25px] text-center text-white">
          I&apos;m looking to...
        </h1>

        <button className="text-[22px] text-white md:w-[280px] w-[200px] translate-y-5  pl-4 pr-4 pt-2 pb-2  rounded  border-2 border-dotted ">
          Fundraise
        </button>
      </div>
      <button className="text-[18px] text-white p-4  rounded w-[280px] flex items-center justify-center mt-[20px] mb-[60px] bg-primary-light ">
        Get Started
      </button>
    </div>
  )
}

export default HeroContent