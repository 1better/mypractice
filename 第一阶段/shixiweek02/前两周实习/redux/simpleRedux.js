// 简单的状态修改
/* let state = {
  count: 1
}

console.log(state.count)

state.count = 2

console.log(state.count) */

//采用发布订阅实现count

/* let state = {
  count: 1
}

let listeners = []

function subscribe(listener) {
  listeners.push(listener)
}

function changeCount(count) {
  state.count = count
  listeners.forEach(item => {
    item()
  })
}

subscribe(()=>{
  console.log(state.count)
})

changeCount(3)
changeCount(5)
changeCount(7) */

//实现公共代码的封装，
const createStore = function (reducer,initState) {
  let state = initState 
  let listeners = []
  function subscribe(listener) {
    listeners.push(listener)
  }
  function dispatch(action) {
    //按照计划来 
    state = reducer(state,action)
    listeners.forEach(item =>{
      item()
    })
  }
  function getState () {
    return state 
  }

  dispatch({type:Symbol()})

  return {
    subscribe,
    dispatch,
    getState
  }
}

// let initState = {
//   counter: {
//     count: 0
//   },
//   info: {
//     name: '',
//     description: ''
//   }
// }

// let store = createStore(initState);

// store.subscribe(() => {
//   let state = store.getState();
//   console.log(`${state.info.name}：${state.info.description}`);
// });
// store.subscribe(() => {
//   let state = store.getState();
//   console.log(state.counter.count);
// });

// store.changeState({
//   ...store.getState(),
//   info: {
//     name: '前端九部',
//     description: '我们都是前端爱好者！'
//   }
// });

// store.changeState({
//   ...store.getState(),
//   counter: {
//     count: 1
//   }
// });

/* let initState = {
  count: 0
}
let store = createStore(reducer,initState);

store.subscribe(() => {
  let state = store.getState();
  console.log(state.count);
});
store.dispatch({
  type: 'INCREMENT'
});
store.dispatch({
  type: 'DECREMENT'
});
store.dispatch({
  count: 'abc'
});


//这样就可以随便修改数据的属性  需要加一个限制  type
function reducer(state,action) {
  switch(action.type) {
    case 'INCREMENT': 
      return {
        ...state,
        count: state.count + 1
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      }
    default: 
      return state
  }
} */

// let state = {
//   counter: {
//     count: 0
//   },
//   info: {
//     name: '前端九部',
//     description: '我们都是前端爱好者！'
//   }
// }

function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state;
  }
}

function InfoReducer(state, action) {
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.name
      }
    case 'SET_DESCRIPTION':
      return {
        ...state,
        description: action.description
      }
    default:
      return state;
  }
}

function combineReducers(reducers) {

  /* reducerKeys = ['counter', 'info']*/
  const reducerKeys = Object.keys(reducers)

  /*返回合并后的新的reducer函数*/
  return function combination(state = {}, action) {
    /*生成的新的state*/
    const nextState = {}

    /*遍历执行所有的reducers，整合成为一个新的state*/
    for (let i = 0; i < reducerKeys.length; i++) {
      const key = reducerKeys[i]
      const reducer = reducers[key]
      /*之前的 key 的 state*/
      const previousStateForKey = state[key]

      /*执行 分 reducer，获得新的state*/
      const nextStateForKey = reducer(previousStateForKey, action)

      nextState[key] = nextStateForKey
    }
    return nextState;
  }
}

const reducer = combineReducers({
  counter: counterReducer,
  info: InfoReducer
});

// let initState = {
//   counter: {
//     count: 0
//   },
//   info: {
//     name: '前端九部',
//     description: '我们都是前端爱好者！'
//   }
// }

// let store = createStore(reducer, initState);

// store.subscribe(() => {
//   let state = store.getState();
//   console.log(state.counter.count, state.info.name, state.info.description);
// });
// /*自增*/
// store.dispatch({
//   type: 'INCREMENT'
// });

// /*修改 name*/
// store.dispatch({
//   type: 'SET_NAME',
//   name: '前端九部2号'
// });

/*这里没有传 initState 哦 */
const store = createStore(reducer);
/*这里看看初始化的 state 是什么*/
console.dir(store.getState());
