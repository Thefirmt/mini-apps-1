import React from 'react'
import Square from './Squares.jsx'


var Column = (props) => {
    var rowsTotal = [1, 2, 3, 4, 5, 6, 7]
    return (
        <div className="col" id={props.id} >
            {rowsTotal.map((row, i) => 
                <Square key={i} id={props.id+"row"+row} play={props.play} /> )}
        </div>
    )
}


export default Column;