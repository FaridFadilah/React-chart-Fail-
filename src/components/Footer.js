import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='px-10 py-5'>
        <div className="flex flex-row items-center justify-between">
            <Link className='flex items-center' to="">
                <FontAwesomeIcon className='text-3xl text-gray-700 dark:text-blue-300' icon={faCoffee}/>
                <h1 className='text-2xl text-gray-700 dark:text-blue-300 italic'>FakeShop</h1>
            </Link>
            <p className='dark:text-blue-300 text-gray-700 italic'>© 2022 Created by —@Farid </p>
        </div>
    </div>
  )
}