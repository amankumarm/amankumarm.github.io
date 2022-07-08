import React from 'react'
import Head from 'next/head'
import Navbar from './navbar'
import LeftSideBar from './left_sidebar'
import RightSideBar from './right_sidebar'
import CustomHead from './customHead'
function Index(props) {
  return (
    <>
      <CustomHead />
      <div className=" h-screen w-full ph:h-[90vh] ">
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
