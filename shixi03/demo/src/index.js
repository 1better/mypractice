import React,{Component} from 'react';
import ReactDom from 'react-dom';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <p>Hello World</p>
            </div>
        );
    }
}

export default App;

ReactDom.render(<App />,document.getElementById('root'));

