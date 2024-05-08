import { configureStore} from '@reduxjs/toolkit';
import TodosSlice from './components/learning/todos/TodosSlice';

export default configureStore({
    reducer: {
        todos: TodosSlice
    }
})