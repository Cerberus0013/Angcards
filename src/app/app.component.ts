import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Neat tree',
      userName: 'nature',
      imageUrl: 'assets/tree.jpeg',
      content: 'I saw this neat tree today',
    },
    {
      title: 'SNowy Mountain',
      userName: 'mountainlover',
      imageUrl: 'assets/mountain.jpeg',
      content: 'I got lost on this mountain and I like mittens',
    },
    {
      title: 'biking',
      userName: 'nature',
      imageUrl: 'assets/biking.jpeg',
      content: 'I saw this neat bike today while biking',
    },
    {
      title: 'SNowy Mountain',
      userName: 'mountainlover',
      imageUrl: 'assets/mountain.jpeg',
      content: 'I got lost on this mountain and I like mittens',
    },
  ];
}
