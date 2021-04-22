
import { Component } from '@angular/core';


@Component({
  selector: 'ngx-payment-performance',
  styleUrls: ['./payment-performance.component.scss'],
  templateUrl: './payment-performance.component.html',

})
export class PaymentPerformanceComponent  {//implements AfterViewInit, OnDestroy
  percent: number = 56;
  radius: number = 50;
  color: string = '#6dbfe8';
}
