import React from 'react'
import { mapper } from '../utils/CandyData'
import { useDispatch } from 'react-redux'
import { onDragStart,onDragDrop,onDragEnd } from '../store/reducers/sweetSwapReducer'

export default function Tile({shimmering,row,col,candy,classNames}) {
    const dispatch = useDispatch()
    return (
        <div className={`candy ${shimmering?"shimmer":""} ${classNames}`} >
            {candy && <img candy-row={row} candy-col={col}
            draggable={true}
            onDragStart={(e)=>dispatch(onDragStart(e.target))}
            onDrop={(e)=>dispatch(onDragDrop(e.target))}
            onDragEnd={(e)=>dispatch(onDragEnd())}
            onDragOver={(e)=>e.preventDefault()}
            onDragEnter={(e)=>e.preventDefault()}
            onDragLeave={(e)=>e.preventDefault()}
            alt={"candy"} src={mapper(candy)}
            /> }
        </div>
    )
}
