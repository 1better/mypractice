export default function compose(...funcs) {
  if (funcs.length === 1) {
   return funcs[0]
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)))
  }
  
  //这样来操作中间件。 
  const chain = [A, B, C];
  dispatch = compose(...chain)(store.dispatch)
  
  // 类似于这种
  const chain = [A, B, C];
  let dispatch = store.dispatch;
  chain.reverse().map(middleware => {
  dispatch = middleware(dispatch);
  });
  
  //最后可以得到的结果
  A(B(C(dispatch)))