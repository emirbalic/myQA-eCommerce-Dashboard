import { Component, OnInit } from '@angular/core';

interface Markets {
  flag: string, 
  country: string, 
  percentage: number
}
@Component({
  selector: 'ngx-markets',
  templateUrl: 'markets.component.html',
  styleUrls: ['markets.component.scss'],
})
export class MarketsComponent implements OnInit{

  markets: Markets[] = [];

  constructor() {}
  
  ngOnInit(): void {
    this.markets = [
      { flag: '../../../assets/images/flags/slovenia.png', country: 'Slovenija', percentage: 58 },
      { flag: '../../../assets/images/flags/hrvatska.png', country: ' Hrvaška', percentage: 42 },
      { flag: '../../../assets/images/flags/crnagora.png', country: 'Črna Gora', percentage: 43 },
      { flag: '../../../assets/images/flags/serbia.png', country: 'Srbija', percentage: 66 },
      { flag: '../../../assets/images/flags/bosnia_and_herzegovina.png', country: 'BiH', percentage: 0 },
    ]
  }
}


