const createStore = function(reducer, initState) {
  let state = initState;
  let listeners = [];
  // subscride
  function subscribe(listener) {
    listeners.push(listener);
  }

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach(item => {
      item();
    });
  }

  function getState() {
    return state;
  }

  return {
    subscribe,
    dispatch,
    getState
  };
};

function oneReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return { ...state, count: ++state.count };
    case "CUT":
      return { ...state, count: --state.count };
    default:
      return state;
  }
}

function twoReducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.name
      };
    case "SET_DESCRIPTION":
      return {
        ...state,
        description: action.description
      };
    default:
      return state;
  }
}

const reducer = combineReducers({
  counter: oneReducer,
  info: twoReducer
});

function combineReducers(obj) {
  // counter info
  let reduceKeys = Object.keys(obj);

  return function combine(state = {}, action) {
    const nextState = {};

    reduceKeys.forEach(key => {
      const reducer = obj[key];
      const previousStateForKey = state[key];
      /*执行 分 reducer，获得新的state*/
      const nextStateForKey = reducer(previousStateForKey, action);
      nextState[key] = nextStateForKey;
    });

    console.log(nextState)
    return nextState
  };
}

let initState = {
  counter: {
    count: 0
  },
  info: {
    name: '前端九部',
    description: '我们都是前端爱好者！'
  }
}

let store = createStore(reducer, initState);

store.subscribe(() => {
  let state = store.getState();
  console.log(`${state.counter.count}+++${state.info.name}+++${state.info.description}`);
});

store.dispatch({ type: "ADD" });

store.dispatch({
  type: 'SET_NAME',
  name: '前端九部2号'
});