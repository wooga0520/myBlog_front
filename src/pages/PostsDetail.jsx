import { useParams } from "react-router-dom";
import { useState } from "react";

const mockPost = {
  id: "1",
  title: "React로 블로그 만들기",
  author: "Park Jungwook",
  date: "2025.12.10",
  content: "React로 블로그를 만드는 과정을 정리합니다.\n\n라우터와 컴포넌트 구조가 핵심입니다.",
};

export default function PostDetail() {
  const { id } = useParams();
  const [isEdit, setIsEdit] = useState(false);

  const [title, setTitle] = useState(mockPost.title);
  const [author, setAuthor] = useState(mockPost.author);
  const [content, setContent] = useState(mockPost.content);

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
            <span>{mockPost.date}</span>
          </>
        ) : (
          <>
            <span>{author}</span>
            <span>·</span>
            <span>{mockPost.date}</span>
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
