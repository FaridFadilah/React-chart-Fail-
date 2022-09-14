import React from 'react'

export default function useCart() {
    const [cart, setCart] = React.useState({})
    const handleCart = (e) => {
        console.log("Success")
    }
    return [setCart, handleCart()]
}