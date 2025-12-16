import { Link,useNavigate } from "react-router-dom";

export default function Posts() {
  const posts = [
    {
      id: 1,
      title: "React로 블로그 만들기",
      excerpt: "React Router와 컴포넌트 구조를 활용한 블로그 설계",
      date: "2025.12.10",
    },
    {
      id: 2,
      title: "Styled-components 디자인 팁",
      excerpt: "재사용 가능한 스타일 구조와 테마 관리",
      date: "2025.12.08",
    },
    {
      id: 3,
      title: "프론트엔드 개발자 성장기",
      excerpt: "주니어 개발자로서의 고민과 학습 기록",
      date: "2025.12.05",
    },
  ];

  const navigate = useNavigate();

  function viewDetail(id) {
    navigate(`/posts/${id}`);
  }

  return (
    <>
      <h1>📄 Posts</h1>
      <ul>
      <section className="card-grid">
        {posts.map((post) => (
          <article
            className="card"
            key={post.id}
            onClick={() => viewDetail(post.id)}
          >
            <h2 className="card-title">{post.title}</h2>
            <p className="card-excerpt">{post.excerpt}</p>
            <span className="card-date">{post.date}</span>
          </article>
        ))}
      </section>
      </ul>
    </>


    
  );
}
