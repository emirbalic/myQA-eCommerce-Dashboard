import { Component, OnInit } from '@angular/core';

interface PersistentBarParams{
  param: string
  value: string
}
@Component({
  selector: 'ngx-persistent-bar',
  templateUrl: './persistent-bar.component.html',
  styles: [
  ]
})
export class PersistentBarComponent implements OnInit {

  persistentBarParams: PersistentBarParams [];
  constructor() { }

  ngOnInit(): void {
    this.persistentBarParams = [

      {
        param: 'Back button', 
        value: '65'
      }
    ];
  }
}
