import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addTodo } from '../../app/features/todo/todoSlice'

export default function AddTodo() {

   const dispatch = useDispatch()
   const [input, setInput] = useState('')

   const addTodoHandler = (e) => {
      e.preventDefault()
      dispatch(addTodo(input))
      setInput('')
   }
   return (
      <div style={{ marginTop: '20px', marginLeft: '40px' }}>
         <form onSubmit={addTodoHandler}>
            <label htmlFor="text">Text: </label>
            <input id='text' type="text" value={input} onChange={(e) => setInput(e.target.value)} />
         </form>
      </div>
   )
}
