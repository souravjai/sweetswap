import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import initBoard from "../utils/initBoard"
import { updateBoard } from "../store/reducers/sweetSwapReducer"
import Tile from './Tile'
import moveCheckLogic from '../utils/moveCheckLogic'
import gravity from '../utils/gravity'

function Board() {

    const { board, boardSize } = useSelector(state => state.sweetSwap)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(updateBoard(initBoard(boardSize)));
    }, [boardSize, dispatch])


    useEffect(()=>{
        const timeout = setTimeout(()=>{
            const newBoard = moveCheckLogic(board);
            if(newBoard){
                dispatch(updateBoard(newBoard));
            }
          
            const afterGravity = gravity(board);
            if(afterGravity){
                dispatch(updateBoard(afterGravity));
            }
        },150);
        return ()=>clearTimeout(timeout);
    },[board,dispatch])

    return (
        <div className="board" style={{
            gridTemplate: `repeat(${boardSize},${100/boardSize}%)/repeat(${boardSize},${100/boardSize}%)`
        }}>
            {
                board.map((row, i) => 
                    row.map((candy, j) => 
                        <Tile 
                        row={i} 
                        col={j} 
                        candy={candy} 
                        key={i * boardSize + j} 
                        classNames={`${i===0 ? "top":""} ${i===boardSize-1 ? "bottom":""} ${j===0 ? "left":""} ${j===boardSize-1 ? "right":""}`.trim()}
                        />))
            }
        </div>
    )
}

export default Board;
