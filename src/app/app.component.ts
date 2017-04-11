import {Component, OnInit} from '@angular/core';
import {HttpHandlerService} from './http-handler/http-handler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selector = 'users';
  users: Array<any>;
  currentUser: any;
  posts: Array<any>;
  currentPost: any;
  comments: Array<any>;
  constructor(private httpHandler: HttpHandlerService) { }
  ngOnInit() {
    this.httpHandler.get('https://jsonplaceholder.typicode.com/users', (res: any) => {
      this.users = res;
    });
  }
  userClicked(user: any) {
    this.currentUser = user;
    this.httpHandler.get('https://jsonplaceholder.typicode.com/posts?userId=' + user.id, (res: any) => {
      this.posts = res;
    });
    this.selector = 'posts';
  }
  postClicked(post: any) {
    this.currentPost = post;
    this.httpHandler.get('https://jsonplaceholder.typicode.com/comments?postId=' + post.id, (res: any) => {
      this.comments = res;
    });
    this.selector = 'comments';
  }
  emailClicked(email: string) {
    window.location.href = 'mailto:' + email;
  }
}
