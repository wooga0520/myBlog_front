import { useNavigate } from "react-router-dom";
import { dummyPosts } from "../data/posts";

export default function Posts() {
  const navigate = useNavigate();

  const viewDetail = (id) => {
    navigate(`/posts/${id}`);
  };

  return (
    <section className="wrapper">
      <h1>📄 Posts</h1>

      <section className="card-grid">
        {dummyPosts.map((post) => (
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
    </section>
  );
}
