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
                <PageHeader title="My App Title"/>
                { this.props.text }
                <ProductList/>
                <Footer/>
            </div>
        );
    }
}
 
export default Home;