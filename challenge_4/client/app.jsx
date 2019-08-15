import React from 'react';
import ReactDOM from 'react-dom';
import Column from './Column.jsx'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            something: "here"
        }
        this.columns = [1, 2, 3, 4, 5, 6, 7];
        this.player = 1; //true is orange false is blue
        this.bluePos = [];
        this.orangePos = [];
        this.dropPiece = this.dropPiece.bind(this);
    }

    setTop() {
        this.columns.forEach((col) => {
            document.getElementById(`col${col}row1`).className = 'drop';
        })
    }

    dropPiece(loc) {
        var loc = loc.slice(0,7) //passed up on click
        for (var i = 7; i > 1; i--)
        if (!this.bluePos.includes(`${loc}${i}`) && !this.orangePos.includes(`${loc}${i}`)) {
            if(this.player) {
                console.log(`${loc}${i}`)
                document.getElementById(`${loc}${i}`).className = 'orange';
                this.orangePos.push(`${loc}${i}`);
                this.player = !this.player
                break;
            } else {
                document.getElementById(`${loc}${i}`).className = 'blue';
                this.bluePos.push(`${loc}${i}`);
                this.player = !this.player
                break;
            } 
        }
    }


    render() {
        return (
            <div className="gameboard">
                {this.columns.map((col, i) =>
                <Column key={i} id={"col"+col} play={this.dropPiece} />)}
            </div>
        )
    }

    
    componentDidMount() {
        this.setTop();
    }

}


ReactDOM.render(<App />, document.getElementById('app'));