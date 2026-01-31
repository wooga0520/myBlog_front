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
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16">

        {/* Intro Section */}
        <section className="mb-20 text-center">
          <h1 className="mb-6 font-serif text-4xl font-semibold tracking-tight md:text-5xl">
            기술 블로그 & 포트폴리오
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
            백엔드 개발을 중심으로 공부한 내용과 프로젝트 경험을 정리합니다.
            기술 블로그이자 이력서로 활용 가능한 개인 웹 서비스입니다.
          </p>
        </section>

        {/* Popular Posts */}
        <section>
          <div className="mb-8 flex flex-col gap-2">
            <h2 className="text-2xl font-semibold tracking-tight">
              인기 게시글
            </h2>
            <p className="text-sm text-muted-foreground">
              많이 조회된 기술 글을 한눈에 확인하세요
            </p>
          </div>

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
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
                <article
                  onClick={() => viewDetail(post.id)}
                  className="
                    group h-full cursor-pointer rounded-xl
                    border border-border bg-card p-6
                    transition-all duration-200
                    hover:-translate-y-1 hover:shadow-lg
                  "
                >
                  <h3 className="mb-2 text-lg font-semibold group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="text-xs text-muted-foreground">
                    {post.date}
                  </span>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

      </div>
    </main>
  );
}
