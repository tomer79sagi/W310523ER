import { configureStore} from '@reduxjs/toolkit';
import TodosSlice from './components/learning/todos/TodosSlice';
import ProductSlice from './components/product/ProductSlice';

export default configureStore({
    reducer: {
        todos: TodosSlice,
        products: ProductSlice
    }
})