import { Routes, Route } from "react-router-dom";
import Center from "../center";
import Home from "../reservation/home";
import SignIn from "../users/SignIn";
import SignUp from "../users/Signup";
import List from "../board/notice/list";
import Detail from "../board/notice/detail";

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
            <Route path="/board/">
                <Route path="notice/">
                    <Route path="list" element={<List/>}></Route>
                    <Route path="detail" element={<Detail/>}></Route>
                </Route>
            </Route>
        </Routes>
    )
}