import '../css/LogIn.css'

export default function SignIn() {
    return (
    <div className="login-page">
      <div className="login-box">
        <h2>풋살장 예약 로그인</h2>
        {/* <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">이메일</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일을 입력하세요"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호를 입력하세요"
              required
            />
          </div>
          <button type="submit">로그인</button>
        </form> */}
        <p className="signup">
          계정이 없으신가요? <a href="/users/SignUp">회원가입</a>
        </p>
      </div>
    </div>
    )
}