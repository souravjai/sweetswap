const moveCheckLogic = (board) => {

    const newBoard = board;
    const crushColoumnBoard = crushColoumn(newBoard);
    const crushRowBoard = crushRow(newBoard);

    return mergeBoard(crushColoumnBoard, crushRowBoard);

}

const crushRow = (board) => {
    let newBoard = board.map(row => row.slice())
    for (let row = 0; row < newBoard.length; row++) {
        for (let col = 0; col < newBoard.length - 2; col++) {
            if (newBoard[row][col] && newBoard[row][col] === newBoard[row][col + 1] && newBoard[row][col] === newBoard[row][col + 2]) {
                let currentBlock = newBoard[row][col];
                while (col < newBoard.length && currentBlock === newBoard[row][col]) {
                    newBoard[row][col] = null;
                    col++;
                }
                col--;
            }
        }
    }
    return newBoard;
}

const crushColoumn = (board) => {
    let newBoard = board.map(row => row.slice())

    for (let col = 0; col < newBoard.length; col++) {
        for (let row = 0; row < newBoard.length - 2; row++) {
            if (newBoard[row][col] && newBoard[row][col] === newBoard[row + 1][col] && newBoard[row][col] === newBoard[row + 2][col]) {
                let currentBlock = newBoard[row][col];
                while (row < newBoard.length && currentBlock === newBoard[row][col]) {
                    newBoard[row][col] = null;
                    row++;
                }
                row--;
            }
        }
    }
    return newBoard;
}

const mergeBoard = (crushColoumnBoard, crushRowBoard) => {
    let anyCrush = false;
    for (let i = 0; i < crushColoumnBoard.length; i++) {
        for (let j = 0; j < crushColoumnBoard.length; j++) {
            if (crushRowBoard[i][j] === null || crushColoumnBoard[i][j] === null) {
                anyCrush = true;
                crushColoumnBoard[i][j] = "";
            }
        }
    }
    if (!anyCrush)
        return false;
    return crushColoumnBoard;
}

export default moveCheckLogic;