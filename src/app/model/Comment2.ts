import { Post } from "./post";
import { User } from "./User";

export class Comment2 {
    idcomment!:number;
    content!:string;
    publishedAt!:Date;
    post!:Post;
    user!:User;
}
