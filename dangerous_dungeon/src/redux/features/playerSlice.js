import { createSlice } from '@reduxjs/toolkit';

const initState = {
    hp: 100,
    weapon: {
        name: 'fists',
        damage: 0
    },
    inventory: {
        torch: 3
    }
}

export const playerSlice = createSlice({
    name: 'player',
    initialState: initState,
    reducers:{
        //если мы хотим отнять здоровье, то просто передаем отрицательное значение
        changeHP: (state, action) =>{
            state.hp = state.hp + action.payload
        }
    }
})

export const {changeHP} = playerSlice.actions