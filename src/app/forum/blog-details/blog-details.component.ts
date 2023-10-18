import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Comment2 } from 'src/app/model/Comment2';
import { User } from 'src/app/model/User';
import { Dislike } from 'src/app/model/dislike';
import { Like } from 'src/app/model/like';
import { Post } from 'src/app/model/post';
import { CommentService } from 'src/app/services/comment.service';
import { LikeAndDislikeService } from 'src/app/services/like-and-dislike.service';
import { PostService } from 'src/app/services/post.service';
import { UploadImgService } from 'src/app/services/upload-img.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent {
  constructor(private s: PostService,private router: Router, private likeSer: LikeAndDislikeService,
    private ac: ActivatedRoute, private comSer: CommentService, private sanitizer: DomSanitizer,
    private userService: UserService, private imgSer: UploadImgService, private http: HttpClient) {}
    likeClicked =false;
    dislikeClicked =false;
    post!: Post;
    com!: boolean;
    commentCount!: number
    likeCount!: number 
    dislikeCount!: number
    Count!: number
    like: Like = new Like();
    dislike: Dislike = new Dislike();
    userId = 1;
    postid =this.ac.snapshot.params['idpostBlog']
    comment: Comment2 = new Comment2(); // Supposons que vous ayez déjà récupéré l'objet Comment à afficher
    user: User = new User();
    imageSrc: any;
    image:any;
    postResponse:any;
    imageData!: string;
    ngOnInit() {
    this.post;
    this.com = true;  
    this.s.getPostById(this.postid).subscribe((data) => {
          this.post= data;
          console.log(data);});
         this.getImage(this.postid)
                       
  // Call the service function to get the comment count
    this.comSer.NbCommentsPerPost(this.postid).subscribe((count) => {
    this.commentCount = count;
    location.reload;
    });
   
     // Nbr de like
     this.likeSer.NbLikesPerPost(this.postid).subscribe((count) => {
      this.likeCount = count;
      location.reload;
    });
  
    // Nbr de dislike
    this.likeSer.NbDislikesPerPost(this.postid).subscribe((count) => {
      this.dislikeCount = count;
      location.reload;
    });
  }
  
  deleteComment(comment: any): void {
    if (confirm('Are you sure you want to delete this comment?')) {
      const idUser=1;
      this.s.deleteComment(comment.idcomment, this.postid).subscribe(() => {
        this.router.navigate([`/blog-details/${this.postid}`]) 
        location.reload();  
      });
    }
  }
  
  onLikeClick() {
    this.s.addAndAssignLikeToPostAndUser(this.like, this.postid)
      .subscribe(() => {
        this.likeClicked = !this.likeClicked;
        console.log('like added');
   // Nbr de like
     this.likeSer.NbLikesPerPost(this.postid).subscribe(count => {
      this.likeCount = count;
      location.reload;
    });
  
      },    
      (error)=>{
        console.log(error)
      });
  }
  onDislikClick(){
    this.s.addAndAssignDislikeToPostAndUser(this.dislike, this.postid).subscribe(() => {
      this.dislikeClicked = !this.dislikeClicked;
      console.log('dislike added');
  // Nbr de like
   this.likeSer.NbDislikesPerPost(this.postid).subscribe(count => {
    this.dislikeCount = count;
    location.reload;
  });
  
    },    
    (error)=>{
      console.log(error)
    });
  }
  
  addComment(f:any){
    this.comSer.addComment(this.postid,f).subscribe((data)=>{
      console.log("comment added")
      this.s.getPostById(this.postid).subscribe((data) => {
        this.post= data;
        console.log(data);
      });
      this.comSer.NbCommentsPerPost(this.postid).subscribe(count => {
      this.commentCount = count;
      this.router.navigate(['/blog-details'])   
   });
    },    
    (error)=>{
      console.log(error)
    })
    }
    getImage(idpostBlog: number) {
        this.imgSer.getImageByPostBlogId(idpostBlog).subscribe((data: Blob) => {
          const reader = new FileReader();
          reader.onload = () => {
            this.imageData = reader.result as string;
          };
          reader.readAsDataURL(data);
        });
      }
}
