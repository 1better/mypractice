import {createStore} from 'redux'
import rootReducer from '../reducers/rootReducer'

let initState = {
  todos:  [{id:0,value:'222',checked:false}],
  completed: false
}

export default function Store(){
  const store = createStore(rootReducer,initState)
  return store
}