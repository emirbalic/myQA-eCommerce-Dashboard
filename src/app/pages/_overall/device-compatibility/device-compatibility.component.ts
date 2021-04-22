import { Component } from '@angular/core';

@Component({
  selector: 'ngx-device-compatibility',
  templateUrl: 'device-compatibility.component.html',
  styleUrls: ['device-compatibility.component.scss'],
})
export class DeviceCompatibilityComponent {


  status: boolean;
    devices: { status: boolean, model: string }[] = [
    { status: false, model: 'Samsung Galaxy' },
    { status: true, model: 'Apple' },
    { status: true, model: 'Samsung s9'},
    { status: false, model: 'Samsung s10' },
    { status: false, model: 'Samsung A1' },
  ]
}