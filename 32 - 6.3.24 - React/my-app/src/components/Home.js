import './Home.css';
import React, { Component } from 'react';
import ProductList from './product/ProductList';

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <div className="home">
                { this.props.text }
                <ProductList/>
            </div>
        );
    }
}
 
export default Home;