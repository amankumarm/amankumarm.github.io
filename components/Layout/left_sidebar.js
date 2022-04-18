import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
function leftSideBar() {
  return (
    <div className=" px-6 fixed bottom-0 flex flex-col   items-center   justify-end ph:hidden ">
      <div className="flex flex-col items-center justify-end gap-5 ">
        <GitHubIcon
          fontSize="medium"
          className="cursor-pointer rounded-full bg-gray-400 transition delay-150 hover:scale-150"
        />
        <LinkedInIcon
          fontSize="medium"
          className="cursor-pointer  rounded bg-gray-400 transition delay-150 hover:scale-150"
        />
        <InstagramIcon
          fontSize="medium"
          className="cursor-pointer  rounded bg-gray-400 transition delay-150 hover:scale-150"
        />
        <div className="mt-4 h-24 w-0 border-l-2   border-sideline"></div>
      </div>
    </div>
  )
}

export default leftSideBar
