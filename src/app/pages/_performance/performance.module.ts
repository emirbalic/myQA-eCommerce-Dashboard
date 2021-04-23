import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbTabsetModule,
  NbUserModule,
  NbIconModule,
  NbSelectModule,
  NbListModule,
} from '@nebular/theme';

import { NgxEchartsModule } from 'ngx-echarts';
import { ChartModule } from 'angular2-chartjs';

import { ThemeModule } from '../../@theme/theme.module';
// import { ExecutiveSummaryComponent } from './executive-summary/executive-summary.component';
import { FlawlessComponent } from './flawless/flawless.component';
// import { EcomStabilityChartComponent } from './e-com-stability/e-com-stability-chart.component';
// import { EcomStabilityComponent } from './e-com-stability/e-com-stability.component';
// import { EcomStabilityScoreboardComponent } from './e-com-stability-scoreboard/e-com-stability-scoreboard.component';
// import { MarketsComponent } from './markets/markets.component';
import { PerformanceComponent } from './performance.component';
// import { BrowserCompatibilityComponent } from './browser-compatibility/browser-compatibility.component';
// import { DeviceCompatibilityComponent } from './device-compatibility/device-compatibility.component';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProductDetailsPerformanceComponent } from './product-details-performance/product-details-performance.component';
import { HomepagePerformanceComponent } from './homepage-performance/homepage-performance.component';
import { SearchPerformanceComponent } from './search-performance/search-performance.component';
import { CartPerformanceComponent } from './cart-performance/cart-performance.component';
import { PaymentPerformanceComponent } from './payment-performance/payment-performance.component';
import { PromosPerformanceComponent } from './promos-performance/promos-performance.component';
import { PostOrderPerformanceComponent } from './post-order-performance/post-order-performance.component';
import { EcommStabilityComponent } from './e-comm-stability/e-comm-stability.component';

@NgModule({
    imports: [
      ThemeModule,
      NbCardModule,
      NbUserModule,
      NbButtonModule,
      NbIconModule,
      NbTabsetModule,
      NbSelectModule,
      NbListModule,
      NbProgressBarModule,
      ChartModule,
      NgxEchartsModule,
      NgCircleProgressModule.forRoot({})
    ],
    declarations: [
        PerformanceComponent,
        
        EcommStabilityComponent,
       
        FlawlessComponent,
        HomepagePerformanceComponent,
        ProductDetailsPerformanceComponent,
        SearchPerformanceComponent,
        CartPerformanceComponent,
        PaymentPerformanceComponent,
        PromosPerformanceComponent,
        PostOrderPerformanceComponent
   
    ],
    providers: [
    ],
  })
  export class PerformanceModule { }
  