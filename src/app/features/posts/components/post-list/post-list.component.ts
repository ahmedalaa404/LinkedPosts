import { Component } from '@angular/core';
import { PostComponent } from "../post/post.component";

@Component({
  selector: 'app-post-list',
  imports: [PostComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {

}
