import Featured from "../components/Featured";
import { FeedBack } from "../components/FeedBack";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroContent from "../components/HeroContent";
import InvestmentContent from "../components/InvestmentContent";
import Investors from "../components/Investors";
import Popular from "../components/Popular";
//

export default function Home() {


  return (
    <>
      <Header />

      <HeroContent />

      <InvestmentContent />

      <h1 className="text-center opacity-90 text-[18px] mb-[15px] ">
        Browse business ideas, startups and larger companies from all over the
        world.
      </h1>

      <h4 className="text-center text-primary cursor-pointer mb-[25px] ">
        Show me some pitches
      </h4>

      <Featured />

      <Investors />

      <Popular />

      <FeedBack />

      <div className="flex flex-col mt-10 items-center justify-center">
        <div className="flex items-center mb-4  justify-center gap-5 ">
          <h1 className="md:text-[26px] text-[22px] opacity-80 mt-[25px] text-center">
            I&apos;m looking to...
          </h1>

          <button className="text-[22px] md:w-[280px] w-[200px]  pl-4 pr-4 pt-2 pb-2 translate-y-5 rounded  border-2 border-dotted ">
            Fundraise
          </button>
        </div>
        <button  className="text-[18px] p-4  rounded w-[280px] flex items-center justify-center mt-[40px] mb-[60px] bg-primary-light ">
          Get Started
        </button>
      </div>


      <Footer />
    </>
  )
}
