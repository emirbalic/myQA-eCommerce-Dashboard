
import { Component } from '@angular/core';


@Component({
  selector: 'ngx-search-performance',
  styleUrls: ['./search-performance.component.scss'],
  templateUrl: './search-performance.component.html',

})
export class SearchPerformanceComponent  {//implements AfterViewInit, OnDestroy
  percent: number = 95;
  radius: number = 50;
  color: string = '#e297ce';
}
