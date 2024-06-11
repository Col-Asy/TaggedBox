import React from 'react'
import Navbar from '../components/Navbar/navbar'
import Mails from '../components/Mails/Mails'
import TagsFilter from '../components/tags/tags'

export default function Inbox() {
  return (
    <>
        <Navbar />
        <div className="container w-full flex flex-col-reverse md:flex-row p-5 justify-between">
          <div className="mails md:w-3/5 ml-5 mt-3 md:mt-0 px-10 py-5 bg-[#e9ecef] rounded-lg h-fit">
            <Mails />
          </div>

          <div className="tags md:w-1/4 bg-[#e9ecef] h-fit relative ml-5 mt-5 md:m-0 p-2 rounded-md">
            <TagsFilter />
          </div>
        </div>
    </>
  )
}
