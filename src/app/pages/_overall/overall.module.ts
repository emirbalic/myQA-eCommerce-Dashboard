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
import { NgCircleProgressModule } from 'ng-circle-progress';


import { ThemeModule } from '../../@theme/theme.module';
import { ExecutiveSummaryComponent } from './executive-summary/executive-summary.component';
// import { EcomStabilityChartComponent } from './e-com-stability/e-com-stability-chart.component';
// import { EcomStabilityComponent } from './e-com-stability/e-com-stability.component';
import { EcommStabilityComponent } from './e-comm-stability/e-comm-stability.component';
import { EcomStabilityScoreboardComponent } from './e-com-stability-scoreboard/e-com-stability-scoreboard.component';
import { MarketsComponent } from './markets/markets.component';
import { OverallComponent } from './overall.component';
import { BrowserCompatibilityComponent } from './browser-compatibility/browser-compatibility.component';
import { DeviceCompatibilityComponent } from './device-compatibility/device-compatibility.component';
import { ChartModule } from 'angular2-chartjs';


@NgModule({
    imports: [
      ThemeModule,
      NbCardModule,
      NbUserModule,
      NbIconModule,
      NbButtonModule,
      NbTabsetModule,
      NbSelectModule,
      NbListModule,
      NbProgressBarModule,
      NgxEchartsModule,
      NgCircleProgressModule.forRoot({}),
      ChartModule
    ],
    declarations: [
        OverallComponent,
        ExecutiveSummaryComponent,
        // EcomStabilityComponent,
        EcommStabilityComponent,
        // EcomStabilityChartComponent,
        EcomStabilityScoreboardComponent,
        MarketsComponent,
        BrowserCompatibilityComponent,
        DeviceCompatibilityComponent
    ],
    providers: [
    ],
  })
  export class OverallModule { }
  