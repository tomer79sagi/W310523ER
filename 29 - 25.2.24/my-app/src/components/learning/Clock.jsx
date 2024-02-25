import React, { Component } from 'react'

class Clock extends Component {
    // -- MODEL --
    timerID = null;

    // -- CONTROLLER --
    // Initialize the 'state' object of the component
    constructor(props) {
        super(props);
        this.state = { 
            date: props.date
        };
    }

    // Finished MOUNTING phases --> Ready for updates
    componentDidMount = () => {
        console.log('componentDidMount');
        this.timerID = setInterval(() => {
            this.setState({
                date: new Date()
            });
        }, 1000);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        clearInterval(this.timerID);
    }

    // -- VIEW --
    render() {
        return (
            <div>
                <div>Clock</div>
                <div>{ this.state.date.toLocaleTimeString() }</div>
            </div>
        )
    }
}

export default Clock;