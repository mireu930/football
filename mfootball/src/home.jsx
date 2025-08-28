
export default function Home() {
  return (
     <div className="home">
      <h2>풋살장 예약 서비스</h2>
      <p>원하는 구장을 빠르게 확인하고 예약하세요!</p>

      <div className="stadium-list">
        <div className="stadium-card">구장 1</div>
        <div className="stadium-card">구장 2</div>
        <div className="stadium-card">구장 3</div>
      </div>
    </div>
  );
}