import { Component, OnInit } from '@angular/core';

interface ColorParams{
  param: string
  value: string
}
@Component({
  selector: 'ngx-colors',
  templateUrl: './colors.component.html',
  styles: [
  ]
})
export class ColorsComponent implements OnInit {

  colorParams: ColorParams [];
  constructor() { }

  ngOnInit(): void {
    this.colorParams = [
      
      {
        param: 'API for custom colors', 
        value: 'YES'
      }
    ];
  }

}
