import { Routes, Route } from "react-router-dom";
import Home from "../home";

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
        </Routes>
    )
}