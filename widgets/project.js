import React from 'react'
const statusCode = {
  done: 'green-400',
  toImprove: 'amber-400',
  progress: 'red-500',
}
function projectCard({ status, name, desc, tech, link, code }) {
  var currentStatus
  switch (status) {
    case 0:
      currentStatus = statusCode.progress
      break
    case 1:
      currentStatus = statusCode.done
      break
    case -1:
      currentStatus = statusCode.toImprove
      break
    default:
      break
  }
  var statusElement = (
    <div
      className={`h-3  w-3 rounded-full  border border-${currentStatus} bg-${currentStatus} `}
    />
  )

  return (
    <div className="h-full w-full   rounded-md border-2 border-[#1e233f] p-0 pb-2 ">
      <div className="flex items-center  justify-end  rounded-t-md bg-[#1e233f] p-3">
        {statusElement}
      </div>
      <div className=" px-6 py-2">
        <p className="py-2 text-lg font-medium text-blueGreen">{name}</p>
        <p className="py-4 text-sm">{desc}</p>
        <div className="flex flex-row gap-5 py-2 ">
          <span>TechStack:</span>
          {tech.map((item) => (
            <span className="text-sm text-blueGreen ">{item}</span>
          ))}
        </div>
        <div className="flex flex-row gap-5 py-2">
          {link === null ? (
            ''
          ) : (
            <a
              className="text-sm text-blueGreen hover:text-white "
              href={link}
              target="_blank"
            >
              Link
            </a>
          )}
          {code === null ? (
            <span className="text-sm text-blueGreen hover:text-white ">
              Coming soon
            </span>
          ) : (
            <a
              className="text-sm text-blueGreen hover:text-white "
              href={code}
              target="_blank"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default projectCard
// className="text-blueGreen hover:text-white "
