import { useParams } from "react-router-dom";
import { useState } from "react";
import { dummyPosts } from "../data/posts";

export default function PostDetail() {
  const { id } = useParams();

  // 🔑 URL id로 게시글 찾기
  const post = dummyPosts.find((p) => p.id === Number(id));

  // ❌ 없는 글 처리
  if (!post) {
    return <h2>❌ 존재하지 않는 게시글입니다.</h2>;
  }

  const [isEdit, setIsEdit] = useState(false);

  const [title, setTitle] = useState(post.title);
  const [author, setAuthor] = useState(post.author);
  const [content, setContent] = useState(post.content);

  return (
    <article className="post-detail">
      {/* Header */}
      {isEdit ? (
        <input
          className="post-title-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      ) : (
        <h1 className="post-title">{title}</h1>
      )}

      <div className="post-meta">
        {isEdit ? (
          <>
            <input
              className="post-meta-input"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <span>·</span>
            <span>{post.date}</span>
          </>
        ) : (
          <>
            <span>{author}</span>
            <span>·</span>
            <span>{post.date}</span>
          </>
        )}
      </div>

      {/* Content */}
      <div className="post-content">
        {isEdit ? (
          <textarea
            className="post-textarea"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        ) : (
          content.split("\n").map((line, idx) => (
            <p key={idx}>{line}</p>
          ))
        )}
      </div>

      {/* Actions */}
      <div className="post-actions">
        {isEdit ? (
          <>
            <button className="btn primary">저장</button>
            <button className="btn" onClick={() => setIsEdit(false)}>
              취소
            </button>
          </>
        ) : (
          <button className="btn" onClick={() => setIsEdit(true)}>
            수정
          </button>
        )}
      </div>
    </article>
  );
}
