import React, { useState, useEffect, useReducer } from 'react'
import ProductNew from './ProductNew';
import ProductEdit from './ProductEdit';
import './ProductList.css';
import useAPI, { METHOD } from '../../hooks/useAPI';
import ProductView from './ProductView';

const ProductList = () => {

    const UI_STATE = {
        NONE: 'NONE',
        CREATE: 'CREATE',
        EDIT: 'EDIT',
        VIEW: 'VIEW'
    }

    // ** useReducer hook stuff **
    // 1. Define the ACTION TYPES
    const ACTION_TYPES = {
        PRODUCTS_RECEIVED: 'PRODUCTS_RECEIVED',
        PRODUCT_CREATE: 'PRODUCT_CREATE',
        PRODUCT_CREATED: 'PRODUCT_CREATED',
        PRODUCT_EDIT: 'PRODUCT_EDIT',
        PRODUCT_UPDATED: 'PRODUCT_UPDATED',
        PRODUCT_VIEW: 'PRODUCT_VIEW'
    }

    // 2. Define the REDUCER function
    // INPUT: 'state' and 'action' objects
    // OUTPUT (return): new 'state'
    const reducer = (state, action) => {
        switch (action.type) {

            case ACTION_TYPES.PRODUCTS_RECEIVED:
                return { ...state, products: action.payload };

            case ACTION_TYPES.PRODUCT_CREATE:
                return { ...state, uiState: UI_STATE.CREATE };

            case ACTION_TYPES.PRODUCT_CREATED:
                return { ...state, products: [...state.products, action.payload], uiState: UI_STATE.NONE };

            case ACTION_TYPES.PRODUCT_EDIT:
                return { ...state, selectedProduct: action.payload, uiState: UI_STATE.EDIT };

            case ACTION_TYPES.PRODUCT_UPDATED:
                const productsNew = state.products.map(eProduct => eProduct.id === action.payload.id ? action.payload : eProduct);
                return { ...state, selectedProduct: null, products: productsNew, uiState: UI_STATE.NONE };

            case ACTION_TYPES.PRODUCT_VIEW:
                return { ...state, selectedProduct: action.payload, uiState: UI_STATE.VIEW };
        }
    }

    // 3. Define the initial state of the reducer
    const initialState = {
        products: null,
        selectedProduct: null,
        uiState: UI_STATE.NONE
    }

    // 4. Initialize the 'useReducer' hook
    const [state, dispatch] = useReducer(reducer, initialState);  
    const [data, error, isLoading, callAPI] = useAPI();
    
    useEffect(() => {
        callAPI('https://fakestoreapi.com/products', METHOD.GET_ALL);
    }, []);

    useEffect(() => {
        if(data) {
            const cleanedData = data.map(apiProduct => {
                apiProduct.name = apiProduct.title;
                delete apiProduct.title;
                return apiProduct;
            });

            dispatch({type: ACTION_TYPES.PRODUCTS_RECEIVED, payload: cleanedData});
        }
    }, [data]);

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error: { error }</div>
    if (!state.products) return <div>No results found</div>;

    return (
        <div className="mainScreen">

            <div>
                <h2 className='center'>Product List</h2>
                <button onClick={() => dispatch({type: ACTION_TYPES.PRODUCT_CREATE, payload: null})}>Add New Product</button>
            </div>

            <div className='mainContent'>

                <div>

                    <table>

                        <tbody>

                            { state.products.map(product => (
                                <tr key={product.id}>
                                    <td>{ product.id }</td>
                                    <td>{ product.name }</td>
                                    <td>{ product.price }</td>
                                    <td>
                                        <button onClick={() => dispatch({type: ACTION_TYPES.PRODUCT_VIEW, payload: product }) }>Show</button>
                                        <button onClick={() => dispatch({type: ACTION_TYPES.PRODUCT_EDIT, payload: product }) }>Edit</button>
                                    </td>
                                </tr>
                            ))}

                        </tbody>

                    </table>

                </div>

                <div className="detailsPanel">

                    <div>

                        {/* { uiState === UI_STATE.CREATE && <ProductNew callbackSuccess={productCreated}/> }    */}

                        { state.uiState === UI_STATE.CREATE && <ProductNew
                            callbackSuccess={(product) => dispatch({ type: ACTION_TYPES.PRODUCT_CREATED, payload: product }) }/> }  

                        { state.uiState === UI_STATE.EDIT && <ProductEdit 
                            selectedProduct={state.selectedProduct}
                            callbackSuccess={(product) => dispatch({ type: ACTION_TYPES.PRODUCT_UPDATED, payload: product })}/> }   

                        { state.uiState === UI_STATE.VIEW && <ProductView 
                            product={state.selectedProduct}/> } 

                    </div>

                </div>

            </div>

        </div>
    )
}

export default ProductList;
