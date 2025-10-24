import "../css/Home.css"
import { useEffect, useState } from "react";

export default function Home() {
  const [list, setList] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:8080/court")
    .then((res)=>res.json())
    .then((res)=>setList(res))
    .catch(err => console.error(err));
  },[]);
  return (
<div className="home container py-4">
  <h2>풋살장 예약 서비스</h2>
  <p>원하는 구장을 빠르게 확인하고 예약하세요!</p>

  <div className="list-group">
    {list.map((item) => (
      <div key={item.courtId} className="list-group-item p-3 mb-3">
        <div className="list-content">
          <div className="text">
            <h5>{item.courtName}</h5>
            <p>{item.location}</p>
            <p>⏰ {item.openTime} ~ {item.closeTime}</p>
            <p>💰 {item.fee.toLocaleString()}원 / 시간</p>
          </div>
          <div className="image">
            <img
              src={item.saveName || "/default-court.jpg"}
              className="img-fluid"
            />
          </div>
        </div>

        {/* 타임라인: 카드 하단 전체 */}
        <div className="timeline mt-3">
          {Array.from({ length: 24 }, (_, hour) => {
            const available = hour % 2 === 0;
            return (
              <div
                key={hour}
                title={`${hour}:00`}
                style={{ backgroundColor: available ? "#0d6efd" : "#e0e0e0" }}
              />
            );
          })}
        </div>
        <div className="timeline-labels">
          <span>00시</span>
          <span>12시</span>
          <span>24시</span>
        </div>
      </div>
    ))}
  </div>
</div>

  );
}