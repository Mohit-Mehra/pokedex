import { createSlice } from "@reduxjs/toolkit";
import { AppTypeInitialState } from "../../utils/Types";

const initialState: AppTypeInitialState = {
    toasts: [],
    userInfo:undefined,
}

export const AppSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setToast: (state, action) => {
            const toasts = [...state.toasts];
            toasts.push(action.payload);
            state.toasts = toasts;
        },
        cleartoasts: (state) => {
      state.toasts = [];
    },
    setUserStatus:(state,action)=>{
        state.userInfo = action.payload
    }
    },
})
export const { setToast, cleartoasts,setUserStatus } = AppSlice.actions;