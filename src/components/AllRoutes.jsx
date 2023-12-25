import { Routes, Route } from "react-router-dom";
import Board from "./Board";
import Home from "./Home";

export default function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:level" element={<Board />} />
        </Routes>
    );
}