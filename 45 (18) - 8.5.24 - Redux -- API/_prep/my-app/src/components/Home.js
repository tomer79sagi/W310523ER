import './Home.css';
import React, { Component } from 'react';
import ProductList from './product/ProductList';
import PageHeader from './PageHeader';
import Footer from './Footer';

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <div className="home">
                <PageHeader/>
                { this.props.text }
                <ProductList/>
            </div>
        );
    }
}
 
export default Home;