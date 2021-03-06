// state 有一个默认值
const todos = (state = [],action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [...state,{id:action.id,value:action.value,checked:false}]
    case 'TOGGLE_ONETODO':
      // let newState = JSON.parse(JSON.stringify(state))
      /* let newState = state;
      
      newState[action.id].checked = !newState[action.id].checked
      console.log(newState)
      return newState */
      return state.map( item =>
        (item.id===action.id) ? {...item,checked:!item.checked}:item
      )
    case 'TOGGLE_ALLTODO':
      return state.map( item => ({...item,checked:action.checked}))
    default: 
      return state
  }
}

export default todos