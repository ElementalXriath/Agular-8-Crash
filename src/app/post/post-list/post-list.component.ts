import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostService } from '../post.service';
import { Post } from '../post.model';

@Component( {
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']

})

export class PostListComponent implements OnInit {
  posts: Post[] = [];
  private postSub: Subscription;


  constructor(public postService: PostService) {}

  ngOnInit(){
    this.posts = this.postService.getPost();
    this.postSub = this.postService.getPostUpdatedListener().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

}
