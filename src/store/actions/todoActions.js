/*
    ! Aksiyon nesnesi olusturan fonksiyon
    * Payload degeri dinamik olacagi için fonksiyonları tercih ettik
    * Payload değerini parametre olarak aldık
    * Bu fonksiyonlar her cagrildiğinda bir fonksiyon nesnesi döndürüyor
    * Bilesen icerisindeki dispatchlerindeki kodları kısaltıp daha okunabilir yapıyoruz
*/

import actionTypes from "../actionTypes"

export const addTodo=(payload)=>(
    {
        type: actionTypes.ADD,
        payload
    }
)

export const deleteTodo=(payload)=>({
    type:actionTypes.DELETE,
    payload
})

export const updateTodo=(payload)=>({
    type:actionTypes.UPDATE,
    payload
})

