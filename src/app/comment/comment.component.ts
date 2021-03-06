import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  @Input() comment: any;
  constructor() { }
  emailClicked(email: string) {
    window.location.href = 'mailto:' + email;
  }
}
