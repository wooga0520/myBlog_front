export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-20">

        {/* Intro */}
        <section className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight">
            안녕하세요 👋
          </h1>

          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
            프론트엔드 개발을 좋아하는 개발자입니다.
            <br />
            React, TypeScript, UI/UX에 관심이 많고
            이 블로그에는 개발하면서 배운 것들을 기록합니다.
          </p>
        </section>

        {/* Profile */}
        <section className="space-y-10">
          <h2 className="text-2xl font-semibold tracking-tight">
            Profile
          </h2>

          <div className="grid gap-8 md:grid-cols-3">

            {/* Education */}
            <div className="rounded-xl border border-border bg-card p-6 space-y-4">
              <h3 className="text-lg font-semibold">
                🎓 학력
              </h3>

              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex flex-col gap-1">
                  <span className="font-medium text-foreground">
                    ○○대학교 컴퓨터공학과
                  </span>
                  <span>2018.03 – 2022.02</span>
                </li>
              </ul>
            </div>

            {/* Career */}
            <div className="rounded-xl border border-border bg-card p-6 space-y-4">
              <h3 className="text-lg font-semibold">
                💼 경력
              </h3>

              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex flex-col gap-1">
                  <span className="font-medium text-foreground">
                    프론트엔드 개발자 · ○○회사
                  </span>
                  <span>2022.03 – 현재</span>
                  <p className="leading-relaxed">
                    React 기반 서비스 개발 및 UI 컴포넌트 설계
                  </p>
                </li>
              </ul>
            </div>

            {/* Certificates */}
            <div className="rounded-xl border border-border bg-card p-6 space-y-4">
              <h3 className="text-lg font-semibold">
                📄 자격증
              </h3>

              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>정보처리기사</li>
                <li>SQLD</li>
              </ul>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
