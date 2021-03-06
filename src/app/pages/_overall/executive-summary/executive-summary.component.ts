import { delay } from 'rxjs/operators';
import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

declare const echarts: any;

@Component({
  selector: 'ngx-executive-summary',
  styleUrls: ['./executive-summary.component.scss'],
  templateUrl: './executive-summary.component.html',
  // template: `
  //   <nb-card size="tiny" class="solar-card" routerLink="/pages/performance">
  //     <nb-card-header><i class="fas fa-circle exec"></i>  Executive summary </nb-card-header>
  //     <nb-card-body>
  //       <div echarts [options]="option" class="echart">
  //       </div>
  //       <div class="info">
  //         <div class="h4 value">5.3 sec</div>
  //         <div class="details subtitle-2">Load time</div>
  //       </div>
  //       <div class="info">
  //         <div class="h4 value">320</div>
  //         <div class="details subtitle-2">Nr of errors</div>
  //       </div>
  //     </nb-card-body>
  //   </nb-card>
  //   `,
})
export class ExecutiveSummaryComponent  {//implements AfterViewInit, OnDestroy

  percent: number = 68;
  radius: number = 50;
  color: string = '#8cb6ee';//#8cb6ee

  // private value = 0;

  // @Input('chartValue')
  // set chartValue(value: number) {
  //   this.value = value;

  //   if (this.option.series) {
  //     this.option.series[0].data[0].value = value;
  //     this.option.series[0].data[1].value = 100 - value;
  //     this.option.series[1].data[0].value = value;
  //   }
  // }

  // option: any = {};
  // themeSubscription: any;

  // constructor(private theme: NbThemeService) {
  // }

  // ngAfterViewInit() {
  //   this.themeSubscription = this.theme.getJsTheme().pipe(delay(1)).subscribe(config => {

  //     const solarTheme: any = config.variables.solar;

  //     this.option = Object.assign({}, {
  //       tooltip: {
  //         trigger: 'item',
  //         formatter: '{a} <br/>{b} : {c} ({d}%)',
  //       },
  //       series: [
  //         {
  //           name: ' ',
  //           clockWise: true,
  //           hoverAnimation: false,
  //           type: 'pie',
  //           center: ['45%', '50%'],
  //           radius: solarTheme.radius,
  //           data: [
  //             {
  //               value: this.value,
  //               name: ' ',
  //               label: {
  //                 normal: {
  //                   position: 'center',
  //                   formatter: '{d}%',
  //                   textStyle: {
  //                     fontSize: '22',
  //                     fontFamily: config.variables.fontSecondary,
  //                     fontWeight: '600',
  //                     color: config.variables.fgHeading,
  //                   },
  //                 },
  //               },
  //               tooltip: {
  //                 show: false,
  //               },
  //               itemStyle: {
  //                 normal: {
  //                   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
  //                     {
  //                       offset: 0,
  //                       color: solarTheme.gradientLeft,
  //                     },
  //                     {
  //                       offset: 1,
  //                       color: solarTheme.gradientRight,
  //                     },
  //                   ]),
  //                   shadowColor: solarTheme.shadowColor,
  //                   shadowBlur: 0,
  //                   shadowOffsetX: 0,
  //                   shadowOffsetY: 3,
  //                 },
  //               },
  //               hoverAnimation: false,
  //             },
  //             {
  //               value: 100 - this.value,
  //               name: ' ',
  //               tooltip: {
  //                 show: false,
  //               },
  //               label: {
  //                 normal: {
  //                   position: 'inner',
  //                 },
  //               },
  //               itemStyle: {
  //                 normal: {
  //                   color: solarTheme.secondSeriesFill,
  //                 },
  //               },
  //             },
  //           ],
  //         },
  //         {
  //           name: ' ',
  //           clockWise: true,
  //           hoverAnimation: false,
  //           type: 'pie',
  //           center: ['45%', '50%'],
  //           radius: solarTheme.radius,
  //           data: [
  //             {
  //               value: this.value,
  //               name: ' ',
  //               label: {
  //                 normal: {
  //                   position: 'inner',
  //                   show: false,
  //                 },
  //               },
  //               tooltip: {
  //                 show: false,
  //               },
  //               itemStyle: {
  //                 normal: {
  //                   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
  //                     {
  //                       offset: 0,
  //                       color: solarTheme.gradientLeft,
  //                     },
  //                     {
  //                       offset: 1,
  //                       color: solarTheme.gradientRight,
  //                     },
  //                   ]),
  //                   shadowColor: solarTheme.shadowColor,
  //                   shadowBlur: 7,
  //                 },
  //               },
  //               hoverAnimation: false,
  //             },
  //             {
  //               value: 28,
  //               name: ' ',
  //               tooltip: {
  //                 show: false,
  //               },
  //               label: {
  //                 normal: {
  //                   position: 'inner',
  //                 },
  //               },
  //               itemStyle: {
  //                 normal: {
  //                   color: 'none',
  //                 },
  //               },
  //             },
  //           ],
  //         },
  //       ],
  //     });
  //   });
  // }

  // ngOnDestroy() {
  //   this.themeSubscription.unsubscribe();
  // }
}
