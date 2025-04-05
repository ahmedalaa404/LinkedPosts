import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private _httpClint:HttpClient) {


  }


  CreatePost(post:any){

    this._httpClint.post('https://jsonplaceholder.typicode.com/posts',post)
    
  }
}
