import { createSlice } from "@reduxjs/toolkit";
import dragEndReducer from "./dragEndReducer";
import shimmerReducer from "./shimmerReducer";

const initialState = {
    board: [],
    boardSize: 6,
    swapStart: undefined,
    swapWith: undefined,
    shimmerCoordinates: [],
    wrongShimmer: [],
    isGravityActing: false,
    score: 0
}

const sweetSwapSlice = createSlice({
    name: "sweetSwapSlice",
    initialState,
    reducers: {
        updateBoard: (state, action) => { state.board = action.payload; state.shimmerCoordinates = []; state.wrongShimmer = [] },
        onDragStart: (state, action) => { state.swapStart = action.payload; state.wrongShimmer = [] },
        onDragDrop: (state, action) => { state.swapWith = action.payload },
        onDragEnd: dragEndReducer,
        shimmer: shimmerReducer,
        wrongShimmer: (state, action) => { state.wrongShimmer = action.payload },
        gravityActing: (state, action) => { state.isGravityActing = action.payload },
        updateScore: (state, action) => { state.score += action.payload }
    }
})

export default sweetSwapSlice.reducer;
export const { gravityActing, shimmer, updateBoard, onDragStart, onDragDrop, onDragEnd, updateScore, wrongShimmer } = sweetSwapSlice.actions;