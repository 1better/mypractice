const completed = (state = 1,action) => {
  console.log(action)
  switch(action.type){
    case 'COMPLETED':
      return action.number
    default: {
      console.log(state)
      return state
    }
      
  }
}

export default completed