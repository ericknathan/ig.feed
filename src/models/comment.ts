import { AuthorModel } from ".";

export interface CommentModel {
  id: string;
  author: AuthorModel;
  content: string;
  publishedAt: Date;
  likes: number;
}