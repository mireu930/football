import { FaHome, FaUser, FaFutbol, FaMapMarkerAlt } from "react-icons/fa";
export default function Topbar() {
    return(
    <header className="topbar">
      <div className="leftGroup">
      <div className="logo"><a href="/">Ⓝ 뉴사운드 풋살장</a></div>
      <nav className="mainBar">
        <a href="/board/notice/list">공지사항</a>
        <a href="/reservation/home">예약하기</a>
      </nav>
    </div>
      <nav className="bar">
        <a href="/"><FaHome /></a>
        <a href="/users/SignIn"><FaUser /></a>
      </nav>
    </header>
    )
}