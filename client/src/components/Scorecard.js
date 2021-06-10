/* Contains the scorecard views and data */
import React, { Component } from 'react';

const Scorecard = (props) => {
    return (
        <div>
            Players: {props.settings[0]} Rounds: {props.settings[1]}
        </div>
    );
}

export default Scorecard;