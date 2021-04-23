import { Component, OnInit } from '@angular/core';

interface SearchBarParams{
  param: string
  value: number
}
@Component({
  selector: 'ngx-search-bar',
  templateUrl: './search-bar.component.html',
  styles: [
  ]
})
export class SearchBarComponent implements OnInit {

  searchBarParams: SearchBarParams [];
  constructor() { }

  ngOnInit(): void {
    this.searchBarParams = [
      {
        param: 'Links on homepage', 
        value: 132
      },
      {
        param: 'Broken links', 
        value: 123
      },
      {
        param: 'Redundant links', 
        value: 65
      }
    ];
  }

}
