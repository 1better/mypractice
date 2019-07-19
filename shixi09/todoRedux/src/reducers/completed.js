const completed = (state = 0,action) => {
  switch(action.type){
    case 'COMPLETED':
      return action.number
    default: 
      return state
  }
}

export default completed