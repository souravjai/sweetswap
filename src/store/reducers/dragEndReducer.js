import moveCheckLogic from "../../utils/moveCheckLogic";

const dragEndReducer = (state) => {
    if (!state.swapStart || !state.swapWith) return;
    const [start_row, start_col] = [+state.swapStart.getAttribute("candy-row"),
    +state.swapStart.getAttribute("candy-col")];

    const [end_row, end_col] = [+state.swapWith?.getAttribute("candy-row"),
    +state.swapWith.getAttribute("candy-col")]

    const valid_moves = [
        [start_row - 1, start_col],
        [start_row + 1, start_col],
        [start_row, start_col - 1],
        [start_row, start_col + 1]
    ]
    if (valid_moves.some(moves => moves.every((element, index) => element === [end_row, end_col][index]))) {

        let newBoard = state.board.map(row => row.slice())
        newBoard[start_row][start_col] = state.board[end_row][end_col];
        newBoard[end_row][end_col] = state.board[start_row][start_col];
        const checkIfValidSwap = moveCheckLogic(newBoard)

        if (checkIfValidSwap) {
            state.board = checkIfValidSwap;
        }
    }

    state.swapStart = undefined;
    state.swapWith = undefined;

}

export default dragEndReducer