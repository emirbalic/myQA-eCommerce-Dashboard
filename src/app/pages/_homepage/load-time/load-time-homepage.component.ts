
import { Component, OnInit } from '@angular/core';

interface CardParams{
  param: string
  value: number
}
@Component({
  selector: 'ngx-load-time-homepage',
  styleUrls: ['./load-time-homepage.component.scss'],
  templateUrl: './load-time-homepage.component.html',

})
export class LoadTimeHomepageComponent implements OnInit {//implements AfterViewInit, OnDestroy
  percent: number = 56;
  radius: number = 50;
  color: string = '#4defcf';

  cardparams: CardParams []= [];

  constructor() {
   
  }
  ngOnInit(): void {
    this.cardparams = [
      {
        param: 'Delay to first byte', 
        value: 0.4
      },
      {
        param: 'Delay to rendering', 
        value: 12.3
      },
      {
        param: 'Delay to homepage', 
        value: 2
      }
    ];
  }
}
