import { NgModule } from '@angular/core';
import {
  // NbButtonModule,
  NbCardModule,
  // NbProgressBarModule,
  // NbTabsetModule,
  // NbUserModule,
  NbIconModule,
  // NbSelectModule,
  NbListModule,
} from '@nebular/theme';

// import { NgxEchartsModule } from 'ngx-echarts';
import { NgCircleProgressModule } from 'ng-circle-progress';


import { ThemeModule } from '../../@theme/theme.module';
import { HomepageComponent } from './homepage.component';
import { LoadTimeHomepageComponent } from './load-time/load-time-homepage.component';
import { IssuesComponent } from './issues/issues.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ColorsComponent } from './colors/colors.component';
import { FontsComponent } from './fonts/fonts.component';
import { ImagesComponent } from './images/images.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PersistentBarComponent } from './persistent-bar/persistent-bar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ServiceComponent } from './service/service.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { VideosComponent } from './videos/videos.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';



@NgModule({
    imports: [
      ThemeModule,
      NbCardModule,
      // NbUserModule,
      NbIconModule,
      // NbButtonModule,
      // NbTabsetModule,
      // NbSelectModule,
      NbListModule,
      // NbProgressBarModule,
      // NgxEchartsModule,
      NgCircleProgressModule.forRoot({})
    ],
    declarations: [
        HomepageComponent,
        LoadTimeHomepageComponent,
        IssuesComponent,
        ButtonsComponent,
        ColorsComponent,
        FontsComponent,
        ImagesComponent,
        NavigationComponent,
        PersistentBarComponent,
        SearchBarComponent,
        ServiceComponent,
        SidebarComponent,
        VideosComponent,
        FooterBarComponent
    ],
    providers: [
    ],
  })
  export class HomepageModule { }
  