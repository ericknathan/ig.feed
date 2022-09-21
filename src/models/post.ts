import { AuthorModel } from ".";

export interface PostModel {
  id: number;
  publishedAt: Date;
  author: AuthorModel;
  content: PostContentModel[];
}

export interface PostContentModel {
  type: 'paragraph' | 'link' | 'hashtags';
  content: string | string[];
}