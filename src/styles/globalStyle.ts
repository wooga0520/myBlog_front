import styled, { createGlobalStyle } from "styled-components";

/* ===== 전역 스타일 ===== */
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, "Noto Sans KR", sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

/* ===== 배경 ===== */
export const Background = styled.div`
  min-height: 100vh;
  background: linear-gradient(
    180deg,
    #eaf6ff 0%,
    #f5fbff 40%,
    #ffffff 100%
  );
`;

/* ===== 레이아웃 ===== */
export const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 3rem 1.5rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

/* ===== 자기소개 ===== */
export const IntroSection = styled.section`
  margin-bottom: 3.5rem;
`;

export const IntroTitle = styled.h1`
  font-size: 2.4rem;
  margin-bottom: 0.8rem;
  color: #1e3a5f;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const IntroText = styled.p`
  max-width: 720px;
  font-size: 1rem;
  line-height: 1.7;
  color: #4a6fa5;
`;

/* ===== 카드 그리드 ===== */
export const CardGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.8rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

/* ===== 카드 ===== */
export const Card = styled.article`
  background: #ffffff;
  border-radius: 18px;
  padding: 1.6rem;
  box-shadow: 0 10px 30px rgba(30, 58, 95, 0.08);
  transition: all 0.25s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 40px rgba(30, 58, 95, 0.14);
  }
`;

export const CardTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 0.6rem;
  color: #1e3a5f;
`;

export const CardExcerpt = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: #5c7fa3;
`;

export const CardDate = styled.span`
  display: block;
  margin-top: 1rem;
  font-size: 0.8rem;
  color: #8faac7;
`;

export default GlobalStyle;
