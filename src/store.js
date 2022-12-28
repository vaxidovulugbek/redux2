import { createStore } from "redux"

let initialState = {
  title:"say Hello",
  count:1
}

// ESLATMA: let title deb faqat initialState ichidagi elementlarni nome bilan ozgartira olamiz yani initilState ichida title bor let titles deb nom berib ozgartira olmaymiz. npm redux. npm react-redux. index.js papka ichida App ni providerga o'ragin.

const store = createStore((state = initialState, action) => {
  console.log(action.type);
  if (action.type.type === "SET_INPUT" ) {
    let title = action.type.value
    return {...state, title} 
  }
  switch(action.type) {
    case 'SET_TITLE' : {
      let title = "title 1"
      console.log("ok store");
      return {...state, title} 
    }
    case 'SET_COUNT' : {
      console.log("countsss");
      let title = "countsss"
      return {...state, title}
    }
    default: return state
  }

})

export const setTitle = (types) => ({type: types})

window.store = store
export default store