import { Component } from '@angular/core';

@Component({
  selector: 'ngx-device-compatibility',
  templateUrl: 'device-compatibility.component.html',
  styleUrls: ['device-compatibility.component.scss'],
})
export class DeviceCompatibilityComponent {

    devices: { green_red: string, model: string, percentage: number }[] = [
    { green_red:'', model: 'Samsung Galaxy', percentage: 58 },
    { green_red:'', model: 'Apple', percentage: 42 },
    { green_red:'', model: 'Samsung s9', percentage: 0 },
    { green_red:'', model: 'Samsung s10', percentage: 66 },
    { green_red:'', model: 'Samsung A1', percentage: 43 },
  ];
}