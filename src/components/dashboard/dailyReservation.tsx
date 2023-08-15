import React from 'react'
import {LuAlertCircle} from 'react-icons/lu'

export default function dailyReservation() {
  return (
    <div>
        <div className="flex justify-between">
            <div className="flex">
                <h1 className='uppercase font-semibold'>Today Reservations</h1>
                <LuAlertCircle />
            </div>
        </div>
    </div>
  )
}
