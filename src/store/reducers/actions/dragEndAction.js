import moveCheckLogic from "../../../utils/moveCheckLogic";

const dragEndReducer = (state) => {
    if (!state.swapStart || !state.swapWith) return;
    const [start_row, start_col] = [+state.swapStart.getAttribute("candy-row"),
    +state.swapStart.getAttribute("candy-col")];

    let [end_row, end_col] = [+state.swapWith?.getAttribute("candy-row"),
    +state.swapWith.getAttribute("candy-col")]

    if (start_row === end_row && start_col === end_col)
        return;

    const valid_moves = [
        [start_row - 1, start_col],
        [start_row + 1, start_col],
        [start_row, start_col - 1],
        [start_row, start_col + 1]
    ];

    [end_row, end_col] = valid_moves.reduce((acc, cur) => {
        const accDistance = Math.pow((end_row - acc[0]), 2) + Math.pow((end_col - acc[1]), 2)
        const curDistance = Math.pow((end_row - cur[0]), 2) + Math.pow((end_col - cur[1]), 2)
        return accDistance < curDistance ? acc : cur;
    })

    let newBoard = state.board.map(row => row.slice())
    newBoard[start_row][start_col] = state.board[end_row][end_col];
    newBoard[end_row][end_col] = state.board[start_row][start_col];
    const checkIfValidSwap = moveCheckLogic(newBoard)
    if (checkIfValidSwap) {
        state.board = newBoard;
    } else {
        state.wrongShimmer = [[start_row, start_col], [end_row, end_col]];
    }


    state.swapStart = undefined;
    state.swapWith = undefined;

}

export default dragEndReducer