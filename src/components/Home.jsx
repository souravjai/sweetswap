import React from 'react'
import logo from "../assets/logo.png"

export default function Home() {
    return (
        <>
            <header>
                <div className="logo big">
                    <img src={logo} alt="logo" />
                </div>
            </header>
            <div className="board-size-selector">
            <div className="board-size-text">
                <div className="text"><span className="first-text">Board</span><span className="second-text"> Size:</span></div>
                </div>
                <br/>
                <div className="levels">
                <div className="level"><button className="btn">6</button></div>
                <div className="level"><button className="btn">7</button></div>
                <div className="level"><button className="btn">8</button></div>
                <div className="level"><button className="btn">9</button></div>
                <div className="level"><button className="btn">10</button></div>
                </div>
            </div>
           
        </>
    )
}
