import { Component, OnInit } from '@angular/core';

interface SidebarParams{
  param: string
  value: string
}
@Component({
  selector: 'ngx-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  sidebarParams: SidebarParams [];
  constructor() { }

  ngOnInit(): void {
    this.sidebarParams = [
      {
        param: 'Implemented', 
        value: 'YES'
      },
      {
        param: 'Customizable', 
        value: 'YES'
      },
      {
        param: 'Levels of hierarchy', 
        value: '2'
      }
    ];
  }


}
