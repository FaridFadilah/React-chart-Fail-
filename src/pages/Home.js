import { faCoffee, faGlassWater, faHotdog, faIceCream } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Card from '../components/Card'
import Modal from '../components/Modal'
import Data from '../api/Data'
// import {  } from '@fortawesome/free-regular-svg-icons'

export default function Home(){
  const [cart, setCart] = React.useState([])
  const [fill, setFill] = React.useState([])
  const [type, setType] = React.useState("")
  
  React.useEffect(() => {
    setFill(Data.items)
  }, [])

  const getFiltered = () => {
    if(!setType) return fill
    // return fill.filter((item) => )
  }

  const handleFilterClick = (e) => {
    setType(e)
  }
  const handleCartClick = (items) => {
    console.log(items)
  }
 
  return (
    <div className="">
      <div className="py-5">
        <div className='items-center block lg:flex lg:gap-2 lg:justify-between'>
          <div className="w-full lg:w-1/2">
            <div className="p-8 text-gray-700 lg:p-16 dark:text-white">
              <h1 className='text-2xl italic text-gray-800 dark:text-blue-300' to="" >FakeShop</h1>
              <p className='mt-4 mb-6 text-xl font-light leading-relaxed'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, animi recusandae delectus reprehenderit quasi natus distinctio nam, ratione hic modi tempore cupiditate necessitatibus cumque laudantium praesentium adipisci.</p>
              <button type='submit' className='inline-flex font-medium py-2.5 px-6 bg-blue-400 text-gray-200 rounded-xl hover:bg-blue-500 dark:bg-blue-700 dark:hover:bg-blue-600 shadow-lg shadow-gray-800'>Getting started</button>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="mx-5 border border-gray-700 rounded-xl dark:border-white">
              <div className="p-8 text-white lg:p-12">
                <h1 className='text-2xl italic text-gray-700 dark:text-blue-300'>Service</h1>
                <div className="grid grid-cols-2 gap-8 mt-4 mb-6 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-12 ">
                  <button onClick={() => handleFilterClick("Fresh Water")} className="flex flex-col items-center justify-center w-full text-gray-700 border border-gray-700 rounded-xl dark:border-gray-100 dark:hover:text-gray-700 dark:text-gray-100 dark:hover:bg-gray-200 hover:text-gray-100 hover:bg-gray-700">
                    <div className="content-center pt-4">
                      <FontAwesomeIcon className='text-2xl' icon={faGlassWater}/>
                    </div>
                      <p className='pb-2 font-light capitalize text-2xs'>Fresh Water</p>
                  </button>
                  <button onClick={() => handleFilterClick("Coffee")} value="Coffee" className="flex flex-col items-center justify-center w-full text-gray-700 border border-gray-700 rounded-xl dark:hover:text-gray-700 dark:hover:bg-gray-200 dark:border-white dark:text-gray-100 hover:text-gray-100 hover:bg-gray-700">
                    <div className="content-center pt-4">
                      <FontAwesomeIcon className='text-2xl' icon={faCoffee}/>
                    </div>
                    <p className='pb-2 font-light capitalize text-2xs'>Coffee</p>
                  </button>
                  <button onClick={() => handleFilterClick("Food")} value="Food"  className="flex flex-col items-center justify-center w-full text-gray-700 border border-gray-700 rounded-xl dark:text-gray-100 dark:border-white dark:hover:text-gray-700 dark:hover:bg-gray-100 hover:bg-gray-700 hover:text-gray-100">
                    <div className="content-center pt-4">
                        <FontAwesomeIcon className='text-2xl' icon={faHotdog}/>
                    </div>
                    <p className='pb-2 font-light capitalize text-2xs'>Other Food</p>
                  </button>
                  <button onClick={() => handleFilterClick("Closing menu")} value="closing menu"  className="flex flex-col items-center justify-center w-full text-gray-700 border border-gray-700 rounded-xl dark:text-gray-100 hover:bg-gray-700 dark:border-white dark:hover:text-gray-700 dark:hover:bg-gray-200 hover:text-gray-100">
                    <div className="content-center pt-4">
                      <FontAwesomeIcon className='text-2xl ' icon={faIceCream}/>
                    </div>
                    <p className='pb-2 font-light capitalize text-2xs'>closing menu</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex flex-row items-center justify-between p-8">
          <div className="w-full">
            <div className="px-8">
              <h1 className='text-2xl italic text-gray-700 dark:text-blue-300'>Product</h1>
              <div className="grid grid-cols-1 gap-8 py-2 lg:grid-cols-3 lg:gap-10">
                {Data.items.map((data, index = 1) => <Card key={ index++ } name={data.name} price={data.price} image={data.image} handleClick={handleCartClick}/>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal />
    </div>
  )
}