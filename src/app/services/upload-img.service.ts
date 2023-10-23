import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadImgService {

  private baseUrl = 'http://localhost:9094/UploadImg'

  constructor(private http: HttpClient) {this.http=http }
  uploadImage(idpostBlog: number, image: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', image);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.post(`${this.baseUrl}/upload/${idpostBlog}`, formData, { headers: headers });
  }

  getImageByPostBlogId(idpostBlog: number): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/img/${idpostBlog}`, { responseType: 'blob' });
  }
}
