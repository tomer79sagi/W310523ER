import React, { useContext, useEffect, useReducer } from 'react'
import ProductNew from './ProductNew';
import ProductEdit from './ProductEdit';
import './ProductList.css';
import useAPI, { METHOD } from '../../hooks/useAPI';
import ProductView from './ProductView';

import APIContext from '../../contexts/APIContext';

const ProductList = () => {
      
    const [data, error, isLoading, apiCall] = useAPI();
    const apiURL = useContext(APIContext);

    const UI_STATE = {
        NONE: 'NONE',
        CREATE: 'CREATE',
        EDIT: 'EDIT',
        VIEW: 'VIEW'
    }

    const UI_ACTION = {
        NONE: 'NONE',
        GET_ALL: 'GET_ALL',
        DELETE_ONE: 'DELETE_ONE'
    }

    // ** useReducer hook stuff **
    // 1. Define the ACTION TYPES
    const ACTION_TYPES = {
        PRODUCT_HOVERED: 'PRODUCT_HOVERED',
        PRODUCT_UNHOVERED: 'PRODUCT_UNHOVERED',
        PRODUCTS_RECEIVED: 'PRODUCTS_RECEIVED',
        PRODUCT_CREATE: 'PRODUCT_CREATE',
        PRODUCT_CREATED: 'PRODUCT_CREATED',
        PRODUCT_EDIT: 'PRODUCT_EDIT',
        PRODUCT_UPDATED: 'PRODUCT_UPDATED',
        PRODUCT_VIEW: 'PRODUCT_VIEW',
        PRODUCT_DELETE: 'PRODUCT_DELETE',
        PRODUCT_DELETED: 'PRODUCT_DELETED'
    }

    // 2. Define the REDUCER function
    // INPUT: 'state' and 'action' objects
    // OUTPUT (return): new 'state'
    const reducer = (state, action) => {
        switch (action.type) {

            case ACTION_TYPES.PRODUCT_HOVERED:
                return { ...state, hoveredProduct: action.payload };

            case ACTION_TYPES.PRODUCT_UNHOVERED:
                return { ...state, hoveredProduct: null };

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
                
            case ACTION_TYPES.PRODUCT_DELETE:
                apiCall(apiURL, METHOD.DELETE, {id: action.payload.id});
                return { ...state, uiAction: UI_ACTION.DELETE_ONE, selectedProduct: action.payload };

            case ACTION_TYPES.PRODUCT_DELETED:
                return { ...state, uiAction: UI_ACTION.NONE, products: state.products.filter(p => p.id !== action.payload.id)};
        }
    }

    // 3. Define the initial state of the reducer
    const initialState = {
        products: null,
        selectedProduct: null,
        hoveredProduct: null,
        uiState: UI_STATE.NONE,
        uiAction: UI_ACTION.GET_ALL
    }

    // 4. Initialize the 'useReducer' hook
    const [state, dispatch] = useReducer(reducer, initialState);
    
    useEffect(() => {
        apiCall(apiURL, METHOD.GET_ALL);
    }, [apiURL]);

    useEffect(() => {
        if(data) {
            if (state.uiAction === UI_ACTION.GET_ALL) {
                const cleanedData = data.map(apiProduct => {
                    apiProduct.name = apiProduct.title;
                    delete apiProduct.title;
                    return apiProduct;
                });

                dispatch({type: ACTION_TYPES.PRODUCTS_RECEIVED, payload: cleanedData});
            } else if (state.uiAction === UI_ACTION.DELETE_ONE) {
                dispatch({type: ACTION_TYPES.PRODUCT_DELETED, payload: state.selectedProduct});
            }
        }
    }, [data, state.uiAction]);

    if (isLoading && !state.products) return <div>Loading...</div>
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

                    <table onMouseLeave={() => dispatch({ type: ACTION_TYPES.PRODUCT_UNHOVERED})}>

                        <tbody>

                            { state.products.map(product => (
                                <tr key={product.id}
                                    className={state.hoveredProduct && state.hoveredProduct.id === product.id ? 'hoveredProduct' : ''}
                                    onClick={() => dispatch({type: ACTION_TYPES.PRODUCT_VIEW, payload: product }) }
                                    onMouseEnter={() => dispatch({ type: ACTION_TYPES.PRODUCT_HOVERED, payload: product})}
                                >
                                    <td>{ product.id }</td>
                                    <td>{ product.name }</td>
                                    <td>{ product.price }</td>
                                    <td>
                                        { state.hoveredProduct && state.hoveredProduct.id === product.id && (
                                            <span>
                                                <button onClick={(e) => {
                                                    e.stopPropagation();
                                                    dispatch({type: ACTION_TYPES.PRODUCT_EDIT, payload: product }) 
                                                }}>Edit</button>
                                                &nbsp;
                                                <button onClick={(e) => {
                                                    e.stopPropagation();
                                                    dispatch({type: ACTION_TYPES.PRODUCT_DELETE, payload: product }) 
                                                }}>Delete</button>
                                            </span>
                                        )}
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
