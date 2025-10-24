import "../css/Home.css";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [list, setList] = useState([]);
  const mapRef = useRef(null);
  const defaultCenter = { lat: 37.5665, lng: 126.9780 }; // ✅ 초기 중심 (서울)

  useEffect(() => {
    fetch("http://localhost:8080/court")
      .then((res) => res.json())
      .then((res) => setList(res))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(defaultCenter.lat, defaultCenter.lng),
          level: 5,
        };
        const map = new window.kakao.maps.Map(container, options);
        mapRef.current = map;

      
        list.forEach((court) => {
          if (court.latitude && court.longitude) {
            const pos = new window.kakao.maps.LatLng(court.latitude, court.longitude);
            const marker = new window.kakao.maps.Marker({ position: pos });
            marker.setMap(map);

            const info = new window.kakao.maps.InfoWindow({
              content: `<div style="padding:5px;font-size:14px;">${court.courtName}</div>`,
            });
            window.kakao.maps.event.addListener(marker, "click", () => {
              info.open(map, marker);
            });
          }
        });
      });
    }
  }, [list]);

 
  const handleResetMap = () => {
    if (mapRef.current) {
      mapRef.current.setLevel(5);
      mapRef.current.setCenter(
        new window.kakao.maps.LatLng(defaultCenter.lat, defaultCenter.lng)
      );
    }
  };

  return (
    <div className="home container py-4">
      <h2>풋살장 예약 서비스</h2>
      <p>원하는 구장을 빠르게 확인하고 예약하세요!</p>

       <div className="map-wrapper">
        <div id="map" className="map-container"></div>
        <button className="map-reload" onClick={handleResetMap}>↻</button>
      </div>

      {/* 리스트 */}
      <div className="list-group">
        {list.map((item) => (
          <div key={item.courtId} className="list-group-item p-3 mb-3">
            <div className="list-content">
              <div className="text">
                <h5>{item.courtName}</h5>
                <p>{item.location}</p>
                <p>
                  ⏰ {item.openTime} ~ {item.closeTime}
                </p>
                <p>💰 {item.fee.toLocaleString()}원 / 시간</p>
              </div>
              <div className="image">
                <img
                  src={item.saveName || "/default-court.jpg"}
                  alt="court"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
