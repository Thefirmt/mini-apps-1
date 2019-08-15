import React from 'react';
import ReactDOM from 'react-dom';
import Square from './Squares.jsx'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            something: "here"
        }
    }

    firstMethod() {

    }

    render() {
        return (
            <div>
                <Square />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));