import React from 'react'
import classes from './style.module.css'
import Image from 'next/image'
import UserProfile from '../images/user-profile.png'

export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-5">
        <div className="name">
            <h2>Tagged Box</h2>
        </div>

        <div className={`${classes['profile-button'] } w-fit h-fit`}>
            <Image
             src={UserProfile} 
             alt='profile-pic'
             width={50}
             height={50}
            />
        </div>
    </div>
  )
}
