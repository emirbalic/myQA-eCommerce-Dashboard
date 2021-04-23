import { Component, OnInit } from '@angular/core';

interface NavigationParams{
  param: string
  value: string
}
@Component({
  selector: 'ngx-navigation',
  templateUrl: './navigation.component.html',
  styles: [
  ]
})
export class NavigationComponent implements OnInit {

  navigationParams: NavigationParams [];
  constructor() { }

  ngOnInit(): void {
    this.navigationParams = [
      {
        param: 'Navigation toolbar', 
        value: 'YES'
      },
      {
        param: 'Bar icons', 
        value: 'YES'
      },
      {
        param: 'Right size of bar icons', 
        value: 'YES'
      },
      {
        param: 'Temporary hidden', 
        value: 'YES'
      },
      {
        param: 'Back button', 
        value: '65'
      }
    ];
  }


}
