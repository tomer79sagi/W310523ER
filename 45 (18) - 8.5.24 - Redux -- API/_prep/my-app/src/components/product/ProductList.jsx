import React, { useContext, useEffect, useReducer } from 'react'
import ProductNew from './ProductNew';
import ProductEdit from './ProductEdit';
import './ProductList.css';
import useAPI, { METHOD } from '../../hooks/useAPI';
import ProductView from './ProductView';

import APIContext from '../../contexts/APIContext';

import { produce } from 'immer';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from './ProductSlice';

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
                return produce(state, draftState => { draftState.hoveredProduct = action.payload });
    
            case ACTION_TYPES.PRODUCT_UNHOVERED:
                return produce(state, draftState => { draftState.hoveredProduct = null });
    
            case ACTION_TYPES.PRODUCTS_RECEIVED:
                return produce(state, draftState => { draftState.products = action.payload });

            case ACTION_TYPES.PRODUCT_CREATE:
                return produce(state, draftState => { draftState.uiState = UI_STATE.CREATE });

            case ACTION_TYPES.PRODUCT_CREATED:
                return produce(state, draftState => {
                    draftState.products.push(action.payload);
                    draftState.uiState = UI_STATE.NONE;
                });
    
            case ACTION_TYPES.PRODUCT_EDIT:
                return produce(state, draftState => {
                    draftState.selectedProduct = action.payload;
                    draftState.uiState = UI_STATE.EDIT;
                });

            case ACTION_TYPES.PRODUCT_UPDATED:
                return produce(state, draftState => {
                    const index = draftState.products.findIndex(p => p.id === action.payload.id);
                    if (index !== -1) {
                        draftState.products[index] = action.payload;
                    }
                    draftState.selectedProduct = null;
                    draftState.uiState = UI_STATE.NONE;
                });
    
            case ACTION_TYPES.PRODUCT_VIEW:
                return produce(state, draftState => {
                    draftState.selectedProduct = action.payload;
                    draftState.uiState = UI_STATE.VIEW;
                });
    
            case ACTION_TYPES.PRODUCT_DELETE:
                // Side effects like API calls typically shouldn't be inside reducers, consider moving this to middleware like redux-thunk or redux-saga
                apiCall(apiURL, METHOD.DELETE, {id: action.payload.id}); // Consider handling this outside
                return produce(state, draftState => {
                    draftState.uiAction = UI_ACTION.DELETE_ONE;
                    draftState.selectedProduct = action.payload;
                });
    
            case ACTION_TYPES.PRODUCT_DELETED:
                return produce(state, draftState => {
                    draftState.uiAction = UI_ACTION.NONE;
                    draftState.products = draftState.products.filter(p => p.id !== action.payload.id);
                });
    
            default:
                return state;
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
    const products = useSelector(s => s.products);
    const productStatus = useSelector(s => s.products.status);
    const dispatchRedux = useDispatch();


    useEffect(() => {
        dispatchRedux(fetchProducts());
    }, []);

    useEffect(() => {
        if (products && (productStatus === 'succeeded' || productStatus === 'deleted')) {
            let cleanedData = products.items.map(apiProduct => {
                let pCopy = {...apiProduct};
                pCopy.name = pCopy.title;
                delete pCopy.title;
                return pCopy;
            });

            dispatch({type: ACTION_TYPES.PRODUCTS_RECEIVED, payload: cleanedData});
        }
    }, [products]);

    
    // useEffect(() => {
    //     apiCall(apiURL, METHOD.GET_ALL);
    // }, [apiURL]);

    // useEffect(() => {
    //     if(data) {
    //         if (state.uiAction === UI_ACTION.GET_ALL) {
    //             const cleanedData = data.map(apiProduct => {
    //                 apiProduct.name = apiProduct.title;
    //                 delete apiProduct.title;
    //                 return apiProduct;
    //             });

    //             dispatch({type: ACTION_TYPES.PRODUCTS_RECEIVED, payload: cleanedData});
    //         } else if (state.uiAction === UI_ACTION.DELETE_ONE) {
    //             dispatch({type: ACTION_TYPES.PRODUCT_DELETED, payload: state.selectedProduct});
    //         }
    //     }
    // }, [data, state.uiAction]);

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
