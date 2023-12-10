import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { RootState } from './store';

type TTest = {
    id: number;
    name: string;
    skill: string;
    _get_count_questions: number;
    questions: TQuestion[];
};

export type TQuestion = {
    name: number;
    explanation: string;
    number: number;
    answers: TAnswer[];
};

export type TAnswer = {
    name: string;
    number: number;
};

type TResult = {
    current_skill_test: TCurrentSkillTest;
    best_skill_result: TBestSkillResult;
    recommendations: TRecommendations;
};

type TBestSkillResult = {
    id: number;
    name: string;
    level: number;
};

type TCurrentSkillTest = {
    skill: string;
    level_test: number;
    correct_answers: number;
    count_questions: number;
    percentage_correct: number;
};

type TRecommendations = {
    courses: TCourse[];
    articles: TArticle[];
};

type TArticle = {
    name: string;
    url: string;
};

type TCourse = {
    id: number;
    name: string;
    skills: string;
    description: string;
    url: string;
};

type TInitialState = {
    test: TTest | null;
    user_answers: TAnswer[];
    result: TResult | null;
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
    message: string | unknown;
};

const initialState: TInitialState = {
    test: null,
    user_answers: [],
    result: null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: '',
};

const json = localStorage.getItem('token');
const token = json && JSON.parse(json);

export const getTest = createAsyncThunk('tests/getTest', async (testId: string, thunkAPI) => {
    try {
        const response = await axios.get(`http://localhost/api/v1/tests/${testId}/`, {
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

export const getResult = createAsyncThunk('tests/getResult', async (testId: string, thunkAPI) => {
    try {
        const response = await axios.get(`http://localhost/api/v1/tests/${testId}/result`, {
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

export const sendAnswers = createAsyncThunk('tests/sendAnswer', async ({ user_answers, testId }: { user_answers: TAnswer[]; testId: number }, thunkAPI) => {
    try {
        const response = await axios.post(
            `http://localhost/api/v1/tests/${testId}/answer/`,
            { user_answers },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        );
        console.log(response.data);
        return response.data;
    } catch (error) {
        const err = error as AxiosError;
        return thunkAPI.rejectWithValue(err.response?.data);
    }
});

const testsSlice = createSlice({
    name: 'tests',
    initialState,
    reducers: {
        answerAdded: (state, action: PayloadAction<TAnswer>) => {
            state.user_answers.push(action.payload);
        },
        clearAnswers: (state) => {
            state.user_answers.length = 0;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTest.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getTest.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.test = action.payload;
            })
            .addCase(getTest.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.test = null;
            })
            .addCase(getResult.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getResult.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.result = action.payload;
            })
            .addCase(getResult.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.result = null;
            })
            .addCase(sendAnswers.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(sendAnswers.fulfilled, (state) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user_answers.length = 0;
            })
            .addCase(sendAnswers.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.user_answers.length = 0;
            });
    },
});

export const selectQuestions = (state: RootState) => state.tests.test;
export const selectResult = (state: RootState) => state.tests.result;
export const { answerAdded } = testsSlice.actions;

export default testsSlice.reducer;
