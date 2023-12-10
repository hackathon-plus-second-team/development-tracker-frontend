import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { RootState } from './store';

type TSkill = {
    id:          number;
    name:        string;
    description: string;
    level:       number;
    levelTest:   number;
    userCources: UserCource[];
}

type UserCource = {
    id:   number;
    name: string;
}

type TInitialState = {
    currentSkill: TSkill | null;
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
    message: string | unknown;
};

const initialState: TInitialState = {
    currentSkill: null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: '',
};


const json = localStorage.getItem('token');
const token = json && JSON.parse(json);

export const getSkill = createAsyncThunk('skills/getSkill', async (id:string, thunkAPI) => {
    try {
        const response = await axios.get(`http://localhost/api/v1/skills/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error)
        const err = error as AxiosError;
        return thunkAPI.rejectWithValue(err.response?.data);
    }
});

const skillsSlice = createSlice({
    name: 'skills',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getSkill.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getSkill.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.currentSkill = action.payload;
            })
            .addCase(getSkill.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.currentSkill = null;
            });
    },
});

export const getCurrentSkill = (state: RootState) => state.skills.currentSkill;
export default skillsSlice.reducer;
