

export default function Home() {
  return (
    <div className="bg-sky">
      <div className="wrapper">
        {/* Intro */}
        <section className="intro">
          <h1 className="intro-title">안녕하세요 👋</h1>
          <p className="intro-text">
            프론트엔드 개발을 좋아하는 개발자입니다.
            <br />
            React, TypeScript, UI/UX에 관심이 많고
            이 블로그에는 개발하면서 배운 것들을 기록합니다.
          </p>
        </section>
        {/* Profile */}
        <section className="profile">
          <h2 className="section-title">Profile</h2>

          <div className="profile-list">
            <div className="profile-item">
              <h3 className="profile-heading">🎓 학력</h3>
              <ul className="profile-ul">
                <li>
                  <strong>○○대학교 컴퓨터공학과</strong>
                  <span className="profile-period">2018.03 – 2022.02</span>
                </li>
              </ul>
            </div>

            <div className="profile-item">
              <h3 className="profile-heading">💼 경력</h3>
              <ul className="profile-ul">
                <li>
                  <strong>프론트엔드 개발자 · ○○회사</strong>
                  <span className="profile-period">2022.03 – 현재</span>
                  <p className="profile-desc">
                    React 기반 서비스 개발 및 UI 컴포넌트 설계
                  </p>
                </li>
              </ul>
            </div>

            <div className="profile-item">
              <h3 className="profile-heading">📄 자격증</h3>
              <ul className="profile-ul">
                <li>정보처리기사</li>
                <li>SQLD</li>
              </ul>
            </div>
          </div>
        </section>
        {/* Posts */}

      </div>
    </div>
  );
}
