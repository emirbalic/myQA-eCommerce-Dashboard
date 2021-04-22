import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators' ;
import { SolarData } from '../../@core/data/solar';


@Component({
    selector: 'ngx-overall',
    templateUrl: './overall.component.html',
})
export class OverallComponent {

   
    private alive = true;
    solarValue: number;
    

    constructor(private solarService: SolarData, private router: Router) {
            
        this.solarService.getSolarData()
            .pipe(takeWhile(() => this.alive))
            .subscribe((data) => {
                this.solarValue = data;
            });
    }

    linkToPerformance(){
        this.router.navigateByUrl('/pages/performance');
    }

    ngOnDestroy() {
        this.alive = false;
    }

}
