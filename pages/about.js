import React from 'react'
import profile from '../public/assets/images/profile-pic.png'
import { skills, WorkExp } from '../widgets/constants'
function about() {
  const item = {
    name: 'PES Innovation Lab',
    start: 'May 2022',
    end: 'Aug 2022',
    position: 'Full-stack Developer Intern',
    description:
      'Worked on a project that aims to visualize different Sorting, ML, and Graph Algorithms.',
    work: [
      {
        name: 'Certificate', // remember to render this as innerhtml
        link: 'https://drive.google.com/file/d/1fyoKKk1qC9DP8IVyRmLAjM0m-Fl1B29n/view',
      },
    ],
    stack: ['React', 'Django'],
  }
  return (
    <div className=" h-full bg-bgBlue px-32 pt-16 font-roboto ph:px-1">
      <div className=" flex flex-row justify-around ph:flex-col ph:items-center">
        <div className="w-1/2 ph:w-full ph:px-10 ">
          <p className="py-6 font-nonoSans text-2xl font-bold  text-blueGreen">
            About Me
          </p>
          <p className="text-white ">
            I'm Aman Kumar M , 20 years old and from India. building Web-apps
            has been an interest of mine for many years, and I work with
            anything from building UI to writing database queries from a backend
            service. All the skills and tools I use, are self-taught over many
            years of practice and expanding my horizons.
          </p>
        </div>
        <div className="w-1/2 px-6 ph:w-full ph:px-10 ">
          <p className="py-6 font-nonoSans text-2xl font-bold  text-blueGreen">
            Skills
          </p>
          <div className="flex flex-wrap">
            {skills.map((item) => (
              <span
                className={`text-semibold m-1  border p-2 text-sm duration-300 ease-out hover:z-10 hover:scale-110 ${
                  item[1] == 1
                    ? 'border-blueGreen  text-blueGreen'
                    : 'border-blueGreenDull  text-blueGreenDull'
                } `}
              >
                {item[0]}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="pt-10 ph:w-full ph:px-10 ">
        <p className="py-6 font-nonoSans text-2xl font-bold  text-blueGreen">
          Work Experience
        </p>
        {WorkExp.map((item) => (
          <div className="py-6 text-white">
            <p className=" relative py-1 font-poppins text-xl italic tracking-wider ">
              {' '}
              {item.name}{' '}
            </p>
            <hr className="py-2" />
            <p className="py-1 text-sm">{item.position}</p>
            <p className="py-1 text-sm text-gray-400">
              {item.start} - {item.end}
            </p>
            <p className="py-1 text-sm text-gray-400">{item.description}</p>
            <div className="flex flex-row gap-5">
              {item.work.map((i) => (
                <a
                  href={i.link}
                  className="text-sm font-bold text-blueGreen underline"
                  target="__blank"
                >
                  {i.name}
                </a>
              ))}
            </div>
            <div className="flex flex-row gap-5">
              {
                item.stack.map((i) => (
                  <span>{i}</span>
                ))
                // <span></span>
              }
            </div>
            {/* <div> */}
          </div>
        ))}
      </div>
      {/* <div className="border-white-500 border"></div> */}
    </div>
  )
}

export default about
