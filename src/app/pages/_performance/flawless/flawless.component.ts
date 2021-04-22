
import { Component } from '@angular/core';


@Component({
  selector: 'ngx-flawless',
  styleUrls: ['./flawless.component.scss'],
  templateUrl: './flawless.component.html',

})
export class FlawlessComponent  {//implements AfterViewInit, OnDestroy
  percent: number = 68;
  radius: number = 50;
  color: string = '#e698b4';
}
