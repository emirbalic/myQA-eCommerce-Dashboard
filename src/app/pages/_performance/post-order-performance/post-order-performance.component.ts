
import { Component } from '@angular/core';


@Component({
  selector: 'ngx-post-order-performance',
  styleUrls: ['./post-order-performance.component.scss'],
  templateUrl: './post-order-performance.component.html',

})
export class PostOrderPerformanceComponent  {//implements AfterViewInit, OnDestroy
  percent: number = 56;
  radius: number = 50;
  color: string = '#5ff2e8';
}
