import { Component, OnDestroy } from '@angular/core';
import { NbThemeService, NbColorHelper } from '@nebular/theme';

@Component({
  selector: 'ngx-e-comm-stability',
  template: `
    <chart type="line" [data]="data" [options]="options"></chart>
  `,
})
export class EcommStabilityComponent implements OnDestroy {
  data: any;
  options: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],//
        datasets: [

        {
          data: [18, 48, 77, 9, 100, 27, 40, 59, 80, 81, 56, 55],
          label: 'E-comm stability',
          backgroundColor: '#8cb6ee',//NbColorHelper.hexToRgbA(colors.info, 0.3),
          borderColor: colors.info,
        },
        ],
      };

      this.options = {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: chartjs.axisLineColor,
                // text: ''
              },
              ticks: {
                // fontColor: 'white'//chartjs.textColor,
                display: false
              },
            },
          ],
        },
        legend: {
          labels: {
            
            fontColor: chartjs.textColor,
          },
        },
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
