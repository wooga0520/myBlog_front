import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { dummyPosts } from "../data/posts";

import "swiper/css";
import "swiper/css/pagination";

export default function Main() {
  const navigate = useNavigate();

  const viewDetail = (id) => {
    navigate(`/posts/${id}`);
  };

  return (
    <div className="bg-sky">
      <div className="wrapper main-wrapper">

        <section className="main-section intro-section">
          <h1 className="intro-title">기술 블로그 & 포트폴리오</h1>
          <p className="intro-text">
            백엔드 개발을 중심으로 공부한 내용과 프로젝트 경험을 정리합니다.
            기술 블로그이자 이력서로 활용 가능한 개인 웹 서비스입니다.
          </p>
        </section>

        <section className="main-section">
          <div className="section-header">
            <h2>인기 게시글</h2>
            <p>많이 조회된 기술 글을 한눈에 확인하세요</p>
          </div>

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500 }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {dummyPosts.map((post) => (
              <SwiperSlide key={post.id}>
                <div
                  className="card"
                  onClick={() => viewDetail(post.id)}
                >
                  <h3 className="card-title">{post.title}</h3>
                  <p className="card-excerpt">{post.excerpt}</p>
                  <span className="card-date">{post.date}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

      </div>
    </div>
  );
}
