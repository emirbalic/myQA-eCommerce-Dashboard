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
import { PromosComponent } from './promos.component';



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
      PromosComponent
    ],
    providers: [
    ],
  })
  export class PaymentsModule { }
  