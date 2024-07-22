/*
  !store olusturma
  * 1. redux kütüphanesinden "createStore" methodu import edilir
  * 2. store içerisinde tutulacak olan herbir veri için reducerlar olusturulur
  * 3. olusturulan reducerlar "combineReducer" ile birlestirilir
  * 4. store birlestitilen reducerlar tanıtılır
 */

import { combineReducers,createStore } from "redux";
import todoReducer from "./reducers/todoReducer";
import userReducer from "./reducers/userReducer";
// birden fazla reducer varsa bunları birlestiririz
const rootReducer=combineReducers({
    todoReducer,
    userReducer
})
// store olusturulur
const store=createStore(rootReducer)

export default store