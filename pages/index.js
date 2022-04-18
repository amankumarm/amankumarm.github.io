import React from 'react'
import tableguy from '../public/assets/images/table.png'
function Index() {
  return (
    <div className=" px-20 ph:items-start flex h-full flex-row items-center bg-bgBlue  py-12 ph:p-8 font-roboto text-white ph:flex-col-reverse ph:justify-between ">
      <div className="w-1/2 ph:w-full px-6 ph:px-4">
        <p>Hi there,</p>
        <p className="py-4 text-7xl font-bold font-roboto text-blueGreen">I'm Aman</p>
        <p className="text-sm leading-relaxed tracking-wider">
          I'm Aman Kumar M , 20 years old and from India. building Web-apps has
          been an interest of mine for many years. All the skills and tools I
          use, are self-taught over many years of practice and expanding my
          horizons.
        </p>
        <div className="flex flex-row gap-5 pt-8">
          <div className="delay-125 cursor-pointer border-2 border-blueGreen p-2 px-3 transition ease-in-out hover:scale-110 hover:bg-blueGreen hover:text-bgBlue">
            Resume
          </div>
          <div className="delay-125 cursor-pointer border-2 border-blueGreen p-2 px-3 transition ease-in-out hover:scale-110 hover:bg-blueGreen hover:text-bgBlue">
            Hire Me
          </div>
        </div>
      </div>
      <div className="w-1/2 ph:w-full">
        <img src={tableguy.src} />
      </div>
    </div>
  )
}

export default Index
