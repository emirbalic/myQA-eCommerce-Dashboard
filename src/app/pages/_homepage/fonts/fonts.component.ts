import { Component, OnInit } from '@angular/core';

interface FontParams{
  param: string
  value: number
}
@Component({
  selector: 'ngx-fonts',
  templateUrl: './fonts.component.html',
  styles: [
  ]
})
export class FontsComponent implements OnInit {

  fontParams: FontParams [];
  constructor() { }

  ngOnInit(): void {
    this.fontParams = [
      {
        param: 'Links on homepage', 
        value: 132
      },
      {
        param: 'Broken links', 
        value: 123
      },
      {
        param: 'Redundant links', 
        value: 65
      }
    ];
  }
}
