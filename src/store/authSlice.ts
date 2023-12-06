import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

type TUser = {
    email: string;
    password: string;
};

type TInitialState = {
    token: string | null;
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
    message: string | unknown;
};

const initialState: TInitialState = {
    token: null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: '',
};

export const login = createAsyncThunk('auth/login', async ({ email, password }: TUser, thunkAPI) => {
    try {
        const response = await axios.post('http://localhost/api/v1/auth/signin/', {
            email,
            password,
        });
        response.data && localStorage.setItem('token', JSON.stringify(response.data.access));
        return response.data.access;
    } catch (error) {
        const err = error as AxiosError;
        return thunkAPI.rejectWithValue(err.response?.data);
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.token = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.token = null;
            });
    },
});

export default authSlice.reducer;
