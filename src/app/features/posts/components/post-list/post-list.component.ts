import { Component, inject, PLATFORM_ID } from '@angular/core';
import { PostComponent } from '../post/post.component';
import { PostsService } from '../../services/posts.service';
import { isPlatformBrowser } from '@angular/common';
import { Posts } from '../../model/posts/posts';

@Component({
  selector: 'app-post-list',
  imports: [PostComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent {
  private readonly platform = inject(PLATFORM_ID);
  posts: Posts[] = [];

  constructor(private _postService: PostsService) {
    this.getAllPost();
  }

  getAllPost() {
    if(isPlatformBrowser(this.platform))
    {
      this._postService.getAllPost().subscribe((res) => {
        this.posts = res.posts;
        console.log(this.posts);
      });
    }

  }
}



