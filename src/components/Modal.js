import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Modal({Open, onClose, children}) {
  if(!Open) return null
  return (
    <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 md:h-full bg-gray-200 bg-opacity-50 dark:bg-gray-700 dark:bg-opacity-50 min-h-screen">
        <div className="px-10 py-20 lg:px-40">
            <div className='bg-white border rounded-lg border-slate-900'>
                <div className="flex items-center justify-between px-5 py-2">
                    <h1 className='text-2xl'>Modal</h1>
                    <button onClick={onClose} className='focus:ring focus:ring-gray-500 focus:outline-none px-3 py-1.5 rounded-lg'><FontAwesomeIcon icon={faX}/></button>
                </div>
                <div className="flex flex-col items-center justify-center px-5">
                   {children}
                </div>
                <div className="flex items-center justify-evenly px-5 pb-2">
                    <h1 className='text-xl'>Total Barang Yg dibeli : </h1>
                    <span className='text-xl'>30</span>
                </div>
            </div>
        </div>
    </div>
  )
}