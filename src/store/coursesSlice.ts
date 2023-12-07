import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { RootState } from './store';
type TSkill = {
    id: number;
    name: string;
    level: number;
};

type TCourse = {
    id: number;
    name: string;
    description: string;
    skills: TSkill[];
};

type TInitialState = {
    courses: TCourse[] | null;
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
    message: string | unknown;
};

const initialState: TInitialState = {
    courses: null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: '',
};

const json = localStorage.getItem('token');
const token = json && JSON.parse(json);

export const getCourses = createAsyncThunk('courses/getCourses', async (_, thunkAPI) => {
    try {
        const response = await axios.get('http://localhost/api/v1/courses/my/', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        const err = error as AxiosError;
        return thunkAPI.rejectWithValue(err.response?.data);
    }
});

const coursesSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCourses.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCourses.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.courses = action.payload;
            })
            .addCase(getCourses.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.courses = null;
            });
    },
});

export const getAllCourses = (state: RootState) => state.courses.courses;
export default coursesSlice.reducer;
