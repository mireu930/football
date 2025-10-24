import "./css/center.css";
import { useEffect, useMemo, useState } from "react";

function Carousel() {
  const images = useMemo(
    () => [
      "/0.jpg",
      "/img00-1.jpg",
      "/풋살_규칙에_대해서_알아보아요.png",
    ],
    []
  );

  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIdx((prev) => (prev + 1) % images.length);
    }, 3000); // 3초마다 자동 전환
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="carousel">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`slide-${i + 1}`}
          className={`slide ${i === idx ? "active" : ""}`}
          loading="lazy"
        />
      ))}

      <div className="dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === idx ? "on" : ""}`}
            onClick={() => setIdx(i)}
            aria-label={`go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function NoticeTable() {
  // TODO: 실제 데이터를 API로 받아오면 됩니다.
  const rows = [
    { id: 3, title: "대관료 안내 (10월 업데이트)", views: 87 },
    { id: 2, title: "예약 시스템 점검 안내 (10/28 02:00~03:00)", views: 154 },
    { id: 1, title: "뉴사운드 풋살장 오픈 안내", views: 312 },
  ];

  return (
    <div className="card">
      <div className="card-header">
        <h3>공지사항</h3>
        <a className="more" href="/board/notice/list">더보기</a>
      </div>
      <table className="notice-table small">
        <thead>
          <tr>
            <th className="col-no">순번</th>
            <th className="col-title">제목</th>
            <th className="col-views">조회수</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id}>
              <td className="col-no">{r.id}</td>
              <td className="col-title title-cell">
                <a href={`/board/notice/${r.id}`}>{r.title}</a>
              </td>
              <td className="col-views">{r.views}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DateWeather() {
  const [now, setNow] = useState(new Date());
  const [wx, setWx] = useState({
    loading: true,
    temp: null,
    code: null,
    wind: null,
    error: null,
  });

  // 시간 갱신 (1분마다)
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(t);
  }, []);

  function formatDateTime(d) {
    return new Intl.DateTimeFormat("ko-KR", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: "Asia/Seoul",
    }).format(d);
  }

  // 날씨: geolocation → open-meteo
  useEffect(() => {
    function fetchWx(lat, lon) {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=Asia%2FSeoul`;
      fetch(url)
        .then((r) => r.json())
        .then((j) => {
          const cw = j.current_weather;
          setWx({
            loading: false,
            temp: cw?.temperature ?? null,
            code: cw?.weathercode ?? null,
            wind: cw?.windspeed ?? null,
            error: null,
          });
        })
        .catch(() =>
          setWx((p) => ({ ...p, loading: false, error: "날씨 조회 실패" }))
        );
    }

    // 위치 먼저 시도
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          fetchWx(pos.coords.latitude, pos.coords.longitude);
        },
        () => {
          // 실패 시 서울 좌표
          fetchWx(37.5665, 126.9780);
        },
        { maximumAge: 600_000, timeout: 5000 }
      );
    } else {
      fetchWx(37.5665, 126.9780);
    }
  }, []);

  const codeText = useMemo(() => {
    // 간단 매핑
    const c = wx.code;
    if (c == null) return "";
    if ([0].includes(c)) return "맑음";
    if ([1, 2].includes(c)) return "대체로 맑음";
    if ([3].includes(c)) return "흐림";
    if ([45, 48].includes(c)) return "안개";
    if ([51, 53, 55, 56, 57].includes(c)) return "이슬비";
    if ([61, 63, 65, 66, 67].includes(c)) return "비";
    if ([71, 73, 75, 77].includes(c)) return "눈";
    if ([80, 81, 82].includes(c)) return "소나기";
    if ([95, 96, 99].includes(c)) return "뇌우";
    return "알 수 없음";
  }, [wx.code]);

  return (
    <div className="card">
      <div className="card-header">
        <h3>오늘의 날짜 & 날씨</h3>
      </div>
      <div className="date-now">{formatDateTime(now)}</div>

      <div className="weather">
        {wx.loading ? (
          <div className="wx-row">날씨 불러오는 중…</div>
        ) : wx.error ? (
          <div className="wx-row error">{wx.error}</div>
        ) : (
          <>
            <div className="wx-row">
              <span className="wx-label">기온</span>
              <span className="wx-value">{wx.temp}°C</span>
            </div>
            <div className="wx-row">
              <span className="wx-label">상태</span>
              <span className="wx-value">{codeText}</span>
            </div>
            <div className="wx-row">
              <span className="wx-label">바람</span>
              <span className="wx-value">{wx.wind} m/s</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function Center() {
  return (
    <div className="home container py-4">
      <h2 className="home-title">홈</h2>

      {/* 상단 캐러셀 */}
      <Carousel />

      {/* 하단 2열 */}
      <div className="home-grid">
        <div className="left">
          <NoticeTable />
        </div>
        <div className="right">
          <DateWeather />
        </div>
      </div>
    </div>
  );
}
