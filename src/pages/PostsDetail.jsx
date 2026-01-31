import { useParams } from "react-router-dom";
import { useState } from "react";
import { dummyPosts } from "../data/posts";

export default function PostDetail() {
  const { id } = useParams();

  const post = dummyPosts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-muted-foreground">
        ❌ 존재하지 않는 게시글입니다.
      </div>
    );
  }

  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [author, setAuthor] = useState(post.author);
  const [content, setContent] = useState(post.content);

  return (
    <article className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-16 space-y-10">

        {/* Title */}
        {isEdit ? (
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="
              w-full text-3xl font-serif font-bold tracking-tight
              bg-transparent border-b border-border pb-2
              focus:outline-none focus:border-foreground
            "
          />
        ) : (
          <h1 className="text-3xl font-serif font-bold tracking-tight">
            {title}
          </h1>
        )}

        {/* Meta */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          {isEdit ? (
            <>
              <input
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="
                  bg-transparent border-b border-border
                  focus:outline-none focus:border-foreground
                "
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
        <div className="prose prose-neutral max-w-none">
          {isEdit ? (
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="
                w-full min-h-[300px] resize-none
                bg-transparent border border-border rounded-lg p-4
                focus:outline-none focus:ring-1 focus:ring-foreground
              "
            />
          ) : (
            content.split("\n").map((line, idx) => (
              <p key={idx}>{line}</p>
            ))
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          {isEdit ? (
            <>
              <button
                className="
                  rounded-lg bg-foreground text-background
                  px-4 py-2 text-sm font-medium
                  hover:opacity-90
                "
              >
                저장
              </button>
              <button
                onClick={() => setIsEdit(false)}
                className="
                  rounded-lg border border-border
                  px-4 py-2 text-sm
                  hover:bg-muted
                "
              >
                취소
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEdit(true)}
              className="
                rounded-lg border border-border
                px-4 py-2 text-sm
                hover:bg-muted
              "
            >
              수정
            </button>
          )}
        </div>

      </div>
    </article>
  );
}
