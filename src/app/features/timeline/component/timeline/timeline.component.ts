import { Component } from '@angular/core';
import { PostComponent } from "../../../posts/components/post/post.component";
import { PostListComponent } from "../../../posts/components/post-list/post-list.component";

@Component({
  selector: 'app-timeline',
  imports: [PostComponent, PostListComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {

}
