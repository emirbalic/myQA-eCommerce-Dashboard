
import { Component } from '@angular/core';


@Component({
  selector: 'ngx-promos-performance',
  styleUrls: ['./promos-performance.component.scss'],
  templateUrl: './promos-performance.component.html',

})
export class PromosPerformanceComponent  {//implements AfterViewInit, OnDestroy
  percent: number = 56;
  radius: number = 50;
  color: string = '#c3e4f4';
}
