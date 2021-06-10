/**
 *  Golf Scorecard v1.0.0
 *  Created by Chris Pajtas
 *
 *  Scorecard component that allows users to enter their score
 *
 * */
import React, { Component } from 'react';

const Scorecard = (props) => {
    return (
        <div>
            Players: {props.settings[0]} Rounds: {props.settings[1]}
        </div>
    );
}

export default Scorecard;