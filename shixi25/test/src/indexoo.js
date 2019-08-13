import React,{Component} from 'react'
import ReactDom from 'react-dom'

/* class Test extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let arr = [1,2,3,4,5]
    const list = arr.map( item => 
      <li key={item}>
        {item}
      </li>
    )
    return <ul>{list}</ul>
  }
} */
// const { Provider, Consumer } = React.createContext('defaultValue')

// const ProviderComp = (props) => (
//   <Provider value={'realValue'}>
//     {props.children}
//   </Provider>
// )

// const ConsumerComp = () => (
//   <Consumer>
//     {(value) => <p>{value}</p>}
//   </Consumer>
// )

//创建Context组件
const {Provider,Consumer} = React.createContext({
  theme: '#000',
  toggle: () => {}, //向上下文设定一个回调方法
});

const themes = {
  dark: '#000',
  light: '#fff'
}
//运行APP
class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = () => { //设定toggle方法，会作为context参数传递
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };

    this.state = {
      theme: themes.light,
      toggle: this.toggle,
    };
  }

  render() {
    return (
      <Provider value={this.state}> 
        <Content />
      </Provider>
    );
  }
}

//中间组件
function Content() {
  return (
    <div>
      <Button />
    </div>
  );
}

//接收组件
function Button() {
  return (
    <Consumer>
      {({theme, toggle}) => (
        <button
          onClick={toggle} //调用回调
          style={{backgroundColor: theme}}>
          Toggle Theme
        </button>
      )}
    </Consumer>
  );
}

ReactDom.render(
  <App/>,
  document.getElementById('app')
)