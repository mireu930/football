import { FaHome, FaUser, FaFutbol, FaMapMarkerAlt } from "react-icons/fa";
export default function Topbar() {
    return(
    <header className="topbar">
      <div className="logo"><a href="/">Ⓝ 뉴사운드 풋살장</a></div>
      <nav className="bar">
        <a href="/"><FaHome /></a>
        <a href="/mypage"><FaUser /></a>
      </nav>
    </header>
    )
}