import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "../actions/authAction";

const initialState = {
    isLoggedIn: false,
    user: null,
    token: null,
    error: null,
    loading: false,
    success: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        LoginSucces: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload.user;
            state.token = {accessToken: action.payload.accessToken, refreshToken: action.payload.refreshToken};
        },
        LogoutSuccess: (state) => {
            state.isLoggedIn = false;
            state.user = null;
            state.token = null;
        },
        FalsifySuccess: (state) => {
            state.success = false;
        },
        NullifyError: (state) => {
            state.error = null;
        },
        SetError: (state, action) => {
            state.error = action.payload.error;
        },
        SetLoading: (state, action) => {
            state.loading = action.payload.loading;
        },
    },
    extraReducers: (builder) => {
        //Login user
        builder.addCase(login.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.isLoggedIn = true;
            state.user = action.payload.user;
            state.token = {accessToken: action.payload.accessToken, refreshToken: action.payload.refreshToken};
        });
        builder.addCase(login.rejected, (state, action) => {
            state.loading = false;
            if (action.error instanceof Error) {
                state.error = action.error.message;
            } else {
                state.error = 'Failed to log into your account.';
            }
        });

        //register user
        builder.addCase(register.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(register.fulfilled, (state) => {
            state.loading = false;
            state.success = true;
        });
        builder.addCase(register.rejected, (state, action) => {
            state.loading = false;
            if (action.error) {
                state.error = action.error.message;
            } else {
                state.error = 'Failed to register your account';
            }
        });
    }
})

export const { LoginSucces, LogoutSuccess, FalsifySuccess, NullifyError, SetError, SetLoading } = authSlice.actions;
export default authSlice.reducer;