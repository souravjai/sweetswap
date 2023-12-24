import { candies } from "./CandyData";

const gravity = (board) => {
    let newBoard = board.map(row => row.slice());
    let hasChanged = false;

    for (let col = 0; col < newBoard.length; col++) {
        if (board[0][col] === "") {
            hasChanged = true;
            newBoard[0][col] = candies[Math.floor(Math.random() * candies.length)];
        }
    }

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