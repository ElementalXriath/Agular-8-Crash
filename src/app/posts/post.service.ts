import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})

export class PostService {
  private posts: Post[] = [];
  private postUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) {}

  getPost() {
    // this. Refering to the HTTP Const Abover. Use the get() method. Defing the url and subcribe so a subscription can be made.
    this.http.get<{message: string, posts: Post[]}>('http://localhost:3000/api/posts').subscribe((postData) => {
    this.posts = postData.posts;
    this.postUpdated.next([...this.posts]);
   });
  }

  getPostUpdatedListener() {
    return this.postUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = {id: null, title, content};
    this.http.post<{message: string}>('http://localhost:3000/api/posts', post).subscribe(responseData => {
    this.posts.push(post);
    this.postUpdated.next([...this.posts]);
    });

  }
}
