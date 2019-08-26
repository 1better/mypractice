// 函数防抖
// 不立即执行
var debounce = function(func,time) {
  let timer 
  return function() {
    if(timer) clearTimeout(timer)
    timer = setTimeout(()=>{
      func.apply(this)
    },time)
  }
}

// 不立即执行 就是在你执行完最后一个操作的时候在一定时间后才执行这个操作

// 立即执行
var debounceOnce = function(func,time) {
  let timer 
  return function() {
    if(timer) {
      clearTimeout(timer)
    }
    if(!timer) {
      // 加一个判断
      func.apply(this)
    }
    timer = setTimeout(()=>{
      timer = null
    },time)
    
  }
}
// 立即执行 就是你执行操作的时候立即执行一次，之后再操作不执行，只有再过了一段时间再操作才执行

// 函数节流
function throttle(func,time) {
  let timer
  return function() {

  }
}

// 一起判断 加一个参数
var debounceAll = function(func,time,ifOnce) {
  let timer 
  return function() {
    if(timer) clearTimeout(timer)
    if(ifOnce) {
      if(!timer) {
        // 加一个判断
        func.apply(this)
      }

      timer = setTimeout(()=>{
        timer = null
      },time)

    }else {
      timer = setTimeout(()=>{
        func.apply(this)
      },time)
    }  
  }
}

// 函数节流
// 用时间差判断
var throttle = function(func, time) {
  let preTime = 0;
  return function() {
      let nowTime = Date.now();
      if (nowTime - preTime > time) {
          func.apply(this);
          preTime = nowTime;
      }
  }
}

// setTimeout版
var throttleTime = function(func,time) {
  let timer 
  return function() {
    if(!timer) {
      timer = setTimeout(()=>{
        func.apply(this)
        if(timer) {
          timer = null
        }
      },time)
    }    
  }
}

// 节流就是执行操作过程中间隔一定时间执行一次