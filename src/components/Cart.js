import { faMinus, faPlus, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Cart(props) {
  return (
    <div className="w-full pb-5">
        <div className="flex items-center justify-between p-3 bg-gray-200 rounded-lg">
            <span className='px-3'>1</span>
            <h1 className='text-xl font-light '>{props.name}</h1>
            <h3 className='text-xl font-light '>{props}</h3>
            <div className="">
                <button className='px-3 border border-gray-'><FontAwesomeIcon icon={faPlus}/></button>
                <span>{props.jumlah}</span>
                <button className='px-3'><FontAwesomeIcon icon={faMinus}/></button>
            </div>
            <button><FontAwesomeIcon icon={faX}/></button>
        </div>
    </div>
  )
}