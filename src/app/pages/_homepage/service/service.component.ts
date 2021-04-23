import { Component, OnInit } from '@angular/core';

interface ServiceParams{
  param: string
  value: string
}
@Component({
  selector: 'ngx-service',
  templateUrl: './service.component.html',
  styles: [
  ]
})
export class ServiceComponent implements OnInit {

  
  serviceParams: ServiceParams [];
  constructor() { }

  ngOnInit(): void {
    this.serviceParams = [
      {
        param: 'Email', 
        value: 'YES'
      },
      {
        param: 'Phone', 
        value: 'YES'
      },
      {
        param: 'Live chat', 
        value: 'NO'
      },
      {
        param: 'Viber, whatsapp', 
        value: 'NO'
      }
    ];
  }

}
