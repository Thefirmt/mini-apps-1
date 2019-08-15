import React from 'react';

var Squares = (props) => {
    var color = { "background-color": "white" };
    if (props.play === 1) {
    color = { "background-color": "orange" };
    } else if (props.play === 2) {
    color = { "background-color": "blue" };
    }
    return (
        <div id={props.id} className="square" style={color}></div>
    )
}

export default Squares