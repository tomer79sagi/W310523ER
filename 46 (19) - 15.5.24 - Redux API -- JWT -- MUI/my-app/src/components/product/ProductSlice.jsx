import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// 1. GET_ALL
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response = await axios.get('https://fakestoreapi.com/products');
        return response.data;
    }
);
// 2. CREATE createAsyncThunk
// 3. UPDATE createAsyncThunk

// All externally dependant functions or logic must go into the 'extraReducers'
// The 'reducers' object relates to local / internal state updates only
export const ProductSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchProducts.pending, state => {
                state.status = 'loading'
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded',
                state.items = action.payload
            })
    }
});

export default ProductSlice.reducer;