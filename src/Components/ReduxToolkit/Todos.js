import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { removeTodo } from '../../app/features/todo/todoSlice'

export default function Todos() {
   const todos = useSelector((state) => state.todos)
   const dispatch = useDispatch()
   return (
      <div>
         {todos.map((todo) => {
            return (
               <li key={todo.id}>{todo.text}
                  <button style={{ marginLeft: '5px' }} onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
               </li>
            )
         })}
      </div>
   )
}
