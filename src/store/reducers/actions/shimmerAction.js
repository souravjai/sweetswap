const shimmerReducer = (state, action) => {
    let shimmeringCoordinates = [];
    for (let row = 0; row < action.payload.length; row++)
        for (let col = 0; col < action.payload.length; col++)
            if (action.payload[row][col] === "")
                shimmeringCoordinates.push([row, col])

    state.shimmerCoordinates = shimmeringCoordinates;
}

export default shimmerReducer;