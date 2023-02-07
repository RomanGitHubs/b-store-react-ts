export type CommentModel = {
  commentId: string,
  bookId: string,
  photo: string | null | undefined;
  author: string | undefined;
  timer: string,
  text: string
}
