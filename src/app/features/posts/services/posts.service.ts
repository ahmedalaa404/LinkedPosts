import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private _httpClint:HttpClient) {


  }


  CreatePost(post:FormData):Observable<any> {
    return this._httpClint.post(environment.baseUrl+'posts',post)

  }


  getAllPost():Observable<any> {
    return this._httpClint.get(environment.baseUrl+'posts')
  }

}
