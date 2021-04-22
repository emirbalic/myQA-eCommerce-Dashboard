import { Component } from '@angular/core';
import { takeWhile } from 'rxjs/operators' ;
import { SolarData } from '../../@core/data/solar';


@Component({
    selector: 'ngx-performance',
    templateUrl: './performance.component.html',
})
export class PerformanceComponent {

   
    private alive = true;
    solarValue: number;
    

    constructor(

        private solarService: SolarData) {
            
        this.solarService.getSolarData()
            .pipe(takeWhile(() => this.alive))
            .subscribe((data) => {
                this.solarValue = data;
            });
    }

    ngOnDestroy() {
        this.alive = false;
    }

}
