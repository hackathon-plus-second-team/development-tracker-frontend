import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

type TUser = {
    email: string;
    password: string;
};

type TInitialState = {
    user: TUser | null;
    token: string | null;
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
    message: string | unknown;
};

const initialState: TInitialState = {
    user: null,
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
        return response.data;
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
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.user = null;
            });
    },
});

export default authSlice.reducer;
