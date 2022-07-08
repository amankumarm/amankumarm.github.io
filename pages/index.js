import React from 'react'
import tableguy from '../public/assets/images/table.png'
function Index() {
  return (
    <div className=" flex h-full flex-row items-center bg-bgBlue px-20 py-12  font-roboto text-white ph:flex-col-reverse ph:items-start ph:justify-between ph:p-8 ">
      <div className="w-1/2 px-6 ph:w-full ph:px-4">
        <p>Hi there,</p>
        <p className="py-4 font-roboto text-7xl font-bold text-blueGreen">
          I'm Aman
        </p>
        <p className="text-sm leading-relaxed tracking-wider">
          I'm Aman Kumar M , 20 years old and from India. building Web-apps has
          been an interest of mine for many years. All the skills and tools I
          use, are self-taught over many years of practice and expanding my
          horizons.
        </p>
        <div className="flex flex-row gap-5 pt-8">
          <div className="delay-125 cursor-pointer border-2 border-blueGreen p-2 px-3 transition ease-in-out hover:scale-110 hover:bg-blueGreen hover:text-bgBlue">
            <a href="/resume.pdf" download={true}>
              Resume
            </a>
          </div>
          <div
            className="delay-125 cursor-pointer border-2 border-blueGreen p-2 px-3 transition ease-in-out hover:scale-110 hover:bg-blueGreen hover:text-bgBlue"
            onClick={() => (window.location.href = '/contact')}
          >
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
