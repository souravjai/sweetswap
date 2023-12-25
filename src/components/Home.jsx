import React, { useState } from "react";
import { useNavigate } from "react-router";
import logo from "../assets/logo.png";

export default function Home() {
    const [size, setSize] = useState(6);
    const navigate = useNavigate();


    const handleStart = () => {
        navigate(`/level=${size}`)
    }

    return (
        <>
            <header>
                <div className="logo big">
                    <img src={logo} alt="logo" />
                </div>
            </header>
            <div className="board-size-selector">
                <div className="board-size-text">
                    <div className="text">
                        <span className="first-text">Board</span>
                        <span className="second-text"> Size: {size}</span>
                    </div>
                </div>
                <br />
                <div className="levels">
                    {
                       [...Array.from({ length: 5 }, (_, i) => i + 6)].map(item_size => 
                            <div key={item_size} className="level">
                                <button 
                                className={`btn ${size===item_size?"selected":""}`} onClick={() => setSize(item_size)}>
                                    {item_size}
                                </button>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="start">
                <button className="start-btn" onClick={() => handleStart()}
                disabled={size===null}>Smash!</button>
            </div>
        </>
    );
}