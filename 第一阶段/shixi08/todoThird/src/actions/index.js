let id = 1
// 添加的action
export const addTodo = value => ({
  type: 'ADD_TODO',
  id: id++,
  value,
  checked:false
})

export const toggleOneTodo = id => ({
  type: 'TOGGLE_ONETODO',
  id
})

export const toggleAllTodo = checked => ({
  type: 'TOGGLE_ALLTODO',
  checked
})

export const allCompleted = checked => ({
  type: 'COMPLETED',
  checked
})
