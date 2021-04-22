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
import { ShoppingCartComponent } from './shopping-cart.component';



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
      ShoppingCartComponent
    ],
    providers: [
    ],
  })
  export class ShoppingCartModule { }
  