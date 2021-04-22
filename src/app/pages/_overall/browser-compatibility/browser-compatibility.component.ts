import { Component } from '@angular/core';

@Component({
  selector: 'ngx-browser-compatibility',
  templateUrl: 'browser-compatibility.component.html',
  styleUrls: ['browser-compatibility.component.scss'],
})
export class BrowserCompatibilityComponent {

    browsers: { icon: string, type: string, percentage: number }[] = [
    { icon:'', type: 'Chrome', percentage: 58 },
    { icon:'', type: 'Safari', percentage: 42 },
   
  ];
}