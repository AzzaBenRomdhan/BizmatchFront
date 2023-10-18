import { HttpClientModule } from '@angular/common/http';
import { User } from './User';
import { Comment2 } from './Comment2';


export class Post {
  
    idpostBlog!: number;
    publishedDate!: Date;
    content!: string;
    title!: string;
    category!: string;
    isPublic!: boolean;
    user!: User;
    comments!: Comment2[];
    imagePosts!: any;
   totlalPosts!:any;
  
  }
  