import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice';
import messageReducer from './reducers/messageSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    message: messageReducer,
    // tasks -> tasksCount, methods setTasksCount
    // loader -> isLoading, 
  }
});

export {store};