import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
 
let initState = [{value:111}];

let action = data =>  ({
  type: 'ADD',
  value: data
})

let values = (state=[],action) => {
  switch(action.type) {
    case 'ADD' : 
      return [...state,{value:action.value}]
      break;
    default: 
      return state
  }
  
}
const store = createStore(
    values,
    initState,
    applyMiddleware(thunk)
)

console.log(store.getState())

function loginAction(data){
  return (dispatch) => {
          setTimeout(function() {
              dispatch(action(data))
              console.log(store.getState())
          }, 2000);
  }
  
} 

store.dispatch(loginAction(333))


