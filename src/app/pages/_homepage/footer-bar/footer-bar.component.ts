import { Component, OnInit } from '@angular/core';

interface FooterBarParams{
  param: string
  value: string
}
@Component({
  selector: 'ngx-footer-bar',
  templateUrl: './footer-bar.component.html',
  styles: [
  ]
})
export class FooterBarComponent implements OnInit {

  footerBarParams: FooterBarParams [];
  constructor() { }

  ngOnInit(): void {
    this.footerBarParams = [

      {
        param: 'Company detail', 
        value: 'YES'
      }
    ];
  }


}
