import React from 'react'
import Head from 'next/head'
import Navbar from './navbar'
import LeftSideBar from './left_sidebar'
import RightSideBar from './right_sidebar'
function Index(props) {
  return (
    <>
      <div className=" h-screen w-full ">
        <Navbar />
        <div className="absolute grid h-[90%] w-full grid-cols-12">
          <LeftSideBar />
          <div className=" col-span-12">{props.children}</div>
          {/* <RightSideBar /> */}
        </div>
      </div>
    </>
  )
}

export default Index
