import { HttpParams } from '@angular/common/http';
import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-e-com-stability-scoreboard',
  template: `
    <div echarts [options]="options" (chartClick)="onChartClick($event)" class="echart"></div>
  `,
})
export class EcomStabilityScoreboardComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService, private router: Router) {
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.danger, colors.warning],
        tooltip: {},
        legend: {
          // data: ['Values', 'Actual Spending'],
          //   data: ['Value'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        radar: {
          name: {
            textStyle: {
              color: echarts.textColor,
            },
          },
          indicator: [
            { name: 'HOMEPAGE', max: 6500, triggerEvent: true, },
            { name: 'POST ORDER', max: 16000, triggerEvent: true, },
            { name: 'PROMOS', max: 30000, triggerEvent: true, },
            { name: 'PAYMENT', max: 38000, triggerEvent: true, },
            { name: 'SHOPPING CART', max: 52000, triggerEvent: true, },
            { name: 'PRODUCT DETAILS', max: 25000, triggerEvent: true, },
            { name: 'SEARCH', max: 25000, triggerEvent: true, },

          ],
          splitArea: {
            areaStyle: {
              color: 'transparent',
            },
          },
        },
        series: [
          {
            // name: 'Budget vs Spending',
            type: 'radar',
            data: [
              {
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                name: 'Scores',
              },
              //   {
              //     value: [5000, 14000, 28000, 31000, 42000, 21000],
              //     name: 'Actual Spending',
              //   },
            ],
          },
        ],
      };
    });
  }

  onChartClick(ev: any) {
    switch (ev.name) {
      case 'POST ORDER':
        this.router.navigateByUrl('/pages/post-order');
        break;
      case 'HOMEPAGE':
        this.router.navigateByUrl('/pages/homepage');
        break;
      case 'PROMOS':
        this.router.navigateByUrl('/pages/promos');
        break;
      case 'PAYMENT':
        this.router.navigateByUrl('/pages/payments');
        break;
      case 'SHOPPING CART':
        this.router.navigateByUrl('/pages/shopping-cart');
        break;
      case 'PRODUCT DETAILS':
        this.router.navigateByUrl('/pages/product-details');
        break;
      case 'SEARCH':
        this.router.navigateByUrl('/pages/search');
        break;
      default:
        console.log('doesnt exist');
        break;
    }
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
