import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import coursesReducer from './coursesSlice';
import skillsReducer from './skillsSlice';
import testsReducer from './testsSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        courses: coursesReducer,
        skills: skillsReducer,
        tests: testsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export default store;
