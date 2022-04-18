import React from 'react'
import ProjectCard from '../widgets/project'
import { Projects } from '../widgets/constants'
function Works() {
  return (
    <div className=" h-full bg-bgBlue px-40 font-roboto text-white ph:p-6 ph:text-sm">
      <div className="flex items-center justify-center">
        <span className="border-1 border-blueGreen p-2 text-white">
          Projects
        </span>
      </div>
      <p className="py-2 text-sm ">
        For all the coding projects, check out my{' '}
        <a href="https://github.com/amankumarm" target="_blank">
          <span className="cursor-pointer font-semibold text-blueGreen">
            Github Repos.
          </span>
        </a>
      </p>
      <p className="py-4">
        Over the past few years, I have coded things that I am{' '}
        <br className="ph:hidden" />
        sort-of proud of. These are just a few of them.
      </p>
      <div className="flex items-center pt-1">
        <div className="h-3  w-3 rounded-full  border border-red-500 bg-red-500 " />{' '}
        &nbsp; In Progress
      </div>
      <div className="flex items-center pt-1">
        <div className="h-3  w-3 rounded-full  border border-amber-400 bg-amber-400 " />{' '}
        &nbsp; Done but I'm too lazy to improve
      </div>
      <div className="flex items-center pt-1">
        <div className="h-3  w-3 rounded-full  border border-green-400 bg-green-400 " />{' '}
        &nbsp; Done
      </div>
      <div className="my-4 grid grid-cols-4 gap-7 py-12">
        {Projects.map((item) => (
          <ProjectCard
            name={item.name}
            status={item.status}
            desc={item.desc}
            tech={item.tech}
            code={item.code}
            link={item.link}
          />
        ))}
      </div>
    </div>
  )
}

export default Works
