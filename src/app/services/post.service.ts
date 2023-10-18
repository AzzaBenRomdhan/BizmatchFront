import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../model/post';
import { Observable } from 'rxjs';
import { Like } from '../model/like';
import { Dislike } from '../model/dislike';

const baseUrl='http://localhost:9090/PostBlog'

@Injectable({
  providedIn: 'root'
})


export class PostService {

  constructor(private http: HttpClient) {
    this.http=http;
   }
   addPost(id_User:number, post:Post) {
    return this.http.put( `${baseUrl +'/addAndAssignPostBlogToUser'}/${id_User}`,post);
  }
  
  getPostById(idpostBlog:any):Observable<Post> {
    return this.http.get<Post>(`${baseUrl +'/hi'}/${idpostBlog}`)
  }


  /*fetchPosts():Observable<Post[]> {
    return this.http.get<Post[]>(`${baseUrl}`);
  }*/

  addAndAssignLikeToPostAndUser( like: Like,idpostBlog: number){
    return this.http.post(`${baseUrl +'/like'}/${idpostBlog}`,like)
  }

  addAndAssignDislikeToPostAndUser( dislike: Dislike ,idpostBlog: number){
    return this.http.post(`${baseUrl +'/dislike'}/${idpostBlog}`,dislike)
  }

  getLastId(): Observable<number> {
    return this.http.get<number>(`${baseUrl}/lastidpost`);
  }
  deleteComment(idcomment: number, idpostBlog: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:9090/Comment/${idcomment}/${idpostBlog}`);
  }
  deletePost(idUser:number, idpostBlog: number): Observable<void>{
    return this.http.delete<void>(`${baseUrl +'/delete'}/${idUser}/${idpostBlog}`);
  }
  
  updatePost(postData:Post,idUser: number): Observable<void> {
    return this.http.put<void>(`${baseUrl}/posts/${postData.idpostBlog}/${idUser}`, postData);
  }
  findByUserNameOrderd(userName:string){
    return this.http.get(`${baseUrl}/chercher2/${userName}/`)
  }


  most_categoryUsed(): Observable<any>{
    return this.http.get(`${baseUrl}/most_categoryUsed`)
  }




}
