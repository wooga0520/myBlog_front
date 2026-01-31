import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../utils/api";
import utils from "../utils/common.jsx";

export default function Login() {
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api({
        url: "/auth/login",
        method: "POST",
        data: { userId, password },
      });

      navigate("/");
    } catch {
      utils.cmmnToast("아이디 또는 비밀번호가 올바르지 않습니다.");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="rounded-xl border bg-card p-8 shadow-sm">
          {/* Title */}
          <h1 className="text-2xl font-bold text-center text-foreground">
            로그인
          </h1>
          <p className="mt-2 text-sm text-muted-foreground text-center">
            아이디와 비밀번호를 입력해 주세요
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div className="space-y-1">
              <label className="text-sm font-medium">아이디</label>
              <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="아이디를 입력하세요"
                required
                className="
                  w-full rounded-md border bg-background px-3 py-2 text-sm
                  focus:outline-none focus:ring-2 focus:ring-ring
                "
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium">비밀번호</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호를 입력하세요"
                required
                className="
                  w-full rounded-md border bg-background px-3 py-2 text-sm
                  focus:outline-none focus:ring-2 focus:ring-ring
                "
              />
            </div>

            <button
              type="submit"
              className="
                w-full rounded-md bg-primary text-primary-foreground
                py-2.5 text-sm font-medium
                hover:opacity-90 transition
              "
            >
              로그인
            </button>
          </form>

          {/* Links */}
          <div className="mt-6 flex justify-center gap-3 text-xs text-muted-foreground">
            <Link to="/auth/join" className="hover:text-foreground">
              회원가입
            </Link>
            <span>·</span>
            <Link to="/auth/find-id" className="hover:text-foreground">
              아이디 찾기
            </Link>
            <span>·</span>
            <Link to="/auth/find-password" className="hover:text-foreground">
              비밀번호 찾기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
