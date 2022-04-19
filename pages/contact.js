import React from 'react'

function Contact() {
  return (
    <div className="h-full  bg-bgBlue px-20 py-4  text-white ph:p-8 ">
      <p className=" py-4 text-6xl font-bold text-blueGreen ph:text-5xl">
        Let's Talk
      </p>
      <p className="font-roboto">Have any questions? Feel free to ask.</p>
      <form
        action="https://formspree.io/f/xqknynrg"
        method="POST"
        className=" flex flex-col gap-4 py-8 font-roboto"
      >
        <label className="text-blueGreen ">
          Full Name:
          <input
            type="text"
            name="name"
            className="my-4 w-full  bg-bgBlue  p-2 outline outline-gray-700 focus:outline-blueGreen"
          />
        </label>
        <label className="text-blueGreen">
          Email:
          <input
            type="email"
            name="email"
            className="my-4 w-full  bg-bgBlue  p-2 outline outline-gray-700 focus:outline-blueGreen "
          />
        </label>
        <label className="text-blueGreen">
          Your message:
          <textarea
            name="message"
            className="my-4 w-full bg-bgBlue  bg-bgBlue  p-2 outline outline-gray-700 focus:outline-blueGreen "
          ></textarea>
        </label>
        <button
          className="delay-125 w-min border  border-blueGreen px-4 py-2 text-blueGreen transition hover:scale-110 hover:bg-blueGreen hover:text-black"
          type="submit"
        >
          Send
        </button>
      </form>
      <p className='text-gray-500'>
        For curious nerds: Yes, this form actually works. So stop sending me
        test email
      </p>
    </div>
  )
}

export default Contact
