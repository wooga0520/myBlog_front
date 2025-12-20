import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { api } from "../utils/api";
import utils from "../utils/common.jsx";


export default function Login() {
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await api({
        url: "/auth/login",
        method: "POST",
        data: {
          userId,
          password,
        },
      });
    
      navigate("/");
    } catch (err) {
      utils.cmmnToast("아이디 또는 비밀번호가 올바르지 않습니다.");
    }
  };

  return (
    <div className="bg-sky">
      <div className="wrapper">
        <div className="login-container">
          <h1 className="login-title">로그인</h1>
          <p className="login-desc">
            아이디와 비밀번호를 입력해 주세요
          </p>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-field">
              <label htmlFor="userId">아이디</label>
              <input
                id="userId"
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="아이디를 입력하세요"
                required
              />
            </div>

            <div className="login-field">
              <label htmlFor="password">비밀번호</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호를 입력하세요"
                required
              />
            </div>

            {error && <p className="login-error">{error}</p>}

            <button type="submit" className="btn primary login-btn">
              로그인
            </button>
          </form>

          <div className="login-links">
            <Link to="/auth/join">회원가입</Link>
            <span className="divider">|</span>
            <Link to="/auth/find-id">아이디 찾기</Link>
            <span className="divider">|</span>
            <Link to="/auth/find-password">비밀번호 찾기</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
