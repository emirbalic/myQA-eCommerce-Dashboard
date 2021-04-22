import { Component } from '@angular/core';

@Component({
  selector: 'ngx-markets',
  templateUrl: 'markets.component.html',
  styleUrls: ['markets.component.scss'],
})
export class MarketsComponent {

    markets: { flag: string, country: string, percentage: number }[] = [
    { flag:'', country: 'Slovenija', percentage: 58 },
    { flag:'', country: 'Hrvaška', percentage: 42 },
    { flag:'', country: 'BiH', percentage: 0 },
    { flag:'', country: 'Srbija', percentage: 66 },
    { flag:'', country: 'Črna Gora', percentage: 43 },
  ];
}
