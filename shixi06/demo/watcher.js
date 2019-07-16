/* class PubSub {
  constructor() {
    //处理的事情
    this.handles = {};
  }

  // 订阅事件
  on(eventType, handle) {
    if (!this.handles.hasOwnProperty(eventType)) {
      this.handles[eventType] = [];
    }
    if (typeof handle == 'function') {
      this.handles[eventType].push(handle);
    } else {
      throw new Error('缺少回调函数');
    }
    return this;
  }

  // 发布事件
  emit(eventType, ...args) {
    if (this.handles.hasOwnProperty(eventType)) {
      this.handles[eventType].forEach((item, key, arr) => {
        item.apply(null, args);
      })
    } else {
      throw new Error(`"${eventType}"事件未注册`);
    }
    return this;
  }

  // 删除事件
  off(eventType, handle) {
    if (!this.handles.hasOwnProperty(eventType)) {
      throw new Error(`"${eventType}"事件未注册`);
    } else if (typeof handle != 'function') {
      throw new Error('缺少回调函数');
    } else {
      this.handles[eventType].forEach((item, key, arr) => {
        if (item == handle) {
          arr.splice(key, 1);
        }
      })
    }
    return this; // 实现链式操作
  }
}

// 操作
let callback = function () {
  console.log('you are so nice');
}

let pubsub = new PubSub();
 */
class PubSub {
  constructor() {
    this.handles = []
  }
  //订阅事件
  on(eventType,handle) {
    if(!this.handles.hasOwnProperty(eventType)) {
      this.handles[eventType] = []
    }

    if(typeof handle == 'function') {
      this.handles[eventType].push(handle)
    }else {
      throw('缺少回调函数')
    }
    return this
  }

  //发布事件
  emit(eventType,...args) {
    if(this.handles.hasOwnProperty(eventType)) {
      this.handles[eventType].forEach((item ,key , arr) => {
        item.apply(null, args);
      })
    }  else {
      throw new Error(`${eventType}事件未注册`);
    }

    return this
  }

  //删除事件
  off(eventType,handle) {
    if (!this.handles.hasOwnProperty(eventType)) {
      throw new Error(`"${eventType}"事件未注册`);
    } else if (typeof handle != 'function') {
      throw new Error('缺少回调函数');
    } else {
      this.handles[eventType].forEach((item, indx) => {
        if (item == handle) {
          arr.splice(index, 1);
        }
      })
    }
    return this; // 实现链式操作
  }
}

let pubsub = new PubSub();

let callback = function () {
  console.log('you are so nice');
}

pubsub.on('completed', (...args) => {
  console.log(args.join(' '));
});

pubsub.on('completed',callback)

pubsub.emit('completed', 'what', 'a', 'fucking day');
pubsub.off('completed', callback);
pubsub.emit('completed', 'fucking', 'again');