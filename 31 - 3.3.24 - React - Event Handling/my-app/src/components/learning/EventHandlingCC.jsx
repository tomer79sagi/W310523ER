import React, { Component } from 'react'

export default class EventHandlingCC extends Component {
    name = 'Tomer Sagi';

    handleClick(newName) {
        alert(newName);
    }

    render() {
        return (
        <div>
            <button onClick={() => this.handleClick(this.anem)}>Click Me (CC)!</button>
            {/* <button onClick={this.handleClick.bind(this)}>Click Me (CC)!</button> */}
        </div>
        )
    }
}
