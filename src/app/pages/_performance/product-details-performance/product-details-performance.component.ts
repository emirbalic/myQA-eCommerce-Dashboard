
import { Component } from '@angular/core';


@Component({
  selector: 'ngx-product-details-performance',
  styleUrls: ['./product-details-performance.component.scss'],
  templateUrl: './product-details-performance.component.html',

})
export class ProductDetailsPerformanceComponent  {//implements AfterViewInit, OnDestroy
  percent: number = 75;
  radius: number = 50;
  color: string = 'pink'
}
