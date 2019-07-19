const completed = (state = {},action) => {
  switch(action.type){
    case 'COMPLETED':
      return action.checked
    default: 
      return state
  }
}

export default completed