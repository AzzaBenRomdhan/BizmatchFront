import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  baseUrl='http://localhost:9090/Comment'

  constructor(private http: HttpClient) {
    this.http=http;
   }
   addComment( idpostBlog:number ,comment:Comment) { 
    return this.http.post(`${this.baseUrl +'/add'}/${idpostBlog}`,comment );
  }

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.baseUrl}`);
  }
 
  NbCommentsPerPost(idpostBlog:number) : Observable<any>{
    return this.http.get(`${this.baseUrl +'/NbCommentsPerPost'}/${idpostBlog}`)
  }
  CountTotComment() : Observable<any>{
    return this.http.get('http://localhost:9090/Comment/nbr/total_Compments')
  }

}
