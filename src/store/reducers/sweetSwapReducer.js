import { createSlice } from "@reduxjs/toolkit";
import dragEndReducer from "./dragEndReducer";
import shimmerReducer from "./shimmerReducer";

const initialState = {
    board: [],
    boardSize: 6,
    swapStart: undefined,
    swapWith: undefined,
    shimmerCoordinates: [],
    isGravityActing: false
}

const sweetSwapSlice = createSlice({
    name: "sweetSwapSlice",
    initialState,
    reducers: {
        updateBoard: (state, action) => { state.board = action.payload; state.shimmerCoordinates = [] },
        onDragStart: (state, action) => { state.swapStart = action.payload },
        onDragDrop: (state, action) => { state.swapWith = action.payload },
        onDragEnd: dragEndReducer,
        shimmer: shimmerReducer,
        gravityActing: (state, action) => { state.isGravityActing = action.payload }
    }
})

export default sweetSwapSlice.reducer;
export const { gravityActing, shimmer, updateBoard, onDragStart, onDragDrop, onDragEnd } = sweetSwapSlice.actions;