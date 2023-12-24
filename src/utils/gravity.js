import { candies } from "./CandyData";
import store from "../store/store"
import { updateScore } from "../store/reducers/sweetSwapReducer";

const gravity = (board) => {
    let newBoard = board.map(row => row.slice());
    let hasChanged = false;
    let newBlocks = 0;
    for (let col = 0; col < newBoard.length; col++) {
        if (board[0][col] === "") {
            hasChanged = true;
            ++newBlocks;
            newBoard[0][col] = candies[Math.floor(Math.random() * candies.length)];
        }
    }
    store.dispatch(updateScore(newBlocks));
    if (hasChanged) {
        return newBoard;
    }

    for (let row = 1; row < newBoard.length; row++) {
        for (let col = 0; col < newBoard.length; col++) {
            if (newBoard[row][col] === "") {
                hasChanged = true;
                newBoard[row][col] = newBoard[row - 1][col];
                newBoard[row - 1][col] = "";
            }
        }
    }

    if (hasChanged) {
        return newBoard;
    }

    return false;

}

export default gravity;