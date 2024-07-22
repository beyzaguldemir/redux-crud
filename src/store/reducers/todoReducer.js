import actionTypes from "../actionTypes";


/*
!reducer
    * state in nasıl değisiciğine karar verir
    *reducer normal  bir fonksiyondur ve bu fonksiyon iki parametre alır
    * 1. state: reducer da tutulan state lerin son durumu
    * 2. action: verilerin nasıl değişecegini ifade eden nesne
    *  useReducer dan farklı olarak initialState i state parametresine varsayılan olarak veririz
*/
const initialState={
    todos:[],
    isDarkMode:true,
}
const todoReducer=(state=initialState,action)=>{
    console.log(action)
    //aksiyonun type ına göre gerekli güncellemeyi yap
    switch(action.type){
        // eğer ADD aksiyonu calısırsa
        case actionTypes.ADD:
            return{
                ...state, // state in diger degerlerini al
                todos:state.todos.concat(action.payload), // state in icerisine todos dizisine payload ı ekle
            }
        case actionTypes.DELETE:
            // diziden id sine göre silinicek elemanı kaldır
            const filtred=state.todos.filter((i)=>i.id !== action.payload)
            return {...state, todos:filtred}
        case actionTypes.UPDATE:
            // Dizideki eskş eleman yerine action.payload ile gelen veriyi koyabilmemiz için diziyi dönüp id lerine göre karsılastırdık ıd leri eslesen verileri degistirdik
            const updatedArr=state.todos.map((i)=>i.id===action.payload.id ? action.payload : i)
            // reducer da tutulan todo yu güncelle
            return {...state,todos:updatedArr};
        
    }
    
    return state;

}
export default todoReducer;
// json-server --watch db.json --port 4000