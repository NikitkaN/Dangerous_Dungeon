import { configureStore } from '@reduxjs/toolkit';
import { playerSlice } from './features/playerSlice';

export const store = configureStore({
    reducer:{
        user: playerSlice.reducer
    }
})
