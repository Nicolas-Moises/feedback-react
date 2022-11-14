import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

import { Comment } from "./Comment";
import styles from "./Post.module.css";

import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { Avatar } from "./Avatar";

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: 'paragraph' | 'link'
  content: string;
}

interface PostPros {
  author: Author;
  publishedAt: Date;
  content: Content[];
}

export function Post({ author, publishedAt, content}: PostPros) {
  const [comments, setComments] = useState(["Hahahahaah boa"]);

  const [newCommentText, setNewCommentText] = useState("");

  {
    /* 
      format the date and hour
      npm i date-fns

      format (time to strings)
      formatDistanceToNow (compares how much time has passed with the current date)
    */
  }
  const publishedDateFormated = format(
    publishedAt,
    "d 'de' LLLL 'às' HH'h'mm",
    {
      locale: ptBR,
    }
  );

  const publishedDataRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(e: FormEvent) {
    e.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }
  function handleNewCommentChange(e: ChangeEvent<HTMLTextAreaElement>) {
    e.target.setCustomValidity("");
    setNewCommentText(e.target.value);
  }

  function handleNewCommentInvalid(e: InvalidEvent<HTMLTextAreaElement>) {
    e.target.setCustomValidity("This area is required");
  }

  function deleteComment(commentToDelete: string) {
    //delete comment at press the button Trash, method filter bring the array except the one of was selected
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment != commentToDelete;
    });
    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormated}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDataRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type == "link") {
            return (
              <p key={line.content}>
                <a>{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu Feedback</strong>
        <textarea
          name="comment"
          placeholder="Escreva um comentário..."
          value={newCommentText}
          onChange={handleNewCommentChange}
          required
          onInvalid={handleNewCommentInvalid}
        />
        <footer>
          <button
            className={styles.buttonForm}
            disabled={isNewCommentEmpty}
            type="submit"
          >
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
