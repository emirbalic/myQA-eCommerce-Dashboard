import { Component, OnInit } from '@angular/core';

interface ImageParams{
  param: string
  value: number
}
@Component({
  selector: 'ngx-images',
  templateUrl: './images.component.html',
  styles: [
  ]
})
export class ImagesComponent implements OnInit {
imageParams: ImageParams [];

  constructor() { }

  ngOnInit(): void {

    this.imageParams = [
      {
        param: 'Broken images', 
        value: 132
      },
      {
        param: 'Size over 2MB', 
        value: 132
      },
      {
        param: 'Size 1MB to 2MB', 
        value: 132
      },
      {
        param: 'Size 500K to 1MB', 
        value: 123
      },
      {
        param: 'Size below 500K', 
        value: 65
      }
    ];

  }

}
