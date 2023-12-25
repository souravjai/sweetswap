import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import initBoard from "../utils/initBoard"
import { gravityActing, shimmer, updateBoard,setBoardSize } from "../store/reducers/sweetSwapReducer"
import Tile from './Tile'
import moveCheckLogic from '../utils/moveCheckLogic'
import gravity from '../utils/gravity'

import logo from "../assets/logo.png"
import { useNavigate, useParams } from 'react-router'

function Board() {

    const { board, boardSize, shimmerCoordinates, isGravityActing ,wrongShimmer,score } = useSelector(state => state.sweetSwap)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const level = +useParams().level.replace("level=","");

    if(level<6 || level >10){
        alert("Aaiyen baigan!")
        navigate("/");
    }

    useEffect(()=>{
        dispatch(setBoardSize(level));
    },[dispatch,level])

    useEffect(() => {
        dispatch(updateBoard(initBoard(boardSize)));
    }, [boardSize, dispatch])


    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!isGravityActing) {
                const newBoard = moveCheckLogic(board);
                if (newBoard) {
                    dispatch(shimmer(newBoard));
                    setTimeout(() => {
                        dispatch(updateBoard(newBoard));
                    }, 500)
                }
            }

            const afterGravity = gravity(board);
            if (afterGravity) {
                dispatch(gravityActing(true));
                dispatch(updateBoard(afterGravity));
            } else {
                dispatch(gravityActing(false));
            }
        }, 150);
        return () => clearTimeout(timeout);
    }, [board, dispatch,isGravityActing])

    return (
        <>
        <header>
        <div className="logo">
            <img src={logo} alt="logo"/>
        </div>
        <div className="score">
            <span id="first-text" >Score: </span><span id="second-text"> {score}</span></div>
        </header>
        <div className="game-arena">
        <div className="board" style={{
            gridTemplate: `repeat(${boardSize},${100 / boardSize}%)/repeat(${boardSize},${100 / boardSize}%)`
        }}>
            {
                board.map((row, i) =>
                    row.map((candy, j) =>
                        <Tile
                            shimmering={shimmerCoordinates.some(coordinate => coordinate[0] === i && coordinate[1] === j)}
                            wrongShimmer={wrongShimmer.some(coordinate => coordinate[0] === i && coordinate[1] === j)}
                            row={i}
                            col={j}
                            candy={candy}
                            key={i * boardSize + j}
                            classNames={`${i === 0 ? "top" : ""} ${i === boardSize - 1 ? "bottom" : ""} ${j === 0 ? "left" : ""} ${j === boardSize - 1 ? "right" : ""}`.trim()}
                        />))
            }
        </div>
        </div>
        </>
    )
}

export default Board;
