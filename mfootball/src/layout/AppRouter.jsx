import { Routes, Route } from "react-router-dom";
import Home from "../home";
import SignIn from "../users/SignIn";
import SignUp from "../users/Signup";

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/users/">
                <Route path="SignIn" element={<SignIn/>}></Route>
                <Route path="SignUp" element={<SignUp/>}></Route>
            </Route>
        </Routes>
    )
}