import { Routes, Route, Link } from "react-router-dom"
import './App.css'
import NotFound from './pages/NotFound'
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Test from "./pages/Test"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import DarkMode from "./components/DarkMode"
import { faCartShopping, faMugHot } from "@fortawesome/free-solid-svg-icons"
import Modal from "./components/Modal"
import React from "react"
import Navbar from "./components/Navbar"
import Cart from "./components/Cart"

export default function App(){
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <div className="dark:bg-gradient-to-br font-sans dark:from-blue-900 dark:via-slate-800 dark:to-gray-900 min-h-screen bg-gradient-to-b from-blue-300 via-slate-300">
      {/* <nav className="px-10 py-5 border-b border-white/10">
          <div className="container">
              <div className="flex items-center justify-between">
                  <Link className="flex items-center" to="" >
                      <FontAwesomeIcon className='text-3xl text-gray-700 dark:text-blue-300' icon={faMugHot}/>
                      <h1 className='pt-2 text-2xl italic text-gray-700 dark:text-blue-300' >CoffeeShop</h1>
                  </Link>
                  <div className="flex items-center">
                    <button type="button" onClick={() => setIsOpen(true)} className='inline-flex pr-6 text-2xl text-gray-700 dark:text-blue-300'><FontAwesomeIcon icon={faCartShopping} className=""/></button>
                      <DarkMode/>
                  </div>
              </div>
          </div>
      </nav> */}
      <Navbar setIsOpen={setIsOpen}/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/test" element={<Test />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <Footer/>
      <Modal open={isOpen}/>
      {/* {isOpen && <Modal setIsOpen={setIsOpen}/>} */}
    </div>
  );
}


