import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import api from '../utils/api'
import { deleteTodo ,updateTodo } from '../store/actions/todoActions'
import Modal from './Modal'

const TodoCard = ({todo}) => {
  const [isOpen ,setIsOpen]=useState(false)
  console.log(isOpen)

    const dispatch=useDispatch()
    // silme aksiyonunu reducer a ilet
    const handleDelete=()=>{
        api.delete(`/todos/${todo.id}`).then(()=>dispatch(deleteTodo(todo.id))).catch((err)=>alert("Üzgünüz bir hata oldu"))
    }
    // is_done degerini tersine cevir
    const toggleIsDone=()=>{
      // is_done degeri mevcut degerin tersi olan yeni nesne olusturur
        const updated={...todo,is_done:!todo.is_done}
        api.put(`/todos/${todo.id}`,updated)
        // store un güncellenecegini reducer a haber ver
        .then(()=>dispatch(updateTodo(updated))).catch(()=>alert("Üzgünüz bir hata olustu"))
        console.log(updated)
    }
  return (
    <div className='border shadow-lg p-4 my-5'>
        <h5>{todo.text}</h5>
        <h6>{todo.is_done ? "Tamamlandı" : "Devam Ediyor"}</h6>
        <p>{todo.created_at}</p>
        <button className='btn btn-primary' onClick={()=>setIsOpen(!isOpen)}>Düzenle</button>
        <button onClick={toggleIsDone} className='btn btn-success mx-3'>{todo.is_done ? "Geri Al" : "Tamamla"}</button>
        <button className='btn btn-danger' onClick={handleDelete}>Sil</button>
        {isOpen && <Modal todo={todo} close={()=>{setIsOpen(false)}} />}
    </div>
  )
}

export default TodoCard