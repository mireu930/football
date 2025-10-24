import { Routes, Route } from "react-router-dom";
import Center from "../center";
import Home from "../reservation/home";
import SignIn from "../users/SignIn";
import SignUp from "../users/Signup";

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Center/>}></Route>
            <Route path="/users/">
                <Route path="SignIn" element={<SignIn/>}></Route>
                <Route path="SignUp" element={<SignUp/>}></Route>
            </Route>
            <Route path="/reservation/">
                <Route path="home" element={<Home/>}></Route>
            </Route>
        </Routes>
    )
}