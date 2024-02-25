import './Home.css';
import React, { Component } from 'react';

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <div className="home">
                { this.props.text }
            </div>
        );
    }
}
 
export default Home;