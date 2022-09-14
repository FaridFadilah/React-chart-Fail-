import { faCartShopping, faMugHot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import DarkMode from './DarkMode'

export default function Navbar(modalToggle) {
  return (
    <nav className="px-10 py-5 border-b border-white/10">
          <div className="container">
              <div className="flex items-center justify-between">
                  <Link className="flex items-center" to="/ ">
                      <FontAwesomeIcon className='text-3xl text-gray-700 dark:text-blue-300' icon={faMugHot}/>
                      <h1 className='pt-2 text-2xl italic text-gray-700 dark:text-blue-300' >FakeShop</h1>
                  </Link>
                  <div className="flex items-center">
                    <button onClick={modalToggle} className='pr-6 text-2xl text-gray-700 dark:text-blue-300'><FontAwesomeIcon icon={faCartShopping}/></button>
                      <DarkMode/>
                  </div>
              </div>
          </div>
    </nav>
  )
}