
import { Component } from '@angular/core';


@Component({
  selector: 'ngx-homepage-performance',
  styleUrls: ['./homepage-performance.component.scss'],
  templateUrl: './homepage-performance.component.html',

})
export class HomepagePerformanceComponent  {//implements AfterViewInit, OnDestroy
  percent: number = 56;
  radius: number = 50;
  color: string = '#e297ce';
}
