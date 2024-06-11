import React from 'react'
import classes from "./style.module.css";

export default function Mails() {
  return (
    <div className={`${classes["tile"]} bg-white py-3 px-2 rounded-md`}>
        <div className="heading flex flex-col md:flex-row justify-between p-3">
          <h2 className={`${classes['title']}`}>redBus</h2>

          <div className={`${classes['importance']} flex justify-around items-center p-2 rounded-md`}>
            <div className={`${classes['round']} ${classes['urgent']} mr-2`}></div>
            <div className='font-bold text-white'>Urgent</div>
          </div>
        </div>

        <div className={`${classes["tile"]} pl-7`}>
          Ayush Barnwal, in the mood to arrive everywhere on time?
        </div>
    </div>
  )
}
