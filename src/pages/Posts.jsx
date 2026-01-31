import { useNavigate } from "react-router-dom";
import { dummyPosts } from "../data/posts";

export default function Posts() {
  const navigate = useNavigate();

  const viewDetail = (id) => {
    navigate(`/posts/${id}`);
  };

  return (
    <section className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-16 space-y-10">

        {/* Title */}
        <header className="space-y-2">
          <h1 className="text-3xl font-serif font-bold tracking-tight">
            📄 Posts
          </h1>
          <p className="text-muted-foreground">
            지금까지 작성한 글 목록입니다.
          </p>
        </header>

        {/* Posts Grid */}
        <section className="grid gap-6 sm:grid-cols-2">
          {dummyPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => viewDetail(post.id)}
              className="
                group cursor-pointer rounded-xl border border-border bg-card p-6
                transition-all duration-200
                hover:-translate-y-1 hover:shadow-lg
              "
            >
              <h2 className="text-lg font-semibold leading-snug mb-2 group-hover:underline">
                {post.title}
              </h2>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              <span className="text-xs text-muted-foreground">
                {post.date}
              </span>
            </article>
          ))}
        </section>

      </div>
    </section>
  );
}
