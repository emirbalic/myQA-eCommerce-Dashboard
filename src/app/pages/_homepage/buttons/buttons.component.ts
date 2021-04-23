import { Component, OnInit } from '@angular/core';
interface ButtonsParams{
  param: string
  value: string
}
@Component({
  selector: 'ngx-buttons',
  templateUrl: './buttons.component.html',
  styles: [
  ]
})
export class ButtonsComponent implements OnInit {

  buttonsParams: ButtonsParams [];
  constructor() { }

  ngOnInit(): void {
    this.buttonsParams = [
      {
        param: 'Broken buttons', 
        value: 'YES'
      },
      {
        param: 'Bar icons', 
        value: 'YES'
      },
      {
        param: 'Back button', 
        value: '65'
      }
    ];
  }
}
