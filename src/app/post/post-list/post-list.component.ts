import { Component } from '@angular/core';

@Component( {
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']

})

export class PostListComponent {
  posts = [
    {title: 'Post 1', content: '1 Post Content'},
    {title: 'Post 1', content: '1 Post Content'}
  ];
}
