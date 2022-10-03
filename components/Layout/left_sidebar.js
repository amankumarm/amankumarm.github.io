import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
function leftSideBar() {
  return (
    <div className=" fixed bottom-0 flex flex-col items-center   justify-end   px-6 ph:hidden ">
      <div className="flex flex-col items-center justify-end gap-5 ">
        <a target="__blank" href="https://github.com/amankumarm">
          <GitHubIcon
            fontSize="medium"
            className="cursor-pointer rounded-full bg-gray-400 transition delay-150 hover:scale-150"
          />
        </a>
        <a target="__blank" href="https://linkedin.com/in/aman-kumar-m">
          <LinkedInIcon
            fontSize="medium"
            className="cursor-pointer  rounded bg-gray-400 transition delay-150 hover:scale-150"
          />
        </a>
        <a target="__blank" href="https://instagram.com/aman.kumar.m">
          <InstagramIcon
            fontSize="medium"
            className="cursor-pointer  rounded bg-gray-400 transition delay-150 hover:scale-150"
          />
        </a>
        <div className="mt-4 h-24 w-0 border-l-2   border-sideline"></div>
      </div>
    </div>
  )
}

export default leftSideBar
