import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { RootState } from './store';

type TGoal = {
    id: number;
    name: string;
    deadline: Date;
    skills: Skill[];
    level: number;
};

type Skill = {
    id: number;
    name: string;
    level: number;
};

type TInputData ={
    name:string
    deadline: Date;
    skills: number[]
    id?:string
}

type TInitialState = {
    goals: TGoal[] | null;
    currentGoal: TGoal | null;
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
    message: string | unknown;
};

const initialState: TInitialState = {
    goals: null,
    currentGoal: null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: '',
};

const json = localStorage.getItem('token');
const token = json && JSON.parse(json);

export const getGoals = createAsyncThunk('goals/getGoals', async (_, thunkAPI) => {
    try {
        const response = await axios.get('http://localhost/api/v1/goals/', {
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

export const getGoal = createAsyncThunk('goals/getGoal', async (goalId, thunkAPI) => {
    try {
        const response = await axios.get('http://localhost/api/v1/goals/', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: goalId,
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        const err = error as AxiosError;
        return thunkAPI.rejectWithValue(err.response?.data);
    }
});

export const createGoal = createAsyncThunk('goals/creatGoal', async (goalData:TInputData, thunkAPI) => {
    try {
        const response = await axios.post('http://localhost/api/v1/goals/', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            goalData,
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        const err = error as AxiosError;
        return thunkAPI.rejectWithValue(err.response?.data);
    }
});

export const editGoal = createAsyncThunk('goals/creatGoal', async (goalData:TInputData, thunkAPI) => {

    try {
        const response = await axios.post('http://localhost/api/v1/goals/', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params:goalData.id,
            goalData,
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        const err = error as AxiosError;
        return thunkAPI.rejectWithValue(err.response?.data);
    }
});

const goalsSlice = createSlice({
    name: 'goals',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getGoals.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getGoals.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.goals = action.payload;
            })
            .addCase(getGoals.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.goals = null;
            })
            .addCase(getGoal.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getGoal.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.currentGoal = action.payload;
            })
            .addCase(getGoal.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.currentGoal = null;
            })
            .addCase(createGoal.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createGoal.fulfilled, (state) => {
                state.isLoading = false;
                state.isSuccess = true;
            })
            .addCase(createGoal.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
                state.goals = null;
            });
    },
});

export const selectAllGoals = (state: RootState) => state.goals.goals;
export const selectCurrentGoal = (state: RootState) => state.goals.currentGoal;

export default goalsSlice.reducer;
