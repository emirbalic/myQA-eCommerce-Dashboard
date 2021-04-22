
import { Component } from '@angular/core';


@Component({
  selector: 'ngx-cart-performance',
  styleUrls: ['./cart-performance.component.scss'],
  templateUrl: './cart-performance.component.html',

})
export class CartPerformanceComponent  {//implements AfterViewInit, OnDestroy
  percent: number = 56;
  radius: number = 50;
  color: string = '#867cd0';
}

