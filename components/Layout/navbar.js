import React, { useState } from 'react'
import Logo from '../../widgets/logo'
function Navbar() {
  const [hidden, sethidden] = useState(false)
  const navItems = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Works', url: '/works' },
    { name: 'Contact', url: '/contact' },
  ]
  return (
    <>
      {/* <div className="tracking-md bg-bgBlue pt-2 text-center font-semibold text-white">
        Work In Progress
      </div> */}
      <div className=" flex h-[10%] w-full flex-row items-center justify-between  bg-bgBlue  px-8">
        <Logo />
        <div className="flex flex-row gap-5 font-roboto text-white ph:hidden ">
          {navItems.map((item, index) => {
            return (
              <div className="cursor-pointer text-sm  hover:text-blueGreen">
                <a href={item.url}>
                  <span className="text-blueGreen">0{index + 1}. </span>{' '}
                  {item.name}
                </a>
              </div>
            )
          })}
        </div>
        <div
          className="flex h-10 w-12 cursor-pointer flex-col justify-between rounded border p-2 lg:hidden"
          onClick={() => sethidden(!hidden)}
        >
          <div className="h-1 w-full rounded-full border-b-2 border-gray-50"></div>
          <div className="h-1 w-full rounded-full border-b-2 border-gray-50"></div>
          <div className="h-1 w-full rounded-full border-b-2 border-gray-50"></div>
        </div>
      </div>
      <div
        className={`flex flex-row justify-around gap-2 whitespace-nowrap bg-bgBlue p-4  font-roboto text-white lg:hidden ${
          hidden === true ? 'hidden' : ''
        } transition  ease-in-out `}
      >
        {navItems.map((item, index) => {
          return (
            <div className="cursor-pointer text-sm  hover:text-blueGreen">
              <a href={item.url}>
                <span className="text-blueGreen">
                  0{index + 1}.<br />{' '}
                </span>{' '}
                {item.name}
              </a>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Navbar
