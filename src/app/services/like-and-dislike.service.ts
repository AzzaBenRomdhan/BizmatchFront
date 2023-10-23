import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const baseUrl='http://localhost:9094/LikeP'

@Injectable({
  providedIn: 'root'
})
export class LikeAndDislikeService {
  constructor(private http: HttpClient) {this.http=http; }
  NbLikesPerPost(idpostBlog:any) : Observable<any>{
    return this.http.get(`${baseUrl +'/nbrLike'}/${idpostBlog}`)
  }

  NbDislikesPerPost(idpostBlog:any) : Observable<any>{
    return this.http.get(`http://localhost:9094/Dislike/nbrDislike/${idpostBlog}`)
  }


  countTotalLikes() : Observable<any>{
    return this.http.get('http://localhost:9094/LikeP/total_likes')
  }


  countTotaDisLikes() : Observable<any>{
    return this.http.get('http://localhost:9094/Dislike/total_dilikes')
  }

}
