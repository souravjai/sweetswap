import { createSlice } from "@reduxjs/toolkit";
import dragEndReducer from "./dragEndReducer";

const initialState = {
    board: [],
    boardSize: 6,
    swapStart: undefined,
    swapWith: undefined
}

const sweetSwapSlice = createSlice({
    name: "sweetSwapSlice",
    initialState,
    reducers: {
        updateBoard: (state, action) => { state.board = action.payload },
        onDragStart: (state, action) => { state.swapStart = action.payload },
        onDragDrop: (state, action) => { state.swapWith = action.payload },
        onDragEnd: dragEndReducer
    }
})

export default sweetSwapSlice.reducer;
export const { updateBoard, onDragStart, onDragDrop, onDragEnd } = sweetSwapSlice.actions;