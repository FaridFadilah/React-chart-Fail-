import React from 'react'
// import image from '../img/Coffee.png'

export default function Card(props){
  return (
    <div className="w-full">
      <div className='bg-gray-100 border-gray-700 border-2 rounded-lg shadow-inner shadow-white'>
          <div className="block justify-center items-center">
              <div className="relative">
              <img className='aspect-square object-cover w-full rounded-t-lg' src={require("../img/" + props.image)} alt={props.image}/></div>
              <div className="p-6 flex justify-between items-center ">
                  <div className="">
                    <p className='text-lg capitalize text-amber-700'>{props.name}</p>
                    <p className='text-lg capitalize text-green-500'>{props.price}</p>
                  </div>
                  <button onClick={() => props.handleClick(props)} className='bg-blue-400 border-gray-200 text-gray-200 rounded-lg border capitalize px-1.5 py-3 hover:bg-blue-500'>add to cart</button>
              </div>
          </div>
      </div>
    </div>
  )
}