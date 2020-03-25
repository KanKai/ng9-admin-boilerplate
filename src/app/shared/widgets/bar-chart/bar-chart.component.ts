import { Component, OnInit, Input } from '@angular/core'
import * as Highcharts from 'highcharts'
import HC_exporting from 'highcharts/modules/exporting'

@Component({
  selector: 'app-widget-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
  @Input() data = { series: [], drillDownSeries: [] }

  chartOptions: {}
  Highcharts = Highcharts

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'column',
      },
      title: {
        text: 'DEMO Random DATA',
      },
      subtitle: {
        text: null,
      },
      accessibility: {
        announceNewData: {
          enabled: true,
        },
      },
      xAxis: {
        type: 'category',
      },
      yAxis: {
        title: {
          text: 'Total percent market share',
        },
      },
      legend: {
        enabled: false,
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: '{point.y:.1f}%',
          },
        },
      },

      tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat:
          '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>',
      },

      series: this.data.series,
      drilldown: {
        series: this.data.drillDownSeries,
      },
    }

    HC_exporting(Highcharts)

    setTimeout(() => {
      window.dispatchEvent(new Event('resize'))
    }, 300)
  }
}
