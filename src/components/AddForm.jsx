import React from 'react'
import { useDispatch } from 'react-redux'
import {v4} from "uuid"
import { addTodo } from '../store/actions/todoActions'
import api from '../utils/api'
const AddForm = () => {
  // Bu bilesen icerisinde dispatch metodunu kullanmamızı saglar
    const dispatch=useDispatch()
    const handleSubmit=(e)=>{
        e.preventDefault()
      // store a kaydedilecek olan veriyi hazırlama
        const newTodo={
            id:v4(),
            text:e.target[0].value,
            is_done:false,
            created_at:new Date().toLocaleDateString(),
        }
        // istek basarılı olursa veriyi store a kaydet
        const promise=api.post("/todos",newTodo).then(()=>dispatch(addTodo(newTodo))).catch((err)=>{
          throw new Error()
        })
        console.log(promise)
        e.target.reset()
    }
  return (
    <form onSubmit={handleSubmit} className='d-flex gap-3'>
        <input className='form-control' type="text" placeholder='örn: React projesi' />
        <button className='btn btn-warning'>Gönder</button>
    </form>
  )
}

export default AddForm