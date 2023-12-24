import { candies } from "./CandyData";

const candyBoard = (boardSize = 8) =>
    Array(boardSize).fill(null).map(rows =>
        Array(boardSize).fill(null)
            .map(tile => candies[Math.floor(Math.random() * candies.length)])
    )

export default candyBoard;