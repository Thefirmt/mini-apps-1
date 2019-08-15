import React from 'react';

var Squares = (props) => {
    return (
        <div id={props.id} className="square" onClick={(event) => props.play(props.id)}></div>
    )
}

export default Squares