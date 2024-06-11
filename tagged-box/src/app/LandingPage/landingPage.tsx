import React from 'react'
import classes from "./style.module.css";

export default function LandingPage() {
  return (
    <div className={`flex flex-col md:flex-row w-full h-[100vh] justify-evenly items-center ${classes['container']}`}>
      <div className="flex-col space-y-14">
        <h1 className='text-white text-3xl sm:text-5xl md:text-7xl font-semibold uppercase'>Connect using <br /> 
        Google <br /> 
        Effortlessly!</h1>

        <p className='text-white text-sm font-extralight tracking-widest'>
          Sign in to get started with <br />
          managing your mails in a breeze.
        </p>
        <div className="relative">
          <div className="border-b border-white w-full"></div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
            <div className="border-r-2 border-b-2 border-white w-3 h-3 transform rotate-[-45deg]"></div>
          </div>
        </div>
      </div>

      <div>
        <form>
          <button className="flex items-center justify-center bg-blue-600 text-white text-[100%] active:bg-blue-600 font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-fit sm:w-auto" type="button" style={{ transition: "all .15s ease" }}> 
            <img src="/icon-google.svg" alt="Google Icon" className="h-auto w-[12%] mr-3 rounded-sm bg-white" />
            Sign In with Google
          </button>
        </form>
      </div>
    </div>
  )
}
