import React from 'react'
import Image from 'next/image'
import logo from '../public/favicon.ico'
import { RiMoneyEuroCircleLine, RiHandCoinLine } from "react-icons/ri"
import {IoIosHelpBuoy} from 'react-icons/io'
import { useRouter } from 'next/router'


const Header = () => {
const router = useRouter()
        const navItem = [
          { name: "Invest", Icon: RiMoneyEuroCircleLine },
          { name: "Fundraise", Icon: RiHandCoinLine },
          { name: "Help", Icon: IoIosHelpBuoy },
        ]

  return (
    <>
      <nav className="w-full min-h-[74px] flex items-center justify-between">
        <div className="pl-4 pr-2 flex items-center gap-10  ">
          <Image src={logo} height={49} width={150} alt="logo" />
          <a className="text-[12px] ">
            Country : <span className="underline cursor-pointer">USA</span>
          </a>
        </div>

        <div className="pr-4 flex items-center justify-evenly ">
          <ul className="flex gap-9 font-extralight text-[14px] opacity-[0.8] ">
            {navItem.map((item, inx) => {
              const { name, Icon } = item
              return (
                <React.Fragment key={inx}>
                  <li className=" cursor-pointer gap-1 flex items-center ">
                    {name} <Icon size={20} opacity={0.7} />
                  </li>
                </React.Fragment>
              )
            })}

            <li className=" cursor-pointer">Testimonials</li>
            <li
              className=" cursor-pointer"
              onClick={() => router.push("/login")}
            >
              Login
            </li>
            <li
              onClick={() => router.push("/signup")}
              className=" cursor-pointer border-2 pl-[10px] rounded pr-[10px] border-[#333] border-opacity-[0.5]"
            >
              Signup
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Header