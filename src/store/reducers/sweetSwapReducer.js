import { createSlice } from "@reduxjs/toolkit";
import dragEndAction from "./actions/dragEndAction";
import shimmerAction from "./actions/shimmerAction";

const initialState = {
    board: [],
    boardSize: 11,
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
        onDragEnd: dragEndAction,
        shimmer: shimmerAction,
        wrongShimmer: (state, action) => { state.wrongShimmer = action.payload },
        gravityActing: (state, action) => { state.isGravityActing = action.payload },
        updateScore: (state, action) => { state.score += action.payload }
    }
})

export default sweetSwapSlice.reducer;
export const { gravityActing, shimmer, updateBoard, onDragStart, onDragDrop, onDragEnd, updateScore, wrongShimmer } = sweetSwapSlice.actions;