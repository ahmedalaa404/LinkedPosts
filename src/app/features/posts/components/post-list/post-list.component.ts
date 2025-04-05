import { Component, inject, PLATFORM_ID } from '@angular/core';
import { PostComponent } from '../post/post.component';
import { PostsService } from '../../services/posts.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-post-list',
  imports: [PostComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent {
  private readonly platform = inject(PLATFORM_ID);
  constructor(private _postService: PostsService) {
    if (isPlatformBrowser(this.platform)) {
      _postService.getAllPost().subscribe((data) => {
        console.log(data);
      });
    }
  }
}
