import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/model/post';
import { CommentService } from 'src/app/services/comment.service';
import { PostService } from 'src/app/services/post.service';
import { UploadImgService } from 'src/app/services/upload-img.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  posts: any[]  = [];
  post2!: Post
  showComponentToAdd!: boolean;
  postId!: number;
  commentCount!: number
  postid2 =this.ac.snapshot.params['idpostBlog']
  imageData!: string;
  userId = 1;
  page = 1;
  itemsPerPage = 3;
  totalItems : any; 
  p: number = 1;
  total: number = 0;
  
  pp=new Post;
  id_User=1;
  image!: File;
  idpostBlog!: number;
  imageName!: string;
  imageUrl!: string;
  showUpload!:boolean;
  hideFormAdd!:boolean;
  showFormAdd!: boolean;
  
constructor(private s: PostService, private ac:ActivatedRoute,private comSer: CommentService,private imgSer: UploadImgService ,
              private router: Router, private http:HttpClient,private _formBuilder: FormBuilder ){}

  ngOnInit(): void {
      this.showComponentToAdd = false;
      this.posts
      this.gty(this.page)
      this.comSer.getComments(); 
    }

    firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    isLinear = false;
  

    gty(page: any) {
      this.http.get(`http://localhost:9094/PostBlog?page=${page}&size=${this.itemsPerPage}&sort=date,desc`).subscribe((posts: any) => {
        this.posts = posts;
        for (let i = 0; i < this.posts.length; i++) {
          const idpostBlog = this.posts[i].idpostBlog;
          this.getImage(idpostBlog, this.posts[i]);
        }
        this.posts = this.posts.reverse();
        this.totalItems = posts.totalPosts;
      });
    }
    
    
    getImage(idpostBlog: number, post: any) {
      this.imgSer.getImageByPostBlogId(idpostBlog).subscribe((data: Blob) => {
        const reader = new FileReader();
        reader.onload = () => {
          post.imageData = reader.result as string; // Store image data in post object
        };
        reader.readAsDataURL(data);
      });
    }
    
    showComponent(): void { this.showComponentToAdd = !this.showComponentToAdd; }
  
    showDetails(idpostBlog: number){ this.router.navigateByUrl(`blog-details/${idpostBlog}`);}

    deletePost(post: any): void {
        if (confirm('Are you sure you want to delete this post?')) {
          const idUser=1
          this.s.deletePost(idUser, post.idpostBlog).subscribe(() => {
            this.posts = this.posts.filter(p => p !== post);
          });
        }
      }

      updatePost(post: any): void {
        const idUser = 1;
        this.s.updatePost(post, idUser)
          .subscribe(
            () => {
              this.posts = this.posts.filter(p => p.idpostBlog !== post.idpostBlog);
              console.log('post updated successfully');
            },
            error => {
              console.log('error updating post:', error);
            }
          );
      }
      
    
  post = { user: { userName: '' },
           title: {title:''}
         };
      searchByNom() {
        if (!this.post || !this.post.user || !this.post.user.userName) {
          console.log('User is undefined');
          return;
        }
      
        this.s.findByUserNameOrderd(this.post.user.userName)
          .subscribe(
            data => {
              this.posts = data as Post[];
              console.log(data);
            },
            error => {
              console.log(error);
            });
      }

      showUploadImg(): void { this.showUpload = !this.showUpload;}

      hideForm() : void { this.hideFormAdd = !this.hideFormAdd;
                         this.showFormAdd = !this.showFormAdd }
    
      onImageChange(event : any) { this.image = event.target.files[0];}
    
      onUpload() {
        this.s.getLastId().subscribe(lastId => {
          this.imgSer.uploadImage(lastId, this.image).subscribe(res => {
            console.log(res);
            location.reload();
            this.showForm = false;
          });
        })
        
      }
    
      addP(f:any){
        this.s.addPost( this.id_User,f).subscribe(
          (data)=>{
            console.log('added and affected')
            //this.router.navigate(['/blog'])
          },    
          (error)=>{
            console.log(error)
          }
        )
      }
     
      showForm= false;
      hideAllForm(){
        this.showForm= !this.showForm
      }
}
