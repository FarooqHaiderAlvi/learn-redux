import React from 'react'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../../state/index'
import { bindActionCreators } from 'redux';

export default function Card() {
   const dispatch = useDispatch();
   const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch)
   return (
      <>

         {/* <button onClick={() => { dispatch(actionCreators.withdrawMoney(100)) }} >-</button>
         <span> Add shoes</span>
         <button onClick={() => { dispatch(actionCreators.depositMoney(100)) }}>+</button> */}
         <button onClick={() => withdrawMoney(100)}>-</button>
         <span> Add shoes</span>
         <button onClick={() => depositMoney(100)}>+</button>

      </>
   )
}
