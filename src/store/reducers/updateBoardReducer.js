const updateBoardReducer = (state, action) => {
    console.log("Test");

    setTimeout(() => {
        state.board = action.payload;
        console.log("Done");
    }, 1000)
}

export default updateBoardReducer;