import React from 'react'
import { useSelector } from 'react-redux'
export default function Navbar() {
   const amount = useSelector(state => state.amount)
   return (
      <div>
         your balance is : {amount}
      </div>
   )
}
