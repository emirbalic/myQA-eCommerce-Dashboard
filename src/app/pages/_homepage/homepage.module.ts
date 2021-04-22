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

import { ThemeModule } from '../../@theme/theme.module';
import { HomepageComponent } from './homepage.component';
// import { ExecutiveSummaryComponent } from './executive-summary/executive-summary.component';
// import { EcomStabilityChartComponent } from './e-com-stability/e-com-stability-chart.component';
// import { EcomStabilityComponent } from './e-com-stability/e-com-stability.component';
// import { EcomStabilityScoreboardComponent } from './e-com-stability-scoreboard/e-com-stability-scoreboard.component';
// import { MarketsComponent } from './markets/markets.component';
// import { OverallComponent } from './overall.component';
// import { BrowserCompatibilityComponent } from './browser-compatibility/browser-compatibility.component';
// import { DeviceCompatibilityComponent } from './device-compatibility/device-compatibility.component';


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
    ],
    declarations: [
        HomepageComponent
        // OverallComponent,
        // ExecutiveSummaryComponent,
        // EcomStabilityComponent,
        // EcomStabilityChartComponent,
        // EcomStabilityScoreboardComponent,
        // MarketsComponent,
        // BrowserCompatibilityComponent,
        // DeviceCompatibilityComponent
    ],
    providers: [
    ],
  })
  export class HomepageModule { }
  