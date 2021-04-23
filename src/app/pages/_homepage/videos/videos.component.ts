import { Component, OnInit } from '@angular/core';

interface VideoParams{
  param: string
  value: string
}
@Component({
  selector: 'ngx-videos',
  templateUrl: './videos.component.html',
  styles: [
  ]
})
export class VideosComponent implements OnInit {

  videoParams: VideoParams [];
  constructor() { }

  ngOnInit(): void {
    this.videoParams = [
      {
        param: 'Largest video size', 
        value: '15MB'
      },
      {
        param: 'Video with bugs', 
        value: '8'
      },
      {
        param: 'Full screen function', 
        value: 'YES'
      }
    ];
  }
}
