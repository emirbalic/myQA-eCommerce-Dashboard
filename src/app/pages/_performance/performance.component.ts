import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators' ;
import { SolarData } from '../../@core/data/solar';


@Component({
    selector: 'ngx-performance',
    templateUrl: './performance.component.html',
})
export class PerformanceComponent {

   
    // private alive = true;
    // solarValue: number;
    

    constructor(

        // private solarService: SolarData, 
        private router: Router) {
            
        // this.solarService.getSolarData()
        //     .pipe(takeWhile(() => this.alive))
        //     .subscribe((data) => {
        //         this.solarValue = data;
        //     });
    }
    linkToHomepage(){
        this.router.navigateByUrl('/pages/homepage');
    }
    linkToSearch(){
        this.router.navigateByUrl('/pages/search');
    }
    linkToProductDetails(){
        this.router.navigateByUrl('/pages/product-details');
    }
    linkToCart(){
        this.router.navigateByUrl('/pages/shopping-cart');
    }
    linkToPayment(){
        this.router.navigateByUrl('/pages/payments');
    }
    linkToPromos(){
        this.router.navigateByUrl('/pages/promos');
    }
    linkToPostOrder(){
        this.router.navigateByUrl('/pages/post-order');
    }


    // ngOnDestroy() {
    //     this.alive = false;
    // }

}
