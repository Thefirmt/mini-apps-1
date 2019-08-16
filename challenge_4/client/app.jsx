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
        this.victory = [ 
            ['col1row7', 'col2row7', 'col3row7', 'col4row7'],
            ['col1row6', 'col2row6', 'col3row6', 'col4row6'],
            ['col1row5', 'col2row5', 'col3row5', 'col4row5'],
            ['col1row4', 'col2row4', 'col3row4', 'col4row4'],
            ['col1row3', 'col2row3', 'col3row3', 'col4row3'],
            ['col1row2', 'col2row2', 'col3row2', 'col4row2'],
            ['col1row1', 'col2row1', 'col3row1', 'col4row1'],
            ['col2row7', 'col3row7', 'col4row7', 'col5row7'],
            ['col2row6', 'col3row6', 'col4row6', 'col5row6'],
            ['col2row5', 'col3row5', 'col4row5', 'col5row5'],
            ['col2row4', 'col3row4', 'col4row4', 'col5row4'],
            ['col2row3', 'col3row3', 'col4row3', 'col5row3'],
            ['col2row2', 'col3row2', 'col4row2', 'col5row2'],
            ['col2row1', 'col3row1', 'col4row1', 'col5row1'],
            ['col3row7', 'col4row7', 'col5row7', 'col6row7'],
            ['col3row6', 'col4row6', 'col5row6', 'col6row6'],
            ['col3row5', 'col4row5', 'col5row5', 'col6row5'],
            ['col3row4', 'col4row4', 'col5row4', 'col6row4'],
            ['col3row3', 'col4row3', 'col5row3', 'col6row3'],
            ['col3row2', 'col4row2', 'col5row2', 'col6row2'],
            ['col3row1', 'col4row1', 'col5row1', 'col6row1']            
        ]
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
                document.getElementById(`${loc}${i}`).className = 'orange';
                this.orangePos.push(`${loc}${i}`);
                if (this.checkWin(this.orangePos)) {
                    document.getElementById('win').innerText = "ORANGE CONNECTED FOUR!"
                }
                this.player = !this.player
                break;
            } else {
                document.getElementById(`${loc}${i}`).className = 'blue';
                this.bluePos.push(`${loc}${i}`);
                if (this.checkWin(this.bluePos)) {
                    document.getElementById('win').innerText = "BLUE CONNECTED FOUR!"
                }
                this.player = !this.player
                break;
            } 
        }
    }

    checkWin(playerArr) {
        var endMatch = false
        for (var i =0; i < this.victory.length; i++) { //loops each possible win condition
            var count = 0 //counts how many matches per win condition
            for (var j = 0; j < this.victory[i].length; j++) { //checks each position in the win condition against the positions that player claimed
                if (playerArr.includes (this.victory[i][j])){
                    count ++
                    if (count === 4) {
                        endMatch = true
                    }
                }
            }
        }
        return endMatch;
    }

    render() {
        return (
            <div className="gameboard">
                <div id="win"></div>
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